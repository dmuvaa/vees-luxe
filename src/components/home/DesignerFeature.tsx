import Link from "next/link";
import Image from "next/image";

export function DesignerFeature() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold block">
              Contemporary &amp; Timeless
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#241915] font-normal leading-tight">
              Discover Designer Perfumes in Kenya
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A46A]" />

            <div className="space-y-4 text-sm text-[#5C4F46] font-light leading-relaxed">
              <p>
                A fragrance can be subtle, expressive, fresh or unforgettable. The best choice is the one that feels right to you.
              </p>
              <p>
                At Vee&apos;s Luxe Foundry, we make it easier to explore designer fragrance selections alongside our Arabic perfume collection. Whether you prefer timeless fragrance styles, contemporary compositions or versatile everyday scents, discover options that complement your individual taste.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                <h4 className="font-serif text-sm font-semibold text-[#241915]">Fresh and effortless</h4>
                <p className="text-xs text-[#89796F] font-light">Explore clean, citrus and aromatic fragrance profiles for those who prefer a refreshing scent.</p>
              </div>
              <div className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                <h4 className="font-serif text-sm font-semibold text-[#241915]">Elegant and sophisticated</h4>
                <p className="text-xs text-[#89796F] font-light">Discover floral, woody and musky compositions that offer a more refined fragrance experience.</p>
              </div>
              <div className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                <h4 className="font-serif text-sm font-semibold text-[#241915]">Warm and distinctive</h4>
                <p className="text-xs text-[#89796F] font-light">Explore amber, spice and woody fragrances for those who enjoy deeper and more expressive scent profiles.</p>
              </div>
              <div className="p-4 bg-[#FFFDF9] border border-[#E5DCD3] space-y-1">
                <h4 className="font-serif text-sm font-semibold text-[#241915]">Sweet and inviting</h4>
                <p className="text-xs text-[#89796F] font-light">Discover fragrances featuring vanilla, fruity notes and gourmand-inspired accords.</p>
              </div>
            </div>

            <p className="text-xs italic text-[#5C4F46] font-light pt-2">
              A fragrance does not need to follow a trend to be memorable. It simply needs to feel like you.
            </p>

            <div className="pt-2">
              <Link
                href="/shop/designer-perfumes"
                className="inline-block px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
              >
                Explore Designer Perfumes
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/5] w-full overflow-hidden bg-[#241915] border border-[#E5DCD3] shadow-sm">
            <Image
              src="/images/products/delilah-pour-femme.jpeg"
              alt="Designer perfume collection"
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
