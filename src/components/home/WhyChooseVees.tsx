import Image from "next/image";

const reasons = [
  {
    title: "A Carefully Selected Collection",
    description: "We bring together fragrances from different perfume houses and categories, giving you the opportunity to explore different scent profiles in one place.",
  },
  {
    title: "Fragrances for Different Personalities",
    description: "Love fresh and clean scents? Prefer something sweet, warm or woody? Our collection is designed to offer different fragrance experiences rather than a single definition of luxury.",
  },
  {
    title: "Options for Different Occasions",
    description: "Discover fragrances for work, casual outings, celebrations, evenings and special moments. The right fragrance depends on your preferences and the occasion.",
  },
  {
    title: "A Personal Approach to Fragrance",
    description: "Not sure which scent to choose? We welcome questions about our collection and can help you explore the available options.",
  },
  {
    title: "Convenient Shopping in Nairobi",
    description: "Discover our fragrance collection online and contact us to enquire or place an order. We make it easier to shop for perfumes without having to navigate multiple stores.",
  },
];

export function WhyChooseVees() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            The Vee&apos;s Luxe Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            More Than a Perfume Shop. A Fragrance Experience.
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            Choosing a fragrance is personal. The scent you wear can complement your mood, reflect your personality and become part of how people remember you. At Vee&apos;s Luxe Foundry, we want discovering that fragrance to feel just as enjoyable as wearing it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Visual Frame */}
          <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden bg-[#241915] border border-[#E5DCD3] shadow-sm">
            <Image
              src="/images/products/her-confession.jpeg"
              alt="Luxury fragrance collection from Vee's Luxe Foundry"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover object-center"
            />
          </div>

          {/* Supporting blocks */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.slice(0, 4).map((r) => (
                <div key={r.title} className="p-6 bg-[#FFFDF9] border border-[#E5DCD3] space-y-2">
                  <h3 className="font-serif text-base text-[#241915]">
                    {r.title}
                  </h3>
                  <p className="text-xs text-[#89796F] font-light leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#FFFDF9] border border-[#E5DCD3] space-y-2">
              <h3 className="font-serif text-base text-[#241915]">
                {reasons[4].title}
              </h3>
              <p className="text-xs text-[#89796F] font-light leading-relaxed">
                {reasons[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
