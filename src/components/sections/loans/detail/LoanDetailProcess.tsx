import { ArrowRight, CheckCircle2 } from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailProcessProps = {
  loan: Loan;
};

export function LoanDetailProcess({ loan }: LoanDetailProcessProps) {
  const steps = [
    {
      number: "01",
      title: "Share Your Requirement",
      description:
        "Tell us about your financial requirement so the applicable loan option can be understood.",
    },
    {
      number: "02",
      title: "Discuss the Loan Option",
      description: `Understand the ${loan.title.toLowerCase()} process, applicable requirements, and documentation.`,
    },
    {
      number: "03",
      title: "Submit Required Documents",
      description:
        "Provide the applicable documents required for the assessment and lending process.",
    },
    {
      number: "04",
      title: "Complete the Process",
      description:
        "Proceed through the applicable assessment and documentation steps based on the lending terms.",
    },
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            How to Apply
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A clear path from requirement to application.
          </h2>

          <p className="mt-5 leading-7 text-muted-foreground">
            The exact process can vary depending on the loan type and applicant
            profile, but these are the major stages you can expect.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute left-6 top-8 hidden h-px w-[calc(100%-3rem)] bg-border lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-sm font-bold text-primary">
                    {step.number}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight className="mt-5 hidden h-4 w-4 text-muted-foreground lg:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-border bg-muted/30 p-5">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

          <p className="text-sm leading-6 text-muted-foreground">
            The final lending decision, terms, documentation, and applicable
            conditions are subject to the relevant assessment and lending
            process.
          </p>
        </div>
      </div>
    </section>
  );
}
