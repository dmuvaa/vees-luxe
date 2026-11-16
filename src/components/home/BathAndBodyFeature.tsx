import Link from "next/link";
import Image from "next/image";

export function BathAndBodyFeature() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden bg-[#241915] border border-[#E5DCD3] shadow-sm order-2 lg:order-1">
            <Image
              src="/images/products/yara-pink-edition.jpeg"
              alt="Bath and Body Works body care products"
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold block">
              Daily Self-Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241915] font-normal leading-tight">
              Bring Fragrance into Your Everyday Routine with Bath &amp; Body Works
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A46A]" />

            <div className="space-y-4 text-sm text-[#5C4F46] font-light leading-relaxed">
              <p>
                Fragrance is not limited to perfume bottles. It can be part of the everyday rituals that make you feel refreshed, comfortable and ready for the day.
              </p>
              <p>
                Explore Bath &amp; Body Works favourites at Vee&apos;s Luxe Foundry and discover body care products that bring fragrance into your personal care routine. Whether you are looking for something fresh, sweet, floral or warm, explore available products and find options that suit your preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                <h4 className="font-serif text-sm font-semibold text-[#241915]">Everyday Body Care</h4>
                <p className="text-xs text-[#89796F] font-light">Discover products that make your daily body care routine feel more enjoyable.</p>
              </div>
              <div className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                <h4 className="font-serif text-sm font-semibold text-[#241915]">Fragrance Beyond Perfume</h4>
                <p className="text-xs text-[#89796F] font-light">Explore scented body care options that complement your personal fragrance preferences.</p>
              </div>
              <div className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                <h4 className="font-serif text-sm font-semibold text-[#241915]">Thoughtful Gifts</h4>
                <p className="text-xs text-[#89796F] font-light">Explore Bath &amp; Body Works favourites for birthdays, celebrations and special occasions.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/shop/bath-and-body-works"
                className="inline-block px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
              >
                Shop Bath &amp; Body Works in Kenya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
