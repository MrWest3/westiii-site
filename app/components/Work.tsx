import Link from "next/link";
import AnimateIn from "./AnimateIn";
import Testimonials from "./Testimonials";

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 bg-[var(--surface)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <AnimateIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                Proof
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
                The work ships. The numbers hold up.
              </h2>
            </AnimateIn>
          </div>
          <div className="flex gap-8">
            <AnimateIn delay={0.15} direction="right">
              <div className="min-w-52 border-l-2 border-[var(--crimson)] pl-5">
                <p className="text-4xl font-black text-[var(--ink)]">6M+</p>
                <p className="mt-1 max-w-44 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Content views in 6 months
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15} direction="right">
              <div className="min-w-52 border-l-2 border-[var(--crimson)] pl-5">
                <p className="text-4xl font-black text-[var(--ink)]">500</p>
                <p className="mt-1 max-w-44 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Foreclosure addresses scored down to the 200 worth calling
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>

        <Testimonials />

        <AnimateIn delay={0.1}>
          <p className="mt-10 text-base text-[var(--ink-secondary)]">
            I built a real estate investment firm a system that scored 500 foreclosure addresses down to the 200 worth calling. One extra close pays for it ten times over.{" "}
            <Link
              href="/builds"
              className="font-semibold text-[var(--crimson)] underline underline-offset-4"
            >
              See the builds
            </Link>
            .
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p className="mt-10 text-base text-[var(--ink-secondary)]">
            I also run AI digital photoshoots and creative production for brands.{" "}
            <Link
              href="/creative"
              className="font-semibold text-[var(--crimson)] underline underline-offset-4"
            >
              See the creative work
            </Link>
            .
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
