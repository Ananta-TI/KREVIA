# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Pengguna Utama: Pemilik bisnis, direktur operasional, manajer proyek, manajer pengadaan, dan pengambil keputusan di Pekanbaru, Riau, dan Indonesia yang ingin mengintegrasikan alur operasional bisnis (kontraktor & bisnis berbasis proyek, ritel, distribusi, perhotelan, hingga jasa) dari pencatatan manual/spreadsheet terfragmentasi ke satu platform ERP terpadu.
- Pengguna Sekunder: Akuntan perusahaan, staf lapangan, dan manajer gudang yang membutuhkan alur input harian yang praktis, cepat, dan terhubung langsung ke laporan manajemen.

## Product Purpose

Krevia Digital membangun platform ERP modular terpadu untuk membantu bisnis menghubungkan alur kerja, meningkatkan visibilitas operasional, dan mengambil keputusan berbasis data yang akurat. Platform Krevia dirancang fleksibel untuk berbagai industri melalui kombinasi modul standar, modul opsional, dan pengembangan kustom. Krevia Construction ERP dihadirkan sebagai salah satu wujud implementasi vertikal unggulan.

Keberhasilan diukur dari penyajian profil perusahaan dan penawaran langganan ERP modular yang kredibel, transparan, dan realistis mengenai status kesiapan modul, sehingga mendorong prospek bisnis berkualitas untuk berkonsultasi.

## Positioning

"Krevia Digital membangun platform ERP modular yang membantu bisnis menghubungkan operasional, meningkatkan visibilitas, dan mengambil keputusan lebih tepat."

- Tagline: *Bangun Lebih Cerdas. Beroperasi Lebih Baik.*
- Pesan Pendukung: *"Mulai dari modul yang dibutuhkan bisnis Anda, lalu kembangkan sistem seiring pertumbuhan operasional."*
- Mekanisme: Platform ERP modular yang dapat dikonfigurasi sesuai kebutuhan bisnis lintas industri (bukan software template kaku, bukan monolithic vendor lock-in).
- Postur Maturitas: Jujur dan transparan. Modul diklasifikasikan secara jelas antara status Tersedia, Direncanakan, dan Pengembangan Kustom.

## Operating Context

- Platform web responsif (desktop, tablet, mobile) dengan arsitektur multi-halaman Next.js App Router: Beranda (`/`), Katalog ERP Modular (`/produk/erp`), dan Profil Entitas (`/tentang-kami`).
- Saluran konversi langsung terhubung ke WhatsApp resmi (+62 851-2128-2601) dan email (support@kreviadigitalid.my.id).
- Lingkungan deployment: Vercel, Next.js App Router, React 19, TypeScript, Tailwind CSS.

## Capabilities and Constraints

- Bahasa Situs: Bahasa Indonesia profesional, lugas, dan terstruktur.
- Portofolio Produk & Layanan:
  - **Platform ERP Modular (Utama)**: Katalog 44 modul lintas operasional, finansial, proyek, dan supply chain.
  - **Layanan Pintu Masuk (On-ramp Service)**: Jasa pembuatan Website Company Profile profesional untuk membangun fondasi kredibilitas bisnis sebelum adopsi sistem enterprise.
- Skema Langganan Terpusat:
  - **Basic** (Rp 399.000/bulan): Fondasi ERP praktis untuk bisnis perintis (hingga 5 pengguna, 3 proyek/unit).
  - **Pro** (Rp 999.000/bulan): Alur kerja terhubung, persetujuan bertingkat, dan laporan mendalam (hingga 20 pengguna).
  - **Custom** (Kustom berdasarkan cakupan): Rekayasa alur bisnis spesifik, integrasi API pihak ketiga, multi-cabang skala penuh.
- Batasan Keras:
  - Jangan mengklaim kustomisasi tanpa batas atau integrasi instan tanpa evaluasi teknis.
  - Jangan menampilkan logo klien palsu, rating ulasan fiktif, atau sertifikasi yang belum terverifikasi.
  - Pisahkan konfigurasi data modul di `src/lib/pricingData.ts` terpisah dari komponen presentasi.

## Brand Commitments

- Nama Brand: Krevia Digital
- Palet Warna: B2B SaaS Profesional
  - Deep Navy: `#101D35` / `#0B1322`
  - Teal Accent: `#24D6B0`
  - Canvas Off-white: `#F4F7FB`
  - Slate Neutral: `#64748B` / `#334155`
- Nada Bicara: Profesional, modern, terpercaya, praktis, terstruktur, dan ramah tanpa jargon kosong (*Anti-Slop*).

## Evidence on Hand

- Kontak Resmi Terverifikasi: WhatsApp (+62 851-2128-2601), Email (support@kreviadigitalid.my.id).
- Domain & Hosting Resmi: `https://kreviadigitalid.my.id` di Vercel.
- Basis Operasional: Kota Pekanbaru, Riau, Indonesia.

## Product Principles

1. **Pragmatis & Anti-Slop**: Menghindari istilah pemasaran kosong; berakar pada penyelesaian hambatan operasional nyata.
2. **Modularitas Fleksibel**: Pelanggan membayar apa yang mereka butuhkan saat ini dan dapat menambah modul saat bisnis bertumbuh.
3. **Kejujuran Teknis**: Transparansi penuh pada batasan paket, alokasi pengguna, dan status kesiapan modul.
4. **Resistensi Rekayasa**: Waktu muat kilat, navigasi responsif, aksesibilitas tinggi, dan ketiadaan bloatware.

## Accessibility & Inclusion

- Rasio kontras teks WCAG AA pada seluruh permukaan.
- Navigasi keyboard penuh dan dukungan atribut ARIA.
- Dukungan `prefers-reduced-motion` untuk semua animasi.
