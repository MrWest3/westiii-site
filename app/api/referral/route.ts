import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  const {
    referrerName,
    referrerEmail,
    contactName,
    contactCompany,
    contactReach,
    context,
    attribution,
  } = await req.json();

  if (!referrerName || !referrerEmail || !contactName || !contactReach || !context) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await redis.rpush(
    "west-referrals",
    JSON.stringify({
      referrerName,
      referrerEmail,
      contactName,
      contactCompany,
      contactReach,
      context,
      attribution,
      submittedAt: new Date().toISOString(),
    })
  );

  return NextResponse.json({ ok: true });
}
