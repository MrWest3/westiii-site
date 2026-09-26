import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { visiblePosts } from "../hope/journal/lib";

export default function HopeStrip() {
  const latest = visiblePosts()[0];

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <AnimateIn>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src="/robot/sunrise.webp"
              alt="The West Robot sitting on a rooftop ledge, watching the sun rise over Atlanta"
              fill
              sizes="(min-width: 1024px) 540px, 92vw"
              className="object-cover"
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Hope
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            The mindset side.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-[var(--ink-secondary)]">
            The books, people, and ideas that keep my head pointed forward, plus a journal on
            where AI is taking us and what to do about it.
          </p>
          {latest && (
            <Link
              href={`/hope/journal/${latest.slug}`}
              className="group mt-6 block max-w-lg rounded-xl border border-[var(--border)] p-4 transition-colors hover:border-[var(--crimson)]"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--gold)]">
                Latest entry
              </span>
              <span className="mt-1 block text-lg font-black leading-snug text-[var(--ink)] group-hover:text-[var(--crimson)]">
                {latest.title}
              </span>
            </Link>
          )}
          <Link
            href="/hope"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
          >
            Open Hope <span aria-hidden="true">→</span>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
