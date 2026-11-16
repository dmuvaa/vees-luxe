import { initialFAQs } from "@/data/faqs";
import { FAQAccordion } from "@/components/faq/FAQAccordion";

export function FAQSection() {
  return (
    <section className="py-20 bg-[#FBF9F5] border-b border-[#E5DCD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#89796F] font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#241915]">
            Frequently Asked Questions About Perfumes in Kenya
          </h2>
          <div className="w-10 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#5C4F46] font-light leading-relaxed">
            Find answers to common questions about ordering authentic Arabic perfumes, delivery arrangements across Kenya, M-Pesa payments, and scent selection.
          </p>
        </div>

        <FAQAccordion faqs={initialFAQs} />
      </div>
    </section>
  );
}
