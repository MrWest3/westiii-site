# SPEC: westiii.com v2 — Two-Tier Offer Alignment

Owner: David West. Planner: Claude. Builder: Codex. Reviewer: Claude.
Date: 2026-07-27.
**Extends** `SPEC-westiii-redesign.md` (2026-07-18). That spec's design system, voice rules, and component architecture stand unchanged. This spec changes offer structure, adds two pages, and adds one interactive tool.
**Source of truth for positioning:** `~/Desktop/Projects/x-agent/runs/2026-07-26-corey/gameplan.md` (supersedes BLUEPRINT.md on offers and acquisition).
**Evidence base:** `~/Desktop/Projects/x-agent/runs/2026-07-26-corey/{raw.md, luke-raw.md, teardown.md}`.

---

## 1. Why this change

Competitive intelligence on two operators running this exact model (Corey Ganim, 15 assessments sold at $999; Luke Pierce, 87 implementations, $3-5K assessments into $25-60K builds) produced three findings the current site does not reflect:

1. **The site sells one buyer.** It is built entirely for "2 to 20 people." The money is in $2M-50M companies, who will not buy a $999 tool-prescription and are not addressed anywhere on the site.
2. **The site sells a deliverable, not an outcome.** Luke Pierce, verbatim: *"An audit is not an offer and an 'audit business' is not a real thing. It is a deliverable. Nobody wants an audit, they want to know what it gets them."* The current /book page leads with what the buyer receives (call, playbook, review call) rather than what it gets them.
3. **The site never shows the artifact or the cost of inaction.** Both operators' entire credibility rests on the deliverable being visible, and both say the "cost of doing nothing" section is what closes. The site has neither.

Two things this spec does NOT change: the $999 offer (it is live, correctly priced, and correctly guaranteed) and the visual system.

---

## 2. Voice rules

Unchanged from `SPEC-westiii-redesign.md` §3. Restated because they are hard constraints:

- First person, direct, sounds like David across a table. No corporate phrasing, no AI cadence, no hype adjectives.
- **No em dashes anywhere.** Periods, commas, colons.
- No "not X, but Y" constructions.
- Numbers over adjectives.
- Results language in headlines. Tool names only in body copy.

**One retired line.** Any copy anywhere on the site expressing "I don't just prescribe, I build" as the differentiator must be replaced. It is not a differentiator: both reference operators build. See §3 for replacement copy.

---

## 3. Positioning changes

**Old (per redesign spec §2):** "The AI guy in Atlanta. I simplify AI for business owners who don't have time to figure it out." Differentiator: "I don't just prescribe, I build."

**New:**

- **Identity (unchanged, it is good):** David West. The AI guy in Atlanta.
- **Scope line (new, appears on `/` and `/services`):** "AI implementation for Atlanta companies doing $2M to $50M. And a $999 starting point for everybody else."
- **Differentiator (replaces the prescribe/build line), three claims, in this order:**
  1. **Speed.** "Custom systems in weeks, not quarters. I build with agents, so a project that takes an agency a quarter takes me weeks."
  2. **Adoption.** "I don't leave at handoff. Most AI projects fail because nobody on the team uses what got built. I stay until they do." *(Nothing in the competitive set sells this. It is the cleanest wedge on the board.)*
  3. **Proof.** "6M+ views in six months running AI production pipelines. Day job securing AI agents for enterprises at BeyondTrust."
- **Mechanism (unchanged):** Audit → Optimize → Automate.

**Guarantee, two versions by tier:**
- $999 tier (unchanged, already live): "I find you 5+ reclaimable hours a week or you don't pay."
- $3,500 tier (new): **"I will identify at least $50,000 in annualized reclaimable cost inside 14 days, or you don't pay."**

