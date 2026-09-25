"use client";

import { motion } from "motion/react";
import {
  BadgeCheck,
  Headphones,
  Percent,
  SlidersHorizontal,
} from "lucide-react";

import { homeContent } from "@/constants/home";
import { Card, CardContent } from "@/components/ui/card";

const icons = [BadgeCheck, Percent, SlidersHorizontal, Headphones];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut" as const,
    },
  },
};

export function HomeWhyChooseUs() {
  const { whyChooseUs } = homeContent;

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
            {whyChooseUs.eyebrow}
          </span>
        </motion.div>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyChooseUs.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  {/* Top accent */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                  />

                  <CardContent className="flex h-full flex-col p-6 sm:p-7">
                    {/* Icon */}
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
