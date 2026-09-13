"use client";

import { useNewsletterSubscription } from "../components/useNewsletterSubscription";

export default function HopeSubscribe() {
  const { email, setEmail, status, handleSubscribe } = useNewsletterSubscription();

  if (status === "success") {
    return (
      <p className="text-base font-semibold text-[var(--crimson)]" role="status">
        You are in. You hear from me when the page changes.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <form className="flex flex-col gap-2 sm:flex-row" onSubmit={handleSubscribe}>
        <label htmlFor="hope-email" className="sr-only">
          Email address
        </label>
        <input
          id="hope-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
          autoComplete="email"
          className="min-h-12 min-w-0 flex-1 rounded border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--gold)] focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center rounded bg-[var(--crimson)] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)] disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send me new entries"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-sm text-[var(--crimson)]" role="alert">
          I could not add you. Try again.
        </p>
      )}
    </div>
  );
}
