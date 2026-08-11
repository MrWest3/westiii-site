import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: {
    absolute: "What an AI Employee Looks Like in Your Business | David West",
  },
  description:
    "A plain-English walkthrough of AI employees for business owners: what they do, what the first two weeks look like, and what it asks of you.",
  // Deliberately noindexed. This is a private walkthrough link handed to
  // partners who present it to business owners in person. It is not a public
  // funnel entry and it must not compete with /ai-employees in search.
  // NOTE: no dollar figures on this page. Partners present pricing themselves.
  robots: {
    index: false,
    follow: true,
  },
};

const plainTruths = [
  {
    number: "01",
    title: "It owns a job, the way an employee does",
    body: "This is a worker with one written job description. It shows up every day, does the work, and reports back. You never open a chatbot and type prompts.",
  },
  {
    number: "02",
    title: "It knows your business",
    body: "Before it starts, I sit down and learn your services, your prices, your customers, and how you talk. That becomes its training, it keeps learning as you work together, and everything it knows lives in files you own. That is why it sounds like your business instead of a robot.",
  },
  {
    number: "03",
    title: "A person manages it",
    body: "Me. I watch it and fix it when it breaks, and you see everything it does in a weekly report. You are never left alone with software you do not understand.",
  },
];

const engineSteps = [
  {
    time: "2:00 AM",
    title: "It goes looking for your next clients",
    body: "While you sleep, it searches your area for the exact people you want: the businesses, the professionals, the customers who fit what you sell. A fresh, targeted search built around your ideal client, every single night.",
  },
  {
    time: "7:30 AM",
    title: "A short list lands on your phone",
    body: "Twelve names. Who they are, why they fit, and what to say to each one. You reach out as yourself, or reply YES and the introductions go out by email under your name. Nothing is sent without your yes.",
  },
  {
    time: "Same minute",
    title: "New inquiries get answered instantly",
    body: "Someone calls, texts, or fills out your form, and they hear back in under two minutes instead of two days. Speed is the whole game. The business that answers first usually wins the client.",
  },
  {
    time: "All week",
    title: "No lead goes cold",
    body: "Every person who showed interest gets followed up with until they say yes or no. The follow-ups you never had time to send are the clients you never knew you lost.",
  },
  {
    time: "Friday",
    title: "You see exactly what it did",
    body: "A one-page report: the people it found, the inquiries it answered, the hours it saved you, and what that time is worth. No mystery, no take-my-word-for-it.",
  },
];

const hires = [
  {
    number: "01",
    title: "The New Client Finder",
    body: "Searches daily for your ideal clients, builds the list, and drafts the outreach. Like a salesperson who prospects every single day and never asks for commission.",
  },
  {
    number: "02",
    title: "The Front Desk",
    body: "Answers every inquiry in minutes, books the appointment, sends the reminder. Nobody who wants to give you money waits two days for a call back.",
  },
  {
    number: "03",
    title: "The Content Machine",
    body: "Your page has not posted since last September because you are busy running the business. This keeps it alive: real posts about your work, drafted for your approval, on a schedule.",
  },
  {
    number: "04",
    title: "The Inbox Manager",
    body: "Reads the pile so you do not have to. Every morning: the three messages that actually need you, answered drafts waiting for your yes, everything else filed.",
  },
  {
    number: "05",
    title: "The Paperwork Clerk",
    body: "Invoices, permits, contracts, statements: renamed, filed, findable. Ask for any document from last spring and get it in seconds, plus the detail you needed from it.",
  },
  {
    number: "06",
    title: "The Numbers Reporter",
    body: "Your Monday scoreboard builds itself Sunday night. Sales, jobs, money in, money owed, on one page you actually read. You run the week instead of guessing at it.",
  },
];

const guardrails = [
  {
    title: "It asks before anything that matters",
    body: "Sending a message, spending money, touching a customer record: it stops and waits for a human yes. Every time.",
  },
  {
    title: "It only reaches what its job needs",
    body: "The front desk employee cannot see your bank account. Access is scoped to the role, nothing more.",
  },
  {
    title: "You can see everything it did",
    body: "Every action lands in a log and a weekly report you can read. No black box.",
  },
  {
    title: "Security is my day job",
    body: "I am a Solutions Engineer at BeyondTrust, a cybersecurity company. Securing what AI agents can touch inside large enterprises is what I do all week. Your business gets the same treatment.",
  },
];

