"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { homeContent } from "@/constants/home";

export function HomeCta() {
  const { cta } = homeContent;

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary px-6 py-12 shadow-xl shadow-primary/10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            {/* Decorative shapes */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-black/10 blur-3xl"
            />

            <div className="relative flex flex-col items-center text-center">
              {/* Eyebrow */}
              <span className="inline-flex rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-1.5 text-sm font-medium text-primary-foreground">
                {cta.eyebrow}
              </span>

              {/* Heading */}
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                {cta.title}
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-6 text-primary-foreground/75 sm:text-base sm:leading-7">
                {cta.description}
              </p>

              {/* CTA */}
              <Link
                href={cta.button.href}
                className="group mt-8 inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-xl bg-background px-6 text-sm font-semibold text-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                {cta.button.label}

                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
