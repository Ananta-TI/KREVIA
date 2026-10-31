"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-8 pt-4 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto bg-primary text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-700/80">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-gray-700/80">
          
          {/* Col 1: Brand & Desc */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block group" aria-label="Beranda Krevia Digital">
              <Image
                src="/logo-horizontal.png"
                alt="Krevia Digital"
                width={375}
                height={90}
                className="h-8 w-auto object-contain brightness-0 invert opacity-95 transition-opacity group-hover:opacity-100"
              />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Solusi platform ERP modular dan rekayasa perangkat lunak enterprise untuk bisnis modern. Menghubungkan alur operasional, anggaran, dan visibilitas proyek ke dalam satu ekosistem terpadu.
            </p>
            <p className="text-xs text-gray-400 font-medium">
              Bangun Lebih Cerdas. Beroperasi Lebih Baik.
            </p>
          </div>

          {/* Col 2: Products & Solutions */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">
              Produk &amp; Layanan
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/produk/erp"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold text-white">Katalog ERP Modular</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-bold">44 Modul</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-white transition-colors font-medium text-gray-200"
                >
                  Layanan Rekayasa &amp; Web Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/harga"
                  className="hover:text-white transition-colors font-medium text-gray-200"
                >
                  Daftar Harga Jasa
                </Link>
              </li>
              <li>
                <Link
                  href="/produk/erp#pricing"
                  className="hover:text-white transition-colors"
                >
                  Paket Langganan ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="hover:text-white transition-colors"
                >
                  Tanya Jawab (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Compliance */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-accent">
              Perusahaan &amp; Legalitas
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/tentang-kami"
                  className="hover:text-white transition-colors"
                >
                  Tentang Krevia Digital
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-white transition-colors text-white font-medium"
                >
                  Hubungi Kami &amp; Konsultasi &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/syarat-ketentuan"
                  className="hover:text-white transition-colors"
                >
                  Syarat &amp; Ketentuan (SLA)
                </Link>
              </li>
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="hover:text-white transition-colors"
                >
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-gray-700/80 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-accent shrink-0" />
                <a
                  href={SITE_CONFIG.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>@{SITE_CONFIG.instagramUsername}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {currentYear} Krevia Digital. Hak Cipta Dilindungi.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/syarat-ketentuan"
              className="hover:text-white transition-colors"
            >
              Syarat &amp; Ketentuan (SLA)
            </Link>
            <Link
              href="/kebijakan-privasi"
              className="hover:text-white transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Kembali ke Beranda &uarr;
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
