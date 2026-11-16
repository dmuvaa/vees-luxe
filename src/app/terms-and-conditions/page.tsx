import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | Vee's Luxe Foundry Kenya",
  description: "Terms of service and ordering conditions for Vee's Luxe Foundry in Nairobi, Kenya.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#F8F4ED] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Terms & Conditions", url: "/terms-and-conditions" },
          ]}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Boutique Terms
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
            Terms and Conditions
          </h1>
          <div className="w-12 h-0.5 bg-[#C6A46A]" />
          <p className="text-xs text-[#89796F]">
            Last updated: January 2025 • Governing Law: Republic of Kenya
          </p>
        </div>

        <div className="bg-[#FFFDF9] border border-[#D9C2B8]/60 p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-[#292522] font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">1. General Overview</h2>
            <p>
              By accessing the Vee&apos;s Luxe Foundry catalogue and initiating order inquiries through WhatsApp, you agree to abide by these Terms and Conditions. These terms govern the browsing of products, price quotes, M-Pesa payments, and delivery within Kenya.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">2. Product Presentation & Catalogue Status</h2>
            <p>
              In Phase 1, our website functions as an authenticated product catalogue and enquiry portal. Clicking &quot;Order on WhatsApp&quot; initiates an order consultation with our concierge. Orders are confirmed only after Virginia confirms stock availability, price validity, and delivery arrangements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">3. Pricing & Currency</h2>
            <p>
              All prices listed on the website are in Kenyan Shillings (KES). While we endeavor to maintain accurate pricing, prices may be updated without prior notice due to import tariffs, international currency fluctuations, and manufacturer revisions. The final confirmed price is confirmed on WhatsApp before payment.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">4. Authenticity Guarantee</h2>
            <p>
              We guarantee that all perfume products offered by Vee&apos;s Luxe Foundry are 100% original, imported directly from authorized Dubai distributors and verified perfume houses, arriving in sealed manufacturer packaging.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">5. Delivery & Risk of Loss</h2>
            <p>
              Delivery risk passes to the customer upon physical receipt in Nairobi or upon delivery confirmation from our third-party courier partner (G4S / Fargo Courier). Transit damage must be reported with photographic proof within 24 hours of delivery.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
