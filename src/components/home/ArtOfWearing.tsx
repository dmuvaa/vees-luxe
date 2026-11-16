import Image from "next/image";

const rituals = [
  {
    title: "Apply to Pulse Points",
    description: "Many people prefer applying perfume to areas such as the wrists and neck. These areas can help make the fragrance noticeable throughout the day.",
  },
  {
    title: "Avoid Rubbing Your Wrists Together",
    description: "Allow your fragrance to settle naturally after application rather than vigorously rubbing the area, which can break down delicate top notes.",
  },
  {
    title: "Store Your Perfume Properly",
    description: "Keep your perfumes away from direct sunlight, excessive heat and unnecessary humidity. A cool, dry place preserves the precious oils.",
  },
  {
    title: "Explore Fragrance Layering",
    description: "Some people enjoy combining complementary scented products to create a more personal fragrance routine. Start with compatible profiles.",
  },
  {
    title: "Give Your Fragrance Time to Develop",
    description: "A perfume smells different immediately after application compared with how it smells later. Allow the scent to develop before deciding.",
  },
];

export function ArtOfWearing() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden bg-[#241915] border border-[#E5DCD3] shadow-sm">
            <Image
              src="/images/products/his-confession.jpeg"
              alt="Warm woody and amber fragrance collection"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold block">
              Application Rituals
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241915] font-normal leading-tight">
              Make Every Spray Count
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A46A]" />

            <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
              A great fragrance deserves thoughtful application. How you apply and store your perfume can influence your overall fragrance experience.
            </p>

            <div className="space-y-3 pt-2">
              {rituals.map((r) => (
                <div key={r.title} className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                  <h3 className="font-serif text-base text-[#241915] font-medium">
                    {r.title}
                  </h3>
                  <p className="text-xs text-[#89796F] font-light leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
