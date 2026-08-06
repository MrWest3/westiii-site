# SPEC: westiii.com Bottleneck Agent v1

Owner: David. Planner: Claude. Builder: Codex. Reviewer: Claude.

Hard rules for the builder:
- Read `node_modules/next/dist/docs/` before writing any Next.js code. This is Next 16.2.3 and it has breaking changes.
- `app/api/agent/prompt.ts` ALREADY EXISTS and is Claude-owned. Import it from server code only. Never edit it. Never import it from a client component. Acceptance criterion 15 greps the client bundle for it.
- Do not push, commit, or deploy. David approves every push.
- New dependencies allowed: exactly `@anthropic-ai/sdk` and `@upstash/ratelimit`. Nothing else. No Vercel AI SDK.
- Dev server runs on port 4001 (`.claude/launch.json`, `westiii-dev`). Never 3000.

## 1. Why this change

InvestFest Atlanta. David roams the floor pitching. A stranger scans a QR card, lands on `westiii.com/agent?src=investfest`, and completes a discovery conversation in under 3 minutes on their own phone over bad conference wifi. The agent digs for one offloadable business function, reads back what it heard with an hours and dollar estimate and every assumption on screen, captures name, email, and business name, then routes by revenue band into the paid ladder. Every conversation, including abandoned ones, lands with David as a structured transcript in Upstash plus an email via Resend. The transcript is raw material for the paid assessment. The agent is top of funnel. It never closes, never quotes prices as commitments, never promises savings.

## 2. Voice rules

Apply to every buyer-facing string this spec dictates and every string the builder writes:

- No em dashes anywhere. Restructure with periods, commas, colons.
- No emojis.
- No "not X, but Y" constructions. Make the point directly.
- First person, direct, short sentences. Sounds like David talking.
- The word "audit" never appears in buyer-facing copy. Use "assessment."
- Numbers over adjectives.

## 3. Existing patterns to copy (do not reinvent)

| Concern | Source | What to take |
|---|---|---|
| API route shape | `app/api/subscribe/route.ts` | Module-scope `const redis = Redis.fromEnv()`, POST handler, key allowlist (never a Redis key from the request body), `after(() => sendNotification(...))`, `NextResponse.json` |
| Email | `app/lib/notify.ts` | Use `sendNotification({subject, lines, replyTo})` as is. Do not modify this file. It swallows its own errors and no-ops without `RESEND_API_KEY`. |
| Noindex page | `app/ai-agents-demo/page.tsx` | Server `page.tsx` exporting `metadata` with `robots: { index: false, follow: true }`, delegating to a sibling `"use client"` component |
| Mailto fallback | `app/components/ReferralForm.tsx:11-30` | On persistent failure, render a card with a prefilled `mailto:StudioWest3@proton.me` link carrying everything the visitor typed |
| Message animation | `app/ai-agents-demo/AiAgentsDemoClient.tsx:466-486` | `AnimatePresence` entry: `initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.22}}`. That component lacks auto-scroll. Add it here: `useRef` on the scroll container, scroll to bottom on message append and on stream chunks. |
| Conditional CTA by revenue | `app/components/CostOfInaction.tsx:160-174` | The band fork pattern for the routed final CTA |
| Design tokens | `app/globals.css:3-12` | `--crimson`, `--crimson-light`, `--gold`, `--ink`, `--ink-secondary`, `--muted`, `--surface`, `--border` as Tailwind arbitrary values |
| CTA recipe | any `/book` CTA | `inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]` |
| Input recipe | `app/components/ReferralForm.tsx:31` | `w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--crimson)] focus:outline-none` |

## 4. Route map (delta only)

| Route | Type | Notes |
|---|---|---|
| `/agent` | new page | "The Bottleneck Agent". Noindex. NOT added to `app/sitemap.ts` (the sitemap is an allowlist; omission is the exclusion, same as `/ai-agents-demo`). |
| `/api/agent` | new POST | Chat turn, streams plain text |
| `/api/agent/capture` | new POST | Lead capture |
| `/api/agent/abandon` | new POST | `sendBeacon` target |
| `/api/agent/sweep` | new GET | Vercel cron, `CRON_SECRET` bearer auth |

