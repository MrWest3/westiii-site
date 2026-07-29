import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";
import ReferralForm from "../components/ReferralForm";

export const metadata: Metadata = {
  title: {
    absolute: "Refer Someone | David West",
  },
  description:
    "Send me a business owner who is drowning in manual work. If they hire me, you keep 20% of everything they pay for twelve months.",
  // Deliberately noindexed. This is a private link handed to people who have
  // already offered to send work. It is not a public funnel entry and it must
  // not compete with the paid assessment pages in search.
  robots: {
    index: false,
    follow: true,
  },
};

const listenFor = [
  "“We are doing all of that by hand right now.”",
  "“My team enters the same information into three different systems.”",
  "“I am the only one who knows how that works.”",
  "“We tried ChatGPT and nobody uses it.”",
  "“I cannot hire fast enough to keep up.”",
  "“Leads sit for two days before anyone calls them.”",
  "“I spend my whole Sunday on paperwork.”",
  "“I have no idea what AI is supposed to do for a business like mine.”",
];

const notForMe = [
  "Pre-revenue founders looking for a technical cofounder.",
  "Anyone who wants a chatbot on their website and nothing else.",
  "Companies shopping three quotes for the cheapest number.",
  "People who want me to teach them AI. Send those to the workshops instead.",
];

const afterSteps = [
  {
    number: "01",
    title: "I reach out within one business day",
    body: "Warm, short, and I name you. No sales sequence, no drip, no automated follow-up hammering their inbox for a month.",
  },
  {
    number: "02",
    title: "Two 15-minute calls, free",
    body: "Day one I ask questions. Day two I come back with one thing in their business AI can fix, with the tool named and the cost attached. They get real value whether or not they ever pay me.",
  },
  {
    number: "03",
    title: "They decide, with no pressure from me",
    body: "Some take the fix and run with it themselves. That is a fine outcome. Some want me to keep going, and those become clients.",
  },
  {
    number: "04",
    title: "I tell you what happened",
    body: "Either way, you hear back from me. You never have to ask how it went with the person you vouched for.",
  },
];

const ladder = [
  {
    offer: "AI Assessment",
    who: "Under $2M in revenue",
    price: "$999",
    cut: "$200",
  },
  {
    offer: "Current State Assessment",
    who: "$2M to $50M in revenue",
    price: "$3,500",
    cut: "$700",
  },
  {
    offer: "Agent HQ install",
    who: "The build the assessment calls for",
    price: "$15,000 to $40,000",
    cut: "$3,000 to $8,000",
  },
  {
    offer: "Operating retainer",
    who: "Keeps the system adopted and growing",
    price: "$3,000 / month",
    cut: "$600 / month",
  },
];

const finePrint = [
  {
    q: "When do I actually get paid?",
    a: "On money collected, not money quoted. When a payment from your referral clears, I send your share inside five business days. Your pick of Zelle, Venmo, or check.",
  },
  {
    q: "Why 20 percent, and does it stay there?",
    a: "Twenty percent is the founding rate. Send me your first name before October 1, 2026 and you keep 20 percent for as long as you send me people. After that date the rate is 10 percent for new referrers. I am early, referrals are the only channel I run, and the people who move first should get paid the most.",
  },
  {
    q: "How long does it run on each client?",
    a: "Twelve months from their first dollar. Most companies climb the ladder inside that window, which is why the retainer line matters. One referral that assesses, builds, and stays on retainer is around $12,000 to you.",
  },
  {
    q: "What if I send someone you already know?",
    a: "I will tell you that within a day, before you spend any effort on it. If they are already an active conversation in my pipeline, the fee does not apply. First name in wins, and I keep an honest record.",
  },
  {
    q: "Is there a limit on how many I can send?",
    a: "No. Send one a year or one a week. The 20% is the same on all of them.",
  },
  {
    q: "What if taking a referral fee is a compliance problem for me?",
    a: "Say so on the form and we do it another way. Licensed professionals often cannot accept outside compensation, and I would rather know that upfront than put you in a bad spot. I trade value instead: introductions from my network, or I build the same kind of system for your own business at no cost.",
  },
  {
    q: "Do I have to sell anything?",
    a: "No. Do not pitch me, do not quote prices, do not explain what I build. Send me the name and what they complained about. I take it from there.",
  },
];

