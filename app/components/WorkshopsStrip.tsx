import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function WorkshopsStrip() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-8 md:py-10">
      <AnimateIn>
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-black leading-snug text-[var(--ink)] md:text-2xl">
            I also train teams. From curious to using AI the same day.
          </p>
          <Link
            href="/workshops"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded border border-[var(--crimson)] px-5 py-3 text-sm font-semibold text-[var(--crimson)] transition-colors duration-200 hover:bg-[var(--crimson)] hover:text-white"
          >
            See workshops
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </AnimateIn>
    </section>
  );
}
