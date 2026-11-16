import Link from "next/link";
import { getConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function FinalConversion() {
  const conciergeUrl = getConciergeWhatsAppUrl("inquiring about finding my signature scent");

  return (
    <section className="surface-dark py-24 bg-[#241915] text-[#F9F6F0] border-b border-[#38251F] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold block">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F9F6F0] font-normal leading-tight">
            Your Next Signature Scent Starts Here.
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#D9C2B8] max-w-2xl mx-auto font-light leading-relaxed">
          <p>
            The right fragrance is not simply about following trends. It is about discovering a scent that feels personal, complements your style and makes every moment a little more memorable.
          </p>
          <p>
            Explore our collection of Arabic perfumes, designer fragrances and Bath &amp; Body Works favourites at Vee&apos;s Luxe Foundry. Discover something new. Find an old favourite. Make fragrance part of your signature.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
          >
            Shop All Fragrances
          </Link>
          <a
            href={conciergeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-[#F0EAE1] text-[#241915] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#E5DCD3] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#1e3a2f]" />
            <span>Chat With Us on WhatsApp</span>
          </a>
        </div>

        <p className="font-serif italic text-xs text-[#C6A46A] pt-4 tracking-wider">
          For the Scent. The Skin. The Statement. The Standard.
        </p>
      </div>
    </section>
  );
}
