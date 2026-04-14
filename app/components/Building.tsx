import AnimateIn from "./AnimateIn";

const ventures = [
  {
    title: "AI Operating System (AIOS)",
    description:
      "A multi-agent AI system built in public — orchestrator, analyst, specialist agents running 24/7. The architecture behind how I build everything else.",
    status: "In Progress",
    statusColor: "text-emerald-600 bg-emerald-50",
    tags: ["Agents", "Claude", "Automation"],
  },
  {
    title: "AI Implementation Training",
    description:
      "Hands-on training for teams that want to actually use AI, not just talk about it. Creative teams, business operations, agentic workflows. Built for companies of any size, from startups to enterprise.",
    status: "Building",
    statusColor: "text-amber-600 bg-amber-50",
    tags: ["Training", "Enterprise", "Creative AI", "Workshops"],
  },
  {
    title: "Skool Community",
    description:
      "A creative AI community for builders, marketers, and entrepreneurs who want to use AI in their actual work. Mentorship, tools, and resources.",
    status: "Active",
    statusColor: "text-emerald-600 bg-emerald-50",
    tags: ["Community", "Skool", "Creative AI"],
    link: "https://www.skool.com/creative-ai-education-w-west-1549",
    linkLabel: "Join the Community",
  },
  {
    title: "YouTube — @WestTech3",
    description:
      "Long-form build-in-public content. Full breakdowns of AI systems, creative workflows, and what it actually looks like to build a company with AI.",
    status: "Active",
    statusColor: "text-emerald-600 bg-emerald-50",
    tags: ["YouTube", "Content", "Build in Public"],
    link: "https://www.youtube.com/@WestTech3",
  },
  {
    title: "Personal Brand",
    description:
      "6M+ views across platforms over the last 6 months. AI creative content, agentic systems commentary, and the ongoing documentation of building something from nothing.",
    status: "Active",
    statusColor: "text-emerald-600 bg-emerald-50",
    tags: ["Content", "AI Art", "Audience"],
  },
];

export default function Building() {
  return (
    <section id="building" className="py-24 md:py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            Building
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] mb-4 leading-tight">
            What&apos;s in Motion
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="text-[var(--muted)] max-w-xl mb-16 leading-relaxed">
            Active ventures across AI systems, creative production, education, and community. Always building.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ventures.map((v, i) => (
            <AnimateIn key={v.title} delay={0.05 * i}>
              <div className="bg-white border border-[var(--border)] rounded-xl p-6 h-full hover:border-[var(--crimson)] transition-colors duration-300 group flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-[var(--ink)] leading-snug group-hover:text-[var(--crimson)] transition-colors duration-200">
                    {v.title}
                  </h3>
                  <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${v.statusColor}`}>
                    {v.status}
                  </span>
                </div>

                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1">
                  {v.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {v.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {v.link && (
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-xs font-semibold text-[var(--crimson)] hover:underline inline-flex items-center gap-1"
                  >
                    {v.linkLabel ?? "Watch on YouTube"}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
