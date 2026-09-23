import { notFound } from "next/navigation";

import { loansContent } from "@/constants/loans";

import { LoanDetailHero } from "@/components/sections/loans/detail/LoanDetailHero";
import { LoanDetailOverview } from "@/components/sections/loans/detail/LoanDetailOverview";
import { LoanDetailBenefits } from "@/components/sections/loans/detail/LoanDetailBenefits";
import { LoanDetailSuitableFor } from "@/components/sections/loans/detail/LoanDetailSuitableFor";
import { LoanDetailUseCases } from "@/components/sections/loans/detail/LoanDetailUseCases";
import { LoanDetailEligibility } from "@/components/sections/loans/detail/LoanDetailEligibility";
import { LoanDetailDocuments } from "@/components/sections/loans/detail/LoanDetailDocuments";
import { LoanDetailProcess } from "@/components/sections/loans/detail/LoanDetailProcess";
import { LoanDetailFaq } from "@/components/sections/loans/detail/LoanDetailFaq";
import { LoanDetailCta } from "@/components/sections/loans/detail/LoanDetailCta";

type LoanDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LoanDetailPage({ params }: LoanDetailPageProps) {
  const { id } = await params;

  const loan = loansContent.products.find((product) => product.id === id);

  if (!loan) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <LoanDetailHero loan={loan} />

      <LoanDetailOverview loan={loan} />

      <LoanDetailBenefits loan={loan} />

      <LoanDetailSuitableFor loan={loan} />

      <LoanDetailUseCases loan={loan} />

      <LoanDetailEligibility loan={loan} />

      <LoanDetailDocuments loan={loan} />

      <LoanDetailProcess loan={loan} />

      <LoanDetailFaq loan={loan} />

      <LoanDetailCta loan={loan} />
    </main>
  );
}