`app/robots.ts` already disallows `/api/`. Leave it unchanged.

## 5. Files

### 5.1 `app/agent/constants.ts` (new, client-safe)

Shared by client and server. Contains zero prompt text.

```ts
export type Role = "user" | "assistant";
export type Msg = { role: Role; content: string };
export type RevenueBand = "under_2m" | "2m_50m";

export const OPENING_MESSAGE =
  "Is there one function in your business, admin work, outreach and prospecting, service responses, anything, that if you could take it off your plate and improve the output, it would be a game changer?";

export const READBACK_RE = /\[\[READBACK band=(under_2m|2m_50m)\]\]\s*$/;
export const ERROR_SENTINEL = "[[ERROR]]";

export type ChatRequest = {
  sessionId: string;      // UUID v4, client-generated
  src?: string;           // server allowlists: "investfest" recorded, anything else stored as "direct"
  messages: Msg[];        // full history including OPENING_MESSAGE as messages[0]
};

export type CaptureRequest = {
  sessionId: string;
  name: string;
  email: string;
  businessName: string;
  revenueBand: RevenueBand;
};
export type CaptureResponse = { ok: true; route: "/book" | "/assessment" };

export function parseReadback(text: string): { clean: string; band: RevenueBand | null };
// strips the marker, returns the band or null
```

### 5.2 `app/agent/page.tsx` (new, server)

Exact `/ai-agents-demo` shape:

```tsx
export const metadata: Metadata = {
  title: "The Bottleneck Agent",
  description: "A 3 minute conversation that finds the one function you should take off your plate. Built by David West.",
  robots: { index: false, follow: true },
};
```

Renders `<Suspense><AgentChatClient /></Suspense>` (Suspense required because the client reads `useSearchParams`).

### 5.3 `app/agent/AgentChatClient.tsx` (new, "use client")

Layout, mobile-first at 375px:
- `<div className="h-16" />` spacer under the fixed Nav, then a chat column `mx-auto max-w-2xl px-6` filling the remaining viewport (`min-h-[calc(100dvh-4rem)]`, flex column). Use `dvh` so the iOS keyboard does not break the layout.
- Header block: eyebrow `THE BOTTLENECK AGENT` in the gold eyebrow recipe, one line under it: "An AI agent David West built. Three minutes. It finds the one thing you should hand off." This line is the AI disclosure, always visible.
- Scrollable message region (flex-1, `overflow-y-auto`, auto-scroll on append and on stream chunk). Assistant bubbles on surface, visitor bubbles crimson with white text. `min-h-12` on all touch targets.
- Composer pinned at bottom: text input (`maxLength={600}`, `autoComplete="off"`, `enterKeyHint="send"`) plus a send button. Disabled while a reply streams.

Behavior:
1. On mount: `sessionId = crypto.randomUUID()` in a ref. Fresh session every page load, no localStorage. Read `?src=` via `useSearchParams`. Render `OPENING_MESSAGE` instantly as the first assistant bubble. Zero API calls before the visitor's first reply.
2. On send: append the user message, POST `/api/agent` with `{sessionId, src, messages}` (full history), read the response via `res.body.getReader()` and `TextDecoder` with `{stream: true}`, appending deltas to a streaming assistant bubble.
3. Marker suppression: never render a trailing substring that is a prefix of `[[READBACK` or `[[ERROR]]`. Hold back from the last unmatched `[[`, release it if it turns out to be ordinary text.
4. On stream end: run `parseReadback`. If a band came back, strip the marker from the rendered bubble and flip to the capture step. If the stream ended with `ERROR_SENTINEL`, treat as a failed turn (below).
5. Stall timer: if no bytes arrive for 25 seconds, abort via `AbortController` and treat as a failed turn.
6. Failed turn: discard the partial bubble, show an inline system bubble "Connection dropped. Tap to retry." Retry resends the identical request. After 2 consecutive failures, also render the mailto fallback card (ReferralForm pattern): `mailto:StudioWest3@proton.me`, subject `InvestFest follow up`, body asking for name, business, and what they want off their plate.
7. HTTP 429 or 503 before the stream: same friendly fallback, copy for 503: "Demand is heavy today. Email me directly and I will run this with you personally." Plus the mailto card. Never show a raw error.
8. HTTP 409: conversation is complete server-side. Flip to the capture step.
9. Abandon beacon: on `visibilitychange` to `hidden`, if at least 1 visitor message was sent and capture has not succeeded, `navigator.sendBeacon("/api/agent/abandon", sessionId)` (raw string body).

