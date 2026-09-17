"use client";

import { motion } from "motion/react";

import { termsContent } from "@/constants/terms";

export function TermsSections() {
  const { sections } = termsContent;

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.article
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.45,
                delay: index * 0.025,
              }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-sm sm:p-8 lg:p-9"
            >
              <div className="grid gap-6 sm:grid-cols-[72px_1fr] sm:gap-8">
                {/* Number */}
                <div>
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-sm font-semibold tabular-nums text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    {section.number}
                  </span>
                </div>

                {/* Content */}
                <div className="max-w-3xl">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
