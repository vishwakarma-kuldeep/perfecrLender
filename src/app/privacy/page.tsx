import type { Metadata } from 'next';
import { PrivacyCta } from "@/components/sections/privacy/PrivacyCta";
import { PrivacyHero } from "@/components/sections/privacy/PrivacyHero";
import { PrivacyOverview } from "@/components/sections/privacy/PrivacyOverview";
import { PrivacySections } from "@/components/sections/privacy/PrivacySections";

export const metadata: Metadata = { title: 'Privacy Policy', description: 'Read Perfect Lender\'s privacy policy to understand how we collect, use, and protect your personal information.' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyOverview />
      <PrivacySections />
      <PrivacyCta />
    </>
  );
}
