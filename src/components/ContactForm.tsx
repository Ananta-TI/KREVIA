"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    businessType: "Kontraktor & Konstruksi Umum",
    serviceType: "Implementasi ERP Modular",
    operationalNeeds: "",
  });

  const [contactError, setContactError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    "Kontraktor & Konstruksi Umum",
    "Subkontraktor & Pekerjaan Spesialis",
    "Properti & Pengembangan Real Estat",
    "Ritel, Grosir & Distribusi",
    "Logistik & Pergudangan",
    "Manufaktur & Fabrikasi",
    "Perhotelan & Pariwisata",
    "Bisnis Berbasis Proyek / Layanan Lainnya",
  ];

  const serviceTypes = [
    "Implementasi ERP Modular",
    "Pembuatan Website Company Profile",
    "Custom Software",
    "System Integration",
    "UI/UX Design",
    "Digitalisasi Proses Bisnis",
  ];

  const validateContact = (val: string): boolean => {
    const trimmed = val.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    const isPhone = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,16}$/.test(trimmed);
    return isEmail || isPhone;
  };

  const sanitizeInput = (val: string, maxLen = 100): string => {
    return val.replace(/[<>]/g, "").trim().slice(0, maxLen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanName = sanitizeInput(formData.name, 100);
    const cleanContact = sanitizeInput(formData.contact, 100);
    const cleanNeeds = sanitizeInput(formData.operationalNeeds, 1000);

    if (!cleanName) {
      setContactError("Mohon masukkan nama Anda.");
      return;
    }

    if (!validateContact(cleanContact)) {
      setContactError(
        "Format kontak tidak valid. Masukkan nomor WhatsApp aktif (contoh: 0851...) atau email bisnis yang valid."
      );
      return;
    }
    setContactError("");
    setIsSubmitting(true);

    const text = `Halo Krevia Digital,
Saya ingin mendiskusikan operasional bisnis dan mengeksplorasi layanan Krevia:

• Nama: ${cleanName}
• Kontak: ${cleanContact}
• Bidang Industri / Bisnis: ${formData.businessType}
• Jenis Layanan: ${formData.serviceType}
• Kebutuhan & Kendala Saat Ini:
${cleanNeeds || "Belum dijelaskan spesifik."}

Mohon informasi mengenai estimasi pengerjaan dan jadwal diskusi lebih lanjut.`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const targetUrl = SITE_CONFIG.getWhatsappUrl(text);
      if (typeof window !== "undefined") {
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }
    }, 400);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      contact: "",
      businessType: "Kontraktor & Konstruksi Umum",
      serviceType: "Implementasi ERP Modular",
      operationalNeeds: "",
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-300 shadow-sm">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Diskusikan Kebutuhan Bisnis Anda
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Data yang Anda kirimkan dirahasiakan dan langsung diteruskan ke tim rekayasa Krevia.
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Nama Lengkap / Panggilan <span className="text-error">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Contoh: Yoga Andhika"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-sm transition-all"
            />
          </div>

          {/* Contact Field */}
          <div>
            <label htmlFor="contact-detail" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Nomor WhatsApp / Email Perusahaan <span className="text-error">*</span>
            </label>
            <input
              id="contact-detail"
              type="text"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="Contoh: 0851... atau nama@perusahaan.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-sm transition-all"
            />
          </div>

          {/* Business Type Field */}
          <div>
            <label htmlFor="business-type" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Bidang Industri / Domain Usaha
            </label>
            <select
              id="business-type"
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-sm transition-all"
            >
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Service Type Field */}
          <div>
            <label htmlFor="service-type" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Jenis Layanan <span className="text-error">*</span>
            </label>
            <select
              id="service-type"
              required
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-sm transition-all"
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Operational Needs Field */}
          <div>
            <label htmlFor="operational-needs" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Kendala Operasional / Catatan Kebutuhan
            </label>
            <textarea
              id="operational-needs"
              rows={4}
              value={formData.operationalNeeds}
              onChange={(e) => setFormData({ ...formData, operationalNeeds: e.target.value })}
              placeholder="Ceritakan kendala sistem, estimasi jumlah pengguna, atau modul yang paling mendesak dibutuhkan..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-sm transition-all resize-none"
            />
          </div>

          {contactError && (
            <div className="flex items-center gap-2 text-error text-xs font-medium bg-red-50 p-3 rounded-xl border border-error/20" role="alert">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{contactError}</span>
            </div>
          )}

          {/* Submit Action */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-full bg-secondary hover:bg-secondary/90 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>{isSubmitting ? "Menyiapkan Pesan..." : "Kirimkan ke WhatsApp Resmi Krevia"}</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-[11px] text-gray-500 text-center leading-relaxed">
            Menekan tombol akan membuka aplikasi WhatsApp resmi dengan draft pesan terformat rapi sesuai isian Anda di atas.
          </p>
        </form>
      ) : (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-success/10 text-success mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-extrabold text-gray-900">
            Permintaan Terkirim!
          </h3>

          <p className="text-sm text-gray-700 max-w-sm mx-auto leading-relaxed">
            Draft pesan konsultasi telah dialihkan ke WhatsApp resmi Krevia Digital (+62 851-2128-2601). Tim kami akan segera menindaklanjuti kebutuhan Anda.
          </p>

          <div className="pt-4">
            <button
              type="button"
              onClick={resetForm}
              className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-semibold transition-colors cursor-pointer"
            >
              Kirim Formulir Lain
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
