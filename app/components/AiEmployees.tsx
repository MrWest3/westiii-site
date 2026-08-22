import Link from "next/link";
import AnimateIn from "./AnimateIn";

const beats = [
  {
    number: "01",
    title: "A role with a job description",
    body: "One clearly defined job, owned end to end. Admin desk, executive assistant, research, reports, filing, or content.",
  },
  {
    number: "02",
    title: "A Company Brain you own",
    body: "Built from how your business actually runs, and it lives in files that belong to you. That is why the work sounds like you and not like a robot.",
  },
  {
    number: "03",
    title: "A weekly ledger that proves it",
    body: "Every Friday: what it did, the hours returned, and what that time is worth, in numbers you agreed to.",
  },
];

export default function AiEmployees() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            AI employees
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            The hire that shows up managed.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.16}>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
            I install AI employees that own one role in your business, and I stay on as
            the manager so the work actually gets done. Every one ships with three
            things no tool gives you.
          </p>
        </AnimateIn>

        <div className="grid gap-4 md:grid-cols-3">
          {beats.map((beat, index) => (
            <AnimateIn key={beat.number} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-[var(--border)] p-6 transition-colors duration-300 hover:border-[var(--crimson)] md:p-8">
                <p className="mb-8 text-xs font-bold tracking-widest text-[var(--gold)]">
                  {beat.number}
                </p>
                <h3 className="mb-3 text-xl font-black leading-snug text-[var(--ink)]">
                  {beat.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{beat.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.28}>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href="/ai-employees"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
            >
              See the roles
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/agent"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
            >
              Talk to my agent right now
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
