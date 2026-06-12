import Link from "next/link";
import AnimateIn from "./AnimateIn";

const lanes = [
  {
    number: "01",
    title: "Fractional CTO",
    body: "Ongoing AI leadership for businesses that need a technical operator without the full-time hire. Build-or-buy decisions, vendor calls, architecture, and the roadmap.",
    href: "/book",
    cta: "Start with an audit",
  },
  {
    number: "02",
    title: "AI Operating Systems",
    body: "CRM, voice agents, automated follow-up, content pipelines, and reporting unified into one system that runs your business around the clock.",
    href: "/services",
    cta: "See the system",
  },
  {
    number: "03",
    title: "Working Agents, Deployed",
    body: "Production agents that scrape, score, draft, and report on a daily clock. I run a fleet of my own and deploy the same architecture for clients.",
    href: "/builds",
    cta: "See them running",
  },
  {
    number: "04",
    title: "AI Training",
    body: "Hands-on workshops and team training where people ship a working agent in the room. Plus a 435-member community learning implementation every week.",
    href: "/speaking",
    cta: "Book a session",
  },
];

export default function WhatIDo() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            What I Do
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] mb-4 leading-tight">
            Four ways I plug in.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="text-[var(--muted)] max-w-xl mb-16 leading-relaxed">
            Every engagement starts the same way: a paid audit that maps where AI actually
            pays off in your business. Then we pick the lane.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {lanes.map((lane, i) => (
            <AnimateIn key={lane.number} delay={0.05 * i}>
              <Link
                href={lane.href}
                className="group flex flex-col h-full bg-white border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--crimson)] transition-colors duration-300"
              >
                <p className="text-xs font-bold tracking-widest text-[var(--gold)] mb-5">
                  {lane.number}
                </p>
                <h3 className="text-xl md:text-2xl font-black text-[var(--ink)] mb-3 group-hover:text-[var(--crimson)] transition-colors duration-200">
                  {lane.title}
                </h3>
                <p className="text-sm text-[var(--ink-secondary)] leading-relaxed mb-6">
                  {lane.body}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[var(--crimson)]">
                  {lane.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
