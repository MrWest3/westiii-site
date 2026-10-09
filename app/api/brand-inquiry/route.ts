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

// What the /brands form can ask about. Anything else is a forged request.
const WANTS = {
  demo: "DEMO AD",
  episode: "SPONSORED EPISODE",
  unsure: "NOT SURE YET",
} as const;

const BUDGETS = new Set(["under-1k", "1k-2.5k", "2.5k-5k", "5k+", "unset"]);

export async function POST(req: NextRequest) {
  const limited = await rateLimitForm(req);
  if (limited) return limited;

  const body = (await readJson(req)) as {
    name?: unknown;
    email?: unknown;
    company?: unknown;
    product?: unknown;
    want?: unknown;
    budget?: unknown;
    about?: unknown;
    ref?: unknown;
  };
  if (!body) return invalid();

  const name = cleanText(body.name, 120);
  const email = cleanEmail(body.email);
  const company = cleanText(body.company, 200);
  const product = cleanOptionalText(body.product, 300);
  const want =
    typeof body.want === "string" && Object.hasOwn(WANTS, body.want)
      ? (body.want as keyof typeof WANTS)
      : null;
  const budget =
    typeof body.budget === "string" && BUDGETS.has(body.budget) ? body.budget : null;
  const about = cleanText(body.about, 2000);
  const ref = cleanOptionalText(body.ref, 80);

  if (!name || !email || !company || !want || !about) return invalid();

  // Its own list so brand leads never mix with team and class inquiries.
  await redis.rpush(
    "west-brand-inquiries",
    JSON.stringify({
      name,
      email,
      company,
      product,
      want,
      budget,
      about,
      ref,
      submittedAt: new Date().toISOString(),
    })
  );

  // Runs after the response is sent, so the person never waits on the mail.
  after(() =>
    sendNotification({
      subject: `[BRAND] ${company}: ${name}`,
      replyTo: email,
      lines: [
        `${name} at ${company} filled out the /brands form.`,
        "",
        `WANTS: ${WANTS[want]}`,
        `PRODUCT: ${product || "not given"}`,
        `BUDGET: ${budget || "not given"}`,
        `CAME FROM: ${ref || "direct"}`,
        "",
        "WHAT IT DOES AND WHO BUYS IT:",
        about,
        "",
        `Reply to this email to reach ${name} at ${email}.`,
      ],
    })
  );

  return NextResponse.json({ ok: true });
}
