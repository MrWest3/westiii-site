import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: {
    absolute:
      "AI Consultant in Atlanta | AI Assessments and Custom Systems for Local Businesses",
  },
  description:
    "I'm David West, an AI consultant in Atlanta. I find where AI saves your business 5+ hours a week, hand you the plan in 48 hours, then build it. $999 assessment, guaranteed.",
};

// The canonical LocalBusiness node (including areaServed) lives in app/layout.tsx
// and is emitted on every page. This page describes itself and points at it,
// rather than re-declaring the same @id with a competing payload.
const atlantaPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://westiii.com/atlanta#page",
  name: "AI Consultant in Atlanta",
  description:
    "AI consulting and implementation for Atlanta businesses. AI assessments, custom AI operating systems, and ongoing support.",
  url: "https://westiii.com/atlanta",
  about: { "@id": "https://westiii.com/#business" },
  provider: { "@id": "https://westiii.com/#business" },
};

const industries = [
  {
    number: "01",
    title: "Dental and medical practices",
    body: "Intake, scheduling, recalls, insurance follow-up, and the front desk work nobody has time for.",
  },
  {
    number: "02",
    title: "Law firms",
    body: "Client intake, document chasing, matter summaries, and the same five questions every new client asks.",
  },
  {
    number: "03",
    title: "Agencies and studios",
    body: "Proposals, reporting, onboarding, and turning delivered work into content without a second team.",
  },
  {
    number: "04",
    title: "Home services and trades",
    body: "Speed to lead, quoting, dispatch, and following up on the estimates that go quiet.",
  },
  {
    number: "05",
    title: "Logistics and distribution",
    body: "Order intake, document parsing, status updates, and the spreadsheets holding it all together.",
  },
  {
    number: "06",
    title: "Real estate",
    body: "Listing prep, buyer questions, transaction coordination, and the inbox that never empties.",
  },
];

const faqItems = [
  {
    question: "Do you meet in person?",
    answer:
      "Yes. That is the whole point of working with somebody local. I come to you, sit with your team, and watch how the work actually happens.",
  },
  {
    question: "What parts of metro Atlanta do you cover?",
    answer:
      "All of it. Buckhead, Midtown, Sandy Springs, Decatur, Marietta, Alpharetta, Dunwoody, Roswell, Smyrna. If you are inside the perimeter or a reasonable drive outside it, I will come to you.",
  },
  {
    question: "Do you work with businesses outside Atlanta?",
    answer:
      "Yes, remotely. Atlanta gets my calendar first, but the work travels fine over video.",
  },
  {
    question: "How big does my business need to be?",
    answer:
      "Start with the $999 assessment. You leave with a plan you can act on whether or not you ever hire me to build it.",
  },
  {
    question: "What if I have already tried AI and it did not stick?",
    answer:
      "That is the most common thing I hear. It usually means the process underneath was broken, or nobody on the team was brought into it. Both are fixable, and both are what I look for first.",
  },
];

export default function AtlantaPage() {
  return (
    <main className="overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(atlantaPageSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-[var(--border)] px-6 py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Atlanta, Georgia
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              The <span className="text-[var(--crimson)]">AI guy</span>{" "}
              in Atlanta.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              Every business owner in this city knows they should be using AI. Almost none of
              them know where to start, and the ones who tried mostly got a chatbot nobody
              uses. I sit down with you, find where the time and money are actually going,
              and build the thing that fixes it.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Book the $999 Assessment
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who I work with */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Who I work with
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Owner-operated businesses across metro Atlanta.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <AnimateIn key={industry.number} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--border)] p-6 transition-colors duration-300 hover:border-[var(--crimson)] md:p-8">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {industry.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-[var(--ink)]">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {industry.body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Come meet me */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Come meet me
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              I would rather shake your hand than send you a proposal.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/65">
              I run a free monthly session for Atlanta business owners, and I do free AI
              office hours at coworking spaces around the city. No pitch, no slides you have
              seen before. Bring one thing in your business that eats your week.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.22}>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link
                href="/workshops"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                See what&apos;s coming up
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/free"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                Or grab 15 free minutes
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Two doors */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Start here. Build from the proof.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-2">
            <AnimateIn>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                <p className="mb-2 text-xl font-black text-[var(--ink)]">The $999 AI Assessment</p>
                <p className="mb-4 text-lg font-bold text-[var(--crimson)]">$999</p>
                <p className="mb-7 flex-1 leading-relaxed text-[var(--ink-secondary)]">
                  A 60-minute call, a written playbook in 48 hours, and a review call. I find
                  5+ hours a week in 48 hours, or you don&apos;t pay.
                </p>
                <Link
                  href="/book"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
                >
                  Book Your Assessment
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                <p className="mb-2 text-xl font-black text-[var(--ink)]">
                  Custom AI Employees
                </p>
                <p className="mb-4 text-lg font-bold text-[var(--crimson)]">Scoped after the assessment</p>
                <p className="mb-7 flex-1 leading-relaxed text-[var(--ink-secondary)]">
                  One role in your business, owned end to end. It has a job description, it
                  knows how you work, and I manage it every week.
                </p>
                <Link
                  href="/book"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
                >
                  Start With the Assessment
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <h2 className="mb-10 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Local questions.
            </h2>
          </AnimateIn>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {faqItems.map((item, index) => (
              <AnimateIn key={item.question} delay={index * 0.04}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black text-[var(--ink)] marker:content-none">
                    {item.question}
                    <span
                      className="text-2xl font-normal text-[var(--crimson)] transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-relaxed text-[var(--ink-secondary)]">
                    {item.answer}
                  </p>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
