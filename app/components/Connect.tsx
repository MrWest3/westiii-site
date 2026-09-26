import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { FREE_CALL_URL } from "../lib/links";

export default function Connect() {
  return (
    <section id="connect" className="relative overflow-hidden bg-[var(--ink)] px-6 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 80% at 20% 30%, rgba(139,26,26,0.32) 0%, transparent 65%)",
        }}
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <AnimateIn>
          <Image
            src="/robot/thumbs-up.webp"
            alt="The West Robot giving a thumbs up"
            width={660}
            height={1030}
            sizes="(min-width: 768px) 220px, 160px"
            className="mx-auto h-auto w-40 md:w-56"
          />
        </AnimateIn>
        <div className="text-center md:text-left">
          <AnimateIn delay={0.08}>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Not sure which one fits? Start with 15 minutes.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 md:mx-0 md:text-lg">
              A free call. You tell me what you&apos;re working on, and I tell you whether
              coaching or a build makes more sense.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <a
                href={FREE_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Book a free call
                <span aria-hidden="true">→</span>
              </a>
              <Link
                href="/book"
                className="inline-flex min-h-12 items-center justify-center rounded border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                Get the $999 Assessment
              </Link>
            </div>
            <p className="mt-5 text-sm text-white/45">
              Or DM{" "}
              <a
                href="https://www.instagram.com/__dw3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline decoration-[var(--crimson)] decoration-2 underline-offset-4 hover:text-[var(--gold)]"
              >
                @__dw3
              </a>{" "}
              on Instagram, or email StudioWest3@proton.me.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
