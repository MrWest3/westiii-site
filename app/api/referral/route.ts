import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { Redis } from "@upstash/redis";
import { sendNotification } from "../../lib/notify";

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

  // Runs after the response is sent, so the referrer never waits on the mail.
  after(() =>
    sendNotification({
      subject: `Referral from ${referrerName}: ${contactName}`,
      replyTo: referrerEmail,
      lines: [
        `${referrerName} just sent you a referral.`,
        "",
        `WHO: ${contactName}`,
        `COMPANY: ${contactCompany || "not given"}`,
        `REACH THEM AT: ${contactReach}`,
        "",
        "WHAT IS GOING ON WITH THEM:",
        context,
        "",
        `ATTRIBUTION: ${attribution}`,
        "",
        `Referrer: ${referrerName} (${referrerEmail}). Reply to this email to answer them.`,
        "You said you would reach out within one business day.",
      ],
    })
  );

  return NextResponse.json({ ok: true });
}
