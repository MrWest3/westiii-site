import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "One public price: the $999 AI Assessment. We map how your business runs, you get a written plan in 48 hours, and I find you 5+ hours a week or you don't pay. What I build after that is scoped on what the assessment finds.",
};

type Offer = {
  number: string;
  name: string;
  price: string;
  who: string;
  included: string[];
  start: string;
  cta: string;
  dark: boolean;
  href?: string;
  muted?: boolean;
};

const offers: Offer[] = [
  {
    number: "01",
    name: "The $999 AI Assessment",
    price: "$999",
    who: "Owner-operated businesses that want to know where AI actually fits before they spend anything on building.",
    included: [
      "A call where I map how your business runs right now",
      "A written plan in 48 hours: your pain points, the exact tools, what they cost, how long setup takes, and the hours you get back",
      "A 30-minute review call to walk you through it",
      "100% money back. 5+ hours a week found in 48 hours, or you don't pay.",
    ],
    start: "Book it. We start on the call.",
    cta: "Book the $999 Assessment",
    dark: false,
  },
  {
    number: "02",
    name: "AI Front Desk System",
    price: "Scoped after the assessment",
    who: "Businesses losing work because nobody gets to the phone, the inbox, or the web form fast enough.",
    included: [
      "Answers new inquiries in seconds, day or night",
      "Asks the questions you would ask, in the way you would ask them",
      "Books the ones worth booking straight onto your calendar",
      "Hands you anything it should not answer on its own",
      "Every conversation logged where you can read it",
    ],
    start: "Assessment first. It tells us what your front door actually needs.",
    cta: "Start With the Assessment",
    dark: true,
  },
  {
    number: "03",
    name: "Follow-Up Engine",
    price: "Scoped after the assessment",
    who: "Businesses with leads going cold in an inbox because nobody has time to chase them.",
    included: [
      "Every new lead gets worked until they answer or tell you no",
      "Text and email, written in your voice",
      "Old leads reopened and worked again",
      "You see who replied and who is worth a call",
    ],
    start: "Assessment first. It finds where your leads are dying.",
    cta: "Start With the Assessment",
    dark: false,
  },
  {
    number: "04",
    name: "Custom AI Employees",
    price: "Scoped after the assessment",
    who: "Owners ready to take one whole job off their plate and see it work before going bigger.",
    included: [
      "One clearly defined role with a written job description",
      "It learns your services, your customers, and how you talk, and that stays in files you own",
      "It asks you before it does anything that matters",
      "A shared chat with you, the employee, and me",
      "I manage it, repair it, and review it with you every month",
      "A weekly report: what it did, the hours it gave back, what that time is worth",
    ],
    start: "Assessment first. It finds the role worth hiring for.",
    cta: "Start With the Assessment",
    dark: false,
  },
  {
    number: "05",
    name: "AI Practice OS",
    price: "Scoped after the assessment",
    who: "Dental and medical practices that want the front desk, intake, and follow-up handled as one system.",
    included: [
      "Every inquiry captured, no matter which way it came in",
      "Intake and handoffs cleaned up so nothing gets retyped",
      "Follow-up that reopens the patients who went quiet",
      "One view of what is coming in and what is falling through",
    ],
    start: "Assessment first. Same starting point as everyone else.",
    cta: "See AI Practice OS",
    href: "/practice-os",
    dark: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">
      <section className="border-b border-[var(--border)] px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Offers
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              Find the hours. <span className="text-[var(--crimson)]">Then build the fix.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              Every engagement starts the same way, with the $999 assessment. It tells us where your hours are going and what is worth building. What comes after depends on what we find, so I scope and price that once I know what it is instead of guessing at it now.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-7 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] sm:text-lg">
              Assessment first. I only build what the assessment proves you need.
            </p>
          </AnimateIn>
        </div>
      </section>

      {offers.map((offer, index) => {
        const textColor = offer.dark ? "text-white" : "text-[var(--ink)]";
        const secondaryColor = offer.dark
          ? "text-white/65"
          : "text-[var(--ink-secondary)]";
        const borderColor = offer.dark ? "border-white/10" : "border-[var(--border)]";

        return (
          <section
            key={offer.number}
            className={`px-6 py-16 md:py-24 ${
              offer.dark
                ? "bg-[var(--ink)]"
                : index % 2 === 0
                  ? "bg-white"
                  : "bg-[var(--surface)]"
            }`}
          >
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <AnimateIn>
                <div>
                  <p className="mb-6 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {offer.number}
                  </p>
                  <h2 className={`text-4xl font-black leading-tight tracking-tight md:text-5xl ${textColor}`}>
                    {offer.name}
                  </h2>
                  <p className="mt-3 text-lg font-bold text-[var(--crimson-light)]">
                    {offer.price}
                  </p>

                  <div className={`mt-9 border-t pt-7 ${borderColor}`}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                      Who it&apos;s for
                    </p>
                    <p className={`max-w-xl text-lg leading-relaxed ${secondaryColor}`}>
                      {offer.who}
                    </p>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <div
                  className={`rounded-2xl border p-6 sm:p-8 md:p-10 ${
                    offer.dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-[var(--border)] bg-white"
                  }`}
                >
                  <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--crimson-light)]">
                    What&apos;s included
                  </p>
                  <ul className="space-y-4">
                    {offer.included.map((item) => (
                      <li key={item} className={`flex gap-3 leading-relaxed ${secondaryColor}`}>
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-8 border-t pt-7 ${borderColor}`}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                      How it starts
                    </p>
                    <p className={`leading-relaxed ${secondaryColor}`}>{offer.start}</p>
                  </div>

                  <Link
                    href={offer.href ?? "/book"}
                    className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded px-6 py-3.5 text-center text-sm font-semibold transition-colors duration-200 sm:w-auto ${
                      offer.muted
                        ? "border border-[var(--ink)] text-[var(--ink)] hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
                        : "bg-[var(--crimson)] text-white hover:bg-[var(--crimson-light)]"
                    }`}
                  >
                    {offer.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </AnimateIn>
            </div>
          </section>
        );
      })}

    </main>
  );
}
