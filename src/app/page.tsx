import type { Metadata } from "next";
import { productRepository } from "@/lib/data/products";
import { Hero } from "@/components/home/Hero";
import { buildHeroEditorialSlides } from "@/data/hero-slides";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CategoryCards } from "@/components/home/CategoryCards";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ArabicPerfumesFeature } from "@/components/home/ArabicPerfumesFeature";
import { WhyChooseVees } from "@/components/home/WhyChooseVees";
import { FragranceFamilies } from "@/components/home/FragranceFamilies";
import { OccasionsSection } from "@/components/home/OccasionsSection";
import { FeaturedHouses } from "@/components/home/FeaturedHouses";
import { DesignerFeature } from "@/components/home/DesignerFeature";
import { BathAndBodyFeature } from "@/components/home/BathAndBodyFeature";
import { HowToChoosePerfume } from "@/components/home/HowToChoosePerfume";
import { UnderstandingNotes } from "@/components/home/UnderstandingNotes";
import { ArtOfWearing } from "@/components/home/ArtOfWearing";
import { BrandStoryFull } from "@/components/home/BrandStoryFull";
import { NairobiShoppingGuide } from "@/components/home/NairobiShoppingGuide";
import { FragrancePersonalities } from "@/components/home/FragrancePersonalities";
import { GiftGuide } from "@/components/home/GiftGuide";
import { CustomerTestimonials } from "@/components/home/CustomerTestimonials";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalConversion } from "@/components/home/FinalConversion";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Luxury Arabic & Designer Perfumes in Kenya | Vee's Luxe Foundry",
  description:
    "Discover luxury Arabic perfumes, designer fragrances and Bath & Body Works favourites at Vee's Luxe Foundry. Shop premium scents in Nairobi, Kenya.",
  openGraph: {
    title: "Discover Your Signature Scent | Vee's Luxe Foundry",
    description:
      "Explore a curated collection of luxury Arabic perfumes, designer fragrances and body care favourites. Find a scent that makes a statement.",
  },
};

const HOMEPAGE_FEATURED_SLUGS = [
  "asad",
  "yara",
  "badee-al-oud-amethyst",
  "teriaq",
  "his-confession",
  "her-confession",
] as const;

export default async function HomePage() {
  const catalogue = await productRepository.getAll();
  const featuredForHome = HOMEPAGE_FEATURED_SLUGS.map((slug) =>
    catalogue.find((p) => p.slug === slug)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));

  const heroSlides = buildHeroEditorialSlides(catalogue);

  return (
    <div className="space-y-0">
      <Hero slides={heroSlides} />
      <TrustStrip />
      <CategoryCards />
      <FeaturedProducts products={featuredForHome} />
      <ArabicPerfumesFeature />
      <WhyChooseVees />
      <FragranceFamilies />
      <OccasionsSection />
      <FeaturedHouses />
      <DesignerFeature />
      <BathAndBodyFeature />
      <HowToChoosePerfume />
      <UnderstandingNotes />
      <ArtOfWearing />
      <BrandStoryFull />
      <NairobiShoppingGuide />
      <FragrancePersonalities />
      <GiftGuide />
      <CustomerTestimonials />
      <InstagramGrid />
      <FAQSection />
      <FinalConversion />
      <NewsletterSection />
    </div>
  );
}