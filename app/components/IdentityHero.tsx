"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { FREE_CALL_URL, socials } from "../lib/links";

const rise = (delay: number) => ({
  initial: { y: 16 },
  animate: { y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function IdentityHero() {
  return (
    <section className="relative flex flex-col overflow-hidden bg-[var(--ink)] md:min-h-svh md:justify-center">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-8 pt-28 md:pb-20">
        <motion.p
          {...rise(0.1)}
          className="mb-6 text-sm font-semibold uppercase tracking-widest text-[var(--gold)]"
        >
          David West III. Atlanta&apos;s local AI expert.
        </motion.p>

        <motion.h1
          initial={{ y: 24 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-6xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          I make AI <span className="text-[var(--gold)]">easy.</span>
        </motion.h1>

        <motion.p
          {...rise(0.4)}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          I teach people how to use AI, and I build AI that does real work inside businesses.
          By day I work in cybersecurity, on AI agent security.
        </motion.p>

        <motion.div {...rise(0.5)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={FREE_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
          >
            Book a free call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
          >
            Get the $999 Assessment
          </Link>
        </motion.div>

        <motion.ul
          {...rise(0.6)}
          aria-label="Find me online"
          className="mt-8 flex max-w-xl flex-wrap gap-2"
        >
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3.5 py-1.5 text-sm text-white backdrop-blur-sm transition-colors hover:border-[var(--gold)]"
              >
                <span className="font-semibold">{social.label}</span>
                <span className="text-white/50 transition-colors group-hover:text-[var(--gold)]">
                  {social.handle}
                </span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="relative aspect-[16/10] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[58%] xl:w-[62%]">
        <Image
          src="/robot/hero-wave.webp"
          alt="The West Robot, a small crowned robot, waving from an Atlanta rooftop at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)] via-transparent to-transparent md:bg-gradient-to-r md:from-[var(--ink)] md:via-[rgba(10,10,10,0.25)] md:via-25% md:to-transparent md:to-55%" />
      </div>
    </section>
  );
}
