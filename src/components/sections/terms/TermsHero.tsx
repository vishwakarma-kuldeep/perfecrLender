"use client";

import { motion } from "motion/react";
import { FileText } from "lucide-react";

import { termsContent } from "@/constants/terms";

export function TermsHero() {
  const { hero } = termsContent;

  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-24 lg:py-32">
      {/* Decorative element */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"
          >
            <FileText className="size-5" />
          </motion.div>

          {/* Eyebrow */}
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {hero.eyebrow}
          </p>

          {/* Heading */}
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {hero.description}
          </p>

          {/* Last Updated */}
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-8 bg-border" />

            <p className="text-sm font-medium text-muted-foreground">
              {hero.lastUpdated}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
