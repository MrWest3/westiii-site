"use client";

import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { useNewsletterSubscription } from "./useNewsletterSubscription";

/**
 * Set `nextWorkshop` once a date and a ticket link exist. While it is null the
 * card collects a waitlist instead of pointing at a dead checkout.
 */
const nextWorkshop: {
  date: string;
  format: string;
  ticketUrl: string;
} | null = null;

const rungs = [
  {
    number: "01",
    title: "Public workshop",
    price: "Dates announced to the waitlist",
    body: "Four hours in Atlanta, 15 seats, laptop required. Everyone builds one working AI employee for the task they hate most, sets up one recurring job, and leaves with the exact setup in a shared doc.",
    note: "There is a virtual version too: three hours online, same build, smaller room.",
  },
  {
    number: "02",
    title: "Your team, your workflows",
    price: "Half day to two days",
    body: "I come to your office and run it on the work your team actually does. We build around the process the whole room complains about, and you get a written list of what to automate next.",
    note: "Priced on what the workflow is worth to you, not on the hours.",
  },
  {
    number: "03",
    title: "The build",
    price: "Scoped after",
    body: "The process that made your team elbow each other during the workshop becomes the first AI employee. I install it, manage it, and send you the weekly ledger.",
    note: "Every dollar you paid for the workshop comes off the top.",
  },
];

export default function WorkshopLadder() {
  const { email, setEmail, status, handleSubscribe } =
    useNewsletterSubscription("paid-workshop");

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            The paid workshop
          </p>
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            Pay once. Leave with something running.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
            Most AI training is a slideshow. This is a working session. You bring the task
            you dread, you leave with an AI employee doing it, and I stay to make sure it
            keeps working.
          </p>
        </AnimateIn>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {rungs.map((rung, index) => (
            <AnimateIn key={rung.number} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8">
                <p className="mb-7 text-xs font-bold tracking-widest text-[var(--gold)]">
                  {rung.number}
                </p>
                <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                  {rung.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[var(--crimson)]">{rung.price}</p>
                <p className="mt-4 flex-1 leading-relaxed text-[var(--ink-secondary)]">
                  {rung.body}
                </p>
                <p className="mt-5 border-t border-[var(--border)] pt-4 text-sm text-[var(--muted)]">
                  {rung.note}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <AnimateIn>
            <div className="border-l-2 border-[var(--crimson)] pl-5 sm:pl-7">
              <p className="text-lg font-semibold leading-relaxed text-[var(--ink)] md:text-xl">
                The four hours run like this: three real examples from your industry, every
                laptop set up, one employee built together, one built solo while I float,
                one scheduled task each, then a round of &ldquo;what else could this do?&rdquo;
                I write down every answer. The best one becomes your proposal within 48 hours.
              </p>
              <p className="mt-4 text-sm text-[var(--muted)]">
                Workshop seats include a{" "}
                <Link
                  href="/free"
                  className="font-semibold text-[var(--ink)] underline decoration-[var(--crimson)] decoration-2 underline-offset-4 hover:text-[var(--crimson)]"
                >
                  free 15-minute bottleneck call
                </Link>{" "}
                afterward, and what you paid for the seat is credited toward the{" "}
                <Link
                  href="/book"
                  className="font-semibold text-[var(--ink)] underline decoration-[var(--crimson)] decoration-2 underline-offset-4 hover:text-[var(--crimson)]"
                >
                  $999 assessment
                </Link>
                .
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                Next public workshop
              </p>
              {nextWorkshop ? (
                <>
                  <p className="mt-3 text-2xl font-black text-[var(--ink)]">{nextWorkshop.date}</p>
                  <p className="mt-2 leading-relaxed text-[var(--ink-secondary)]">
                    {nextWorkshop.format}
                  </p>
                  <a
                    href={nextWorkshop.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
                  >
                    Get a Seat
                    <span aria-hidden="true">→</span>
                  </a>
                </>
              ) : (
                <>
                  <p className="mt-3 text-2xl font-black text-[var(--ink)]">Date coming.</p>
                  <p className="mt-2 leading-relaxed text-[var(--ink-secondary)]">
                    15 seats. The waitlist gets the date and the ticket link first.
                  </p>
                  {status === "success" ? (
                    <p className="mt-7 font-semibold text-[var(--crimson)]">
                      You&apos;re on the list. You will hear from me before anyone else.
                    </p>
                  ) : (
                    <form onSubmit={handleSubscribe} className="mt-7">
                      <label htmlFor="paid-workshop-email" className="sr-only">
                        Email address
                      </label>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                          id="paid-workshop-email"
                          type="email"
                          required
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="you@yourbusiness.com"
                          className="min-h-12 flex-1 rounded border border-[var(--border)] bg-white px-4 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--crimson)] focus:outline-none"
                        />
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="inline-flex min-h-12 items-center justify-center rounded bg-[var(--crimson)] px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)] disabled:opacity-60"
                        >
                          {status === "loading" ? "Adding..." : "Hold a Seat"}
                        </button>
                      </div>
                      {status === "error" && (
                        <p className="mt-3 text-sm text-[var(--crimson)]">
                          That didn&apos;t go through. Try again in a second.
                        </p>
                      )}
                    </form>
                  )}
                </>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
