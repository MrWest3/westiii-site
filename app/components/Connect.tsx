import Link from "next/link";
import AnimateIn from "./AnimateIn";

export default function Connect() {
  return (
    <section id="connect" className="relative overflow-hidden bg-[var(--ink)] px-6 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 80% at 80% 20%, rgba(139,26,26,0.32) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <AnimateIn>
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            Start here
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mx-auto mb-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            I find you 5+ reclaimable hours a week or you don&apos;t pay.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            One 45-minute conversation. One written playbook. A clear place to start.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.25}>
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
          >
            Book Your AI Assessment ($999)
            <span aria-hidden="true">→</span>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
