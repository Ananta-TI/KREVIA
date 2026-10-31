"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-primary text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-700/80 shadow-2xl relative overflow-hidden">
        
        {/* Ambient subtle glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
          
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-card border border-gray-700 text-accent text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tentang Krevia Digital</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Sistem Bisnis yang Dirancang Tepat Guna.
            </h2>

            <p className="text-sm font-medium text-gray-300">
              Kota Pekanbaru, Riau, Indonesia • Beroperasi Online &amp; On-Site
            </p>

            <div className="pt-2">
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all border border-gray-700 hover:border-accent"
              >
                <span>Profil Lengkap &amp; Manifesto Rekayasa</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Krevia Digital membangun produk perangkat lunak terintegrasi untuk membantu bisnis mengelola operasional kompleks dengan kejelasan dan kendali lebih baik. Kami fokus pada pemahaman alur kerja bisnis, pengembangan sistem yang praktis, dan menumbuhkan produk kami melalui implementasi terstruktur dan perbaikan berkelanjutan.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Sebagai entitas teknologi lokal, kami memprioritaskan ketajaman teknis, interoperabilitas sistem, dan transparansi daripada sekadar klaim pemasaran. Kami meyakini pemilik bisnis berhak mendapatkan sistem operasional yang memecahkan hambatan nyata tanpa kerumitan yang berlebihan atau keterikatan vendor yang kaku.
            </p>

            {/* Core Commitments */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-700/80">
              <div className="p-4 rounded-2xl bg-navy-dark border border-gray-800">
                <span className="block text-sm font-bold text-accent mb-1">
                  Praktis
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Dirancang mengikuti alur kerja operasional nyata di kantor dan lapangan.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-dark border border-gray-800">
                <span className="block text-sm font-bold text-accent mb-1">
                  Transparan
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Ruang lingkup kerja jelas, jadwal terukur, dan biaya yang disepakati bersama.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-dark border border-gray-800">
                <span className="block text-sm font-bold text-accent mb-1">
                  Bertahap
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Mulai dari modul prioritas, validasi dengan tim, lalu kembangkan secara aman.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
