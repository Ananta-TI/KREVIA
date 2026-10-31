"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingWhatsApp() {
  const whatsappUrl = SITE_CONFIG.getWhatsappUrl();

  return (
    <aside
      aria-label="Kontak WhatsApp Langsung"
      className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-emerald-900/20 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat langsung via WhatsApp dengan tim Krevia Digital"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          Chat WhatsApp
        </span>
      </a>
    </aside>
  );
}
