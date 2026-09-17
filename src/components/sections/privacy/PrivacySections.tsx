"use client";

import { motion } from "motion/react";

import { privacyContent } from "@/constants/privacy";

export function PrivacySections() {
  const { sections } = privacyContent;

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="divide-y divide-border">
          {sections.map((section, index) => (
            <motion.article
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              className="grid gap-6 py-10 first:pt-0 last:pb-0 sm:py-12 lg:grid-cols-[120px_1fr] lg:gap-10"
            >
              {/* Section number */}
              <div>
                <span className="text-sm font-semibold tabular-nums text-primary">
                  {section.number}
                </span>
              </div>

              {/* Section content */}
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
