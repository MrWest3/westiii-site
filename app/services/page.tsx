import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "Two ways in. The $999 Hours Back Plan for small businesses, or a $3,500 Current State Assessment for companies doing $2M to $50M. Then Agent HQ builds and an operating retainer.",
};

type Offer = {
  number: string;
  name: string;
  price: string;
  who: string;
  included: string[];
  start: string;
  cta: string;
  dark: boolean;
  href?: string;
  muted?: boolean;
};

const offers: Offer[] = [
  {
    number: "01",
    name: "The Hours Back Plan",
    price: "$999",
    who: "Owner-operated businesses with 2 to 20 people that want to know where AI actually fits.",
    included: [
      "45-minute discovery call",
      "Written AI playbook with your pain points, exact tools, cost, setup time, hours saved, and a 4-day quick start",
      "30-minute review call",
      "100% money-back guarantee. 5+ reclaimable hours found inside 48 hours, or you don't pay.",
    ],
    start: "Book it. We start with the 45-minute discovery call.",
    cta: "Book Your Assessment",
    dark: false,
  },
  {
    number: "02",
    name: "Current State Assessment",
    price: "$3,500",
    who: "Companies doing $2M to $50M that need their operations mapped, not a tool list.",
    included: [
      "Visual process maps for every major workflow you run",
      "The cost of inaction, priced in your numbers",
      "Architecture and data flow for the system that fixes it",
      "A phased roadmap with deliverables week by week",
      "Quantified ROI with a payback period",
      "$50,000 in annualized reclaimable cost found in 14 days, or you don't pay",
    ],
    start: "Book a fit call. The assessment runs two to three weeks.",
    cta: "See the Current State Assessment",
    href: "/assessment",
    dark: true,
  },
  {
    number: "03",
    name: "Agent HQ",
    price: "from $15,000",
    who: "Companies that want a private AI operating system of their own.",
    included: [
      "A full install built on your data",
      "Branded to you",
      "Connected to your real tools",
      "Working agents, automations, and custom workflows",
      "Process redesign where the process is the problem",
      "A foundation session with your team",
    ],
    start: "Assessment first. The assessment defines what Agent HQ needs to do.",
    cta: "Start With an Assessment",
    dark: false,
  },
  {
    number: "04",
    name: "Fractional AI CTO",
    price: "$1,500/mo",
    who: "Owner-operated businesses under $2M who want me in their corner month over month.",
    included: [
      "Two 45-minute working sessions a month",
      "We build on your screen, in your tools, on your real workflows",
      "The same loop every session: map, optimize, automate",
      "Direct async access between sessions",
    ],
    start: "Assessment first. It gives us the baseline for the monthly work.",
    cta: "Start With an Assessment",
    dark: false,
  },
  {
    number: "05",
    name: "Operating Retainer",
    price: "$3,000/mo, limited to 6 clients",
    who: "Companies running an Agent HQ install who want it maintained, adopted, and growing.",
    included: [
      "Two working sessions a month",
      "Direct async access, 12 business hour response",
      "Adoption tracking. If your team is not using it, that is my problem to fix.",
      "New capabilities as you ask for them",
      "A monthly proof report: what the system handled, what needed a human, what improved",
    ],
    start: "Comes after the build. The install gives us the baseline for the monthly work.",
    cta: "Start With an Assessment",
    dark: false,
  },
  {
    number: "06",
    name: "Advisory Block",
    price: "$2,500, four weekly calls",
    who: "Companies that need direction before they need anything built.",
    included: [
      "Four calls, one a week, paid upfront",
      "What changed this week, mapped against what you actually do",
      "The two tools worth testing, the one to kill, the rest to ignore",
      "The highest-ROI thing to build next",
    ],
    start: "Email me. This one is a conversation, not a booking link.",
    cta: "Email Me About Advisory",
    href: "mailto:StudioWest3@proton.me?subject=Advisory%20Block",
    dark: false,
    muted: true,
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="border-b border-[var(--border)] px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Offers
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              Find the hours. <span className="text-[var(--crimson)]">Then build the fix.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              Every engagement starts with an assessment. Under $2M, that is the $999 Hours
              Back Plan: where AI fits, what it costs, how much time it saves. At $2M to
              $50M, it is the Current State Assessment: your whole operation mapped and a
              build plan priced. Use it yourself or have me build it with you.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-7 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] sm:text-lg">
              Assessment first. I only build what the assessment proves you need.
            </p>
          </AnimateIn>
        </div>
      </section>

      {offers.map((offer, index) => {
        const textColor = offer.dark ? "text-white" : "text-[var(--ink)]";
        const secondaryColor = offer.dark
          ? "text-white/65"
          : "text-[var(--ink-secondary)]";
        const borderColor = offer.dark ? "border-white/10" : "border-[var(--border)]";

        return (
          <section
            key={offer.number}
            className={`px-6 py-16 md:py-24 ${
              offer.dark
                ? "bg-[var(--ink)]"
                : index % 2 === 0
                  ? "bg-white"
                  : "bg-[var(--surface)]"
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <AnimateIn>
                <div>
                  <p className="mb-6 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {offer.number}
                  </p>
                  <h2 className={`text-4xl font-black leading-tight tracking-tight md:text-5xl ${textColor}`}>
                    {offer.name}
                  </h2>
                  <p className="mt-3 text-lg font-bold text-[var(--crimson-light)]">
                    {offer.price}
                  </p>

                  <div className={`mt-9 border-t pt-7 ${borderColor}`}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                      Who it&apos;s for
                    </p>
                    <p className={`max-w-xl text-lg leading-relaxed ${secondaryColor}`}>
                      {offer.who}
                    </p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <div
                  className={`rounded-2xl border p-6 sm:p-8 md:p-10 ${
                    offer.dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-[var(--border)] bg-white"
                  }`}
                >
                  <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--crimson-light)]">
                    What&apos;s included
                  </p>
                  <ul className="space-y-4">
                    {offer.included.map((item) => (
                      <li key={item} className={`flex gap-3 leading-relaxed ${secondaryColor}`}>
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-8 border-t pt-7 ${borderColor}`}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                      How it starts
                    </p>
                    <p className={`leading-relaxed ${secondaryColor}`}>{offer.start}</p>
                  </div>

                  <Link
                    href={offer.href ?? "/book"}
                    className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded px-6 py-3.5 text-center text-sm font-semibold transition-colors duration-200 sm:w-auto ${
                      offer.muted
                        ? "border border-[var(--ink)] text-[var(--ink)] hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
                        : "bg-[var(--crimson)] text-white hover:bg-[var(--crimson-light)]"
                    }`}
                  >
                    {offer.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </section>
        );
      })}

      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <div className="rounded-2xl border border-[var(--crimson)] bg-white p-7 sm:p-10 md:p-12">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                    Industry package
                  </p>
                  <h2 className="text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
                    Practice OS
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
                    The packaged system for dental and medical practices. Capture inquiries,
                    clean up intake and handoffs, and recover follow-up opportunities.
                  </p>
                </div>
                <Link
                  href="/practice-os"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)] sm:w-auto"
                >
                  See Practice OS
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
