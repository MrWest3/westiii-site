"use client";

import Link from "next/link";
import AnimateIn from "./AnimateIn";
import { useNewsletterSubscription } from "./useNewsletterSubscription";

/**
 * Set `nextEvent` once a venue and date are locked. While it is null the block
 * renders a waitlist capture instead of a dead CTA, and no Event schema is
 * emitted (schema for a placeholder date would be a lie to Google).
 */
const nextEvent: {
  date: string;
  isoStart: string;
  isoEnd: string;
  venue: string;
  address: string;
  registrationUrl: string;
} | null = null;

const beats = [
  "Free. Monthly. Atlanta business owners only.",
  "60 minutes of networking, 30 minutes of me teaching what actually works, 30 seconds of what I do.",
  "Everybody who comes gets a free 15-minute session with me to find one bottleneck in their business. No pitch.",
];

export default function AtlantaMeetup() {
  const { email, setEmail, status, handleSubscribe } =
    useNewsletterSubscription("atl-meetup");

  return (
    <section className="border-b border-[var(--border)] bg-[var(--ink)] px-6 py-16 md:py-24">
      {nextEvent && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "AI for Business Atlanta",
              startDate: nextEvent.isoStart,
              endDate: nextEvent.isoEnd,
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: nextEvent.venue,
                address: nextEvent.address,
              },
              organizer: {
                "@type": "Person",
                name: "David West",
                url: "https://westiii.com",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                url: nextEvent.registrationUrl,
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      )}

      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            AI for Business Atlanta
          </p>
        </AnimateIn>
        <AnimateIn delay={0.08}>
          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            A room full of Atlanta owners figuring out AI together.
          </h2>
        </AnimateIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <AnimateIn delay={0.14}>
            <ul className="space-y-4">
              {beats.map((beat) => (
                <li key={beat} className="flex gap-3 leading-relaxed text-white/65">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                    aria-hidden="true"
                  />
                  <span>{beat}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-relaxed text-white/45">
              Can&apos;t make the next one?{" "}
              <Link
                href="/free"
                className="font-semibold text-white/80 underline underline-offset-4 hover:text-[var(--gold)]"
              >
                Take the 15 minutes anyway
              </Link>
              .
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
              {nextEvent ? (
                <>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                    Next session
                  </p>
                  <p className="mt-3 text-2xl font-black text-white">{nextEvent.date}</p>
                  <p className="mt-2 leading-relaxed text-white/60">
                    {nextEvent.venue}
                    <br />
                    {nextEvent.address}
                  </p>
                  <a
                    href={nextEvent.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
                  >
                    Save Your Spot
                    <span aria-hidden="true">→</span>
                  </a>
                </>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
                    Next session
                  </p>
                  <p className="mt-3 text-2xl font-black text-white">
                    Announcing soon.
                  </p>
                  <p className="mt-2 leading-relaxed text-white/60">
                    Drop your email and you will get the date and the address before it goes
                    anywhere else.
                  </p>

                  {status === "success" ? (
                    <p className="mt-7 font-semibold text-[var(--gold)]">
                      You&apos;re on the list. See you there.
                    </p>
                  ) : (
                    <form onSubmit={handleSubscribe} className="mt-7">
                      <label htmlFor="atl-meetup-email" className="sr-only">
                        Email address
                      </label>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <input
                          id="atl-meetup-email"
                          type="email"
                          required
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="you@yourbusiness.com"
                          className="min-h-12 flex-1 rounded border border-white/15 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/35 focus:border-[var(--gold)] focus:outline-none"
                        />
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="inline-flex min-h-12 items-center justify-center rounded bg-[var(--crimson)] px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)] disabled:opacity-60"
                        >
                          {status === "loading" ? "Adding..." : "Notify Me"}
                        </button>
                      </div>
                      {status === "error" && (
                        <p className="mt-3 text-sm text-[var(--crimson-light)]">
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
