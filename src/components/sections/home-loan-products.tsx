"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  CarFront,
  Home,
  Landmark,
  UserRound,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { homeContent } from "@/constants/home";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function HomeLoanProducts() {
  const { loanOfferings } = homeContent;
  const iconMap = {
    business: Building2,
    home: Home,
    mortgage: Landmark,
    personal: UserRound,
    vehicle: CarFront,
  } as const;
  return (
    <section
      id="loan-products"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-0 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {loanOfferings.eyebrow}
          </p>
        </motion.div>

        {/* Products */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {loanOfferings.items.map((loan, index) => {
            const Icon = iconMap[loan.icon];

            return (
              <motion.div key={loan.title} variants={itemVariants}>
                <Card
                  as="article"
                  className="group h-full overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  <Link
                    href={loan.href}
                    className="flex h-full flex-col p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:p-7"
                  >
                    {/* Icon */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary">
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6 flex-1">
                      <h3 className="text-xl font-bold tracking-tight text-foreground">
                        {loan.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {loan.description}
                      </p>
                    </div>

                    {/* Bottom indicator */}
                    <div className="mt-7 flex items-center gap-2">
                      <span className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-primary/30" />

                      <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30 transition-colors duration-300 group-hover:bg-primary" />
                    </div>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
