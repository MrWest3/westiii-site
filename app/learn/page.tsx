import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";
import LearnInquiry from "../components/LearnInquiry";
import { FREE_CALL_URL } from "../lib/links";

export const metadata: Metadata = {
  title: "Learn AI",
  description:
    "AI training for teams and live classes for business owners, taught by David West III in Atlanta. Last month he taught 100+ business owners to build with AI.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "I teach AI to people who say they're not computer people",
    description:
      "Team labs, team rollouts, talks, and live classes for business owners. Tell David what you want AI to fix.",
    url: "https://westiii.com/learn",
    images: [{ url: "/og/coaching.jpg", width: 1200, height: 630 }],
  },
};

const quotes = [
  {
    text: "You were very explicit, a lot more explicit than how the school system even runs for teaching people.",
    who: "A student who works in education",
  },
  {
    text: "It actually understands me.",
    who: "A student, the first time her AI got her business right",
  },
  {
    text: "You're a great teacher. I like your pace.",
    who: "A student, after a Q&A night",
  },
];

const proof = [
  { value: "100+", label: "business owners in my live class last month" },
  { value: "4", label: "live sessions, about two and a half hours each" },
  { value: "425+", label: "people in my free AI community" },
  { value: "6M+", label: "views on my AI content" },
];

const teamOffers = [
  {
    title: "Team Lab",
    body: "90 minutes, up to 15 people. Everyone leaves with Claude or ChatGPT set up for their job and one skill they built themselves.",
    price: "From $1,500",
  },
  {
    title: "30-Day Team Rollout",
    body: "A kickoff lab, three to five skills built around your team's real work, a handoff to whoever runs your AI accounts, four weekly check-ins, and a look on day 30 at who is still using it.",
    price: "Priced by team size",
  },
  {
    title: "Talks",
    body: "For chambers, associations, conferences and sales meetings. I teach one useful workflow and build it live in front of the room.",
    price: "Ask about dates",
  },
];

const teamFor = [
  "Real estate brokerages",
  "Property managers",
  "Medical and dental offices",
  "Agencies",
  "Any team of 5 to 50",
];

const classOffers = [
  {
    eyebrow: "Monthly",
    title: "Saturday Session",
    body: "Three hours, live on Zoom. You leave with your AI set up to know your business and your first skill built. The first one is Saturday, November 14.",
    price: "$97",
  },
  {
    eyebrow: "January",
    title: "The live class",
    body: "Three Saturdays in January plus office hours, for owners who want to go further. 30 seats, and the list hears about it first.",
    price: "$497 founding seats",
  },
];

const faqs = [
  {
    q: "Do I need to be technical?",
    a: "No. Most of my students had never written code, and several told me on the first night they weren't computer people. If you can send an email, you can do this.",
  },
  {
    q: "Which AI do you teach?",
    a: "Mostly Claude and ChatGPT, because that's what teams already pay for. If your company uses something else, we use that.",
  },
  {
    q: "Is it safe to put our business into AI?",
    a: "It can be, with a few rules. I work in AI agent security, so every session covers what never to paste in, which accounts to connect, and how to keep passwords out of it.",
  },
];

const eyebrow = "mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]";
const h2 =
  "max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl";
const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[var(--crimson-light)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]";
const secondaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-[color,border-color,transform] duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]";

