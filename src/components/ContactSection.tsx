"use client";

import React from "react";
import { MessageSquare, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct CTA Copy & Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Ceritakan Alur <span className="text-secondary">Operasional Bisnis Anda</span>.
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              Sampaikan bagaimana bisnis Anda saat ini mengelola operasional, alur kerja tim, atau kebutuhan kehadiran digital. Kami akan mendiskusikan solusi teknis yang paling tepat dan transparan.
            </p>

            {/* Direct Verified Contact Channels */}
            <div className="pt-4 space-y-3.5 border-t border-gray-200">
              <a
                href={SITE_CONFIG.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-300 shadow-xs hover:border-secondary transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-success/10 text-success flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">WhatsApp Resmi</p>
                  <p className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-success transition-colors">
                    {SITE_CONFIG.whatsappDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-300 shadow-xs hover:border-secondary transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Email Korespondensi</p>
                  <p className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-secondary transition-colors">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-gray-300">
                <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Basis Operasional</p>
                  <p className="text-sm font-bold text-gray-900">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
