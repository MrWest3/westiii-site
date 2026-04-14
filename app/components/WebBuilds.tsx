import AnimateIn from "./AnimateIn";

const builds = [
  {
    title: "PRAGMATIKO — SKY RUNNERS",
    category: "Concept Footwear Brand",
    description:
      "A gallery-quality product site built to showcase a shoe as a design artifact. Cinematic hero, scroll-driven reveals, anatomy breakdowns. Positioned as art, not retail.",
    url: "https://coolshoez.netlify.app/",
    thumb: "/webbuilds/coolshoez-thumb.png",
    accent: "from-zinc-900 to-zinc-800",
  },
  {
    title: "Meridian Tower PH-6700",
    category: "Ultra-Luxury Real Estate",
    description:
      "A $12.8M Manhattan penthouse presented as architectural art. Room-by-room storytelling, materials showcase, and private viewings CTA. Built to close at the highest tier.",
    url: "https://luxurypenthouse.netlify.app/",
    thumb: "/webbuilds/penthouse-thumb.png",
    accent: "from-stone-900 to-stone-800",
  },
];

export default function WebBuilds() {
  return (
    <section id="webbuilds" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateIn>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
            Web Builds
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] mb-4 leading-tight">
            Sites I&apos;ve Built
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="text-[var(--muted)] max-w-xl mb-16 leading-relaxed">
            Every site here started with a single image. I used AI tools to expand on it, build out a full asset library, and turn it into a complete web experience.
            This is what's possible before you ever hire a photographer, videographer, or agency.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-6">
          {builds.map((build, i) => (
            <AnimateIn key={build.title} delay={0.1 * i}>
              <a
                href={build.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--crimson)] transition-colors duration-300"
              >
                {/* Thumbnail */}
                <div className={`relative w-full h-52 overflow-hidden bg-gradient-to-br ${build.accent}`}>
                  <img
                    src={build.thumb}
                    alt={build.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                      <span className="text-white text-xs font-semibold">View Live</span>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-2">
                    {build.category}
                  </p>
                  <h3 className="font-black text-[var(--ink)] text-lg leading-snug mb-3 group-hover:text-[var(--crimson)] transition-colors duration-200">
                    {build.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {build.description}
                  </p>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.3}>
          <div className="mt-10 border border-[var(--border)] rounded-xl p-6 bg-[var(--surface)]">
            <p className="text-sm font-semibold text-[var(--ink)] mb-1">Need a site like this?</p>
            <p className="text-sm text-[var(--muted)]">
              I build product sites, brand experiences, and landing pages using AI-generated assets and custom development.
              No templates. No agencies.{" "}
              <a href="mailto:StudioWest3@proton.me" className="text-[var(--crimson)] hover:underline font-medium">
                Reach out to scope your project.
              </a>
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
