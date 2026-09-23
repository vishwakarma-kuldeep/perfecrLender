import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailCtaProps = {
  loan: Loan;
};

export function LoanDetailCta({ loan }: LoanDetailCtaProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Ready to Take the Next Step?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Let&apos;s discuss your {loan.title.toLowerCase()} requirement.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Share your requirement with the Perfect Lender team and
                understand the applicable lending options and process.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/loans"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-muted"
              >
                <MessageCircle className="h-4 w-4" />
                Explore Other Loans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
