import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import {
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi Bisnis | Krevia Digital",
  description:
    "Hubungi tim rekayasa Krevia Digital di Pekanbaru, Riau. Jadwalkan diskusi untuk implementasi platform ERP modular atau pembuatan website company profile bisnis Anda.",
  keywords: [
    "Kontak Krevia Digital",
    "Konsultasi ERP Pekanbaru",
    "Kantor Krevia Digital Riau",
    "Nomor WhatsApp Krevia",
  ],
};

export default function KontakPage() {
  const preConsultationFaqs = [
    {
      q: "Berapa lama estimasi respon tim Krevia?",
      a: "Pesan WhatsApp dan formulir konsultasi yang masuk pada hari kerja (Senin–Jumat, 08.30–17.30 WIB) akan direspon oleh tim teknis kami dalam waktu 1–2 jam.",
    },
    {
      q: "Apa yang perlu kami persiapkan sebelum sesi diskusi?",
      a: "Cukup siapkan gambaran umum hambatan alur kerja saat ini (mis. nota tercecer, stok gudang sering selisih), estimasi jumlah pengguna, serta target waktu peluncuran.",
    },
    {
      q: "Apakah Krevia bersedia menandatangani NDA?",
      a: "Tentu. Untuk melindungi data operasional dan formula bisnis internal Anda, kami siap menandatangani Non-Disclosure Agreement (NDA) formal sebelum audit teknis dimulai.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 border-b border-gray-300/80 bg-white/70">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-secondary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Kontak &amp; Konsultasi</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Mari Diskusikan <span className="text-secondary">Alur Operasional Bisnis Anda</span>.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
              Apakah Anda ingin mengintegrasikan modul ERP, membangun website company profile berstandar korporat, atau merekayasa alur bisnis spesifik—tim kami siap mendengar dan memberikan solusi teknis yang realistis.
            </p>
          </div>
        </div>
      </section>

      {/* Main Single-Layer Grid: Info & Form */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Pre-consultation FAQs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-300 shadow-sm space-y-5">
              <h2 className="text-xl font-bold text-gray-900">
                Informasi Kontak Terverifikasi
              </h2>

              <ul className="space-y-3.5 text-sm text-gray-700">
                <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-300">
                  <MessageSquare className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">WhatsApp Resmi</p>
                    <a
                      href={SITE_CONFIG.getWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-gray-900 hover:text-secondary transition-colors"
                    >
                      {SITE_CONFIG.whatsappDisplay}
                    </a>
                    <p className="text-xs text-gray-500">Respon cepat via chat langsung</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-300">
                  <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Korespondensi</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="font-semibold text-gray-900 hover:text-secondary transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="text-xs text-gray-500">Untuk dokumen formal &amp; proposal RFP</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-300">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Domisili Kantor Operasional</p>
                    <p className="font-semibold text-gray-900">{SITE_CONFIG.location}</p>
                    <p className="text-xs text-gray-500">Layanan online seluruh Indonesia &amp; meeting on-site regional Riau</p>
                  </div>
                </li>

                <li className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-300">
                  <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Jam Operasional Layanan</p>
                    <p className="font-semibold text-gray-900">Senin – Jumat: 08.30 – 17.30 WIB</p>
                    <p className="text-xs text-gray-500">Pemantauan server &amp; darurat sistem 24/7 untuk klien aktif</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Pre-Consultation FAQ */}
            <div className="p-6 sm:p-8 rounded-3xl bg-primary text-white shadow-xl border border-gray-700/80 space-y-5">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent">
                  Panduan Pra-Konsultasi
                </h3>
              </div>

              <div className="space-y-4">
                {preConsultationFaqs.map((item, idx) => (
                  <div key={idx} className="space-y-1 pb-3 border-b border-gray-700/80 last:border-0 last:pb-0">
                    <h4 className="text-sm font-bold text-white">{item.q}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Privasi data Anda terlindungi penuh sesuai hukum Indonesia.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Container */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
