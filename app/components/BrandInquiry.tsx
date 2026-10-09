"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FALLBACK_EMAIL = "StudioWest3@proton.me";

type Want = "demo" | "episode" | "creative" | "unsure";

// The offer cards on /brands link to #for-demo, #for-episode or #for-creative.
// Those anchors sit on top of this form, so the page scrolls here with the
// dropdown set.
const HASH_TO_WANT: Record<string, Want> = {
  "#for-demo": "demo",
  "#for-episode": "episode",
  "#for-creative": "creative",
};

const WANT_LABELS: Record<Want, string> = {
  demo: "A demo ad for our accounts",
  episode: "A sponsored episode on your page",
  creative: "A piece made with our AI tool",
  unsure: "Not sure yet",
};

const BUDGET_OPTIONS = [
  { value: "", label: "Pick one" },
  { value: "under-1k", label: "Under $1,000" },
  { value: "1k-2.5k", label: "$1,000 to $2,500" },
  { value: "2.5k-5k", label: "$2,500 to $5,000" },
  { value: "5k+", label: "More than $5,000" },
  { value: "unset", label: "Not set yet" },
];

// Pitch emails and DMs link here with ?ref=something, same as /learn.
function readRef(): string {
  try {
    return new URLSearchParams(window.location.search).get("ref")?.slice(0, 80) ?? "";
  } catch {
    return "";
  }
}

function buildFallbackMailto(fields: Record<string, string>) {
  const body = [
    `Name: ${fields.name} (${fields.email})`,
    `Company: ${fields.company}`,
    `Product: ${fields.product || "not given"}`,
    `Wants: ${WANT_LABELS[fields.want as Want] ?? fields.want}`,
    `Budget: ${fields.budget || "not given"}`,
    "",
    "What it does and who buys it:",
    fields.about,
  ].join("\n");

  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(
    `Brand partnership: ${fields.company}`
  )}&body=${encodeURIComponent(body)}`;
}

const inputClass =
  "min-h-12 w-full rounded border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--ink)] transition-colors duration-200 placeholder:text-[var(--muted)] focus:border-[var(--crimson)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]";

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-widest text-[var(--muted)]";

export default function BrandInquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");
  const [want, setWant] = useState<Want>("unsure");
  const [budget, setBudget] = useState("");
  const [about, setAbout] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const sync = () => {
      const next = HASH_TO_WANT[window.location.hash];
      if (next) setWant(next);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/brand-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, product, want, budget, about, ref: readRef() }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 py-12 text-center"
          role="status"
        >
          <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--crimson)]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-black text-[var(--ink)]">Got it, {name.split(" ")[0]}.</h3>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--ink-secondary)]">
            I reply within one business day. If {company || "your product"} looks like a fit, I&apos;ll ask for a
            login so I can try it before I send concepts.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
        >
          <div>
            <label htmlFor="brand-want" className={labelClass}>
              What you want
            </label>
            <select
              id="brand-want"
              value={want}
              onChange={(e) => setWant(e.target.value as Want)}
              className={inputClass}
            >
              {(Object.keys(WANT_LABELS) as Want[]).map((key) => (
                <option key={key} value={key}>
                  {WANT_LABELS[key]}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="brand-name" className={labelClass}>
                Your name
              </label>
              <input
                id="brand-name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First and last name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="brand-email" className={labelClass}>
                Work email
              </label>
              <input
                id="brand-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="brand-company" className={labelClass}>
                Company
              </label>
              <input
                id="brand-company"
                type="text"
                required
                autoComplete="organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="brand-product" className={labelClass}>
                Product link (optional)
              </label>
              <input
                id="brand-product"
                type="text"
                inputMode="url"
                autoComplete="url"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                placeholder="yourproduct.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="brand-budget" className={labelClass}>
              Budget (optional)
            </label>
            <select
              id="brand-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={inputClass}
            >
              {BUDGET_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="brand-about" className={labelClass}>
              What does it do, and who buys it?
            </label>
            <textarea
              id="brand-about"
              required
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="A line on the product, a line on the customer, and what you want people to do after watching."
              rows={4}
              className={`${inputClass} min-h-32 resize-none`}
            />
          </div>

          {status === "error" && (
            <div className="rounded-xl border border-[var(--crimson)] bg-white p-5" role="alert">
              <p className="mb-3 text-sm font-bold text-[var(--ink)]">
                The form didn&apos;t go through. What you typed is still here.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[var(--ink-secondary)]">
                The button below opens an email to me with all of it filled in. Hit send and I&apos;ll get it.
              </p>
              <a
                href={buildFallbackMailto({ name, email, company, product, want, budget, about })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-[color,border-color,transform] duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]"
              >
                Email it to me instead
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="min-h-12 w-full rounded bg-[var(--crimson)] px-8 py-3.5 text-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[var(--crimson-light)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === "loading" ? "Sending..." : "Send it to David"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
