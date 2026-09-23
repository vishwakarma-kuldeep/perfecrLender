import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailUseCasesProps = {
  loan: Loan;
};

export function LoanDetailUseCases({ loan }: LoanDetailUseCasesProps) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              Common Use Cases
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Where can this financing help?
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Depending on the loan type and applicable lending terms, this
              financing option may be considered for requirements such as:
            </p>
          </div>

          <div className="space-y-3">
            {loan.useCases.map((useCase, index) => (
              <div
                key={useCase}
                className="group flex items-center justify-between gap-5 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium leading-6 text-foreground sm:text-base">
                    {useCase}
                  </span>
                </div>

                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
