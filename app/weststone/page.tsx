import Link from "next/link";
import WestStone from "../components/WestStone";

export const metadata = {
  title: "The WestStone Project — Visa x FIFA World Cup Spec Campaign",
  description:
    "A full AI-generated creative campaign built to compete with agency-level work, produced solo. 28 illustrations, 11 animated spots, 8 host cities, and an original brand character. Pitched directly to Visa.",
};

export default function WestStonePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="border-b border-[var(--border)] px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink-secondary)] transition-colors hover:text-[var(--crimson)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            Back
          </Link>
          <Link
            href="/book"
            className="rounded bg-[var(--crimson)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
          >
            Book an Audit
          </Link>
        </div>
      </div>

      <WestStone />

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl bg-[var(--ink)] p-10 text-center md:p-14">
          <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-black leading-tight text-white md:text-4xl">
            Campaign-grade creative, one builder.
          </h2>
          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-white/60">
            This entire campaign was produced solo with an AI production pipeline. The same
            capability is available for your brand, your launch, or your next drop.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded bg-[var(--crimson)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
          >
            Book an AI Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