Capture step (replaces the composer, `AnimatePresence mode="wait"`):
- Three fields: name, email, business name. Label recipe from ReferralForm. `inputMode` and `autoComplete` set properly (`email`, `organization`, `name`).
- Revenue band segmented control (two options: "Under $2M a year", "$2M to $50M") ONLY when `parseReadback` returned null. When the marker supplied the band, do not ask again.
- Submit posts `/api/agent/capture`. On success or failure, render the final screen. Never block the money step on the write. On failure additionally show the mailto card with everything they typed prefilled.

Final screen:
- Headline: "Locked in."
- One line: "The full read out is in my hands. You will hear from me within 24 hours."
- Primary CTA (crimson recipe): band `under_2m` links to `/book` with the label "Book the $999 AI Assessment". Band `2m_50m` links to `/assessment` with the label "See the Current State Assessment". Internal `<Link>`, same tab.
- Never link `/free` anywhere on this page.

### 5.4 `app/api/agent/store.ts` (new, server-only)

Module-scope `Redis.fromEnv()`. Exports `readSession`, `writeSession`, `markEmailed`, `buildEmail`. Session shape:

```ts
type Session = {
  v: 1;
  sessionId: string;
  src: "investfest" | "direct";
  startedAt: string;          // ISO
  updatedAt: string;
  turns: number;              // assistant turns, opener excluded
  status: "active" | "completed" | "captured" | "abandoned";
  revenueBand?: RevenueBand;
  lead?: { name: string; email: string; businessName: string; capturedAt: string };
  emailedAt?: string;         // double-send guard shared by abandon beacon and sweep
  messages: { role: Role; content: string; at: string }[];
};
```

Keys (fixed strings plus a regex-validated UUID, never raw body input):
- `agent:session:{uuid}`: JSON string, `set(key, json, { ex: 60 * 60 * 24 * 60 })` (60 days), overwritten each write.
- `agent:sessions`: zset, `zadd({ score: Date.now(), member: uuid })` on first turn only.
- `agent:budget:{YYYY-MM-DD}:convos` and `agent:budget:{YYYY-MM-DD}:turns`: counters, `expire 172800` on first incr.

`buildEmail(session)` returns `{subject, lines, replyTo?}` for `sendNotification`:
- Captured: `Agent LEAD: {name}, {businessName} ({band}) - {turns} turns [{src}]`, `replyTo` set to the lead email.
- Completed, no capture: `Agent completed, no capture - {turns} turns [{src}]`
- Abandoned: `Agent abandoned at turn {turns} [{src}]`
- Body lines: `Status: ... / Src: ... / Started: ... / Turns: ... / Session: ...`, then `Lead: name | email | business | band` when present, blank line, then the transcript as alternating `AGENT:` and `VISITOR:` lines with the marker stripped.

### 5.5 `app/api/agent/route.ts` (new)

`export const maxDuration = 60`. Node runtime (default). POST only.

Order of operations. Everything that can 4xx or 5xx happens before the first streamed byte, because status and headers freeze at the first chunk:

