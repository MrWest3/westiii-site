import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const DEFAULT_LIST = "west-report-subscribers";

// Allowlist. Never write a Redis key straight from the request body.
const LISTS: Record<string, string> = {
  newsletter: DEFAULT_LIST,
  "atl-meetup": "atl-meetup-waitlist",
};

export async function POST(req: NextRequest) {
  const { email, list } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const key = typeof list === "string" ? LISTS[list] : undefined;

  await redis.sadd(key ?? DEFAULT_LIST, email);

  return NextResponse.json({ ok: true });
}