**Banned buyer-facing word: "audit."** Use "assessment." Internal docs may keep "audit." Rationale from the scrape: a prospect told Luke Pierce that "audit" reads as scrutiny; his answer was "We call it a Current State Assessment." The site already uses "assessment" in most places. Sweep for stragglers, including the Calendly URL slug if it is ever regenerated (the existing `calendly.com/davidawest25/ai-audit` link stays as-is, changing it breaks live bookings).

---

## 4. Route map (delta only)

| Route | Action | Notes |
|---|---|---|
| `/` | EDIT | New qualifying band, revised Offers component, new calculator strip. §5 |
| `/book` | EDIT | Stays the $999 page. Add outcome-first hero, deliverable preview, and a routing band to `/assessment`. §6 |
| `/assessment` | **NEW** | The $3,500 Current State Assessment sales page for $2M-50M companies. §7 |
| `/services` | EDIT | Reprice the ladder, add the Advisory Block downsell. §8 |
| `/atlanta` | **NEW** | Local SEO landing page. "AI consultant Atlanta." §9 |
| `/workshops` | EDIT | Add the recurring "AI for Business Atlanta" event block with registration capture. §10 |
| `/builds` | EDIT | Add a client-results section, separate from the career-hunt case studies. §11 |
| `/practice-os` | KEEP | Unchanged. Update its CTA target only if §8 renames offers. |
| `/speaking`, `/review` | KEEP | Unchanged. |
| `/weststone`, `/ai-agents-demo` | KEEP noindexed | Unchanged. |

**Nav update.** Current: Home · Offers · Workshops · Work · Speaking · [Book Your Assessment].
New: Home · Offers · Workshops · Work · Atlanta · [Book Your Assessment]. Move Speaking to the footer. Keep exactly one primary CTA site-wide.

---

## 5. Homepage `/`

Component-level changes. Do not restructure the page.

### 5.1 `Hero.tsx` — copy only
- H1 unchanged: `AI that pays for itself in a week.`
- Sub, revised: `I'm David West, the AI guy in Atlanta. I map how your business actually runs, build the system that fixes it, and stay until your team uses it. If I can't find the hours, you don't pay.`
- Primary CTA unchanged: `Book Your AI Assessment — $999` → `/book`
- Secondary CTA, revised: `Doing $2M+? Start here` → `/assessment`

### 5.2 NEW component `CostOfInaction.tsx` — insert directly after `HowItWorks`

The highest-leverage single addition on this spec. Both operators state that the "cost of doing nothing" is the section that closes. Nothing on the site quantifies it today.

Interactive, client-side only, no persistence, no network calls.

**Inputs (three, all sliders or number inputs with sensible defaults):**
| Field | Default | Range |
|---|---|---|
| Hours a week your team spends on manual, repetitive work | 10 | 1-60 |
| What an hour of that time is worth | $75 | $25-$400 |
| People doing it | 2 | 1-25 |

**Output, large and animated:**
- `$X per year` where `X = hours × rate × people × 50`, formatted with commas, rounded to the nearest $100.
- Supporting line: `That is what doing nothing costs you this year.`
- Under it, a routing line that switches on the computed value:
  - Under $50,000 → `Start with the $999 assessment.` → `/book`
  - $50,000 or more → `You are past the point where a tool list helps. Start with the Current State Assessment.` → `/assessment`

**Copy above the widget:** `Before you spend a dollar on AI, know what the current way is costing you.`

Constraints: no em dashes. Numbers must be legible on mobile at 375px. Use the existing crimson/gold accents and `AnimateIn` for reveal. Must be keyboard accessible and must not shift layout on recalculation.

### 5.3 `Offers.tsx` — restructure to five cards

Replace the current four-card ladder with:

1. **AI Assessment — $999.** For businesses under $2M. 45-minute call, written playbook, review call. 5+ hours found or you don't pay. → `/book`
2. **Current State Assessment — $3,500.** For companies doing $2M to $50M. Process maps, cost of inaction, architecture, phased roadmap, ROI. $50,000 found or you don't pay. Credited toward the build. → `/assessment`
3. **Agent HQ Install — from $15,000.** Your own AI operating system. Built on your data, connected to your tools, branded to you. → `/services`
4. **Operating Retainer — $3,000/mo.** After the build. Adoption, maintenance, new capabilities, monthly proof report. Capped at 6 clients. → `/services`
5. **Advisory Block — $2,500.** Four weekly calls, paid upfront. For companies that need direction before they need a build. → `/services`

