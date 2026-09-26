import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";
import BeforeAfter, { type Comparison } from "../components/BeforeAfter";
import ListingChat from "../components/ListingChat";
import LoopClip from "../components/LoopClip";
import { FREE_CALL_URL, LAUREL_HOUSE_URL, PENTHOUSE_URL } from "../lib/links";

export const metadata: Metadata = {
  title: "AI for Real Estate",
  description:
    "One listing's photos turned into a walkthrough film, a social reel, staged rooms, and twilight shots. Plus the AI I build for brokerages, builders, property managers, and investors.",
  alternates: { canonical: "/real-estate" },
  openGraph: {
    title: "What AI can do with one listing",
    description:
      "A walkthrough film, a reel, staged rooms, and twilight shots, all from listing photos. See what I build for real estate.",
    url: "https://westiii.com/real-estate",
    images: [{ url: "/og/real-estate.jpg", width: 1200, height: 630 }],
  },
};

const comparisons: Comparison[] = [
  {
    id: "staging",
    tab: "Empty room, staged",
    before: "/real-estate/stage-1-before.webp",
    after: "/real-estate/stage-1.webp",
    label: "Virtually staged",
    alt: "a finished basement living area",
  },
  {
    id: "twilight",
    tab: "Day to twilight",
    before: "/real-estate/twilight-before.webp",
    after: "/real-estate/twilight-after.webp",
    label: "Digitally enhanced",
    alt: "the front of the house",
  },
  {
    id: "concept",
    tab: "What it could become",
    before: "/real-estate/concept-1-before.webp",
    after: "/real-estate/concept-1.webp",
    label: "Concept rendering",
    alt: "an unfinished basement",
  },
];

const clips = [
  { id: "aerial", label: "Aerial" },
  { id: "foyer", label: "Foyer" },
  { id: "greatroom", label: "Great room" },
  { id: "kitchen", label: "Kitchen" },
  { id: "primary", label: "Primary suite" },
  { id: "pool", label: "The grounds" },
  { id: "nightpool", label: "After dark" },
  { id: "twilight", label: "Twilight" },
];

type Offer = {
  name: string;
  body: string;
  forWho: string[];
  links?: { label: string; href: string }[];
};

const groups: {
  id: string;
  title: string;
  line: string;
  image: string;
  imageAlt: string;
  offers: Offer[];
}[] = [
  {
    id: "market",
    title: "Market every listing",
    line: "Better photos, video, and pages for every home you list, made from the photos you already have.",
    image: "/robot/filming-house.webp",
    imageAlt: "The West Robot filming a modern home with a phone on a gimbal",
    offers: [
      {
        name: "Listing Reel Template",
        body: "Your brand gets built into a reel template once. After that, every new listing gets its own 30-second reel from its photos and details.",
        forWho: ["Brokerages", "Teams"],
      },
      {
        name: "Listing Film",
        body: "A full walkthrough like the one on this page, for the listings that deserve the extra polish.",
        forWho: ["Luxury agents", "Builders"],
      },
      {
        name: "Staging and Twilight Photos",
        body: "Empty rooms furnished, day shots turned to dusk, and every changed photo labeled so buyers know what's real.",
        forWho: ["Agents", "Teams"],
      },
      {
        name: "Listing Website",
        body: "One page for one property that walks a buyer through the home room by room.",
        forWho: ["Luxury listings", "Builders"],
        links: [
          { label: "Laurel House", href: LAUREL_HOUSE_URL },
          { label: "Penthouse concept", href: PENTHOUSE_URL },
        ],
      },
      {
        name: "Print Flyers",
        body: "Paste a listing link and get a print-ready flyer in a few minutes, with the photos, price, and features pulled in for you.",
        forWho: ["Agents", "Teams"],
      },
    ],
  },
  {
    id: "answer",
    title: "Answer every buyer",
    line: "Questions get answered in seconds, day or night, and the people ready to talk land on your calendar.",
    image: "/robot/answering.webp",
    imageAlt: "The West Robot at a laptop working through a stack of messages",
    offers: [
      {
        name: "Listing Q&A Assistant",
        body: "Answers buyer questions about a listing from its details and documents, then sends you the buyers who are ready to see it.",
        forWho: ["Brokerages", "Teams"],
        links: [{ label: "Try the demo", href: "#ask" }],
      },
      {
        name: "AI Front Desk System",
        body: "Calls, texts, and web leads answered in seconds. It asks your questions your way and books showings on your calendar.",
        forWho: ["Brokerages", "Property managers"],
      },
      {
        name: "Document Q&A",
        body: "Plans, specs, leases, or HOA rules your team can search by asking a question in plain English.",
        forWho: ["Builders", "Property managers"],
      },
    ],
  },
  {
    id: "rank",
    title: "Work the best leads first",
    line: "Your team starts every morning knowing exactly who to call and where to drive.",
    image: "/robot/sorting.webp",
    imageAlt: "The West Robot sorting house cards into piles, with the best picks glowing gold",
    offers: [
      {
        name: "Lead and Listing Ranking",
        body: "Every new lead or property gets checked against what you care about and ranked. I built one of these for an investor who buys foreclosures, so the team gets a short drive list each morning.",
        forWho: ["Investors", "Teams"],
      },
      {
        name: "Follow-Up Engine",
        body: "Every lead worked by text and email, in your voice, until they answer or tell you no.",
        forWho: ["Agents", "Teams"],
      },
    ],
  },
];

