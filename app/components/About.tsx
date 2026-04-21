import AnimateIn from "./AnimateIn";

const pillars = [
  {
    label: "Technology",
    description:
      "8+ years across cybersecurity, systems design, and enterprise solutions engineering. Currently an Inside SE at BeyondTrust.",
  },
  {
    label: "Creativity",
    description:
      "AI-generated visuals, video production, and brand campaigns at the intersection of art and technology. Work that actually gets people talking.",
  },
  {
    label: "Commerce",
    description:
      "Building AI operating systems and automation workflows that help businesses scale. The tools exist. The gap is implementation.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <AnimateIn>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
                About
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] mb-8 leading-tight">
                Technologist.
                <br />
                Builder.
                <br />
                <span className="text-[var(--crimson)]">Creative.</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="space-y-4 text-[var(--ink-secondary)] leading-relaxed">
                <p>
                  I studied Computer Information Systems at Georgia State University, where I also
                  played football, focused on application development and cybersecurity. My first
                  job was a cybersecurity analyst role at GSU itself. From there I moved into
                  Solutions Engineering. My first SE role was at Snyk, in application security, then
                  to BeyondTrust where I am now. The technical salesperson who sits between product
                  and customer. I&apos;ve been doing that at a high level ever since.
                </p>
                <p>
                  But that&apos;s always been the day job. The real work has been building. I&apos;ve
                  loved art my whole life: drawing, design, film, photography, music, every medium. When AI
                  tools started closing the gap between imagination and execution, I was already there.
                  A growing body of AI creative work. Content that has generated over 6 million views
                  across platforms, starting with viral AI art and building toward the systems underneath it.
                </p>
                <p>
                  I got loud about AI early, not because it was trendy, but because I genuinely
                  study psychology, sociology, and innovation. I understand how technology reshapes
                  behavior. The creative work was a Trojan horse: get people watching the visuals,
                  then show them what&apos;s possible with the systems and agents underneath. But the
                  horse was real. Art has always been my first language.
                </p>
                <p>
                  Now I&apos;m building Studio West Creatives to deliver both: AI-powered creative
                  production and AI operating systems for businesses that want to scale without
                  losing what makes them human.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-6 lg:pt-16">
            {pillars.map((pillar, i) => (
              <AnimateIn key={pillar.label} delay={0.1 + i * 0.1} direction="right">
                <div className="bg-white border border-[var(--border)] rounded-lg p-6 hover:border-[var(--crimson)] transition-colors duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[var(--crimson)] group-hover:scale-125 transition-transform duration-200" />
                    <h3 className="font-bold text-[var(--ink)] text-lg">{pillar.label}</h3>
                  </div>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </AnimateIn>
            ))}

            <AnimateIn delay={0.4} direction="right">
              <div className="bg-[var(--crimson)] rounded-lg p-6">
                <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-2">
                  Philosophy
                </p>
                <p className="text-white font-medium leading-relaxed text-sm">
                  &ldquo;AI is a thinking amplifier, not a replacement. The most critical skill right
                  now is synthesizing original ideas from incomplete information. That&apos;s what I
                  do.&rdquo;
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
