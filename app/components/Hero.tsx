"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const proofPoints = [
  { value: "5+ hrs", label: "found every week, or you don't pay" },
  { value: "1 role", label: "owned end to end by your first AI employee" },
  { value: "Atlanta", label: "in person, across the table" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-[var(--ink)]">
      {/* Atmosphere */}
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
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--gold)]"
        >
          The AI guy in Atlanta
        </motion.p>

        <motion.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hire the employee{" "}
          <span className="text-[var(--crimson-light)]">you can&apos;t find.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg"
        >
          There is one job in your business nobody wants and nobody can hire for. I
          install an AI employee that owns it: a real role with a job description, built
          on how your business actually runs, managed by me every week. It starts with a
          45-minute assessment. If I can&apos;t find you 5+ reclaimable hours a week, you
          don&apos;t pay.
        </motion.p>

        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
          >
            Book the Hours Back Plan ($999)
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
          <Link
            href="/ai-employees"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            Meet the AI employees
          </Link>
        </motion.div>

        <motion.dl
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-16 grid max-w-3xl gap-8 border-t border-white/10 pt-10 sm:grid-cols-3"
        >
          {proofPoints.map((point) => (
            <div key={point.value}>
              <dt className="text-2xl font-black text-white md:text-3xl">{point.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-white/45">
                {point.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
