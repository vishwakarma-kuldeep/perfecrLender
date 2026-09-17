"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";

import { whatsappContent } from "@/constants/whatsapp";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${whatsappContent.phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 12,
                scale: 0.96,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            >
              {/* Header */}
              <div className="border-b border-border px-5 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">
                      {whatsappContent.popup.title}
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {whatsappContent.popup.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close WhatsApp options"
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="max-h-[60vh] overflow-y-auto p-2">
                {whatsappContent.messages.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openWhatsApp(item.message)}
                    className="group flex w-full items-center justify-between gap-4 rounded-xl px-3 py-3 text-left transition-colors duration-200 hover:bg-muted focus-visible:bg-muted focus-visible:outline-none"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>

                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={
            isOpen ? "Close WhatsApp options" : whatsappContent.button.ariaLabel
          }
          aria-expanded={isOpen}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="group flex h-12 items-center gap-2 rounded-full border border-border bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-lg transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          {isOpen ? (
            <X className="size-5" />
          ) : (
            <MessageCircle className="size-5" />
          )}

          <span className="hidden sm:inline">
            {isOpen ? "Close" : whatsappContent.button.label}
          </span>
        </motion.button>
      </div>
    </>
  );
}
