import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: {
    absolute: "Hire an AI Employee | Managed AI Employees for Your Business",
  },
  description:
    "One clearly defined role, taken off your plate. Every AI employee comes with a job description, a Company Brain built from your business, scoped access, approval gates, and me managing it. Scoped after your $999 assessment.",
};

const shipsWith = [
  {
    number: "01",
    title: "A written job description",
    body: "One role, defined. What it owns, what it never touches, and what done looks like.",
  },
  {
    number: "02",
    title: "A Company Brain",
    body: "It knows your services, your pricing, your people, and how you talk. That is why it does not sound like a chatbot.",
  },
  {
    number: "03",
    title: "Only the tools it needs",
    body: "It only reaches the tools its job needs. Nothing else is reachable.",
  },
  {
    number: "04",
    title: "It asks you first",
    body: "It asks you first before sending, spending, or deleting anything.",
  },
  {
    number: "05",
    title: "A manager",
    body: "Me. Monitoring, repairs, and a monthly workflow review. When it breaks, that is my problem.",
  },
  {
    number: "06",
    title: "A weekly value ledger",
    body: "Every Friday: what it did, the hours returned, and what that time is worth, in numbers you agreed to.",
  },
];

const roles = [
  {
    number: "01",
    title: "Admin desk",
    body: "One request: find the inspector's email, pull the invoice for that job, make a new job folder, file the PDF, put the numbers in the tracking sheet, send back the link. Minutes later it is done and you never opened your inbox.",
  },
  {
    number: "02",
    title: "Executive assistant",
    body: "Before you are up: your calendar for the day, the three emails that actually need you, and the follow-up that was about to slip, drafted and waiting on your yes.",
  },
  {
    number: "03",
    title: "Research and prospecting",
    body: "Fifty target companies checked overnight. The twelve worth your time, scored, each with a first-touch draft in your voice. You approve. It sends nothing on its own.",
  },
  {
    number: "04",
    title: "Recurring reports",
    body: "The Monday scoreboard builds itself Sunday night. Sales, jobs, cash position, pulled from the tools you already use, on one page you actually read.",
  },
  {
    number: "05",
    title: "File and document management",
    body: "Every contract, COI, and permit renamed, filed, and findable. Ask for the signed vendor agreement from last spring and get the file, plus the clause you needed.",
  },
  {
    number: "06",
    title: "Content support",
    body: "Your last client call becomes three posts, a follow-up email, and an FAQ answer. Drafted in your voice, queued for approval, never published without you.",
  },
];

const myTeam = [
  {
    name: "The Radar",
    role: "Research",
    body: "Scans roughly 50 companies' feeds every weekday, scores what matters against my criteria, drafts the outreach, and lands a digest on my phone by 8am.",
  },
  {
    name: "The Producer",
    role: "Content",
    body: "Transcribes raw clips, drafts the hooks, renders finished captioned reels. I approve every hook myself. It is the pipeline behind 6M+ views in six months.",
  },
  {
    name: "The Chief of Staff",
    role: "Operations",
    body: "Builds my morning brief at 7:45 every weekday and runs my Telegram. I text it, it delegates to the rest of the team and reports back.",
  },
  {
    name: "The Bookkeeper",
    role: "Finance",
    body: "Takes a folder of bank and card statements and returns a full money report: categories, subscriptions, cancel candidates, flags. Nothing leaves my machine.",
  },
  {
    name: "My Company Brain",
    role: "Knowledge",
    body: "The layer the rest run on: what I sell, who I know, how my projects actually work. It is why their output sounds like me.",
  },
];

const managedLayer = [
  {
    number: "01",
    title: "A three-member group chat",
    body: "You, the employee, and me, in one channel. Telegram by default. Or Buzz, Block's new workspace built for humans and agents working together, if your team lives in a workspace.",
  },
  {
    number: "02",
    title: "Observable coaching",
    body: "You watch how I talk to it. I watch what you ask it, catch the unclear instructions, and build the next workflow from what you actually need.",
  },
  {
    number: "03",
    title: "Monitoring and repairs",
    body: "I watch the system, catch the failures, and fix them. A monthly review keeps the role growing instead of going stale.",
  },
  {
    number: "04",
    title: "A shared source of truth",
    body: "Important output lands in spreadsheets and documents you can open, check, and edit. Research never disappears into a chat history.",
  },
];

const ledgerRows = [
  { task: "Chased 14 unpaid invoices", hours: "3.5 hrs", value: "$263" },
  { task: "Filed 41 job documents", hours: "2 hrs", value: "$150" },
  { task: "Built the Monday scoreboard", hours: "1.5 hrs", value: "$113" },
  { task: "Drafted 9 follow-up replies", hours: "2 hrs", value: "$150" },
];

