import { FileText } from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailOverviewProps = {
  loan: Loan;
};

export function LoanDetailOverview({ loan }: LoanDetailOverviewProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              Understanding Your Loan
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What is a {loan.title}?
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-lg leading-8 text-muted-foreground">
              {loan.description}
            </p>

            <p className="leading-7 text-muted-foreground">
              {loan.longDescription}
            </p>

            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <p className="text-sm font-medium text-foreground">
                A financing solution should start with understanding your
                requirement.
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                The applicable loan option, documentation, eligibility
                requirements, and lending terms can vary based on the applicant
                and the nature of the requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
