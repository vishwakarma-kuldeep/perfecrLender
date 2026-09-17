import Image from "next/image";
import Link from "next/link";
import { navigationCta, navigationItems } from "@/constants/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Brand */}
        {/* <Link
          href="/"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Perfect Lender home"
        >
          <span className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
            Perfect<span className="text-primary">Lender</span>
          </span>
        </Link> */}
        <Link
          href="/"
          aria-label="Perfect Lender home"
          className="group flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Image
            src="/images/logo3.png"
            alt=""
            aria-hidden="true"
            width={48}
            height={48}
            priority
            className="h-9 w-9 object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03] group-active:scale-[0.98] sm:h-10 sm:w-10"
          />

          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-foreground sm:text-lg">
              Perfect Lender
            </span>

            <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Choose Best For You
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {item.label}

                {item.children && (
                  <span
                    aria-hidden="true"
                    className="text-xs transition-transform duration-300 group-hover:rotate-180"
                  >
                    ▾
                  </span>
                )}
              </Link>

              {/* Desktop Dropdown */}
              {item.children && (
                <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-xl border border-border bg-card p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Always visible — including mobile */}
          <ThemeToggle />

          {/* Desktop CTA */}
          <Link
            href={navigationCta.href}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:inline-flex"
          >
            {navigationCta.label}
          </Link>

          {/* Mobile Menu */}
          <MobileNav items={navigationItems} cta={navigationCta} />
        </div>
      </div>
    </header>
  );
}
