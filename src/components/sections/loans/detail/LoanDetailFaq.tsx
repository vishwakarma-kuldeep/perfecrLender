import { HelpCircle } from "lucide-react";

import { loansContent } from "@/constants/loans";

type Loan = (typeof loansContent.products)[number];

type LoanDetailFaqProps = {
  loan: Loan;
};

export function LoanDetailFaq({ loan }: LoanDetailFaqProps) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <HelpCircle className="h-6 w-6" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions about {loan.title}?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            Here are some common questions to help you understand this loan
            option and the applicable lending process.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {loan.faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-border bg-card transition-shadow duration-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5 sm:p-6">
                <span className="flex items-start gap-4">
                  <span className="mt-0.5 text-xs font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-left text-sm font-semibold text-foreground sm:text-base">
                    {faq.question}
                  </span>
                </span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform duration-300 group-open:rotate-45">
                  <span className="text-lg leading-none">+</span>
                </span>
              </summary>

              <div className="px-5 pb-6 pl-14 sm:px-6 sm:pl-16">
                <p className="text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
