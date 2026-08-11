export type Role = "user" | "assistant";
export type Msg = { role: Role; content: string };

export const BUSINESS_NAME = "VitaMineral IV Therapy";

export const OPENING_MESSAGE =
  "Hi, you have reached VitaMineral IV Therapy in Bellerose. I can answer questions about our IV drips, weight loss programs, HOCATT sessions, membership, and hours, and I can get a visit set up for you. What can I help you with?";

// The agent appends this marker once it has a name and a phone number or
// email. The server emails the lead, the client strips it from view.
export const LEAD_RE = /\[\[LEAD\s+([^\]]+)\]\]\s*$/;
export const ERROR_SENTINEL = "[[ERROR]]";

export type ChatRequest = {
  sessionId: string;
  messages: Msg[];
};

export function parseLead(text: string): {
  clean: string;
  lead: string | null;
} {
  const match = text.match(LEAD_RE);

  return {
    clean: match ? text.slice(0, match.index).trimEnd() : text,
    lead: match ? match[1].trim() : null,
  };
}
