import Link from "next/link";
import { brandPageHref } from "@/lib/brand-url";

const houses = [
  {
    name: "Lattafa",
    slug: "lattafa",
    description: "Explore an extensive world of Arabic fragrances, including sweet, woody, fresh, amber and gourmand-inspired compositions.",
    cta: "Shop Lattafa",
  },
  {
    name: "Afnan",
    slug: "afnan",
    description: "Discover fragrances that combine different scent influences, with options ranging from fresh and aromatic to warm and woody.",
    cta: "Shop Afnan",
  },
  {
    name: "Paris Corner",
    slug: "paris-corner",
    description: "Explore expressive fragrance compositions and discover different scent profiles from this growing perfume house.",
    cta: "Shop Paris Corner",
  },
  {
    name: "Maison Alhambra",
    slug: "maison-alhambra",
    description: "Discover a varied selection of fragrances and explore different styles for your collection.",
    cta: "Shop Maison Alhambra",
  },
  {
    name: "Khadlaj",
    slug: "khadlaj",
    description: "Explore fragrances from Khadlaj and discover its range of distinctive compositions.",
    cta: "Shop Khadlaj",
  },
  {
    name: "Armaf",
    slug: "armaf",
    description: "Discover fragrances from Armaf, with options for different preferences and occasions.",
    cta: "Shop Armaf",
  },
];

export function FeaturedHouses() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Perfumery Houses
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            Explore Fragrances from Recognised Perfume Houses
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            Discover a variety of fragrance styles from selected perfume houses available at Vee&apos;s Luxe Foundry. Our collection brings together different approaches to perfumery, giving you more ways to explore the scents you enjoy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map((house) => (
            <div
              key={house.name}
              className="p-8 bg-[#FFFDF9] border border-[#E5DCD3] flex flex-col justify-between space-y-4 hover:border-[#1e3a2f] transition-all"
            >
              <div className="space-y-3">
                <span className="font-serif text-2xl text-[#241915] block">
                  {house.name}
                </span>
                <p className="text-xs text-[#89796F] font-light leading-relaxed">
                  {house.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DCD3]">
                <Link
                  href={brandPageHref(house.slug)}
                  className="text-xs uppercase tracking-wider text-[#1e3a2f] font-semibold hover:underline"
                >
                  {house.cta} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="inline-block px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
          >
            Explore All Brands
          </Link>
        </div>
      </div>
    </section>
  );
}
