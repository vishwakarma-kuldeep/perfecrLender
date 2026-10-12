import type { Metadata } from 'next';
import { LoanProducts } from "@/components/sections/loans/LoanProducts";
import { LoansHero } from "@/components/sections/loans/LoansHero";
import { LoanHighlights } from "@/components/sections/loans/LoanHighlights";
import { LoanProcess } from "@/components/sections/loans/LoanProcess";
import { LoanEligibility } from "@/components/sections/loans/LoanEligibility";
import { LoanDocuments } from "@/components/sections/loans/LoanDocuments";
import { LoanFaq } from "@/components/sections/loans/LoanFaq";
import { LoanCta } from "@/components/sections/loans/LoanCta";

export const metadata: Metadata = { title: 'Our Loan Products', description: 'Explore Personal, Business, Home, Mortgage, and Auto Loan options with Perfect Lender.' };

export default function LoansPage() {
  return (
    <>
      <LoansHero />
      <LoanProducts />
      <LoanHighlights />
      <LoanProcess />
      <LoanEligibility />
      <LoanDocuments />
      <LoanFaq />
      <LoanCta />
    </>
  );
}
