# westiii.com

David West III's site. Next.js 16 (App Router), React 19, Tailwind 4. Vercel deploys `main`.

Read `AGENTS.md` and `DESIGN.md` before changing anything. This Next.js version differs from older ones, and the docs that match it are in `node_modules/next/dist/docs/`.

## Run it

```bash
npm install
```

```bash
npm run dev -- --port 4006
```

Port 3000 belongs to another project on this machine. Use 4006 (or 4011 for a second copy).

```bash
npm run build
```

```bash
npx @google/design.md lint DESIGN.md
```

## Pages

Public: `/`, `/learn`, `/services`, `/book`, `/real-estate`, `/builds`, `/creative`, `/brands`, `/hope` and its journal.

Unlisted and noindex: `/referral`, `/review`, `/pitch`, `/agent`, `/r/[slug]` (comment-keyword pages reached by DM link), `/preview/vitamineral`, `/weststone`, `/ai-agents-demo`.

Retired addresses redirect in `next.config.ts`. `app/sitemap.ts` lists the public pages.

The canonical host is `www.westiii.com`. The apex redirects to it, so test with the `www` host.

## Where things live

- `app/lib/links.ts`: Calendly, community and social links. `freeCallUrl(placement)` and `assessmentUrl(placement)` tag each button so a booked call names the page it came from.
- `app/components/TrackClicks.tsx`: counts clicks on every Calendly link.
- `app/api/prices`: prices on `/learn` and `/brands` sit behind one email.
- `app/lib/formGuard.ts`, `app/lib/notify.ts`: rate limits, validation and email alerts for every form.
- `app/lib/deliverables.ts`: content for the `/r/[slug]` pages.
- `app/hope/journal/posts.ts`: journal posts. A post with `status: "draft"` renders in dev only.

## Environment variables

Names only. Values live in Vercel.

- `KV_REST_API_URL`, `KV_REST_API_TOKEN`: Upstash Redis (forms, rate limits, chat sessions)
- `RESEND_API_KEY`, `RESEND_FROM`, `NOTIFY_TO`: form alerts by email
- `ANTHROPIC_API_KEY`, `AGENT_MODEL`, `LISTING_QA_MODEL`: the `/agent` and `/real-estate` chat demos
- `CRON_SECRET`: the nightly `/api/agent/sweep` cron in `vercel.json`

## Video

`.gitignore` excludes `public/**/*.mp4`. A video the site needs has to be added with `git add -f`, or it never deploys.
