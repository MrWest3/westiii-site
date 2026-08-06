import { Redis } from "@upstash/redis";
import { after, NextResponse } from "next/server";
import { sendNotification } from "../../../lib/notify";
import { buildEmail, readSession, writeSession, type Session } from "../store";

export const maxDuration = 60;

const redis = Redis.fromEnv();

export async function GET(request: Request) {
  if (
    !process.env.CRON_SECRET ||
    request.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const now = Date.now();
    const sessionIds = await redis.zrange<string[]>(
      "agent:sessions",
      now - 48 * 60 * 60 * 1000,
      now,
      { byScore: true }
    );
    const notifications: ReturnType<typeof buildEmail>[] = [];

    for (const sessionId of sessionIds) {
      const stored = await readSession(sessionId);
      const hasVisitorMessage = stored?.messages.some(
        (message) => message.role === "user"
      );

      if (!stored || !hasVisitorMessage || stored.emailedAt) continue;

      const emailedAt = new Date().toISOString();
      const swept: Session = {
        ...stored,
        status: stored.status === "active" ? "abandoned" : stored.status,
        updatedAt: emailedAt,
        emailedAt,
      };
      await writeSession(swept);
      notifications.push(buildEmail(swept));
    }

    if (notifications.length > 0) {
      after(async () => {
        for (const notification of notifications) {
          await sendNotification(notification);
        }
      });
    }

    return NextResponse.json({ ok: true, emailed: notifications.length });
  } catch (error) {
    console.error("[agent] Sweep failed", error);
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
}
