"use client";

import Link from "next/link";
import { useNewsletterSubscription } from "./useNewsletterSubscription";

const siteLinks = [
  { label: "AI Employees", href: "/ai-employees" },
  { label: "Offers", href: "/services" },
  { label: "Hours Back Plan", href: "/book" },
  { label: "Current State Assessment", href: "/assessment" },
  { label: "Creative", href: "/creative" },
  { label: "Workshops", href: "/workshops" },
  { label: "Atlanta", href: "/atlanta" },
  { label: "Builds", href: "/builds" },
  { label: "Speaking", href: "/speaking" },
];

const socials = [
  {
    label: "YouTube",
    handle: "@WestTech3",
    href: "https://www.youtube.com/@WestTech3",
  },
  {
    label: "Instagram",
    handle: "@__dw3",
    href: "https://www.instagram.com/__dw3/",
  },
  {
    label: "X",
    handle: "@___DW3",
    href: "https://x.com/___DW3",
  },
  {
    label: "TikTok",
    handle: "@___dw3",
    href: "https://www.tiktok.com/@___dw3",
  },
  {
    label: "LinkedIn",
    handle: "David West III",
    href: "https://www.linkedin.com/in/david-west-iii-289ba7148",
  },
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
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            The West Report
          </p>
          <h2 className="mb-2 text-2xl font-black tracking-tight">
            Get the next issue.
          </h2>
          <p className="mb-5 max-w-xl text-sm leading-relaxed text-white/60">
            AI, tech, and what I am building. Short notes you can use.
          </p>

          {status === "success" ? (
            <p className="mb-5 text-sm font-semibold text-[var(--gold)]" role="status">
              You are in. Check your inbox soon.
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
                className="min-w-0 flex-1 rounded border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[var(--gold)] focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded bg-[var(--crimson)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--crimson-light)] disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Subscribe"}
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

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Studio West Creatives LLC.</p>
        <p>David A. West III. Atlanta, Georgia.</p>
      </div>
    </footer>
  );
}
