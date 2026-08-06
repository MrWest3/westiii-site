import Anthropic from "@anthropic-ai/sdk";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import {
  OPENING_MESSAGE,
  parseReadback,
  type ChatRequest,
  type Msg,
} from "../../agent/constants";
import { AGENT_MODEL, SYSTEM_PROMPT } from "./prompt";
import { readSession, writeSession, type Session } from "./store";

export const maxDuration = 60;

const anthropic = new Anthropic();
const redis = Redis.fromEnv();
const perMinute = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(30, "60 s"),
  prefix: "agent:rl",
});
const perHour = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(300, "1 h"),
  prefix: "agent:rl",
});

const UUID_V4_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_BODY_BYTES = 16 * 1024;
const COUNTER_TTL_SECONDS = 172800;

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
    if (body.messages.length < 1 || body.messages.length > 25) return null;
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
      src: typeof body.src === "string" ? body.src : undefined,
      messages: body.messages,
    };
  } catch {
    return null;
  }
}

function budgetKeys() {
  const date = new Date().toISOString().slice(0, 10);
  return {
    conversations: `agent:budget:${date}:convos`,
    turns: `agent:budget:${date}:turns`,
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
    const stored = await readSession(body.sessionId);
    const historyTurns = body.messages.filter(
      (message, index) => index > 0 && message.role === "assistant"
    ).length;
    const knownTurns = Math.max(stored?.turns ?? 0, historyTurns);
    if (
      stored?.status === "completed" ||
      stored?.status === "captured" ||
      stored?.status === "abandoned" ||
      knownTurns >= 10 ||
      (stored?.posts ?? 0) >= 14
    ) {
      return NextResponse.json({ error: "complete" }, { status: 409 });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const [minuteLimit, hourLimit] = await Promise.all([
      perMinute.limit(`minute:${ip}`),
      perHour.limit(`hour:${ip}`),
    ]);
    if (!minuteLimit.success || !hourLimit.success) return busy(429);

    const keys = budgetKeys();
    if (!stored) {
      const conversations = await incrementBudget(keys.conversations);
      if (conversations > 300) return busy(503);
    }

    const turnsToday = await incrementBudget(keys.turns);
    if (turnsToday > 3000) return busy(503);

    const now = new Date().toISOString();
    const pendingSession: Session = stored
      ? {
          ...stored,
          turns: knownTurns,
          posts: (stored.posts ?? 0) + 1,
          updatedAt: now,
        }
      : {
          v: 1,
          sessionId: body.sessionId,
          src: body.src === "investfest" ? "investfest" : "direct",
          startedAt: now,
          updatedAt: now,
          turns: historyTurns,
          posts: 1,
          status: "active",
          messages: [],
        };
    await writeSession(pendingSession);

    const modelMessages: Msg[] = body.messages.map((message) => ({
      role: message.role,
      content: message.content,
    }));

    if (knownTurns >= 7) {
      modelMessages.push({
        role: "user",
        content:
          "Wrap up now. Deliver the read back exactly as your instructions describe, ending with the marker line.",
      });
    }

    const streamParams = {
      model: AGENT_MODEL,
      max_tokens: 700,
      system: SYSTEM_PROMPT,
      messages: modelMessages,
    };
    const messageStream = anthropic.messages.stream(streamParams);

    await messageStream.withResponse();

    const encoder = new TextEncoder();
    let reply = "";
    let streamSucceeded = false;

    let activeStream = messageStream;

    // Persistence must complete before the stream closes: the capture POST
    // arrives right after the read back, and its email is built from stored
    // state. An after() write loses that race and ships empty transcripts.
    const persistCompletedTurn = async () => {
      const finishedAt = new Date().toISOString();
      const parsed = parseReadback(reply);
      const completed: Session = {
        ...pendingSession,
        updatedAt: finishedAt,
        turns: pendingSession.turns + 1,
        status: parsed.band ? "completed" : "active",
        ...(parsed.band ? { revenueBand: parsed.band } : {}),
        messages: [
          ...body.messages.map((message, index) => {
            const previous = pendingSession.messages[index];
            return {
              ...message,
              at:
                previous?.role === message.role &&
                previous.content === message.content
                  ? previous.at
                  : finishedAt,
            };
          }),
          { role: "assistant", content: reply, at: finishedAt },
        ],
      };

      const current = await readSession(completed.sessionId);
      if (current && current.turns > completed.turns) return;

      const terminal =
        current &&
        (current.status === "captured" ||
          current.status === "abandoned" ||
          Boolean(current.emailedAt));
      const sessionToWrite: Session = terminal
        ? {
            ...completed,
            status: current.status,
            updatedAt: current.updatedAt,
            posts: Math.max(current.posts ?? 0, completed.posts ?? 0),
            ...(current.revenueBand
              ? { revenueBand: current.revenueBand }
              : {}),
            ...(current.lead ? { lead: current.lead } : {}),
            ...(current.emailedAt ? { emailedAt: current.emailedAt } : {}),
          }
        : {
            ...completed,
            posts: Math.max(current?.posts ?? 0, completed.posts ?? 0),
          };

      await writeSession(sessionToWrite, {
        addToIndex: completed.turns === 1,
      });
    };

    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          // The model rarely returns an empty successful stream. Nothing has
          // been enqueued in that case, so one silent in-place retry is safe.
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
          console.error("[agent] Anthropic stream failed", error);
          try {
            controller.enqueue(encoder.encode("\n[[ERROR]]"));
          } catch {
            // The visitor disconnected before the sentinel could be sent.
          }
        } finally {
          if (streamSucceeded) {
            try {
              await persistCompletedTurn();
            } catch (error) {
              console.error("[agent] Failed to persist completed turn", error);
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
    console.error("[agent] Request failed before streaming", error);
    return busy(503);
  }
}
