import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { FREE_CALL_URL } from "../lib/links";

type LaneLink = { label: string; href: string; external?: boolean };

const lanes: { eyebrow: string; title: string; body: string; links: LaneLink[] }[] = [
  {
    eyebrow: "Consulting",
    title: "AI employees for your business.",
    body: "One role, owned end to end by an AI employee I build on how your business actually runs and manage every week. It starts with the $999 assessment: 5+ hours a week found, or you don't pay.",
    links: [
      { label: "The $999 Assessment", href: "/book" },
      { label: "Meet the AI employees", href: "/ai-employees" },
    ],
  },
  {
    eyebrow: "Coaching",
    title: "One-on-one, you and me.",
    body: "Bring the thing you're stuck on. You leave with the tools picked, the setup done, and the next move written down. The last two clients I signed started with a call like this.",
    links: [
      { label: "Book a free call", href: FREE_CALL_URL, external: true },
      { label: "DM @__dw3", href: "https://www.instagram.com/__dw3/", external: true },
      { label: "Email me", href: "mailto:StudioWest3@proton.me", external: true },
    ],
  },
  {
    eyebrow: "Content",
    title: "The work, shown in public.",
    body: "Reels on AI for regular people, the systems I've shipped, and the page behind the HOPE reel: the podcasts, books, and people that keep my feed pointed forward.",
    links: [
      { label: "The blueprint to a desirable future", href: "/hope" },
      { label: "Builds", href: "/builds" },
      { label: "YouTube", href: "https://www.youtube.com/@WestTech3", external: true },
    ],
  },
];

function LaneLinkItem({ link }: { link: LaneLink }) {
  const className =
    "inline-flex items-center gap-1 text-sm font-bold text-[var(--crimson)] transition-colors hover:text-[var(--crimson-light)]";
  const arrow = <span aria-hidden="true">→</span>;
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label} {arrow}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {link.label} {arrow}
    </Link>
  );
}

export default function Lanes() {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Three ways in
          </p>
          <h2 className="mb-10 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            Pick the one that fits where you are.
          </h2>
        </AnimateIn>
        <div className="grid gap-5 md:grid-cols-3">
          {lanes.map((lane, index) => (
            <AnimateIn key={lane.eyebrow} delay={index * 0.08}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                  {lane.eyebrow}
                </p>
                <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">{lane.title}</h3>
                <p className="flex-1 leading-relaxed text-[var(--ink-secondary)]">{lane.body}</p>
                <ul className="flex flex-col gap-2">
                  {lane.links.map((link) => (
                    <li key={link.href}>
                      <LaneLinkItem link={link} />
                    </li>
                  ))}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
