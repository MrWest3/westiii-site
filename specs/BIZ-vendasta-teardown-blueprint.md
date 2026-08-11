# Vendasta Teardown + West Blueprint
Date: 2026-08-11. Sources: 3 YT transcripts (Conquer Local podcast + staff build video), vendasta.com, @Vendasta X, @Vendasta YouTube, logged-in Partner Center test account (Test West, Free tier). Every claim tagged OBSERVED (seen directly) or INFERRED (my read), with confidence.

---

## PHASE 1: TEARDOWN

### A. Offer anatomy

Vendasta sells to PARTNERS (agencies), not to small businesses. The SMB is always the partner's customer. Two-sided offer:

**Partner platform plans** (OBSERVED, pricing page + logged-in Upgrade page):
| Plan | Monthly minimum | Contract | Key gates |
|---|---|---|---|
| Free | $0 | none | Co-branded ("Powered by Vendasta"), chat receptionist only, no voice, no automations, no white-label, 1 seat |
| Starter | $99 wholesale spend | none | Wholesale pricing, 10 snapshot reports/mo, 1 seat |
| Professional | $499 wholesale spend | 1 year | White-label portal + domain, VOICE AI receptionists, APIs/webhooks, Task Manager, 5 seats |
| Premium | $999 wholesale spend | 1 year | Multi-location, volume discounts, SSO, sub-brands, 10 seats |

"$0 subscription" mechanic: every $1 of wholesale product resold offsets $1 of platform fee. INFERRED high confidence: it is a spend commitment dressed as free software. Guarantees Vendasta revenue, punishes leaving (you lose the offset), and forces fulfillment consolidation into Vendasta SKUs because only their spend counts.

Extra seats $30-65/mo. Extra snapshot reports $2 each.

**Wholesale product economics** (OBSERVED, logged-in marketplace, free-plan cost / paid-plan cost / suggested retail):
| Product | Free plan | Paid plan | Sugg. retail |
|---|---|---|---|
| Conversations AI Standard (web/social/email chat) | $40 | $29 | $79 |
| Conversations AI Pro (+SMS, missed-call textback) | $50 | ~ | ~ |
| Conversations AI Premium (+voice, 300 min/mo) | $100 | ~ | ~ |
| CRM AI | $10 | $8 | $19 |
| Campaigns Pro (email/SMS) | $20 | $16.50 | $39 |
| Reputation AI | Free start | Free | $19 |
| Social AI | Free start | Free | $19 |
| Local SEO base | Free | Free | Free |
| Listing Sync Pro USA | $40 | $17 | $41 |
| WordPress hosting | $10 | Free | $19 |
| AI Employee Setup (done-for-you, one time) | $399 | $199 | $399 |
| AI Workforce Optimization Plan (managed, monthly) | $58 | $29 | $49 |

Voice fine print (OBSERVED): Premium = 300 minutes of max-10-min calls, unlimited "bonus" until mid-2026, then ~$0.10/min overage. US/Canada only.

**Pre-published retail packages** (OBSERVED in test account store, ready to sell day one):
| Package | Retail | Wholesale | Partner margin |
|---|---|---|---|
| Standard | $99/mo | $65 | $34/mo |
| Pro | $499/mo | $258 | $241/mo |
| Premium (adds voice) | $799/mo | $408 | $391/mo |
| 6 industry "AI Workforce" packages (real estate, auto, home services, personal services, pets, general) | $799/mo + $150 setup | ~$408 | ~$391 |

**Onboarding path** (OBSERVED): partner checklist = install AI chat widget, customize branding, email settings, add 5 businesses to CRM, create a Snapshot Report. SMB checklist inside Business App = set password, "Meet your AI Workforce" (chat with it immediately), connect Google Business Profile, connect business system. First value on both sides is a live AI conversation, not configuration.

