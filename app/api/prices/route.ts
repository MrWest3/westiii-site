import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { Redis } from "@upstash/redis";
import { sendNotification } from "../../lib/notify";
import { cleanEmail, cleanOptionalText, invalid, rateLimitForm, readJson } from "../../lib/formGuard";

const redis = Redis.fromEnv();

// Gated prices live here so they never ship in a page. Someone trades an email
// for them, and that email is a warm lead. One table per gated page.
const PRICES = {
  learn: {
    lab: "From $1,500",
    rollout: "From $7,500",
    gpt: "$1,500",
    session: "$97",
    january: "$497 founding seats",
  },
  brands: {
    demo: "From $750",
    episode: "From $1,000",
  },
} as const;

type Page = keyof typeof PRICES;

// What to do with each kind of unlock, written for David reading it on his phone.
const NEXT_STEP: Record<Page, string> = {
  learn:
    "They saw prices but haven't filled out the form yet. A short reply asking what they want AI to fix usually starts the conversation.",
  brands:
    "A brand saw your rates but hasn't sent the form yet. A short reply asking what the product does and who buys it usually starts the conversation.",
};

export async function POST(req: NextRequest) {
  const limited = await rateLimitForm(req);
  if (limited) return limited;

  const body = (await readJson(req)) as { email?: unknown; from?: unknown; page?: unknown; ref?: unknown };
  if (!body) return invalid();

  const email = cleanEmail(body.email);
  const from = cleanOptionalText(body.from, 40);
  const ref = cleanOptionalText(body.ref, 80);
  // Older /learn tabs send no page, so missing means learn. Anything else is forged.
  const page: Page | null =
    body.page === undefined
      ? "learn"
      : typeof body.page === "string" && Object.hasOwn(PRICES, body.page)
        ? (body.page as Page)
        : null;
  if (!email || !page) return invalid();

  await redis.rpush(
    "west-price-unlocks",
    JSON.stringify({ email, page, from, ref, submittedAt: new Date().toISOString() })
  );

  after(() =>
    sendNotification({
      subject: page === "learn" ? `[PRICES] ${email}` : `[PRICES /${page}] ${email}`,
      replyTo: email,
      lines: [
        `${email} unlocked the prices on /${page}.`,
        "",
        `CLICKED: ${from || "not given"}`,
        `CAME FROM: ${ref || "direct"}`,
        "",
        NEXT_STEP[page],
      ],
    })
  );

  return NextResponse.json({ ok: true, prices: PRICES[page] });
}
