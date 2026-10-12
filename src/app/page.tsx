import { HomeHero } from "@/components/sections/home-hero";
import { HomeLoanProducts } from "@/components/sections/home-loan-products";
import { HomeWhyChooseUs } from "@/components/sections/home-why-choose-us";
import { HomeTrust } from "@/components/sections/home-trust";
import { HomeCta } from "@/components/sections/home-cta";
import { HomeHighlights } from "@/components/sections/home-highlights";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeHighlights />
      <HomeLoanProducts />
      <HomeWhyChooseUs />
      <HomeTrust />
      <HomeCta />
    </>
  );
}
