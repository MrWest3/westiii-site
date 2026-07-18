import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workshops in Atlanta",
  description:
    "Hands-on AI workshops for teams, communities, and events in Atlanta and beyond.",
};

const MAILTO =
  "mailto:StudioWest3@proton.me?subject=AI%20Workshop%20Inquiry";

export default function WorkshopsPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center bg-[var(--ink)] px-6 py-20 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
          AI Workshops
        </p>
        <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
          Your team knows AI matters. Nobody has shown them how to use it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
          Hands-on AI workshops for teams, communities, and events.
        </p>
        <a
          href={MAILTO}
          className="mt-9 inline-flex rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
        >
          Email Me About a Workshop
        </a>
      </div>
    </main>
  );
}
