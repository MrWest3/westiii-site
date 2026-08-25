import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

/**
 * Shared guard for the public form endpoints (subscribe, review, referral).
 *
 * These routes write to pay-as-you-go Redis and fire a notification email,
 * so every unvalidated request costs money twice. The agent routes carry
 * their own heavier guards; this is the lighter version for plain forms.
 */

const redis = Redis.fromEnv();

// Forms are human-paced. Five a minute per IP is generous for a person and
// useless for a script.
const perMinute = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
  prefix: "form:rl:m",
});
const perDay = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(50, "24 h"),
  prefix: "form:rl:d",
});

export async function rateLimitForm(
  request: Request
): Promise<NextResponse | null> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const [minute, day] = await Promise.all([
    perMinute.limit(ip),
    perDay.limit(ip),
  ]);
  if (!minute.success || !day.success) {
    return NextResponse.json({ error: "busy" }, { status: 429 });
  }
  return null;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function cleanEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim();
  if (email.length > 254 || !EMAIL_RE.test(email)) return null;
  return email;
}

/** Trimmed string within a length budget, or null. */
export function cleanText(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  if (text.length < 1 || text.length > max) return null;
  return text;
}

/** Same budget, but absence is fine. */
export function cleanOptionalText(value: unknown, max: number): string | null {
  if (value === undefined || value === null || value === "") return null;
  return cleanText(value, max);
}

export function invalid() {
  return NextResponse.json({ error: "invalid_request" }, { status: 400 });
}

export async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}