const faqItems = [
  {
    question: "What can it actually access?",
    answer:
      "Only what its role needs. Access is scoped tool by tool, and anything consequential, sending money, deleting records, contacting a customer, waits for human approval. Defining those boundaries is the first thing we do.",
  },
  {
    question: "What if my team doesn't use it?",
    answer:
      "Then I have failed, and fixing that is exactly what the monthly fee buys. Most AI projects die after handoff because nobody manages adoption. Your team watches the employee work in the shared channel from day one, and if usage drops, I treat that as a bug in the workflow, and I fix the workflow.",
  },
  {
    question: "Which role should I start with?",
    answer:
      "The one you dread. For most owners that is the admin desk or the executive assistant work. The assessment answers this precisely: we find the function eating the most hours and hire for that one first.",
  },
  {
    question: "What tools does it work with?",
    answer:
      "Email, calendars, drives, spreadsheets, accounting systems, CRMs, and most software your business already runs. If it has an export or an API, it is probably reachable. We confirm the exact list during the assessment.",
  },
  {
    question: "Is my data safe?",
    answer:
      "I work in cybersecurity, on AI agent security specifically. Your employee only reaches the tools its job needs, it asks you first before anything important, and its Company Brain lives in files that belong to you. You can see everything it knows and everything it did.",
  },
  {
    question: "What does it cost?",
    answer:
      "I scope it after the assessment, and your $999 comes off the top. When one employee proves itself and you want more of the job covered, we scope that the same way.",
  },
];

function CtaButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
    >
      {label}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function AiEmployeesPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="border-b border-[var(--border)] px-6 py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              AI employees
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              Hire the employee{" "}
              <span className="text-[var(--crimson)]">you can&apos;t find.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              Every business has one job nobody wants and nobody can hire for. Chasing
              invoices. Filing documents. Building the same report every Monday. I install
              an AI employee that owns that role, and I manage it so it actually gets used.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-7 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] sm:text-lg">
              Scoped after the assessment, and your $999 comes off the top.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.26}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <CtaButton href="/book" label="Start With the Assessment" />
              <Link
                href="/agent"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
              >
                Talk to one right now
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What it ships with */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              A role, on staff
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              You are hiring a role. The software is the small part.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              A tool waits for you to figure it out. An employee owns work. Every AI
              employee I install comes with all six of these.
            </p>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shipsWith.map((item, index) => (
              <AnimateIn key={item.number} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {item.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Starting roles */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Starting roles
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              What one request looks like.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Six roles I hire for most. These are scenarios so you can see the shape. The
              role we actually hire for comes out of your assessment.
            </p>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, index) => (
              <AnimateIn key={role.number} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-[var(--border)] p-6 transition-colors duration-300 hover:border-[var(--crimson)] md:p-8">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {role.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-[var(--ink)]">
                    {role.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{role.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <p className="mt-8 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
              The first time it hands back a finished piece of work you hate doing, you
              will ask the only question that matters: what else can it do?
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Meet my own team */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Proof
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Meet my own team.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/65">
              I do not sell anything I do not run. This is the staff working in my own
              business today.
            </p>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {myTeam.map((member, index) => (
              <AnimateIn key={member.name} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[var(--crimson-light)]">
                  <p className="mb-1 text-lg font-black leading-snug text-white">
                    {member.name}
                  </p>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed text-white/60">{member.body}</p>
                </div>
              </AnimateIn>
            ))}
            <AnimateIn delay={0.25}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[var(--crimson-light)] bg-white/[0.04] p-6">
                <p className="text-sm leading-relaxed text-white/70">
                  The Bottleneck Agent lives on this site. It found the bottleneck in
                  someone&apos;s business while you were reading this page.
                </p>
                <Link
                  href="/agent"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-[var(--gold)]"
                >
                  Talk to it
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Company Brain */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <AnimateIn>
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                  The knowledge layer
                </p>
                <h2 className="text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
                  The Company Brain.
                </h2>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-[var(--ink-secondary)]">
                <p>
                  Most AI fails in a business for one reason: it knows nothing about the
                  business. The Company Brain fixes that. During the assessment I sit with
                  your team and map how the work actually happens. That becomes a
                  structured knowledge base: your services, your pricing, your processes,
                  your people, the way you talk to customers.
                </p>
                <p>
                  It lives in files that belong to you. You can read every line it
                  knows. Every AI employee you hire runs on it, which is why the second
                  hire trains faster than the first.
                </p>
                <p className="border-l-2 border-[var(--crimson)] pl-5 font-semibold text-[var(--ink)]">
                  The brain is never the product on its own. A knowledge base sitting on
                  broken processes changes nothing. It is built from the assessment and
                  shipped inside the install.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Managed layer */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              The managed layer
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              A working agent does not create adoption. Management does.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Most AI projects die after handoff. The build works, the team never touches
              it. So I stay on as the manager, and this is what that looks like every
              month.
            </p>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {managedLayer.map((item, index) => (
              <AnimateIn key={item.number} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {item.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Value ledger */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <AnimateIn>
              <div>
                <h3 className="text-3xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-4xl">
                  Every Friday, the ledger.
                </h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--ink-secondary)]">
                  What it did, the hours returned, and what that time is worth, priced at
                  baselines you agreed to. If it does not know how long a task normally
                  takes, it asks you. Estimates you correct, never numbers invented to
                  look good.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
                <div className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                    Weekly value ledger · illustrative example
                  </p>
                </div>
                <table className="w-full text-left text-sm">
                  <tbody>
                    {ledgerRows.map((row) => (
                      <tr
                        key={row.task}
                        className="border-b border-[var(--border)] last:border-b-0"
                      >
                        <td className="px-6 py-4 text-[var(--ink-secondary)]">
                          {row.task}
                        </td>
                        <td className="px-4 py-4 text-right font-semibold tabular-nums text-[var(--ink)]">
                          {row.hours}
                        </td>
                        <td className="px-6 py-4 text-right font-black tabular-nums text-[var(--crimson)]">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-[var(--surface)]">
                      <td className="px-6 py-4 font-black text-[var(--ink)]">
                        One week back
                      </td>
                      <td className="px-4 py-4 text-right font-black tabular-nums text-[var(--ink)]">
                        9 hrs
                      </td>
                      <td className="px-6 py-4 text-right font-black tabular-nums text-[var(--crimson)]">
                        $676
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-t border-[var(--border)] px-6 py-3 text-xs leading-relaxed text-[var(--muted)]">
                  Illustrative week at $75 an hour. Your ledger runs on your numbers.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Security band */}
      <section className="bg-[var(--crimson)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateIn>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/70">
              The part I refuse to wing
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-2xl font-black leading-snug text-white sm:text-3xl md:text-4xl">
              AI agent security is what I do all week.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              I work in cybersecurity, on AI agent security specifically. My job is
              learning how these agents break and showing companies how to lock them
              down. Your AI employee gets the same
              treatment: it only reaches the tools its job needs, it asks you first before
              anything consequential, and a human signs off where it counts. An employee
              you cannot trust with the keys is not an employee.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* How it starts */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              How it starts
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-12 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Assessment first. Then the hire.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-3">
            <AnimateIn>
              <div className="h-full rounded-2xl border border-[var(--border)] p-6 md:p-8">
                <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">01</p>
                <h3 className="mb-3 text-xl font-black text-[var(--ink)]">
                  Find the role.
                </h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">
                  Start with the{" "}
                  <Link
                    href="/book"
                    className="font-semibold text-[var(--crimson)] underline underline-offset-4"
                  >
                    $999 assessment
                  </Link>
                  . We find the function eating the most hours.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <div className="h-full rounded-2xl border border-[var(--crimson)] p-6 md:p-8">
                <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">02</p>
                <h3 className="mb-3 text-xl font-black text-[var(--ink)]">
                  Hire your first AI employee.
                </h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">
                  Scoped after the assessment. Your $999 comes off the top. One role,
                  fully owned, proven on the ledger before we talk about a second.
                </p>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.16}>
              <div className="h-full rounded-2xl border border-[var(--border)] p-6 md:p-8">
                <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">03</p>
                <h3 className="mb-3 text-xl font-black text-[var(--ink)]">
                  Build the full team.
                </h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">
                  Scoped after the assessment. When the first role proves itself, we use
                  what we learned to scope the next one.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.24}>
            <p className="mt-8 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
              Expand the role before the headcount. The second hire comes when the first
              one has proven itself.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <h2 className="mb-12 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Straight answers.
            </h2>
          </AnimateIn>

          <dl className="space-y-8">
            {faqItems.map((item, index) => (
              <AnimateIn key={item.question} delay={index * 0.04}>
                <div className="border-b border-[var(--border)] pb-8">
                  <dt className="mb-3 text-lg font-black text-[var(--ink)]">
                    {item.question}
                  </dt>
                  <dd className="leading-relaxed text-[var(--ink-secondary)]">
                    {item.answer}
                  </dd>
                </div>
              </AnimateIn>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              One role. Off your plate. Managed.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton href="/book" label="Start With the Assessment" />
              <Link
                href="/agent"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                Not sure which role? Ask my agent
              </Link>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <p className="mt-8 text-sm text-white/50">
              Three minutes on your phone. It finds the bottleneck, I find the hire.
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
