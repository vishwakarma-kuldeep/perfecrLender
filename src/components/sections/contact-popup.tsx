"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Landmark,
  MessageCircle,
  UserRound,
  Wallet,
  X,
} from "lucide-react";

import { LoanApplicationForm } from "@/components/sections/loan-application-form";

const purposes = [
  {
    title: "A loan option that fits your profile",
    description:
      "We are not a lender. We help connect you with a bank or NBFC that may suit your profile and financial requirement.",
    icon: Landmark,
  },
  {
    title: "No consulting fees",
    description:
      "We do not charge consulting fees. Any charges from a selected bank or NBFC are separate and subject to its terms.",
    icon: Wallet,
  },
  {
    title: "Explore combining your dues",
    description:
      "Ask us about combining eligible loan balances and credit card dues into one loan without closing your credit cards. Lender approval and terms apply.",
    icon: CreditCard,
  },
  {
    title: "Personal support for your loan enquiry",
    description:
      "Share your details and we can help you explore personal, business, home, mortgage, and auto loan options from banks and NBFCs.",
    icon: UserRound,
  },
] as const;

export function ContactPopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"highlights" | "contact">("highlights");
  const [purposeIndex, setPurposeIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      const storedIndex = window.sessionStorage.getItem(
        "contact-popup-purpose-index",
      );
      const previousIndex =
        storedIndex === null ? Number.NaN : Number(storedIndex);
      const nextIndex =
        Number.isInteger(previousIndex) &&
        previousIndex >= 0 &&
        previousIndex < purposes.length
          ? (previousIndex + 1) % purposes.length
          : Math.floor(Math.random() * purposes.length);

      window.sessionStorage.setItem(
        "contact-popup-purpose-index",
        String(nextIndex),
      );
      setPurposeIndex(nextIndex);
      setOpen(true);
    }, 2500);

    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current
      ?.querySelector<HTMLElement>("input, select, textarea, button")
      ?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const purpose = purposes[purposeIndex];
  const PurposeIcon = purpose.icon;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          setStep("highlights");
          setOpen(true);
        }}
        aria-haspopup="dialog"
        className="inline-flex h-9 items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4"
      >
        <MessageCircle aria-hidden="true" className="size-4" />
        <span className="hidden sm:inline">Quick enquiry</span>
      </button>

      {open &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-6"
              role="presentation"
            >
              <motion.button
                type="button"
                aria-label="Close enquiry popup"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-foreground/30 backdrop-blur-[2px]"
              />

              <motion.div
                ref={dialogRef}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.99 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-popup-title"
                className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-border/80 bg-background shadow-2xl shadow-foreground/15"
              >
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/70 bg-background/95 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                      Perfect Lender
                    </p>
                    <h2
                      id="contact-popup-title"
                      className="mt-0.5 text-base font-semibold text-foreground"
                    >
                      {step === "highlights"
                        ? "Why choose Perfect Lender?"
                        : "Contact our team"}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close enquiry popup"
                    className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <X aria-hidden="true" className="size-4" />
                  </button>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  {step === "highlights" ? (
                    <motion.div
                      key="highlights"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.18 }}
                      className="p-4 sm:p-5"
                    >
                      <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <PurposeIcon
                              aria-hidden="true"
                              className="size-5"
                            />
                          </span>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                              How we can help
                            </p>
                            <h3 className="mt-1 text-base font-semibold text-foreground">
                              {purpose.title}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {purpose.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-3">
                        {[
                          "No consulting fees charged by us",
                          "We connect you with suitable banks and NBFCs; we are not a lender",
                          "Ask about combining eligible loans and card dues without closing your credit cards",
                        ].map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-sm leading-5 text-foreground"
                          >
                            <Check
                              aria-hidden="true"
                              className="mt-0.5 size-4 shrink-0 text-primary"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        type="button"
                        onClick={() => setStep("contact")}
                        className="group mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        Contact Us
                        <ArrowRight
                          aria-hidden="true"
                          className="size-4 transition-transform group-hover:translate-x-0.5"
                        />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.18 }}
                      className="p-3 sm:p-4"
                    >
                      <button
                        type="button"
                        onClick={() => setStep("highlights")}
                        className="mb-3 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        <ArrowLeft aria-hidden="true" className="size-4" />
                        Back
                      </button>
                      <LoanApplicationForm compact idPrefix="popup-contact" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
