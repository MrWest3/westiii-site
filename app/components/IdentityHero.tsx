"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { FREE_CALL_URL, socials } from "../lib/links";

const rise = (delay: number) => ({
  initial: { y: 16 },
  animate: { y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function IdentityHero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-[var(--ink)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 75% 25%, rgba(139,26,26,0.28) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 15% 85%, rgba(201,160,39,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-28">
        <motion.p
          {...rise(0.1)}
          className="mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--gold)]"
        >
          David West III. Atlanta.
        </motion.p>

        <motion.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          AI consultant{" "}
          <span className="text-[var(--crimson-light)]">and coach.</span>
        </motion.h1>

        <motion.p
          {...rise(0.4)}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          I build AI employees for businesses and coach the people who run them. By day I
          work in cybersecurity, on AI agent security. Six million views of the work,
          shown in public.
        </motion.p>

        <motion.ul
          {...rise(0.5)}
          aria-label="Find me online"
          className="mt-8 flex flex-wrap gap-2"
        >
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-[var(--gold)] hover:bg-white/10"
              >
                <span className="font-semibold">{social.label}</span>
                <span className="text-white/50 transition-colors group-hover:text-[var(--gold)]">
                  {social.handle}
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.div {...rise(0.6)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
          >
            Book the $999 Assessment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <a
            href={FREE_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            Book a free call
          </a>
        </motion.div>

        <motion.p {...rise(0.7)} className="mt-5 text-sm text-white/45">
          Or DM me on Instagram, or email{" "}
          <a
            href="mailto:StudioWest3@proton.me"
            className="text-white/70 underline decoration-[var(--crimson)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--gold)]"
          >
            StudioWest3@proton.me
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
