import Link from "next/link";
import AnimateIn from "./AnimateIn";

type Offer = {
  number: string;
  title: string;
  price: string;
  body: string;
  href: string;
  muted?: boolean;
};

const offers: Offer[] = [
  {
    number: "01",
    title: "The Hours Back Plan",
    price: "$999",
    body: "For businesses under $2M. A 45-minute call, a written playbook in 48 hours, and a review call. 5+ hours found in 48 hours or you don't pay.",
    href: "/book",
  },
  {
    number: "02",
    title: "Current State Assessment",
    price: "$3,500",
    body: "For companies doing $2M to $50M. Process maps, cost of inaction, architecture, and a priced build plan. $50,000 found or you don't pay.",
    href: "/assessment",
  },
  {
    number: "03",
    title: "Your First AI Employee",
    price: "$2,500 + $750/mo",
    body: "One role, owned end to end. Job description, Company Brain, approval gates, and me managing it. Your assessment credits toward the install.",
    href: "/ai-employees",
  },
  {
    number: "04",
    title: "Agent HQ Install",
    price: "from $15,000",
    body: "The full AI team plus the full Company Brain. Built on your data, connected to your tools, branded to you.",
    href: "/services",
  },
  {
    number: "05",
    title: "Ongoing support",
    price: "$1,500 to $3,000/mo",
    body: "Fractional AI CTO for small businesses. Operating Retainer for companies running an Agent HQ install. Capped at 6.",
    href: "/services",
  },
  {
    number: "06",
    title: "Advisory Block",
    price: "$2,500",
    body: "Four weekly calls, paid upfront. For companies that need direction before they need a build.",
    href: "/services",
    muted: true,
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
          <h2 className="mb-4 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Start with one assessment. Build from the proof.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.16}>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/60">
            Two ways in, depending on your size. Then the hires: one AI employee first,
            the full team when it has proven itself. Everything comes out of what the
            assessment finds.
          </p>
        </AnimateIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers
            .filter((offer) => !offer.muted)
            .map((offer, index) => (
              <AnimateIn key={offer.number} delay={index * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[var(--crimson-light)]">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {offer.number}
                  </p>
                  <h3 className="mb-2 text-xl font-black text-white">{offer.title}</h3>
                  <p className="mb-4 text-sm font-semibold text-[var(--crimson-light)]">
                    {offer.price}
                  </p>
                  <p className="mb-7 flex-1 text-sm leading-relaxed text-white/60">
                    {offer.body}
                  </p>
                  <Link
                    href={offer.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 group-hover:text-[var(--gold)]"
                  >
                    See the offer
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </AnimateIn>
            ))}
        </div>

        {offers
          .filter((offer) => offer.muted)
          .map((offer) => (
            <AnimateIn key={offer.number} delay={0.3}>
              <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-black text-white/80">
                    {offer.title}
                    <span className="ml-3 font-semibold text-[var(--crimson-light)]">
                      {offer.price}
                    </span>
                  </p>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-white/45">
                    {offer.body}
                  </p>
                </div>
                <Link
                  href={offer.href}
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-[var(--gold)]"
                >
                  See the offer
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </AnimateIn>
          ))}
      </div>
    </section>
  );
}