export default function LearnPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* hero */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:py-20 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <AnimateIn>
              <p className={eyebrow}>Learn AI with David West III</p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl">
                I teach AI to people who say they&apos;re{" "}
                <span className="text-[var(--crimson)]">not computer people.</span>
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.14}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-secondary)]">
                Last month I taught a live class of 100+ business owners, most of them over
                40, to build with AI over four sessions. Now I bring that class to teams, and
                I run my own for anyone who wants in.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#for-team" className={primaryBtn}>
                  Train my team <span aria-hidden="true">→</span>
                </a>
                <a href="#for-class" className={secondaryBtn}>
                  Join the next class
                </a>
              </div>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1} direction="right">
            <figure className="mx-auto w-full max-w-[340px]">
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--ink)]">
                <video
                  className="aspect-[9/16] w-full max-w-full object-cover"
                  src="/learn/patience.mp4"
                  poster="/learn/patience-poster.webp"
                  controls
                  playsInline
                  preload="none"
                  aria-label="Five students from my live class, each describing my teaching in one word"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-[var(--muted)]">
                Five students, three classes, the same word.
              </figcaption>
            </figure>
          </AnimateIn>
        </div>
      </section>

      {/* proof */}
      <section className="bg-[var(--ink)] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              In their words
            </p>
          </AnimateIn>
          <div className="grid gap-8 md:grid-cols-3">
            {quotes.map((quote, index) => (
              <AnimateIn key={quote.who} delay={index * 0.06}>
                <figure className="flex h-full flex-col gap-4 border-l-2 border-[var(--gold)] pl-5">
                  <blockquote className="text-xl font-bold leading-snug text-white">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto text-sm text-white/60">{quote.who}</figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {proof.map((item) => (
              <div key={item.label} className="bg-[var(--ink)] p-6">
                <p className="text-3xl font-black tabular-nums text-white md:text-4xl">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* teams */}
      <section id="teams" className="scroll-mt-20 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>Bring me to your team</p>
            <h2 className={h2}>Your whole team leaves with AI set up and one skill built.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Most teams pay for Claude or ChatGPT seats that nobody uses past the chat box. I
              set it up for each person, then we build skills around the work your team
              already repeats every week.
            </p>
          </AnimateIn>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Teams I work with">
            {teamFor.map((who) => (
              <li
                key={who}
                className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)]"
              >
                {who === "Real estate brokerages" ? (
                  <Link href="/real-estate" className="hover:text-[var(--crimson)]">
                    {who}
                  </Link>
                ) : (
                  who
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {teamOffers.map((offer, index) => (
              <AnimateIn key={offer.title} delay={index * 0.06} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                  <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                    {offer.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">{offer.body}</p>
                  <p className="mt-auto pt-2 text-sm font-bold text-[var(--crimson)]">
                    {offer.price}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <AnimateIn>
              <article className="flex h-full flex-col gap-3 rounded-2xl border border-[var(--crimson)] bg-white p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                  Until December 11
                </p>
                <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                  Your Custom GPTs stop working December 11.
                </h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">
                  OpenAI is shutting off Custom GPTs. I&apos;ll move three of yours to Claude
                  skills or ChatGPT&apos;s new plugins before the cutoff, and show your team
                  where they live now.
                </p>
                <p className="mt-auto pt-2 text-sm font-bold text-[var(--crimson)]">$1,500</p>
              </article>
            </AnimateIn>
            <AnimateIn delay={0.06}>
              <article className="flex h-full flex-col gap-3 rounded-2xl bg-[var(--surface)] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                  Safe from day one
                </p>
                <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                  I work in cybersecurity, on AI agent security specifically.
                </h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">
                  My job is learning how these agents break and showing companies how to lock
                  them down. Every rollout ships with a one-page policy for your team: what the
                  AI can touch, what it never touches, and who to ask.
                </p>
              </article>
            </AnimateIn>
          </div>

          <div className="mt-10">
            <a href="#for-team" className={primaryBtn}>
              Tell me about your team <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* classes */}
      <section id="class" className="scroll-mt-20 bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>Learn with me</p>
            <h2 className={h2}>Come learn in a live class.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Small business owners, on Saturdays, building on your own business while I walk
              you through it. Get on the list and you hear about every class before it goes
              public.
            </p>
          </AnimateIn>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {classOffers.map((offer, index) => (
              <AnimateIn key={offer.title} delay={index * 0.06} className="h-full">
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                    {offer.eyebrow}
                  </p>
                  <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                    {offer.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">{offer.body}</p>
                  <p className="mt-auto pt-2 text-sm font-bold text-[var(--crimson)]">
                    {offer.price}
                  </p>
                </article>
              </AnimateIn>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#for-class" className={primaryBtn}>
              Get on the class list <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/coaching"
              className="text-sm font-bold text-[var(--crimson)] transition-colors hover:text-[var(--crimson-light)]"
            >
              Want one-on-one instead? See coaching <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* form */}
      <section id="inquire" className="scroll-mt-20 px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <AnimateIn>
            <p className={eyebrow}>Get in touch</p>
            <h2 className={h2}>Tell me what you want AI to fix.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              One form for teams, classes and talks. I read every one myself and answer within
              one business day.
            </p>
            <div className="mt-8 flex flex-col gap-2 text-sm text-[var(--ink-secondary)]">
              <a
                href={FREE_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--crimson)] hover:text-[var(--crimson-light)]"
              >
                Rather talk first? Book a free 15-minute call <span aria-hidden="true">→</span>
              </a>
              <span>
                Or email{" "}
                <a
                  href="mailto:StudioWest3@proton.me?subject=Learning%20AI"
                  className="font-semibold text-[var(--ink)] underline decoration-[var(--crimson)] decoration-2 underline-offset-4"
                >
                  StudioWest3@proton.me
                </a>
              </span>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <div className="relative rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
              <span id="for-team" className="absolute -top-24" aria-hidden="true" />
              <span id="for-class" className="absolute -top-24" aria-hidden="true" />
              <span id="for-talk" className="absolute -top-24" aria-hidden="true" />
              <LearnInquiry />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* faq */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>Questions</p>
          </AnimateIn>
          <div className="grid gap-8 md:grid-cols-3">
            {faqs.map((faq, index) => (
              <AnimateIn key={faq.q} delay={index * 0.06}>
                <h3 className="text-lg font-black text-[var(--ink)]">{faq.q}</h3>
                <p className="mt-3 leading-relaxed text-[var(--ink-secondary)]">{faq.a}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
