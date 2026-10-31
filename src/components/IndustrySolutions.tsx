"use client";

import React from "react";
import { Building2, Wrench, Store, CheckCircle2, AlertCircle } from "lucide-react";

export function IndustrySolutions() {
  const industries = [
    {
      title: "Hotel & Penginapan",
      icon: Building2,
      tag: "Hospitality & Properti",
      problem: "Reservasi dari chat WhatsApp dan telepon sering bentrok, status kamar kosong tidak terpantau secara real-time.",
      solution: "Satu dashboard reservasi terintegrasi, pembaruan status kamar real-time, dan rekap laporan okupansi harian otomatis.",
    },
    {
      title: "Bengkel & Otomotif",
      icon: Wrench,
      tag: "Otomotif Plat BM",
      problem: "Riwayat servis kendaraan pelanggan tercecer di nota fisik, stok suku cadang cepat habis tanpa peringatan batas minimum.",
      solution: "Database riwayat servis per nomor polisi plat kendaraan, otomasi pengingat servis berkala, dan kartu stok suku cadang real-time.",
    },
    {
      title: "Kontraktor & Ritel UMKM",
      icon: Store,
      tag: "Konstruksi & Distribusi",
      problem: "Pengeluaran material proyek dicatat manual terpisah dari nota kasir, pencocokan arus kas memakan waktu berhari-hari.",
      solution: "Pencatatan nota material berbasis proyek, sistem kasir operasional langsung terhubung ke buku kas, dan visibilitas margin seketika.",
    },
  ];

  return (
    <section id="solutions" className="scroll-mt-24 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Solusi untuk <span className="text-secondary">Bisnis Lokal</span> di Riau.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
            Menjawab friksi operasional nyata yang dihadapi pelaku usaha di Pekanbaru dan sekitarnya tanpa teori rumit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-white text-gray-900 shadow-sm border border-gray-300 hover:border-secondary transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-gray-100 text-secondary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-5">
                    {ind.title}
                  </h3>

                  <div className="space-y-3.5">
                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-warning">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Tantangan Operasional</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {ind.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-secondary/5 border border-secondary/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-secondary" />
                        <span>Solusi Krevia ERP</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed">
                        {ind.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
