"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          <svg
            width="28"
            height="28"
            viewBox="0 0 16 16"
            fill={(hovered || value) >= star ? "#F5A623" : "none"}
            stroke={(hovered || value) >= star ? "#F5A623" : "#ccc"}
            strokeWidth="0.8"
          >
            <path d="M8 1l1.854 3.756L14 5.528l-3 2.924.708 4.132L8 10.5l-3.708 2.084L5 8.452 2 5.528l4.146-.772L8 1z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function ReviewForm({ dark = true }: { dark?: boolean }) {
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

  const inputClass = dark
    ? "w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[var(--crimson)] transition-colors duration-200"
    : "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--ink)] text-sm placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--crimson)] transition-colors duration-200";

  const labelClass = dark
    ? "block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2"
    : "block text-[var(--muted)] text-xs font-semibold uppercase tracking-widest mb-2";

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center py-12 gap-4"
        >
          <div className="w-14 h-14 rounded-full bg-[var(--crimson)] flex items-center justify-center mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className={`text-xl font-black ${dark ? "text-white" : "text-[var(--ink)]"}`}>
            Thank you.
          </h4>
          <p className={`text-sm max-w-sm ${dark ? "text-white/60" : "text-[var(--muted)]"}`}>
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
            <label className={labelClass}>Your Rating</label>
            <StarRatingInput value={rating} onChange={setRating} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Your Name</label>
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
              <label className={labelClass}>What We Worked On</label>
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
            <label className={labelClass}>Your Review</label>
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
  );
}
