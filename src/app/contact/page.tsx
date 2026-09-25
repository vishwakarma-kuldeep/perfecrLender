import type { Metadata } from 'next';
import { ContactHero } from "@/components/sections/contact-hero";
import { LoanApplicationForm } from "@/components/sections/loan-application-form";
import { ContactInfo } from "@/components/sections/contact-info";

export const metadata: Metadata = { title: 'Contact Us', description: 'Get in touch with Perfect Lender for personalized loan solutions. Reach out via phone, email, or visit our office.' };

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <LoanApplicationForm />
      <ContactInfo />
    </>
  );
}
