import Link from "next/link";

const personas = [
  {
    title: "For the Fresh Fragrance Lover",
    description: "Explore citrus, aquatic and aromatic compositions that offer a clean and refreshing scent experience.",
    href: "/shop?family=Fresh",
  },
  {
    title: "For the Sweet Fragrance Lover",
    description: "Discover vanilla, fruity, caramel and gourmand-inspired fragrances with a warmer, sweeter character.",
    href: "/shop?family=Gourmand",
  },
  {
    title: "For the Lover of Deep Fragrances",
    description: "Explore woody, amber, oud and spicy compositions that offer depth and character.",
    href: "/shop?family=Oud",
  },
  {
    title: "For the Floral Fragrance Lover",
    description: "Discover fragrances featuring rose, jasmine and other floral notes, from soft and delicate to rich and expressive.",
    href: "/shop?family=Floral",
  },
  {
    title: "For the Fragrance Collector",
    description: "Explore different perfume houses, scent families and fragrance styles to expand your personal collection.",
    href: "/shop",
  },
];

export function FragrancePersonalities() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Individual Expression
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            Your Scent. Your Expression.
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            There is no single way to enjoy fragrance. Some people prefer light and refreshing compositions. Others gravitate towards bold, warm and distinctive scents. At Vee&apos;s Luxe Foundry, we believe fragrance should be explored without unnecessary rules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.title}
              className="p-8 bg-[#FFFDF9] border border-[#E5DCD3] space-y-3 flex flex-col justify-between hover:border-[#1e3a2f] transition-all"
            >
              <div className="space-y-2">
                <h3 className="font-serif text-lg text-[#241915]">
                  {p.title}
                </h3>
                <p className="text-xs text-[#89796F] font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href={p.href}
                  className="text-xs text-[#1e3a2f] font-semibold uppercase tracking-wider hover:underline"
                >
                  Explore &rarr;
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
            Find Your Fragrance
          </Link>
        </div>
      </div>
    </section>
  );
}
