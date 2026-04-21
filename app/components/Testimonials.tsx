"use client";

import AnimateIn from "./AnimateIn";
import ReviewForm from "./ReviewForm";

const testimonials = [
  {
    quote:
      "Thank you so much for your time, patience, and effort you made for our video. We truly loved it and everyone else was amazed! I sincerely appreciate the craft and thought process you put into it. Highly recommended.",
    name: "Private Client",
    project: "AI Gender Reveal Video",
    rating: 5,
  },
  {
    quote:
      "The customer service was amazing and the project was done with efficiency. When David proposed the idea to me I couldn't turn it down because I knew what it could do for my business. I would recommend this to anyone who doesn't want to go through the hassle of a brand photoshoot!",
    name: "Antreal Allen",
    project: "AI Brand Photoshoot",
    rating: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F5A623">
          <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.132L8 10.5l-3.708 2.084L5 8.452 2 5.528l4.146-.772L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto space-y-16">

        <div>
          <div className="mb-12">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={i} delay={0.05 * i}>
                <div className="border border-[var(--border)] rounded-2xl p-7 bg-white flex flex-col gap-4 h-full">
                  <Stars count={t.rating} />
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

        <AnimateIn delay={0.2}>
          <div className="bg-[var(--ink)] rounded-2xl p-8 md:p-10">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-3">
                Leave a Review
              </p>
              <h3 className="text-white text-2xl font-black leading-snug mb-1">
                Worked with me?
              </h3>
              <p className="text-white/50 text-sm">Tell the world what it was like.</p>
            </div>
            <ReviewForm dark={true} />
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
