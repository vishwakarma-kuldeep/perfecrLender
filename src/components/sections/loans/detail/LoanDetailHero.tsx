import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";

import type { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailHeroProps = {
  loan: Loan;
};

export function LoanDetailHero({ loan }: LoanDetailHeroProps) {
  const Icon = loan.icon;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary shadow-sm">
              <CheckCircle2 className="h-4 w-4" />
              <span>{loan.eyebrow}</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {loan.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {loan.longDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Discuss Your Requirement
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/loans"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-muted"
              >
                Explore Other Loans
              </Link>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-foreground">
                {loan.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {loan.description}
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-start gap-3">
                  <Calculator className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <p className="font-medium text-foreground">
                      Plan your financing
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Use the EMI calculator to understand an illustrative
                      repayment estimate for your requirement.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Talk to our team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
