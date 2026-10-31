"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle2
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ServicesBento() {
  const whatsappUrl = SITE_CONFIG.getWhatsappUrl(
    "Halo Krevia Digital, saya tertarik untuk mendiskusikan pembuatan Website Company Profile untuk bisnis saya."
  );

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Narasi Jujur & Kredibilitas Nyata",
      description:
        "Profil bisnis, legalitas, dan kapabilitas disajikan secara lugas, terstruktur, dan meyakinkan tanpa jargon pemasaran kosong.",
    },
    {
      icon: Zap,
      title: "Performa Cepat & Mobile First",
      description:
        "Waktu muat instan, navigasi responsif di ponsel, serta struktur kode bersih yang ramah mesin pencari (SEO).",
    },
    {
      icon: MessageSquare,
      title: "Konversi Langsung Terhubung",
      description:
        "Integrasi langsung ke nomor WhatsApp resmi dan formulir konsultasi untuk memudahkan calon klien menghubungi Anda.",
    },
    {
      icon: Layers,
      title: "Fondasi Siap Terintegrasi ERP",
      description:
        "Arsitektur website siap dihubungkan ke sistem bisnis atau platform ERP Krevia saat operasional perusahaan siap berekspansi.",
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-300 shadow-sm relative overflow-hidden">
          
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
            
            {/* Left Column: Positioning & CTAs */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Belum Siap untuk ERP Skala Penuh? Mulai dari Fondasi <span className="text-secondary">Kredibilitas Digital</span>.
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                Bagi bisnis yang sedang merintis atau ingin memperkuat citra profesional sebelum mengintegrasikan operasional internal, Krevia membantu merancang Website Company Profile berstandar enterprise yang cepat, elegan, dan siap dihubungkan langsung ke sistem ERP saat bisnis Anda siap bertumbuh.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 text-xs font-bold text-success bg-success/10 border border-success/20 px-3.5 py-2 rounded-xl w-fit">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Status: Tersedia untuk Konsultasi & Pengerjaan</span>
              </div>

              {/* Micro-Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-gray-700 font-medium">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-300">
                  <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                  <span className="leading-tight">Tanpa Biaya Bulanan</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-300">
                  <Layers className="w-4 h-4 text-secondary shrink-0" />
                  <span className="leading-tight">Siap Terhubung ERP</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-300">
                  <Zap className="w-4 h-4 text-secondary shrink-0" />
                  <span className="leading-tight">Performa Kilat & SEO</span>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-xs sm:text-sm transition-all duration-200 hover:shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Chat WhatsApp</span>
                </a>

                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-900 font-semibold text-xs sm:text-sm border border-gray-300 transition-colors cursor-pointer"
                >
                  <span>Isi Form Konsultasi</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Clean Highlights */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-300 hover:border-accent transition-colors space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-300 text-secondary flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
