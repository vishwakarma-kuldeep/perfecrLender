import { LoanProducts } from "@/components/sections/loans/LoanProducts";
import { LoansHero } from "@/components/sections/loans/LoansHero";
import { LoanHighlights } from "@/components/sections/loans/LoanHighlights";
import { LoanProcess } from "@/components/sections/loans/LoanProcess";
import { LoanEligibility } from "@/components/sections/loans/LoanEligibility";
import { LoanDocuments } from "@/components/sections/loans/LoanDocuments";
import { LoanFaq } from "@/components/sections/loans/LoanFaq";
import { LoanCta } from "@/components/sections/loans/LoanCta";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
