"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { aboutContent } from "@/constants/about";
import { Card } from "@/components/ui/card";

export function AboutValues() {
  const { mission, vision, values, approach } = aboutContent;

  return (
    <>
      {/* Mission & Vision */}
      <section className="border-y border-border bg-muted/20 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {[mission, vision].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <Card className="group relative h-full overflow-hidden p-7 sm:p-9">
                  <div className="absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                        {item.eyebrow}
                      </span>

                      <ArrowRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <h2 className="mt-8 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {item.title}
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {values.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {values.title}
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {values.description}
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <Card className="group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-y border-border bg-muted/20 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {approach.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {approach.title}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>How we work</span>
                <ArrowRight className="size-4" />
              </div>
            </motion.div>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {approach.items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="group grid gap-5 py-7 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-8"
                >
                  <span className="text-sm font-semibold tabular-nums text-primary">
                    {item.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-xl bg-card text-primary sm:hidden">
                        <Icon className="size-4" />
                      </div>

                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden size-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary sm:flex">
                    <Icon className="size-5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
