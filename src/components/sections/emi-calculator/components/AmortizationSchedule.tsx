"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import type { AmortizationRow } from "@/lib/emi";
import { formatCurrency } from "./format";

const PAGE_SIZE = 12;

type Props = {
  rows: AmortizationRow[];
  tenure: number;
};

export function AmortizationSchedule({ rows, tenure }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const visibleRows = useMemo(() => rows.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE), [rows, page]);
  const yearlySummary = useMemo(() => {
    const result: { year: number; principal: number; interest: number; balance: number }[] = [];
    for (let start = 0; start < rows.length; start += 12) {
      const yearRows = rows.slice(start, start + 12);
      const last = yearRows[yearRows.length - 1];
      result.push({ year: Math.floor(start / 12) + 1, principal: yearRows.reduce((sum, row) => sum + row.principal, 0), interest: yearRows.reduce((sum, row) => sum + row.interest, 0), balance: last?.closingBalance ?? 0 });
    }
    return result;
  }, [rows]);

  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card">
      <button type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)} className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-muted/40 sm:p-6">
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><ChevronDown className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`} /></span>
          <span><span className="block text-sm font-bold text-foreground sm:text-base">Repayment schedule</span><span className="mt-1 block text-xs text-muted-foreground">Month-wise principal, interest and outstanding balance</span></span>
        </span>
        <span className="shrink-0 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground">{tenure} months</span>
      </button>

      {expanded && <div className="border-t border-border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left text-xs sm:text-sm">
            <thead className="bg-muted/70 text-muted-foreground"><tr>
              <th scope="col" className="px-5 py-4 font-semibold">Month</th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">EMI</th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">Principal</th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">Interest</th>
              <th scope="col" className="px-5 py-4 text-right font-semibold">Balance</th>
            </tr></thead>
            <tbody>{visibleRows.map((row) => <tr key={row.month} className="border-t border-border/70 transition hover:bg-muted/30">
              <th scope="row" className="px-5 py-3.5 font-semibold text-foreground">{String(row.month).padStart(2, "0")}</th>
              <td className="px-5 py-3.5 text-right font-semibold tabular-nums text-foreground">{formatCurrency(row.emi)}</td>
              <td className="px-5 py-3.5 text-right tabular-nums text-foreground">{formatCurrency(row.principal)}</td>
              <td className="px-5 py-3.5 text-right tabular-nums text-muted-foreground">{formatCurrency(row.interest)}</td>
              <td className="px-5 py-3.5 text-right tabular-nums text-foreground">{formatCurrency(row.closingBalance)}</td>
            </tr>)}</tbody>
          </table>
        </div>
        {pageCount > 1 && <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3 sm:px-5">
          <p className="text-xs text-muted-foreground">Showing {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, rows.length)} of {rows.length} months</p>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => setPage(0)} disabled={page === 0} aria-label="First page" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-muted disabled:opacity-40"><ChevronsLeft className="h-4 w-4" /></button>
            <button type="button" onClick={() => setPage((value) => Math.max(0, value - 1))} disabled={page === 0} aria-label="Previous page" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-muted disabled:opacity-40"><ChevronLeft className="h-4 w-4" /></button>
            <span className="px-2 text-xs font-medium text-muted-foreground">{page + 1} / {pageCount}</span>
            <button type="button" onClick={() => setPage((value) => Math.min(pageCount - 1, value + 1))} disabled={page === pageCount - 1} aria-label="Next page" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-muted disabled:opacity-40"><ChevronRight className="h-4 w-4" /></button>
            <button type="button" onClick={() => setPage(pageCount - 1)} disabled={page === pageCount - 1} aria-label="Last page" className="rounded-lg border border-border p-2 text-muted-foreground hover:bg-muted disabled:opacity-40"><ChevronsRight className="h-4 w-4" /></button>
          </div>
        </div>}
        <div className="border-t border-border p-4 sm:p-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Yearly summary</p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{yearlySummary.map((year) => <div key={year.year} className="rounded-xl border border-border bg-background/60 p-4">
            <div className="flex items-center justify-between gap-2"><p className="text-sm font-bold text-foreground">Year {year.year}</p><p className="text-[11px] text-muted-foreground">Months {((year.year - 1) * 12) + 1}–{Math.min(year.year * 12, tenure)}</p></div>
            <div className="mt-3 space-y-2 text-xs"><div className="flex justify-between gap-3"><span className="text-muted-foreground">Principal repaid</span><span className="font-semibold text-foreground">{formatCurrency(year.principal)}</span></div><div className="flex justify-between gap-3"><span className="text-muted-foreground">Interest paid</span><span className="font-semibold text-foreground">{formatCurrency(year.interest)}</span></div><div className="flex justify-between gap-3 border-t border-border pt-2"><span className="text-muted-foreground">Closing balance</span><span className="font-semibold text-foreground">{formatCurrency(year.balance)}</span></div></div>
          </div>)}</div>
        </div>
      </div>}
    </section>
  );
}
