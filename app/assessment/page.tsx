import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";
import CostOfInaction from "../components/CostOfInaction";

export const metadata: Metadata = {
  title: {
    absolute: "Current State Assessment",
  },
  description:
    "A Current State Assessment for Atlanta companies doing $2M to $50M. I map every workflow, price the cost of inaction, and hand you the build plan. $50,000 in annualized reclaimable cost found in 14 days, or you don't pay.",
  // Deliberately noindexed. This is a private assessment link handed to
  // qualified companies directly. It is not a public funnel entry and it
  // must not compete with the $999 assessment in search.
  robots: {
    index: false,
    follow: true,
  },
};

const CALENDLY_URL = "https://calendly.com/davidawest25/ai-audit";

const forYou = [
  "You do $2M to $50M a year.",
  "Your data lives in six or more tools.",
  "Your team re-enters the same information in more than one place.",
  "You have tried AI and it did not stick.",
  "You are still the routing layer for your own company.",
];

const notForYou = [
  "You want someone to build one automation.",
  "You are shopping for the cheapest quote.",
];

const steps = [
  {
    number: "01",
    title: "Map every workflow",
    body: "With the people actually doing the work, and with leadership.",
  },
  {
    number: "02",
    title: "Cut what should not exist",
    body: "Most processes are twelve steps when they need seven.",
  },
  {
    number: "03",
    title: "Price the cost of inaction",
    body: "In your numbers, pulled from your own calls.",
  },
  {
    number: "04",
    title: "Design the system",
    body: "Architecture, data flow, security. Before and after, side by side.",
  },
  {
    number: "05",
    title: "Hand you the plan",
    body: "Phased, priced, with an ROI you can hold me to.",
  },
];

const sections = [
  {
    number: "01",
    title: "Executive summary",
    body: "Your situation, my proposal, and the expected outcome. One page, in your language.",
  },
  {
    number: "02",
    title: "Current state",
    body: "Visual process maps for every major workflow. Who owns each step, where handoffs break, where data gets re-entered, where work sits waiting.",
  },
  {
    number: "03",
    title: "Cost of inaction",
    body: "Dollars lost per month, hours burned per week, opportunity cost, and the risk you are carrying today.",
  },
  {
    number: "04",
    title: "Proposed solution",
    body: "Architecture diagram, before and after process maps, specific tools, data flow, and security.",
  },
  {
    number: "05",
    title: "Implementation roadmap",
    body: "Phases with deliverables across weeks 1 to 4, 5 to 8, and 9 to 12. Daily demo items in a shared Slack.",
  },
  {
    number: "06",
    title: "Quantified ROI",
    body: "Hours saved a month, dollars saved a month, capacity unlocked, and the payback period.",
  },
  {
    number: "07",
    title: "Investment",
    body: "Total cost, breakdown by phase, payment terms, what is included, and what is not.",
  },
  {
    number: "08",
    title: "Next steps",
    body: "Kickoff timeline and exactly how we start.",
  },
];

const faqItems = [
  {
    question: "How long does it take?",
    answer:
      "Two to three weeks from the first session to the delivered document.",
  },
  {
    question: "How much of my team's time does it need?",
    answer:
      "Three to five hours total, spread across short sessions with the people who actually run the work.",
  },
  {
    question: "What if we decide not to build anything?",
    answer:
      "You keep the document. It stands on its own, and it is yours to hand to any implementation partner you want.",
  },
  {
    question: "Do you need access to our systems?",
    answer:
      "For the assessment, no. I need conversations and screen shares. Access comes later, only if we build.",
  },
  {
    question: "What if you don't find $50,000?",
    answer:
      "You don't pay. That has to be a real risk for the guarantee to mean anything.",
  },
  {
    question: "How is this different from the $999 assessment?",
    answer:
      "The $999 assessment prescribes tools you can turn on this week. This one maps your whole operation and produces a build plan. Different buyer, different problem.",
  },
];

function BookingButton({ label }: { label: string }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export default function AssessmentPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="border-b border-[var(--border)] px-6 py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Current State Assessment
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              I will find <span className="text-[var(--crimson)]">$50,000</span>{" "}
              in your operation. Or you don&apos;t pay.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              Two to three weeks. I sit with your team, map every workflow you run, and hand
              you a document that shows exactly where the money is leaking, what to fix
              first, and what it costs to keep doing nothing.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-7 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] sm:text-lg">
              Scoped after your $999 assessment, and credited in full toward anything we build.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.26}>
            <div className="mt-9">
              <BookingButton label="Book a Fit Call" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who this is for */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Who this is for.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-2">
            <AnimateIn>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                  This is for you if
                </p>
                <ul className="space-y-4">
                  {forYou.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-relaxed text-[var(--ink-secondary)]"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  This is not for you if
                </p>
                <ul className="space-y-4">
                  {notForYou.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-relaxed text-[var(--muted)]"
                    >
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border)]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* What I do, in order */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              The work
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              What I do, in order.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <AnimateIn key={step.number} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--border)] p-6 transition-colors duration-300 hover:border-[var(--crimson)]">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {step.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{step.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <p className="mt-8 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
              You own the plan whether or not I build it.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What you receive */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              The deliverable
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              What you receive.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, index) => (
              <AnimateIn key={section.number} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[var(--crimson-light)]">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {section.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-white">
                    {section.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{section.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.4}>
            <p className="mt-10 max-w-3xl border-l-2 border-[var(--gold)] pl-5 text-xl font-semibold leading-snug text-white md:text-2xl">
              Most companies have never seen their own operations drawn out. The moment they
              do, they get it.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-[var(--crimson)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateIn>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/70">
              The guarantee
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-2xl font-black leading-snug text-white sm:text-3xl md:text-4xl">
              I will identify at least $50,000 in annualized reclaimable cost inside 14 days,
              or you don&apos;t pay.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              What you paid is credited in full toward anything we build together.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CostOfInaction variant="tier2" />

      {/* What happens after */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              After the assessment
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Most companies ask me to build what it found.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Whatever we build next gets scoped from what this finds, and what you paid comes off the top.
              The assessment interviews also become your Company Brain: how your business
              actually runs, structured, in a repo you own, so every AI employee we hire
              works the way you do. After the build ships, the operating retainer keeps it
              maintained, adopted, and growing. If the assessment says you are not ready to
              build, I will tell you that too.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.22}>
            <Link
              href="/services"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
            >
              See the full offer ladder
              <span aria-hidden="true">→</span>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <h2 className="mb-12 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Questions.
            </h2>
          </AnimateIn>

          <dl className="space-y-8">
            {faqItems.map((item, index) => (
              <AnimateIn key={item.question} delay={index * 0.05}>
                <div className="border-b border-[var(--border)] pb-8">
                  <dt className="mb-3 text-lg font-black text-[var(--ink)]">
                    {item.question}
                  </dt>
                  <dd className="leading-relaxed text-[var(--ink-secondary)]">
                    {item.answer}
                  </dd>
                </div>
              </AnimateIn>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Let&apos;s see what your operation is actually costing you.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <div className="mt-9">
              <BookingButton label="Book a Fit Call" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <p className="mt-6 text-sm text-white/50">
              Atlanta first. I will come to you.
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
