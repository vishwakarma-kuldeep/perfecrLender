"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Building2 } from "lucide-react";

import { aboutContent } from "@/constants/about";
import { Card } from "@/components/ui/card";

export function AboutStory() {
  const { story } = aboutContent;

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="relative min-h-[360px] overflow-hidden p-8 sm:min-h-[440px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--primary)_20%,transparent),transparent_40%)]" />

              <div className="relative flex h-full min-h-[300px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Building2 className="size-7" />
                  </div>

                  <ArrowUpRight className="size-5 text-muted-foreground" />
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Perfect Lender
                  </p>

                  <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Lending with clarity.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {story.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {story.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {story.description}
            </p>

            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {story.supportingText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
