"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import { loansContent } from "@/constants/loans";

export function LoanFaq() {
  const { faq } = loansContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-y border-border bg-muted/20 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {faq.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {faq.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {faq.description}
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="border-b border-border last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-6 text-left transition-colors duration-200 hover:bg-muted/40 sm:px-7 sm:py-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 text-xs font-semibold tabular-nums text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-base font-semibold text-foreground sm:text-lg">
                      {item.question}
                    </span>
                  </div>

                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.3,
                        },
                        opacity: {
                          duration: 0.2,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pl-[3.25rem] sm:px-7 sm:pb-7 sm:pl-[4.25rem]">
                        <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
