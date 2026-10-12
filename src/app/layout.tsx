import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { WhatsAppButton } from "@/components/sections/whatsapp/WhatsAppButton";
import { EmiCalculatorTrigger } from "@/components/sections/emi-calculator/EmiCalculatorTrigger";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perfectlender.in"),

  title: {
    default: "Perfect Lender | Your Trusted Financial Partner",
    template: "%s | Perfect Lender",
  },

  description:
    "Perfect Lender connects applicants with banks and NBFCs for personal, business, home, mortgage, and auto loans, without consulting fees charged by us.",

  keywords: [
    "Perfect Lender",
    "loans",
    "loan connection service",
    "business loan",
    "home loan",
    "mortgage loan",
    "personal loan",
    "auto loan",
    "financial solutions",
    "loans in Ahmedabad",
    "loans in Gujarat",
  ],

  applicationName: "Perfect Lender",

  authors: [
    {
      name: "Perfect Lender",
      url: "https://perfectlender.in",
    },
  ],

  creator: "Perfect Lender",
  publisher: "Perfect Lender",

  category: "finance",

  /*
   * Browser / Mobile Icons
   *
   * icon.png should be inside:
   * public/icon.png
   */
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: ["/icon.png"],
    apple: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://perfectlender.in",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://perfectlender.in",
    siteName: "Perfect Lender",

    title: "Perfect Lender | Your Trusted Financial Partner",

    description:
      "Explore Personal, Business, Home, Mortgage, and Auto Loan options with Perfect Lender.",

    images: [
      {
        url: "/icon.png",
        alt: "Perfect Lender Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Perfect Lender | Your Trusted Financial Partner",

    description:
      "Explore personal, business, home, mortgage, and auto loan options with Perfect Lender.",

    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <EmiCalculatorTrigger />

          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
