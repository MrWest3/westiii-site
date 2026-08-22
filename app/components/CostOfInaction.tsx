"use client";

import Link from "next/link";
import { useId, useState } from "react";
import AnimateIn from "./AnimateIn";

const WEEKS_PER_YEAR = 50;

type Variant = "home" | "tier2";

interface CostOfInactionProps {
  variant?: Variant;
}

const defaults: Record<Variant, { hours: number; rate: number; people: number }> = {
  home: { hours: 10, rate: 75, people: 2 },
  tier2: { hours: 20, rate: 125, people: 4 },
};

interface FieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  onChange: (value: number) => void;
}

function Field({ label, value, min, max, step, prefix, onChange }: FieldProps) {
  const id = useId();

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-snug text-[var(--ink)]"
      >
        {label}
      </label>
      <p className="mt-2 text-3xl font-black tabular-nums text-[var(--crimson)]">
        {prefix}
        {value}
      </p>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-[var(--border)] accent-[var(--crimson)]"
      />
      <div className="mt-1 flex justify-between text-xs text-[var(--muted)]">
        <span>
          {prefix}
          {min}
        </span>
        <span>
          {prefix}
          {max}
        </span>
      </div>
    </div>
  );
}

export default function CostOfInaction({ variant = "home" }: CostOfInactionProps) {
  const initial = defaults[variant];
  const [hours, setHours] = useState(initial.hours);
  const [rate, setRate] = useState(initial.rate);
  const [people, setPeople] = useState(initial.people);

  const annual = Math.round((hours * rate * people * WEEKS_PER_YEAR) / 100) * 100;
  const formatted = annual.toLocaleString("en-US");

  return (
    <section
      id="cost-of-inaction"
      className="scroll-mt-24 border-y border-[var(--border)] bg-white px-6 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <AnimateIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
            The cost of doing nothing
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="mb-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl">
            Before you spend a dollar on AI, know what the current way is costing you.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.16}>
          <p className="mb-12 max-w-2xl text-lg leading-relaxed text-[var(--ink-secondary)]">
            Move the sliders. This is the same math I run on every assessment call, using
            your numbers instead of mine.
          </p>
        </AnimateIn>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <AnimateIn>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <Field
                label="Hours a week your team spends on manual, repetitive work"
                value={hours}
                min={1}
                max={60}
                step={1}
                onChange={setHours}
              />
              <Field
                label="What an hour of that time is worth"
                value={rate}
                min={25}
                max={400}
                step={5}
                prefix="$"
                onChange={setRate}
              />
              <Field
                label="People doing it"
                value={people}
                min={1}
                max={25}
                step={1}
                onChange={setPeople}
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 md:p-10">
              <p
                className="text-5xl font-black leading-none tabular-nums text-[var(--crimson)] sm:text-6xl md:text-7xl"
                aria-live="polite"
              >
                ${formatted}
              </p>
              <p className="mt-4 text-lg font-semibold text-[var(--ink)]">
                That is what doing nothing costs you this year.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {hours} hours a week, {people} {people === 1 ? "person" : "people"}, at $
                {rate} an hour, across {WEEKS_PER_YEAR} working weeks.
              </p>

              {variant === "home" && (
                <div className="mt-8 flex min-h-[196px] flex-col justify-start border-t border-[var(--border)] pt-7 sm:min-h-[152px]">
                  <p className="mb-5 leading-relaxed text-[var(--ink-secondary)]">
                    Start with the $999 assessment. I will show you where the biggest piece of that is going and how to get it back.
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)] sm:w-auto"
                  >
                    Book the $999 Assessment
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
