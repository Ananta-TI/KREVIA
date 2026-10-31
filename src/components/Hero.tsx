"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.12]">
              Hubungkan Seluruh <span className="text-secondary">Operasional Bisnis</span> ke Dalam Satu Sistem.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              Krevia Digital membangun solusi ERP modular dan website berstandar korporat untuk membantu bisnis menghubungkan alur kerja, meningkatkan visibilitas operasional, dan memperkuat kredibilitas pasar.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/produk/erp"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:shadow-lg shadow-sm cursor-pointer group"
              >
                <span>Lihat Platform ERP</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/kontak"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-900 font-semibold text-sm sm:text-base border border-gray-300 transition-colors cursor-pointer"
              >
                Konsultasi Sekarang
              </Link>
            </div>

            {/* Credibility Micro-Bar */}
            <div className="pt-4 flex items-center gap-6 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>Logika operasional teruji lapangan</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-secondary" />
                <span>Arsitektur modular fleksibel</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Monogram Graphic & Live Operational Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] py-4">
            {/* Ambient Background Glow behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 rounded-full blur-3xl pointer-events-none" />

            {/* Center Monogram Graphic */}
            <div className="relative w-64 sm:w-72 aspect-square flex items-center justify-center">
              <Image
                src="/logo-mark.png"
                alt="Krevia Digital Emblem"
                width={320}
                height={320}
                className="w-full h-full object-contain select-none opacity-95 drop-shadow-md transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>

            {/* Floating Card 1: ERP Modular Status */}
            <div className="absolute top-2 left-0 sm:-left-4 bg-white/95 backdrop-blur-sm border border-gray-300/80 rounded-2xl p-4 shadow-lg shadow-gray-900/5 max-w-[210px] sm:max-w-[230px] transition-all hover:-translate-y-1 hover:shadow-xl text-left pointer-events-auto">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <p className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  ERP MODULAR
                </p>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mt-1">
                44+ Modul Bisnis
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Finance, HR, SCM & Proyek
              </p>
              <div className="mt-2.5">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary text-white text-[11px] font-medium shadow-xs">
                  Siap Terintegrasi
                </span>
              </div>
            </div>

            {/* Floating Card 2: Operational Data Sync */}
            <div className="absolute bottom-2 right-0 sm:-right-4 bg-white/95 backdrop-blur-sm border border-gray-300/80 rounded-2xl p-4 shadow-lg shadow-gray-900/5 max-w-[220px] sm:max-w-[250px] transition-all hover:-translate-y-1 hover:shadow-xl text-left pointer-events-auto">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success" />
                <p className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                  OPERASIONAL TERPADU
                </p>
              </div>
              <h3 className="text-sm font-bold text-gray-900 mt-1">
                Satu Sistem Terhubung
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Sinkronisasi Kantor & Lapangan
              </p>
              <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-medium text-gray-700">
                <span>Alur Data:</span>
                <span className="text-success font-bold">Real-Time</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
