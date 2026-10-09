import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";
import LearnInquiry from "../components/LearnInquiry";
import LoopClip from "../components/LoopClip";
import { Price, PriceProvider } from "../components/PriceGate";
import { FREE_CALL_URL } from "../lib/links";

export const metadata: Metadata = {
  title: "Learn AI",
  description:
    "AI training for teams and live Wednesday classes for business owners, taught by David West III. Last month he taught 100+ business owners to build with AI.",
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "I teach AI to people who say they're not computer people",
    description: "Team labs, rollouts, talks, and live Wednesday classes. Tell David what you want AI to fix.",
    url: "https://westiii.com/learn",
    images: [{ url: "/og/coaching.jpg", width: 1200, height: 630 }],
  },
};

const quotes = [
  {
    text: "You were very explicit, a lot more explicit than how the school system even runs for teaching people.",
    who: "A student who works in education",
  },
  { text: "It actually understands me.", who: "A student, the first time her AI got her business right" },
  { text: "You're a great teacher. I like your pace.", who: "A student, after a Q&A night" },
];

const proof = [
  { value: "100+", label: "business owners in my last live class" },
  { value: "425+", label: "people in my free AI community" },
  { value: "6M+", label: "views on my AI content" },
];

type Card = {
  title: string;
  body: string;
  image: string;
  alt: string;
  loop?: string;
  eyebrow?: string;
  price?: string;
  note?: string;
};

const teamCards: Card[] = [
  {
    title: "Team Lab",
    body: "90 minutes, up to 15 people. Everyone leaves with AI set up and one skill they built.",
    image: "/robot/whiteboard.webp",
    alt: "The West Robot teaching a small team at a whiteboard",
    price: "lab",
  },
  {
    title: "30-Day Rollout",
    body: "Skills built for your team's real work, four weekly check-ins, and a look on day 30 at who's still using it.",
    image: "/robot/workbench.webp",
    alt: "The West Robot building a small helper robot on a workbench",
    price: "rollout",
  },
  {
    title: "Talks",
    body: "Chambers, associations and sales meetings. One useful workflow, built live in front of the room.",
    image: "/robot/podium.webp",
    alt: "The West Robot speaking at a podium in front of a screen",
    note: "Ask about dates",
  },
];

const classCards: Card[] = [
  {
    eyebrow: "Monthly",
    title: "Wednesday Session",
    body: "Three hours on Zoom. You leave with AI that knows your business and your first skill built. Next one: Wednesday, November 11.",
    image: "/robot/coaching.webp",
    loop: "/robot/loop-coaching.mp4",
    alt: "The West Robot coaching a business owner at her laptop",
    price: "session",
  },
  {
    eyebrow: "January",
    title: "The live class",
    body: "Three Saturdays plus office hours, for owners who want to go further. 30 seats.",
    image: "/robot/books.webp",
    alt: "The West Robot reading in a library",
    price: "january",
  },
];

const teamFor = ["Real estate brokerages", "Property managers", "Medical and dental offices", "Teams of 5 to 50"];

const faqs = [
  {
    q: "Do I need to be technical?",
    a: "No. Most of my students had never written code. If you can send an email, you can do this.",
  },
  { q: "Which AI do you teach?", a: "Mostly Claude and ChatGPT, because that's what teams already pay for." },
  {
    q: "Is it safe?",
    a: "It can be. Every session covers what never to paste in, which accounts to connect, and how to keep passwords out.",
  },
];

const eyebrow = "mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]";
const h2 =
  "max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl";
const lede = "mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-secondary)]";
const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[var(--crimson-light)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]";
const secondaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-[color,border-color,transform] duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]";

function OfferCard({ card }: { card: Card }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-colors hover:border-[var(--crimson)]">
      <div className="relative aspect-[16/9]">
        <Image src={card.image} alt={card.alt} fill sizes="(min-width: 1024px) 380px, 92vw" className="object-cover" />
        {card.loop ? (
          <LoopClip src={card.loop} poster={card.image} label={card.alt} className="absolute inset-0 h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        {card.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">{card.eyebrow}</p>
        ) : null}
        <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">{card.title}</h3>
        <p className="leading-relaxed text-[var(--ink-secondary)]">{card.body}</p>
        <div className="mt-auto flex flex-col pt-2">
          {card.price ? (
            <Price id={card.price} />
          ) : (
            <p className="text-sm font-bold text-[var(--crimson)]">{card.note}</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function LearnPage() {
  return (
    <PriceProvider>
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
                  Last month I taught 100+ business owners, most of them over 40, to build with AI. I bring that
                  class to teams, and I run my own on Wednesdays.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#for-team" className={primaryBtn}>
                    Train my team <span aria-hidden="true">→</span>
                  </a>
                  <a href="#for-class" className={secondaryBtn}>
                    Join a class
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
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">In their words</p>
            </AnimateIn>
            <div className="grid gap-8 md:grid-cols-3">
              {quotes.map((quote, index) => (
                <AnimateIn key={quote.who} delay={index * 0.06}>
                  <figure className="flex h-full flex-col gap-4 border-l-2 border-[var(--gold)] pl-5">
                    <blockquote className="text-xl font-bold leading-snug text-white">&ldquo;{quote.text}&rdquo;</blockquote>
                    <figcaption className="mt-auto text-sm text-white/60">{quote.who}</figcaption>
                  </figure>
                </AnimateIn>
              ))}
            </div>
            <div className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {proof.map((item) => (
                <div key={item.label} className="bg-[var(--ink)] p-5 sm:p-6">
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
              <p className={eyebrow}>For teams</p>
              <h2 className={h2}>Your team leaves with AI set up and one skill built.</h2>
              <p className={lede}>
                I set up Claude or ChatGPT for each person. Then we build around the work your team repeats every
                week.
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

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {teamCards.map((card, index) => (
                <AnimateIn key={card.title} delay={index * 0.06} className="h-full">
                  <OfferCard card={card} />
                </AnimateIn>
              ))}
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <AnimateIn>
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-[var(--crimson)] bg-white p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                    Until December 11
                  </p>
                  <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                    Your Custom GPTs stop working December 11.
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">
                    I&apos;ll move three of them to Claude or ChatGPT&apos;s new plugins before the cutoff.
                  </p>
                  <div className="mt-auto flex flex-col pt-2">
                    <Price id="gpt" />
                  </div>
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
                    Every rollout comes with a one-page policy: what the AI can touch, and what it never touches.
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
              <p className={eyebrow}>For owners</p>
              <h2 className={h2}>Learn with me live.</h2>
              <p className={lede}>Small live classes. You build on your own business while I walk you through it.</p>
            </AnimateIn>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {classCards.map((card, index) => (
                <AnimateIn key={card.title} delay={index * 0.06} className="h-full">
                  <OfferCard card={card} />
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
                Want one-on-one? See coaching <span aria-hidden="true">→</span>
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
              <p className={lede}>I read every one and reply within a day.</p>
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
    </PriceProvider>
  );
}
