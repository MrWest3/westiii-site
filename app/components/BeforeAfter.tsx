"use client";

import { useState } from "react";

export type Comparison = {
  id: string;
  tab: string;
  before: string;
  after: string;
  /** The disclosure label the altered image carries, e.g. "Virtually staged". */
  label: string;
  alt: string;
};

/**
 * Drag-to-compare slider. The range input sits over the whole image, so it
 * works by mouse, touch, and arrow keys with no custom pointer handling.
 */
export default function BeforeAfter({ comparisons }: { comparisons: Comparison[] }) {
  const [activeId, setActiveId] = useState(comparisons[0].id);
  const [position, setPosition] = useState(50);
  const active = comparisons.find((c) => c.id === activeId) ?? comparisons[0];

  return (
    <div>
      <div className="relative aspect-[3/2] w-full select-none overflow-hidden rounded-2xl bg-[var(--ink)] has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-[var(--gold)] has-[input:focus-visible]:ring-offset-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={active.before}
          alt={`Before: ${active.alt}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={active.after}
          alt={`After, ${active.label.toLowerCase()}: ${active.alt}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[var(--ink)] shadow-lg">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M6 4 2 9l4 5M12 4l4 5-4 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded bg-[var(--gold)] px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--ink)]">
          {active.label}
        </span>
        <input
          id="before-after-range"
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Compare before and after: ${active.tab}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Pick a comparison">
        {comparisons.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={c.id === active.id}
            onClick={() => {
              setActiveId(c.id);
              setPosition(50);
            }}
            className={`min-h-10 rounded-full border px-4 text-sm font-semibold transition-colors ${
              c.id === active.id
                ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                : "border-[var(--border)] bg-white text-[var(--ink)] hover:border-[var(--crimson)]"
            }`}
          >
            {c.tab}
          </button>
        ))}
      </div>
    </div>
  );
}
