"use client";

import { motion } from "motion/react";

import { loansContent } from "@/constants/loans";
import { Card } from "@/components/ui/card";

export function LoanEligibility() {
  const { eligibility } = loansContent;

  return (
    <section className="border-y border-border bg-muted/20 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {eligibility.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {eligibility.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {eligibility.description}
            </p>
          </motion.div>

          {/* Factors */}
          <div className="grid gap-4 sm:grid-cols-2">
            {eligibility.factors.map((factor, index) => {
              const Icon = factor.icon;

              return (
                <motion.div
                  key={factor.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Card className="group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      {/* Top */}
                      <div className="flex items-start justify-between">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-5" />
                        </div>

                        <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="mt-10">
                        <h3 className="text-lg font-semibold tracking-tight text-foreground">
                          {factor.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer / supporting note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 border-t border-border pt-6"
        >
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            Meeting general eligibility factors does not by itself guarantee
            approval. Final eligibility and applicable lending terms are subject
            to the relevant assessment and criteria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
