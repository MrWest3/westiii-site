"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FALLBACK_EMAIL = "StudioWest3@proton.me";

// If the API write fails we do not drop the referral on the floor. Somebody
// spent effort vouching for me; the least the page can do is hand them a
// prefilled email that carries everything they already typed.
function buildFallbackMailto(fields: Record<string, string>) {
  const body = [
    `Referrer: ${fields.referrerName} (${fields.referrerEmail})`,
    "",
    `Who: ${fields.contactName}`,
    `Company: ${fields.contactCompany || "not given"}`,
    `Reach them at: ${fields.contactReach}`,
    "",
    "What is going on with them:",
    fields.context,
    "",
    `Attribution: ${fields.attribution}`,
  ].join("\n");

  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(
    `Referral from ${fields.referrerName}`
  )}&body=${encodeURIComponent(body)}`;
}

const inputClass =
  "w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] transition-colors duration-200 placeholder:text-[var(--muted)] focus:border-[var(--crimson)] focus:outline-none";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-[var(--muted)]";

export default function ReferralForm() {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactReach, setContactReach] = useState("");
  const [context, setContext] = useState("");
  const [attribution, setAttribution] = useState("use-my-name");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referrerName,
          referrerEmail,
          contactName,
          contactCompany,
          contactReach,
          context,
          attribution,
        }),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
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
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-black text-[var(--ink)]">Got it.</h4>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--ink-secondary)]">
            I reach out within one business day and I will tell you what happened either
            way. You do not have to chase me for an update.
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
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="referrerName" className={labelClass}>
                Your name
              </label>
              <input
                id="referrerName"
                type="text"
                required
                value={referrerName}
                onChange={(e) => setReferrerName(e.target.value)}
                placeholder="Jacob Autry"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="referrerEmail" className={labelClass}>
                Your email
              </label>
              <input
                id="referrerEmail"
                type="email"
                required
                value={referrerEmail}
                onChange={(e) => setReferrerEmail(e.target.value)}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contactName" className={labelClass}>
                Who you are sending me
              </label>
              <input
                id="contactName"
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="First and last name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contactCompany" className={labelClass}>
                Their company
              </label>
              <input
                id="contactCompany"
                type="text"
                value={contactCompany}
                onChange={(e) => setContactCompany(e.target.value)}
                placeholder="Company name, and what they do"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contactReach" className={labelClass}>
              How I reach them
            </label>
            <input
              id="contactReach"
              type="text"
              required
              value={contactReach}
              onChange={(e) => setContactReach(e.target.value)}
              placeholder="Email, phone, or LinkedIn"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="context" className={labelClass}>
              What is going on with them
            </label>
            <textarea
              id="context"
              required
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="What did they complain about? What made you think of me? Rough size of the business if you know it."
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <label htmlFor="attribution" className={labelClass}>
              When I reach out
            </label>
            <select
              id="attribution"
              value={attribution}
              onChange={(e) => setAttribution(e.target.value)}
              className={inputClass}
            >
              <option value="use-my-name">Use my name. I already told them about you.</option>
              <option value="use-my-name-no-heads-up">
                Use my name, but they do not know yet. Give me a day first.
              </option>
              <option value="keep-me-out">Keep me out of it.</option>
            </select>
          </div>

          {status === "error" && (
            <div className="rounded-xl border border-[var(--crimson)] bg-white p-5">
              <p className="mb-3 text-sm font-bold text-[var(--ink)]">
                My form is having a moment. Your referral is not lost.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-[var(--ink-secondary)]">
                Hit the button below and it opens an email to me with everything you
                just typed already filled in. Send it and we are square.
              </p>
              <a
                href={buildFallbackMailto({
                  referrerName,
                  referrerEmail,
                  contactName,
                  contactCompany,
                  contactReach,
                  context,
                  attribution,
                })}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition-colors duration-200 hover:border-[var(--crimson)] hover:text-[var(--crimson)]"
              >
                Email it to me instead
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="min-h-12 w-full rounded-xl bg-[var(--crimson)] px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === "loading" ? "Sending..." : "Send the referral"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
