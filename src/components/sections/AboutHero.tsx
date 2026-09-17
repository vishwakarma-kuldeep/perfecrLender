"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

import { aboutContent } from "@/constants/about";
import { Card } from "@/components/ui/card";

export function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            {hero.eyebrow}
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <Card className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <ShieldCheck className="size-6" />
                </div>

                <ArrowUpRight className="size-5 text-muted-foreground" />
              </div>

              <div className="mt-12">
                <p className="text-sm font-medium text-muted-foreground">
                  Our focus
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  People, trust & better lending.
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Creating a lending experience that feels clear, professional,
                  and customer-focused.
                </p>
              </div>

              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
