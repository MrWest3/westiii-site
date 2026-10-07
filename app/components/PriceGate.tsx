"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Prices = Record<string, string>;

type Gate = {
  prices: Prices | null;
  unlock: (email: string, from: string) => Promise<boolean>;
};

const GateContext = createContext<Gate | null>(null);
const STORE_KEY = "westiii-learn-prices";

function readRef(): string {
  try {
    return new URLSearchParams(window.location.search).get("ref")?.slice(0, 80) ?? "";
  } catch {
    return "";
  }
}

/**
 * Prices on /learn sit behind one email. Unlocking any card unlocks every card,
 * and the browser remembers it so a returning visitor isn't asked twice.
 */
export function PriceProvider({ children }: { children: React.ReactNode }) {
  const [prices, setPrices] = useState<Prices | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved) setPrices(JSON.parse(saved));
    } catch {
      // private window or blocked storage: they just enter the email again
    }
  }, []);

  async function unlock(email: string, from: string) {
    try {
      const res = await fetch("/api/prices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, from, ref: readRef() }),
      });
      if (!res.ok) return false;
      const data = (await res.json()) as { prices?: Prices };
      if (!data.prices) return false;
      setPrices(data.prices);
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(data.prices));
      } catch {}
      return true;
    } catch {
      return false;
    }
  }

  return <GateContext.Provider value={{ prices, unlock }}>{children}</GateContext.Provider>;
}

/** One price slot on a card: the price once unlocked, else a "See the price" step. */
export function Price({ id }: { id: string }) {
  const gate = useContext(GateContext);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  if (!gate) return null;
  const price = gate.prices?.[id];

  if (price) {
    return <p className="text-sm font-bold text-[var(--crimson)]">{price}</p>;
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="self-start text-sm font-bold text-[var(--crimson)] underline decoration-2 underline-offset-4 transition-colors hover:text-[var(--crimson-light)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]"
      >
        See the price <span aria-hidden="true">→</span>
      </button>
    );
  }

  async function submit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!gate) return;
    setStatus("loading");
    const ok = await gate.unlock(email, id);
    setStatus(ok ? "idle" : "error");
  }

  const inputId = `price-email-${id}`;

  return (
    <form onSubmit={submit} className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-sm text-[var(--ink-secondary)]">
        Your email shows every price on this page.
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="min-h-12 w-full rounded border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--crimson)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-12 shrink-0 rounded bg-[var(--crimson)] px-5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[var(--crimson-light)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)] disabled:opacity-50"
        >
          {status === "loading" ? "One sec..." : "Show prices"}
        </button>
      </div>
      {status === "error" ? (
        <p className="text-sm text-[var(--crimson)]" role="alert">
          That didn&apos;t go through. Check the email and try again.
        </p>
      ) : (
        <p className="text-xs text-[var(--muted)]">No spam. At most one email from me.</p>
      )}
    </form>
  );
}
