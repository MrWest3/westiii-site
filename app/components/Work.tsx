import AnimateIn from "./AnimateIn";
import Testimonials from "./Testimonials";
import Image from "next/image";

const selectedWork = [
  {
    src: "/creative/client-01.jpg",
    alt: "DataVault AI brand commercial",
  },
  {
    src: "/creative/client-07.png",
    alt: "STYS AI virtual photo shoot",
  },
  {
    src: "/creative/client-10.png",
    alt: "Revenge Fitness brand campaign",
  },
];

export default function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 bg-[var(--surface)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <AnimateIn>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                Proof
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
                The work gets used. The results get seen.
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.15} direction="right">
            <div className="min-w-52 border-l-2 border-[var(--crimson)] pl-5">
              <p className="text-4xl font-black text-[var(--ink)]">6M+</p>
              <p className="mt-1 max-w-44 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                Content views in 6 months
              </p>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.1}>
          <div className="mb-10 grid grid-cols-3 gap-2 overflow-hidden rounded-2xl bg-[var(--ink)] p-2">
            {selectedWork.map((item) => (
              <div key={item.src} className="relative aspect-square overflow-hidden rounded-xl sm:aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 400px"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </AnimateIn>

        <Testimonials />
      </div>
    </section>
  );
}
