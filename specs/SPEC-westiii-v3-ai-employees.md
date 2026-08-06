# SPEC: westiii.com v3 — AI Employees, Company Brain, First AI Employee

Owner: David West. Planner + Builder: Claude. Date: 2026-08-06.
**Extends** `SPEC-westiii-v2-offer-alignment.md`. Design system, voice rules, and the 7-27 ladder stand. This spec adds one SKU, one page, and reframes buyer-facing copy around roles instead of systems.
**Blueprint:** Corey Ganim, "How to Sell Managed AI Employees to Small Businesses" (x.com/coreyganim/status/2084974468347121940, 2026-08-05, read in full).

---

## 1. Why this change

The site sells abstractions ("Agent HQ", "operating system"). Buyers hire roles. The managed-AI-employee frame is buyer-legible and maps to what David already runs on himself daily. Three shifts:

1. **Sell a role, not an agent.** An AI employee ships with a job description, company knowledge, scoped tool access, approval gates, monitoring, and coaching.
2. **Adoption is the product.** The management layer exists because working software does not create usage. This was already David's differentiator; the article validates it independently.
3. **Prove it weekly.** A value ledger: every task logged with time returned and estimated dollar value, corrected by the client, never invented.

## 2. Decisions locked (David, 2026-08-06)

1. The 7-27 ladder stays at its prices. A per-agent package is ADDED.
2. Homepage hero leads with the employee story. $999 guarantee and dual CTAs stay.
3. The knowledge layer is publicly named **Company Brain**: built from the assessment, lives in a GitHub repo the client owns, never sold standalone. This is the section-D resolution made visible.
4. Buyer-facing term: **AI employees**. "Agents" survives in technical contexts (/builds, /agent).

## 3. The new SKU

**Your First AI Employee. $2,500 install + $750/mo managed.**
- One clearly defined role. Includes: written job description, starter Company Brain, scoped tool access, approval gates, a shared channel with owner + employee + David (Telegram by default; Buzz, Block's human-plus-agent workspace, for teams that want the employee inside their team chat), monitoring and repairs, the weekly value ledger, workflow coaching for the owner.
- Sits between the $999 assessment and Agent HQ. Assessment fee credits toward it.
- Recurring ladder: $750/mo (one employee) → $1,500/mo (Fractional AI CTO) → $3,000/mo (Operating Retainer).
- Buzz is an option, never the default, and is not sold to a client until David has run it on his own stack.

## 4. Starting roles (the /ai-employees role cards)

Admin desk · Executive assistant · Research and prospecting · Recurring reports · File and document management · Content support.
Each card: role name + one "one request" scenario written in second person, explicitly illustrative. No invented clients, no invented metrics, no implied results.

## 5. Route and component changes

| Target | Action |
|---|---|
| `app/ai-employees/page.tsx` | NEW. Sections: hero, six role cards, Meet my own team (Radar / Producer / Chief of Staff / Bookkeeper / David's Company Brain, described truthfully), Company Brain, the managed layer + illustrative value ledger, security band (BeyondTrust), how it starts + pricing, FAQ. WebPage + Service JSON-LD per the /atlanta pattern. |
| `Hero.tsx` | New copy, employee story leads. Primary CTA /book unchanged. Secondary → /ai-employees. |
| `AiEmployees.tsx` | NEW homepage teaser after HowItWorks: three beats + links to /ai-employees and /agent. |
| `Offers.tsx` | 01 $999 · 02 $3,500 · 03 First AI Employee $2,500 + $750/mo · 04 Agent HQ from $15,000 · 05 Ongoing $1,500-3,000/mo · muted Advisory Block. |
| `app/services/page.tsx` | Insert First AI Employee at 03, renumber. Agent HQ + Operating Retainer included lists rewritten (Company Brain, approval gates, value ledger, shared channel). |
| `app/book/page.tsx` | FAQ "what happens after": most people hire their first AI employee off the playbook. |
| `app/assessment/page.tsx` | "After" section names the Company Brain. |
| `app/builds/page.tsx` | Remove stale claims: PCF-as-active, retired scout agents. |
| `Nav.tsx`, `Footer.tsx`, `sitemap.ts` | Add AI Employees link; sitemap at 0.9. /agent stays noindexed, linked contextually. |

## 6. Copy rules (hard)

No em dashes. No emojis. No "not X, but Y". No "audit" in buyer copy. No hype adjectives. Sounds like David across a table. Every example number labeled illustrative. Advisory Block never priced "per month". Nothing priced under $999.

## 7. Acceptance

1. `npm run build` clean.
2. A visitor can go /, understand the employee offer, reach /ai-employees in one click, and reach a booking path in two.
3. Offers grid holds five cards cleanly at 375px and desktop with no layout shift.
4. Sweeps pass: no em dashes, no buyer-facing "audit", no sub-$999 price, Advisory never "per month".
5. Every CTA resolves. /agent reachable from / and /ai-employees.
6. No commit or push without David's approval.
