import Link from "next/link";

export const metadata = {
  title: "Book — David West III",
  description:
    "A paid 60-minute AI implementation audit. Honest answers to where AI actually fits in your business or career, and what to build first.",
};

const CALENDLY_URL = "https://calendly.com/davidawest25/ai-audit";

const youLeaveWith = [
  {
    title: "Three real leverage points",
    body: "Specific to your business or career. The biggest leaks I see in your current setup and the AI moves that fix them.",
  },
  {
    title: "A 30-day playbook",
    body: "What to build, what to buy, what to ignore, and the order to do it in. Written for your specific situation.",
  },
  {
    title: "A follow-up note in 24 hours",
    body: "Bulleted recap of the leverage points, the playbook, and any links or tools we discussed. Sent to your inbox.",
  },
  {
    title: "Honest answers, no pitch",
    body: "If a free tool solves your problem, I will tell you. If you do not need me, I will tell you that too. The call is the work.",
  },
];

const builtFor = [
  {
    title: "Founders and operators",
    body: "You run a business and you know AI should be doing more inside it. You want a clear next move, not a tool list.",
  },
  {
    title: "Practice and clinic owners",
    body: "You want the front desk, intake, follow-up, and recovery workflows to run on AI without breaking the patient experience.",
  },
  {
    title: "Professionals at an inflection point",
    body: "The career ladder is changing. You want a sober read on where your skills actually fit in an AI-shifted market.",
  },
  {
    title: "Teams shipping with agents",
    body: "You are building, but the workflow is brittle. You want a second set of eyes on the architecture before it scales.",
  },
];

const bring = [
  "One link, doc, or screenshot of the thing you want us to dig into",
  "A specific decision, build, or problem you want help on",
  "Sixty focused minutes. No multi-tasking; the call is the work",
];

const proof = [
  { value: "8+", label: "years across cybersecurity, systems, and solutions engineering" },
  { value: "6M+", label: "content views in 6 months across AI, creative, and systems work" },
  { value: "435", label: "AI community members learning tools, workflows, and implementation" },
  { value: "24h", label: "written follow-up note in your inbox after every call" },
];

export default function BookPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <section className="mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Work With David
          </p>
          <h1 className="mb-6 max-w-5xl text-5xl font-black leading-none tracking-tight text-[var(--ink)] md:text-7xl">
            A 60-minute{" "}
            <span className="text-[var(--crimson)]">AI implementation audit.</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[var(--ink-secondary)]">
            Honest answers to where AI actually fits in your business or career, and what
            to build first. If we end up building together, the call fee is credited toward
            the engagement.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-[var(--crimson)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
            >
              Book Your Audit ($297)
            </a>
            <Link
              href="/builds"
              className="inline-flex items-center justify-center rounded border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
            >
              See Past Work
            </Link>
          </div>
        </section>

        <section className="mb-20 border-l-2 border-[var(--crimson)] pl-8">
          <p className="mb-4 text-2xl font-black leading-snug text-[var(--ink)] md:text-3xl">
            Most AI calls are sales calls. This one is a working session.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            The next 60 minutes are spent on your specific situation. We map what is
            working, what is leaking, what AI actually solves, and what you should build
            first. You leave with a real plan, not a follow-up sequence.
          </p>
        </section>

        <section className="mb-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            What You Leave With
          </p>
          <h2 className="mb-10 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Four deliverables. One hour.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {youLeaveWith.map((item) => (
              <div key={item.title} className="rounded-lg border border-[var(--border)] p-7">
                <h3 className="mb-3 text-xl font-black text-[var(--ink)]">{item.title}</h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 bg-[var(--surface)] px-6 py-12 md:px-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Built For
          </p>
          <h2 className="mb-10 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            People who want a real answer, not a sales call.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {builtFor.map((item) => (
              <div key={item.title} className="rounded-lg border border-[var(--border)] bg-white p-7">
                <h3 className="mb-3 text-xl font-black text-[var(--ink)]">{item.title}</h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            What To Bring
          </p>
          <h2 className="mb-10 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Three things before we get on the call.
          </h2>
          <div className="space-y-4">
            {bring.map((item, idx) => (
              <div
                key={item}
                className="grid gap-4 rounded-lg border border-[var(--border)] p-6 md:grid-cols-[96px_1fr]"
              >
                <p className="text-xs font-black uppercase tracking-widest text-[var(--crimson)]">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="leading-relaxed text-[var(--ink-secondary)]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => (
            <div key={item.label} className="rounded-lg border border-[var(--border)] p-6">
              <p className="mb-2 text-4xl font-black leading-none text-[var(--ink)]">
                {item.value}
              </p>
              <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="mb-24 rounded-lg border border-[var(--border)] p-8 md:p-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            The Fine Print
          </p>
          <h2 className="mb-4 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Refunds, rescheduling, and what is in scope.
          </h2>
          <ul className="max-w-3xl space-y-3 leading-relaxed text-[var(--ink-secondary)]">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--crimson)]" />
              <span>
                Reschedule freely up to 24 hours before the call. Inside 24 hours, no
                refunds, but you can reschedule once.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--crimson)]" />
              <span>
                If we end up working together on an engagement, the $297 is credited
                toward the project fee.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--crimson)]" />
              <span>
                The call is advisory. I do not deliver code, builds, or implementation
                inside this 60 minutes. Those are scoped separately.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--crimson)]" />
              <span>
                Anything involving protected health information, regulated data, or
                compliance review is scoped with the right tooling, not on this call.
              </span>
            </li>
          </ul>
        </section>

        <section className="rounded-lg bg-[var(--ink)] p-10 text-center md:p-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            Book Your Audit
          </p>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Pick a time. Pay. Show up with the thing you want to fix.
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            One hour, $297, a working session you walk out of with a real plan and a
            written follow-up the next day. Two slots open per day.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded bg-[var(--crimson)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
          >
            Book Your Audit
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
