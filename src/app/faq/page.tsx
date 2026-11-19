import { Metadata } from "next";
import { getFAQs } from "@/lib/data/content";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { generateFAQJsonLd, pageTitle } from "@/lib/seo";
import { getConciergeWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: pageTitle("Frequently Asked Questions | Vee's Luxe Foundry Kenya"),
  description: "Find clear answers on ordering Arabic perfumes via WhatsApp, M-Pesa payments, genuine Dubai batch codes, and same-day delivery in Nairobi.",
};

export default async function FAQPage() {
  const faqs = await getFAQs();
  const faqJsonLd = generateFAQJsonLd(faqs);
  const conciergeUrl = getConciergeWhatsAppUrl("inquiring about a question not listed in the FAQ");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-[#F8F4ED] min-h-screen pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Frequently Asked Questions", url: "/faq" },
            ]}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
              Help Center
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#38251F]">
              Frequently Asked Questions
            </h1>
            <div className="w-12 h-0.5 bg-[#C6A46A]" />
            <p className="text-sm text-[#89796F] font-light leading-relaxed">
              Clear, transparent answers about ordering authentic fragrances in Kenya, our direct Dubai sourcing, M-Pesa payments, and delivery.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />

          {/* Still Have Questions CTA */}
          <div className="surface-dark p-8 bg-[#38251F] text-[#F8F4ED] text-center space-y-4">
            <h3 className="font-serif text-2xl">Still Have a Question?</h3>
            <p className="text-xs text-[#D9C2B8] max-w-md mx-auto font-light leading-relaxed">
              Virginia is available on WhatsApp to answer any specific fragrance inquiries, recommend perfumes, or provide custom gift advice.
            </p>
            <a
              href={conciergeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#C6A46A] text-[#241915] text-xs uppercase tracking-widest font-semibold hover:bg-[#dfc89f] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
