import {
  CheckCircle2,
  CircleUserRound,
  FileCheck2,
  WalletCards,
} from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailEligibilityProps = {
  loan: Loan;
};

const eligibilityIcons = [
  CircleUserRound,
  WalletCards,
  FileCheck2,
  CheckCircle2,
];

export function LoanDetailEligibility({ loan }: LoanDetailEligibilityProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Eligibility Criteria
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What may be considered for eligibility?
          </h2>

          <p className="mt-5 leading-7 text-muted-foreground">
            Eligibility can vary depending on your profile, financial
            circumstances, loan requirement, and applicable lending criteria.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
          {loan.eligibility.map((item, index) => {
            const Icon = eligibilityIcons[index % eligibilityIcons.length];

            return (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Requirement {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-foreground">
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-border bg-muted/30 p-5 text-sm leading-6 text-muted-foreground sm:p-6">
          Final eligibility is subject to the applicable assessment, lending
          criteria, documentation, and terms for the specific requirement.
        </div>
      </div>
    </section>
  );
}
