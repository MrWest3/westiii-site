import Link from "next/link";

export const metadata = {
  title: "Speaking — David West III",
  description:
    "Keynotes, fireside conversations, and hands-on AI workshops. David West III speaks on AI agents, implementation, creative AI, and career leverage in an AI-shifted market.",
};

const BOOKING_EMAIL = "StudioWest3@proton.me";
const MAILTO = `mailto:${BOOKING_EMAIL}?subject=Speaking%20Inquiry%20-%20David%20West%20III`;

const talks = [
  {
    format: "Hands-On Workshop",
    duration: "90-120 minutes",
    title: "Build Your First AI Operator: Ship a Working Agent in a Room Full of Builders",
    body: "Attendees walk in with a laptop and walk out with a working AI agent. Live build, real tools, zero slideware theory. Built for conferences, accelerators, and teams that learn by shipping.",
    audience: "Builders, founders, technical and semi-technical teams",
  },
  {
    format: "Fireside / Keynote",
    duration: "30-60 minutes",
    title: "Stay Valuable: A Real Conversation About AI and Career Leverage in STEM",
    body: "A sober look at what AI actually changes about careers, what it leaves alone, and how to position yourself while the ladder is moving. Honest answers over hype in both directions.",
    audience: "Students, early and mid-career professionals, career programs",
  },
  {
    format: "Corporate Training",
    duration: "Half day to multi-session",
    title: "AI Implementation Training for Teams",
    body: "Hands-on training for teams that want AI inside their actual work: creative teams, operations, and agentic workflows. Scoped to your stack and your use cases, from startups to enterprise.",
    audience: "Companies of any size, creative and operations teams",
  },
];

const proof = [
  { value: "8+", label: "years across cybersecurity, systems, and solutions engineering" },
  { value: "6M+", label: "content views in 6 months across AI, creative, and systems work" },
  { value: "435", label: "members in the West HQ AI community" },
  { value: "ATL", label: "based in Atlanta, available to travel" },
];

const appearances = [
  {
    title: "Live Podcast + AI Workshop",
    detail: "Live audience recording followed by a hands-on AI workshop. Atlanta, May 2026.",
  },
  {
    title: "Build Your Agent Workshop",
    detail: "Room of builders shipping their first working AI agent in one session. Atlanta, June 2026.",
  },
  {
    title: "West HQ Live Q&A",
    detail: "Weekly live AI teaching and Q&A inside a 435-member community. Every Wednesday.",
  },
];

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-[var(--border)] px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink-secondary)] transition-colors hover:text-[var(--crimson)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            Back
          </Link>
          <a
            href={MAILTO}
            className="rounded bg-[var(--crimson)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
          >
            Book David
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Hero */}
        <section className="mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Speaking
          </p>
          <h1 className="mb-6 max-w-5xl text-5xl font-black leading-none tracking-tight text-[var(--ink)] md:text-7xl">
            Talks and workshops where people{" "}
            <span className="text-[var(--crimson)]">actually build.</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[var(--ink-secondary)]">
            I speak on AI agents, implementation, creative AI, and career leverage in an
            AI-shifted market. Every session is grounded in systems I run in production,
            and workshops end with attendees shipping something real.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={MAILTO}
              className="inline-flex items-center justify-center rounded bg-[var(--crimson)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
            >
              Book David to Speak
            </a>
            <Link
              href="/builds"
              className="inline-flex items-center justify-center rounded border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
            >
              See the Systems
            </Link>
          </div>
        </section>

        {/* Positioning statement */}
        <section className="mb-20 border-l-2 border-[var(--crimson)] pl-8">
          <p className="max-w-3xl text-2xl font-black leading-snug text-[var(--ink)] md:text-3xl">
            Most AI talks are demos of someone else&apos;s product. These sessions come from a
            builder running multi-agent systems, an AI agency, and a 435-member community.
            The audience leaves with moves they can make Monday morning.
          </p>
        </section>

        {/* Signature sessions */}
        <section className="mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Signature Sessions
          </p>
          <h2 className="mb-10 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Three formats, all hands-on.
          </h2>
          <div className="space-y-6">
            {talks.map((talk) => (
              <div
                key={talk.title}
                className="rounded-2xl border border-[var(--border)] p-8 transition-colors hover:border-[var(--crimson)] md:p-10"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                    {talk.format}
                  </span>
                  <span className="rounded-full bg-[var(--surface)] px-2 py-0.5 text-xs font-semibold text-[var(--ink-secondary)]">
                    {talk.duration}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-black text-[var(--ink)] md:text-2xl">
                  {talk.title}
                </h3>
                <p className="mb-4 max-w-3xl leading-relaxed text-[var(--ink-secondary)]">
                  {talk.body}
                </p>
                <p className="text-sm text-[var(--muted)]">
                  <span className="font-semibold text-[var(--ink-secondary)]">Best for:</span>{" "}
                  {talk.audience}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent appearances */}
        <section className="mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            On Stage
          </p>
          <h2 className="mb-10 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Recent sessions.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {appearances.map((a) => (
              <div key={a.title} className="rounded-xl border border-[var(--border)] p-6">
                <h3 className="mb-2 font-bold text-[var(--ink)]">{a.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{a.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proof bar */}
        <section className="mb-20 rounded-2xl bg-[var(--surface)] p-8 md:p-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label}>
                <p className="text-3xl font-black text-[var(--ink)]">{p.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-[var(--ink)] p-10 text-center md:p-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            Booking
          </p>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Put a builder on your stage.
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            Send the event, the audience, and the date. I will come back within 48 hours
            with fit, format recommendation, and availability.
          </p>
          <a
            href={MAILTO}
            className="inline-flex items-center gap-2 rounded bg-[var(--crimson)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
          >
            Book David to Speak
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </section>
      </div>
    </main>
  );
}
