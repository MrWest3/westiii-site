import Link from "next/link";
import AnimateIn from "./AnimateIn";

const offers = [
  {
    number: "01",
    title: "AI Assessment",
    price: "$999",
    body: "The 45-minute audit, a written playbook, and a review call. 5+ hours found or you don't pay.",
  },
  {
    number: "02",
    title: "Builds",
    price: "After the assessment",
    body: "I implement what the assessment finds: automations, knowledge systems, custom workflows.",
  },
  {
    number: "03",
    title: "Agent HQ",
    price: "Built around your business",
    body: "A private AI operating system for your business, built on your data, branded to you.",
  },
  {
    number: "04",
    title: "Fractional AI CTO",
    price: "Ongoing",
    body: "Two working sessions a month plus direct access. Your AI guy on retainer.",
  },
];

export default function Offers() {
  return (
    <section className="bg-[var(--ink)] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            The offers
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Start with one assessment. Build from the proof.
          </h2>
        </AnimateIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => (
            <AnimateIn key={offer.number} delay={index * 0.06}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[var(--crimson-light)]">
                <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                  {offer.number}
                </p>
                <h3 className="mb-2 text-xl font-black text-white">{offer.title}</h3>
                <p className="mb-4 text-sm font-semibold text-[var(--crimson-light)]">
                  {offer.price}
                </p>
                <p className="mb-7 flex-1 text-sm leading-relaxed text-white/60">{offer.body}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 group-hover:text-[var(--gold)]"
                >
                  See the offer
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
