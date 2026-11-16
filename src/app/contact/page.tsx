import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { generateLocalBusinessJsonLd } from "@/lib/seo";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Truck,
  Sparkles,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/Icons";

export const metadata: Metadata = {
  title: "Contact Concierge | Vee's Luxe Foundry Nairobi",
  description: "Connect with Vee's Luxe Foundry via WhatsApp or Instagram. Nairobi delivery, custom fragrance recommendations, and order status updates.",
};

export default function ContactPage() {
  const conciergeUrl = getConciergeWhatsAppUrl("inquiring about a fragrance order or recommendation");
  const localBusinessJsonLd = generateLocalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <div className="bg-[#F8F4ED] min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Contact Concierge", url: "/contact" },
            ]}
          />
        </div>

        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
              Personalized Assistance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38251F]">
              Connect With Our Fragrance Concierge
            </h1>
            <div className="w-12 h-0.5 bg-[#C6A46A]" />
            <p className="text-sm text-[#89796F] font-light leading-relaxed">
              Have a question about a perfume note, need guidance selecting a gift, or wish to confirm immediate delivery in Nairobi? Virginia and our concierge are ready to assist you.
            </p>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Primary WhatsApp Card */}
            <div className="surface-dark bg-[#38251F] text-[#F8F4ED] p-8 border border-[#C6A46A]/40 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#241915] flex items-center justify-center text-[#C6A46A]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-sm uppercase tracking-widest text-[#C6A46A] font-semibold">
                    Fastest Response Channel
                  </span>
                  <h2 className="font-serif text-2xl text-[#F8F4ED]">
                    WhatsApp Direct
                  </h2>
                </div>
                <p className="text-xs text-[#D9C2B8] font-light leading-relaxed">
                  Chat directly with Virginia for real-time stock verification, prefilled product orders, and instant M-Pesa payment details.
                </p>
                <p className="font-serif text-lg text-[#C6A46A]">
                  {siteConfig.whatsappDisplay}
                </p>
              </div>

              <a
                href={conciergeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-4 bg-[#C6A46A] text-[#241915] text-xs uppercase tracking-widest font-semibold hover:bg-[#dfc89f] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start WhatsApp Chat</span>
              </a>
            </div>

            {/* Instagram Social Hub */}
            <div className="bg-[#FFFDF9] p-8 border border-[#D9C2B8]/50 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#F8F4ED] flex items-center justify-center text-[#38251F]">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-sm uppercase tracking-widest text-[#89796F]">
                    Social Showcase & DMs
                  </span>
                  <h2 className="font-serif text-2xl text-[#38251F]">
                    Instagram
                  </h2>
                </div>
                <p className="text-xs text-[#89796F] font-light leading-relaxed">
                  Explore video unboxings of fresh Dubai shipments, daily customer reviews, and lifestyle fragrance inspiration.
                </p>
                <p className="font-serif text-lg text-[#38251F]">
                  {siteConfig.instagramHandle}
                </p>
              </div>

              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 py-4 border border-[#38251F] text-[#38251F] text-xs uppercase tracking-widest font-semibold hover:bg-[#38251F] hover:text-[#F8F4ED] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow on Instagram</span>
              </a>
            </div>

            {/* Operations & Location Info */}
            <div className="bg-[#FFFDF9] p-8 border border-[#D9C2B8]/50 space-y-6">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-[#F8F4ED] flex items-center justify-center text-[#38251F]">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-2xl text-[#38251F]">
                  Boutique Operations
                </h2>
                <div className="w-8 h-0.5 bg-[#C6A46A]" />
              </div>

              <div className="space-y-4 text-xs text-[#292522]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C6A46A] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#38251F]">Headquarters & Dispatch:</strong>
                    <span className="text-[#89796F]">Nairobi, Kenya (Online Boutique with door-to-door delivery)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#C6A46A] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#38251F]">Concierge Hours:</strong>
                    <span className="text-[#89796F]">{siteConfig.operatingHours}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C6A46A] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#38251F]">Email Enquiries:</strong>
                    <span className="text-[#89796F]">{siteConfig.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Truck className="w-4 h-4 text-[#C6A46A] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block text-[#38251F]">Delivery Scope:</strong>
                    <span className="text-[#89796F]">Nairobi Same-Day Rider • Countrywide Courier Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
