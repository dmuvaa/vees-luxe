import { initialTestimonials } from "@/data/testimonials";
import { Star, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Client Impressions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
            Loved by Fragrance Enthusiasts
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#89796F] font-light">
            Genuine reviews from our valued clients in Nairobi and across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFDF9] border border-[#D9C2B8]/50 p-6 flex flex-col justify-between space-y-4 hover:border-[#C6A46A] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6A46A] text-[#C6A46A]" />
                  ))}
                </div>
                <p className="text-xs text-[#292522] italic leading-relaxed font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-[#D9C2B8]/40 space-y-1">
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif text-sm text-[#38251F] font-semibold">
                    {t.customerName}
                  </span>
                  {t.verified && (
                    <span title="Verified Customer">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#89796F]">
                  {t.location} • <span className="text-[#C6A46A]">{t.productPurchased}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
