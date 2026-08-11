# AI Employee Install Runbook (internal)

Owner: David West. Last updated: 2026-08-10.
Rule: nothing goes on `/pitch` (or gets promised on a call) unless it maps to a step in this document. If a promise has no step here, it does not get made.

Scope: the Long Island / Andrew channel and any main-street SMB install. Companion page: `app/pitch/page.tsx` (unlisted, noindexed, NO dollar figures — partners present pricing).

---

## 1. The offer ladder (internal pricing — never on the client page)

| Play | What it is | Price | Notes |
|---|---|---|---|
| The Prescription | Assessment only. Written plan: the fix, the tool, the cost. They implement. | $999 (under $2M rev) | Existing /book flow. Credited toward install if they upgrade. |
| The Install | One AI employee built + managed (monitoring, repairs, Friday ledger, weekly group Q&A + community). No standing 1-on-1 calls. | $2,500 install + $750/mo | Main Street (under $500K rev): $1,500 install + $500/mo, install splittable. DRAFT until David confirms. |
| Tech Guy On Your Team (fractional CTO add-on) | 2x private 1-hr calls/mo + ask-anything with 12-hr response (Voxer). | +$1,200/mo minimum, on top of Install | HARD CAP: 8 seats total. Waitlist after that. Floor per David 8-10 call with Cedric. |

Pricing inputs to collect before any quote: annual revenue, what one new client is worth, stated budget. No numbers from the partner = no quote.

### Partner economics (never client-facing)
- **Andrew: reseller, not a split.** We quote our price to Andrew; he adds his consulting points on top and presents his own number. He owns his margin; we never disclose ours to his clients. This is why `/pitch` carries no dollars and no link to `/ai-employees`.
- **Cedric: split on this lane discussed 8-10, OPEN.** David floated 60/40 (David 60) since David builds; Cedric floated 50/50 with Cedric taking customer support, comms relay, and half the client calls. Not agreed. Settle in writing before first dollar clears. Residual risk: public site pages (/ai-employees, /book) show David's direct prices; if a marked-up client googles, that is Andrew's risk to manage, not ours to hide.

## 2. Roles

- **David:** builds, manages fleet, runs weekly group Q&A, takes CTO calls.
- **Cedric (if split lands):** sales, customer support / first-line comms, relays build requests, learns the build over time. "Says yes, then brings it to engineering" — David holds veto on feasibility before anything is promised back to a client.
- **Andrew:** brings the client, presents `/pitch`, presents pricing (his number), collects the intro info. Never on our internal calls.

## 2b. Step 0: Partner Preview (the demo that sells)

The prospect experiences an AI front desk trained on THEIR business before any pitch. Validated mechanic (Vendasta teardown 8-11, specs/BIZ-vendasta-teardown-blueprint.md): the demo does the selling, the partner just presents it.

**Inputs required from the partner before anything gets built:**
- [ ] Business name + website URL
- [ ] The pain in the prospect's own words (one sentence is fine)
- [ ] Confirmation a real conversation with the owner is scheduled or imminent. No scheduled conversation, no preview.

**What David delivers, within 1 business day:**
- [ ] Unlisted preview page at westiii.com/preview/{client} : chat front desk trained on their services, prices, hours, policies (scraped from their site). Pattern: `app/preview/vitamineral/` (page + client + API route + prompt). Clone the folder, rebuild the knowledge block in the prompt, done. ~1 hour.
- [ ] Lead capture wired: name + phone captured in conversation → emailed to StudioWest3 via existing Resend notify. Forward to partner as proof ("it captured this lead while you watched").
- [ ] Partner gets the link plus a 3-line presenting script: open it on the owner's phone, tell them to text it like a customer, ask "want this answering your actual phone line?"

