"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Prices = Record<string, string>;

type Unlock = { ok: true } | { ok: false; reason?: string; suggestion?: string | null };

type Gate = {
  prices: Prices | null;
  unlock: (email: string, from: string) => Promise<Unlock>;
};

const GateContext = createContext<Gate | null>(null);

/** Pages with gated prices. Each has its own table in /api/prices. */
export type PricePage = "learn" | "brands";

function readRef(): string {
  try {
    return new URLSearchParams(window.location.search).get("ref")?.slice(0, 80) ?? "";
  } catch {
    return "";
  }
}

/**
 * Prices on /learn and /brands sit behind one email. Unlocking any card unlocks
 * every card on that page, and the browser remembers it so a returning visitor
 * isn't asked twice.
 */
export function PriceProvider({ children, page = "learn" }: { children: React.ReactNode; page?: PricePage }) {
  const [prices, setPrices] = useState<Prices | null>(null);
  const storeKey = `westiii-${page}-prices`;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storeKey);
      if (saved) setPrices(JSON.parse(saved));
    } catch {
      // private window or blocked storage: they just enter the email again
    }
  }, [storeKey]);

  async function unlock(email: string, from: string): Promise<Unlock> {
    try {
      const res = await fetch("/api/prices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, from, page, ref: readRef() }),
      });
      if (!res.ok) {
        const err = (await res.json().catch(() => ({}))) as { reason?: string; suggestion?: string | null };
        return { ok: false, reason: err.reason, suggestion: err.suggestion };
      }
      const data = (await res.json()) as { prices?: Prices };
      if (!data.prices) return { ok: false };
      setPrices(data.prices);
      try {
        localStorage.setItem(storeKey, JSON.stringify(data.prices));
      } catch {}
      return { ok: true };
    } catch {
      return { ok: false };
    }
  }

  return <GateContext.Provider value={{ prices, unlock }}>{children}</GateContext.Provider>;
}

const ERROR_TEXT: Record<string, string> = {
  placeholder: "Use the email you actually check and the prices show up right away.",
  disposable: "That looks like a temporary inbox. Use the email you actually check.",
  no_mail: "That email can't receive mail. Check the spelling and try again.",
};

/** One price slot on a card: the price once unlocked, else a "See the price" step. */
export function Price({ id }: { id: string }) {
  const gate = useContext(GateContext);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [problem, setProblem] = useState<{ reason?: string; suggestion?: string | null }>({});

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
    const result = await gate.unlock(email, id);
    if (result.ok) {
      setStatus("idle");
    } else {
      setProblem({ reason: result.reason, suggestion: result.suggestion });
      setStatus("error");
    }
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
          {problem.reason === "typo" && problem.suggestion ? (
            <>
              Did you mean{" "}
              <button
                type="button"
                onClick={() => {
                  setEmail(problem.suggestion ?? "");
                  setStatus("idle");
                }}
                className="font-semibold underline underline-offset-2"
              >
                {problem.suggestion}
              </button>
              ?
            </>
          ) : (
            ERROR_TEXT[problem.reason ?? ""] ?? "That didn't go through. Check the email and try again."
          )}
        </p>
      ) : (
        <p className="text-xs text-[var(--muted)]">No spam. At most one email from me.</p>
      )}
    </form>
  );
}
