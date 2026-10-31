import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import type { ServiceTier } from "@/lib/pricingData";
import { SITE_CONFIG } from "@/lib/constants";

interface PricingTierCardProps {
  tier: ServiceTier;
}

export function PricingTierCard({ tier }: PricingTierCardProps) {
  const isFeatured = Boolean(tier.featured);
  const waUrl = SITE_CONFIG.getWhatsappUrl(tier.prefilledMessage);

  return (
    <div
      className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
        isFeatured
          ? "bg-primary text-white shadow-2xl border-2 border-accent/60 ring-4 ring-accent/10"
          : "bg-white text-gray-900 shadow-sm border border-gray-300"
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent text-primary text-xs font-extrabold tracking-wide shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Terpopuler</span>
          </span>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <h3 className={`text-2xl font-black ${isFeatured ? "text-white" : "text-gray-900"}`}>
            {tier.name}
          </h3>
          <p className={`text-xs sm:text-sm mt-1.5 ${isFeatured ? "text-gray-300" : "text-gray-500"}`}>
            {tier.scopeLabel}
          </p>
        </div>

        <div className={`pb-5 border-b ${isFeatured ? "border-gray-700" : "border-gray-200"}`}>
          <span
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isFeatured ? "text-white" : "text-gray-900"
            }`}
          >
            {tier.priceFormatted}
          </span>
          <div className={`flex items-center gap-2 mt-3 text-xs font-bold ${isFeatured ? "text-gray-300" : "text-gray-500"}`}>
            <span>{tier.priceMin}</span>
            <span className={`flex-1 h-px ${isFeatured ? "bg-gray-700" : "bg-gray-300"}`} />
            <span>{tier.priceMax}</span>
          </div>
        </div>

        <ul className="space-y-2.5">
          {tier.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
              <Check className={`w-4 h-4 mt-0.5 shrink-0 ${isFeatured ? "text-accent" : "text-success"}`} />
              <span className={isFeatured ? "text-gray-300" : "text-gray-700"}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`pt-8 mt-6 border-t ${isFeatured ? "border-gray-700" : "border-gray-200"}`}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 cursor-pointer ${
            isFeatured
              ? "bg-accent hover:bg-accent/90 text-primary shadow-lg shadow-accent/20"
              : "bg-secondary hover:bg-secondary/90 text-white shadow-sm hover:shadow-md"
          }`}
        >
          <span>Konsultasi Paket</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
