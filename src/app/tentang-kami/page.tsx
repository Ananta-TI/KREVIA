import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SITE_CONFIG } from "@/lib/constants";
import {
  ShieldCheck,
  Cpu,
  MapPin,
  Mail,
  MessageSquare,
  ArrowRight,
  Code2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami | Krevia Digital - Rekayasa Perangkat Lunak Enterprise",
  description:
    "Profil resmi Krevia Digital, startup rekayasa perangkat lunak dan platform ERP modular berbasis di Pekanbaru, Indonesia. Berkomitmen pada prinsip rekayasa Anti-Slop dan kejujuran teknis.",
  keywords: [
    "Tentang Krevia Digital",
    "Software House Pekanbaru",
    "Startup ERP Riau",
    "Rekayasa Perangkat Lunak Indonesia",
    "Anti-Slop Software Engineering",
  ],
};

export default function TentangKamiPage() {
  const principles = [
    {
      title: "Pragmatis & Anti-Slop",
      desc: "Kami menolak istilah pemasaran kosong. Solusi kami dirancang untuk memecahkan hambatan nyata: pencatatan nota tercecer, stok tidak akurat, dan laporan terlambat.",
      icon: ShieldCheck,
    },
    {
      title: "Modularitas Fleksibel",
      desc: "Tidak ada paksaan sistem monolitik kaku. Pelanggan memulai dari modul dasar yang dibutuhkan hari ini, lalu menambah kapabilitas seiring pertumbuhan omzet.",
      icon: Cpu,
    },
    {
      title: "Kejujuran Teknis",
      desc: "Kami mengklasifikasikan modul dengan jujur: Tersedia, Direncanakan, atau Pengembangan Kustom. Tidak ada klaim instan tanpa pembuktian teknis.",
      icon: CheckCircle2,
    },
    {
      title: "Ketahanan Arsitektur",
      desc: "Dibangun dengan stack performa tinggi Next.js, TypeScript, dan basis data aman. Waktu muat kilat, aksesibilitas tinggi, dan tanpa bloatware rapuh.",
      icon: Code2,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Header Section */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 border-b border-gray-300/80 bg-white/70">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-secondary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Tentang Kami</span>
          </nav>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Rekayasa Perangkat Lunak &amp; Platform ERP Modern dari <span className="text-secondary">Pekanbaru</span>.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
              Krevia Digital adalah perusahaan teknologi yang berfokus pada solusi enterprise berkinerja tinggi, platform ERP modular, dan digitalisasi alur kerja riil untuk bisnis di Pekanbaru, Riau, dan seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          
          {/* Section: Mengapa Krevia Lahir */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Menghilangkan Hambatan <span className="text-secondary">Fragmentasi Data</span>.
            </h2>
            <div className="space-y-3.5 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Banyak pelaku usaha di daerah terjebak di antara dua pilihan yang sama-sama menyulitkan: software template kaku yang tidak sesuai dengan alur lapangan, atau sistem enterprise luar negeri yang luar biasa mahal dengan biaya konsultan ratusan juta rupiah.
              </p>
              <p>
                Akibatnya, operasional bisnis harian kembali menggunakan spreadsheet terpisah, catatan WhatsApp, dan nota fisik yang rentan hilang.
              </p>
              <p>
                Krevia Digital hadir dengan pendekatan berbeda: <strong>arsitektur ERP modular terpadu</strong>. Kami memberi kebebasan bagi pemilik bisnis untuk menggunakan sistem yang tepat guna, transparan dalam biaya, dan dapat disesuaikan dengan alur riil perusahaan.
              </p>
            </div>
          </div>

          {/* Section: Manifesto Anti-Slop */}
          <div className="p-8 sm:p-10 rounded-3xl bg-primary text-white shadow-xl border border-gray-700/80 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Standar Etika Rekayasa
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Komitmen Anti-Slop Krevia.
              </h3>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Kami menolak <em>slop</em>—jargon pemasaran kosong seperti &quot;AI-powered revolutionary synergy&quot;, testimoni palsu, dan logo klien rekaan yang lazim ditemukan pada agensi generik. Kami percaya bahwa kredibilitas teknologi diuji dari keandalan baris kode, kecepatan sistem, dan kejelasan alur kerja yang dirasakan langsung oleh pengguna di lapangan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-700/80">
              {principles.map((pr) => {
                const Icon = pr.icon;
                return (
                  <div key={pr.title} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-accent" />
                      <h4 className="text-sm font-bold text-white">{pr.title}</h4>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{pr.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Legalitas & Domisili Operasional */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-300 shadow-sm space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Keberadaan Entitas &amp; Domisili Resmi
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Sebagai mitra teknologi untuk korporat dan pelaku usaha yang taat hukum, kami beroperasi secara terbuka dengan domisili nyata di Pekanbaru:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Lokasi Operasional</p>
                  <p className="text-sm font-semibold text-gray-900">{SITE_CONFIG.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Korespondensi</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm font-semibold text-gray-900 hover:text-secondary transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">WhatsApp Resmi</p>
                  <a href={SITE_CONFIG.getWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-900 hover:text-secondary transition-colors">
                    {SITE_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
              <span>Keamanan data &amp; privasi diatur dalam dokumen kepatuhan:</span>
              <div className="flex items-center gap-4">
                <Link href="/syarat-ketentuan" className="font-semibold text-gray-900 hover:underline">
                  Syarat &amp; Ketentuan (SLA) &rarr;
                </Link>
                <Link href="/kebijakan-privasi" className="font-semibold text-gray-900 hover:underline">
                  Kebijakan Privasi &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="text-center pt-4 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Siap Mentransformasikan Operasional Bisnis Anda?
            </h3>
            <p className="text-sm text-gray-700 max-w-md mx-auto">
              Konsultasikan kendala alur kerja atau kebutuhan website company profile bersama tim rekayasa Krevia.
            </p>
            <div className="pt-2">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Mulai Diskusi Kebutuhan</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
