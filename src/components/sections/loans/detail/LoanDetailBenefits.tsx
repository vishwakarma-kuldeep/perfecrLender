import { ArrowUpRight } from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailBenefitsProps = {
  loan: Loan;
};

export function LoanDetailBenefits({ loan }: LoanDetailBenefitsProps) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Key Features & Benefits
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built around your {loan.title.toLowerCase()} requirements.
          </h2>

          <p className="mt-5 leading-7 text-muted-foreground">
            Explore some of the ways this financing option may support eligible
            requirements.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loan.benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <h3 className="mt-8 text-lg font-semibold leading-7 text-foreground">
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
