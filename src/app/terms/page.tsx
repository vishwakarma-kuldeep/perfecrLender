import { TermsCta } from "@/components/sections/terms/TermsCta";
import { TermsHero } from "@/components/sections/terms/TermsHero";
import { TermsOverview } from "@/components/sections/terms/TermsOverview";
import { TermsSections } from "@/components/sections/terms/TermsSections";

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
