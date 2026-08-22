import AnimateIn from "./AnimateIn";

const beats = [
  {
    number: "01",
    title: "Weeks, not quarters.",
    body: "I build with agents. A system that takes an agency a quarter takes me weeks, and you pay for the weeks.",
  },
  {
    number: "02",
    title: "I don't leave at handoff.",
    body: "Most AI projects fail because nobody on the team uses what got built. I stay until they do.",
  },
  {
    number: "03",
    title: "I do this work every day.",
    body: "I work in cybersecurity, on AI agent security specifically. Black Hat 2026 presenter. 6M+ views running AI production pipelines. Based in Atlanta, across the table.",
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
            Why me and not the other guy.
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