1. Parse body. Validate: sessionId matches UUID v4 regex, messages array 1 to 25 entries, each entry role valid and content 1 to 600 chars, total body under 16 KB. Else 400.
2. Read the stored session. If `status` is `completed`, `captured`, or `abandoned`, or stored `turns >= 10`, return 409 `{ error: "complete" }`. Cap total POSTs per session at 14 (count in session JSON) for retry headroom, 409 beyond.
3. Rate limits (`@upstash/ratelimit`, prefix `agent:rl`): per-IP sliding window 30 per 60 s and 300 per 1 h. IP from `request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"`. Over limit: 429 `{ error: "busy" }`.
4. Global budget: on a session's first turn, `incr agent:budget:{date}:convos`; over 300, 503 `{ error: "busy" }`. Every turn: `incr agent:budget:{date}:turns`; over 3000, 503.
5. Open the Anthropic stream: `new Anthropic()` (module scope), `client.messages.stream({ model: AGENT_MODEL, max_tokens: 500, system: SYSTEM_PROMPT, messages })` where `messages` is the client history mapped to API roles. When the stored session shows this reply will be assistant turn 8 or later, append one extra user message server-side: `"Wrap up now. Deliver the read back exactly as your instructions describe, ending with the marker line."`
6. Return `new Response(readable, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache, no-transform", "X-Accel-Buffering": "no" } })`. Pump text deltas into the stream as they arrive.
7. On mid-stream Anthropic failure: enqueue `\n[[ERROR]]`, close the stream cleanly. Do not persist the turn.
8. On successful stream completion: assemble the full reply, parse the marker, then persist. Write the session (client history plus the completed reply, `turns + 1`, `updatedAt`, and when the marker parsed: `revenueBand` and `status: "completed"`). Persisting only after completion makes a client retry of a dropped turn safe. Use `after()` for the write so the last chunk is not delayed, and add the first-turn `zadd`.

No POST route handler caching exists in Next 16. Do not add `dynamic`, `revalidate`, or `fetchCache` exports.

### 5.6 `app/api/agent/capture/route.ts` (new)

`maxDuration = 30`. Validate: UUID, name and businessName 1 to 120 chars, email matches a simple email regex, revenueBand in the two-value union. Read the session (404 if missing), merge `lead`, set `status: "captured"`, keep `revenueBand` from the marker if present, else take the form value. Write. `after(() => sendNotification(buildEmail(session)))` and set `emailedAt`. Respond `{ ok: true, route: band === "under_2m" ? "/book" : "/assessment" }`.

### 5.7 `app/api/agent/abandon/route.ts` (new)

`maxDuration = 30`. Body is the raw sessionId string (`await request.text()`, then UUID regex). Read session. If missing, or `status` is `captured`, or `emailedAt` set: 204, done. Else set `status: "abandoned"` (only when current status is `active`; a `completed` no-capture session keeps `completed`), set `emailedAt`, write, `after(() => sendNotification(buildEmail(session)))`. Respond 204.

### 5.8 `app/api/agent/sweep/route.ts` (new)

`maxDuration = 60`. GET. Reject unless `Authorization` is `Bearer ${process.env.CRON_SECRET}` (401). `zrange` `agent:sessions` for members scored within the last 48 h. For each: read session; if it exists, has at least 1 visitor message, and has no `emailedAt`, email it (status `abandoned` if still `active`), set `emailedAt`, write. Return `{ ok: true, emailed: n }`.

### 5.9 `vercel.json` (new)

```json
{ "crons": [{ "path": "/api/agent/sweep", "schedule": "0 3 * * *" }] }
```

03:00 UTC is 23:00 ET. Vercel cron sends `Authorization: Bearer ${CRON_SECRET}` when the env var is set.

### 5.10 `package.json` (modify)

Add `@anthropic-ai/sdk` and `@upstash/ratelimit`. Nothing else changes.

### 5.11 `app/api/agent/prompt.ts` (EXISTS, do not touch)

Exports `SYSTEM_PROMPT: string` and `AGENT_MODEL: string`. Import both in `route.ts`. Server-only.

## 6. Env vars

