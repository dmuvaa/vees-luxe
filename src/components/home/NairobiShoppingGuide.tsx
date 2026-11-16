import Link from "next/link";
import { MapPin, Search, ShoppingBag, MessageCircle } from "lucide-react";

export function NairobiShoppingGuide() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Nairobi &amp; Kenya
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            Your Destination for Luxury Perfumes in Nairobi
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            Finding a fragrance you love should be an enjoyable experience. Vee&apos;s Luxe Foundry serves fragrance enthusiasts in Nairobi, Kenya, with an online collection of Arabic perfumes, designer fragrances and Bath &amp; Body Works favourites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#FFFDF9] border border-[#E5DCD3] space-y-3">
            <div className="w-9 h-9 bg-[#F0EAE1] flex items-center justify-center text-[#241915]">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base text-[#241915]">
              Looking for Arabic Perfumes in Nairobi?
            </h3>
            <p className="text-xs text-[#89796F] font-light leading-relaxed">
              Explore a selection of Arabic fragrance houses and discover different scent profiles, from warm and woody to sweet, fresh, floral and musky.
            </p>
          </div>

          <div className="p-6 bg-[#FFFDF9] border border-[#E5DCD3] space-y-3">
            <div className="w-9 h-9 bg-[#F0EAE1] flex items-center justify-center text-[#241915]">
              <Search className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base text-[#241915]">
              Searching for Designer Perfumes in Kenya?
            </h3>
            <p className="text-xs text-[#89796F] font-light leading-relaxed">
              Browse our designer fragrance selection and explore options that suit your personal taste and preferred occasions.
            </p>
          </div>

          <div className="p-6 bg-[#FFFDF9] border border-[#E5DCD3] space-y-3">
            <div className="w-9 h-9 bg-[#F0EAE1] flex items-center justify-center text-[#241915]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base text-[#241915]">
              Want to Shop Perfumes Online in Kenya?
            </h3>
            <p className="text-xs text-[#89796F] font-light leading-relaxed">
              Explore available products, review their descriptions and prices, and contact us to enquire or place an order via WhatsApp.
            </p>
          </div>

          <div className="p-6 bg-[#FFFDF9] border border-[#E5DCD3] space-y-3">
            <div className="w-9 h-9 bg-[#F0EAE1] flex items-center justify-center text-[#241915]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-base text-[#241915]">
              Need Help Choosing?
            </h3>
            <p className="text-xs text-[#89796F] font-light leading-relaxed">
              Not sure which fragrance is right for you? Get in touch with us on WhatsApp and tell us what kind of scents you enjoy.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="inline-block px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
