import { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Vee's Luxe Foundry Kenya",
  description: "Privacy and data protection policy for Vee's Luxe Foundry in accordance with the Kenya Data Protection Act, 2019.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8F4ED] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <Breadcrumbs
          items={[
            { name: "Home", url: "/" },
            { name: "Privacy Policy", url: "/privacy-policy" },
          ]}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Legal & Data Protection
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
            Privacy Policy
          </h1>
          <div className="w-12 h-0.5 bg-[#C6A46A]" />
          <p className="text-xs text-[#89796F]">
            Last updated: January 2025 • Compliant with the Kenya Data Protection Act, 2019
          </p>
        </div>

        <div className="bg-[#FFFDF9] border border-[#D9C2B8]/60 p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-[#292522] font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">1. Introduction</h2>
            <p>
              Vee&apos;s Luxe Foundry (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), operated by Virginia in Nairobi, Kenya, respects the privacy of our website visitors and clients. This Privacy Policy details how we collect, store, and utilize your personal information when using our catalogue and WhatsApp commerce services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">2. Information We Collect</h2>
            <p>
              We collect only information necessary to process fragrance orders, coordinate Nairobi doorstep deliveries, and provide personalized scent consultation:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Name, phone number, and WhatsApp chat handle.</li>
              <li><strong>Delivery Information:</strong> Physical drop-off estate, town, landmark, and building/house number in Kenya.</li>
              <li><strong>Payment Data:</strong> M-Pesa transaction reference codes. We do not store PINs or banking credentials.</li>
              <li><strong>Marketing Consent:</strong> Email addresses provided with explicit consent for our VIP scent club.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">3. Purpose of Processing</h2>
            <p>
              Your data is collected strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Confirming stock availability and answering product inquiries over WhatsApp.</li>
              <li>Coordinating same-day Nairobi rider fulfillment and countrywide courier shipments (Fargo Courier / G4S).</li>
              <li>Providing M-Pesa order confirmations and receipts.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">4. Data Sharing & Third Parties</h2>
            <p>
              We never sell, rent, or trade your personal information. Relevant details (name, delivery phone, drop-off location) are shared strictly with contracted dispatch riders and courier partners solely to execute your delivery.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-lg text-[#38251F] font-semibold">5. Your Rights Under Kenyan Law</h2>
            <p>
              Under the Kenya Data Protection Act 2019, you have the right to request access to your personal data, rectify inaccurate records, or request complete deletion from our records. For any inquiries, contact our concierge at <span className="font-medium text-[#38251F]">{siteConfig.email}</span> or via WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
