import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { Redis } from "@upstash/redis";
import { sendNotification } from "../../lib/notify";
import {
  cleanEmail,
  cleanOptionalText,
  cleanText,
  invalid,
  rateLimitForm,
  readJson,
} from "../../lib/formGuard";

const redis = Redis.fromEnv();

// What the /learn form can ask about. Anything else is a forged request.
const INTERESTS = {
  team: "TEAM",
  class: "CLASS",
  talk: "TALK",
  other: "OTHER",
} as const;

const SIZES = new Set(["just-me", "2-10", "11-50", "51-200", "200+"]);

export async function POST(req: NextRequest) {
  const limited = await rateLimitForm(req);
  if (limited) return limited;

  const body = (await readJson(req)) as {
    name?: unknown;
    email?: unknown;
    interest?: unknown;
    org?: unknown;
    size?: unknown;
    fix?: unknown;
    ref?: unknown;
  };
  if (!body) return invalid();

  const name = cleanText(body.name, 120);
  const email = cleanEmail(body.email);
  const interest =
    typeof body.interest === "string" && Object.hasOwn(INTERESTS, body.interest)
      ? (body.interest as keyof typeof INTERESTS)
      : null;
  const org = cleanOptionalText(body.org, 200);
  const size =
    typeof body.size === "string" && SIZES.has(body.size) ? body.size : null;
  const fix = cleanText(body.fix, 2000);
  const ref = cleanOptionalText(body.ref, 80);

  if (!name || !email || !interest || !fix) return invalid();

  await redis.rpush(
    "west-inquiries",
    JSON.stringify({
      name,
      email,
      interest,
      org,
      size,
      fix,
      ref,
      submittedAt: new Date().toISOString(),
    })
  );

  // Runs after the response is sent, so the person never waits on the mail.
  after(() =>
    sendNotification({
      subject: `[${INTERESTS[interest]}] ${name}${org ? ` (${org})` : ""}`,
      replyTo: email,
      lines: [
        `${name} filled out the /learn form.`,
        "",
        `WANTS: ${INTERESTS[interest]}`,
        `ORG: ${org || "not given"}`,
        `TEAM SIZE: ${size || "not given"}`,
        `CAME FROM: ${ref || "direct"}`,
        "",
        "THE #1 THING THEY WANT AI TO FIX:",
        fix,
        "",
        `Reply to this email to reach ${name} at ${email}.`,
      ],
    })
  );

  return NextResponse.json({ ok: true });
}
