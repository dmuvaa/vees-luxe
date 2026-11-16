import Link from "next/link";
import Image from "next/image";

const families = [
  {
    name: "Woody",
    tagline: "Warm, earthy and sophisticated.",
    description: "Woody fragrances feature notes such as sandalwood, cedar, vetiver and oud. They can range from soft and smooth to deep and intense.",
    href: "/shop?family=Woody",
    cta: "Explore Woody Fragrances",
    image: "/images/products/vintage-radio.jpeg",
  },
  {
    name: "Oriental and Amber",
    tagline: "Warm, rich and expressive.",
    description: "Often associated with amber, spices, resins, vanilla and musk, these fragrances offer depth and warmth.",
    href: "/shop?family=Amber",
    cta: "Explore Amber Fragrances",
    image: "/images/products/badee-al-oud-amethyst.jpeg",
  },
  {
    name: "Floral",
    tagline: "Elegant, soft and expressive.",
    description: "Floral fragrances feature notes such as rose, jasmine, tuberose and other flowers. Depending on the composition, they can be fresh, powdery, sweet or rich.",
    href: "/shop?family=Floral",
    cta: "Explore Floral Fragrances",
    image: "/images/products/delilah-pour-femme.jpeg",
  },
  {
    name: "Fresh and Citrus",
    tagline: "Bright, clean and refreshing.",
    description: "Citrus, aquatic and aromatic notes can create fragrances that feel light and invigorating. Ideal for daytime wear and everyday use.",
    href: "/shop?family=Fresh",
    cta: "Explore Fresh Fragrances",
    image: "/images/products/shiyaaka-sky.jpeg",
  },
  {
    name: "Sweet and Gourmand",
    tagline: "Comforting, inviting and distinctive.",
    description: "Vanilla, caramel, tonka bean, roasted pistachio, and sweet accords create fragrances with a warm and dessert-like character.",
    href: "/shop?family=Gourmand",
    cta: "Explore Sweet Fragrances",
    image: "/images/products/khair-pistachio.jpeg",
  },
  {
    name: "Musk",
    tagline: "Soft, smooth and versatile.",
    description: "Musk is used in many fragrance compositions, often adding softness, warmth and depth. It can appear in fresh, floral, woody and amber fragrances.",
    href: "/shop?family=Musk",
    cta: "Explore Musky Fragrances",
    image: "/images/products/athena.jpeg",
  },
];

export function FragranceFamilies() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Olfactory Profiles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            Find Your Fragrance Family
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            Not sure where to begin? Exploring fragrance families is a simple way to narrow down the scents you might enjoy. Understanding these families can help you discover new perfumes and make more informed choices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {families.map((fam) => (
            <div
              key={fam.name}
              className="group relative flex flex-col justify-between bg-[#FFFDF9] border border-[#E5DCD3] overflow-hidden p-6 hover:border-[#1e3a2f] transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 bg-[#241915]">
                <Image
                  src={fam.image}
                  alt={`${fam.name} fragrance collection`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="font-serif text-xl text-[#241915]">
                  {fam.name}
                </h3>
                <p className="text-xs text-[#C6A46A] font-medium">
                  {fam.tagline}
                </p>
                <p className="text-xs text-[#89796F] font-light leading-relaxed">
                  {fam.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#E5DCD3]">
                <Link
                  href={fam.href}
                  className="text-xs text-[#1e3a2f] font-semibold uppercase tracking-wider hover:underline"
                >
                  {fam.cta} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
