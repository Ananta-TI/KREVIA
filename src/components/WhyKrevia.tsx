"use client";

import React from "react";
import Link from "next/link";
import { Workflow, Hammer, Blocks, MessageSquareCheck, Milestone, ArrowRight } from "lucide-react";

export function WhyKrevia() {
  const pillars = [
    {
      icon: Workflow,
      title: "Alur Terhubung Menggantikan Data Terisolasi",
      description:
        "Alih-alih mengelola file spreadsheet terpisah untuk RAB, pengadaan, dan log lapangan, platform kami menghubungkan data secara dinamis sehingga perubahan di lapangan langsung memperbarui kalkulasi anggaran.",
    },
    {
      icon: Hammer,
      title: "Dirancang Sesuai Realitas Kerja Lapangan",
      description:
        "Software yang baik harus beradaptasi dengan ritme kerja manusia. Kami mengutamakan input data cepat, visual yang jernih, dan laporan harian ringkas daripada menu birokrasi yang membingungkan.",
    },
    {
      icon: Blocks,
      title: "Penerapan Modular & Bertahap",
      description:
        "Anda tidak perlu mengubah seluruh sistem kerja dalam satu malam. Mulai dari modul utama yang paling mendesak, buktikan kenyamanan tim, lalu perluas modul seiring kesiapan organisasi.",
    },
    {
      icon: MessageSquareCheck,
      title: "Cakupan Jelas & Akuntabilitas Terbuka",
      description:
        "Kami menetapkan ekspektasi yang jujur terkait jadwal implementasi, batasan teknis sistem, dan transparansi biaya sejak awal. Tanpa biaya tersembunyi atau janji berlebihan.",
    },
    {
      icon: Milestone,
      title: "Pola Pikir Sistem Berkelanjutan",
      description:
        "Membangun perangkat lunak perusahaan membutuhkan perbaikan berkala. Kami memperlakukan sistem ERP Anda sebagai aset jangka panjang yang terus berevolusi mendukung skala bisnis Anda.",
    },
  ];

  return (
    <section id="why-krevia" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-gray-100/60 border-y border-gray-300/70">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Mengapa Memilih <span className="text-secondary">Krevia Digital</span>.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Kami menghindari jargon pemasaran kosong dan klaim sepihak. Perangkat lunak kami dikembangkan dengan prinsip kejujuran rekayasa teknis dan keandalan operasional nyata.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-300 shadow-xs hover:border-secondary/40 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-2xl bg-primary text-accent flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Callout Card */}
          <div className="bg-primary text-white rounded-3xl p-7 sm:p-8 border border-gray-700/80 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Integritas Rekayasa
              </span>
              <h3 className="text-xl font-bold text-white">
                Kejujuran Maturitas Produk
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Sebagai entitas teknologi tahap awal, kami berkolaborasi erat dengan pemilik usaha untuk menguji dan memvalidasi sistem yang memecahkan hambatan bisnis secara nyata.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-700/80">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-semibold"
              >
                <span>Baca manifesto rekayasa &amp; profil entitas kami</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
