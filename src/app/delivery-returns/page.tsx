import { Metadata } from "next";
import { pageTitle } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { Truck, ShieldCheck, RefreshCw, MessageCircle, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: pageTitle("Delivery & Returns Policy | Vee's Luxe Foundry Kenya"),
  description: "Learn about Nairobi same-day perfume delivery, countrywide courier shipping in Kenya, M-Pesa payment options, and return conditions at Vee's Luxe Foundry.",
};

export default function DeliveryReturnsPage() {
  const conciergeUrl = getConciergeWhatsAppUrl("inquiring about delivery timeline or delivery fee for my location");

  return (
    <div className="bg-[#F8F4ED] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Delivery & Returns", url: "/delivery-returns" },
          ]}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Heading */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Store Policies
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38251F]">
            Delivery & Returns Policy
          </h1>
          <div className="w-12 h-0.5 bg-[#C6A46A]" />
          <p className="text-sm text-[#89796F] font-light leading-relaxed">
            Transparent, reliable, and prompt fulfillment across Nairobi and all 47 counties of Kenya.
          </p>
        </div>

        {/* Section 1: Nairobi Deliveries */}
        <div className="bg-[#FFFDF9] border border-[#D9C2B8]/50 p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#38251F] text-[#C6A46A] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl text-[#38251F]">
              Nairobi Metropolitan Delivery
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#292522] font-light leading-relaxed">
            <p>
              We operate dedicated rider fulfillment across Nairobi to ensure your fragrances arrive promptly and safely without damage:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#38251F]">
              <li>
                <strong>Same-Day Delivery:</strong> Orders confirmed on WhatsApp before 3:00 PM are dispatched immediately and delivered to your doorstep within 2 to 4 hours.
              </li>
              <li>
                <strong>Coverage Areas:</strong> Nairobi CBD, Westlands, Kilimani, Kileleshwa, Lavington, Karen, Runda, Muthaiga, South B/C, Langata, Parklands, Kiambu Road, Thika Road, and surrounding estates.
              </li>
              <li>
                <strong>Delivery Rates:</strong> Nairobi delivery fees typically range from KES 250 to KES 450 depending on your exact estate location, confirmed directly on WhatsApp prior to dispatch.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Countrywide Deliveries */}
        <div className="bg-[#FFFDF9] border border-[#D9C2B8]/50 p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#38251F] text-[#C6A46A] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl text-[#38251F]">
              Countrywide Kenya Delivery
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#292522] font-light leading-relaxed">
            <p>
              We ship daily to fragrance enthusiasts throughout Kenya via established and insured courier partners (Fargo Courier, G4S, and reputable regional shuttles like 2NK, Guardian, or North Rift):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#38251F]">
              <li>
                <strong>Delivery Timeline:</strong> Major cities (Mombasa, Kisumu, Nakuru, Eldoret) typically arrive within 24 hours. Other upcountry towns arrive in 24 to 48 hours.
              </li>
              <li>
                <strong>Tracking & Waybill:</strong> Immediately after parcel handover to the courier, we send your official tracking number and parcel receipt via WhatsApp.
              </li>
              <li>
                <strong>Courier Fees:</strong> Countrywide parcel delivery typically ranges between KES 400 and KES 700 depending on destination.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Payment Arrangements */}
        <div className="bg-[#FFFDF9] border border-[#D9C2B8]/50 p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#38251F] text-[#C6A46A] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl text-[#38251F]">
              Payment Arrangements
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#292522] font-light leading-relaxed">
            <p>
              In Phase 1, all orders are processed securely via <strong>Safaricom M-Pesa</strong> (Buy Goods Till / Paybill):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#38251F]">
              <li>
                After you click &quot;Order on WhatsApp&quot;, our team verifies stock availability and shares the official M-Pesa Till number.
              </li>
              <li>
                For Nairobi deliveries, payment is confirmed before dispatch or upon rider arrival by arrangement. For countrywide courier parcels, full payment is completed prior to dispatch.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Returns & Exchanges */}
        <div className="bg-[#FFFDF9] border border-[#D9C2B8]/50 p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#38251F] text-[#C6A46A] flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h2 className="font-serif text-2xl text-[#38251F]">
              Returns, Exchanges & Damaged Goods
            </h2>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-[#292522] font-light leading-relaxed">
            <p>
              Fragrances are intimate luxury items. Due to health and hygiene standards, we strictly uphold the following return conditions:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#38251F]">
              <li>
                <strong>Eligibility:</strong> An item can only be returned or exchanged if it remains completely unopened, in its original manufacturer cellophane seal, with undamaged security holograms.
              </li>
              <li>
                <strong>Opened Bottles:</strong> Once the cellophane wrapping or box seal is broken, we cannot accept returns or provide refunds, as we cannot guarantee product integrity to subsequent buyers.
              </li>
              <li>
                <strong>Transit Damage:</strong> In the rare event a bottle arrives damaged or leaking, please photograph the package and notify us within 24 hours of receipt on WhatsApp. We will promptly arrange an immediate replacement or full refund.
              </li>
            </ul>
          </div>
        </div>

        {/* Support CTA */}
        <div className="surface-dark p-8 bg-[#38251F] text-[#F8F4ED] text-center space-y-4">
          <h3 className="font-serif text-2xl">Need Assistance with a Delivery?</h3>
          <p className="text-xs text-[#D9C2B8] max-w-md mx-auto font-light">
            Virginia and our dispatch team are ready to answer your questions or provide live rider updates.
          </p>
          <a
            href={conciergeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#C6A46A] text-[#241915] text-xs uppercase tracking-widest font-semibold hover:bg-[#dfc89f] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Message Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
