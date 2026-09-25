import type { Metadata } from 'next';
import { AboutCta } from "@/components/sections/AboutCta";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutValues } from "@/components/sections/AboutValues";

export const metadata: Metadata = { title: 'About Us', description: 'Learn about Perfect Lender - your trusted financial partner providing flexible loan solutions across India.' };

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
