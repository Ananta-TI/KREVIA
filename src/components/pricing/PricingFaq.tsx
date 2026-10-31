"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { PricingFaq as PricingFaqItem } from "@/lib/pricingData";

interface PricingFaqProps {
  faqs: PricingFaqItem[];
}

export function PricingFaq({ faqs }: PricingFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-300 shadow-sm overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left cursor-pointer hover:bg-gray-50/70 transition-colors"
            >
              <span className="text-sm sm:text-base font-bold text-gray-900">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-secondary transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 -mt-1">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
