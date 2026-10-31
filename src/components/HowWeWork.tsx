"use client";

import React from "react";
import { Search, Map, CalendarCheck, Code2, HeadphonesIcon } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Pahami Alur Bisnis",
      description:
        "Kami mendengarkan bagaimana bisnis Anda saat ini berjalan, kebiasaan pencatatan tim, dan kendala operasional yang paling sering muncul antara kantor dan lapangan.",
    },
    {
      number: "02",
      icon: Map,
      title: "Petakan Kebutuhan & Modul",
      description:
        "Kami menentukan modul ERP standar mana yang relevan, hak akses pengguna, serta struktur data dasar yang perlu disiapkan pada fase awal.",
    },
    {
      number: "03",
      icon: CalendarCheck,
      title: "Rencanakan Implementasi",
      description:
        "Menyepakati cakupan peluncuran bertahap, target jadwal realistis, pembagian tanggung jawab, dan kesepakatan komersial yang transparan.",
    },
    {
      number: "04",
      icon: Code2,
      title: "Kembangkan & Validasi",
      description:
        "Menyiapkan konfigurasi sistem dan menguji alur kerja langsung dengan data riil operasional Anda untuk memastikan staf dapat menggunakannya dengan nyaman.",
    },
    {
      number: "05",
      icon: HeadphonesIcon,
      title: "Dampingi & Evaluasi",
      description:
        "Setelah sistem aktif, kami memberikan pelatihan pengguna, pendampingan teknis, dan perbaikan berkelanjutan berdasarkan masukan harian tim Anda.",
    },
  ];

  return (
    <section id="how-we-work" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 text-primary text-xs font-bold tracking-wider uppercase">
            <span>Kerangka Kerja Implementasi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Cara Kami Bekerja <span className="text-secondary">Bersama Anda</span>.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Keberhasilan implementasi ERP memerlukan komunikasi yang terbuka dan tahapan terukur. Berikut adalah pendekatan kerja kolaboratif kami dari konsultasi awal hingga sistem berjalan.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.number}
                className="bg-white rounded-3xl p-6 border border-gray-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-secondary tracking-tight">
                      {st.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Tahap {st.number}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
