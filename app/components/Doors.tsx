import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

const doors = [
  {
    eyebrow: "Coaching",
    title: "Learn to do it yourself.",
    body: "One-on-one sessions with me. Bring your business or your job, and leave with the tools picked, set up, and a plan for next week.",
    stop: "It starts with a free 15-minute call: one thing you're stuck on, one fix.",
    image: "/robot/coaching.webp",
    imageAlt: "The West Robot coaching a business owner at her laptop",
    cta: { label: "How coaching works", href: "/coaching" },
  },
  {
    eyebrow: "Services",
    title: "Have it built for you.",
    body: "I find the hours your week is losing, then build AI that does that work. If the $999 assessment doesn't find you 5+ hours a week, you don't pay.",
    stop: "The $999 buys the full plan: every leak, what fixes it, and what it's worth in your own numbers.",
    image: "/robot/workbench.webp",
    imageAlt: "The West Robot building a small helper robot on a workbench",
    cta: { label: "See services", href: "/services" },
  },
];

export default function Doors() {
  return (
    <section id="doors" className="scroll-mt-20 bg-[var(--surface)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Two ways in
          </p>
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            Learn it yourself, or have it built.
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {doors.map((door, index) => (
            <AnimateIn key={door.eyebrow} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition-colors hover:border-[var(--crimson)]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={door.image}
                    alt={door.imageAlt}
                    fill
                    sizes="(min-width: 768px) 560px, 92vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                    {door.eyebrow}
                  </p>
                  <h3 className="text-3xl font-black leading-tight tracking-tight text-[var(--ink)]">
                    {door.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">{door.body}</p>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{door.stop}</p>
                  <Link
                    href={door.cta.href}
                    className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-bold text-[var(--crimson)] transition-colors hover:text-[var(--crimson-light)]"
                  >
                    {door.cta.label} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
