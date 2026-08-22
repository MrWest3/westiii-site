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
    title: "The $999 AI Assessment",
    price: "$999",
    body: "We get on a call, I map how your business actually runs, and you get a written plan in 48 hours. I find you 5+ hours a week or you don't pay.",
    href: "/book",
  },
  {
    number: "02",
    title: "AI Front Desk System",
    price: "Scoped after the assessment",
    body: "Answers every new inquiry in seconds, day or night. Books the ones worth booking and hands you the rest.",
    href: "/ai-employees",
  },
  {
    number: "03",
    title: "Follow-Up Engine",
    price: "Scoped after the assessment",
    body: "Every lead gets worked until they answer. No more leads sitting in an inbox for two days.",
    href: "/ai-employees",
  },
  {
    number: "04",
    title: "Custom AI Employees",
    price: "Scoped after the assessment",
    body: "One role in your business, owned end to end. It has a job description, it knows how you work, and I manage it every week.",
    href: "/ai-employees",
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
            One price. Everything else gets scoped after.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.16}>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/60">
            The assessment tells us where your hours are going and what is worth building. I only build what it proves you need, so I price that part after I know what it is.
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
