import type { Metadata } from 'next';
import { LoanProducts } from "@/components/sections/loans/LoanProducts";
import { LoansHero } from "@/components/sections/loans/LoansHero";
import { LoanHighlights } from "@/components/sections/loans/LoanHighlights";
import { LoanProcess } from "@/components/sections/loans/LoanProcess";
import { LoanEligibility } from "@/components/sections/loans/LoanEligibility";
import { LoanDocuments } from "@/components/sections/loans/LoanDocuments";
import { LoanFaq } from "@/components/sections/loans/LoanFaq";
import { LoanCta } from "@/components/sections/loans/LoanCta";

export const metadata: Metadata = { title: 'Our Loan Products', description: 'Explore our range of loan products including business, home, mortgage, personal, and vehicle loans.' };

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
