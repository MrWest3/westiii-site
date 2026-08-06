# OPS: InvestFest, The Bottleneck Agent

Format: roaming the floor, pitching booths and people. Priority order for getting the agent in front of someone:
1. They scan a QR card and keep the card.
2. They scan a QR from your phone screen.
3. Last resort: your phone in their hands.

Event: Aug 7, 8, 9. Compressed schedule, working from Aug 5 (D-2). The QR encodes a fixed URL, so print does NOT wait on the deploy. Print and build run in parallel.

## Tue Aug 5: build day, cards ordered

- [ ] Generate the QR: encode `https://westiii.com/agent?src=investfest`, error correction level H, dark on light, no logo overlay for v1 (logos cost scan reliability). Export at print resolution (vector or 1200px+). The URL is fixed, so this happens before the site is live.
- [ ] Test the QR image: iPhone camera and Android camera, from 2 feet, under bad lighting, and from a photo of it on another phone. It will resolve to a 404 until deploy; a scan that opens the URL is a pass.
- [ ] Card layout: QR dominant on one side. Under it, one line: "Find your bottleneck in 3 minutes." Back side: name, "AI consultant, Atlanta", westiii.com, and the URL `westiii.com/agent` printed in text as the QR fallback. No "audit" anywhere on the card. No em dashes.
- [ ] Order same-day or next-day business cards for PICKUP, no shipping: FedEx Office or Staples, several near midtown ATL. Backup if cards slip: a printed sheet of QR stickers, or QR full-screen saved to photos.
- [ ] Env vars into Vercel: `ANTHROPIC_API_KEY`, `CRON_SECRET`. Same key into `.env.local` for local eval.
- [ ] Codex builds from `SPEC-westiii-agent-v1.md`. Claude reviews the diff same day.
- [ ] Eval suite (`EVAL-westiii-agent-v1.md`) first pass tonight on localhost:4001. Prompt fixes to Claude, shell bugs to Codex.

## Wed Aug 6: ship day

- [ ] Eval suite passes twice through. Mechanical acceptance criteria pass (turn cap 409, 429 before stream, mid-stream kill recovery, 375px).
- [ ] David approves the push. Vercel deploys.
- [ ] Production smoke test on a phone, LTE, wifi OFF: one full conversation, capture, routed CTA, `Agent LEAD:` email lands at StudioWest3@proton.me within a minute. Venue wifi never counts as a test.
- [ ] Scan the printed card against production.
- [ ] Pick up cards.

## Wed Aug 6 evening: phone and monitoring prep

- [ ] Save the QR image as your phone lock screen (fastest possible "scan this").
- [ ] Add a home screen shortcut to `westiii.com/agent?src=investfest` for the hand-them-the-phone case. One tap, fresh session (every page load starts a new conversation, so reset = reload).
- [ ] Phone config for hand-offs: Do Not Disturb on, notification previews off (strangers will hold your phone), auto-lock set to 5 minutes, brightness up.
- [ ] Battery: full charge, pack a battery bank and cable.
- [ ] Verify emails are landing: run one real conversation end to end on LTE, confirm the `Agent LEAD:` email hits StudioWest3@proton.me within a minute and the transcript reads clean.
- [ ] Confirm `ANTHROPIC_API_KEY` billing has headroom and the daily caps are set (300 conversations, 3000 turns). Know the worst-case day is low tens of dollars.
- [ ] Bookmark the Upstash console on your phone for a quick `agent:budget:{date}` check.

## The hand-off script

Two sentences, then the card or phone is in their hand:

"I build AI agents for businesses. This one finds the thing you should stop doing yourself, takes three minutes, scan that."

If they hesitate: "It is a live demo of what I sell. You talk, it does the math, and you keep the read out."

Do not stand over them narrating. Let the agent work. When they hit the read back screen, that dollar figure is your opening for the real conversation.

## During the event, twice a day

- [ ] Scan the inbox for `Agent` subjects. `Agent LEAD:` emails get a same-day reply from you personally (the final screen promised 24 hours, beat it).
- [ ] Glance at the Upstash budget counters. If `convos` is anywhere near 300, something viral or abusive is happening; check the transcripts before raising the cap.
- [ ] Check the site loads on LTE. If the agent is down, do not debug on the floor: switch to cards-only mode, take their info, run it with them later.

## No-connectivity fallback

If the venue is a dead zone and LTE fails:
- The card still works. It leaves with them and the QR fires when they get signal.
- For a hot lead standing in front of you, go analog: their name, business, email, and the one function they would hand off, written into your phone notes. Send them the agent link that night and run the read back yourself in the follow-up email.

## After the event

- [ ] Sweep the inbox and Upstash for every `[investfest]` transcript. Each completed one is pre-work for a paid assessment pitch; reference their own numbers in the follow-up.
- [ ] Reply to every capture within 24 hours of their conversation, per the promise on the final screen.
- [ ] Decide whether `/agent` stays public as a standing funnel piece or gets a gate. It is noindexed either way.
