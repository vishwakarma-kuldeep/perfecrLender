"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { loansContent } from "@/constants/loans";
import { Card } from "@/components/ui/card";

export function LoanHighlights() {
  const { highlights } = loansContent;

  return (
    <section className="border-y border-border bg-muted/20 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {highlights.eyebrow}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {highlights.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {highlights.description}
            </p>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <Card className="group relative h-full overflow-hidden p-6 sm:p-7">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="mt-auto pt-8">
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <span className="text-xs font-medium text-muted-foreground">
                          Learn more
                        </span>

                        <ArrowUpRight className="size-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
