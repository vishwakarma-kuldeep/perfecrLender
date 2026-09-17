"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { loansContent } from "@/constants/loans";

export function LoanCta() {
  const { cta } = loansContent;

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card"
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-px w-1/2 bg-primary/30" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              {/* Content */}
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {cta.eyebrow}
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {cta.title}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {cta.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={cta.primaryAction.href}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {cta.primaryAction.label}

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href={cta.secondaryAction.href}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-muted"
                >
                  {cta.secondaryAction.label}

                  <ArrowUpRight className="size-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
