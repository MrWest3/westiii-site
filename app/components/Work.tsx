import Link from "next/link";
import AnimateIn from "./AnimateIn";

const featured = [
  {
    id: "weststone",
    label: "Creative Campaign",
    title: "The WestStone Project",
    client: "Visa x FIFA World Cup 2026",
    description:
      "A full AI-generated creative concept package built to compete with agency-level work — produced solo. 28 original illustrations spanning 8 host cities, 11 animated spots across 6 animation styles, and an original brand character. Pitched directly to Visa.",
    tags: ["AI Creative", "Brand Campaign", "Kling", "NanoBanana Pro", "Seedance 2"],
    stats: [
      { value: "28", label: "Illustrations" },
      { value: "11", label: "Animated Spots" },
      { value: "8", label: "Host Cities" },
    ],
    status: "Active Pitch",
    image: "/weststone/USA-Host-Cities-Map-Visa-Tap.png",
  },
  {
    id: "agency",
    label: "AI Agency",
    title: "AI Operating System",
    client: "Multi-Location Enterprise Client",
    description:
      "A full AI operating system proposal covering CRM, AI voice agents, content pipelines, membership platforms, automated lead follow-up, and workflow automation — unified into one system. Three deployment tiers built to consolidate your existing tools and deliver more capability across every function.",
    tags: ["AI Agency", "Automation", "CRM", "Voice Agents", "Enterprise"],
    stats: [
      { value: "3", label: "Service Tiers" },
      { value: "6+", label: "AI Agents" },
      { value: "14 Days", label: "To Deploy" },
    ],
    status: "Proposal Stage",
    tiers: [
      { name: "Foundation", price: "$2,500" },
      { name: "Growth", price: "$3,500" },
      { name: "Enterprise", price: "$5,500" },
    ],
  },
];

const smallWork = [
  {
    title: "AI Virtual Photo Shoot",
    description: "Lifelike AI model shoot for a clothing brand's new drop. Full commercial quality, zero studio cost.",
    tags: ["AI Photography", "Fashion"],
  },
  {
    title: "College Recruitment App Ad",
    description: "60-second AI-generated commercial for a college recruitment platform using NanoBanana Pro and Kling.",
    tags: ["Video Production", "Kling"],
  },
  {
    title: "Baby Gender Reveal",
    description: "Custom 45-second Pixar-style animated gender reveal video — a client found the work on Instagram and reached out.",
    tags: ["Animation", "Kling"],
  },
  {
    title: "DataVault AI Commercials",
    description: "Two brand commercials for DataVault AI. Still in active use by the company today.",
    tags: ["Brand Video", "AI Creative"],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            Work
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] mb-4 leading-tight">
            What I&apos;ve Built
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="text-[var(--muted)] max-w-xl mb-16 leading-relaxed">
            Creative production and AI systems work. From spec campaigns for global brands to
            enterprise automation proposals.
          </p>
        </AnimateIn>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featured.map((project, i) => (
            <AnimateIn key={project.id} delay={i * 0.1}>
              <Link
                href={project.id === "weststone" ? "#weststone" : "/services"}
                className="block border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--crimson)] transition-colors duration-300 group cursor-pointer"
              >

                {/* Image Header */}
                {project.image && (
                  <div className="relative w-full h-56 md:h-72 overflow-hidden bg-[var(--surface)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}

                {/* Tier Visual Header for Agency card */}
                {project.tiers && (
                  <div className="w-full bg-[var(--ink)] px-8 py-6 flex items-center justify-between gap-4 flex-wrap">
                    {project.tiers.map((tier, idx) => (
                      <div key={tier.name} className="flex-1 min-w-0 text-center">
                        <p className={`text-sm font-bold tracking-widest uppercase ${idx === 2 ? "text-[var(--gold)]" : "text-white/60"}`}>
                          {tier.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)]">
                          {project.label}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--surface)] text-[var(--ink-secondary)]">
                          {project.status}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-[var(--ink)] group-hover:text-[var(--crimson)] transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-[var(--crimson)] mt-1">{project.client}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="text-right">
                          <p className="text-xl font-black text-[var(--ink)]">{stat.value}</p>
                          <p className="text-xs text-[var(--muted)] font-medium uppercase tracking-wide">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-[var(--ink-secondary)] leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 bg-[var(--surface)] text-[var(--ink-secondary)] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>

        {/* Small work grid */}
        <AnimateIn delay={0.1}>
          <h3 className="text-lg font-bold text-[var(--ink)] mb-6">Other Projects</h3>
        </AnimateIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {smallWork.map((item, i) => (
            <AnimateIn key={item.title} delay={0.05 * i}>
              <div className="border border-[var(--border)] rounded-xl p-5 h-full hover:border-[var(--crimson)] transition-colors duration-300 group">
                <h4 className="font-bold text-[var(--ink)] text-sm mb-2 group-hover:text-[var(--crimson)] transition-colors duration-200">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-[var(--surface)] text-[var(--muted)] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
