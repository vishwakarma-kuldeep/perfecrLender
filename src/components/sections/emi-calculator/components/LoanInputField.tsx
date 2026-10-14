"use client";

import type { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: ReactNode;
  suffix?: ReactNode;
  displayMin?: string;
  displayMax?: string;
  helper?: string;
  onChange: (value: number) => void;
};

export function LoanInputField({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  prefix,
  suffix,
  displayMin,
  displayMax,
  helper,
  onChange,
}: Props) {
  return (
    <div className="rounded-2xl border border-border/80 bg-background/70 p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <label htmlFor={id} className="text-sm font-semibold text-foreground">{label}</label>
          {helper && <p className="mt-1 text-xs text-muted-foreground">{helper}</p>}
        </div>
        <div className="relative w-36 shrink-0 sm:w-40">
          {prefix && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="decimal"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(event) => {
              const raw = event.target.value;
              if (raw === "") return;
              const parsed = Number(raw);
              if (Number.isFinite(parsed)) onChange(Math.min(max, Math.max(min, parsed)));
            }}
            onBlur={(event) => {
              const parsed = Number(event.target.value);
              if (!Number.isFinite(parsed)) onChange(min);
              else onChange(Math.min(max, Math.max(min, parsed)));
            }}
            className={`w-full rounded-xl border border-border bg-card py-2.5 text-right text-sm font-bold tabular-nums text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 ${prefix ? "pl-7" : "pl-3"} ${suffix ? "pr-8" : "pr-3"}`}
          />
          {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground">{suffix}</span>}
        </div>
      </div>
      <input
        aria-label={`${label} slider`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(max, Math.max(min, value))}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      />
      <div className="mt-2 flex items-center justify-between gap-3 text-[11px] font-medium text-muted-foreground">
        <span>{displayMin ?? min}</span>
        <span>{displayMax ?? max}</span>
      </div>
    </div>
  );
}
