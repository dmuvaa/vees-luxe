import Link from "next/link";
import { initialFAQs } from "@/data/faqs";
import { ArrowRight, HelpCircle } from "lucide-react";

export function FAQPreview() {
  const previewFAQs = initialFAQs.slice(0, 4);

  return (
    <section className="py-20 bg-[#FFFDF9] border-t border-[#D9C2B8]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C6A46A] font-semibold">
            Common Inquiries
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#38251F]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A46A] mx-auto" />
          <p className="text-sm text-[#89796F] font-light">
            Everything you need to know about ordering, authenticity, delivery, and payments in Kenya.
          </p>
        </div>

        <div className="space-y-4">
          {previewFAQs.map((faq) => (
            <div
              key={faq.id}
              className="p-6 bg-[#F8F4ED]/60 border border-[#D9C2B8]/50 space-y-2"
            >
              <h3 className="font-serif text-base sm:text-lg text-[#38251F] flex items-start space-x-2">
                <HelpCircle className="w-4 h-4 text-[#C6A46A] mt-1 flex-shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#89796F] pl-6 font-light leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#38251F] hover:text-[#C6A46A] transition-colors group"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
