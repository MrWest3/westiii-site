"use client";

import Link from "next/link";
import { socials } from "../lib/links";
import { useNewsletterSubscription } from "./useNewsletterSubscription";

const siteLinks = [
  { label: "Learn", href: "/learn" },
  { label: "Services", href: "/services" },
  { label: "The $999 Assessment", href: "/book" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Work", href: "/builds" },
  { label: "Creative", href: "/creative" },
  { label: "Brand partnerships", href: "/brands" },
  { label: "Hope", href: "/hope" },
];

export default function Footer() {
  const { email, setEmail, status, handleSubscribe } =
    useNewsletterSubscription();

  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            Stay Connected
          </p>
          <h2 className="mb-6 text-2xl font-black tracking-tight">
            Find me online.
          </h2>
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-white/10 py-2 text-sm transition-colors hover:border-[var(--crimson)]"
              >
                <span className="text-white/60 transition-colors group-hover:text-white">
                  {social.label}
                </span>
                <span className="font-medium text-white transition-colors group-hover:text-[var(--gold)]">
                  {social.handle}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
            Email list
          </p>
          <h2 className="mb-2 text-2xl font-black tracking-tight">
            Get a note when I publish.
          </h2>
          <p className="mb-5 max-w-xl text-sm leading-relaxed text-white/60">
            AI, tech, what I&apos;m building, and ideas that future-proof your mind. Things move fast and
            it&apos;s hard to keep up. I&apos;ll send you what&apos;s worth knowing.
          </p>

          {status === "success" ? (
            <p className="mb-5 text-sm font-semibold text-[var(--gold)]" role="status">
              You are in. You hear from me when something new is up.
            </p>
          ) : (
            <form className="mb-5 flex flex-col gap-2 sm:flex-row" onSubmit={handleSubscribe}>
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="your@email.com"
                autoComplete="email"
                className="min-h-12 min-w-0 flex-1 rounded border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/50 focus:border-[var(--gold)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="min-h-12 rounded bg-[var(--crimson)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)] active:scale-[0.97] disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Add me"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mb-5 text-sm text-red-300" role="alert">
              I could not add you. Try again.
            </p>
          )}

          <a
            href="mailto:StudioWest3@proton.me"
            className="text-sm font-semibold text-white underline decoration-[var(--crimson)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--gold)]"
          >
            StudioWest3@proton.me
          </a>
        </div>
      </div>

      <nav
        aria-label="Footer"
        className="mx-auto mt-12 flex max-w-6xl flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8"
      >
        {siteLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-white/55 transition-colors hover:text-[var(--gold)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Studio West Creatives LLC.</p>
        <p>David A. West III. Atlanta, Georgia.</p>
      </div>
    </footer>
  );
}
