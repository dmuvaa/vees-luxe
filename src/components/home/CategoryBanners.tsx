import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Arabic Perfumes",
    tagline: "Opulent Ouds, Ambers & Spices",
    description: "Lattafa, Afnan, Paris Corner, Armaf, and Khadlaj. Scent longevity that commands attention.",
    href: "/shop/arabic-perfumes",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Designer Fragrances",
    tagline: "Timeless Luxury Signatures",
    description: "Iconic masterworks from the world's premier fragrance houses for modern sophistication.",
    href: "/shop/designer-perfumes",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=900",
  },
  {
    title: "Bath & Body Works",
    tagline: "Everyday Scent Pampering",
    description: "Nourishing mists and body creams for alluring, long-lasting daytime scent layering.",
    href: "/shop/bath-and-body-works",
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=900",
  },
];

export function CategoryBanners() {
  return (
    <section className="py-20 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
            Shop by Fragrance Category
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative block aspect-[3/4] overflow-hidden bg-[#241915] shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241915] via-[#241915]/40 to-transparent" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-[#F8F4ED]">
                <div className="space-y-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-sm uppercase tracking-widest text-[#C6A46A] font-medium block">
                    {cat.tagline}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F8F4ED]">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#D9C2B8] line-clamp-2 font-light leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2 flex items-center space-x-2 text-xs uppercase tracking-widest text-[#C6A46A] font-medium">
                    <span>Explore Collection</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
