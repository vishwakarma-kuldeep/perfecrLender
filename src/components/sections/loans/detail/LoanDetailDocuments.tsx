import { Check, FileText } from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailDocumentsProps = {
  loan: Loan;
};

export function LoanDetailDocuments({ loan }: LoanDetailDocumentsProps) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
              Documents Checklist
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Documents checklist for your {loan.title.toLowerCase()}.
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              The exact documentation can vary depending on your profile, loan
              requirement, and applicable lending process.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="grid gap-3">
              {loan.documents.map((document) => (
                <div
                  key={document}
                  className="flex items-start gap-3 rounded-xl border border-border p-4"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  />

                  <span className="text-sm leading-6 text-foreground">
                    {document}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-muted/50 p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Additional documents may be requested where applicable during
                the assessment and documentation process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