const eyebrow = "mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]";
const h2 = "max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl";
const lede = "mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]";
const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]";

export default function RealEstatePage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* hero */}
      <section className="relative flex flex-col overflow-hidden bg-[var(--ink)] md:min-h-[640px] md:justify-center">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 pt-14 md:py-24">
          <AnimateIn>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              AI for real estate
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              What AI can do with{" "}
              <span className="text-[var(--gold)]">one listing.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              I took one home&apos;s listing photos and turned them into a walkthrough film, a
              social reel, staged rooms, and twilight shots. All of it is below, plus what I
              build for brokerages, builders, and investors.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#walkthrough" className={primaryBtn}>
                Watch the walkthrough
              </a>
              <a
                href="#what-i-build"
                className="inline-flex min-h-12 items-center justify-center rounded border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                See what I build
              </a>
            </div>
          </AnimateIn>
        </div>
        <div className="relative aspect-[16/10] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[58%] xl:w-[62%]">
          <Image
            src="/robot/keys.webp"
            alt="The West Robot holding out house keys in front of a home at twilight"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_50%]"
          />
          <LoopClip
            src="/robot/loop-keys.mp4"
            poster="/robot/keys.webp"
            label="The West Robot holding out house keys at twilight"
            className="absolute inset-0 h-full w-full object-cover object-[60%_50%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)] via-transparent to-transparent md:bg-gradient-to-r md:from-[var(--ink)] md:via-[rgba(10,10,10,0.6)] md:via-35% md:to-transparent md:to-70%" />
        </div>
      </section>

      {/* walkthrough */}
      <section id="walkthrough" className="scroll-mt-20 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>The Laurel House</p>
            <h2 className={h2}>45 seconds, made from listing photos.</h2>
            <p className={lede}>
              Twelve still photos became twelve moving shots, cut to music. The agent brand on it
              is made up for the demo. The house is real.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <video
              src="/real-estate/walkthrough.mp4"
              poster="/real-estate/walkthrough-poster.jpg"
              controls
              playsInline
              preload="none"
              className="mt-10 aspect-video w-full rounded-2xl bg-[var(--ink)] object-cover"
            >
              <track kind="captions" />
            </video>
            <a
              href={LAUREL_HOUSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--crimson)] hover:text-[var(--crimson-light)]"
            >
              Tour the full listing site <span aria-hidden="true">→</span>
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* before / after */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          <AnimateIn>
            <p className={eyebrow}>Before and after</p>
            <h2 className={h2}>Drag the line.</h2>
            <p className={lede}>
              Empty rooms get furnished. Daytime shots turn to dusk. An unfinished basement shows
              what it could become.
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-[var(--gold)] pl-4 text-sm leading-relaxed text-[var(--ink-secondary)]">
              Every changed photo carries a label like &ldquo;Virtually staged,&rdquo; so buyers
              always know what they&apos;re looking at.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <BeforeAfter comparisons={comparisons} />
          </AnimateIn>
        </div>
      </section>

      {/* clips */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>The clips</p>
            <h2 className={h2}>One room, one moving shot.</h2>
          </AnimateIn>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {clips.map((clip, index) => (
              <AnimateIn key={clip.id} delay={(index % 4) * 0.05}>
                <figure>
                  <LoopClip
                    src={`/real-estate/clip-${clip.id}.mp4`}
                    poster={`/real-estate/clip-${clip.id}.jpg`}
                    label={`${clip.label} clip`}
                    className="aspect-video w-full rounded-xl bg-[var(--surface)] object-cover"
                  />
                  <figcaption className="mt-2 text-sm text-[var(--muted)]">{clip.label}</figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* reel */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <AnimateIn>
            <div className="mx-auto w-[240px] overflow-hidden rounded-[2.2rem] border-[7px] border-[var(--ink)] bg-[var(--ink)] shadow-2xl">
              <video
                src="/real-estate/reel.mp4"
                poster="/real-estate/reel-poster.jpg"
                controls
                playsInline
                preload="none"
                className="aspect-[9/16] w-full object-cover"
              >
                <track kind="captions" />
              </video>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <p className={eyebrow}>The reel</p>
            <h2 className={h2}>21 seconds, cut for Instagram.</h2>
            <p className={lede}>
              The same house, cut vertical for social and ready to post the day the listing goes
              live. This is the format the Listing Reel Template makes for every new listing.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ask the listing */}
      <section id="ask" className="scroll-mt-20 px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <AnimateIn>
            <p className={eyebrow}>Ask the listing</p>
            <h2 className={h2}>Buyers ask at midnight. This answers.</h2>
            <p className={lede}>
              This is the Listing Q&amp;A Assistant, live, loaded with the Laurel House details. Ask
              it what a buyer would ask. When it doesn&apos;t know something, it says so and
              hands the buyer to the agent.
            </p>
            <div className="relative mt-8 hidden aspect-[16/10] overflow-hidden rounded-2xl lg:block">
              <Image
                src="/robot/answering.webp"
                alt="The West Robot at a laptop working through a stack of messages"
                fill
                sizes="480px"
                className="object-cover"
              />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <ListingChat />
          </AnimateIn>
        </div>
      </section>

      {/* what I build */}
      <section id="what-i-build" className="scroll-mt-20 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>What I build for real estate</p>
            <h2 className={h2}>Three jobs AI does well in real estate.</h2>
            <p className={lede}>
              For brokerages, teams, builders, property managers, and investors. Pick the job
              that costs you the most time today.
            </p>
          </AnimateIn>

          <div className="mt-14 flex flex-col gap-16 md:gap-24">
            {groups.map((group, index) => (
              <div
                key={group.id}
                className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-14"
              >
                <AnimateIn className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={group.image}
                      alt={group.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 540px, 92vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-3xl font-black tracking-tight text-[var(--ink)]">
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-md text-lg leading-relaxed text-[var(--ink-secondary)]">
                    {group.line}
                  </p>
                </AnimateIn>
                <div className="flex flex-col gap-3">
                  {group.offers.map((offer, i) => (
                    <AnimateIn key={offer.name} delay={i * 0.05}>
                      <article className="rounded-2xl border border-[var(--border)] bg-white p-5 transition-colors hover:border-[var(--crimson)] md:p-6">
                        <h4 className="text-lg font-black text-[var(--ink)]">{offer.name}</h4>
                        <p className="mt-1.5 leading-relaxed text-[var(--ink-secondary)]">
                          {offer.body}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          {offer.forWho.map((who) => (
                            <span
                              key={who}
                              className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-xs font-semibold text-[var(--ink-secondary)]"
                            >
                              {who}
                            </span>
                          ))}
                          {offer.links && (
                            <span className="ml-auto flex flex-wrap gap-x-4 gap-y-1">
                              {offer.links.map((l) => (
                                <a
                                  key={l.href}
                                  href={l.href}
                                  {...(l.href.startsWith("#")
                                    ? {}
                                    : { target: "_blank", rel: "noopener noreferrer" })}
                                  className="text-sm font-bold text-[var(--crimson)] hover:text-[var(--crimson-light)]"
                                >
                                  {l.label} <span aria-hidden="true">→</span>
                                </a>
                              ))}
                            </span>
                          )}
                        </div>
                      </article>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team training */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
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
          <AnimateIn delay={0.08}>
            <p className={eyebrow}>Train your team</p>
            <h2 className={h2}>Your agents, using AI on their own listings.</h2>
            <p className={lede}>
              A working session for your office. Everyone brings a real listing, and everyone
              leaves with something they made and the steps to do it again.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={FREE_CALL_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                Book a free call
              </a>
              <Link
                href="/coaching"
                className="inline-flex min-h-12 items-center justify-center rounded border border-[var(--border)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--gold)]"
              >
                How coaching works
              </Link>
            </div>
          </AnimateIn>
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
        <div className="relative mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Tell me about your office. I&apos;ll tell you which one pays off first.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
              A free 15-minute call. One problem, one fix you can act on.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={FREE_CALL_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                Book a free call
              </a>
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center justify-center rounded border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                Get the $999 Assessment
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