**Rules:**
- Preview is chat only. Voice line comes with the Install, and is said that way: "this is the text version, the real one answers your phone."
- Preview knowledge comes only from public info. Wrong prices on their site become wrong answers in the demo; that is a selling point, not a bug ("imagine it trained on your real menu at the sit-down").
- No prices, no offer names on the preview page. Same rule as /pitch.
- Previews expire: if no deal conversation within 30 days, page comes down (route deleted, one commit).
- First one built 8-11: VitaMineral IV Therapy (Bellerose NY, Andrew's client) at /preview/vitamineral.

## 3. Pre-sale checklist (per client)

- [ ] Annual revenue, value of one new client, budget (from Andrew)
- [ ] Biggest pain in their words (new clients / speed to lead / admin / content)
- [ ] Free 15-minute look done by David; one named fix + cost delivered
- [ ] Play selected; price confirmed to partner; deposit collected

## 4. Install: Day 0-14 (matches the public page day-for-day)

**Day 0 — Free look (15 min call).** Diagnose, name the fix, quote the scope to the partner.

**Day 1 — Sit-down (1 hr) + paperwork.**
- [ ] Brain interview (services, pricing, people, voice, ideal client). Recorded + transcribed.
- [ ] Company Brain folder created from transcript (markdown, per-client repo/folder)
- [ ] GHL sub-account created under Studio West agency
- [ ] A2P 10DLC registration filed DAY ONE (needs client EIN — collect at sit-down; takes days to clear)

**Days 2-10 — Build (client does nothing).**
- [ ] Fork role template (cron agent, bureau/daily-brief pattern) into client folder
- [ ] Owner channel picked at sit-down and wired: SMS via GHL number (default), or WhatsApp / Telegram / Slack / Discord bot, or Buzz (Block's human+agent workspace) when they want a team room. CAVEAT: "texts" = SMS through the business number; there is no official iMessage API, never promise blue bubbles. Buzz is new; treat as offered-where-fit, not default, until we have run one client on it.
- [ ] Customer-facing side is ALWAYS plain SMS from the GHL business line regardless of the owner channel
- [ ] Wire delivery rails: GHL number, missed-call text-back, calendar, pipeline
- [ ] If scoreboard add-on sold: one-page read-only dashboard (fork lead-capture-tool / wcc-dashboard pattern; stat tiles, bookings bar, lead pipeline; data from GHL API + agent state; one login, no menus). Pricing DRAFT: +$750-1,500 install, hosting folded into monthly. David to confirm.
- [ ] Outreach split configured: inbound = SMS instant reply; outbound = email only (TCPA), human sends personal touches after YES
- [ ] Approval gates: anything customer-facing or consequential waits for owner YES
- [ ] Friday ledger cron writes the one-page report (agent-generated, David reads, never hand-builds)
- [ ] Test against 10 real scenarios in the client's voice; fix until clean

**Day 11 — Go-live.** First morning text. Owner replies YES. Watch closely for 3 days.

**Day 14 — First Friday ledger delivered.** Install complete. Add client agent to fleet monitor.

## 5. Weekly ops (steady state, per client ~1-2 hrs/mo)

- Fleet-monitor cron (West OS pattern) pings every client agent daily; failures land in David's Telegram before the client notices
- Friday: skim ledgers (agent-written)
- Weekly: one live group Q&A for ALL install clients (existing Wed cadence; group replaces 1-on-1)
- Client questions: community/group session. 1-on-1 requests → quote the CTO seat.

## 6. Caps and SLAs (these protect the whole model)

- CTO seats: max 8. Calls: max 3-5/week total across all clients. 12-hr async response is a CTO-tier promise ONLY.
- Install tier gets NO standing private calls. The line on the page ("The honest line") exists so this never has to be argued client-by-client.
- More than 8 CTO-demand clients = raise the price, not the seat count.

## 7. Open decisions

- [ ] Main Street pricing final numbers (David)
- [ ] Scoreboard add-on price final (draft +$750-1,500 install above)
- [ ] Buzz: run David's own business on it first, then offer to clients with confidence
- [ ] Cedric split + roles in writing (before first close)
- [ ] Skool as the client community home (agentic Skool exists; decide before first install ships)
- [ ] Niche selection after first 3 installs (pattern-match, then templatize; scale pitch to Ryan only after 2 proven use cases with metrics)
- [ ] Coast2Coast voice agent: GHL workflows + number certification (EIN needed) — separate lane, do not bundle
