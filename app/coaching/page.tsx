import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import AnimateIn from "../components/AnimateIn";
import { FREE_CALL_URL } from "../lib/links";

export const metadata: Metadata = {
  title: "AI Coaching",
  description:
    "One-on-one AI coaching with David West III in Atlanta. Bring your real work, and leave each session with something working and a plan for the next step.",
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: "Learn AI with someone in your corner",
    description:
      "One-on-one AI coaching for business owners, team leads, and anyone who wants AI to make their work easier.",
    url: "https://westiii.com/coaching",
    images: [{ url: "/og/coaching.jpg", width: 1200, height: 630 }],
  },
};

const whoFor = [
  "Business owners",
  "Team leads and managers",
  "Realtors and brokerages",
  "Creators",
  "People moving into AI roles",
];

const leaveWith = [
  "The right tool picked for your job, and set up",
  "One thing working by the end of the call",
  "The next step written down, so you know what to do before we talk again",
];

const steps = [
  {
    title: "A free 15-minute call",
    body: "You tell me where you're stuck. I tell you straight if coaching is the right fit.",
  },
  {
    title: "A plan for what to learn first",
    body: "We pick the one or two skills that pay off fastest for you.",
  },
  {
    title: "Working sessions",
    body: "Most people start with two working calls a month, and we change that to fit what you need.",
  },
];

const formats = [
  {
    title: "One-on-one",
    body: "You and me on video, working on your actual stuff.",
  },
  {
    title: "Your team",
    body: "A working session for your office, built around the tools you already pay for.",
  },
  {
    title: "Group workshops",
    body: "A few hours, a small room, everyone builds something real.",
    href: "/workshops",
  },
];

const faqs = [
  {
    q: "Do I need to be technical?",
    a: "No. Most people I coach have never written code. If you can send an email, you can do this.",
  },
  {
    q: "How much does it cost?",
    a: "We set it on the free call, once I know what you need and how often we'll meet.",
  },
  {
    q: "What tools will we use?",
    a: "Whatever fits your work. Usually ChatGPT or Claude, plus the apps you already pay for.",
  },
  {
    q: "What if I'd rather have it built for me?",
    a: "Then services is your door. It starts with the $999 assessment.",
    href: "/services",
  },
];

const eyebrow = "mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]";
const h2 = "max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl";
const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]";

export default function CoachingPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* hero */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div>
            <AnimateIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                Coaching
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl">
                Learn AI with someone{" "}
                <span className="text-[var(--crimson)]">in your corner.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-secondary)]">
                One-on-one coaching for business owners, team leads, and anyone who wants AI to
                make their work easier. You bring the problem. We solve it together on the call.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={FREE_CALL_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                  Book a free call <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://www.instagram.com/__dw3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded border border-[var(--border)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--gold)]"
                >
                  DM me on Instagram
                </a>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1} direction="right">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src="/robot/coaching.webp"
                alt="The West Robot coaching a business owner at her laptop"
                fill
                priority
                sizes="(min-width: 1024px) 580px, 92vw"
                className="object-cover"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* who */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>Who it&apos;s for</p>
            <h2 className={h2}>People who&apos;d rather learn it than rent it.</h2>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {whoFor.map((who) => (
                <li
                  key={who}
                  className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)]"
                >
                  {who}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* session */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimateIn>
            <p className={eyebrow}>A session</p>
            <h2 className={h2}>We open your real work and fix it live.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Your inbox, your listings, your spreadsheets, your content calendar. We pick the
              right tool, set it up while we talk, and test it on something you actually need
              done this week.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="rounded-2xl border border-[var(--border)] p-6 md:p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                You leave every session with
              </p>
              <ul className="flex flex-col gap-4">
                {leaveWith.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-[var(--ink-secondary)]">
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
        </div>
      </section>

      {/* how it starts */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>How it starts</p>
            <h2 className={h2}>Three steps.</h2>
          </AnimateIn>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <AnimateIn key={step.title} delay={index * 0.08}>
                <li className="h-full border-t-2 border-[var(--crimson)] pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--crimson)]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-[var(--ink)]">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-[var(--ink-secondary)]">{step.body}</p>
                </li>
              </AnimateIn>
            ))}
          </ol>
        </div>
      </section>

      {/* formats */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <AnimateIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/robot/whiteboard.webp"
                alt="The West Robot teaching a small team at a whiteboard"
                fill
                sizes="(min-width: 1024px) 540px, 92vw"
                className="object-cover"
              />
            </div>
          </AnimateIn>
          <div>
            <AnimateIn>
              <p className={eyebrow}>Formats</p>
              <h2 className={h2}>Solo, your team, or a room full.</h2>
            </AnimateIn>
            <div className="mt-8 flex flex-col gap-3">
              {formats.map((format, index) => (
                <AnimateIn key={format.title} delay={index * 0.06}>
                  <div className="rounded-2xl border border-[var(--border)] p-5">
                    <h3 className="text-lg font-black text-[var(--ink)]">{format.title}</h3>
                    <p className="mt-1 leading-relaxed text-[var(--ink-secondary)]">
                      {format.body}
                      {format.href && (
                        <>
                          {" "}
                          <Link
                            href={format.href}
                            className="font-bold text-[var(--crimson)] hover:text-[var(--crimson-light)]"
                          >
                            See workshops <span aria-hidden="true">→</span>
                          </Link>
                        </>
                      )}
                    </p>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* faq */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <p className={eyebrow}>Questions</p>
            <h2 className={h2}>Before you book.</h2>
          </AnimateIn>
          <div className="mt-8 border-t border-[var(--border)]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-[var(--border)] py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[var(--ink)]">
                  {faq.q}
                  <span
                    className="text-xl text-[var(--crimson)] transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-[var(--ink-secondary)]">
                  {faq.a}
                  {faq.href && (
                    <>
                      {" "}
                      <Link href={faq.href} className="font-bold text-[var(--crimson)]">
                        See services <span aria-hidden="true">→</span>
                      </Link>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* close */}
      <section className="relative overflow-hidden bg-[var(--ink)] px-6 py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 85% 20%, rgba(139,26,26,0.35) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Fifteen minutes. One thing you&apos;re stuck on.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
              We&apos;ll figure out if coaching is the right move, and you&apos;ll leave the
              call with one fix either way.
            </p>
            <a
              href={FREE_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${primaryBtn} mt-8`}
            >
              Book a free call <span aria-hidden="true">→</span>
            </a>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
