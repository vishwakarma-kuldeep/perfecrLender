"use client";

import { motion } from "motion/react";
import { AtSign, MapPin, Navigation, Phone } from "lucide-react";

import { contactContent } from "@/constants/contact";

export function ContactInfo() {
  const { contactDetails, map } = contactContent;

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact information */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Contact details */}
            <div>
              <span className="text-sm font-medium text-primary">
                {contactDetails.eyebrow}
              </span>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {contactDetails.title}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                {contactDetails.description}
              </p>

              <div className="mt-8 space-y-4">
                {/* Address */}
                <div className="rounded-2xl border border-border bg-card p-5 shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin aria-hidden="true" className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {contactDetails.address.label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {contactDetails.address.value}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href={contactDetails.phone.href}
                  className="group block rounded-2xl border border-border bg-card p-5 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Phone aria-hidden="true" className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {contactDetails.phone.label}
                      </p>

                      <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground">
                        {contactDetails.phone.value}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={contactDetails.email.href}
                  className="group block rounded-2xl border border-border bg-card p-5 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <AtSign aria-hidden="true" className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {contactDetails.email.label}
                      </p>

                      <p className="mt-2 break-all text-sm text-muted-foreground group-hover:text-foreground">
                        {contactDetails.email.value}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <div className="border-b border-border p-6 sm:p-7">
                <span className="text-sm font-medium text-primary">
                  {map.eyebrow}
                </span>

                <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
                  {map.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {map.description}
                </p>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
                <iframe
                  src={map.embedUrl}
                  title={map.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="border-t border-border p-5 sm:p-6">
                <a
                  href={map.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
                >
                  <Navigation aria-hidden="true" className="h-4 w-4" />

                  {map.mapButtonLabel}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
