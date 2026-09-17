"use client";

import { motion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { homeContent } from "@/constants/home";

export function HomeTrust() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <div className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm sm:p-10 lg:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Content */}
              <div className="max-w-2xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-foreground">
                  <ShieldCheck aria-hidden="true" className="h-6 w-6" />
                </div>

                <p className="text-sm font-medium text-primary-foreground/70">
                  {hero.eyebrow}
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
                  {hero.title}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/75 sm:text-base">
                  {hero.description}
                </p>
              </div>

              {/* Action */}
              <Link
                href={hero.primaryCta.href}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                {hero.primaryCta.label}

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
