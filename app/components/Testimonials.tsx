"use client";

import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote:
      "Thank you so much for your time, patience, and effort you made for our video. We truly loved it and everyone else was amazed! I sincerely appreciate the craft and thought process you put into it. Highly recommended.",
    name: "Private Client",
    project: "AI Gender Reveal Video",
  },
];

function QuoteIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 11.515 8.515 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5C21.5 11.515 22.515 10 24 10V8z"
        fill="var(--crimson)"
        opacity="0.3"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <AnimateIn>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
                Testimonials
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] leading-tight">
                What Clients Say
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.15}>
            <a
              href="mailto:StudioWest3@proton.me?subject=Review%20for%20David%20West%20III&body=Hi%20David%2C%20I%20wanted%20to%20leave%20a%20review%20for%20the%20work%20you%20did%3A"
              className="text-sm font-semibold text-[var(--crimson)] hover:underline inline-flex items-center gap-1.5 pb-1"
            >
              Worked with me? Leave a review
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </AnimateIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={i} delay={0.05 * i}>
              <div className="border border-[var(--border)] rounded-2xl p-7 bg-white flex flex-col gap-5 h-full">
                <QuoteIcon />
                <p className="text-[var(--ink-secondary)] leading-relaxed text-sm flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[var(--border)] pt-4">
                  <p className="font-bold text-[var(--ink)] text-sm">{t.name}</p>
                  <p className="text-xs text-[var(--muted)] mt-0.5">{t.project}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
