import Link from "next/link";

export const metadata = {
  title: "Builds",
  description:
    "Production AI systems shipped in public: multi-agent orchestration, command-center dashboards, video studios, and live client work.",
};

type ClientResult = {
  business: string;
  problem: string;
  built: string;
  number: string;
  numberLabel: string;
};

/**
 * Real delivered engagements only. Every entry needs a number the client would
 * confirm out loud. This section does not render while the array is empty, and
 * it never gets a placeholder. Under-promise: if the projection was $8k/mo and
 * they saw $12k, publish the $12k. Never the other way around.
 */
const clientResults: ClientResult[] = [];

const builds = [
  {
    number: "01",
    name: "West Command Center",
    status: "Production",
    statusColor: "bg-emerald-500",
    tagline: "Persistent multi-agent orchestration framework on Claude.",
    body: [
      "A persistent multi-agent system running on Claude Opus 4.7 and Sonnet 4.6, PM2-managed, with Telegram as the primary I/O surface. Designed around an orchestrator agent that delegates to specialized agents through a shared connector library, with structured eval, observability, and scheduled cron jobs.",
      "A production intelligence agent runs a daily pipeline end-to-end: it scrapes job and company APIs across roughly 50 AI-first companies, scores fit against defined criteria with Gemini, drafts long-form outreach for anything scoring high, writes canonical dashboard state, and ships a Telegram digest before 8am. A daily-brief agent and a Telegram-native orchestrator run alongside it on the same framework.",
      "The framework is the substrate everything else runs on. Studio West client deliverables, content workflows, and the West HQ dashboard all read from the same agent state.",
    ],
    stack: [
      "Claude Opus 4.7 / Sonnet 4.6",
      "Claude Agent SDK",
      "Node.js",
      "PM2",
      "Telegram Bot API",
      "Apify",
      "ElevenLabs Scribe",
      "FFmpeg",
      "Gemini 2.5 / 3.1",
    ],
    metrics: [
      { label: "Agents in production", value: "3" },
      { label: "Daily cron pipelines", value: "1" },
      { label: "Uptime model", value: "PM2 auto-restart" },
    ],
  },
  {
    number: "02",
    name: "West HQ",
    status: "Production",
    statusColor: "bg-emerald-500",
    tagline: "Single-pane command center for revenue, projects, and content intelligence.",
    body: [
      "A custom dashboard surfacing the systems I actually run: Daily Brief, Project Pulse, Revenue Scoreboard, content scout output, AI generations gallery, and the West Signal intelligence feed. Built on Next.js with custom tabs and a flat JSON / JSONL state layer that any agent in the West Command Center can read or write.",
      "Auto-starts on login through PM2. Tabs are added by dropping a config entry and a data folder. The shape is intentional: dashboards in this house are owned by the operator, not by the SaaS vendor.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "PM2", "JSON / JSONL state"],
    metrics: [
      { label: "Live tabs", value: "8" },
      { label: "Data sources", value: "Local agent state + APIs" },
      { label: "Auth model", value: "Local-only" },
    ],
  },
  {
    number: "03",
    name: "Studio West Creatives",
    status: "Active client work",
    statusColor: "bg-amber-500",
    tagline: "AI Operating Systems and creative production for SMBs and brands.",
    body: [
      "An AI agency with two service lines. The first delivers AI Operating Systems for small and mid-market businesses: Next.js + Vercel + GoHighLevel as the core stack, with custom CRM, lead capture, automated sequences, and Phase 2 agentic phone assistants integrated against the customer's system of record.",
      "The second is creative production: motion graphics, video, and generative imagery using Fal AI Seedance 2.0, Nano Banana, Veo 3.1, Kling, and ElevenLabs. The same engineering rigor applies on both sides. Every engagement starts with an outcome metric and a baseline before scope is locked.",
      "Active engagement: a foreclosure-acquisition system for a real estate investment firm, shipped July 2026. Property scoring, lead routing, and outreach sequences built on GoHighLevel, with a live pilot running through August.",
    ],
    stack: [
      "Next.js",
      "Vercel",
      "GoHighLevel",
      "Claude",
      "Fal AI / Seedance 2.0",
    ],
    metrics: [
      { label: "Founded", value: "Nov 2025" },
      { label: "Pipeline value", value: "Phase 1 active" },
      { label: "Service lines", value: "2" },
    ],
  },
  {
    number: "04",
    name: "Hyperframes",
    status: "In production use",
    statusColor: "bg-emerald-500",
    tagline: "Video editing studio with brand-token system and local transcription.",
    body: [
      "A custom video editing pipeline built on HTML, GSAP, and FFmpeg, with local Whisper transcription and ElevenLabs Scribe for word-level diarization. Brand tokens live in CSS so every cut inherits West III color, typography, and motion defaults without manual styling.",
      "Built to remove the slow parts of video work: filler-word removal, silence trimming, color grading, and subtitle burn-in are all scripted. The output of West Command Center's content scouts feeds in directly when I'm cutting commentary on what other creators are shipping.",
    ],
    stack: [
      "HTML",
      "GSAP",
      "FFmpeg",
      "Whisper (local)",
      "ElevenLabs Scribe",
      "Brand-token CSS",
    ],
    metrics: [
      { label: "Brand spec", value: "Live" },
      { label: "Transcription", value: "Word-level + diarization" },
      { label: "Output", value: "Editorial-ready cuts" },
    ],
  },
];

const reach = [
  { label: "Content reach (last 6 months)", value: "6M+", detail: "across IG, YouTube, X, LinkedIn, TikTok" },
  { label: "Skool community", value: "435", detail: "West HQ: AI Everything" },
];

const handles = [
  { platform: "YouTube", handle: "@WestTech3", href: "https://www.youtube.com/@WestTech3" },
  { platform: "Instagram", handle: "@__dw3", href: "https://www.instagram.com/__dw3/" },
  { platform: "X", handle: "@___DW3", href: "https://x.com/___DW3" },
  { platform: "TikTok", handle: "@___dw3", href: "https://www.tiktok.com/@___dw3" },
  { platform: "LinkedIn", handle: "David West III", href: "https://www.linkedin.com/in/david-west-iii-289ba7148" },
];

export default function BuildsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            David West. The AI guy in Atlanta.
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[var(--ink)] leading-none mb-6">
            I find the wasted hours.
            <br />
            <span className="text-[var(--crimson)]">Then I build the fix.</span>
          </h1>
          <p className="text-xl text-[var(--ink-secondary)] max-w-2xl leading-relaxed mb-8">
            I assess how the work gets done, then I build what the assessment proves
            you need. I work in cybersecurity, on AI agent security specifically.
            These are the systems I have shipped.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm text-[var(--ink-secondary)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Map. Optimize. Automate.
          </div>
        </div>

        <div className="mb-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            What this looks like for a business owner
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] leading-tight mb-10">
            The work has to show up in the numbers.
          </h2>
          <p className="text-[var(--muted)] max-w-xl leading-relaxed mb-12">
            I built a real estate investment firm a system that scored 500 foreclosure
            addresses down to the 200 worth calling. Their team stopped guessing which
            doors to knock on, and one extra close pays for the build ten times over.
            Everything below is the engineering behind work like that.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--crimson)] text-white font-semibold rounded hover:bg-[var(--crimson-light)] transition-colors text-sm"
          >
            Book the $999 assessment
          </Link>
        </div>

        {/* Client results. Renders only when a real, delivered number exists. */}
        {clientResults.length > 0 && (
          <div className="mb-24">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
              Client results
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] leading-tight mb-10">
              What it did for their business.
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {clientResults.map((result) => (
                <div
                  key={result.business}
                  className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8"
                >
                  <p className="text-3xl font-black tracking-tight text-[var(--crimson)]">
                    {result.number}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                    {result.numberLabel}
                  </p>
                  <p className="mt-6 text-lg font-black leading-snug text-[var(--ink)]">
                    {result.business}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
                    &ldquo;{result.problem}&rdquo;
                  </p>
                  <p className="mt-4 border-t border-[var(--border)] pt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {result.built}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Builds list */}
        <div className="space-y-12 mb-24">
          {builds.map((b) => (
            <div
              key={b.name}
              className="border border-[var(--border)] rounded-2xl overflow-hidden bg-white"
            >
              {/* Header strip */}
              <div className="border-b border-[var(--border)] bg-[var(--surface)] px-8 py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black tracking-widest text-[var(--crimson)]">
                    {b.number}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black text-[var(--ink)] tracking-tight">
                    {b.name}
                  </h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`w-2 h-2 rounded-full ${b.statusColor}`} />
                  <span className="text-xs font-semibold tracking-wide text-[var(--ink-secondary)]">
                    {b.status}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10">
                <p className="text-lg font-semibold text-[var(--ink)] mb-6 leading-snug">
                  {b.tagline}
                </p>

                <div className="space-y-4 mb-8 max-w-3xl">
                  {b.body.map((p, i) => (
                    <p key={i} className="text-[var(--ink-secondary)] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Stack */}
                <div className="mb-8">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-3">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {b.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--ink-secondary)] rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--border)]">
                  {b.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-1">
                        {m.label}
                      </p>
                      <p className="text-base font-bold text-[var(--ink)]">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reach */}
        <div className="mb-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            Distribution
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[var(--ink)] mb-4 leading-tight">
            The build is half of it. The other half is reach.
          </h2>
          <p className="text-[var(--muted)] max-w-xl leading-relaxed mb-12">
            Building AI systems is one muscle. Communicating them clearly to a
            wide audience is another. The numbers below are the second muscle.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {reach.map((r) => (
              <div
                key={r.label}
                className="border border-[var(--border)] rounded-xl p-6 hover:border-[var(--crimson)] transition-colors duration-300"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-3">
                  {r.label}
                </p>
                <p className="text-4xl font-black text-[var(--ink)] mb-2 leading-none">
                  {r.value}
                </p>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                  {r.detail}
                </p>
              </div>
            ))}
            <div className="border border-[var(--border)] rounded-xl p-6 hover:border-[var(--crimson)] transition-colors duration-300">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-3">
                Find me on
              </p>
              <ul className="space-y-1.5">
                {handles.map((h) => (
                  <li key={h.platform} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-[var(--muted)]">{h.platform}</span>
                    <a
                      href={h.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[var(--ink)] hover:text-[var(--crimson)] transition-colors truncate"
                    >
                      {h.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Engineering background */}
        <div className="mb-24 border-l-2 border-[var(--crimson)] pl-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            Background
          </p>
          <p className="text-2xl md:text-3xl font-black text-[var(--ink)] leading-snug mb-4">
            Eight years across application security, privileged access management, and SOC operations.
          </p>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-3xl">
            Solutions Engineer at a cybersecurity company today, working on AI
            agent security. Solutions Engineer at Snyk before that. Cyber SOC
            Security Analyst at Georgia State University before that. The same
            engineering rigor that goes into evaluating a customer's PAM
            architecture goes into the agent systems above. Cybersecurity-grade
            reliability is not a marketing line, it is the operating mode.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[var(--ink)] rounded-2xl p-10 md:p-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-4">
            Want a closer look?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Walk through any of these
            <br />
            on a call.
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
            Recruiters, hiring managers, or future clients: I am happy to
            screen-share a live walkthrough of any system above. Faster than a
            resume, more honest than a slide deck.
          </p>
          <Link
            href="/#connect"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--crimson)] text-white font-semibold rounded hover:bg-[var(--crimson-light)] transition-colors text-sm"
          >
            Start the Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
