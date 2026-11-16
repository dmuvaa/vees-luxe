import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Vee's Luxe Foundry Nairobi",
  description: "Learn about Vee's Luxe Foundry, Virginia's vision, and our commitment to bringing authentic luxury Arabic perfumes and designer scents to Nairobi, Kenya.",
};

export default function AboutPage() {
  const conciergeUrl = getConciergeWhatsAppUrl("inquiring about Vee's Luxe Foundry story and custom fragrance curation");

  return (
    <div className="bg-[#F8F4ED] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" },
          ]}
        />
      </div>

      {/* Editorial Header */}
      <section className="relative bg-white py-16 sm:py-20 border-b border-sand/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 ui-eyebrow text-gold">
            <Sparkles className="w-3.5 h-3.5" aria-hidden />
            <span>The Vee&apos;s Luxe Foundry story</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-medium leading-tight">
            For the Scent. The Skin.
            <br />
            <span className="italic text-gold">The Statement. The Standard.</span>
          </h1>

          <div className="w-10 h-0.5 bg-gold mx-auto" />

          <p className="text-base sm:text-lg text-body max-w-2xl mx-auto leading-relaxed">
            Born in Nairobi, Vee&apos;s Luxe Foundry was founded to celebrate the elegance, lasting sillage, and
            craftsmanship of authentic Middle Eastern perfumery.
          </p>
        </div>
      </section>

      {/* Narrative Section 1: Virginia's Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#D9C2B8]/60 bg-[#241915]">
            <Image
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000"
              alt="Virginia - Founder of Vee's Luxe Foundry"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
              The Founder&apos;s Journey
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
              A Passion for Scent Architecture
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A46A]" />

            <div className="space-y-4 text-sm text-[#292522] font-light leading-relaxed">
              <p>
                My name is Virginia, and fragrance has always been more to me than a beauty habit—it is personal architecture. The scent you wear creates a memory before you speak, anchors your confidence throughout demanding days, and leaves an unforgettable trace long after you leave the room.
              </p>
              <p>
                For years, Kenyan perfume lovers faced a frustrating dilemma: either settle for exorbitant markups in brick-and-mortar luxury malls, or take high risks with dubious social media vendors offering questionable dupes and watered-down imitations.
              </p>
              <p>
                I created Vee&apos;s Luxe Foundry to provide a safe, elevated sanctuary. A destination where every flacon—from Lattafa and Afnan to rare Paris Corner niche lines and Bath & Body Works mists—is guaranteed authentic, factory-sealed, and delivered with bespoke concierge care.
              </p>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <Link
                href="/shop"
                className="px-6 py-3.5 bg-[#38251F] text-[#F8F4ED] text-xs uppercase tracking-widest font-semibold hover:bg-[#241915] transition-all"
              >
                Explore the Catalogue
              </Link>
              <a
                href={conciergeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 border border-[#38251F] text-[#38251F] text-xs uppercase tracking-widest font-semibold hover:bg-[#38251F] hover:text-[#F8F4ED] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A46A]" />
                <span>Chat with Virginia</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars & Authenticity Section */}
      <section id="authenticity" className="py-20 bg-[#FFFDF9] border-y border-[#D9C2B8]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
              The Four Standards
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#F8F4ED]/60 border border-[#D9C2B8]/40 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#C6A46A]" />
              <h3 className="font-serif text-xl text-[#38251F]">Uncompromising Origin</h3>
              <p className="text-xs text-[#89796F] font-light leading-relaxed">
                Direct importation from authorized distribution hubs in the UAE. Every box maintains intact security holograms and verifiable batch numbers.
              </p>
            </div>

            <div className="p-8 bg-[#F8F4ED]/60 border border-[#D9C2B8]/40 space-y-3">
              <Award className="w-8 h-8 text-[#C6A46A]" />
              <h3 className="font-serif text-xl text-[#38251F]">The Longevity Test</h3>
              <p className="text-xs text-[#89796F] font-light leading-relaxed">
                We test every formulation in Nairobi&apos;s climate before listing. If a perfume does not satisfy our minimum 8-hour projection standard, it does not enter our foundry.
              </p>
            </div>

            <div className="p-8 bg-[#F8F4ED]/60 border border-[#D9C2B8]/40 space-y-3">
              <Heart className="w-8 h-8 text-[#C6A46A]" />
              <h3 className="font-serif text-xl text-[#38251F]">Bespoke Consultation</h3>
              <p className="text-xs text-[#89796F] font-light leading-relaxed">
                You are never just an order number. We take time over WhatsApp to understand your skin chemistry, occasion, and scent preferences before recommending a bottle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