Card 5 is visually de-emphasized (smaller, muted). It is a downsell, not a pitch.

### 5.4 `About.tsx` — swap the differentiator
Replace the "prescribe vs build" framing with the three claims from §3 in order: speed, adoption, proof.

### 5.5 `WorkshopsStrip.tsx`
Add the next Atlanta event date and a registration link once §10 exists. If no event is scheduled, render the strip with `Next Atlanta session: announcing soon` and an email capture instead of a dead CTA.

---

## 6. `/book` — the $999 page

Price, guarantee, Calendly URL, refund terms, and FAQ all stay. Three changes.

### 6.1 Hero: lead with the outcome, not the deliverable
Current H1: `The $999 AI Assessment.` — that is a deliverable.

New H1: `Find 5 hours a week in your business. Or pay nothing.`
Kicker above (unchanged position, new text): `The $999 AI Assessment`
Sub: `45 minutes on a call. A written playbook in 48 hours. A review call to walk it through. If I can't find you 5+ reclaimable hours a week, you don't pay.`

Keep the existing `Service` JSON-LD block exactly as-is, including `price: "999"`.

### 6.2 NEW section: "What you actually get" — show the artifact
Insert after the `deliverables` grid.

Render 3-4 preview images of real playbook pages (executive summary, effort-vs-impact matrix, the ROI slide). Blur or redact any client-identifying content. Caption: `Pages from a real playbook. This is what lands in your inbox 48 hours after our call.`

**Build note:** this section is gated on David producing a real playbook. Until assets exist at `public/playbook/`, render a placeholder block reading `Sample playbook pages coming soon` rather than stock imagery or a mockup. Do not fabricate a sample.

### 6.3 NEW routing band at the bottom
Full-width band above the footer:
> **Doing $2M or more a year?**
> A tool list is not going to move your business. You need your operations mapped and a system built. That is the Current State Assessment.
> `See the Current State Assessment →` → `/assessment`

---

## 7. `/assessment` — NEW, the $3,500 page

The most important new page. Buyer: an owner or operator at a $2M-50M Atlanta company who knows they need AI and does not know where to start.

**Metadata**
- `title` (absolute): `Current State Assessment | $50,000 Found in 14 Days or You Don't Pay`
- `description`: `A Current State Assessment for Atlanta companies doing $2M to $50M. I map every workflow, price the cost of inaction, and hand you the build plan. $50,000 in annualized reclaimable cost found in 14 days, or you don't pay.`
- `Service` JSON-LD mirroring the `/book` block: `@id` `https://westiii.com/#current-state-assessment`, `price: "3500"`, `areaServed` Atlanta, same `provider`.

**Section order**

1. **Hero.**
   - Kicker: `Current State Assessment`
   - H1: `I will find $50,000 in your operation. Or you don't pay.`
   - Sub: `Two to three weeks. I sit with your team, map every workflow you run, and hand you a document that shows exactly where the money is leaking, what to fix first, and what it costs to keep doing nothing. $3,500, credited toward anything we build together.`
   - CTA: `Book a Fit Call` → Calendly (same account, new event type; see build notes)

2. **Who this is for.** Two columns.
   - *This is for you if:* You do $2M to $50M. Your data lives in six or more tools. Your team re-enters the same information in more than one place. You have tried AI and it did not stick. You are the routing layer for your own company.
   - *This is not for you if:* You are under $2M (start with the [$999 assessment](/book)). You want someone to build one automation. You are shopping for the cheapest quote.

