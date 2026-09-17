"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { loansContent } from "@/constants/loans";
import { Card } from "@/components/ui/card";

export function LoanProducts() {
  const { intro, products } = loansContent;

  return (
    <section
      id="loan-products"
      className="bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {intro.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {intro.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {intro.description}
          </p>
        </motion.div>

        {/* Products */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {products.map((product, index) => {
            const Icon = product.icon;

            /*
             * First two cards take 3 columns each.
             * Remaining three cards take 2 columns each.
             *
             * This gives us a slightly asymmetric premium layout
             * instead of a boring 5-card equal grid.
             */
            const gridClass = index < 2 ? "lg:col-span-3" : "lg:col-span-2";

            return (
              <motion.div
                key={product.id}
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
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className={gridClass}
              >
                <Link href={product.href} className="group block h-full">
                  <Card className="relative flex h-full min-h-[310px] flex-col overflow-hidden p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg sm:p-7">
                    {/* Background glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Top row */}
                    <div className="relative flex items-start justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>

                      <div className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary">
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative mt-auto pt-12">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                        {product.eyebrow}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        {product.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {product.shortDescription}
                      </p>

                      {/* Learn more */}
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground">
                        <span>Explore Solution</span>

                        <ArrowUpRight className="size-4 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
