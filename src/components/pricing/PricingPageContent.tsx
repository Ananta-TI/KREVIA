"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, Info } from "lucide-react";
import {
  SERVICE_PRICING_GROUPS,
  SERVICE_PRICING_FAQS,
  ServicePricingGroup,
} from "@/lib/pricingData";
import { SITE_CONFIG } from "@/lib/constants";
import { handleNavClick } from "@/lib/smoothScroll";
import { PricingTierCard } from "./PricingTierCard";
import { ComparisonTable } from "./ComparisonTable";
import { ServiceCardGrid } from "./ServiceCardGrid";
import { PricingFaq } from "./PricingFaq";

export function PricingPageContent() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 border-b border-gray-300/80 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-secondary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Daftar Harga</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 text-primary text-xs font-bold tracking-wider uppercase">
              <span>Daftar Harga — 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
              Harga Jasa Pembuatan Website &amp; <span className="text-secondary">Sistem Custom</span>.
            </h1>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Terukur, rentang jelas, dan final di quotation. Angka di bawah adalah estimasi awal —
              penawaran final ditentukan setelah kebutuhan, data, integrasi, dan ruang lingkup
              dikonfirmasi.
            </p>
          </div>

          {/* Category Anchor Pills */}
          <div className="flex flex-wrap gap-3 pt-8">
            {SERVICE_PRICING_GROUPS.map((group) => (
              <a
                key={group.id}
                href={`#${group.anchor}`}
                onClick={(e) => handleNavClick(e, `#${group.anchor}`)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-300 hover:border-secondary hover:shadow-sm transition-all text-xs sm:text-sm font-semibold text-gray-900 cursor-pointer"
              >
                <span>{group.navLabel}</span>
                <span className="text-secondary font-bold">{group.navPrice}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pricing Groups */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {SERVICE_PRICING_GROUPS.map((group) => (
          <PricingGroupSection key={group.id} group={group} />
        ))}
      </div>

      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-white border-y border-gray-300">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 text-primary text-xs font-bold tracking-wider uppercase">
              <span>Item 05</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Pertanyaan soal <span className="text-secondary">biaya</span>.
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Enam hal yang paling sering ditanyakan sebelum quotation dikirim.
            </p>
          </div>

          <PricingFaq faqs={SERVICE_PRICING_FAQS} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-primary text-white p-8 sm:p-12 rounded-3xl text-center shadow-xl border border-gray-700/80 space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            Langkah Berikutnya
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Butuh angka yang lebih presisi?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Sampaikan tujuan bisnis, fitur utama, dan target peluncuran — kami susun quotation yang
            lebih akurat untuk kebutuhan Anda.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent/90 text-primary font-bold text-sm transition-all hover:shadow-lg cursor-pointer"
            >
              <span>Minta Quotation</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
            <a
              href={SITE_CONFIG.getWhatsappUrl(
                "Halo Krevia Digital, saya ingin minta quotation untuk kebutuhan pembuatan website/sistem. Berikut gambaran kebutuhan saya:"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
            >
              <MessageSquare className="w-4 h-4 text-accent" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
          <p className="text-xs text-gray-400 pt-2">
            Harga pada halaman ini adalah estimasi. Belum termasuk pajak (bila berlaku) dan biaya
            layanan pihak ketiga.
          </p>
        </div>
      </section>
    </main>
  );
}

function PricingGroupSection({ group }: { group: ServicePricingGroup }) {
  return (
    <section
      id={group.anchor}
      className="scroll-mt-24 py-14 sm:py-20 border-b border-gray-300/70 last:border-b-0"
    >
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-secondary">
          Item {group.itemNumber}
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          {group.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{group.summary}</p>
      </div>

      {/* Tiered plans */}
      {group.tiers && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-10">
          {group.tiers.map((tier) => (
            <PricingTierCard key={tier.id} tier={tier} />
          ))}
        </div>
      )}

      {/* Comparison table */}
      {group.comparison && (
        <div className="pt-8">
          <ComparisonTable comparison={group.comparison} />
        </div>
      )}

      {/* Quick item cards */}
      {group.quickItems && (
        <div className="pt-10">
          <ServiceCardGrid items={group.quickItems} />
        </div>
      )}

      {/* Extra note table (e.g., AI monthly cost) */}
      {group.extraNote && (
        <div className="pt-10 space-y-3">
          <h3 className="text-lg font-bold text-gray-900">{group.extraNote.title}</h3>
          <div className="overflow-x-auto rounded-2xl border border-gray-300 bg-white">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-300 text-gray-900 font-bold">
                  {group.extraNote.columns.map((col, idx) => (
                    <th key={idx} className="py-3.5 px-4 whitespace-nowrap">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {group.extraNote.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-gray-50/70 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`py-3.5 px-4 ${
                          cIdx === 0 ? "font-semibold text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {group.extraNote.footnote && (
            <p className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-secondary" />
              <span>{group.extraNote.footnote}</span>
            </p>
          )}
        </div>
      )}

      {/* Cross link */}
      {group.crossLink && (
        <div className="pt-8">
          <Link
            href={group.crossLink.href}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
          >
            <span>[ {group.crossLink.text} ]</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </section>
  );
}
