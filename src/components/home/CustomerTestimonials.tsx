import Link from "next/link";
import { initialTestimonials } from "@/data/testimonials";
import { Star, CheckCircle2 } from "lucide-react";

export function CustomerTestimonials() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Client Feedback
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            The Experience Matters
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            We believe shopping for fragrance should be as enjoyable as discovering the fragrance itself. From exploring our collection to getting assistance with your selection, we want your experience with Vee&apos;s Luxe Foundry to feel personal, straightforward and welcoming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialTestimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 bg-[#FFFDF9] border border-[#E5DCD3] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6A46A] text-[#C6A46A]" />
                  ))}
                </div>
                <p className="text-xs text-[#241915] italic leading-relaxed font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5DCD3] space-y-0.5">
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif text-sm font-semibold text-[#241915]">
                    {t.customerName}
                  </span>
                  <span title="Verified Client">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  </span>
                </div>
                <p className="text-sm text-[#89796F]">
                  {t.location} · <span className="text-[#1e3a2f]">{t.productPurchased}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-[#1e3a2f] text-[#F9F6F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#162c23] transition-colors"
          >
            Have a Question? Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
