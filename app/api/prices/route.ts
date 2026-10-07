import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { Redis } from "@upstash/redis";
import { sendNotification } from "../../lib/notify";
import { cleanEmail, cleanOptionalText, invalid, rateLimitForm, readJson } from "../../lib/formGuard";

const redis = Redis.fromEnv();

// The /learn prices live here so they never ship in the page itself. Someone
// trades an email for them, and that email is a warm lead.
const PRICES = {
  lab: "From $1,500",
  rollout: "From $7,500",
  gpt: "$1,500",
  session: "$97",
  january: "$497 founding seats",
} as const;

export async function POST(req: NextRequest) {
  const limited = await rateLimitForm(req);
  if (limited) return limited;

  const body = (await readJson(req)) as { email?: unknown; from?: unknown; ref?: unknown };
  if (!body) return invalid();

  const email = cleanEmail(body.email);
  const from = cleanOptionalText(body.from, 40);
  const ref = cleanOptionalText(body.ref, 80);
  if (!email) return invalid();

  await redis.rpush(
    "west-price-unlocks",
    JSON.stringify({ email, from, ref, submittedAt: new Date().toISOString() })
  );

  after(() =>
    sendNotification({
      subject: `[PRICES] ${email}`,
      replyTo: email,
      lines: [
        `${email} unlocked the prices on /learn.`,
        "",
        `CLICKED: ${from || "not given"}`,
        `CAME FROM: ${ref || "direct"}`,
        "",
        "They saw prices but haven't filled out the form yet. A short reply asking what they want AI to fix usually starts the conversation.",
      ],
    })
  );

  return NextResponse.json({ ok: true, prices: PRICES });
}
