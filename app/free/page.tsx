import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: {
    absolute: "Free 15-Minute Bottleneck Call | David West",
  },
  description:
    "Two 15-minute calls over two days. Day one I ask questions. Day two I show you one thing in your business AI can fix. Free, no pitch.",
  // Deliberately noindexed. This is a link I hand out in person, by text, and
  // in event follow-ups. It is not a public funnel entry, and it must not
  // compete with the paid assessment in search.
  robots: {
    index: false,
    follow: true,
  },
};

const CALENDLY_URL = "https://calendly.com/davidawest25/free-15-minute-ai-fit-call";

const steps = [
  {
    number: "01",
    title: "Day one. 15 minutes. I ask questions.",
    body: "No pitch, no slides, no tools. I ask you to walk me through a normal week and I listen for where the work piles up. That is the whole call.",
  },
  {
    number: "02",
    title: "Day two. 15 minutes. I show you one fix.",
    body: "I come back with one bottleneck I found and one specific way to fix it. Named tool, what it costs, how long it takes to set up, how many hours a week it gives you back.",
  },
];

const truths = [
  {
    q: "What does it cost?",
    a: "Nothing. There is no card, no form, no trial.",
  },
  {
    q: "What's the catch?",
    a: "There isn't one, but I'll be straight with you about the math. Some people take the fix and run with it themselves, and that is a genuinely fine outcome. Some people would rather I keep going. Those people hire me. I am fine either way, which is why I can afford to do this for free.",
  },
  {
    q: "Why two calls instead of one?",
    a: "Because a good answer takes work. If I prescribe something on the spot I am guessing. Between the calls I actually go look at what fits your business.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "No. Come talk about your week. If you can screen share whatever process annoys you most, even better.",
  },
  {
    q: "Who is this for?",
    a: "Owner-operated businesses. If you are the person who would have to implement it, you are the person I want on the call.",
  },
];

export default function FreePage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="border-b border-[var(--border)] px-6 py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Free. No pitch.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              15 minutes. One bottleneck.{" "}
              <span className="text-[var(--crimson)]">One fix.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              I give away a small number of these every month, mostly to people I meet in
              Atlanta rooms. Two short calls over two days. You leave knowing one specific
              place AI fits in your business, whether or not you ever work with me.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-9">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Grab 15 Minutes
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <AnimateIn>
            <h2 className="mb-12 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              How it works.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <AnimateIn key={step.number} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-[var(--border)] p-6 md:p-8">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {step.number}
                  </p>
                  <h3 className="mb-3 text-xl font-black leading-snug text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">{step.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.25}>
            <p className="mt-8 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
              Worst case, you learn a tool you didn&apos;t know existed. Best case, you have
              a partner.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <h2 className="mb-10 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Straight answers.
            </h2>
          </AnimateIn>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {truths.map((item, index) => (
              <AnimateIn key={item.q} delay={index * 0.04}>
                <div className="py-6">
                  <p className="mb-3 text-lg font-black text-[var(--ink)]">{item.q}</p>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">{item.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Take the 15 minutes.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <div className="mt-9">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Grab 15 Minutes
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <p className="mt-8 text-sm text-white/50">
              Want the full picture instead?{" "}
              <Link
                href="/book"
                className="font-semibold text-white underline underline-offset-4"
              >
                The $999 assessment
              </Link>{" "}
              covers your whole business, not one bottleneck.
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
