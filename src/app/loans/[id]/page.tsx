import { notFound } from "next/navigation";
import { loansContent } from "@/constants/loans";

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
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-primary">{loan.eyebrow}</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {loan.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {loan.longDescription}
        </p>
      </section>
    </main>
  );
}
