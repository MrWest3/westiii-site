import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { Redis } from "@upstash/redis";
import { sendNotification } from "../../lib/notify";

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

  after(() =>
    sendNotification({
      subject: `New review: ${rating}/5 from ${name}`,
      lines: [
        `${name} left you a ${rating} star review.`,
        "",
        `WORKED ON: ${project || "not given"}`,
        "",
        review,
      ],
    })
  );

  return NextResponse.json({ ok: true });
}
