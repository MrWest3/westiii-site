import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: {
    absolute: "The $999 AI Assessment | 5+ Hours or You Don't Pay",
  },
  description:
    "The $999 AI Assessment is a 60-minute call, a written plan in 48 hours, and a review call. I find 5+ hours a week, or you don't pay.",
};

const CALENDLY_URL = "https://calendly.com/davidawest25/ai-audit";

const deliverables = [
  {
    number: "01",
    title: "60-minute discovery call",
    body: "I look at your calendar, inbox, and workflows to find where your time is going.",
  },
  {
    number: "02",
    title: "Written AI playbook",
    body: "Your pain points, the exact tools, cost, setup time, hours saved, and a 4-day quick start.",
  },
  {
    number: "03",
    title: "30-minute review call",
    body: "We walk through the playbook together. You leave knowing where to start.",
  },
  {
    number: "04",
    title: "100% money-back guarantee",
    body: "I find you 5+ reclaimable hours a week, inside 48 hours, or you don't pay.",
  },
];

const faqItems = [
  {
    question: "What are the refund terms?",
    answer:
      "Cancel at least 24 hours before the call and I will issue a full refund. Inside 24 hours, you can reschedule your call.",
  },
  {
    question: "What happens after the assessment?",
    answer:
      "I send your written playbook, then we meet for a 30-minute review call. You can run the plan yourself, or hire your first AI employee off it. I scope that after the assessment and your $999 comes off the top.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. I explain the tools and the setup in plain language. Your playbook gives you a clear first step.",
  },
  {
    question: "What if I already use ChatGPT?",
    answer:
      "Good. This goes further. I look across your business and map AI to the work that takes your time every week.",
  },
  {
    question: "How fast do I get the playbook?",
    answer: "Within 48 hours of the discovery call.",
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

export default function BookPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="border-b border-[var(--border)] px-6 py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              The $999 AI Assessment
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              Find 5 hours a week in your business.{" "}
              <span className="text-[var(--crimson)]">Or pay nothing.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-snug text-[var(--ink-secondary)] sm:text-xl md:mt-6 md:text-2xl">
              60 minutes on a call. A written playbook in 48 hours. A review call to walk it
              through. If I can&apos;t find you 5+ reclaimable hours a week inside 48 hours,
              you don&apos;t pay.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <BookingButton label="Book Your Assessment" />
              <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--muted)] sm:text-left">
                One-time $999
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              What you get
            </p>
            <h2 className="mb-10 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Two calls. One plan you can use.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <AnimateIn key={item.number} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {item.number}
                  </p>
                  <h3 className="mb-3 text-xl font-black text-[var(--ink)] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">{item.body}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <div className="max-w-4xl border-l-2 border-[var(--crimson)] pl-5 sm:pl-7">
              <p className="text-xl font-semibold leading-relaxed text-[var(--ink)] md:text-2xl">
                You know AI exists. You&apos;ve seen the demos. You&apos;ve tried ChatGPT. But
                you&apos;re drowning in tools with no idea which ones solve your problems. You
                don&apos;t need a developer or another course. You need someone to look at your
                calendar, your inbox, and your workflows and say: this tool, this process,
                this is where you start.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <AnimateIn>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                  The math
                </p>
                <h2 className="text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
                  6+ hours back every week.
                </h2>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                <p className="text-lg leading-relaxed text-[var(--ink-secondary)] md:text-xl">
                  The average client reclaims 6+ hours a week for roughly $40 a month in
                  tool costs. At $100 an hour of owner time, that is $2,400+ a month back,
                  every month, for a one-time $999.
                </p>
                <p className="mt-6 border-t border-[var(--border)] pt-6 text-2xl font-black leading-tight text-[var(--crimson)] md:text-3xl">
                  A 25x return on the assessment. Every single month.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.16}>
            <div className="mt-8">
              <BookingButton label="Book Your Assessment" />
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl rounded-2xl border border-[var(--crimson)] bg-white p-7 sm:p-9 md:p-12">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Build credit
            </p>
            <p className="max-w-5xl text-3xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Every dollar of the assessment is credited toward anything we build together
              afterward.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Who it&apos;s for
            </p>
            <h2 className="mb-10 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Small teams. Busy owners.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-2">
            <AnimateIn>
              <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                  This is for you
                </p>
                <h3 className="mb-3 text-2xl font-black text-[var(--ink)]">
                  Owner-operated businesses with 2 to 20 people.
                </h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">
                  You know AI should be doing something in your business. You have not had
                  time to figure out where it fits.
                </p>
              </article>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <article className="h-full rounded-2xl border border-[var(--border)] bg-white p-7 md:p-9">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--crimson)]">
                  This is not for you
                </p>
                <h3 className="mb-3 text-2xl font-black text-[var(--ink)]">
                  Enterprises and magic-bullet shoppers.
                </h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">
                  Enterprise AI is my day job. This assessment is for small business owners.
                  It also requires a focused 60-minute conversation.
                </p>
              </article>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              FAQ
            </p>
            <h2 className="mb-10 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Before you book.
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

      <section className="px-6 py-16 md:py-24">
        <AnimateIn>
          <div className="mx-auto max-w-6xl rounded-2xl bg-[var(--ink)] px-7 py-12 text-center sm:px-10 md:py-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Start here
            </p>
            <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Get 5+ hours back every week.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              60 minutes. A written playbook inside 48 hours. $999. I find the hours or you don&apos;t pay.
            </p>
            <div className="mt-8 flex justify-center">
              <BookingButton label="Book Your Assessment" />
            </div>
          </div>
        </AnimateIn>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Ready to build?
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-4xl">
              The assessment comes first.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              It shows us where your hours are going and what is worth building. I scope
              anything we build after I know what the job is.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <Link
              href="/book"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
            >
              Book the $999 Assessment
              <span aria-hidden="true">→</span>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
