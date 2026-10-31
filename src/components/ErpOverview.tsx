"use client";

import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Wallet, 
  Truck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles
} from "lucide-react";

export function ErpOverview() {
  const pillars = [
    {
      title: "Operasional & Proyek",
      icon: Briefcase,
      tag: "Proyek & Lapangan",
      desc: "Menghubungkan catatan harian lapangan, realisasi RAB, dan approval progres fisik agar deviasi anggaran terdeteksi sejak dini.",
      points: ["Site Daily Log Terpadu", "Kontrol Deviasi RAB", "Persetujuan Bertingkat"],
    },
    {
      title: "Keuangan & Akuntansi",
      icon: Wallet,
      tag: "Arus Kas & Buku Besar",
      desc: "Rekonsiliasi transaksi kasir, pencatatan invoice, dan laporan laba-rugi otomatis tanpa perlu rekap ulang manual di akhir bulan.",
      points: ["Pencatatan Multi-Rekening", "Invoice & Pelunasan Cepat", "Laporan Keuangan Otomatis"],
    },
    {
      title: "Supply Chain & Gudang",
      icon: Truck,
      tag: "Logistik & Inventaris",
      desc: "Sinkronisasi pesanan pembelian (PO), surat jalan penerimaan barang, dan peringatan batas minimum stok secara real-time.",
      points: ["Kontrol Stok Multi-Gudang", "Pencocokan PO & Faktur", "Peringatan Stok Kritis"],
    },
    {
      title: "SDM & Penggajian",
      icon: Users,
      tag: "Karyawan & Payroll",
      desc: "Manajemen data karyawan, presensi berbasis lokasi GPS untuk staf lapangan, serta perhitungan lembur dan slip gaji digital.",
      points: ["Presensi GPS Lapangan", "Kalkulasi Lembur Otomatis", "Distribusi Slip Gaji"],
    },
  ];

  return (
    <section id="erp-overview" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Empat Pilar Sistem <span className="text-secondary">Operasional Bisnis Terpadu</span>.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Krevia Digital merancang modularitas sistem berbasis fondasi yang solid. Setiap pilar dapat diaktifkan secara bertahap sesuai kesiapan tim Anda.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/produk/erp"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-navy-light text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer group"
            >
              <span>Eksplorasi 44 Modul Lengkap</span>
              <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil) => {
            const Icon = pil.icon;
            return (
              <div
                key={pil.title}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-300 shadow-sm hover:border-secondary transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center text-secondary">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                      {pil.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {pil.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {pil.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-200 text-xs text-gray-700">
                  {pil.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Banner to /produk/erp */}
        <div className="p-6 sm:p-8 rounded-3xl bg-primary text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Mencari modul spesifik untuk industri Anda?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Kami menyediakan 44 modul mulai dari basic hingga kustomisasi mendalam lengkap dengan simulasi biaya.
              </p>
            </div>
          </div>

          <Link
            href="/produk/erp"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-xs sm:text-sm shrink-0 transition-all shadow-xs cursor-pointer"
          >
            <span>Buka Katalog Modul &amp; Harga</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>
        </div>

      </div>
    </section>
  );
}
