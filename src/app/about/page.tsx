import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { AboutCta } from "@/components/sections/AboutCta";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutStory />

      <AboutValues />

      <AboutCta />
    </>
  );
}
