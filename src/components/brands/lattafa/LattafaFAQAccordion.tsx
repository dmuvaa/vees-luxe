"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { LattafaFAQ } from "@/data/lattafa-faqs";

export function LattafaFAQAccordion({ faqs }: { faqs: LattafaFAQ[] }) {
  const [openIds, setOpenIds] = useState<string[]>([faqs[0]?.id ?? ""]);

  const toggle = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <ul className="space-y-2">
      {faqs.map((faq) => {
        const open = openIds.includes(faq.id);
        return (
          <li key={faq.id} className="border border-sand/80 bg-white rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => toggle(faq.id)}
              className="w-full flex items-start justify-between gap-4 px-4 py-3.5 text-left"
              aria-expanded={open}
            >
              <span className="text-sm font-semibold text-ink">{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 text-muted transition-transform mt-0.5 ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <p className="px-4 pb-4 text-sm text-body leading-relaxed border-t border-sand/60 pt-3">
                {faq.answer}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}