3. **What I do, in order.** Five steps, one row or stacked on mobile.
   1. `Map every workflow` — with the people actually doing the work, not just leadership.
   2. `Cut what should not exist` — most processes are twelve steps when they need seven.
   3. `Price the cost of inaction` — in your numbers, from your calls, not mine.
   4. `Design the system` — architecture, data flow, security, before and after.
   5. `Hand you the plan` — phased, priced, with an ROI you can hold me to.
   Closing line: `You own the plan whether or not I build it.`

4. **What you receive.** The eight sections of the delivery document, rendered as a numbered list with one line each:
   1. Executive summary — your situation, my proposal, the expected outcome, on one page, in your language.
   2. Current state — visual process maps for every major workflow. Who owns each step, where handoffs break, where data gets re-entered, where work sits waiting.
   3. Cost of inaction — dollars lost per month, hours burned per week, opportunity cost, risk you are carrying.
   4. Proposed solution — architecture diagram, before and after process maps, specific tools, data flow, security.
   5. Implementation roadmap — phases with deliverables across weeks 1-4, 5-8, 9-12. Daily demo items in a shared Slack.
   6. Quantified ROI — hours saved a month, dollars saved a month, capacity unlocked, payback period.
   7. Investment — total cost, breakdown by phase, payment terms, what is included, what is not.
   8. Next steps — kickoff timeline and how we start.

   Pull-quote under the list: `Most companies have never seen their own operations drawn out. The moment they do, they get it.`

5. **The guarantee.** Own band, crimson.
   > I will identify at least $50,000 in annualized reclaimable cost inside 14 days, or you don't pay. And the $3,500 is credited in full toward anything we build together.

6. **Cost of inaction calculator.** Reuse `CostOfInaction.tsx` from §5.2 with `variant="tier2"` — same math, defaults raised (20 hours, $125, 4 people), and the routing line suppressed since the visitor is already on the right page.

7. **What happens after.** Short: `Most companies who run the assessment ask me to build what it found. That is the Agent HQ install, from $15,000, and your $3,500 comes off the top. If the assessment says you are not ready to build, I will tell you that too.` → `/services`

8. **FAQ.** Six items:
   - How long does it take? *Two to three weeks from the first session to the delivered document.*
   - How much of my team's time does it need? *Three to five hours total, spread across short sessions with the people who actually run the work.*
   - What if we decide not to build anything? *You keep the document. It stands on its own, and it is yours to hand to any implementation partner.*
   - Do you need access to our systems? *For the assessment, no. I need conversations and screen shares. Access comes later, if we build.*
   - What if you don't find $50,000? *You don't pay. That has to be a real risk for the guarantee to mean anything.*
   - How is this different from the $999 assessment? *The $999 assessment prescribes tools you can turn on this week. This maps your whole operation and produces a build plan. Different buyer, different problem.*

9. **Final CTA.** `Book a Fit Call` + the line `Atlanta first. I will come to you.`

**Build notes**
- New Calendly event type needed at the same account for the fit call. Until it exists, point the CTA at the existing `calendly.com/davidawest25/ai-audit` link and flag it in the PR description. Do not ship a dead link.
- No Stripe paywall on the fit call. The $3,500 is invoiced after scoping, not paid to book. This is deliberate and differs from `/book`.

---

## 8. `/services` — reprice the ladder

The `offers` array in `app/services/page.tsx` becomes five entries.

| # | name | price | who | key change |
|---|---|---|---|---|
| 01 | AI Assessment | `$999` | Owner-operated businesses under $2M with 2 to 20 people | unchanged |
| 02 | **Current State Assessment** | `$3,500` | Companies doing $2M to $50M | **NEW.** Links to `/assessment`. |
| 03 | Agent HQ | **`from $15,000`** | Companies that want their own AI operating system | **was "scoped after assessment."** Now anchored. |
| 04 | **Operating Retainer** | **`$3,000/mo, limited to 6 clients`** | Companies running a system I built | **was "Fractional AI CTO / monthly retainer."** Renamed and repriced. |
| 05 | Advisory Block | `$2,500, four weekly calls` | Companies that need direction before a build | **NEW.** Visually de-emphasized. |

