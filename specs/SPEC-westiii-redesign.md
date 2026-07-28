# SPEC: westiii.com Redesign — "The AI Guy in Atlanta"

Owner: David West. Planner: Claude. Builder: Codex. Reviewer: Claude.
Date: 2026-07-18. Source of truth for positioning: `~/Desktop/Projects/studio-west/BLUEPRINT.md`.

## 1. Objective

Convert westiii.com from a personal portfolio ("everything David does") into a client-acquisition site for ONE business: AI assessments and systems for small business owners, anchored in Atlanta. Every page answers a buyer question and routes to the assessment. Career-hunt proof (/builds) and speaking survive as supporting pages, not the story.

The site must pass two tests:
1. A business owner who lands cold understands the offer, the guarantee, and the price within 10 seconds, and can book.
2. Grant Haas (family-office managing partner) reads it and sees a buttoned-up operator, one clear lane, receipts.

## 2. Positioning (copy north star)

- **Identity:** David West. The AI guy in Atlanta. I simplify AI for business owners who don't have time to figure it out.
- **Mechanism:** Audit → Optimize → Automate. Assessment first, then I build what it finds, then I run it with you month over month.
- **Differentiator (the twist vs. every AI consultant):** I don't just prescribe, I build. Day job securing AI agents for enterprises (BeyondTrust, non-human identity security, presenting at Black Hat). Creative production chops (6M+ views in 6 months). Local and in person: Atlanta rooms, real handshakes.
- **Guarantee (everywhere the offer appears):** I find you 5+ reclaimable hours a week or you don't pay.

## 3. Voice rules (hard constraints for all copy)

- Direct, first person, sounds like David talking across a table. No corporate phrasing, no AI cadence, no hype adjectives ("cutting-edge", "unlock", "transform", "elevate").
- NO em dashes anywhere. Use periods, commas, colons.
- No "not X, but Y" constructions. Make the point directly.
- Results language, never tool names, in headlines. Tool names allowed only in body copy where concrete.
- Short sentences. Numbers over adjectives ($999, 5+ hours, 6M views, 45 minutes).

## 4. Route map

| Route | Action | Purpose |
|---|---|---|
| `/` | REBUILD | The funnel. See §5. |
| `/book` | REBUILD | Assessment sales page at $999 + guarantee. See §6. |
| `/services` | REBUILD | Offer ladder detail (assessment, builds, Agent HQ, Fractional AI CTO). See §7. |
| `/workshops` | NEW | AI training for teams and organizations. See §8. |
| `/builds` | KEEP, light edit | Career-hunt anchor. Update intro line to current positioning. Stays out of main story, stays in nav footer. |
| `/practice-os` | KEEP | Vertical package (dental/medical). Linked from /services as the industry package. Update CTA to $999 assessment. |
| `/speaking` | KEEP | Unchanged except nav consistency. |
| `/review` | KEEP | Unchanged. |
| `/weststone` | REMOVE from nav + sitemap | Keep route live (dead project, links may exist). Add `noindex`. |
| `/ai-agents-demo` | REMOVE from nav + sitemap | Keep route (used in outreach demos). Add `noindex`. |

**Nav (all pages):** Home · Offers (/services) · Workshops · Work (/builds) · Speaking · [Book Your Assessment] (CTA button, accent color, → /book).
**Footer:** socials (handles per current site), newsletter capture (keep Upstash wiring), email StudioWest3@proton.me.

## 5. Homepage `/`

Keep the existing design system: dark cinematic look, crimson/gold accents, Framer Motion, current typography. This is a content/IA rebuild, not a visual reinvention. Cut from 11 sections to 7. Reuse/adapt existing components where possible.

**Section order:**

1. **Hero.** Keep the cinematic video/collage treatment. New copy:
   - H1: `AI that pays for itself in a week.`
   - Sub: `I'm David West, the AI guy in Atlanta. I sit down with business owners, find where AI saves them 5+ hours every week, and build it. If I can't find the hours, you don't pay.`
   - Primary CTA: `Book Your AI Assessment — $999` → /book
   - Secondary CTA: `See how it works` → anchor to section 2.
2. **How it works (NEW component).** Three steps, one row: `Audit` (45-minute deep dive on how your business actually runs) → `Optimize` (I cut the wasted steps before automating anything) → `Automate` (tools, agents, and systems that give you your week back). Closing line under the row: `Assessment first. I only build what the audit proves you need.`
3. **The offers (NEW component, ladder).** Four cards, each 3 lines + link to /services:
   - AI Assessment, $999. The 45-minute audit, a written playbook, and a review call. 5+ hours found or you don't pay.
   - Builds. I implement what the assessment finds: automations, knowledge systems, custom workflows.
   - Agent HQ. A private AI operating system for your business, built on your data, branded to you.
   - Fractional AI CTO. Two working sessions a month plus direct access. Your AI guy on retainer.
