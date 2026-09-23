import { CheckCircle2, Users } from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailSuitableForProps = {
  loan: Loan;
};

export function LoanDetailSuitableFor({ loan }: LoanDetailSuitableForProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              Who Is It For?
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Is this loan aligned with your requirement?
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              This financing option may be relevant for applicants with
              requirements such as the following, subject to applicable
              eligibility and lending criteria.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {loan.suitableFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <span className="text-sm font-medium leading-6 text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
