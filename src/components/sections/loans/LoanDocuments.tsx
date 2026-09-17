"use client";

import { motion } from "motion/react";
import { Check, FileText } from "lucide-react";

import { loansContent } from "@/constants/loans";

export function LoanDocuments() {
  const { documents } = loansContent;

  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="size-5" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {documents.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {documents.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              {documents.description}
            </p>
          </motion.div>

          {/* Right - Documents */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center justify-between border-b border-border pb-5">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Common Documents
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Requirements may vary by loan type.
                </p>
              </div>

              <span className="text-sm font-semibold tabular-nums text-primary">
                {String(documents.commonDocuments.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-2">
              {documents.commonDocuments.map((document, index) => (
                <motion.div
                  key={document}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="group flex items-center gap-4 border-b border-border py-5 last:border-b-0"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Check className="size-4" />
                  </div>

                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {document}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
