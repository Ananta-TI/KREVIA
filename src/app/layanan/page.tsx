import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import {
  Globe,
  Code2,
  GitMerge,
  Workflow,
  Palette,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  MessageSquare,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Layanan Rekayasa Perangkat Lunak & Web Profile | Krevia Digital",
  description:
    "Eksplorasi spektrum layanan rekayasa perangkat lunak Krevia Digital: Website Company Profile, Custom Software, Integrasi Sistem, dan Digitalisasi Alur Kerja Bisnis di Pekanbaru & Indonesia.",
  keywords: [
    "Jasa Website Company Profile Pekanbaru",
    "Custom Software Engineering Riau",
    "Integrasi Sistem ERP",
    "Digitalisasi Proses Bisnis",
    "Jasa Pembuatan Aplikasi Web Enterprise",
  ],
};

export default function LayananPage() {
  const enterpriseServices = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      category: "Bespoke Engineering",
      icon: Code2,
      desc: "Rekayasa aplikasi web, mobile, dan cloud yang dirancang spesifik untuk alur bisnis unik yang tidak dapat diakomodasi oleh software template pasaran.",
      features: [
        "Arsitektur kode bersih & modular berbasis TypeScript",
        "Logika bisnis disesuaikan 100% dengan alur kerja lapangan",
        "Kontrol penuh atas kode sumber dan basis data",
      ],
    },
    {
      id: "system-integration",
      title: "Integrasi Sistem & Pipeline API",
      category: "Interoperabilitas Data",
      icon: GitMerge,
      desc: "Menghubungkan aplikasi legacy, software akuntansi, payment gateway, dan database terpisah ke dalam satu pipeline data tersinkronisasi real-time.",
      features: [
        "Penyatuan data terfragmentasi tanpa entri manual ganda",
        "Integrasi webhook & RESTful API aman berkecepatan tinggi",
        "Pencegahan selisih stok dan rekonsiliasi otomatis",
      ],
    },
    {
      id: "workflow-digitization",
      title: "Digitalisasi Alur Kerja Bisnis",
      category: "Efisiensi Operasional",
      icon: Workflow,
      desc: "Mengubah formulir kertas, nota fisik yang rentan hilang, dan lembar approval manual menjadi alur digital terstruktur dengan persetujuan berjenjang via ponsel.",
      features: [
        "Multi-level approval bertingkat yang fleksibel",
        "Pencatatan nota material dan presensi berbasis GPS",
        "Laporan manajemen otomatis seketika",
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design & Design System",
      category: "High-Craft Interface",
      icon: Palette,
      desc: "Perancangan antarmuka digital berbasis riset perilaku pengguna lapangan dengan spesifikasi token presisi yang sinkron langsung dengan kode frontend.",
      features: [
        "Alur antarmuka minim klik yang mudah dipahami staf",
        "Desain kontras tinggi ramah layar ponsel di lapangan",
        "Konsistensi sistem visual korporat di semua modul",
      ],
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Konsultasi & Scoping",
      desc: "Memetakan kendala riil di lapangan, alur approval, dan batasan anggaran tanpa menjual fitur yang tidak Anda butuhkan.",
    },
    {
      step: "02",
      title: "Arsitektur & Prototipe",
      desc: "Menyusun skema data, diagram alur sistem, dan cetak biru visual yang disepakati bersama sebelum kode pertama ditulis.",
    },
    {
      step: "03",
      title: "Sprint Rekayasa",
      desc: "Pembangunan sistem secara bertahap dalam siklus sprint terukur dengan laporan progres berkala yang transparan.",
    },
    {
      step: "04",
      title: "Pelatihan & Handover",
      desc: "Pendampingan langsung tim operasional, migrasi data historis, serta masa garansi pemeliharaan sistem.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 border-b border-gray-300/80 bg-white/70">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-secondary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Layanan Rekayasa</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Layanan Rekayasa Perangkat Lunak &amp; <span className="text-secondary">Kehadiran Digital</span>.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-1">
              Krevia Digital menyediakan solusi rekayasa terstruktur—dari website profil perusahaan berstandar korporat sebagai pondasi awal, hingga sistem integrasi kustom berskala enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Bento: Website Company Profile (On-ramp Service) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-gray-300 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
                  <Globe className="w-3.5 h-3.5 text-secondary" />
                  <span>Layanan Pintu Masuk • On-ramp Service</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  Pembuatan Website Company Profile <span className="text-secondary">Profesional</span>.
                </h2>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Bagi bisnis yang sedang berkembang atau ingin memperkuat citra profesional sebelum mengintegrasikan operasional internal, Krevia merancang website profil berstandar enterprise yang cepat, elegan, SEO-ready, dan siap dihubungkan ke sistem ERP saat perusahaan siap bertumbuh.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>Desain bespoke tanpa template CMS rapuh</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>Arsitektur kode performa tinggi Next.js</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>Optimasi SEO lokal &amp; kata kunci industri</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>Tanpa biaya langganan bulanan software</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-navy-light text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
                  >
                    <span>Konsultasikan Pembuatan Website</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </Link>
                  <a
                    href={SITE_CONFIG.getWhatsappUrl("Halo Krevia Digital, saya ingin konsultasi mengenai pembuatan Website Company Profile.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-secondary" />
                    <span>Chat WhatsApp Langsung</span>
                  </a>
                </div>
              </div>

              {/* Right Column: High-Craft Showcase Card */}
              <div className="lg:col-span-5 bg-primary text-white p-7 sm:p-8 rounded-3xl shadow-xl border border-gray-700/80 space-y-5">
                <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-accent">
                    Spesifikasi Kualitas
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-success/20 text-success font-bold">
                    Tersedia
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-gray-700/60">
                    <span className="text-gray-300">Skor Performa Core Web Vitals</span>
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-accent" /> 95–100 / 100
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-700/60">
                    <span className="text-gray-300">Model Pembayaran</span>
                    <span className="font-bold text-white">Investasi Satu Kali (Milestone)</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-700/60">
                    <span className="text-gray-300">Kesiapan Integrasi</span>
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-accent" /> Ready for ERP Hooks
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Garansi Bug &amp; Pemeliharaan</span>
                    <span className="font-bold text-white">30 Hari Bebas Biaya</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300">
                  Setiap website diserahkan dengan dokumentasi pengelolaan konten dan akses domain penuh milik perusahaan Anda.
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Grid (4 Pillars) */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-transparent">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Solusi Rekayasa <span className="text-secondary">Sistem Enterprise</span>.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base max-w-2xl leading-relaxed">
              Didesain khusus untuk perusahaan yang membutuhkan fleksibilitas rekayasa mendalam tanpa kompromi vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enterpriseServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-300 shadow-sm hover:border-secondary transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center text-secondary">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                        {svc.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-gray-200 text-xs text-gray-700">
                    {svc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-y border-gray-300">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Metodologi Sprint Terstruktur.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Kami memegang prinsip komunikasi terbuka dan pelaporan progres bertahap agar ekspektasi Anda selaras sejak awal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div key={m.step} className="p-6 rounded-3xl bg-gray-50 border border-gray-300 space-y-3">
                <span className="block text-3xl font-extrabold text-primary/30">
                  {m.step}
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA to /kontak */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-primary text-white p-8 sm:p-12 rounded-3xl text-center shadow-xl border border-gray-700/80 space-y-5">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Punya Kebutuhan Digital yang Ingin Didiskusikan?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Mulai dari pembuatan website profil hingga rekayasa alur bisnis yang kompleks, kami siap mendengar kendala Anda.
          </p>
          <div className="pt-2">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-sm sm:text-base transition-all hover:shadow-lg cursor-pointer"
            >
              <span>Buka Formulir Konsultasi</span>
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
