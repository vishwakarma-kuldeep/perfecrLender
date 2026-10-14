"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Calculator,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { calculateEmi } from "@/lib/emi";
import { emiCalculatorContent, type LoanType } from "@/constants/emiCalculator";
import { whatsappContent } from "@/constants/whatsapp";
import { AmortizationSchedule } from "./components/AmortizationSchedule";
import { downloadEmiOverviewPdf } from "./components/DownloadEmiPdf";
import { EmiResultCard } from "./components/EmiResultCard";
import { LoanInputField } from "./components/LoanInputField";
import { LoanTypeSelector } from "./components/LoanTypeSelector";
import { formatCurrency, formatNumber } from "./components/format";

export function EmiCalculator() {
  const firstLoan = emiCalculatorContent.loanTypes[0];
  const [loanType, setLoanType] = useState<LoanType>(firstLoan.id);
  const [loanAmount, setLoanAmount] = useState(firstLoan.defaultAmount);
  const [interestRate, setInterestRate] = useState(firstLoan.defaultRate);
  const [tenure, setTenure] = useState(firstLoan.defaultTenure);
  const [isDownloading, setIsDownloading] = useState(false);

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

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      downloadEmiOverviewPdf({
        loan: selectedLoan,
        result,
        interestRate,
        tenure,
      });
    } finally {
      window.setTimeout(() => setIsDownloading(false), 700);
    }
  };

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
    const whatsappUrl = `https://wa.me/${whatsappContent.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="emi-calculator"
      className="relative isolate overflow-hidden border-y border-border bg-background py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-36 top-20 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm"
          >
            <Calculator className="h-4 w-4" />
            {emiCalculatorContent.eyebrow}
            <span className="mx-1 h-1 w-1 rounded-full bg-accent" />
            <Sparkles className="h-3.5 w-3.5 text-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Plan smarter.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Borrow confidently.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.09 }}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base"
          >
            {emiCalculatorContent.description} Adjust the details and see your
            repayment estimate update instantly.
          </motion.p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Free to use
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calculator className="h-4 w-4 text-primary" />
              Instant estimates
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ArrowUpRight className="h-4 w-4 text-primary" />
              Downloadable report
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-[28px] border border-border/80 bg-card/90 shadow-[0_28px_90px_-48px_rgba(15,23,42,0.38)] backdrop-blur"
        >
          <div className="border-b border-border/80 p-5 sm:p-7 lg:p-8">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  Step 01
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">
                  What type of loan do you need?
                </h3>
              </div>
              <p className="text-xs text-muted-foreground">
                Choose a category to get started
              </p>
            </div>
            <LoanTypeSelector
              loans={emiCalculatorContent.loanTypes}
              value={loanType}
              onChange={handleLoanTypeChange}
            />
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
            <div className="min-w-0 p-5 sm:p-7 lg:p-8">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    Step 02
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">
                    Customize your loan
                  </h3>
                </div>
                <span className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                  {selectedLoan.label}
                </span>
              </div>
              <p className="mb-5 max-w-xl text-sm leading-6 text-muted-foreground">
                {selectedLoan.description}
              </p>
              <div className="space-y-4">
                <LoanInputField
                  id="loan-amount"
                  label="Loan amount"
                  value={loanAmount}
                  min={selectedLoan.minAmount}
                  max={selectedLoan.maxAmount}
                  step={5000}
                  prefix="₹"
                  displayMin={`₹${formatNumber(selectedLoan.minAmount)}`}
                  displayMax={`₹${formatNumber(selectedLoan.maxAmount)}`}
                  helper="How much do you plan to borrow?"
                  onChange={setLoanAmount}
                />
                <LoanInputField
                  id="interest-rate"
                  label="Annual interest rate"
                  value={interestRate}
                  min={selectedLoan.minRate}
                  max={selectedLoan.maxRate}
                  step={0.1}
                  suffix="%"
                  displayMin={`${selectedLoan.minRate}%`}
                  displayMax={`${selectedLoan.maxRate}%`}
                  helper="Use an estimated annual rate for planning."
                  onChange={setInterestRate}
                />
                <LoanInputField
                  id="loan-tenure"
                  label="Loan tenure"
                  value={tenure}
                  min={selectedLoan.minTenure}
                  max={selectedLoan.maxTenure}
                  step={1}
                  suffix="mo"
                  displayMin={`${selectedLoan.minTenure} months`}
                  displayMax={`${selectedLoan.maxTenure} months`}
                  helper={`Approximately ${formatNumber(tenure / 12)} years at the selected tenure.`}
                  onChange={(value) => setTenure(Math.round(value))}
                />
              </div>
              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-muted/60 p-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <p className="text-xs leading-5 text-muted-foreground">
                  Your estimate is calculated from the values you enter. No
                  personal or financial account details are required to use this
                  calculator.
                </p>
              </div>
            </div>

            <div className="min-w-0 border-t border-border/80 bg-gradient-to-b from-primary/[0.035] to-accent/[0.045] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
              <EmiResultCard
                result={result}
                loanLabel={selectedLoan.label}
                tenure={tenure}
                onDownload={handleDownload}
                isDownloading={isDownloading}
              />
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Discuss your loan{" "}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f7b6f] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp us{" "}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-border/80 p-4 sm:px-7 sm:py-5 lg:px-8">
            <AmortizationSchedule rows={result.amortization} tenure={tenure} />
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-4xl text-center text-[11px] leading-5 text-muted-foreground sm:text-xs">
          {emiCalculatorContent.disclaimer}
        </p>
      </div>
    </section>
  );
}
