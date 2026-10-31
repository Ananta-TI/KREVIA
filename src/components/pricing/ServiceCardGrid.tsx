import React from "react";
import { MessageSquare } from "lucide-react";
import type { ServiceQuickItem } from "@/lib/pricingData";
import { SITE_CONFIG } from "@/lib/constants";

interface ServiceCardGridProps {
  items: ServiceQuickItem[];
}

export function ServiceCardGrid({ items }: ServiceCardGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <a
          key={item.id}
          href={SITE_CONFIG.getWhatsappUrl(
            `Halo Krevia Digital, saya ingin berdiskusi mengenai ${item.name} (${item.priceFormatted}).`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white rounded-3xl p-6 sm:p-7 border border-gray-300 shadow-sm hover:border-secondary hover:shadow-md transition-all flex flex-col justify-between gap-5"
        >
          <div className="space-y-2.5">
            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{item.description}</p>
          </div>
          <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm font-extrabold text-secondary">{item.priceFormatted}</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 group-hover:text-secondary transition-colors">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Diskusi</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
