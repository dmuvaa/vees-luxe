import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BrandStorySnippet() {
  return (
    <section className="surface-dark py-20 bg-[#241915] text-[#F8F4ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Editorial Image */}
          <div className="relative aspect-[4/3] lg:aspect-square w-full overflow-hidden border border-[#C6A46A]/30">
            <Image
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000"
              alt="Virginia - Founder of Vee's Luxe Foundry"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241915]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#38251F]/90 backdrop-blur-sm border border-[#C6A46A]/30">
              <p className="font-serif italic text-sm text-[#F8F4ED]">
                &ldquo;A signature scent is not merely an accessory; it is your unspoken introduction and your enduring legacy.&rdquo;
              </p>
              <p className="text-sm uppercase tracking-widest text-[#C6A46A] mt-2 font-medium">
                — Virginia, Founder
              </p>
            </div>
          </div>

          {/* Copy Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
                The Foundry Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F4ED] font-normal leading-tight">
                Crafted for Discerning Fragrance Lovers in Kenya
              </h2>
              <div className="w-12 h-0.5 bg-[#C6A46A]" />
            </div>

            <p className="text-sm text-[#D9C2B8] font-light leading-relaxed">
              Vee&apos;s Luxe Foundry was founded in Nairobi by Virginia with a singular ambition: to bridge the gap between luxury fragrance accessibility and uncompromising authenticity.
            </p>

            <p className="text-sm text-[#D9C2B8] font-light leading-relaxed">
              We recognized that too many perfume lovers in Kenya encounter inflated retail markups or questionable imitations. We curated direct, authenticated supply channels with premier Middle Eastern perfumeries in Dubai—curating only scents known for opulent sillage, exquisite oils, and unmatched longevity.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#C6A46A] hover:text-[#dfc89f] transition-colors group"
              >
                <span>Read Virginia&apos;s Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
