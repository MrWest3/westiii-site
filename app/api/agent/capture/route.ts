import { after, NextResponse } from "next/server";
import type {
  CaptureRequest,
  CaptureResponse,
  RevenueBand,
} from "../../../agent/constants";
import { sendNotification } from "../../../lib/notify";
import { buildEmail, readSession, writeSession, type Session } from "../store";

export const maxDuration = 30;

const UUID_V4_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isBand(value: unknown): value is RevenueBand {
  return value === "under_2m" || value === "2m_50m";
}

function parseCapture(value: unknown): CaptureRequest | null {
  if (!value || typeof value !== "object") return null;
  const body = value as Partial<CaptureRequest>;

  if (!UUID_V4_RE.test(body.sessionId ?? "")) return null;
  if (typeof body.name !== "string" || body.name.trim().length < 1) return null;
  if (body.name.trim().length > 120) return null;
  if (
    typeof body.businessName !== "string" ||
    body.businessName.trim().length < 1 ||
    body.businessName.trim().length > 120
  ) {
    return null;
  }
  if (typeof body.email !== "string" || !EMAIL_RE.test(body.email.trim())) {
    return null;
  }
  if (!isBand(body.revenueBand)) return null;

  return {
    sessionId: body.sessionId as string,
    name: body.name.trim(),
    email: body.email.trim(),
    businessName: body.businessName.trim(),
    revenueBand: body.revenueBand,
  };
}

export async function POST(request: Request) {
  let body: CaptureRequest | null = null;

  try {
    body = parseCapture(await request.json());
  } catch {
    // Invalid JSON is handled by the common 400 response.
  }

  if (!body) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  try {
    const stored = await readSession(body.sessionId);
    if (!stored) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }

    const capturedAt = new Date().toISOString();
    const band = stored.revenueBand ?? body.revenueBand;
    const captured: Session = {
      ...stored,
      status: "captured",
      revenueBand: band,
      updatedAt: capturedAt,
      lead: {
        name: body.name,
        email: body.email,
        businessName: body.businessName,
        capturedAt,
      },
      ...(stored.emailedAt ? {} : { emailedAt: capturedAt }),
    };

    await writeSession(captured);
    if (!stored.emailedAt) {
      after(() => sendNotification(buildEmail(captured)));
    }

    const response: CaptureResponse = {
      ok: true,
      route: band === "under_2m" ? "/book" : "/assessment",
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error("[agent] Capture failed", error);
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
}
