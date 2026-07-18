import AnimateIn from "./AnimateIn";

const beats = [
  {
    number: "01",
    title: "I secure AI agents for enterprises.",
    body: "I'm a BeyondTrust Solutions Engineer and a Black Hat 2026 presenter.",
  },
  {
    number: "02",
    title: "I build, teach, and show the work.",
    body: "My AI content has reached 6M+ views across platforms.",
  },
  {
    number: "03",
    title: "I'm here in Atlanta.",
    body: "I'm in the rooms, across the table, and available in person.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            Who I am
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            I do this work every day.
          </h2>
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
      </div>
    </section>
  );
}
