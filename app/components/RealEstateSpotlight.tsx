import Link from "next/link";
import AnimateIn from "./AnimateIn";
import LoopClip from "./LoopClip";

export default function RealEstateSpotlight() {
  return (
    <section className="bg-[var(--ink)] px-6 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <AnimateIn>
          <LoopClip
            src="/real-estate/clip-aerial.mp4"
            poster="/real-estate/clip-aerial.jpg"
            label="Aerial shot of the Laurel House, made from a listing photo"
            className="aspect-video w-full rounded-2xl bg-white/5 object-cover"
          />
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            New: Real estate
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
            One listing. A film, a reel, staged rooms, and twilight shots.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
            I ran one home&apos;s listing photos through AI. See everything it turned into, and
            what I build for brokerages, builders, and investors.
          </p>
          <Link
            href="/real-estate"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--gold)] px-6 py-3.5 text-sm font-bold text-[var(--ink)] transition-opacity hover:opacity-90"
          >
            See the real estate work <span aria-hidden="true">→</span>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
