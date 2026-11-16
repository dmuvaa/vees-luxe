import Link from "next/link";
import { Gift, Heart, Sparkles, Smile } from "lucide-react";

const giftCategories = [
  {
    icon: Gift,
    title: "Birthday Gifts",
    description: "Find something special for someone who enjoys fragrance and personal style.",
  },
  {
    icon: Heart,
    title: "Anniversary Gifts",
    description: "Explore elegant fragrance options for a memorable occasion.",
  },
  {
    icon: Sparkles,
    title: "Celebrations & Milestones",
    description: "Discover perfumes and body care favourites for graduations, promotions and holidays.",
  },
  {
    icon: Smile,
    title: "Just Because",
    description: "Sometimes the best gifts do not need a special occasion. Find something that makes an ordinary day feel a little more special.",
  },
];

export function GiftGuide() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Thoughtful Gifting
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            Give a Gift Worth Remembering
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            A fragrance can be a thoughtful way to celebrate someone, mark an occasion or simply show appreciation. Whether you are shopping for a birthday, anniversary, celebration or personal milestone, a carefully chosen perfume can make a meaningful gift.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {giftCategories.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="p-8 bg-[#FFFDF9] border border-[#E5DCD3] space-y-4 hover:border-[#1e3a2f] transition-all"
              >
                <div className="w-10 h-10 bg-[#F0EAE1] flex items-center justify-center text-[#241915]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-[#241915]">
                  {g.title}
                </h3>
                <p className="text-xs text-[#89796F] font-light leading-relaxed">
                  {g.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="inline-block px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
          >
            Explore Gift-Worthy Fragrances
          </Link>
        </div>
      </div>
    </section>
  );
}
