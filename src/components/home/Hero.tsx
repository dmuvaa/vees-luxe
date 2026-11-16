import { HeroShowcase } from "@/components/home/HeroShowcase";
import type { HeroEditorialSlide } from "@/data/hero-slides";

interface HeroProps {
  slides: HeroEditorialSlide[];
}

export function Hero({ slides }: HeroProps) {
  return <HeroShowcase slides={slides} />;
}