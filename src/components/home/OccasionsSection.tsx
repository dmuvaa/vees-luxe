import Link from "next/link";
import { Sun, Briefcase, Moon, Gift } from "lucide-react";

const occasions = [
  {
    icon: Sun,
    title: "Everyday Fragrances",
    description: "Find a fragrance that fits naturally into your daily routine. Explore fresh, clean, soft and versatile scent profiles that work well for everyday settings.",
  },
  {
    icon: Briefcase,
    title: "Office and Professional Settings",
    description: "Discover balanced fragrances that complement a professional environment. Consider fresh, woody, musky and subtle floral compositions depending on your preferences.",
  },
  {
    icon: Moon,
    title: "Evening and Special Occasions",
    description: "For celebrations, dinners and memorable evenings, explore richer compositions featuring amber, woods, spices, vanilla and other expressive notes.",
  },
  {
    icon: Gift,
    title: "Gifts and Celebrations",
    description: "A thoughtfully selected fragrance can make a meaningful gift. Explore our collection when shopping for birthdays, anniversaries, celebrations and other special moments.",
  },
];

export function OccasionsSection() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Versatility
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            One Collection. Different Moments.
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            The fragrance you choose can change with your plans, mood and personal style. Explore scents that complement different moments in your day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occ) => {
            const Icon = occ.icon;
            return (
              <div
                key={occ.title}
                className="p-8 bg-[#FFFDF9] border border-[#E5DCD3] space-y-4 hover:border-[#1e3a2f] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-[#F0EAE1] flex items-center justify-center text-[#241915]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg text-[#241915]">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-[#89796F] font-light leading-relaxed">
                    {occ.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="inline-block px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
          >
            Find Your Next Fragrance
          </Link>
        </div>
      </div>
    </section>
  );
}
