import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/robot/lost.webp"
            alt="The West Robot holding a map, looking lost"
            fill
            priority
            sizes="(min-width: 768px) 480px, 92vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Page not found
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            Even the robot got lost on this one.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--ink-secondary)]">
            The page you wanted moved or never existed. These will get you somewhere.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[var(--crimson-light)]"
            >
              Home
            </Link>
            <Link
              href="/coaching"
              className="inline-flex min-h-12 items-center justify-center rounded border border-[var(--border)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] hover:border-[var(--gold)]"
            >
              Coaching
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded border border-[var(--border)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] hover:border-[var(--gold)]"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
