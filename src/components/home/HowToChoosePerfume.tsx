import Link from "next/link";
import Image from "next/image";

const tips = [
  {
    num: "1",
    title: "Start with the Scents You Already Enjoy",
    description: "Think about the fragrances you naturally gravitate towards. Do you enjoy fresh citrus scents? Are you drawn to warm vanilla, soft florals, woody notes or rich amber compositions? Identifying the scent profiles you enjoy can help you narrow down your choices.",
  },
  {
    num: "2",
    title: "Understand Fragrance Notes",
    description: "Perfumes are commonly described through three layers: Top notes (first impression), Heart notes (the central character), and Base notes (the deeper, lingering foundation).",
  },
  {
    num: "3",
    title: "Consider When You Plan to Wear It",
    description: "A fragrance you enjoy for an evening occasion may not be the same one you prefer for everyday use. Fresh and lighter compositions suit daytime wear, while warmer, richer profiles shine in the evenings.",
  },
  {
    num: "4",
    title: "Think About Fragrance Concentration",
    description: "Perfumes come in different concentrations, including Eau de Toilette, Eau de Parfum and Extrait de Parfum. Higher concentrations generally offer richer depth and longevity on skin.",
  },
  {
    num: "5",
    title: "Remember That Fragrance Is Personal",
    description: "The way a perfume smells can vary between people. Skin chemistry, weather, application and the fragrance itself can all influence your experience. Choose a fragrance because you enjoy wearing it, not simply because it is popular.",
  },
];

export function HowToChoosePerfume() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold block">
              Fragrance Guidance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241915] font-normal leading-tight">
              How to Choose a Perfume That Suits You
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A46A]" />

            <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
              Buying a perfume is easier when you understand what you enjoy. Fragrance descriptions can help you narrow down your options, but your personal preferences should always come first. Here are a few things to consider when choosing your next fragrance.
            </p>

            <div className="space-y-4 pt-2">
              {tips.map((tip) => (
                <div key={tip.num} className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                  <h3 className="font-serif text-base text-[#241915]">
                    {tip.num}. {tip.title}
                  </h3>
                  <p className="text-xs text-[#89796F] font-light leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-block px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
              >
                Explore Our Fragrance Collection
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden bg-[#241915] border border-[#E5DCD3] shadow-sm">
            <Image
              src="/images/products/khair-pistachio.jpeg"
              alt="Perfume bottles featuring different fragrance styles"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
