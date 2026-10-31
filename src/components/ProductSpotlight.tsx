"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  FileSpreadsheet, 
  Calculator, 
  Eye, 
  PackageSearch, 
  FileCheck, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2 
} from "lucide-react";

export function ProductSpotlight() {
  const challenges = [
    {
      icon: FileSpreadsheet,
      problem: "Data Proyek Terfragmentasi",
      description:
        "Pembaruan proyek, persetujuan material, dan catatan harian tercecer di berbagai file spreadsheet dan riwayat percakapan grup WhatsApp.",
    },
    {
      icon: Calculator,
      problem: "Kebutaan Varian Anggaran",
      description:
        "Ketidaksesuaian antara baseline RAB dan realisasi pengeluaran lapangan baru terdeteksi setelah tagihan membengkak, memicu kerugian proyek.",
    },
    {
      icon: Eye,
      problem: "Visibilitas Lapangan Terbatas",
      description:
        "Manajemen kesulitan memverifikasi progres fisik harian nyata di lapangan tanpa menunggu laporan manual berkala yang sering terlambat.",
    },
    {
      icon: PackageSearch,
      problem: "Keterlambatan Rekonsiliasi Pengadaan",
      description:
        "Pesanan pembelian, surat jalan penerimaan barang, dan sisa inventaris gudang sulit dicocokkan, memicu pemborosan atau penghentian kerja.",
    },
    {
      icon: FileCheck,
      problem: "Penyusunan Laporan Manual Berulang",
      description:
        "Staf proyek dan estimator menghabiskan banyak waktu merekap berkas laporan secara manual daripada fokus pada pelaksanaan operasional.",
    },
  ];

  return (
    <section id="construction-erp" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6">
      <div id="solutions" className="scroll-mt-24 max-w-6xl mx-auto">
        
        {/* Main Dark Editorial Card */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-700/80 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-card border border-gray-700 text-accent text-xs font-bold tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5" />
              <span>Solusi Unggulan • Akses Awal / Dalam Pengembangan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Manajemen Konstruksi, Saling Terhubung.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Sebagai salah satu wujud nyata fleksibilitas platform modular kami, <strong className="text-white font-semibold">Krevia Construction ERP</strong> dibangun khusus untuk menjembatani koordinasi antara staf lapangan, estimator RAB, dan pimpinan perusahaan.
            </p>
          </div>

          {/* Core Outcome Banner */}
          <div className="my-10 p-6 rounded-2xl bg-navy-light/60 border border-gray-700/70 relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                Hasil yang Dituju
              </span>
              <p className="text-base sm:text-lg font-semibold text-white">
                &ldquo;Visibilitas terpadu untuk proyek, anggaran, aktivitas lapangan, dan data operasional bisnis.&rdquo;
              </p>
            </div>
            <Link
              href="/produk/erp"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs sm:text-sm shrink-0 transition-all shadow-xs cursor-pointer"
            >
              <span>Eksplorasi Katalog ERP & Harga</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* The Operational Gaps We Are Solving */}
          <div className="relative z-10 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Kendala operasional nyata yang kami selesaikan:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {challenges.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-navy-dark border border-gray-800 hover:border-gray-700 transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-9 h-9 rounded-xl bg-navy-light flex items-center justify-center text-accent">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {item.problem}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center gap-1.5 text-xs text-accent font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Terakomodasi dalam Arsitektur ERP</span>
                    </div>
                  </div>
                );
              })}

              {/* Status & Validation Card */}
              <div className="p-5 rounded-2xl bg-navy-light/40 border border-dashed border-gray-700 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-warning/10 flex items-center justify-center text-warning">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Divalidasi Bersama Praktisi Lapangan
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Alur modul dipetakan langsung bersama kontraktor, teknisi sipil, dan akuntan proyek untuk memastikan kemudahan adopsi nyata.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-800/80 text-xs text-gray-400 font-medium">
                  Status: Prototipe Aktif & Validasi Kebutuhan
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
