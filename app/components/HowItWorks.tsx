import AnimateIn from "./AnimateIn";

const steps = [
  {
    number: "01",
    title: "Map",
    body: "A 60-minute deep dive on how your business actually runs.",
  },
  {
    number: "02",
    title: "Optimize",
    body: "I cut the wasted steps before automating anything.",
  },
  {
    number: "03",
    title: "Automate",
    body: "Tools, agents, and systems that give you your week back.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-[var(--surface)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            How it works
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            First, I find the hours.
          </h2>
        </AnimateIn>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimateIn key={step.number} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                <p className="mb-8 text-xs font-bold tracking-widest text-[var(--gold)]">
                  {step.number}
                </p>
                <h3 className="mb-3 text-2xl font-black text-[var(--ink)]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">{step.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.25}>
          <p className="mt-8 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
            Assessment first. I only build what the assessment proves you need.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
