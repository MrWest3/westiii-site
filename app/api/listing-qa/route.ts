import Anthropic from "@anthropic-ai/sdk";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import { LISTING_QA_MODEL, LISTING_QA_SYSTEM } from "./prompt";

export const maxDuration = 30;

const anthropic = new Anthropic();
const redis = Redis.fromEnv();
const perMinute = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(12, "60 s"),
  prefix: "listingqa:rl",
});
const perHour = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(80, "1 h"),
  prefix: "listingqa:rl",
});

const MAX_BODY_BYTES = 12 * 1024;
const MAX_MESSAGES = 13; // six questions and six answers, plus the new question
const DAILY_TURN_CAP = 1500;
const COUNTER_TTL_SECONDS = 172800;

function parseMessages(raw: string): Anthropic.MessageParam[] | null {
  if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) return null;
  try {
    const body = JSON.parse(raw) as { messages?: unknown };
    const messages = body.messages;
    if (!Array.isArray(messages)) return null;
    if (messages.length < 1 || messages.length > MAX_MESSAGES) return null;

    const valid = messages.every((message: unknown, index) => {
      if (!message || typeof message !== "object") return false;
      const { role, content } = message as { role?: unknown; content?: unknown };
      const expected = index % 2 === 0 ? "user" : "assistant";
      if (role !== expected || typeof content !== "string") return false;
      const limit = role === "user" ? 400 : 2000;
      return content.trim().length >= 1 && content.length <= limit;
    });
    if (!valid || messages.at(-1)?.role !== "user") return null;

    return messages.map((message: { role: "user" | "assistant"; content: string }) => ({
      role: message.role,
      content: message.content,
    }));
  } catch {
    return null;
  }
}

function busy(status: 429 | 503) {
  return NextResponse.json({ error: "busy" }, { status });
}

export async function POST(request: Request) {
  const messages = parseMessages(await request.text());
  if (!messages) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const [minuteLimit, hourLimit] = await Promise.all([
      perMinute.limit(`minute:${ip}`),
      perHour.limit(`hour:${ip}`),
    ]);
    if (!minuteLimit.success || !hourLimit.success) return busy(429);

    const dayKey = `listingqa:budget:${new Date().toISOString().slice(0, 10)}`;
    const turnsToday = await redis.incr(dayKey);
    if (turnsToday === 1) await redis.expire(dayKey, COUNTER_TTL_SECONDS);
    if (turnsToday > DAILY_TURN_CAP) return busy(503);

    const stream = anthropic.messages.stream({
      model: LISTING_QA_MODEL,
      max_tokens: 1024,
      output_config: { effort: "low" },
      system: LISTING_QA_SYSTEM,
      messages,
    });
    await stream.withResponse();

    const encoder = new TextEncoder();
    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
        } catch (error) {
          console.error("[listing-qa] stream failed", error);
          try {
            controller.enqueue(encoder.encode("\n[[ERROR]]"));
          } catch {
            // The visitor already disconnected.
          }
        } finally {
          try {
            controller.close();
          } catch {
            // Already closed by a cancel.
          }
        }
      },
      cancel() {
        stream.abort();
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
    console.error("[listing-qa] request failed before streaming", error);
    return busy(503);
  }
}
