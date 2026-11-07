"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types";

interface FaqAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
}

export default function FaqAccordion({ items, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl transition-all border ${
              isOpen
                ? "bg-white border-brand-700/30 shadow-card"
                : "bg-white/80 border-stone-200 hover:border-stone-300"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-5 flex items-center justify-between space-x-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-semibold text-base sm:text-lg text-stone-900">
                {item.question}
              </span>
              <div
                className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-180 bg-brand-50 text-brand-800" : "bg-stone-100 text-stone-500"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-0 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 mt-1 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

