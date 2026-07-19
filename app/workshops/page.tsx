import type { Metadata } from "next";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Hands-on AI workshops and training in Atlanta for teams, communities, and events.",
};

const MAILTO =
  "mailto:StudioWest3@proton.me?subject=AI%20Workshop%20Inquiry";
const CALENDLY_URL = "https://calendly.com/davidawest25/ai-audit";

const formats = [
  {
    number: "01",
    title: "60 to 90 minute talk plus live build",
    body: "I teach one useful workflow, then build it live. Your group sees the decisions, the setup, and the finished result.",
  },
  {
    number: "02",
    title: "Half-day working session",
    body: "I work with your team on the tasks they already do. We choose a real workflow, build it together, and leave with something they can use.",
  },
  {
    number: "03",
    title: "Recurring team enablement",
    body: "I meet with your team on a schedule. Each session solves one current problem, builds one useful workflow, and keeps the work moving.",
  },
];

const proof = [
  {
    value: "425+",
    label: "members in my AI community learning tools, workflows, and implementation",
  },
  {
    value: "6M+",
    label: "content views across AI, creative, and systems work",
  },
  {
    value: "In the room",
    label: "workshops and talks for tech communities and events",
  },
];

export default function WorkshopsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="border-b border-[var(--border)] px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              AI Workshops
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              Your team knows AI matters.{" "}
              <span className="text-[var(--crimson)]">
                Nobody has shown them how to use it.
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              I run hands-on workshops for teams, communities, and events. People go from
              curious to using AI in their real work the same day.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Formats
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Your group builds around real work.
            </h2>
          </AnimateIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {formats.map((format, index) => (
              <AnimateIn key={format.number} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                  <p className="mb-8 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {format.number}
                  </p>
                  <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                    {format.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[var(--ink-secondary)]">
                    {format.body}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Proof
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
              People leave ready to use AI at work.
            </h2>
          </AnimateIn>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {proof.map((item, index) => (
              <AnimateIn
                key={item.value}
                delay={index * 0.06}
                className="h-full bg-[var(--ink)]"
              >
                <article className="h-full p-7 sm:p-8">
                  <p className="text-3xl font-black text-white md:text-4xl">{item.value}</p>
                  <p className="mt-3 max-w-sm leading-relaxed text-white/60">{item.label}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <div className="rounded-2xl border border-[var(--crimson)] bg-white p-7 sm:p-10 md:p-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                Bring me in
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
                Give your group a working first step.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
                Send me the audience, the date, and what they need to do with AI. I will
                recommend the right format.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={MAILTO}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
                >
                  Email Me About a Workshop
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-center text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
                >
                  Book an Intro Call
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <a
                href={MAILTO}
                className="mt-5 inline-block break-all text-sm font-semibold text-[var(--ink)] underline decoration-[var(--crimson)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--crimson)]"
              >
                StudioWest3@proton.me
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