**Upsell ladder** (OBSERVED): free products auto-activated on every new account (Local SEO Standard, Advertising Intelligence) create the demo surface. Client portal contains a self-serve Store showing the partner's packages with "Upgrade to unlock full potential" banners. Snapshot Report is the prospecting wedge. Voice is the premium wedge. Human fulfillment services (website builds $149-635 wholesale, copy $80, managed ads from $1,100/mo) are the service upsell.

### B. Funnel anatomy

- YouTube (OBSERVED): 51.3K subs, 1,100+ videos, multiple uploads/week. Three formats: staff build tutorials ("watch me build a $3,000/mo receptionist"), partner success podcast (Conquer Local: Clinton, Luke Pierce, Isabella Bedoya), and Vibe app-builder hype. Modest views (67 to 10K). Role: conversion and belief-building for prospective resellers, not reach.
- X (OBSERVED): 3,931 followers, stale since June. Dead channel.
- Site (OBSERVED): every page CTA pair = "Get a demo" (primary) + "Sign up free, no credit card" (secondary). Weekly live webinar (AI Jump Start, Tuesdays). Certified Partner directory. FAQ names GoHighLevel directly.
- Trial (OBSERVED): free tier is genuinely usable (chat receptionist works, callable voice demo), voice and automations gated. 14-day full trial on top.
- Sales motion INFERRED high confidence: self-serve trial warms you up, but revenue closes through demo calls and webinars. This is sales-assisted SaaS, not pure product-led growth.
- The transcripts themselves are the funnel: partner tells story, host extracts playbook, CTA = free trial. Recruitment content disguised as education.

### C. Product anatomy

