import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { Redis } from "@upstash/redis";
import { sendNotification } from "../../lib/notify";
import {
  cleanEmail,
  invalid,
  rateLimitForm,
  readJson,
} from "../../lib/formGuard";

const redis = Redis.fromEnv();

const DEFAULT_LIST = "west-report-subscribers";

// Allowlist. Never write a Redis key straight from the request body.
const LISTS: Record<string, string> = {
  newsletter: DEFAULT_LIST,
  "atl-meetup": "atl-meetup-waitlist",
};

const LIST_LABELS: Record<string, string> = {
  [DEFAULT_LIST]: "West Report",
  "atl-meetup-waitlist": "ATL meetup waitlist",
};

export async function POST(req: NextRequest) {
  const limited = await rateLimitForm(req);
  if (limited) return limited;

  const body = (await readJson(req)) as { email?: unknown; list?: unknown };
  if (!body) return invalid();

  const email = cleanEmail(body.email);
  if (!email) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const key = typeof body.list === "string" ? LISTS[body.list] : undefined;
  const resolvedKey = key ?? DEFAULT_LIST;

  const added = await redis.sadd(resolvedKey, email);

  // sadd returns 0 when the address is already on the list. A repeat submit is
  // not news, so only a genuinely new signup earns an email.
  if (added) {
    const label = LIST_LABELS[resolvedKey] ?? resolvedKey;
    const total = await redis.scard(resolvedKey);

    after(() =>
      sendNotification({
        subject: `New ${label} signup: ${email}`,
        replyTo: email,
        lines: [
          `${email} just joined the ${label} list.`,
          "",
          `That list is now at ${total} ${total === 1 ? "person" : "people"}.`,
        ],
      })
    );
  }

  return NextResponse.json({ ok: true });
}