| Var | Status | Purpose |
|---|---|---|
| `KV_REST_API_URL` / `KV_REST_API_TOKEN` | live | `Redis.fromEnv()` |
| `RESEND_API_KEY`, `NOTIFY_TO`, `RESEND_FROM` | live in Vercel | `sendNotification` |
| `ANTHROPIC_API_KEY` | NEW, David adds to Vercel | Anthropic SDK reads it implicitly |
| `CRON_SECRET` | NEW, David adds to Vercel | sweep auth |
| `AGENT_MODEL` | optional | defaults to `claude-sonnet-5` in prompt.ts |

Email in local dev silently no-ops (no `RESEND_API_KEY` in `.env.local`). That is expected; verify email paths by log lines.

## Acceptance criteria

1. `westiii.com/agent?src=investfest` at 375px shows the verbatim opening question with zero API calls issued (network tab).
2. Replies stream token by token in Chrome and iOS Safari; no reply exceeds 700 tokens.
3. By assistant turn 8 at the latest the read back arrives with leverage points, an hours per week estimate, a dollar figure with stated assumptions, and one cost of doing nothing sentence. The `[[READBACK band=...]]` marker never appears on screen, including transiently mid-stream.
4. After the read back the capture form appears with name, email, business name. The band control appears only when the marker was missing.
5. Capture with `under_2m` shows the `/book` CTA; `2m_50m` shows `/assessment`. The CTA renders even when the capture POST fails. `/free` appears nowhere on the page.
6. Every completed turn updates `agent:session:{uuid}` in Upstash. A conversation abandoned after turn 2 (close the tab) reaches Redis with an abandoned status via beacon or sweep.
7. A captured conversation produces exactly one email, subject `Agent LEAD: {name}, {business} ({band}) - {n} turns [investfest]`, replyTo the lead's email, full transcript in the body.
8. An abandoned conversation produces exactly one email. Beacon plus sweep never double-send (the `emailedAt` guard).
9. A chat POST against a session at the turn cap returns 409 and the client flips to capture, no error shown.
10. A 601-char message is blocked client-side and rejected 400 server-side.
11. Request 31 in 60 s from one IP gets 429 before any stream bytes; the client shows the friendly retry, never a raw error.
12. With `agent:budget:{today}:convos` manually set past 300, a new session gets the "demand is heavy" state with the mailto card.
13. Killing the network mid-stream discards the partial bubble and offers retry; the retried turn leaves a clean transcript in Redis with no duplicate or partial assistant message.
14. `/agent` is absent from `sitemap.xml`; the page HTML carries `noindex`.
15. `npm run build` passes, and grepping `.next` client chunks for a distinctive phrase from `SYSTEM_PROMPT` finds nothing.
16. No em dashes, no emojis, and no "audit" in any buyer-facing string on the page.

## Build order

1. Deps.
2. `app/agent/constants.ts`.
3. `app/api/agent/store.ts`.
4. `app/api/agent/route.ts`.
5. `capture`, `abandon`, `sweep` routes, `vercel.json`.
6. `app/agent/page.tsx` + `AgentChatClient.tsx`.
7. Manual pass at 375px with network throttling, then run `specs/EVAL-westiii-agent-v1.md`.

## Amendments after the first build (2026-08-05)

1. `max_tokens` raised from 500 to 700 in `app/api/agent/route.ts`. First eval pass showed read backs hitting the 500 ceiling before the marker line. Paired with a 130-word read back budget added to the prompt. Acceptance criterion 2 reads 700 accordingly.
2. The 600-char message limit applies to visitor messages only; assistant messages in posted history are capped at 4000 chars (a full read back echoed in history legitimately exceeds 600). Criterion 10 is unchanged: it tests a visitor message.
3. Empty-but-successful Anthropic streams are treated as failed turns (error sentinel, no persistence), observed live in eval run P1.
4. Session JSON gained a `posts` counter enforcing the 14-POST retry cap from section 5.5.

## Blocked on David, not on Codex

1. `ANTHROPIC_API_KEY` and `CRON_SECRET` added to Vercel env.
2. QR card print run (see `specs/OPS-investfest-checklist.md`).
3. Final read of the system prompt copy before the event.
4. Push and deploy approval.