export default function ReferralPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="border-b border-[var(--border)] px-6 py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              For the people who keep offering to send me work
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              Send me one business owner. Keep{" "}
              <span className="text-[var(--crimson)]">20%</span> of what they pay
              me.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              I find where a company is bleeding time and money into manual work, then I
              build the AI systems that stop it. If someone you know is describing that
              problem out loud, send them over. Twenty percent of everything they pay me
              for twelve months comes back to you.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-7 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] sm:text-lg">
              You risk nothing but your name, and protecting your name is the whole job on
              my end.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.26}>
            <div className="mt-9">
              <a
                href="#send"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Send me a name
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* The repeatable line */}
      <section className="border-b border-[var(--border)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Say it like this
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mb-10 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              What I do, in one sentence you can repeat.
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.14}>
            <blockquote className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-9">
              <p className="text-xl font-semibold leading-snug text-[var(--ink)] md:text-2xl">
                &ldquo;I know a guy in Atlanta who goes into businesses, finds the work
                that is still being done by hand, and builds AI systems that take it off
                their plate. He does a paid assessment first so you know exactly what it
                is worth before you spend anything on building.&rdquo;
              </p>
            </blockquote>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-8 leading-relaxed text-[var(--ink-secondary)]">
              That is the whole pitch. You do not need to know what an agent is, you do
              not need to defend the price, and you do not need to answer technical
              questions. If they push, say &ldquo;the first two calls are free, just
              talk to him.&rdquo; That sentence closes more than anything I would say
              about myself.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What to listen for */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              The trigger
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mb-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              What to listen for.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="mb-12 max-w-2xl leading-relaxed text-[var(--ink-secondary)]">
              You are not hunting. You are listening. These are the exact things people
              say right before they become a client. When you hear one, that is your cue.
            </p>
          </AnimateIn>

          <div className="grid gap-3 sm:grid-cols-2">
            {listenFor.map((line, index) => (
              <AnimateIn key={line} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-5 md:p-6">
                  <p className="leading-relaxed text-[var(--ink)]">{line}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.3}>
            <div className="mt-10 rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                The profile underneath all of it
              </p>
              <p className="leading-relaxed text-[var(--ink-secondary)]">
                Owner-operated company, roughly $500k to $50M in revenue, with employees
                and a real operation behind it. Service businesses, professional
                practices, agencies, contractors, clinics, brokerages. Atlanta is
                easiest because I will drive to them, and I work remote when the fit is
                right.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Who not to send */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <AnimateIn>
            <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Who not to send.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <p className="mb-10 max-w-2xl leading-relaxed text-[var(--ink-secondary)]">
              This list protects you more than it protects me. Sending the wrong person
              costs you a favor and gets them a call that goes nowhere.
            </p>
          </AnimateIn>

          <ul className="space-y-4">
            {notForMe.map((item, index) => (
              <AnimateIn key={item} delay={index * 0.05}>
                <li className="flex gap-3 leading-relaxed text-[var(--muted)]">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--border)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              </AnimateIn>
            ))}
          </ul>

          <AnimateIn delay={0.3}>
            <p className="mt-9 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
              When you are unsure, send them anyway and let me sort it out. I would
              rather turn one down than miss one.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What happens after */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Your name is on this
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mb-12 max-w-2xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              What happens after you send them.
            </h2>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {afterSteps.map((step, index) => (
              <AnimateIn key={step.number} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[var(--crimson-light)]">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {step.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{step.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.35}>
            <p className="mt-10 max-w-3xl border-l-2 border-[var(--gold)] pl-5 text-xl font-semibold leading-snug text-white md:text-2xl">
              The worst thing I could do to you is make you look bad to someone who
              trusts you. I run every referral like that is the only thing at stake.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* The money */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              The split
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mb-6 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Twenty percent of everything they pay.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="mb-12 max-w-2xl leading-relaxed text-[var(--ink-secondary)]">
              Twenty percent of the first invoice, and twenty percent of every dollar
              after it for twelve months, across every level that client buys. This is
              the founding rate, locked for anyone who sends me a name before October 1,
              2026.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.16}>
            <div className="overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                      What they buy
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                      Who it is for
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                      They pay
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                      You get
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ladder.map((row) => (
                    <tr
                      key={row.offer}
                      className="border-b border-[var(--border)] last:border-b-0"
                    >
                      <td className="px-6 py-5 font-black text-[var(--ink)]">
                        {row.offer}
                      </td>
                      <td className="px-6 py-5 text-sm text-[var(--muted)]">{row.who}</td>
                      <td className="px-6 py-5 text-sm text-[var(--ink-secondary)]">
                        {row.price}
                      </td>
                      <td className="px-6 py-5 font-black text-[var(--crimson)]">
                        {row.cut}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.24}>
            <p className="mt-8 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
              One company that assesses, builds, and stays on retainer is about $12,000
              back to you from a single introduction.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Fine print */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <h2 className="mb-10 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Straight answers.
            </h2>
          </AnimateIn>

          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {finePrint.map((item, index) => (
              <AnimateIn key={item.q} delay={index * 0.04}>
                <div className="py-6">
                  <p className="mb-3 text-lg font-black text-[var(--ink)]">{item.q}</p>
                  <p className="leading-relaxed text-[var(--ink-secondary)]">{item.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="send" className="scroll-mt-24 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Hand it off
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Send me a name.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="mb-10 leading-relaxed text-[var(--ink-secondary)]">
              Takes about ninety seconds. The more you tell me about what they
              complained about, the better the first call goes for them.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.16}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
              <ReferralForm />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Final */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Thank you for thinking of me.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="mt-6 leading-relaxed text-white/60">
              Referrals are how this business actually grows. I do not run ads and I do
              not cold call, so the people who send me work are the people who build
              this thing with me. I take that seriously and I pay for it.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <p className="mt-8 text-sm text-white/50">
              Want to see what they would actually be buying?{" "}
              <Link
                href="/services"
                className="font-semibold text-white underline underline-offset-4"
              >
                The full offer ladder
              </Link>{" "}
              is here, and{" "}
              <Link
                href="/builds"
                className="font-semibold text-white underline underline-offset-4"
              >
                the work
              </Link>{" "}
              is here.
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
