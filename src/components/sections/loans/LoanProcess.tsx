"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { loansContent } from "@/constants/loans";

export function LoanProcess() {
  const { process } = loansContent;

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {process.eyebrow}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {process.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {process.description}
            </p>
          </motion.div>
        </div>

        {/* Process */}
        <div className="relative mt-14 lg:mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-border lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {process.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="relative"
              >
                {/* Mobile connecting line */}
                {index < process.steps.length - 1 && (
                  <div className="absolute left-5 top-12 h-[calc(100%+2.5rem)] w-px bg-border lg:hidden" />
                )}

                <div className="relative">
                  {/* Number */}
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold text-primary shadow-sm">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="mt-6 max-w-sm pl-0">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < process.steps.length - 1 && (
                    <div className="absolute right-2 top-5 hidden text-muted-foreground lg:block">
                      <ArrowRight className="size-4" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-14 border-t border-border pt-6"
        >
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
            The exact process, documentation, assessment, and lending terms may
            vary depending on the loan type and applicant profile.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