4. **Proof (adapt Testimonials + Work).** Testimonials, the Philly dental story one-liner, 6M+ views stat, PeduL/speaking logo row if assets exist. Cut anything unverifiable.
5. **Who I am (adapt About).** Three beats, short: BeyondTrust Solutions Engineer securing AI agents for enterprises (Black Hat 2026 presenter). Builder with 6M+ content views teaching AI. Atlanta, in the rooms, in person.
6. **Workshops strip (NEW, thin).** One line + CTA: `I also train teams. From curious to using AI the same day.` → /workshops.
7. **Final CTA + Connect (adapt Connect).** Repeat guarantee + book button + newsletter capture.

**Cut from homepage:** CreativeGrid, WebBuilds, Building, YouTube as standalone sections. Fold any strong assets into Proof. Do not delete components; leave unused in repo.

## 6. `/book` rebuild

Single-purpose sales page. Structure:

1. H1: `The $999 AI Assessment.` Sub: `45 minutes. I find you 5+ reclaimable hours a week or you don't pay.`
2. **What you get:** discovery call (45 min) · written AI playbook (your pain points, the exact tools, cost, setup time, hours saved, a 4-day quick start) · 30-minute review call · 100% money-back guarantee.
3. **The math section:** average client reclaims 6+ hours/week for roughly $40/month in tool costs. At $100/hour of owner time that's $2,400+/month back, every month, for a one-time $999. Frame line: `A 25x return on the assessment. Every single month.` Keep it plain, no calculator widget needed for v1.
   Above the math, one empathy block (this is the buyer's exact state, use this language): `You know AI exists. You've seen the demos. You've tried ChatGPT. But you're drowning in tools with no idea which ones solve your problems. You don't need a developer or another course. You need someone to look at your calendar, your inbox, and your workflows and say: this tool, this process, this is where you start.`
4. **Credit line:** `Every dollar of the assessment is credited toward anything we build together afterward.`
5. **Who it's for / not for:** for owner-operated businesses (2-20 people) that know AI should be doing something but haven't had time. Not for enterprises (that's my day job) or people who want a magic bullet without a 45-minute conversation.
6. FAQ (5 items max): refund terms (24h cancel = full refund, inside 24h = reschedule), what happens after, do I need to be technical (no), what if I already use ChatGPT (good, this goes further), how fast (playbook within 48h of the call).
7. CTA: Calendly embed/link `calendly.com/davidawest25/ai-audit`. **MANUAL TASK FOR DAVID, NOT CODEX: update Calendly/Stripe price from $297 to $999 before this page ships.**

## 7. `/services` rebuild (offer ladder detail)

One page, four sections matching the ladder, each with: who it's for, what's included, how it starts (always: assessment first), and a CTA. Pricing: show $999 on assessment; builds "from $1,500"; Agent HQ "scoped after assessment"; Fractional AI CTO "monthly retainer, limited to 6 clients". Include Practice OS as a highlighted industry package linking to /practice-os. Kill all current /services content that doesn't map to the ladder.

## 8. `/workshops` (new)

1. H1: `Your team knows AI matters. Nobody has shown them how to use it.`
2. Offer: hands-on workshops for teams, communities, and events. From curious to using AI in their real work the same day. Formats: 60-90 min talk + live build, half-day working session, recurring team enablement.
3. Proof: 425+ member community, live workshop photos if assets exist, 6M+ views, speaking circuit line.
4. CTA: email StudioWest3@proton.me or book an intro call (same Calendly for now).

## 9. SEO

- Home title: `David West | AI Consultant in Atlanta | AI Assessments for Small Business`
- /book title: `The $999 AI Assessment | 5+ Hours Back Every Week or You Don't Pay`
- Target phrases naturally in copy: "AI consultant Atlanta", "AI audit for small business", "fractional AI CTO", "AI workshop Atlanta". No keyword stuffing.
- Add JSON-LD `LocalBusiness` (Atlanta) + `Service` schema on home and /book.
- Update `sitemap.ts` and `robots.ts` per route map (§4). OG images: reuse current generator, update copy strings.

## 10. Constraints

- Next.js 16.2 App Router, React 19, Tailwind 4, Framer Motion. **Read `node_modules/next/dist/docs/` conventions before writing code (repo rule, breaking changes vs. training data).**
- No new dependencies. No CMS. No backend changes. Keep Upstash newsletter API and existing /api routes untouched.
- Keep existing design tokens, fonts, colors, motion patterns. Reuse components; new components live in `app/components/`.
- Mobile-first: most traffic arrives from IG/TikTok bio links on phones.
- Dev server: pick a free 4000s port if one isn't already assigned. Never 3000.

## 11. Acceptance criteria

1. Cold visitor sees offer + guarantee + price above the fold on `/` and `/book` (mobile 390px and desktop).
2. Every page's primary CTA path reaches Calendly in ≤2 clicks.
3. No page mentions dead projects (WestStone, PCF by name) or "finding my niche" energy anywhere.
4. Copy passes voice rules (§3): zero em dashes, no negation-pivot constructions, no hype adjectives.
5. `npm run build` clean, no type errors, Lighthouse mobile ≥90 performance on `/` and `/book`.
6. /weststone and /ai-agents-demo excluded from sitemap + noindexed, still routable.
