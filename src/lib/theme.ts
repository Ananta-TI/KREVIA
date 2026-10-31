/**
 * Brand Guideline: Krevia Digital
 * Single source of truth untuk token warna tema Krevia Digital.
 */

export const BRAND_COLORS = {
  // Brand Colors
  primary: "#101D35", // Navy gelap untuk background dark section, header, footer, tombol gelap
  secondary: "#2563EB", // Biru elektrik untuk Primary Button, ikon aktif, teks highlight
  accent: "#38BDF8", // Biru muda untuk Secondary Button, link, badge, aksen visual

  // Neutral Colors
  neutral: {
    gray900: "#0F172A", // Teks utama
    gray700: "#334155", // Teks sekunder
    gray500: "#64748B", // Teks muted
    gray300: "#CBD5E1", // Border / Line
    gray100: "#F1F5F9", // Background utama / Card
    gray50: "#F8FAFC", // Background alternatif terang
  },

  // Semantic Colors
  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#8B5CF6",
  },

  // Gradient
  gradient: {
    brand: "linear-gradient(to right, #101D35, #38BDF8)",
    brandDiagonal: "linear-gradient(135deg, #101D35 0%, #38BDF8 100%)",
  },
} as const;

export type BrandColors = typeof BRAND_COLORS;
