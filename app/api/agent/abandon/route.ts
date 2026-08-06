import { after, NextResponse } from "next/server";
import { sendNotification } from "../../../lib/notify";
import { buildEmail, readSession, writeSession, type Session } from "../store";

export const maxDuration = 30;

const UUID_V4_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  const sessionId = (await request.text()).trim();
  if (!UUID_V4_RE.test(sessionId)) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  try {
    const stored = await readSession(sessionId);
    if (!stored || stored.status === "captured" || stored.emailedAt) {
      return new Response(null, { status: 204 });
    }

    const now = new Date().toISOString();
    const abandoned: Session = {
      ...stored,
      status: stored.status === "active" ? "abandoned" : stored.status,
      updatedAt: now,
      emailedAt: now,
    };
    await writeSession(abandoned);
    after(() => sendNotification(buildEmail(abandoned)));

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("[agent] Abandon handling failed", error);
    return new Response(null, { status: 204 });
  }
}