**Delete the current `Builds` entry at "from $1,500."** Its contents (automations, knowledge systems, custom workflows, process redesign) fold into Agent HQ as scope bullets. Nothing on this site should be priced under $999 again.

**Operating Retainer `included` list, rewritten:**
- Two working sessions a month
- Direct async access, 12 business hour response
- Adoption tracking. If your team is not using it, that is my problem to fix.
- New capabilities as you ask for them
- A monthly proof report: what the system handled, what needed a human, what improved

**Advisory Block `included` list:**
- Four calls, one a week, paid upfront
- What changed this week, mapped against what you actually do
- The two tools worth testing, the one to kill, the rest to ignore
- The highest-ROI thing to build next

Note for copy: never render the Advisory Block with "per month." It is a fixed block. This is deliberate.

---

## 9. `/atlanta` — NEW, local SEO

Corey Ganim's entire moat is being the local guy in one metro. Nobody owns Atlanta. The site has `LocalBusiness` schema but no city page.

**Metadata**
- `title` (absolute): `AI Consultant in Atlanta | AI Assessments and Custom Systems for Local Businesses`
- `description`: `I'm David West, an AI consultant in Atlanta. I help local businesses find where AI saves them 5+ hours a week, then build the systems that do it. $999 assessment, guaranteed.`

**Sections**
1. Hero. H1: `The AI guy in Atlanta.` Sub: local, in person, and specific about the metro.
2. `Who I work with in Atlanta` — named neighborhoods and business types. Sandy Springs, Buckhead, Midtown, Decatur, Marietta, Alpharetta. Dental and medical practices, law firms, agencies, home services, logistics, real estate.
3. `Come meet me` — the recurring Atlanta event (pull from §10) plus the coworking office-hours offer.
4. Both offer paths, `/book` and `/assessment`.
5. FAQ with genuinely local questions: Do you meet in person? *Yes, that is the point.* What parts of metro Atlanta do you cover? Do you work with businesses outside Atlanta? *Yes, remotely, but Atlanta gets my calendar first.*

**Schema:** `LocalBusiness` with full `address` (city/region only if no street address is public), `areaServed` listing metro Atlanta cities, and `sameAs` pointing to the social handles in `reference_social_handles.md`. Do not invent a street address or phone number.

Add `/atlanta` to `sitemap.ts`. Add a nav link.

---

## 10. `/workshops` — add the recurring event

Current page is workshop content. Add a top block for the recurring meetup, because this is the primary acquisition channel in the gameplan.

**New section, first on the page: `AI for Business Atlanta`**
- Format line: `Free. Monthly. Casual networking, a 30-minute session on what actually works, and 30 seconds of me telling you what I do.`
- Next date, venue, time. If unscheduled, show `Next date announcing soon` plus email capture wired to the existing Upstash newsletter hook (`useNewsletterSubscription.ts`) with a distinct list key, `atl-meetup-waitlist`, so it does not pollute `west-report-subscribers`.
- `Event` JSON-LD once a real date exists. Do not emit Event schema for a placeholder.
- Attendee promise: `Everybody who comes gets a free 15-minute session with me to find one bottleneck in their business. No pitch.`

Keep the existing team-training workshop content below this block.

---

## 11. `/builds` — separate client results from career proof

`/builds` currently serves the career hunt and is referenced by cover letters and Looms. Do not disturb that content.

Add a new section **above** it: `Client results`. Each entry: business type, the problem in their words, what got built, and the number (hours a week returned, dollars a month, or a percentage). Under-promise, per the delivery rule.

**This section renders only when at least one real result exists.** Until then it must not appear at all. No placeholders, no "coming soon," no hypothetical numbers on a results page. Gate it on a populated `clientResults` array being non-empty.

---

## 12. Acceptance criteria

