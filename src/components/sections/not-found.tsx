"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  CarFront,
  Home as HomeIcon,
  Landmark,
  UserRound,
} from "lucide-react";

import { homeContent } from "@/constants/home";
import { notFoundContent } from "@/constants/not-found";
import { Card, CardContent } from "@/components/ui/card";

const iconMap = {
  business: Building2,
  home: HomeIcon,
  mortgage: Landmark,
  personal: UserRound,
  vehicle: CarFront,
} as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export function NotFoundSection() {
  const loanItems = homeContent.loanOfferings.items;

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-background">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-112 sm:w-112" />

          <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-cyan-400/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="mb-8"
            >
              <span className="bg-linear-to-r from-primary via-blue-500 to-cyan-400 bg-clip-text text-[clamp(6rem,20vw,13rem)] font-bold leading-none tracking-[-0.08em] text-transparent">
                {notFoundContent.errorCode}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {notFoundContent.hero.eyebrow}
              </p>

              <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {notFoundContent.hero.title}
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {notFoundContent.hero.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link
                href={notFoundContent.actions.home.href}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {notFoundContent.actions.home.label}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={notFoundContent.actions.loans.href}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {notFoundContent.actions.loans.label}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan options */}
      <section className="border-y border-border bg-muted/30 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {notFoundContent.loanOptions.eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {notFoundContent.loanOptions.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-muted-foreground">
              {notFoundContent.loanOptions.description}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {loanItems.map((loan) => {
              const Icon = iconMap[loan.icon];

              return (
                <motion.div key={loan.id} variants={itemVariants}>
                  <Link href={loan.href} className="group block h-full">
                    <Card className="h-full transition-all duration-200 group-hover:-translate-y-1 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5">
                      <CardContent className="flex h-full flex-col items-center p-5 text-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>

                        <h3 className="mt-5 text-base font-semibold text-foreground">
                          {loan.title}
                        </h3>

                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {loan.description}
                        </p>

                        <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-primary">
                          Explore
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-5xl"
          >
            <Card className="relative overflow-hidden border-primary/10 bg-primary text-primary-foreground shadow-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />

              <CardContent className="relative px-6 py-10 text-center sm:px-10 sm:py-14">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                  {notFoundContent.contactCta.eyebrow}
                </p>

                <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
                  {notFoundContent.contactCta.title}
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/75 sm:text-base">
                  {notFoundContent.contactCta.description}
                </p>

                <Link
                  href={notFoundContent.contactCta.button.href}
                  className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {notFoundContent.contactCta.button.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
