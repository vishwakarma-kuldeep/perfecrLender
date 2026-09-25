"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  Calculator,
  ChevronDown,
  IndianRupee,
  Percent,
  CalendarDays,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import { calculateEmi } from "@/lib/emi";
import { emiCalculatorContent, type LoanType } from "@/constants/emiCalculator";
import { whatsappContent } from "@/constants/whatsapp";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export function EmiCalculator() {
  const firstLoan = emiCalculatorContent.loanTypes[0];

  const [loanType, setLoanType] = useState<LoanType>(firstLoan.id);
  const [loanAmount, setLoanAmount] = useState(firstLoan.defaultAmount);
  const [interestRate, setInterestRate] = useState(firstLoan.defaultRate);
  const [tenure, setTenure] = useState(firstLoan.defaultTenure);
  const [showAmortization, setShowAmortization] = useState(false);

  const selectedLoan = useMemo(
    () =>
      emiCalculatorContent.loanTypes.find((loan) => loan.id === loanType) ??
      firstLoan,
    [loanType, firstLoan],
  );

  const result = useMemo(
    () =>
      calculateEmi({
        principal: loanAmount,
        annualInterestRate: interestRate,
        tenureMonths: tenure,
      }),
    [loanAmount, interestRate, tenure],
  );

  const handleWhatsAppEnquiry = () => {
    const message = [
      "Hello Perfect Lender,",
      "",
      `I am interested in a ${selectedLoan.label}.`,
      "",
      `Loan Amount: ${formatCurrency(result.principalAmount)}`,
      `Interest Rate: ${interestRate}%`,
      `Loan Tenure: ${tenure} months`,
      `Estimated Monthly EMI: ${formatCurrency(result.emi)}`,
      `Estimated Total Interest: ${formatCurrency(result.totalInterest)}`,
      `Estimated Total Repayment: ${formatCurrency(result.totalPayment)}`,
      "",
      "I would like to discuss my loan requirement and eligibility.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappContent.phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  const handleLoanTypeChange = (value: LoanType) => {
    const loan = emiCalculatorContent.loanTypes.find(
      (item) => item.id === value,
    );

    if (!loan) return;

    setLoanType(value);
    setLoanAmount(loan.defaultAmount);
    setInterestRate(loan.defaultRate);
    setTenure(loan.defaultTenure);
  };

  const handleAmountChange = (value: string) => {
    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) return;

    setLoanAmount(Math.min(selectedLoan.maxAmount, Math.max(0, numericValue)));
  };

  const handleRateChange = (value: string) => {
    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) return;

    setInterestRate(Math.min(selectedLoan.maxRate, Math.max(0, numericValue)));
  };

  const handleTenureChange = (value: string) => {
    const numericValue = Number(value);

    if (Number.isNaN(numericValue)) return;

    setTenure(Math.min(selectedLoan.maxTenure, Math.max(1, numericValue)));
  };

  const principalPercentage =
    result.totalPayment > 0
      ? (result.principalAmount / result.totalPayment) * 100
      : 0;

  const interestPercentage =
    result.totalPayment > 0
      ? (result.totalInterest / result.totalPayment) * 100
      : 0;

  return (
    <section
      id="emi-calculator"
      className="relative overflow-hidden border-y border-border bg-background py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary"
          >
            <Calculator className="h-4 w-4" />
            {emiCalculatorContent.eyebrow}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {emiCalculatorContent.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            {emiCalculatorContent.description}
          </motion.p>
        </div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-xl lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Left */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-medium text-muted-foreground">
                {emiCalculatorContent.labels.loanType}
              </p>

              <div className="relative mt-3">
                <select
                  value={loanType}
                  onChange={(event) =>
                    handleLoanTypeChange(event.target.value as LoanType)
                  }
                  className="w-full appearance-none rounded-2xl border border-border bg-background px-4 py-4 pr-12 text-sm font-medium text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  {emiCalculatorContent.loanTypes.map((loan) => (
                    <option key={loan.id} value={loan.id}>
                      {loan.label}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {selectedLoan.description}
              </p>
            </div>

            {/* Loan Amount */}
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <label
                  htmlFor="loan-amount"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <IndianRupee className="h-4 w-4 text-primary" />
                  {emiCalculatorContent.labels.loanAmount}
                </label>

                <div className="relative w-40">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    ₹
                  </span>

                  <input
                    id="loan-amount"
                    type="number"
                    value={loanAmount}
                    min={selectedLoan.minAmount}
                    max={selectedLoan.maxAmount}
                    onChange={(event) => handleAmountChange(event.target.value)}
                    className="w-full rounded-xl border border-border bg-background py-2.5 pl-7 pr-3 text-right text-sm font-semibold text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <input
                type="range"
                min={selectedLoan.minAmount}
                max={selectedLoan.maxAmount}
                step={5000}
                value={loanAmount}
                onChange={(event) => setLoanAmount(Number(event.target.value))}
                className="w-full accent-primary"
              />

              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>₹{formatNumber(selectedLoan.minAmount)}</span>
                <span>₹{formatNumber(selectedLoan.maxAmount)}</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <label
                  htmlFor="interest-rate"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Percent className="h-4 w-4 text-primary" />
                  {emiCalculatorContent.labels.interestRate}
                </label>

                <div className="relative w-28">
                  <input
                    id="interest-rate"
                    type="number"
                    value={interestRate}
                    min={selectedLoan.minRate}
                    max={selectedLoan.maxRate}
                    step={0.1}
                    onChange={(event) => handleRateChange(event.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 pr-7 text-right text-sm font-semibold text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    %
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={selectedLoan.minRate}
                max={selectedLoan.maxRate}
                step={0.1}
                value={interestRate}
                onChange={(event) =>
                  setInterestRate(Number(event.target.value))
                }
                className="w-full accent-primary"
              />

              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>{selectedLoan.minRate}%</span>
                <span>{selectedLoan.maxRate}%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <div className="mb-3 flex items-center justify-between gap-4">
                <label
                  htmlFor="loan-tenure"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {emiCalculatorContent.labels.loanTenure}
                </label>

                <div className="relative w-32">
                  <input
                    id="loan-tenure"
                    type="number"
                    value={tenure}
                    min={selectedLoan.minTenure}
                    max={selectedLoan.maxTenure}
                    onChange={(event) => handleTenureChange(event.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2.5 pr-12 text-right text-sm font-semibold text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                    months
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={selectedLoan.minTenure}
                max={selectedLoan.maxTenure}
                step={1}
                value={tenure}
                onChange={(event) => setTenure(Number(event.target.value))}
                className="w-full accent-primary"
              />

              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>{selectedLoan.minTenure} months</span>
                <span>{selectedLoan.maxTenure} months</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="border-t border-border bg-background/60 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="mb-6">
              <p className="text-sm font-medium text-muted-foreground">
                {selectedLoan.label}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={result.emi}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="mt-2"
                >
                  <p className="text-sm text-muted-foreground">
                    {emiCalculatorContent.labels.monthlyEmi}
                  </p>

                  <p className="mt-1 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {formatCurrency(result.emi)}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 gap-3">
              <SummaryCard
                label={emiCalculatorContent.labels.totalInterest}
                value={formatCurrency(result.totalInterest)}
              />

              <SummaryCard
                label={emiCalculatorContent.labels.totalPayment}
                value={formatCurrency(result.totalPayment)}
              />
            </div>

            {/* Principal / Interest */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">
                  Repayment Breakdown
                </p>

                <p className="text-xs text-muted-foreground">{tenure} months</p>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${principalPercentage}%`,
                  }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <BreakdownItem
                  label={emiCalculatorContent.labels.principalAmount}
                  value={formatCurrency(result.principalAmount)}
                  percentage={principalPercentage}
                />

                <BreakdownItem
                  label={emiCalculatorContent.labels.interestAmount}
                  value={formatCurrency(result.totalInterest)}
                  percentage={interestPercentage}
                />
              </div>
            </div>

            {/* Amortization */}
            <button
              type="button"
              onClick={() => setShowAmortization((current) => !current)}
              className="mt-8 flex w-full items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-left text-sm font-medium text-foreground transition hover:border-primary/40"
            >
              <span>
                {showAmortization
                  ? "Hide Amortization Schedule"
                  : "View Amortization Schedule"}
              </span>

              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  showAmortization ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {showAmortization && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 max-h-80 overflow-auto rounded-2xl border border-border">
                    <table className="w-full min-w-[600px] text-left text-xs">
                      <thead className="sticky top-0 bg-card">
                        <tr className="border-b border-border">
                          <th className="px-4 py-3 font-semibold">Month</th>
                          <th className="px-4 py-3 font-semibold">EMI</th>
                          <th className="px-4 py-3 font-semibold">Principal</th>
                          <th className="px-4 py-3 font-semibold">Interest</th>
                          <th className="px-4 py-3 font-semibold">Balance</th>
                        </tr>
                      </thead>

                      <tbody>
                        {result.amortization.map((row) => (
                          <tr
                            key={row.month}
                            className="border-b border-border last:border-0"
                          >
                            <td className="px-4 py-3 text-muted-foreground">
                              {row.month}
                            </td>

                            <td className="px-4 py-3 font-medium">
                              {formatCurrency(row.emi)}
                            </td>

                            <td className="px-4 py-3">
                              {formatCurrency(row.principal)}
                            </td>

                            <td className="px-4 py-3">
                              {formatCurrency(row.interest)}
                            </td>

                            <td className="px-4 py-3">
                              {formatCurrency(row.closingBalance)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/40"
              >
                Discuss Your Loan
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <button
                type="button"
                onClick={handleWhatsAppEnquiry}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Discuss on WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-muted-foreground">
          {emiCalculatorContent.disclaimer}
        </p>
      </div>
    </section>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function BreakdownItem({
  label,
  value,
  percentage,
}: {
  label: string;
  value: string;
  percentage: number;
}) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {percentage.toFixed(1)}%
      </p>
    </div>
  );
}
