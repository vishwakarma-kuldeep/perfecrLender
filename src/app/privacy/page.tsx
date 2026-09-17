import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { PrivacyCta } from "@/components/sections/privacy/PrivacyCta";
import { PrivacyHero } from "@/components/sections/privacy/PrivacyHero";
import { PrivacyOverview } from "@/components/sections/privacy/PrivacyOverview";
import { PrivacySections } from "@/components/sections/privacy/PrivacySections";

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
