"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const collageLeft = [
  { src: "/hero/client-09.jpg", alt: "Revenge Fitness brand identity" },
  { src: "/hero/creative-03.jpg", alt: "AI fashion design concept" },
  { src: "/hero/client-02.jpg", alt: "Pixar-style animated client video" },
];

const collageRight = [
  { src: "/hero/client-07.jpg", alt: "STYS AI virtual photo shoot" },
  { src: "/hero/creative-06.jpg", alt: "AI product commercial frame" },
  { src: "/hero/client-04.jpg", alt: "STYS collection launch model" },
];

const marquee = [
  { src: "/hero/client-01.jpg", alt: "DataVault AI brand commercial" },
  { src: "/hero/creative-04.jpg", alt: "AI sneaker campaign concept" },
  { src: "/hero/client-10.jpg", alt: "Revenge Fitness brand ad" },
  { src: "/hero/client-06.jpg", alt: "VerifyU animated app ad" },
  { src: "/hero/creative-02.jpg", alt: "West III holiday creative" },
  { src: "/hero/client-08.jpg", alt: "STYS AI studio shoot" },
  { src: "/hero/client-11.jpg", alt: "Revenge Fitness clothing mockup" },
  { src: "/hero/creative-01.jpg", alt: "AI tech commercial recreation" },
  { src: "/hero/client-03.jpg", alt: "STYS studio campaign video" },
  { src: "/hero/client-05.jpg", alt: "The Lab USA brand commercial" },
  { src: "/hero/creative-06.jpg", alt: "AI product commercial frame" },
  { src: "/hero/client-04.jpg", alt: "STYS collection launch" },
];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[var(--ink)] overflow-hidden">
      {/* Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 75% 25%, rgba(139,26,26,0.28) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 15% 85%, rgba(201,160,39,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="max-w-6xl mx-auto w-full px-6 pt-24 pb-10 relative">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold tracking-widest uppercase text-[var(--gold)] mb-6"
            >
              Atlanta, Georgia
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none text-white mb-6"
            >
              David
              <br />
              <span className="text-[var(--crimson-light)]">West III</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl font-light text-white/85 mb-4 max-w-2xl"
            >
              Your Fractional CTO for the AI Era.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-white/55 mb-10 max-w-xl leading-relaxed"
            >
              I build AI operating systems, deploy working agents, and train the teams that
              run them. For businesses that want leverage, with creative firepower to match.
              Founder of Studio West Creatives.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--crimson)] text-white font-semibold rounded hover:bg-[var(--crimson-light)] transition-colors duration-200 text-sm"
              >
                Book an AI Audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200 text-sm"
              >
                See the Work
              </a>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-10 max-w-xl"
            >
              <p className="text-sm text-white/50 mb-3">
                <span className="font-semibold text-white">The West Report</span> — AI, innovation, tech, and longevity.
                What I&apos;m building, what I&apos;m watching, what you need to know before everyone else does.
              </p>
              {status === "success" ? (
                <p className="text-sm text-[var(--gold)] font-semibold py-2.5">
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
                    className="flex-1 px-4 py-2.5 bg-white/10 border border-white/15 rounded text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[var(--gold)] transition-colors duration-200"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="shrink-0 px-5 py-2.5 bg-white text-[var(--ink)] text-sm font-semibold rounded hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors duration-200 disabled:opacity-60"
                  >
                    {status === "loading" ? "..." : "Subscribe"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="text-xs text-red-400 mt-1">Something went wrong. Try again.</p>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/10"
            >
              {[
                { value: "8+", label: "Years in Tech" },
                { value: "6M+", label: "Views in 6 Months" },
                { value: "4+", label: "AI Systems in Production" },
                { value: "ATL", label: "Based" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-white/40 font-medium tracking-wide uppercase mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Collage */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex gap-4 relative"
            aria-hidden="true"
          >
            <div className="flex flex-col gap-4 hero-drift-up">
              {collageLeft.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="w-44 rounded-xl border border-white/10 shadow-2xl shadow-black/50 object-cover"
                />
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-12 hero-drift-down">
              {collageRight.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="w-44 rounded-xl border border-white/10 shadow-2xl shadow-black/50 object-cover"
                />
              ))}
            </div>
            {/* Fade collage edges into the dark */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_55%,rgba(10,10,10,0.9)_100%)]" />
          </motion.div>
        </div>
      </div>

      {/* Work marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="relative mt-6 pb-8"
      >
        <div className="overflow-hidden relative">
          <div className="flex gap-3 w-max hero-marquee">
            {[...marquee, ...marquee].map((img, i) => (
              <a key={`${img.src}-${i}`} href="#work" tabIndex={-1} aria-hidden={i >= marquee.length}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-24 w-auto rounded-lg border border-white/10 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--ink)] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--ink)] to-transparent pointer-events-none" />
        </div>
        <p className="text-center text-xs text-white/30 tracking-widest uppercase mt-4">
          Made with AI. Every frame.
        </p>
      </motion.div>
    </section>
  );
}
