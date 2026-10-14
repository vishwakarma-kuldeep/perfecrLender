import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { footerContent } from "@/constants/footer";

export function Footer() {
  const { brand, contact, linkGroups, legalLinks, socialLinks } = footerContent;

  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[1.25fr_0.8fr_1fr_1fr] lg:gap-10">
          {/* Brand + Contact */}
          <div className="max-w-md">
            {/* <Link
              href="/"
              aria-label="Perfect Lender home"
              className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <img
                src={brand.logo}
                alt={brand.logoAlt}
                className="h-10 w-auto object-contain"
              />
            </Link> */}
            <Link
              href="/"
              aria-label="Perfect Lender home"
              className="group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <Image
                src={brand.logo}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />

              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-secondary-foreground">
                  Perfect Lender
                </span>

                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] text-secondary-foreground/60">
                  Choose Best For You
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-secondary-foreground/70">
              {brand.description}
            </p>

            {/* Contact */}
            <div className="mt-7 space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />

                <address className="not-italic text-sm leading-6 text-secondary-foreground/70">
                  {contact.address}
                </address>
              </div>

              {/* Phone */}
              <Link
                href={contact.phoneHref}
                className="group flex items-center gap-3 text-sm text-secondary-foreground/70 transition-colors duration-300 hover:text-accent"
              >
                <Phone
                  className="size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />

                <span>{contact.phone}</span>

                <ArrowUpRight
                  className="size-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>

              {/* Email */}
              <Link
                href={contact.emailHref}
                className="group flex items-center gap-3 text-sm text-secondary-foreground/70 transition-colors duration-300 hover:text-accent"
              >
                <Mail
                  className="size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />

                <span className="break-all">{contact.email}</span>

                <ArrowUpRight
                  className="size-3.5 shrink-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Social Media */}
            {socialLinks.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary-foreground/50">
                  Follow Us
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-xl border border-secondary-foreground/10 bg-secondary-foreground/5 text-secondary-foreground/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-4.5"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold tracking-wide text-secondary-foreground">
                {group.title}
              </h2>

              <ul className="mt-5 space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-secondary-foreground/70 transition-colors duration-300 hover:text-accent"
                    >
                      {link.label}

                      <ArrowUpRight
                        size={13}
                        aria-hidden="true"
                        className="translate-y-0 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact CTA */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-secondary-foreground">
              Need Help?
            </p>

            <p className="mt-4 text-sm leading-7 text-secondary-foreground/70">
              Have a question about a loan or your financial requirement? Get in
              touch with our team.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Us
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-5 border-t border-secondary-foreground/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-secondary-foreground/60">
            {footerContent.copyright}
          </p>

          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-secondary-foreground/60 transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
