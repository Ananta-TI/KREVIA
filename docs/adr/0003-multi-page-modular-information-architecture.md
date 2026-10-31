# 0003: Evolusi Arsitektur Informasi Multi-Page Modular

## Status
Accepted

## Konteks
Website Krevia Digital awalnya dirancang sebagai *single-page application* dengan seluruh seksi ditumpuk di beranda (`/`). Seiring bertambahnya penawaran layanan (katalog 44 modul ERP, paket langganan SaaS, dan jasa website company profile sebagai *on-ramp*), halaman beranda mengalami kelebihan beban informasi (*cognitive overload*) dan waktu muat awal yang berat. Calon klien B2B tingkat korporat juga membutuhkan navigasi yang jelas untuk mengevaluasi katalog modul dan kredibilitas legalitas perusahaan secara terpisah.

## Keputusan
1. **Pemisahan Rute Multi-Halaman Bertahap (Fase 1)**:
   - **Beranda (`/`)**: Menjadi *executive summary* berfokus pada proposisi nilai inti, ringkasan 4 pilar arsitektur ERP, bento layanan *on-ramp* (Website Company Profile), dan konversi cepat.
   - **Katalog ERP Modular (`/produk/erp`)**: Halaman khusus untuk mendalami arsitektur sistem, direktori interaktif 44 modul, simulasi paket langganan, dan restorasi studi kasus simulasi sektor riil lokal Riau (mematuhi ADR-0002).
   - **Tentang Kami (`/tentang-kami`)**: Halaman khusus profil pendiri, komitmen prinsip *Anti-Slop*, transparansi domisili operasional Pekanbaru, dan kepatuhan entitas bisnis.
2. **Pola Navigasi Hibrida**: Menggunakan `next/link` untuk perpindahan antar-rute mandiri, dengan penanganan anchor hash otomatis (`/#services`, `/#contact`) saat pengguna mengakses elemen beranda dari sub-halaman.
3. **Kanal Konversi**: Mempertahankan alur langsung WhatsApp resmi terverifikasi dan formulir konsultasi RFQ terstruktur dengan pemilihan jenis layanan tanpa ketergantungan pihak ketiga instan.
