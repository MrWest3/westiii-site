import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { Redis } from "@upstash/redis";
import { sendNotification } from "../../lib/notify";
import {
  cleanOptionalText,
  cleanText,
  invalid,
  rateLimitForm,
  readJson,
} from "../../lib/formGuard";

const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  const limited = await rateLimitForm(req);
  if (limited) return limited;

  const body = (await readJson(req)) as {
    name?: unknown;
    project?: unknown;
    rating?: unknown;
    review?: unknown;
  };
  if (!body) return invalid();

  const name = cleanText(body.name, 120);
  const project = cleanOptionalText(body.project, 200);
  const review = cleanText(body.review, 4000);
  const rating = Number(body.rating);
  if (
    !name ||
    !review ||
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 5
  ) {
    return invalid();
  }

  await redis.rpush(
    "west-report-reviews",
    JSON.stringify({
      name,
      project,
      rating,
      review,
      submittedAt: new Date().toISOString(),
    })
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
