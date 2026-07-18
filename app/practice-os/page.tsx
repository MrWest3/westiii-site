import Link from "next/link";

export const metadata = {
  title: "AI Practice OS - Studio West Creatives",
  description:
    "AI front desk, lead capture, intake, follow-up, and revenue recovery systems for healthcare and wellness practices.",
};

const leaks = [
  {
    title: "Missed inquiries",
    body: "Calls, forms, DMs, and website visits arrive faster than the front desk can respond. The lead goes cold before anyone owns the next step.",
  },
  {
    title: "Manual intake",
    body: "Staff repeat the same questions, collect the same details, and move information between tools by hand.",
  },
  {
    title: "Dead follow-up",
    body: "Old leads, no-shows, dormant patients, and almost-booked prospects sit untouched because nobody has time to chase them.",
  },
  {
    title: "No operating view",
    body: "Owners cannot easily see what came in, what was handled, what needs action, and where revenue is leaking.",
  },
];

const system = [
  {
    number: "01",
    name: "Lead Capture",
    detail:
      "Website forms, landing pages, appointment interest, and service inquiries routed into one clean workflow.",
  },
  {
    number: "02",
    name: "AI Intake Assistant",
    detail:
      "A guarded intake layer that collects intent, preferred location, contact details, and next-step context before staff steps in.",
  },
  {
    number: "03",
    name: "Staff Handoff",
    detail:
      "Every qualified inquiry is summarized, tagged, and routed so the team knows who needs a call, text, or follow-up.",
  },
  {
    number: "04",
    name: "Revenue Recovery",
    detail:
      "Reactivation and follow-up workflows for old leads, no-shows, abandoned inquiries, and review requests.",
  },
  {
    number: "05",
    name: "Practice Dashboard",
    detail:
      "A simple command center for owners and operators to see inquiries, status, opportunities, and workflow performance.",
  },
];

const packages = [
  {
    name: "Foundation Rebuild",
    scope: "Scoped after audit",
    timeline: "About 3 weeks",
    tagline: "Fix the digital foundation.",
    features: [
      "Modern website rebuild",
      "SEO and page-structure cleanup",
      "Service and location architecture",
      "Forms, routing, and basic follow-up",
      "Ownership of code, admin, and hosting",
    ],
  },
  {
    name: "Practice Growth System",
    scope: "Scoped after audit",
    timeline: "14-21 days",
    tagline: "Build the front door that captures more opportunity.",
    features: [
      "Everything in Foundation",
      "AI-assisted lead capture",
      "Inquiry routing and staff handoff",
      "Missed-inquiry follow-up",
      "Review request workflow",
      "Basic operator dashboard",
      "Staff training and documentation",
    ],
  },
  {
    name: "Practice OS",
    scope: "Scoped after audit",
    timeline: "21-30 days",
    tagline: "Install the practice command center.",
    features: [
      "Everything in Growth",
      "Custom internal command center",
      "Multi-location reporting",
      "Reactivation campaigns",
      "Guarded AI FAQ/intake assistant",
      "Executive reporting",
      "30-45 days post-launch support",
    ],
  },
];

const proof = [
  { value: "8+", label: "years across cybersecurity, systems, and solutions engineering" },
  { value: "6M+", label: "content views in 6 months across AI, creative, and systems work" },
  { value: "435", label: "AI community members learning tools, workflows, and implementation" },
  { value: "14", label: "days to install the core operating workflow" },
];

const process = [
  {
    day: "Day 1-2",
    title: "Audit the front door",
    body: "Map inquiry sources, missed-call handling, forms, service paths, staff handoffs, and current follow-up.",
  },
  {
    day: "Day 3-7",
    title: "Build the capture layer",
    body: "Install forms, routing, AI-assisted intake prompts, notifications, and the first dashboard view.",
  },
  {
    day: "Day 8-11",
    title: "Wire recovery",
    body: "Add follow-up, reactivation, review requests, and status tracking for prospects that would otherwise disappear.",
  },
  {
    day: "Day 12-14",
    title: "Train and launch",
    body: "Walk staff through the workflow, document the system, test edge cases, and launch the operating cadence.",
  },
];

const fit = [
  "Wellness clinics",
  "Pediatric practices",
  "Functional medicine",
  "Medspas and aesthetics",
  "Concierge medicine",
  "Chiropractic offices",
  "IV therapy studios",
  "Multi-location practices",
];

