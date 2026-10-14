"use client";

import { BriefcaseBusiness, House, Landmark, CarFront, WalletCards, type LucideIcon } from "lucide-react";
import type { LoanType, LoanTypeConfig } from "@/constants/emiCalculator";

const icons: Record<LoanType, LucideIcon> = {
  "business-loan": BriefcaseBusiness,
  "home-loan": House,
  "mortgage-loan": Landmark,
  "personal-loan": WalletCards,
  "vehicle-loan": CarFront,
};

type Props = {
  loans: readonly LoanTypeConfig[];
  value: LoanType;
  onChange: (value: LoanType) => void;
};

export function LoanTypeSelector({ loans, value, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5" role="group" aria-label="Choose loan type">
      {loans.map((loan) => {
        const Icon = icons[loan.id];
        const active = value === loan.id;
        return (
          <button
            key={loan.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(loan.id)}
            className={`group flex min-h-[94px] flex-col items-start justify-between rounded-2xl border p-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:p-4 ${active ? "border-primary bg-primary/8 shadow-sm ring-1 ring-primary/25" : "border-border bg-background/60 hover:border-primary/40 hover:bg-muted/60"}`}
          >
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-primary"}`}>
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span className={`mt-3 text-xs font-semibold leading-4 sm:text-sm ${active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
              {loan.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
