import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { ErpCapabilities } from "@/components/ErpCapabilities";
import { PricingSection } from "@/components/PricingSection";
import { ArrowRight, Layers, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Katalog Platform ERP Modular Indonesia | Krevia Digital",
  description:
    "Eksplorasi 44 modul ERP modular terpadu Krevia Digital. Didesain untuk menghubungkan alur operasional proyek, akuntansi, supply chain, dan SDM bisnis Indonesia tanpa vendor lock-in.",
  keywords: [
    "ERP Modular Indonesia",
    "Software ERP Pekanbaru",
    "Sistem ERP Konstruksi",
    "ERP Distribusi dan Manufaktur",
    "Aplikasi Akuntansi Bisnis",
    "Krevia Digital ERP",
  ],
};

export default function ErpProductPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero ERP Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 border-b border-gray-300/80 bg-white/70">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-secondary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Produk ERP</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
                Bangun Sistem Operasional <span className="text-secondary">Tanpa Keterikatan Vendor Kaku</span>.
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Krevia Digital menghadirkan 44 modul terpadu lintas sektor. Mulai dari modul yang dibutuhkan hari ini, lalu hubungkan sistem baru secara organik seiring pertumbuhan skala bisnis Anda.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-navy-light text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Jelajahi 44 Modul</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </a>

                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm border border-gray-300 transition-colors cursor-pointer"
                >
                  <span>Simulasi Biaya Langganan</span>
                </a>
              </div>
            </div>

            {/* Quick Highlights Card */}
            <div className="lg:col-span-4 bg-primary text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-gray-700/80 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Komitmen Arsitektur
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Kemandirian Data: Basis data transaksi sepenuhnya milik perusahaan Anda.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Zero Bloatware: Hanya aktifkan modul yang relevan dengan tim lapangan.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Skema Bertahap: Opsi basic Rp 399rb/bulan hingga skala custom enterprise.</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-700/80">
                <Link
                  href="/kontak"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors"
                >
                  <span>Diskusikan Arsitektur Khusus</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solusi Sektor Lokal (ADR-0002) */}
      <IndustrySolutions />

      {/* Direktori 44 Modul */}
      <ErpCapabilities />

      {/* Kalkulator Paket Langganan */}
      <PricingSection />

      {/* Conversion Banner to /kontak */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-primary text-white p-8 sm:p-12 rounded-3xl text-center shadow-xl border border-gray-700/80 space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Membutuhkan Alur Kerja yang Sangat Spesifik?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Tim rekayasa Krevia siap membantu memetakan kebutuhan unik bisnis Anda, mulai dari integrasi database legacy hingga modul kustom khusus.
          </p>
          <div className="pt-2">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-sm sm:text-base transition-all hover:shadow-lg cursor-pointer"
            >
              <span>Jadwalkan Konsultasi Teknis</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
