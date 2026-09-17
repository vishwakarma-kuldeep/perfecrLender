"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Calculator, X } from "lucide-react";

import { EmiCalculatorModal } from "./EmiCalculatorModal";

export function EmiCalculatorTrigger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.5,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Open EMI Calculator"
        className="fixed bottom-24 left-4 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-lg shadow-black/10 transition hover:border-primary/40 sm:bottom-6 sm:left-6"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Calculator className="h-4 w-4" />
        </span>

        <span className="hidden sm:inline">EMI Calculator</span>
      </motion.button>

      {/* Calculator Modal */}
      <EmiCalculatorModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
