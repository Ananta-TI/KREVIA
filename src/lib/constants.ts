/**
 * Konfigurasi situs terpusat dan kontak resmi Krevia Digital.
 * Single source of truth untuk seluruh komponen dan halaman.
 */
export { BRAND_COLORS, type BrandColors } from "./theme";

export const SITE_CONFIG = {
  name: "Krevia Digital",
  tagline: "Bangun Lebih Cerdas. Beroperasi Lebih Baik.",
  description:
    "Krevia Digital membangun solusi platform ERP modular untuk membantu bisnis mengintegrasikan operasional, meningkatkan visibilitas, dan mengambil keputusan lebih tepat.",
  whatsappNumber: "6285121282601",
  whatsappDisplay: "+62 851-2128-2601",
  email: "support@kreviadigitalid.my.id",
  instagramUsername: "kreviadigital",
  instagramUrl: "https://www.instagram.com/kreviadigital",
  location: "Pekanbaru, Riau, Indonesia",
  getWhatsappUrl(message?: string) {
    const defaultMsg =
      "Halo Krevia Digital, saya ingin berdiskusi mengenai operasional bisnis dan mengeksplorasi solusi ERP modular dari Krevia.";
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  },
} as const;