export default function PracticeOSPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <section className="mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Studio West Creatives
          </p>
          <h1 className="mb-6 max-w-5xl text-5xl font-black leading-none tracking-tight text-[var(--ink)] md:text-7xl">
            AI front desk and revenue recovery for{" "}
            <span className="text-[var(--crimson)]">healthcare practices.</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[var(--ink-secondary)]">
            West Practice OS helps healthcare and wellness practices capture inquiries, qualify
            appointment interest, route staff handoffs, and recover old opportunities without
            adding another person to the front desk.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded bg-[var(--crimson)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
            >
              Book a Practice Leak Audit
            </Link>
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
            >
              View Implementation Options
            </a>
          </div>
        </section>

        <section className="mb-20 border-l-2 border-[var(--crimson)] pl-8">
          <p className="mb-4 text-2xl font-black leading-snug text-[var(--ink)] md:text-3xl">
            The problem is not that your practice needs more AI. The problem is that
            opportunity is leaking before your team can act on it.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            A new patient, client, or member may be worth thousands over the relationship.
            Losing even a few each month to slow response, unclear intake, or inconsistent
            follow-up is enough to justify a better operating system.
          </p>
        </section>

        <section className="mb-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Revenue Leaks
          </p>
          <h2 className="mb-10 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Four places practices lose money quietly.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {leaks.map((leak) => (
              <div key={leak.title} className="rounded-lg border border-[var(--border)] p-7">
                <h3 className="mb-3 text-xl font-black text-[var(--ink)]">{leak.title}</h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">{leak.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            The System
          </p>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
                One front door for leads, intake, handoff, and follow-up.
              </h2>
              <p className="max-w-2xl leading-relaxed text-[var(--ink-secondary)]">
                The system sits before the clinical relationship. It does not replace your
                EMR or your staff. It makes sure the right opportunities reach the right
                person with the right context.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--ink-secondary)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Built for non-clinical front-door workflows
            </div>
          </div>
          <div className="space-y-4">
            {system.map((item) => (
              <div
                key={item.name}
                className="grid gap-4 rounded-lg border border-[var(--border)] p-6 md:grid-cols-[96px_1fr]"
              >
                <p className="text-xs font-black uppercase tracking-widest text-[var(--crimson)]">
                  {item.number}
                </p>
                <div>
                  <h3 className="mb-2 text-2xl font-black tracking-tight text-[var(--ink)]">
                    {item.name}
                  </h3>
                  <p className="max-w-3xl leading-relaxed text-[var(--ink-secondary)]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 bg-[var(--surface)] px-6 py-12 md:px-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Built For
          </p>
          <h2 className="mb-8 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Practices where inquiry speed and trust matter.
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {fit.map((item) => (
              <div
                key={item}
                className="rounded border border-[var(--border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--ink-secondary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="packages" className="mb-24 scroll-mt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Implementation Options
          </p>
          <h2 className="mb-4 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Choose the right scope after the leak is clear.
          </h2>
          <p className="mb-10 max-w-2xl leading-relaxed text-[var(--ink-secondary)]">
            Every engagement begins by identifying where the practice is losing
            opportunity today, then scoping the smallest system that fixes the
            highest-value leak. Pricing depends on workflow complexity, locations,
            integrations, compliance requirements, and support needs.
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-lg border border-[var(--border)] bg-white p-7 text-[var(--ink)] transition-colors hover:border-[var(--crimson)]"
              >
                <div className="mb-8">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-black tracking-tight">{pkg.name}</h3>
                  </div>
                  <p className="mb-5 text-[var(--muted)]">{pkg.tagline}</p>
                  <p className="mb-1 text-2xl font-black leading-tight text-[var(--ink)]">
                    {pkg.scope}
                  </p>
                  <p className="text-sm text-[var(--muted)]">{pkg.timeline}</p>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--crimson)]" />
                      <span className="text-[var(--ink-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Process
          </p>
          <h2 className="mb-10 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            Four steps from audit to launch.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {process.map((step) => (
              <div key={step.title} className="rounded-lg border border-[var(--border)] p-7">
                <p className="mb-3 text-xs font-black uppercase tracking-widest text-[var(--crimson)]">
                  {step.day}
                </p>
                <h3 className="mb-3 text-xl font-black text-[var(--ink)]">{step.title}</h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => (
            <div key={item.label} className="rounded-lg border border-[var(--border)] p-6">
              <p className="mb-2 text-4xl font-black leading-none text-[var(--ink)]">
                {item.value}
              </p>
              <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="mb-24 rounded-lg border border-[var(--border)] p-8 md:p-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Guardrails
          </p>
          <h2 className="mb-4 text-3xl font-black leading-tight text-[var(--ink)] md:text-4xl">
            The system respects the boundary between marketing and clinical care.
          </h2>
          <p className="max-w-3xl leading-relaxed text-[var(--ink-secondary)]">
            The first version focuses on front-door workflows: contact details, service
            interest, preferred location, callback timing, routing, and staff follow-up.
            Anything involving clinical details, medical records, diagnoses, treatment
            information, insurance specifics, or protected health information gets scoped
            separately with the right compliance review and tooling.
          </p>
        </section>

        <section className="rounded-lg bg-[var(--ink)] p-10 text-center md:p-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            First Step
          </p>
          <h2 className="mx-auto mb-6 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Find the leak before you buy the system.
          </h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            The Practice Leak Audit maps your inquiry flow, follow-up gaps, intake friction,
            and highest-value automation opportunities before implementation begins.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded bg-[var(--crimson)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)]"
          >
            Request a Practice Leak Audit
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
        </section>
      </div>
    </main>
  );
}
