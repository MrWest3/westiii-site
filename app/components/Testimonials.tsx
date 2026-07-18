import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote:
      "Thank you so much for your time, patience, and effort you made for our video. We truly loved it and everyone else was amazed! I sincerely appreciate the craft and thought process you put into it. Highly recommended.",
    name: "Private Client",
    project: "AI Gender Reveal Video",
  },
  {
    quote:
      "The customer service was amazing and the project was done with efficiency. When David proposed the idea to me I couldn't turn it down because I knew what it could do for my business. I would recommend this to anyone who doesn't want to go through the hassle of a brand photoshoot!",
    name: "Antreal Allen",
    project: "AI Brand Photoshoot",
  },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} width="16" height="16" viewBox="0 0 16 16" fill="#C9A027" aria-hidden="true">
          <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.132L8 10.5l-3.708 2.084L5 8.452 2 5.528l4.146-.772L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {testimonials.map((testimonial, index) => (
        <AnimateIn key={testimonial.name + testimonial.project} delay={0.08 * index}>
          <figure className="flex h-full flex-col gap-5 rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
            <Stars />
            <blockquote className="flex-1 text-sm leading-relaxed text-[var(--ink-secondary)]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="border-t border-[var(--border)] pt-4">
              <p className="text-sm font-bold text-[var(--ink)]">{testimonial.name}</p>
              <p className="mt-0.5 text-xs text-[var(--muted)]">{testimonial.project}</p>
            </figcaption>
          </figure>
        </AnimateIn>
      ))}
    </div>
  );
}
