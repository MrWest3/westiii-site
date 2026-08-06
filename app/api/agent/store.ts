import "server-only";

import { Redis } from "@upstash/redis";
import type { RevenueBand, Role } from "../../agent/constants";
import { parseReadback } from "../../agent/constants";

const redis = Redis.fromEnv();
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 60;
const UUID_V4_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type Session = {
  v: 1;
  sessionId: string;
  src: "investfest" | "direct";
  startedAt: string;
  updatedAt: string;
  turns: number;
  posts: number;
  status: "active" | "completed" | "captured" | "abandoned";
  revenueBand?: RevenueBand;
  lead?: {
    name: string;
    email: string;
    businessName: string;
    capturedAt: string;
  };
  emailedAt?: string;
  messages: { role: Role; content: string; at: string }[];
};

function sessionKey(sessionId: string) {
  if (!UUID_V4_RE.test(sessionId)) {
    throw new Error("Invalid session id");
  }

  return `agent:session:${sessionId}`;
}

export async function readSession(sessionId: string): Promise<Session | null> {
  const stored = await redis.get<string>(sessionKey(sessionId));

  if (!stored) return null;
  if (typeof stored === "string") return JSON.parse(stored) as Session;

  return stored as Session;
}

export async function writeSession(
  session: Session,
  options: { addToIndex?: boolean } = {}
) {
  const writes: Promise<unknown>[] = [
    redis.set(sessionKey(session.sessionId), JSON.stringify(session), {
      ex: SESSION_TTL_SECONDS,
    }),
  ];

  if (options.addToIndex) {
    writes.push(
      redis.zadd("agent:sessions", {
        score: Date.now(),
        member: session.sessionId,
      })
    );
  }

  await Promise.all(writes);
}

export async function markEmailed(session: Session): Promise<Session> {
  const emailed = { ...session, emailedAt: new Date().toISOString() };
  await writeSession(emailed);
  return emailed;
}

export function buildEmail(session: Session): {
  subject: string;
  lines: string[];
  replyTo?: string;
} {
  let subject: string;

  if (session.lead) {
    subject = `Agent LEAD: ${session.lead.name}, ${session.lead.businessName} (${session.revenueBand}) - ${session.turns} turns [${session.src}]`;
  } else if (session.status === "completed") {
    subject = `Agent completed, no capture - ${session.turns} turns [${session.src}]`;
  } else {
    subject = `Agent abandoned at turn ${session.turns} [${session.src}]`;
  }

  const lines = [
    `Status: ${session.status}`,
    `Src: ${session.src}`,
    `Started: ${session.startedAt}`,
    `Turns: ${session.turns}`,
    `Session: ${session.sessionId}`,
  ];

  if (session.lead) {
    lines.push(
      `Lead: ${session.lead.name} | ${session.lead.email} | ${session.lead.businessName} | ${session.revenueBand}`
    );
  }

  lines.push("");

  for (const message of session.messages) {
    const content =
      message.role === "assistant"
        ? parseReadback(message.content).clean
        : message.content;
    lines.push(`${message.role === "assistant" ? "AGENT" : "VISITOR"}: ${content}`);
  }

  return {
    subject,
    lines,
    ...(session.lead ? { replyTo: session.lead.email } : {}),
  };
}
