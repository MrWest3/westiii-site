import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  const { name, project, rating, review } = await req.json();

  if (!name || !review || !rating) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await redis.rpush(
    "west-report-reviews",
    JSON.stringify({ name, project, rating, review, submittedAt: new Date().toISOString() })
  );

  return NextResponse.json({ ok: true });
}