const plays = [
  {
    number: "01",
    name: "The Prescription",
    tagline: "I tell you exactly what to fix.",
    featured: false,
    includes: [
      "I look at your business and find where the hours and clients are leaking.",
      "You get a written plan: the one thing to fix first, the tool named, the cost attached.",
      "You take it and run with it yourself, or hand it to your own people.",
    ],
    isNot: "I do the diagnosing. The building is on you.",
  },
  {
    number: "02",
    name: "The Install",
    tagline: "I build your AI employee and keep it alive.",
    featured: true,
    includes: [
      "Your employee, built and trained on your business, working inside two weeks.",
      "When it breaks, that is my problem. Monitoring and repairs are included.",
      "The Friday report, every week, showing what it did and what that was worth.",
      "A live group session every week where you can ask anything, plus a community of other owners running the same systems.",
      "Optional: the one-page scoreboard, if you want the picture as well as the texts.",
    ],
    isNot: "This is not a private consultant on call. Questions go to the weekly session and the community, and the system itself is my responsibility around the clock.",
  },
  {
    number: "03",
    name: "The Tech Guy On Your Team",
    tagline: "For owners who want me personally.",
    featured: false,
    includes: [
      "Two private one-hour calls with me every month.",
      "Ask me anything, any day, and get an answer within 12 hours.",
      "I learn your business deeply and bring you what is next before you ask.",
    ],
    isNot: "This is not for everyone. It sits on top of the Install, and I only hold a handful of these seats at a time. When they are full, there is a waitlist.",
  },
];

const asksOfYou = [
  {
    label: "Every morning",
    body: "Read one message. Reply YES or NO. Under ten minutes.",
  },
  {
    label: "Every Friday",
    body: "Read one page: what it did, what it saved you, what it booked.",
  },
  {
    label: "Once a week, optional",
    body: "Join the live group session if you have a question or want to see what other owners are doing.",
  },
  {
    label: "Never",
    body: "Learn new software. Write a prompt. Dig through menus and settings. If you can text a person, you can run this.",
  },
];

const isNotList = [
  "A chatbot widget on your website.",
  "A course you have to study before anything works.",
  "Software you get handed and left alone with.",
  "A magic machine that runs unsupervised. Anything that matters waits for your yes.",
  "An hourly contractor. The work is flat-priced and scoped before it starts.",
];

const installDays = [
  {
    time: "Day 0",
    title: "The free look, 15 minutes",
    body: "A phone call. I ask questions about your business, then tell you the one thing AI can fix first and exactly what it would take. You get that answer whether or not we go further.",
  },
  {
    time: "Day 1",
    title: "The sit-down, about an hour",
    body: "We talk. Your services, your prices, your customers, how you like to speak to people. That conversation becomes your employee's training. No homework, no forms to fill out.",
  },
  {
    time: "Days 2 to 10",
    title: "The build. You do nothing.",
    body: "I build your employee, train it on your business, register its phone number, and test it against real scenarios until it behaves like someone who works for you.",
  },
  {
    time: "Day 11",
    title: "Your first good morning",
    body: "The first text arrives on your phone. You read it, you reply YES, and your new employee gets to work. You watch everything it does from day one.",
  },
  {
    time: "Day 14",
    title: "Your first Friday report",
    body: "Two weeks in, you are holding a one-page report of real work it did for your business. From here it runs every week, and you judge it by that page, in numbers.",
  },
];

