"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(139,26,26,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-semibold tracking-widest uppercase text-[var(--crimson)] mb-6"
          >
            Atlanta, Georgia
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-[var(--ink)] mb-6"
          >
            David
            <br />
            <span className="text-[var(--crimson)]">West III</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-[var(--ink-secondary)] mb-4 max-w-2xl"
          >
            I Build What Used to Take a Team.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-[var(--muted)] mb-10 max-w-xl leading-relaxed"
          >
            AI creative campaigns for global brands. AI operating systems for
            businesses that want to scale. Founder of Studio West Creatives.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--crimson)] text-white font-semibold rounded hover:bg-[var(--crimson-light)] transition-colors duration-200 text-sm"
            >
              See the Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--border)] text-[var(--ink)] font-semibold rounded hover:border-[var(--crimson)] hover:text-[var(--crimson)] transition-colors duration-200 text-sm"
            >
              Work With Me
            </a>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 max-w-xl"
          >
            <p className="text-sm text-[var(--muted)] mb-3">
              <span className="font-semibold text-[var(--ink)]">The West Report</span> — AI, innovation, tech, and longevity.
              What I&apos;m building, what I&apos;m watching, what you need to know before everyone else does.
            </p>
            {status === "success" ? (
              <p className="text-sm text-[var(--crimson)] font-semibold py-2.5">
                You&apos;re in. First issue coming soon.
              </p>
            ) : (
              <form
                className="flex gap-2"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus("loading");
                  try {
                    const res = await fetch("/api/subscribe", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ email }),
                    });
                    if (res.ok) {
                      setStatus("success");
                      setEmail("");
                    } else {
                      setStatus("error");
                    }
                  } catch {
                    setStatus("error");
                  }
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 border border-[var(--border)] rounded text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--crimson)] transition-colors duration-200 bg-transparent"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="shrink-0 px-5 py-2.5 bg-[var(--ink)] text-white text-sm font-semibold rounded hover:bg-[var(--crimson)] transition-colors duration-200 disabled:opacity-60"
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-xs text-red-500 mt-1">Something went wrong. Try again.</p>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-[var(--border)]"
          >
            {[
              { value: "8+", label: "Years in Tech" },
              { value: "6M+", label: "Views in 6 Months" },
              { value: "Fortune 500", label: "Pitch in Progress" },
              { value: "ATL", label: "Based" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-black text-[var(--ink)]">{stat.value}</p>
                <p className="text-xs text-[var(--muted)] font-medium tracking-wide uppercase mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1"
      >
        <span className="text-xs text-[var(--muted)] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[var(--border)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
