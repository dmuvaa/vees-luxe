import { Product } from "@/types/product";

export interface HeroEditorialSlide {
  slug: string;
  product: Product;
  imageUrl: string;
}

const HERO_IMAGE_CONFIG: { slug: string; imageUrl: string }[] = [
  { slug: "his-confession", imageUrl: "/images/his-confession-bg-free.png" },
  { slug: "afeef", imageUrl: "/images/afeef-bgfree.png" },
  { slug: "asad", imageUrl: "/images/asad-lattafa-bgfree.png" },
  { slug: "club-de-nuit-intense", imageUrl: "/images/club-de-nuit-bgfree.png" },
  { slug: "shiyaaka-shadow", imageUrl: "/images/shiyaaka-bg-free.png" },
  { slug: "shiyaaka-sky", imageUrl: "/images/shiyaaka-sky-bgfree.webp" },
];

export function buildHeroEditorialSlides(products: Product[]): HeroEditorialSlide[] {
  return HERO_IMAGE_CONFIG.map((config) => {
    const product = products.find((p) => p.slug === config.slug);
    if (!product) return null;
    return {
      slug: config.slug,
      product,
      imageUrl: config.imageUrl,
    };
  }).filter((s): s is HeroEditorialSlide => Boolean(s));
}