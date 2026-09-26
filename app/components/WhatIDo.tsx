import Image from "next/image";
import Link from "next/link";
import AnimateIn from "./AnimateIn";

const pictures = [
  {
    title: "Find the hours",
    body: "We walk through how your week really runs and mark the work a machine could take.",
    image: "/robot/magnify.webp",
    imageAlt: "The West Robot studying a desk of clocks and paperwork through a magnifying glass",
  },
  {
    title: "Build the helper",
    body: "I build an AI employee for one job, like answering new leads or sending follow-ups.",
    image: "/robot/frontdesk.webp",
    imageAlt: "The West Robot wearing a headset at a front desk",
  },
  {
    title: "Teach your people",
    body: "Your team learns to run it, so it keeps working after I hand it over.",
    image: "/robot/whiteboard.webp",
    imageAlt: "The West Robot teaching a small team at a whiteboard",
  },
];

export default function WhatIDo() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            What I do
          </p>
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            The whole job, in three pictures.
          </h2>
        </AnimateIn>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {pictures.map((picture, index) => (
            <AnimateIn key={picture.title} delay={index * 0.08}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={picture.image}
                  alt={picture.imageAlt}
                  fill
                  sizes="(min-width: 768px) 360px, 92vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-xl font-black text-[var(--ink)]">{picture.title}</h3>
              <p className="mt-1.5 leading-relaxed text-[var(--ink-secondary)]">{picture.body}</p>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.1}>
          <Link
            href="/ai-employees"
            className="mt-10 inline-flex items-center gap-1 text-sm font-bold text-[var(--crimson)] transition-colors hover:text-[var(--crimson-light)]"
          >
            Meet the AI employees <span aria-hidden="true">→</span>
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