function Bubble({
  from,
  children,
  time,
}: {
  from: "them" | "you";
  children: React.ReactNode;
  time?: string;
}) {
  if (from === "you") {
    return (
      <div className="flex flex-col items-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-[var(--crimson)] px-3.5 py-2.5 text-xs leading-relaxed text-white">
          {children}
        </div>
        {time ? <p className="mt-1 text-[10px] text-[var(--muted)]">{time}</p> : null}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start">
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-[var(--border)] bg-white px-3.5 py-2.5 text-xs leading-relaxed text-[var(--ink)]">
        {children}
      </div>
      {time ? <p className="mt-1 text-[10px] text-[var(--muted)]">{time}</p> : null}
    </div>
  );
}

function PhoneFrame({
  header,
  caption,
  children,
}: {
  header: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="w-full max-w-[300px] overflow-hidden rounded-[2rem] border-[6px] border-[var(--ink)] bg-[var(--surface)] shadow-xl">
        <div className="border-b border-[var(--border)] bg-white px-4 py-3 text-center">
          <p className="text-xs font-black text-[var(--ink)]">{header}</p>
        </div>
        <div className="space-y-2.5 px-3 py-4">{children}</div>
      </div>
      <p className="mt-4 max-w-[300px] text-center text-xs leading-relaxed text-[var(--muted)]">
        {caption}
      </p>
    </div>
  );
}

export default function PitchPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="border-b border-[var(--border)] px-6 py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              A walkthrough from David West · Studio West Creatives
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              You keep hearing AI.{" "}
              <span className="text-[var(--crimson)]">
                Here is what it looks like working for you.
              </span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)] sm:text-xl">
              No jargon, no hype. This page walks through what an AI employee actually
              does inside a business like yours: finding new clients, answering every
              inquiry fast, and handling the desk work you take home at night.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-7 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] sm:text-lg">
              Built and managed by a person you can call. Every system I install for
              clients runs in my own business first.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Plain English
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              An AI employee is a worker, and it works like one.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Think of the tasks you could train a sharp assistant to do in a week or
              two. The repeated ones. Those tasks can now be owned by an AI employee
              that works every day, around the clock, for a fraction of a salary.
            </p>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-3">
            {plainTruths.map((item, index) => (
              <AnimateIn key={item.number} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 md:p-8">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {item.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* The New Client Engine */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              A real example
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              The New Client Engine.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Take a wellness studio in New York. Great service, loyal regulars, and one
              problem: not enough new clients walking in. Here is the system I would
              install, hour by hour.
            </p>
          </AnimateIn>

          <div className="mx-auto max-w-3xl">
            <ol className="relative border-l-2 border-[var(--border)] pl-8 sm:pl-10">
              {engineSteps.map((step, index) => (
                <li key={step.time} className="relative pb-10 last:pb-0">
                  <AnimateIn delay={index * 0.06}>
                    <span
                      aria-hidden="true"
                      className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--crimson)] bg-white sm:-left-[49px]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                    </span>
                    <p className="mb-2 inline-block rounded bg-[var(--surface)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--crimson)]">
                      {step.time}
                    </p>
                    <h3 className="mb-2 text-xl font-black leading-snug text-[var(--ink)]">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-[var(--ink-secondary)]">
                      {step.body}
                    </p>
                  </AnimateIn>
                </li>
              ))}
            </ol>
          </div>

          <AnimateIn delay={0.3}>
            <p className="mx-auto mt-12 max-w-3xl border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
              That is one employee doing the job of a prospector and a receptionist,
              seven days a week. For most businesses, one or two new clients a month
              covers the entire cost.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* On your phone */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              No new apps
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              It lives in the apps you already use.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Nothing to install, nothing to learn. Your employee messages you, and you
              message it back, in whichever app you already live in. If you can text a
              person, you can run this. Here is what a normal week looks like on your
              phone.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mb-14 flex flex-wrap gap-2">
              {["Text message", "WhatsApp", "Telegram", "Slack", "Discord", "Buzz"].map(
                (channel) => (
                  <span
                    key={channel}
                    className="rounded-full border border-[var(--border)] bg-white px-4 py-1.5 text-xs font-semibold text-[var(--ink-secondary)]"
                  >
                    {channel}
                  </span>
                )
              )}
            </div>
          </AnimateIn>

          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            <AnimateIn>
              <PhoneFrame
                header="Your AI Employee"
                caption="The 7:30 morning list. You reply once and the introductions go out under your name."
              >
                <Bubble from="them" time="7:31 AM">
                  Morning. I found 12 strong fits overnight. Top three: Harbor Point
                  CrossFit (owner Mike), Bayside Realty (23 staff), Lakeview Nurses
                  Association. Want the intro drafts?
                </Bubble>
                <Bubble from="you" time="7:44 AM">
                  YES
                </Bubble>
                <Bubble from="them" time="7:45 AM">
                  Sent to your inbox. Three drafts, written in your voice. Send when
                  ready.
                </Bubble>
              </PhoneFrame>
            </AnimateIn>

            <AnimateIn delay={0.08}>
              <PhoneFrame
                header="Your Business Line"
                caption="A new inquiry, answered in about a minute and booked in four. This is speed to lead."
              >
                <Bubble from="them" time="2:14 PM">
                  Hi, I saw your page. Do you take walk-ins this week?
                </Bubble>
                <Bubble from="you" time="2:15 PM">
                  Hi! We sure do. Tomorrow has 10:00 AM or 2:30 PM open. Want me to hold
                  one for you?
                </Bubble>
                <Bubble from="them" time="2:17 PM">
                  2:30 works
                </Bubble>
                <Bubble from="you" time="2:18 PM">
                  Booked. A confirmation text is on the way. See you tomorrow!
                </Bubble>
              </PhoneFrame>
            </AnimateIn>

            <AnimateIn delay={0.16}>
              <PhoneFrame
                header="Your AI Employee"
                caption="The Friday report. Real numbers from its week of work, on one page."
              >
                <Bubble from="them" time="Friday, 5:00 PM">
                  Your week: 61 prospects found. 9 inquiries answered, 84 seconds
                  average. 4 consultations booked. Around 6 hours of desk work handled
                  for you. Full report is in your inbox.
                </Bubble>
                <Bubble from="you" time="5:12 PM">
                  Good week.
                </Bubble>
              </PhoneFrame>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.24}>
            <p className="mx-auto mt-12 max-w-3xl border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)]">
              Two details worth knowing. Your customers always get plain text messages
              from your business line, so nothing changes on their side. And if you want
              your team and your employee working in one room, there is Buzz, Block&apos;s
              new workspace built for people and AI agents working together. We set you
              up in whichever room fits.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.28}>
            <p className="mt-10 text-center text-xs uppercase tracking-widest text-[var(--muted)]">
              Illustrative conversations. Your employee runs on your real numbers.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* The scoreboard, optional */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Prefer to see it?
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              One page. Your whole business.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              The messages run the day to day. If you also want the picture, there is an
              optional scoreboard: one page, one login, live. Your prospects, your
              bookings, your follow-ups, and the hours coming back to you, all in one
              place. Some owners never open it because the texts carry everything.
              Others keep it open on the counter all day. Your call.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-xl">
                <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
                  </span>
                  <span className="mx-auto rounded bg-white px-4 py-1 text-[11px] font-medium text-[var(--muted)]">
                    scoreboard.yourbusiness.com
                  </span>
                </div>
                <div className="p-5 md:p-7">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-black text-[var(--ink)]">
                      Riverside Wellness · Week of Aug 3
                    </p>
                    <p className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
                      Live
                    </p>
                  </div>

                  <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {[
                      { label: "Prospects found", value: "61", sub: "this week" },
                      { label: "Inquiries answered", value: "9", sub: "84 sec average" },
                      { label: "Consultations booked", value: "4", sub: "up 2 from last week" },
                      { label: "Hours returned", value: "6.2", sub: "about one workday" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                      >
                        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[var(--gold)]">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-black tabular-nums text-[var(--ink)]">
                          {stat.value}
                        </p>
                        <p className="text-[11px] text-[var(--muted)]">{stat.sub}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-[var(--border)] p-4">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
                        Consultations booked · last 4 weeks
                      </p>
                      <div className="flex h-24 items-end gap-3 px-1">
                        {[
                          { week: "Jul 13", h: "h-8" },
                          { week: "Jul 20", h: "h-12" },
                          { week: "Jul 27", h: "h-12" },
                          { week: "Aug 3", h: "h-20", label: "4" },
                        ].map((bar) => (
                          <div key={bar.week} className="flex flex-1 flex-col items-center justify-end gap-1 self-stretch">
                            {bar.label ? (
                              <p className="text-[11px] font-bold tabular-nums text-[var(--ink)]">
                                {bar.label}
                              </p>
                            ) : null}
                            <div className={`w-full max-w-10 rounded-t bg-[var(--crimson)] ${bar.h}`} />
                            <p className="text-[10px] text-[var(--muted)]">{bar.week}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-[var(--border)] p-4">
                      <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[var(--muted)]">
                        This week&apos;s leads
                      </p>
                      <ul className="space-y-2.5">
                        {[
                          { name: "Bayside Realty", stage: "Booked", strong: true },
                          { name: "Harbor Point CrossFit", stage: "Contacted", strong: false },
                          { name: "Lakeview Nurses Assn", stage: "New", strong: false },
                        ].map((row) => (
                          <li
                            key={row.name}
                            className="flex items-center justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2.5"
                          >
                            <p className="text-xs font-semibold text-[var(--ink)]">{row.name}</p>
                            <p
                              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${
                                row.strong
                                  ? "border-[var(--crimson)] text-[var(--crimson)]"
                                  : "border-[var(--border)] text-[var(--muted)]"
                              }`}
                            >
                              {row.stage}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs leading-relaxed text-[var(--muted)]">
                Illustrative scoreboard. Yours is built around your business and runs on
                your real numbers.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* The roster */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              The roster
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Six employees I install most.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Every business starts with one. The right one is whichever job is eating
              the most of your time or costing you the most clients.
            </p>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hires.map((hire, index) => (
              <AnimateIn key={hire.number} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-6 transition-colors duration-300 hover:border-[var(--crimson)] md:p-8">
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {hire.number}
                  </p>
                  <h3 className="mb-3 text-lg font-black leading-snug text-[var(--ink)]">
                    {hire.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{hire.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guardrails */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              The part most people never ask about
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Why it will not run wild on you.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-white/65">
              The fear behind every AI conversation is control. Fair. So control is built
              in from the first day.
            </p>
          </AnimateIn>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guardrails.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-[var(--crimson-light)]">
                  <h3 className="mb-3 text-lg font-black leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Three ways to work with me */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              What this is, and what it is not
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Three ways to work with me.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              Every business fits one of these. Each comes with a clear line around what
              is included, so there are no surprises in either direction.
            </p>
          </AnimateIn>

          <div className="grid gap-4 md:grid-cols-3">
            {plays.map((play, index) => (
              <AnimateIn key={play.number} delay={index * 0.08}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-6 md:p-8 ${
                    play.featured ? "border-[var(--crimson)]" : "border-[var(--border)]"
                  }`}
                >
                  <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                    {play.number}
                  </p>
                  <h3 className="mb-1 text-xl font-black text-[var(--ink)]">{play.name}</h3>
                  <p className="mb-6 text-sm font-semibold text-[var(--crimson)]">
                    {play.tagline}
                  </p>
                  <ul className="mb-6 space-y-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
                    {play.includes.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-0.5 font-bold text-[var(--gold)]">
                          ·
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto border-t border-[var(--border)] pt-4 text-xs leading-relaxed text-[var(--muted)]">
                    <span className="font-bold uppercase tracking-widest">
                      The honest line:{" "}
                    </span>
                    {play.isNot}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.26}>
            <p className="mt-8 border-l-2 border-[var(--crimson)] pl-5 text-base font-semibold text-[var(--ink)] md:text-lg">
              How pricing works: one flat number for the install, one flat number a
              month after that. It is sized to your business and what a new client is
              worth to you, and the person who showed you this page has your numbers.
              Nothing hourly, nothing open-ended.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What it asks of you */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <AnimateIn>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                  Workload, honestly
                </p>
              </AnimateIn>
              <AnimateIn delay={0.08}>
                <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
                  What it asks of you.
                </h2>
              </AnimateIn>
              <div className="space-y-5">
                {asksOfYou.map((item, index) => (
                  <AnimateIn key={item.label} delay={index * 0.06}>
                    <div className="rounded-2xl border border-[var(--border)] bg-white p-5">
                      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[var(--gold)]">
                        {item.label}
                      </p>
                      <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">
                        {item.body}
                      </p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>

            <div>
              <AnimateIn delay={0.1}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
                  So there are no question marks
                </p>
              </AnimateIn>
              <AnimateIn delay={0.16}>
                <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
                  What this is not.
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.22}>
                <ul className="space-y-4">
                  {isNotList.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 rounded-2xl border border-[var(--border)] bg-white p-5 text-sm leading-relaxed text-[var(--ink-secondary)]"
                    >
                      <span aria-hidden="true" className="font-black text-[var(--crimson)]">
                        ✕
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* The first 14 days */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              The process, start to finish
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
              Your first 14 days.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.16}>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
              It starts with the person who showed you this page. Tell them what is
              eating your time, and they set up the free look. From there, this is the
              whole process.
            </p>
          </AnimateIn>

          <div className="mx-auto max-w-3xl">
            <ol className="relative border-l-2 border-[var(--border)] pl-8 sm:pl-10">
              {installDays.map((step, index) => (
                <li key={step.time} className="relative pb-10 last:pb-0">
                  <AnimateIn delay={index * 0.06}>
                    <span
                      aria-hidden="true"
                      className="absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--crimson)] bg-white sm:-left-[49px]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--crimson)]" />
                    </span>
                    <p className="mb-2 inline-block rounded bg-[var(--surface)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--crimson)]">
                      {step.time}
                    </p>
                    <h3 className="mb-2 text-xl font-black leading-snug text-[var(--ink)]">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-[var(--ink-secondary)]">
                      {step.body}
                    </p>
                  </AnimateIn>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--ink)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimateIn>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
              Everyone sees the word AI every day. Almost nobody has it working for
              them yet.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              The person who showed you this page can set up your free 15-minute look.
              You will leave that conversation knowing the one thing AI can fix in your
              business, whether or not we ever work together.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.18}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/agent"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Talk to an AI employee right now
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/builds"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                See systems I have built
              </Link>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.24}>
            <p className="mt-10 text-xs uppercase tracking-widest text-white/40">
              Prepared August 2026 · Studio West Creatives · westiii.com
            </p>
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
