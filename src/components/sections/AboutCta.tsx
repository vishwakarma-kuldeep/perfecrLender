"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

import { aboutContent } from "@/constants/about";
import { Card } from "@/components/ui/card";

export function AboutCta() {
  const { cta } = aboutContent;

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
            {/* Background accents */}
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur">
                  <MessageCircle className="size-4 text-primary" />

                  {cta.eyebrow}
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {cta.title}
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  {cta.description}
                </p>
              </div>

              <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href={cta.primaryAction.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {cta.primaryAction.label}

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href={cta.secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-muted"
                >
                  {cta.secondaryAction.label}
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
