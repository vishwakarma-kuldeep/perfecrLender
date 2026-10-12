"use client";

import Link from "next/link";
import { ArrowRight, CreditCard, Landmark, WalletCards } from "lucide-react";
import { useEffect, useState } from "react";

const highlights = [
  {
    title: "No consulting fees",
    description:
      "We do not charge you consulting fees. Any charges set by a selected lender are separate and depend on its terms.",
    icon: WalletCards,
  },
  {
    title: "We are not a lender",
    description:
      "We connect you with a bank or NBFC that may be suitable for your profile and requirement.",
    icon: Landmark,
  },
  {
    title: "Explore debt consolidation",
    description:
      "Ask about combining eligible loans and credit card dues into one loan, without closing your credit cards. Approval and terms depend on the lender.",
    icon: CreditCard,
  },
] as const;

export function HomeHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hoveredIndex !== null) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % highlights.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [hoveredIndex]);

  return (
    <section className="bg-muted/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Clear guidance, suitable options
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Know how we work
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map(({ title, description, icon: Icon }, index) => {
            const isHighlighted =
              hoveredIndex === index ||
              (hoveredIndex === null && activeIndex === index);

            return (
              <article
                key={title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-highlighted={isHighlighted}
                className={`rounded-2xl border p-6 transition-all duration-500 sm:p-7 ${
                  isHighlighted
                    ? "scale-[1.02] border-primary/50 bg-primary/5 shadow-xl shadow-primary/10"
                    : "border-border bg-card shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                <div
                  className={`flex size-12 items-center justify-center rounded-xl transition-colors duration-500 ${
                    isHighlighted
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-7 text-center text-sm text-muted-foreground">
          <Link
            href="/loans/personal-loan"
            className="group inline-flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            Explore Personal Loan options
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </p>
      </div>
    </section>
  );
}
