"use client";

import AnimateIn from "./AnimateIn";

const socials = [
  { label: "YouTube", handle: "@WestTech3", href: "https://www.youtube.com/@WestTech3" },
  { label: "Instagram", handle: "@__dw3", href: "https://www.instagram.com/__dw3/" },
  { label: "X / Twitter", handle: "@___DW3", href: "https://x.com/___DW3" },
  { label: "TikTok", handle: "@___dw3", href: "https://www.tiktok.com/@___dw3" },
  {
    label: "LinkedIn",
    handle: "David West III",
    href: "https://www.linkedin.com/in/david-west-iii-289ba7148",
  },
];

export default function Connect() {
  return (
    <>
      <section id="connect" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: CTA */}
            <div>
              <AnimateIn>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
                  Connect
                </p>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] mb-6 leading-tight">
                  Let&apos;s Build
                  <br />
                  <span className="text-[var(--crimson)]">Something.</span>
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <p className="text-[var(--muted)] leading-relaxed mb-8 max-w-md">
                  Whether you need AI creative production, an operating system for your business, or
                  just want to follow the build — reach out.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <div className="space-y-3 mb-8">
                  {[
                    "AI creative campaigns and brand content",
                    "AI operating systems for your business",
                    "Consulting and advisory work",
                    "Partnerships and collaborations",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[var(--ink-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--crimson)] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <a
                  href="mailto:StudioWest3@proton.me"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--crimson)] text-white font-semibold rounded hover:bg-[var(--crimson-light)] transition-colors duration-200 text-sm"
                >
                  Send a Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </AnimateIn>
            </div>

            {/* Right: Socials + Newsletter */}
            <div className="space-y-8">
              {/* Socials */}
              <AnimateIn delay={0.1} direction="right">
                <div className="border border-[var(--border)] rounded-xl p-6">
                  <h3 className="font-bold text-[var(--ink)] mb-5">Follow the Build</h3>
                  <div className="space-y-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-2.5 border-b border-[var(--border)] last:border-0 hover:text-[var(--crimson)] transition-colors duration-200 group"
                      >
                        <span className="text-sm font-medium text-[var(--ink-secondary)] group-hover:text-[var(--crimson)]">
                          {s.label}
                        </span>
                        <span className="text-sm text-[var(--muted)] group-hover:text-[var(--crimson)] flex items-center gap-1.5">
                          {s.handle}
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Newsletter */}
              <AnimateIn delay={0.2} direction="right">
                <div className="bg-[var(--ink)] rounded-xl p-6">
                  <h3 className="font-bold text-white mb-1">The West Report</h3>
                  <p className="text-white/60 text-sm mb-1">
                    AI. Innovation. Tech. Longevity. What I&apos;m building, what I&apos;m watching, what you need to know.
                  </p>
                  <p className="text-white/40 text-xs mb-5">Drop your email. Stay ahead.</p>
                  <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-200"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 bg-[var(--crimson)] text-white text-sm font-semibold rounded hover:bg-[var(--crimson-light)] transition-colors duration-200 shrink-0"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Studio West Creatives LLC. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted)]">
            David A. West III — Atlanta, Georgia
          </p>
        </div>
      </footer>
    </>
  );
}
