"use client";

import { motion } from "motion/react";
import type { ComponentType } from "react";
import { ArrowDownRight, ArrowUpRight, Banknote, CircleDollarSign, PiggyBank } from "lucide-react";
import type { EmiCalculationResult } from "@/lib/emi";
import { formatCurrency } from "./format";

function Metric({ label, value, icon: Icon, tone = "default" }: { label: string; value: string; icon: ComponentType<{ className?: string }>; tone?: "default" | "cyan" }) {
  return (
    <div className="rounded-2xl border border-border/80 bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium text-muted-foreground sm:text-sm">{label}</p>
        <span className={`flex h-8 w-8 items-center justify-center rounded-xl ${tone === "cyan" ? "bg-accent/15 text-accent" : "bg-primary/10 text-primary"}`}>
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-3 break-words text-lg font-bold tracking-tight text-foreground sm:text-xl">{value}</p>
    </div>
  );
}

export function EmiResultCard({ result, loanLabel, tenure, onDownload, isDownloading = false }: {
  result: EmiCalculationResult;
  loanLabel: string;
  tenure: number;
  onDownload: () => void;
  isDownloading?: boolean;
}) {
  const principalPct = result.totalPayment > 0 ? (result.principalAmount / result.totalPayment) * 100 : 0;
  const interestPct = result.totalPayment > 0 ? (result.totalInterest / result.totalPayment) * 100 : 0;
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-[0_18px_60px_-35px_rgba(37,99,235,0.5)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-accent" />
      <div className="p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Your estimate</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{loanLabel}</p>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Banknote className="h-5 w-5" /></span>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Estimated monthly EMI</p>
        <motion.p key={Math.round(result.emi * 100) / 100} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }} className="mt-1 break-words text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.25rem]">
          {formatCurrency(result.emi)}
        </motion.p>
        <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"><CircleDollarSign className="h-3.5 w-3.5 text-primary" /> For {tenure} monthly instalments</p>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Metric label="Total interest" value={formatCurrency(result.totalInterest)} icon={ArrowUpRight} />
          <Metric label="Total repayment" value={formatCurrency(result.totalPayment)} icon={PiggyBank} tone="cyan" />
        </div>

        <div className="mt-7 rounded-2xl border border-border/80 bg-background/60 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-foreground">Repayment composition</p>
            <p className="text-xs text-muted-foreground">100% of repayment</p>
          </div>
          <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-muted" role="img" aria-label={`Principal ${principalPct.toFixed(1)} percent, interest ${interestPct.toFixed(1)} percent`}>
            <motion.div initial={{ width: 0 }} animate={{ width: `${principalPct}%` }} transition={{ duration: 0.45 }} className="h-full bg-primary" />
            <motion.div initial={{ width: 0 }} animate={{ width: `${interestPct}%` }} transition={{ duration: 0.45 }} className="h-full bg-accent" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground"><span className="h-2.5 w-2.5 rounded-full bg-primary" />Principal</span>
              <p className="mt-1.5 text-sm font-bold text-foreground">{formatCurrency(result.principalAmount)}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{principalPct.toFixed(1)}% of total</p>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground"><span className="h-2.5 w-2.5 rounded-full bg-accent" />Interest</span>
              <p className="mt-1.5 text-sm font-bold text-foreground">{formatCurrency(result.totalInterest)}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{interestPct.toFixed(1)}% of total</p>
            </div>
          </div>
        </div>

        <button type="button" onClick={onDownload} disabled={isDownloading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-blue-600 px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70">
          {isDownloading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> : <ArrowDownRight className="h-4 w-4" />}
          {isDownloading ? "Preparing your PDF…" : "Download EMI Overview"}
        </button>
        <p className="mt-3 text-center text-[11px] leading-5 text-muted-foreground">A branded report with loan details and the full repayment schedule.</p>
      </div>
    </div>
  );
}
