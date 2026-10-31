import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ArrowLeft, Layers, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
      <Navbar />

      <section className="pt-36 pb-20 px-4 sm:px-6 my-auto">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-gray-300 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center text-primary mx-auto">
            <Compass className="w-8 h-8 text-secondary" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Error 404 • Halaman Tidak Ditemukan
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Tautan yang Anda Tuju Tidak Tersedia.
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-md mx-auto">
              Halaman mungkin telah dipindahkan ke struktur rute baru atau alamat URL yang Anda masukkan kurang tepat.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-navy-light text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-accent" />
              <span>Kembali ke Beranda</span>
            </Link>

            <Link
              href="/produk/erp"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-xs sm:text-sm transition-colors"
            >
              <Layers className="w-4 h-4 text-secondary" />
              <span>Katalog ERP Modular</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
