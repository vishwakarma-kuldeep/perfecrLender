"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { loansContent } from "@/constants/loans";
import { Card } from "@/components/ui/card";

export function LoansHero() {
  const { hero } = loansContent;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 size-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute right-0 top-0 size-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
            <Sparkles className="size-4 text-primary" />

            {hero.eyebrow}
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            {hero.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {hero.description}
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={hero.primaryAction.href}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {hero.primaryAction.label}

              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href={hero.secondaryAction.href}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-muted"
            >
              {hero.secondaryAction.label}
            </Link>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="relative"
        >
          <Card className="relative overflow-hidden p-6 sm:p-8">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative">
              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Landmark className="size-7" />
                </div>

                <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <span className="size-2 rounded-full bg-primary" />
                  Loan Solutions
                </div>
              </div>

              {/* Main visual */}
              <div className="mt-12">
                <p className="text-sm font-medium text-muted-foreground">
                  Financing made simpler
                </p>

                <h2 className="mt-2 max-w-md text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Explore solutions built around your financial needs.
                </h2>
              </div>

              {/* Feature list */}
              <div className="mt-8 space-y-3">
                {[
                  "Business financing",
                  "Home & property financing",
                  "Personal & vehicle financing",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1,
                    }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-4 py-3 backdrop-blur"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />

                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom trust element */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-muted">
                  <ShieldCheck className="size-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground">
                    Customer-focused approach
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Clear communication throughout the journey
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