- White-label check: NOT GoHighLevel. This is Vendasta's own first-party platform (their equivalent domain trick: client portals live on partner-branded `*.smblogin.com`, e.g. test-west.smblogin.com). OBSERVED.
- Under the hood the AI is white-labeled model access: OpenAI GPT (4o, 4.1 default, 5, 5.1) and Gemini, partner-selectable per agent. No Anthropic models listed. OBSERVED.
- Agent architecture (OBSERVED in config UI): Agent = Triggers (channel events) + Persona (name, avatar, voice) + Model + Capabilities + Knowledge + Automations. Capabilities are modular plain-language prompt blocks, optionally bound to tools/APIs. Library of 25+ prebuilt (capture leads, book appointments, transfer calls, Salesforce/HubSpot/WooCommerce lookups, review analysis, SEO keyword chat, snapshot analysis). Custom capabilities savable and reusable across agents.
- The full combined system prompt is viewable and copyable in the UI. Structure: personality module, channel style module (SMS formatting rules), context injection via template variables, lead-capture state machine (name then phone then email, validation rules, refusal handling), knowledge-retrieval rules ("never tell the user to contact the business, they already are"), and per-capability instruction blocks.
- Knowledge base: text, website scrape, file upload. Stored per business, shared across all that business's agents. OBSERVED.
- Quality test (OBSERVED): with an empty knowledge base, chat receptionist ran multiple knowledge searches, a visible self-verification pass ("Confidence=High"), admitted it lacked the answer, asked a qualifying question, and pivoted to phone-number capture. No hallucinated pricing. Honest. But ~45-60 seconds to respond in the partner test surface.
- Rails (OBSERVED): CRM with lifecycle stages (Lead/Prospect/Customer), unified inbox, Vendasta Payments (invoices, subscriptions, payouts), order management, Task Manager for fulfillment, automations (paid tiers), Executive Report (weekly client proof email), Snapshot Report (auto-generated audit of any business's digital presence).

### D. Labor model

- Zero-human by design: lead capture, booking, follow-up SMS, review responses, report generation, client billing.
- Hidden human hours, partner side: knowledge-base curation, agent tuning, client onboarding, first-line support. Clinton runs this with 3 partners and no office manager; his stack absorbs the receptionist work.
- Hidden human hours, Vendasta side, rentable: "AI Employee Setup" $199-399 one-time, "AI Workforce Optimization" $29-58/mo, white-label website builds, managed ads, listing claims. The partner can outsource nearly all fulfillment labor at wholesale. OBSERVED.
- INFERRED high confidence: the real labor sink for a solo operator is sales conversations and trust-building, which the model deliberately leaves with the partner.

### E. Numbers check

- "Agencies charge $3,000/mo for this" (Kendall video) vs their own profit calculator: 12 deployments = $3,720/mo profit, about $310/client. Their own default packages retail at $99/$499/$799 with margins $34/$241/$391. OBSERVED both. The $3k/mo claim is the dream case, their machine assumes $500-800 retail. INFERRED high confidence.
- 66,000 partners, 8.2M businesses, 100% retention, 70% ROI, 372% conversion lift: all unverifiable vendor claims. The 8.2M figure is listings-database scale, not active users. INFERRED medium-high.
- Clinton's numbers (200 businesses on his stack, near-100% retention): plausible for a 15-year agency converting an existing book, not a cold-start benchmark. INFERRED high.
- Luke Pierce's numbers (80+ deals over 4 years, up to six figures): consistent with a services shop, not a product business. His model is high-touch consulting, opposite end of the spectrum from the 100-400-account product David wants. OBSERVED in transcript.

---

## PHASE 2: JUDGMENT

### What actually works (steal these mechanics)

1. Demo-first sales. Spin up an agent on the prospect's real business data before the meeting, send the link, let them talk to it. Clinton: "that demo sells itself." This is the single highest-leverage mechanic in the whole teardown.
2. The missed-call story. After-hours phone coverage is the universal wedge for main-street. Concrete, provable in week one, anchored against payroll ($3-5k/mo receptionist) not software.
3. System-of-record lock-in. AI is the wedge; CRM + calendar + reviews + billing living in one portal is why nobody leaves. Churn resistance comes from data gravity, not from the AI.
4. Packages, not line items. Clinton refuses to itemize. One price, "you're getting a business system." Kills feature-by-feature price shopping.
5. Proof-of-work notifications. Every captured lead sends "new lead from [your system]" to the owner's phone; weekly executive report summarizes what the AI did. Retention is manufactured through visible receipts.
6. Modular capability architecture. Prompt blocks + tool bindings, reusable across agents and clients. This is exactly how to make 100 clients maintainable solo.
7. Verticalized packages. Same product, six industry wrappers, higher perceived fit at identical cost.
8. Snapshot-style audit as prospecting artifact. Auto-generated, personalized, makes the first conversation about their gaps instead of your product.

### What is theater (do not copy)

- "$3,000/mo per client" as a planning number. Their own calculator says ~$310 margin per client.
- "100% retention," "372%," "70% ROI." Marketing.
- "$0 subscription." It is a minimum spend commitment with a 1-year contract at the tiers that matter (white-label, voice).
- The implied ease. The free tier locks voice, automations, and white-label. The real operating cost of their model at your scale is $499-999/mo minimum plus per-product wholesale.

### What fits David and what does not

Fits: demo-first selling (you already run the $297 audit as diagnosis; the live demo agent strengthens it), missed-call wedge for 45-70 non-technical owners, packages extending Prescription/Install/CTO, portal-as-receipts, capability templates for solo maintainability, white-label reseller channel (Andrew is your version of their Certified Partner program).

Does not fit: their self-serve fantasy for your buyer. Owners aged 45-70 in wellness/food/services will not self-serve-signup for an AI platform. Your funnel closes on trust and warm referrals. Self-serve matters for one thing only: reducing YOUR hours after the sale (self-serve onboarding, self-serve upgrades), not for cold acquisition. Also does not fit: Luke Pierce-style five-figure custom builds as the core; that is an hours business, keep it as the CTO tier only.

### Platform verdict

Decision: stay on GHL sub-accounts now, move to GHL SaaS Pro when the account count and the reseller channel demand it, do not custom-build the platform. Build custom only the thin AI layer on top.

Reasons:
1. Vendasta's whole moat is rails you already have in GHL: sub-accounts, SMS, calendars, pipelines, invoicing, white-label domain, snapshot templates. Rebuilding rails is months of hours that scale with account count, the exact thing to avoid. Custom platform = shiny object; the differentiator was never the rails, it is your agent layer and your install motion.
2. GHL SaaS Pro (~$497/mo) is the direct analog of what Vendasta sells for a $999 minimum plus wholesale: white-label app under your domain, self-serve signup with Stripe, automated sub-account provisioning, usage rebilling with markup (SMS, email, AI minutes). When Andrew's channel or account count 15-30+ makes manual provisioning the bottleneck, that is the trigger. Until then it is $497/mo of idle capability.
3. Custom build later, if ever, only when a specific thing GHL cannot do costs you real money monthly. Track those moments; do not predict them.
4. Rough cost path: today $0-297/mo (GHL free/Starter as needed) + your existing cron infra. At scale-up trigger: $497/mo SaaS Pro + usage. Custom platform: $0, not building it.
5. Watch item: Vendasta free tier is worth keeping as a spy account, and their per-product wholesale model is the pricing floor to beat (their voice SKU: $100/mo wholesale, 300 min).

---

## PHASE 3: BLUEPRINT

### 1. The offer (extends Prescription / Install / CTO, no contradictions)

Name the product line **AI Staff by Studio West** (working name; final name yours). Three public tiers plus the existing top end. Anchor all pricing against payroll, never against software.

| Tier | What they get | Price | Delivery |
|---|---|---|---|
| **Front Desk** | AI answers missed calls + web chat, books into calendar, instant text-back, every lead logged and receipted | $297/mo, $497 setup | Self-serve-ish: templated install, 1 hour of your time |
| **Full Staff** (the Install play, renamed surface) | Front Desk + voice line answering 24/7 + review responses + weekly "what your AI did" report + follow-up campaigns | $597/mo, $1,500 install | Your existing Install runbook (specs/OPS-ai-employee-install-runbook.md) |
| **Growth Desk** | Full Staff + monthly optimization call + new campaign/agent per quarter | $997/mo | Managed, quarterly cadence |
| **Fractional AI CTO** | Existing offer, unchanged | $1,200+/mo, 8-seat cap | Existing |

- Prescription ($3,500 Current State Assessment) stays the front door for bigger fish; the $297 audit stays the front door for main street. Both now END with a live demo agent built on the prospect's own business, not just a document.
- Andrew/reseller channel: same tiers, blank-label, points on top, /pitch stays priceless. Resellers get a co-branded install checklist, you keep delivery.
- Guarantee (steal the mechanic, your words): "If it doesn't capture a real missed lead in 30 days, month one refunded." Cheap to honor, kills the risk objection.
- Never itemize on a sales call. One system, one price. "You don't need my CRM, it syncs to yours" when needed.

### 2. Self-serve funnel, signup to wow in under 10 minutes

The buyer will not self-serve purchase, but the DEMO must self-serve. Page flow on westiii.com:

1. `/ai-staff` landing: one headline about the 9pm phone call nobody answered, one 60-second video of the AI taking a real call, three tier cards, one CTA: "Hear it answer YOUR business."
2. Demo request: form asks for business name + website + cell number only.
3. The wow (target: under 10 min, automated by your cron agent): agent scrapes their site, builds knowledge base, provisions a GHL sub-account from your snapshot, texts the owner: "Your AI receptionist is ready. Call this number and ask it anything about your business." They call, it answers about THEIR services.
4. Follow-up text 20 min later: "Want it answering your real line after hours? 15-min call: [Calendly]."
5. Close on the call using the operational-questions script (what happens to a lead today, who answers at night), then activate on their real number. Install = number forwarding + calendar connect + KB review. First receipts within 48 hours.
6. Weekly digest email from day one: leads captured, calls answered, appointments booked, dollar value estimate. This is the retention engine.

### 3. Tech spec

- Rails: GHL sub-accounts (current). One master snapshot: pipelines, calendar, missed-call textback workflow, chat widget, voice AI agent config, weekly report template. Clone per client.
- AI layer (custom, yours, the differentiator): cron agent that (a) scrapes prospect site to KB, (b) provisions sub-account from snapshot via GHL API, (c) generates the demo text, (d) compiles weekly digest per client from GHL data. Runs in ~/wcc alongside bureau. This is West OS eating its own dog food and becomes a sellable West OS agent later.
- Voice: GHL Voice AI (usage-billed, rebill inside your flat fee; cap minutes per tier like Vendasta caps at 300).
- Capability templates: maintain a library of prompt blocks (lead capture, booking, hours/pricing FAQ, review reply tone) as files in the West OS repo, versioned, reused across all clients. Their modular capability system, your file-based version.
- Site: westiii.com gets `/ai-staff` + demo-request form (wire to existing Upstash/Resend infra).
- Upgrade trigger to GHL SaaS Pro: 15+ active accounts OR Andrew closing deals monthly. Then: app.westiii.com white-label, Stripe rebilling, self-serve upgrades in portal (their in-portal Store mechanic).
- Do not build: custom CRM, custom calendar, custom telephony, custom billing.

### 4. 30-day build order

Week 1: master GHL snapshot + demo provisioning agent (scrape → KB → sub-account → test number).
- **Proof milestone 1: from a cold URL to a callable demo agent in under 10 minutes, no manual steps.**
Week 2: /ai-staff page live, demo form wired, tier pricing published, guarantee copy done. Run 5 demos against real ATL prospects (Jacob's advisor network, God is Dope circle, Corey's meetup contacts).
- **Proof milestone 2: first paid Front Desk or Full Staff client activated on a real phone line.**
Week 3: weekly digest agent live (GHL data → branded email). Backfill to client #1.
- **Proof milestone 3: first "holy s***, it booked someone at night" receipt screenshot from a client, used as content.**
Week 4: reseller kit for Andrew (blank-label one-pager, install checklist, demo flow he can trigger), plus clip-farm content from milestone 3.

### 5. Copy direction (your voice, not theirs)

- Their frame to keep, rewritten: digital labor vs payroll. Yours: "A front desk hire is $35k a year and still misses the 9pm call. This is $297 a month and it never sleeps."
- Concrete over abstract, always the same three receipts: the missed call answered, the appointment booked while they slept, the review responded to before breakfast.
- Words banned: bot, chatbot, automation platform, AI-powered solution, workforce (their word), Snapshot Report (their trademark surface), Sophia/Aura or any of their persona names.
- Words to own: AI employees (already yours across the site), AI staff, front desk, receipts, "your business answers."
- No em dashes, no hype adjectives, no "imagine if." Sentences a 55-year-old salon owner reads once and gets.
- Objection copy, their mechanics in your mouth: "Too busy to set this up" gets "You give me one hour, I do the rest." "Tried a chatbot before" gets "So did my clients. This one is trained on your business and I tune it myself." "My business is different" gets "You're right, the judgment stays with you. It just makes sure you never miss the person asking for it."

### Rewrite flags (things observed that must NOT be reproduced)

- Their combined system prompt: structure stolen, wording rewritten from scratch (state-machine lead capture, channel style rules, never-say-contact-us rule are mechanics; the sentences are theirs).
- Package names Standard/Pro/Premium: generic but lazy; use Front Desk / Full Staff / Growth Desk.
- The maid-of-honor Saturday-night story beat: invent your own (ATL barbershop before a wedding, HVAC call in a July heatwave).
- Their persona headshot style (diverse professional avatars): commission or generate your own set.
