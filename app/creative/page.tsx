import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: {
    absolute: "AI Digital Photoshoots and Creative Production | David West",
  },
  description:
    "Send garment cutouts, get a finished campaign. AI digital photoshoots, lookbooks, product campaigns, and brand films produced in Atlanta. See the STYS Factory Motor Co. case study.",
};

const MAILTO =
  "mailto:StudioWest3@proton.me?subject=Digital%20Photoshoot%20Inquiry";

const stysShots = [
  {
    src: "/creative/stys/stys-court.jpg",
    alt: "STYS See It Through tee, mid-crossover on an outdoor basketball court at golden hour",
    scene: "Court",
  },
  {
    src: "/creative/stys/stys-night.jpg",
    alt: "STYS See It Through tee on a rooftop above a neon city skyline at night",
    scene: "Night city",
  },
  {
    src: "/creative/stys/stys-carshow.jpg",
    alt: "STYS See It Through tee beside a blue lowrider at a car show",
    scene: "Car show",
  },
  {
    src: "/creative/stys/stys-tank.jpg",
    alt: "STYS Factory Motor Co tank at a block party under string lights",
    scene: "Block party",
  },
  {
    src: "/creative/stys/stys-jersey.jpg",
    alt: "STYS 72177 Members Only jersey on parking garage steps",
    scene: "Jersey",
  },
  {
    src: "/creative/stys/stys-studio.jpg",
    alt: "STYS See It Through tee, full length on a clean grey studio backdrop",
    scene: "Studio",
  },
];

const whatItReplaces = [
  {
    number: "01",
    title: "The studio day",
    body: "No booking, no lighting setup, no half day lost to a location that looked better online.",
  },
  {
    number: "02",
    title: "The model call",
    body: "Any look, any body type, any number of them. Change the model after you have seen the shot, not before.",
  },
  {
    number: "03",
    title: "The reshoot",
    body: "New colorway, new season, new background, same afternoon. The set never gets struck.",
  },
];

const process = [
  {
    number: "01",
    title: "You send the garments",
    body: "Flat lays, product photos, or cutouts. Whatever you already have from the manufacturer works.",
  },
  {
    number: "02",
    title: "We lock the direction",
    body: "Model, styling, backdrop, lighting, mood. I show you frames before I build the set.",
  },
  {
    number: "03",
    title: "I shoot it",
    body: "Full looks, detail crops, and the campaign hero. Your actual garment, not an approximation of it.",
  },
  {
    number: "04",
    title: "You get the files",
    body: "High resolution, print ready, cleared for paid media. Motion versions if you want them.",
  },
];

const otherWork = [
  { src: "/creative/client-12.png", alt: "Revenge Fitness apparel brand system", label: "Revenge Fitness", kind: "Brand identity and apparel" },
  { src: "/creative/client-01.jpg", alt: "DataVault AI brand commercial frame", label: "DataVault AI", kind: "Brand commercial" },
  { src: "/hero/creative-03.jpg", alt: "AI fashion design concept illustration", label: "Concept work", kind: "Fashion design" },
  { src: "/hero/creative-04.jpg", alt: "AI sneaker campaign concept", label: "Sky Runners", kind: "Product campaign" },
  { src: "/hero/client-06.jpg", alt: "VerifyU animated app advertisement", label: "VerifyU", kind: "Animated app ad" },
  { src: "/hero/creative-01.jpg", alt: "AI tech commercial recreation", label: "Spec work", kind: "Tech commercial" },
];

export default function CreativePage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="border-b border-[var(--border)] px-6 py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Digital photoshoots
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              A full campaign shoot.{" "}
              <span className="text-[var(--crimson)]">No studio, no model, no shoot day.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              Send me what you already have. Flat product shots, or garment cutouts on a
              white page. I build the model, the location, the lighting, and the campaign
              around them. No booking, no shoot day, no reshoot fee.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-9">
              <a
                href={MAILTO}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Start a Shoot
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* STYS case study */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              STYS / Stick To Your Script
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              They sent me cutouts on a white page. I sent back a campaign.
            </h2>
          </AnimateIn>

          {/* Before and after */}
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <AnimateIn>
              <figure className="h-full">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white">
                  <Image
                    src="/creative/stys/stys-input.jpg"
                    alt="The brief: eight outfit stacks of garment, footwear, and cap cutouts on a white page"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                    What I was given
                  </p>
                  <p className="mt-2 leading-relaxed text-white/65">
                    One PDF. Eight outfit stacks of product cutouts on a white page. No
                    model, no location, no photographer, no shoot date.
                  </p>
                </figcaption>
              </figure>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <figure className="h-full">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <Image
                    src="/creative/stys/stys-hero.jpg"
                    alt="Three models in the full STYS collection on a city street at golden hour"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                    style={{ objectPosition: "50% 30%" }}
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                    What I delivered
                  </p>
                  <p className="mt-2 leading-relaxed text-white/65">
                    Three models, three fits, six locations, and four motion clips. Print
                    placement, wash, and hardware intact on every frame. They contracted for
                    a fraction of what shipped.
                  </p>
                </figcaption>
              </figure>
            </AnimateIn>
          </div>

          {/* The range */}
          <AnimateIn delay={0.2}>
            <p className="mt-16 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Six worlds, one garment
            </p>
          </AnimateIn>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stysShots.map((shot, index) => (
              <AnimateIn key={shot.src} delay={index * 0.06}>
                <figure>
                  <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs uppercase tracking-wide text-white/40">
                    {shot.scene}
                  </figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <p className="mt-12 max-w-3xl border-l-2 border-[var(--gold)] pl-5 text-xl font-semibold leading-snug text-white md:text-2xl">
              Every one of these is the client&apos;s actual product. Not one of them was
              photographed.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What it replaces */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Why brands do it this way
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              What it replaces.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-3">
            {whatItReplaces.map((item, index) => (
              <AnimateIn key={item.number} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-[var(--border)] p-6 transition-colors duration-300 hover:border-[var(--crimson)] md:p-8">
                  <p className="mb-8 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {item.number}
                  </p>
                  <h3 className="mb-3 text-xl font-black leading-snug text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              How a shoot runs.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <AnimateIn key={step.number} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                  <p className="mb-8 text-xs font-bold tracking-widest text-[var(--gold)]">
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
        </div>
      </section>

      {/* Other creative work */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Also in the studio
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Brand systems, commercials, and campaigns.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Photoshoots are the offer people ask for by name. This is the rest of it.
            </p>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherWork.map((item, index) => (
              <AnimateIn key={item.src} delay={index * 0.05}>
                <figure className="group h-full overflow-hidden rounded-2xl border border-[var(--border)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-5">
                    <p className="text-sm font-black text-[var(--ink)]">{item.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-[var(--muted)]">
                      {item.kind}
                    </p>
                  </figcaption>
                </figure>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Send me a garment. I&apos;ll send you a campaign.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              Tell me what you sell and what you need shot. I will tell you what it takes and
              what it costs.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={MAILTO}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Start a Shoot
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                See the AI consulting side
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
