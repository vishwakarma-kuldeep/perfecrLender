import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeLoanProducts } from "@/components/sections/home-loan-products";
import { HomeWhyChooseUs } from "@/components/sections/home-why-choose-us";
import { HomeTrust } from "@/components/sections/home-trust";
import { HomeCta } from "@/components/sections/home-cta";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HomeHero />
        <HomeLoanProducts />
        <HomeWhyChooseUs />
        <HomeTrust />
        <HomeCta />
      </main>
    </>
  );
}
