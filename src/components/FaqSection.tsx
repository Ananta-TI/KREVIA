"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate context

  const faqs: FaqItem[] = [
    {
      question: "Bagaimana keamanan data finansial dan operasional perusahaan kami?",
      answer:
        "Seluruh data operasional dan keuangan bisnis dienkripsi end-to-end, disimpan dalam basis data terisolasi per perusahaan (multi-tenant isolation), dan dicadangkan secara otomatis setiap hari. Anda memegang kendali dan kepemilikan penuh 100% atas data bisnis Anda dan dapat mengekspornya sewaktu-waktu.",
    },
    {
      question: "Berapa lama proses implementasi ERP dari awal hingga tim siap pakai?",
      answer:
        "Kami menerapkan metodologi peluncuran bertahap (modular rollout). Modul prioritas utama (seperti Keuangan, Kasir/POS, atau Inventaris Gudang) umumnya siap digunakan dalam 2 hingga 4 minggu pertama, mencakup penyiapan konfigurasi awal, impor data historis, dan pelatihan staf.",
    },
    {
      question: "Apakah data dari spreadsheet (Excel) atau sistem lama bisa dimigrasikan?",
      answer:
        "Ya. Tim teknis Krevia akan mendampingi proses pembersihan, pemetaan, dan impor data historis perusahaan Anda—mulai dari daftar master barang, kontak rekanan/vendor, saldo awal buku besar, hingga data RAB proyek—ke dalam sistem Krevia.",
    },
    {
      question: "Bagaimana pelatihan bagi staf lapangan atau tim yang belum terbiasa sistem digital?",
      answer:
        "Antarmuka Krevia dirancang lugas dengan alur kerja minim klik yang ramah ponsel. Kami memberikan sesi pendampingan dan pelatihan langsung (on-site untuk wilayah Pekanbaru & Riau, atau daring terpandu se-Indonesia) serta modul petunjuk visual praktis agar staf lapangan dapat beradaptasi dengan cepat.",
    },
    {
      question: "Untuk layanan Website Company Profile, bagaimana skema biaya dan pengerjaannya?",
      answer:
        "Pembuatan Website Company Profile dirancang berbasis investasi satu kali (one-time project) sesuai cakupan kebutuhan bisnis Anda, tanpa biaya langganan bulanan software yang membebani. Sudah mencakup penataan narasi profesional, domain kustom, infrastruktur server kilat, integrasi kontak WhatsApp resmi, serta arsitektur kode Next.js yang ramah mesin pencari (SEO).",
    },
    {
      question: "Bisakah platform ERP dikustomisasi jika bisnis kami memiliki alur kerja spesifik?",
      answer:
        "Tentu. Berkat arsitektur modular terpadu, Krevia dapat membangun modul bespoke atau menyesuaikan alur persetujuan (approval flow bertingkat), logika harga khusus industri, atau integrasi API pihak ketiga tanpa mengorbankan stabilitas sistem inti.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-24 px-4 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Pertanyaan yang Sering <span className="text-secondary">Diajukan</span>.
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Jawaban lugas dan transparan mengenai implementasi platform ERP modular, keamanan data bisnis, serta layanan digital Krevia.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-secondary/60 shadow-sm"
                    : "bg-white/80 border-gray-300 hover:border-gray-400 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-primary text-accent rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
