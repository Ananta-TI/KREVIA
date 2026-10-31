import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Database, Clock, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan (SLA) | Krevia Digital",
  description:
    "Ketentuan layanan, komitmen Service Level Agreement (SLA), kepemilikan data 100% milik klien, dan jaminan kerahasiaan platform ERP modular Krevia Digital.",
  keywords: [
    "Syarat Ketentuan Krevia Digital",
    "SLA ERP Modular",
    "Kepemilikan Data Klien",
    "Terms of Service Krevia",
  ],
};

export default function SyaratKetentuanPage() {
  const sections = [
    {
      title: "1. Ruang Lingkup Layanan",
      icon: FileText,
      content: (
        <div className="space-y-3">
          <p>
            Syarat &amp; Ketentuan ini mengatur penyediaan platform Enterprise Resource Planning (ERP) modular berbasis cloud, jasa pembuatan website company profile, integrasi sistem, dan rekayasa perangkat lunak oleh <strong>Krevia Digital</strong> kepada entitas bisnis, institusi, atau perorangan yang terdaftar sebagai klien.
          </p>
          <p>
            Dengan menggunakan sistem atau menandatangani dokumen penawaran kerja bersama Krevia Digital, klien menyetujui seluruh ketentuan yang tercantum dalam dokumen ini.
          </p>
        </div>
      ),
    },
    {
      title: "2. Kepemilikan Data 100% Milik Klien (Zero Lock-in)",
      icon: Database,
      content: (
        <div className="space-y-3">
          <p>
            Krevia Digital memegang prinsip etika rekayasa tertinggi mengenai data bisnis:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
            <li>
              <strong>Kepemilikan Mutlak:</strong> Seluruh basis data transaksi, rincian keuangan, master barang, data personal karyawan, catatan log harian, dan arsip proyek yang dimasukkan ke dalam platform Krevia sepenuhnya adalah aset milik klien.
            </li>
            <li>
              <strong>Akses Ekspor Mandiri:</strong> Klien berhak mengunduh dan mengekspor seluruh basis data perusahaan mereka dalam format standar (mis. CSV/Excel/JSON) sewaktu-waktu tanpa dikenakan denda atau biaya pelepasan data.
            </li>
            <li>
              <strong>Tanpa Monetisasi Data:</strong> Krevia Digital tidak akan pernah menjual, menyewakan, atau memanfaatkan data operasional klien untuk pelatihan model AI publik atau kepentingan periklanan pihak ketiga.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. Service Level Agreement (SLA) & Ketersediaan Sistem",
      icon: Clock,
      content: (
        <div className="space-y-3">
          <p>
            Kami berkomitmen menjaga reliabilitas operasional platform ERP klien dengan standar SLA berikut:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
            <li>
              <strong>Target Uptime:</strong> Krevia Digital menargetkan ketersediaan sistem cloud <strong>99.5%</strong> setiap bulan kalender, di luar jendela pemeliharaan terjadwal (scheduled maintenance) yang selalu diberitahukan minimal 48 jam sebelumnya.
            </li>
            <li>
              <strong>Pencadangan Harian (Automated Backups):</strong> Seluruh basis data dicadangkan otomatis setiap hari ke kluster penyimpanan terisolasi yang terenkripsi untuk mencegah kehilangan data akibat force majeure.
            </li>
            <li>
              <strong>Waktu Tanggap Darurat:</strong> Untuk gangguan kritis yang melumpuhkan operasional utama (Severity 1), tim teknis kami siaga dengan waktu respon maksimal 30 menit.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. Kerahasiaan Informasi (NDA Default)",
      icon: Lock,
      content: (
        <div className="space-y-3">
          <p>
            Setiap informasi operasional, logika biaya, strategi harga, dan formula bisnis internal klien yang diketahui oleh tim Krevia Digital selama masa konsultasi dan implementasi diperlakukan sebagai <strong>Informasi Rahasia</strong>.
          </p>
          <p>
            Krevia Digital siap menandatangani dokumen Non-Disclosure Agreement (NDA) formal yang mengikat secara hukum sebelum dilakukan audit sistem atau integrasi basis data sensitif.
          </p>
        </div>
      ),
    },
    {
      title: "5. Ketentuan Berlangganan & Pembayaran",
      icon: CheckCircle2,
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-5 space-y-1.5 text-gray-700">
            <li>
              <strong>Langganan ERP Modular:</strong> Ditagihkan secara periodik (bulanan atau tahunan) sesuai jumlah modul aktif dan kuota pengguna yang dipilih. Klien bebas menambah atau menonaktifkan modul opsional di awal setiap siklus tagihan.
            </li>
            <li>
              <strong>Proyek Bespoke &amp; Web Profile:</strong> Dilakukan berbasis termin milestone yang transparan (mis. DP awal, termin progres lolos User Acceptance Test, dan termin final setelah pelatihan tim).
            </li>
            <li>
              <strong>Transparansi Biaya:</strong> Tidak ada biaya tersembunyi (<em>hidden fees</em>). Semua biaya server, domain, dan dukungan teknis dituangkan tertulis dalam rincian penawaran resmi.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Garansi Rekayasa & Pemeliharaan",
      icon: CheckCircle2,
      content: (
        <div className="space-y-3">
          <p>
            Setiap implementasi custom software dan website company profile disertai masa garansi pemeliharaan teknis gratis (30 hingga 90 hari kalender tergantung skala proyek) untuk memastikan setiap bug atau anomali alur kerja diperbaiki secara tuntas tanpa biaya tambahan.
          </p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 border-b border-gray-300/80 bg-white/70">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-secondary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Syarat &amp; Ketentuan Layanan</span>
          </nav>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Syarat &amp; Ketentuan Layanan <span className="text-secondary">(Terms of Service &amp; SLA)</span>.
            </h1>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-1">
              Berlaku sejak 22 Oktober 2026 • Dokumen ini menetapkan komitmen ketersediaan sistem, perlindungan kerahasiaan data, dan hak hukum Anda saat bermitra bersama Krevia Digital.
            </p>
          </div>
        </div>
      </section>

      {/* Clauses Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.title}
                className="p-7 sm:p-9 rounded-3xl bg-white border border-gray-300 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-primary">
                    <Icon className="w-4 h-4 text-secondary" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {sec.title}
                  </h2>
                </div>

                <div className="text-sm sm:text-base text-gray-700 leading-relaxed pt-1">
                  {sec.content}
                </div>
              </div>
            );
          })}

          {/* Contact / Inquiries Box */}
          <div className="p-6 rounded-2xl bg-primary text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-700/80">
            <p className="text-xs sm:text-sm text-gray-300">
              Pertanyaan seputar penyesuaian klausul kontrak khusus korporat atau pengajuan draft NDA?
            </p>
            <Link
              href="/kontak"
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs shrink-0 transition-colors"
            >
              Hubungi Tim Legal Kami
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
