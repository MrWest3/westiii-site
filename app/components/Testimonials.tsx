"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "./AnimateIn";

const testimonials = [
  {
    quote:
      "Thank you so much for your time, patience, and effort you made for our video. We truly loved it and everyone else was amazed! I sincerely appreciate the craft and thought process you put into it. Highly recommended.",
    name: "Private Client",
    project: "AI Gender Reveal Video",
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

function StarRatingInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform duration-100 hover:scale-110 focus:outline-none"
          aria-label={`${star} star${star !== 1 ? "s" : ""}`}
        >
          <svg width="28" height="28" viewBox="0 0 16 16" fill={(hovered || value) >= star ? "#F5A623" : "none"} stroke={(hovered || value) >= star ? "#F5A623" : "#ccc"} strokeWidth="0.8">
            <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.132L8 10.5l-3.708 2.084L5 8.452 2 5.528l4.146-.772L8 1z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

function ReviewForm() {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!rating) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, project, rating, review }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--ink)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--crimson)] transition-colors duration-200";

  return (
    <AnimateIn delay={0.2}>
      <div className="bg-[var(--ink)] rounded-2xl p-8 md:p-10">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center text-center py-8 gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--crimson)] flex items-center justify-center mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-white text-xl font-black">Thank you.</h4>
              <p className="text-white/60 text-sm max-w-sm">
                Your review has been received. I appreciate you taking the time -- it means a lot.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-3">
                  Leave a Review
                </p>
                <h3 className="text-white text-2xl font-black leading-snug mb-1">
                  Worked with me?
                </h3>
                <p className="text-white/50 text-sm">Tell the world what it was like.</p>
              </div>

              {/* Star rating */}
              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                  Your Rating
                </label>
                <StarRatingInput value={rating} onChange={setRating} />
                {status === "error" && !rating && (
                  <p className="text-red-400 text-xs mt-1">Please select a rating.</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                    What We Worked On
                  </label>
                  <input
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    placeholder="AI Brand Campaign, AIOS, etc."
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">
                  Your Review
                </label>
                <textarea
                  required
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Share your experience working with David..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !rating}
                className="w-full sm:w-auto px-8 py-3.5 bg-[var(--crimson)] text-white text-sm font-semibold rounded-xl hover:bg-[var(--crimson-light)] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : "Submit Review"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header + cards */}
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

        {/* Review form */}
        <ReviewForm />

      </div>
    </section>
  );
}
