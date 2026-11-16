"use client";

import { useState } from "react";
import { FAQItem } from "@/types/common";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([faqs[0]?.id || ""]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs px-4 py-2 border transition-all ${
              selectedCategory === cat
                ? "bg-[#38251F] text-[#F8F4ED] border-[#38251F] font-semibold"
                : "bg-[#FFFDF9] text-[#38251F] border-[#D9C2B8] hover:border-[#C6A46A]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="bg-[#FFFDF9] border border-[#D9C2B8]/60 transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-start justify-between space-x-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-[#C6A46A] mt-0.5 flex-shrink-0" />
                  <span className="font-serif text-base sm:text-lg text-[#38251F]">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#89796F] transition-transform flex-shrink-0 mt-1 ${
                    isOpen ? "rotate-180 text-[#C6A46A]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#89796F] font-light leading-relaxed border-t border-[#D9C2B8]/30 mt-2 pt-4 pl-14">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
