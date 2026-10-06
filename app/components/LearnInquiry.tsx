"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FALLBACK_EMAIL = "StudioWest3@proton.me";

type Interest = "team" | "class" | "talk" | "other";

// The door buttons on /learn (and the /workshops CTA) link to #for-team,
// #for-class or #for-talk. Those anchors sit on top of this form, so the page
// scrolls here and the dropdown arrives already set.
const HASH_TO_INTEREST: Record<string, Interest> = {
  "#for-team": "team",
  "#for-class": "class",
  "#for-talk": "talk",
};

const INTEREST_LABELS: Record<Interest, string> = {
  team: "Train my team",
  class: "Join a live class",
  talk: "Book a talk",
  other: "Something else",
};

const SIZE_OPTIONS = [
  { value: "", label: "Pick one" },
  { value: "just-me", label: "Just me" },
  { value: "2-10", label: "2 to 10 people" },
  { value: "11-50", label: "11 to 50 people" },
  { value: "51-200", label: "51 to 200 people" },
  { value: "200+", label: "More than 200" },
];

// Reels and DMs link here with ?ref=something, same as /hope. We read it at
// submit time so a person who lands, scrolls and fills it out still counts.
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
    `Wants: ${INTEREST_LABELS[fields.interest as Interest] ?? fields.interest}`,
    `Org: ${fields.org || "not given"}`,
    `Team size: ${fields.size || "not given"}`,
    "",
    "The #1 thing I want AI to fix:",
    fields.fix,
  ].join("\n");

  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(
    `${INTEREST_LABELS[fields.interest as Interest] ?? "Inquiry"}: ${fields.name}`
  )}&body=${encodeURIComponent(body)}`;
}

const inputClass =
  "min-h-12 w-full rounded border border-[var(--border)] bg-white px-4 py-3 text-base text-[var(--ink)] transition-colors duration-200 placeholder:text-[var(--muted)] focus:border-[var(--crimson)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-[var(--muted)]";

const SUCCESS_COPY: Record<Interest, string> = {
  team: "I read every one of these myself. Expect an email from me within one business day with two or three times that work for a quick call about your team.",
  class: "You're on the list. When the next class opens you hear about it before it goes public, with the date and a link to grab a seat.",
  talk: "Send me anything else that helps, like the date, the room size and who's in it. I'll reply within one business day.",
  other: "I'll reply within one business day.",
};

export default function LearnInquiry() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<Interest>("team");
  const [org, setOrg] = useState("");
  const [size, setSize] = useState("");
  const [fix, setFix] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const sync = () => {
      const next = HASH_TO_INTEREST[window.location.hash];
      if (next) setInterest(next);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interest, org, size, fix, ref: readRef() }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const isTeam = interest === "team" || interest === "talk";

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
            {SUCCESS_COPY[interest]}
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
            <label htmlFor="learn-interest" className={labelClass}>
              What you want
            </label>
            <select
              id="learn-interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value as Interest)}
              className={inputClass}
            >
              {(Object.keys(INTEREST_LABELS) as Interest[]).map((key) => (
                <option key={key} value={key}>
                  {INTEREST_LABELS[key]}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="learn-name" className={labelClass}>
                Your name
              </label>
              <input
                id="learn-name"
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
              <label htmlFor="learn-email" className={labelClass}>
                Your email
              </label>
              <input
                id="learn-email"
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
              <label htmlFor="learn-org" className={labelClass}>
                {isTeam ? "Company or group" : "Your business (optional)"}
              </label>
              <input
                id="learn-org"
                type="text"
                autoComplete="organization"
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder={isTeam ? "Name, and what you do" : "What you do"}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="learn-size" className={labelClass}>
                {isTeam ? "How many people" : "Team size (optional)"}
              </label>
              <select
                id="learn-size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className={inputClass}
              >
                {SIZE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="learn-fix" className={labelClass}>
              What&apos;s the #1 thing you want AI to fix?
            </label>
            <textarea
              id="learn-fix"
              required
              value={fix}
              onChange={(e) => setFix(e.target.value)}
              placeholder="The task that eats your week, the question your staff keeps asking, the thing you keep putting off."
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
                The button below opens an email to me with all of it filled in. Hit send and
                I&apos;ll get it.
              </p>
              <a
                href={buildFallbackMailto({ name, email, interest, org, size, fix })}
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
