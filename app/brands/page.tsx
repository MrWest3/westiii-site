import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";
import BrandInquiry from "../components/BrandInquiry";
import { Price, PriceProvider } from "../components/PriceGate";
import { socials } from "../lib/links";

export const metadata: Metadata = {
  title: "Brand partnerships",
  description:
    "Demo ads, sponsored Make AI Easy episodes and AI creative pieces for AI and business software brands. David West III teaches AI to small business owners: 16.5K on Instagram, 100+ owners in his last live class.",
  alternates: { canonical: "/brands" },
  openGraph: {
    title: "Your AI tool, taught to the people who'll pay for it",
    description: "Demo ads, sponsored episodes and AI creative pieces from David West III, who teaches AI to small business owners.",
    url: "https://westiii.com/brands",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

// Instagram numbers checked 2026-10-09. Update them here when they move.
const proof = [
  { value: "16.5K", label: "followers on Instagram" },
  { value: "1.7M", label: "views on my top reel" },
  { value: "100+", label: "business owners in my last live class" },
];

type Offer = {
  anchor: string;
  ask: string;
  eyebrow: string;
  title: string;
  body: string;
  fine: string;
  price: string;
  image: string;
  alt: string;
  sample?: { label: string; href: string };
};

const offers: Offer[] = [
  {
    anchor: "#for-demo",
    ask: "Ask about a demo ad",
    eyebrow: "Runs on your accounts",
    title: "Demo ad",
    body: "30 to 45 seconds. Me on camera with the problem, your product on screen doing the job, then the result. Built to run as an ad or a post from your own accounts.",
    fine: "Script, two hook options and one round of revisions included. Paid usage, whitelisting and raw footage are quoted by scope.",
    price: "demo",
    image: "/robot/workbench.webp",
    alt: "The West Robot building a small helper robot on a workbench",
  },
  {
    anchor: "#for-episode",
    ask: "Ask about a sponsored episode",
    eyebrow: "Runs on my page",
    title: "Sponsored episode",
    body: "One episode of Make AI Easy, my series that walks beginners through one tool at a time, built around your product and posted on Instagram with the paid-partnership label.",
    fine: "You also get the file to post on your own accounts. One sponsor a week at most, so the series stays a class.",
    price: "episode",
    image: "/robot/whiteboard.webp",
    alt: "The West Robot teaching a small team at a whiteboard",
  },
  {
    anchor: "#for-creative",
    ask: "Ask about a made-with-your-tool piece",
    eyebrow: "Runs on my page and yours",
    title: "Made with your tool",
    body: "A trend-format piece built with your AI video or image tool: a character swap, an animated music video, a try-on. Posted on Instagram crediting your tool, and you get the file.",
    fine: "Built from my own footage and original characters, so it's clean to run as an ad. Paid usage is quoted by scope.",
    price: "creative",
    image: "/robot/filming-house.webp",
    alt: "The West Robot filming a modern house with a phone on a gimbal",
    // The one top reel with original characters and no borrowed footage.
    sample: {
      label: "Watch a sample: my animated music video, 1M views",
      href: "https://www.instagram.com/p/DYlDebuhdka/",
    },
  },
];

const goodFit = [
  "AI assistants and agents",
  "AI video, voice and image tools",
  "Note-takers, scheduling and CRMs",
  "Website, automation and app builders",
];

const passOn = ["Cybersecurity products", "Crypto, gambling and adult", "Supplements", "Anything I haven't used myself"];

const steps = [
  { title: "Send the product and the goal.", body: "What it does, who buys it, and what they should do after watching." },
  { title: "I use it on a real task.", body: "Then I send two concepts built on how a small business would actually use it." },
  { title: "You approve the script, then the cut.", body: "Nothing posts until you sign off on both." },
];

const faqs = [
  {
    q: "Can we review it before it goes live?",
    a: "Yes. You approve the script before I film and the final cut before it posts. One round of revisions is included.",
  },
  {
    q: "Who can use the video?",
    a: "You can post the file on your own accounts. Running it as a paid ad, whitelisting it, or exclusivity in your category is priced by how long you need it.",
  },
  {
    q: "Is it labeled as paid?",
    a: "Always. Every sponsored post on my page carries Instagram's paid-partnership label.",
  },
  {
    q: "Can you remix a viral clip or a famous character?",
    a: "For paid work I build on footage I shoot, footage you own, original characters or your mascot. Borrowed clips and famous characters can't safely run as ads.",
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
const textLink =
  "text-sm font-bold text-[var(--crimson)] transition-colors hover:text-[var(--crimson-light)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]";

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-colors hover:border-[var(--crimson)]">
      <div className="relative aspect-[16/9]">
        <Image src={offer.image} alt={offer.alt} fill sizes="(min-width: 1024px) 380px, 92vw" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">{offer.eyebrow}</p>
        <h3 className="text-3xl font-black leading-tight tracking-tight text-[var(--ink)]">{offer.title}</h3>
        <p className="leading-relaxed text-[var(--ink-secondary)]">{offer.body}</p>
        <p className="text-sm leading-relaxed text-[var(--muted)]">{offer.fine}</p>
        {offer.sample ? (
          <a
            href={offer.sample.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--ink)] underline decoration-[var(--crimson)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--crimson)]"
          >
            {offer.sample.label}
          </a>
        ) : null}
        <div className="mt-auto flex flex-col gap-4 pt-2">
          <Price id={offer.price} />
          <a href={offer.anchor} className={textLink}>
            {offer.ask} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function BrandsPage() {
  return (
    <PriceProvider page="brands">
      <main className="overflow-hidden bg-white">
        {/* hero */}
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <div>
              <AnimateIn>
                <p className={eyebrow}>Brand partnerships</p>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl">
                  Your AI tool, taught to the people who&apos;ll pay for it.
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.14}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-secondary)]">
                  I&apos;m David West III. I teach AI to small business owners, most of them brand new to it. My
                  videos show a product doing a real job for a real business, in words a first-time buyer follows.
                </p>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#brand-form" className={primaryBtn}>
                    Tell me about your product <span aria-hidden="true">→</span>
                  </a>
                  <a href="#offers" className={secondaryBtn}>
                    See the three offers
                  </a>
                </div>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.1} direction="right">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)]">
                <Image
                  src="/robot/studio.webp"
                  alt="The West Robot on set in a studio, between a ring light and a camera"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 92vw"
                  className="object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </section>

        {/* proof */}
        <section className="bg-[var(--ink)] px-6 py-16 text-white md:py-20">
          <div className="mx-auto max-w-6xl">
            <AnimateIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">Who I teach</p>
              <h2 className="max-w-3xl text-balance text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                Owners and their staff, at the start of using AI.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                My reels and classes are built for people at businesses of 5 to 50 who&apos;ve heard of ChatGPT and
                want someone they trust to show them what to buy and how to set it up.
              </p>
            </AnimateIn>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
              {proof.map((item) => (
                <div key={item.label} className="bg-[var(--ink)] p-5 sm:p-6">
                  <p className="text-3xl font-black tabular-nums text-white md:text-4xl">{item.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Where I post">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3.5 py-1.5 text-sm text-white transition-colors hover:border-[var(--gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
                  >
                    <span className="font-semibold">{social.label}</span>
                    <span className="text-white/50 transition-colors group-hover:text-[var(--gold)]">
                      {social.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* offers */}
        <section id="offers" className="scroll-mt-20 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <AnimateIn>
              <p className={eyebrow}>Three offers</p>
              <h2 className={h2}>Pick where the video runs.</h2>
              <p className={lede}>
                Each one starts with me using your product myself before I write a word of script.
              </p>
            </AnimateIn>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {offers.map((offer, index) => (
                <AnimateIn key={offer.title} delay={index * 0.08} className="h-full">
                  <OfferCard offer={offer} />
                </AnimateIn>
              ))}
            </div>
            <p className="mt-8 text-sm text-[var(--ink-secondary)]">
              Selling clothing? Try-ons and lookbooks run through my AI campaign shoots.{" "}
              <Link href="/creative" className={textLink}>
                See the creative studio <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </section>

        {/* fit */}
        <section className="bg-[var(--surface)] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <AnimateIn>
              <p className={eyebrow}>Fit</p>
              <h2 className={h2}>I take on tools I&apos;d teach anyway.</h2>
              <p className={lede}>If a 5 to 50 person business would pay for it this year, it probably fits.</p>
            </AnimateIn>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              <AnimateIn className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                  <h3 className="text-xl font-black text-[var(--ink)]">Good fit</h3>
                  <ul className="flex flex-col gap-2.5 leading-relaxed text-[var(--ink-secondary)]">
                    {goodFit.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] h-0.5 w-3 shrink-0 bg-[var(--crimson)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.08} className="h-full">
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                  <h3 className="text-xl font-black text-[var(--ink)]">I pass on</h3>
                  <ul className="flex flex-col gap-2.5 leading-relaxed text-[var(--ink-secondary)]">
                    {passOn.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] h-0.5 w-3 shrink-0 bg-[var(--muted)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
              <AnimateIn delay={0.16} className="h-full">
                <div className="flex h-full flex-col gap-3 rounded-2xl border border-[var(--crimson)] bg-white p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                    Why owners trust it
                  </p>
                  <h3 className="text-xl font-black text-[var(--ink)]">
                    I work in cybersecurity, on AI agent security specifically.
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">
                    If your product connects to email, files or customer data, I show owners what it can reach and how
                    to set it up safely. That&apos;s the question they ask before they buy.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* form */}
        <section id="brand-form" className="scroll-mt-20 px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <AnimateIn>
              <p className={eyebrow}>Start here</p>
              <h2 className={h2}>Tell me about your product.</h2>
              <p className={lede}>I read every one and reply within one business day.</p>
              <ol className="mt-10 flex flex-col gap-6">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="text-2xl font-black tabular-nums leading-none text-[var(--crimson)]">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-bold text-[var(--ink)]">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--ink-secondary)]">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-10 text-sm text-[var(--ink-secondary)]">
                Or email{" "}
                <a
                  href="mailto:StudioWest3@proton.me?subject=Brand%20partnership"
                  className="font-semibold text-[var(--ink)] underline decoration-[var(--crimson)] decoration-2 underline-offset-4"
                >
                  StudioWest3@proton.me
                </a>
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <div className="relative rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                <span id="for-demo" className="absolute -top-24" aria-hidden="true" />
                <span id="for-episode" className="absolute -top-24" aria-hidden="true" />
                <span id="for-creative" className="absolute -top-24" aria-hidden="true" />
                <BrandInquiry />
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
            <div className="grid gap-8 md:grid-cols-2 lg:gap-x-16">
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
