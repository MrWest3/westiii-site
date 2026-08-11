import Anthropic from "@anthropic-ai/sdk";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import {
  OPENING_MESSAGE,
  parseLead,
  type ChatRequest,
  type Msg,
} from "../../../preview/vitamineral/constants";
import { sendNotification } from "../../../lib/notify";
import { PREVIEW_MODEL, SYSTEM_PROMPT } from "./prompt";

export const maxDuration = 60;

const anthropic = new Anthropic();
const redis = Redis.fromEnv();
const perMinute = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, "60 s"),
  prefix: "preview:rl",
});
const perHour = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(200, "1 h"),
  prefix: "preview:rl",
});

const UUID_V4_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_BODY_BYTES = 24 * 1024;
const COUNTER_TTL_SECONDS = 172800;
const MAX_TURNS = 15;

function isMessage(value: unknown): value is Msg {
  if (!value || typeof value !== "object") return false;

  const message = value as Partial<Msg>;
  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    message.content.length >= 1 &&
    (message.role === "user"
      ? message.content.length <= 600
      : message.content.length <= 4000)
  );
}

function parseRequest(raw: string): ChatRequest | null {
  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) return null;

  try {
    const body = JSON.parse(raw) as Partial<ChatRequest>;
    if (!body || !UUID_V4_RE.test(body.sessionId ?? "")) return null;
    if (!Array.isArray(body.messages)) return null;
    if (body.messages.length < 1 || body.messages.length > MAX_TURNS * 2 + 1) {
      return null;
    }
    if (!body.messages.every(isMessage)) return null;
    if (
      !body.messages.every(
        (message, index) =>
          message.role === (index % 2 === 0 ? "assistant" : "user")
      ) ||
      body.messages.at(-1)?.role !== "user"
    ) {
      return null;
    }
    if (
      body.messages[0].role !== "assistant" ||
      body.messages[0].content !== OPENING_MESSAGE
    ) {
      return null;
    }

    return {
      sessionId: body.sessionId as string,
      messages: body.messages,
    };
  } catch {
    return null;
  }
}

function budgetKeys() {
  const date = new Date().toISOString().slice(0, 10);
  return {
    conversations: `preview:budget:${date}:convos`,
    turns: `preview:budget:${date}:turns`,
  };
}

async function incrementBudget(key: string) {
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, COUNTER_TTL_SECONDS);
  return count;
}

function busy(status: 429 | 503) {
  return NextResponse.json({ error: "busy" }, { status });
}

export async function POST(request: Request) {
  const body = parseRequest(await request.text());
  if (!body) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const [minuteLimit, hourLimit] = await Promise.all([
      perMinute.limit(`minute:${ip}`),
      perHour.limit(`hour:${ip}`),
    ]);
    if (!minuteLimit.success || !hourLimit.success) return busy(429);

    const keys = budgetKeys();
    if (body.messages.length === 2) {
      const conversations = await incrementBudget(keys.conversations);
      if (conversations > 100) return busy(503);
    }

    const turnsToday = await incrementBudget(keys.turns);
    if (turnsToday > 1200) return busy(503);

    // A lead marker earlier in this conversation means the lead is already in
    // the inbox. The prompt says emit once; this makes a duplicate harmless.
    const alreadyCaptured = body.messages.some(
      (message) =>
        message.role === "assistant" && parseLead(message.content).lead !== null
    );

    const streamParams = {
      model: PREVIEW_MODEL,
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: body.messages.map((message) => ({
        role: message.role,
        content:
          message.role === "assistant"
            ? parseLead(message.content).clean
            : message.content,
      })),
    };
    const messageStream = anthropic.messages.stream(streamParams);

    await messageStream.withResponse();

    const encoder = new TextEncoder();
    let reply = "";
    let streamSucceeded = false;
    let activeStream = messageStream;

    const emailLead = async () => {
      const parsed = parseLead(reply);
      if (!parsed.lead || alreadyCaptured) return;

      const transcript = [...body.messages, { role: "assistant", content: parsed.clean }]
        .map(
          (message) =>
            `${message.role === "user" ? "Visitor" : "Front desk"}: ${
              parseLead(message.content).clean
            }`
        )
        .join("\n\n");

      await sendNotification({
        subject: `Preview lead captured: VitaMineral (${parsed.lead})`,
        lines: [
          "The VitaMineral front desk preview captured a lead.",
          "",
          parsed.lead,
          "",
          "Transcript:",
          "",
          transcript,
        ],
      });
    };

    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for (let attempt = 1; attempt <= 2; attempt++) {
            for await (const event of activeStream) {
              if (
                event.type === "content_block_delta" &&
                event.delta.type === "text_delta"
              ) {
                reply += event.delta.text;
                controller.enqueue(encoder.encode(event.delta.text));
              }
            }
            if (reply.trim()) break;
            if (attempt === 2) throw new Error("Empty Anthropic response");
            activeStream = anthropic.messages.stream(streamParams);
          }
          streamSucceeded = true;
        } catch (error) {
          console.error("[preview] Anthropic stream failed", error);
          try {
            controller.enqueue(encoder.encode("\n[[ERROR]]"));
          } catch {
            // The visitor disconnected before the sentinel could be sent.
          }
        } finally {
          if (streamSucceeded) {
            try {
              await emailLead();
            } catch (error) {
              console.error("[preview] Failed to email lead", error);
            }
          }

          try {
            controller.close();
          } catch {
            // The response was already canceled by the visitor.
          }
        }
      },
      cancel() {
        activeStream.abort();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("[preview] Request failed before streaming", error);
    return busy(503);
  }
}
