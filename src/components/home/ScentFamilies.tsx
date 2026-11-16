import Link from "next/link";
import { Sparkles } from "lucide-react";

const scentFamilies = [
  { name: "Oud", description: "Deep, resinous, smoky & authoritative", slug: "Oud" },
  { name: "Gourmand", description: "Vanilla, coffee, praline & decadent sweetness", slug: "Gourmand" },
  { name: "Amber", description: "Golden warmth, rich resins & cozy allure", slug: "Amber" },
  { name: "Spicy", description: "Cinnamon, black pepper, nutmeg & cardamom", slug: "Spicy" },
  { name: "Woody", description: "Sandalwood, cedarwood, oakmoss & birch", slug: "Woody" },
  { name: "Floral", description: "Turkish rose, night-blooming jasmine & orchid", slug: "Floral" },
  { name: "Fruity", description: "Juicy peach, wild apple, mango & berries", slug: "Fruity" },
  { name: "Citrus", description: "Sparkling bergamot, lime & Italian grapefruit", slug: "Citrus" },
  { name: "Fresh", description: "Crisp aromatics, sea breeze & lavender", slug: "Fresh" },
  { name: "Musky", description: "Velvety skin musks & powdery elegance", slug: "Musky" },
];

export function ScentFamilies() {
  return (
    <section className="py-20 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Olfactory Profiles
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
            Shop by Scent Family
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#89796F] font-light">
            Whether you crave intoxicating Arabic oud or creamy bourbon vanilla, find your signature note.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {scentFamilies.map((fam) => (
            <Link
              key={fam.slug}
              href={`/shop?family=${encodeURIComponent(fam.slug)}`}
              className="p-5 bg-[#FFFDF9] border border-[#D9C2B8]/50 hover:border-[#C6A46A] hover:bg-[#38251F] group transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-lg text-[#38251F] group-hover:text-[#F8F4ED] transition-colors">
                  {fam.name}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-[#C6A46A] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-[#89796F] group-hover:text-[#D9C2B8] font-light leading-relaxed transition-colors">
                {fam.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
