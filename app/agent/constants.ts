export type Role = "user" | "assistant";
export type Msg = { role: Role; content: string };
export type RevenueBand = "under_2m" | "2m_50m";

export const OPENING_MESSAGE =
  "Is there one function in your business, admin work, outreach and prospecting, service responses, anything, that if you could take it off your plate and improve the output, it would be a game changer?";

export const READBACK_RE = /\[\[READBACK band=(under_2m|2m_50m)\]\]\s*$/;
export const ERROR_SENTINEL = "[[ERROR]]";

export type ChatRequest = {
  sessionId: string;
  src?: string;
  messages: Msg[];
};

export type CaptureRequest = {
  sessionId: string;
  name: string;
  email: string;
  businessName: string;
  revenueBand: RevenueBand;
};

export type CaptureResponse = { ok: true; route: "/book" | "/assessment" };

export function parseReadback(text: string): {
  clean: string;
  band: RevenueBand | null;
} {
  const match = text.match(READBACK_RE);

  return {
    clean: match ? text.slice(0, match.index).trimEnd() : text,
    band: match ? (match[1] as RevenueBand) : null,
  };
}
