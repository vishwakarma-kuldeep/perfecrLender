"use client";

import { motion } from "motion/react";
import { Scale } from "lucide-react";

import { termsContent } from "@/constants/terms";

export function TermsOverview() {
  const { overview } = termsContent;

  return (
    <section className="border-b border-border bg-muted/20 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-10"
        >
          {/* Icon */}
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Scale className="size-5" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {overview.eyebrow}
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {overview.title}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {overview.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
