import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ContactHero } from "@/components/sections/contact-hero";
import { LoanApplicationForm } from "@/components/sections/loan-application-form";
import { ContactInfo } from "@/components/sections/contact-info";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <ContactHero />
        <LoanApplicationForm />
        <ContactInfo />
      </main>
    </div>
  );
}
