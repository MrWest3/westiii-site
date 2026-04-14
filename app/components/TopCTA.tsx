"use client";

export default function TopCTA() {
  return (
    <div className="bg-[var(--ink)] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Work With Me */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <p className="text-white/70 text-sm font-medium whitespace-nowrap">Ready to build something?</p>
          <a
            href="mailto:StudioWest3@proton.me"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--crimson)] text-white text-sm font-semibold rounded hover:bg-[var(--crimson-light)] transition-colors duration-200"
          >
            Work With Me
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-white/10" />

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <p className="text-white/70 text-sm font-medium whitespace-nowrap">The West Report</p>
          <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-56 px-4 py-2.5 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors duration-200"
            />
            <button
              type="submit"
              className="shrink-0 px-4 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded hover:bg-white/20 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
