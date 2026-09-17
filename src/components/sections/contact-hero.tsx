"use client";

import { motion } from "motion/react";
import { contactContent } from "@/constants/contact";

export function ContactHero() {
  const { hero } = contactContent;

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {hero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