1. A visitor at a $3M company lands on `/`, sees a path meant for them within one scroll, and reaches `/assessment` in one click.
2. A visitor under $2M still reaches `/book` in one click. Neither buyer sees a page that reads as meant for the other.
3. The cost-of-inaction calculator produces a correct number, routes correctly at the $50,000 boundary, works at 375px, is keyboard accessible, and causes no layout shift.
4. `/assessment` states the $3,500 price, the $50,000 guarantee, and the fee credit above the fold.
5. No route prices anything under $999. The string "from $1,500" appears nowhere.
6. The words "audit" and "I don't just prescribe" appear nowhere in buyer-facing copy.
7. No em dashes anywhere in new or edited copy.
8. `/atlanta` and `/assessment` are in `sitemap.ts` with valid JSON-LD. No fabricated address, phone, sample playbook, or client result ships.
9. Lighthouse SEO and accessibility do not regress on any edited route.
10. Every CTA resolves to a live destination. No dead Calendly links.

## 13. Build order

1. `/services` reprice — smallest change, highest consistency payoff.
2. `CostOfInaction.tsx` + homepage insertion.
3. `/assessment` page.
4. `/book` hero rewrite + routing band.
5. Homepage Hero, Offers, About copy.
6. `/atlanta`.
7. `/workshops` event block.
8. `/builds` client results (gated, ships empty).

## 13a. Amendments after the first build (2026-07-27)

Three changes made after David reviewed the first pass. These are now part of the spec.

**A. The homepage carries no imagery.** The hero collage, the hero marquee, and the three-image grid in `Proof` were all removed. They read as a creative portfolio and undercut the consulting offer. The hero is now type, CTAs, and a three-item proof row (`5+ hrs` / `48 hrs` / `Atlanta`). `Proof` keeps its headline, the 6M+ stat, and testimonials, and gains one text link to `/creative`.

**B. `/creative` is a new route.** Creative production gets its own page instead of leaking into the consulting funnel. Structure: hero → **STYS case study** (the lead, three shots, "every one of these is the client's actual product, nothing here was photographed") → what it replaces (studio day, model call, reshoot) → 4-step process → secondary grid of other creative work → CTA to a `StudioWest3@proton.me` mailto. In nav; in sitemap. `Work` (`/builds`) and `Speaking` move to a new footer link row so nothing is orphaned.

**C. `/free` is a new route, deliberately `noindex, follow`.** The free Bottleneck Call (two 15-minute calls over two days, per §gameplan rung 0) gets a landing page so it is textable for the warm-network blitz and 24-hour event follow-ups.
- **It must never appear in nav, in the sitemap, on the homepage, or on `/book` above the fold.** A public free option sitting beside a $999 offer cannibalizes the paid one. Corey never puts his free assessment on his site; he offers it out loud at meetups and by text.
- Linked only from `/atlanta` and the `/workshops` meetup block.
- The page is honest about the trade: "Some people take the fix and run with it themselves, and that is a genuinely fine outcome."

**D. The $1,500/mo rung is restored.** The first pass renamed Fractional AI CTO → Operating Retainer and repriced $1,500 → $3,000, which deleted the only recurring offer a sub-$2M business can afford and left the $999 buyer with no next step. Both now exist: **Fractional AI CTO $1,500/mo** (small lane) and **Operating Retainer $3,000/mo** (post-Agent-HQ, mid-market). The homepage `Offers` card presents them as one "Ongoing support, $1,500 to $3,000/mo" entry to avoid a six-card ladder.

## 14. Blocked on David, not on Codex

- **Verify the Calendly and Stripe checkout actually charges $999.** The code says $999. If the live checkout still charges $297, every page above is selling a price the buyer cannot pay. Check before anything ships.
- New Calendly event type for the tier-2 fit call.
- Real playbook page images for `/book` §6.2.
- A confirmed venue and date for the Atlanta event.
- The first client result for `/builds` §11.
