import type { Metadata } from 'next';
import { TermsCta } from "@/components/sections/terms/TermsCta";
import { TermsHero } from "@/components/sections/terms/TermsHero";
import { TermsOverview } from "@/components/sections/terms/TermsOverview";
import { TermsSections } from "@/components/sections/terms/TermsSections";

export const metadata: Metadata = { title: 'Terms & Conditions', description: 'Review Perfect Lender\'s terms and conditions governing the use of our services and loan products.' };

export default function TermsAndConditionsPage() {
  return (
    <>
      <TermsHero />
      <TermsOverview />
      <TermsSections />
      <TermsCta />
    </>
  );
}
