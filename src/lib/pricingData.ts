/**
 * Centralized, typed pricing and comprehensive modular ERP catalog configuration for Krevia ERP.
 * Modeled after enterprise ERP suites (Odoo, Mekari, SAP Business One) for businesses across industries.
 */

export type PlanId = "basic" | "pro" | "custom";

export type ModuleStatus = "available" | "planned" | "custom";

export interface ErpModule {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  status: ModuleStatus;
  statusLabel: string;
  includedIn: PlanId[];
  isHighlight?: boolean;
}

export interface PricingPlan {
  id: PlanId;
  name: string;
  badge?: string;
  priceFormatted: string;
  billingPeriod: string;
  description: string;
  userLimit: string;
  projectLimit: string;
  storageLimit: string;
  supportLevel: string;
  features: string[];
  ctaText: string;
  featured: boolean;
  prefilledMessage: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    priceFormatted: "Rp 399.000",
    billingPeriod: "/ bulan",
    description:
      "Untuk bisnis yang mulai menata operasional dengan fondasi ERP yang praktis, rapi, dan terstruktur.",
    userLimit: "Hingga 5 Pengguna",
    projectLimit: "Hingga 3 Unit Usaha / Proyek Aktif",
    storageLimit: "Penyimpanan Standar Cloud Terkelola",
    supportLevel: "Dukungan Teknis Standar (Email & Chat)",
    features: [
      "Workspace operasional terpusat & dasbor kontrol harian",
      "Manajemen pengguna & hak akses dasar (Role-Based Access Control)",
      "Pencatatan master data kontak pelanggan, vendor & inventaris dasar",
      "Pencatatan kas masuk, kas keluar & laporan keuangan standar",
      "Manajemen pesanan penjualan & faktur standar (Invoicing)",
      "Manajemen proyek atau tugas dasar dengan status milestone",
      "Laporan operasional siap ekspor format Excel dan PDF",
      "Pembaruan keamanan sistem otomatis tanpa biaya server terpisah",
    ],
    ctaText: "Konsultasi Paket Basic",
    featured: false,
    prefilledMessage:
      "Halo Krevia Digital, saya tertarik berdiskusi mengenai Paket Basic ERP (Rp399.000/bln) untuk kebutuhan operasional bisnis saya.",
  },
  {
    id: "pro",
    name: "Pro",
    badge: "Paling Populer",
    priceFormatted: "Rp 999.000",
    billingPeriod: "/ bulan",
    description:
      "Untuk bisnis berkembang yang membutuhkan integrasi lintas departemen, kontrol biaya ketat, dan alur persetujuan.",
    userLimit: "Hingga 20 Pengguna",
    projectLimit: "Kapasitas Unit Usaha / Proyek Diperluas",
    storageLimit: "Penyimpanan Prioritas & Riwayat Dokumen Lengkap",
    supportLevel: "Dukungan Respons Cepat & Sesi Pendampingan Teknis",
    features: [
      "Semua fitur yang tercakup dalam Paket Basic",
      "Pilihan modul standar terintegrasi yang lebih luas (Keuangan, Proyek, Pengadaan, Inventaris)",
      "Mesin alur persetujuan bertingkat (multi-level approval workflows)",
      "Buku Besar (General Ledger), Laporan Laba Rugi & Arus Kas real-time",
      "Perencanaan RAB & kontrol varian pengeluaran aktual vs anggaran",
      "Surat Permintaan Pembelian (PR) & Surat Pesanan (PO) terhubung ke gudang",
      "Manajemen multi-gudang, transfer stok & peringatan minimum stok",
      "Visibilitas lintas unit usaha atau multi-proyek dalam satu dasbor",
      "Jejak audit (audit trail) lengkap & notifikasi alur kerja otomatis",
    ],
    ctaText: "Konsultasi Paket Pro",
    featured: true,
    prefilledMessage:
      "Halo Krevia Digital, saya ingin berdiskusi mengenai Paket Pro ERP (Rp999.000/bln) untuk mengintegrasikan alur operasional bisnis saya yang sedang berkembang.",
  },
  {
    id: "custom",
    name: "Custom",
    badge: "Solusi Skala Penuh",
    priceFormatted: "Kustom",
    billingPeriod: "Berdasarkan Cakupan",
    description:
      "Konfigurasi ERP komprehensif yang dirancang khusus mengikuti proses bisnis unik, multi-cabang, dan integrasi API pihak ketiga.",
    userLimit: "Kapasitas Pengguna Fleksibel Sesuai Kebutuhan",
    projectLimit: "Multi-Cabang, Multi-Pabrik & Multi-Proyek Tanpa Batas",
    storageLimit: "Kapasitas Khusus / Opsi On-Premise / Private Cloud",
    supportLevel: "Dedicated Account Manager & Perjanjian Layanan Terkelola (SLA)",
    features: [
      "Kombinasi modul bebas sesuai seluruh rantai nilai bisnis Anda",
      "Kustomisasi aturan logika bisnis, rumus kalkulasi, dan approval matriks",
      "Integrasi API pihak ketiga (sistem perbankan, POS eksternal, e-faktur pajak, ERP legacy)",
      "Ekstensi khusus industri (Konstruksi, Distribusi Grosir, Manufaktur, Rumah Sakit/Klinik, Perhotelan)",
      "Arsitektur multi-perusahaan, holding, multi-cabang dengan konsolidasi otomatis",
      "Pendampingan implementasi langsung di lokasi, migrasi data lama, dan pelatihan intensif seluruh tim",
    ],
    ctaText: "Konsultasi ERP Kustom",
    featured: false,
    prefilledMessage:
      "Halo Krevia Digital, saya ingin mendiskusikan implementasi ERP Kustom dengan spesifikasi dan kebutuhan alur kerja unik untuk perusahaan saya.",
  },
];

export interface ErpSuiteMetadata {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  summary: string;
  odooMekariEquivalent: string;
  highlights: string[];
}

export const ERP_SUITE_METADATA: ErpSuiteMetadata[] = [
  {
    id: "finance",
    name: "Keuangan & Akuntansi",
    shortName: "Finansial",
    badge: "Fondasi Fiskal",
    summary: "Buku besar otomatis, rekonsiliasi kas, arus kas real-time, dan kepatuhan faktur pajak Indonesia.",
    odooMekariEquivalent: "Setara Mekari Jurnal & Odoo Invoicing/Accounting",
    highlights: ["Buku Besar & Jurnal Otomatis", "Piutang & Hutang Usaha", "Laporan Keuangan Terpadu", "Kalkulasi Pajak & e-Faktur"],
  },
  {
    id: "hr",
    name: "SDM & Payroll",
    shortName: "SDM",
    badge: "Manajemen Karyawan",
    summary: "Pengelolaan data pegawai, absensi GPS, alur cuti & lembur, payroll PPh 21 TER, dan portal mandiri karyawan.",
    odooMekariEquivalent: "Setara Mekari Talenta & Odoo Employees/Payroll",
    highlights: ["Database Karyawan & Kontrak", "Payroll PPh 21 & BPJS", "Presensi GPS Mobile", "Portal Mandiri Karyawan (ESS)"],
  },
  {
    id: "procurement",
    name: "Pengadaan & Pembelian",
    shortName: "Pengadaan",
    badge: "Kontrol Belanja",
    summary: "Standarisasi permintaan pembelian (PR), pesanan resmi (PO), evaluasi kinerja vendor, dan validasi 3-way matching.",
    odooMekariEquivalent: "Setara Odoo Purchase & Mekari Invoicing/Expense",
    highlights: ["Surat Permintaan Pembelian (PR)", "Pesanan Pembelian (PO)", "Evaluasi Rekanan Vendor", "3-Way Matching Invoice"],
  },
  {
    id: "inventory",
    name: "Inventaris & Gudang",
    shortName: "Gudang & SCM",
    badge: "Rantai Pasok",
    summary: "Visibilitas stok multi-gudang dan transit proyek, peringatan safety stock, serta pelacakan batch & serial.",
    odooMekariEquivalent: "Setara Odoo Inventory/Barcode & Mekari Jurnal SCM",
    highlights: ["Multi-Gudang & Lokasi Proyek", "Mutasi Stok & Stock Opname", "Reorder Alerts & Safety Stock", "Pelacakan Batch & Serial"],
  },
  {
    id: "sales",
    name: "Penjualan & CRM",
    shortName: "Penjualan",
    badge: "Pertumbuhan Omzet",
    summary: "Pipeline prospek klien, konversi quotation ke SO, notifikasi WhatsApp Business API, POS kasir, dan helpdesk tiket.",
    odooMekariEquivalent: "Setara Mekari Qontak & Odoo CRM/Point of Sale",
    highlights: ["Pipeline CRM Prospek Klien", "Quotation to Sales Order", "Integrasi WhatsApp Business", "POS Kasir & Helpdesk"],
  },
  {
    id: "project",
    name: "Proyek & Lapangan",
    shortName: "Proyek",
    badge: "Eksekusi Proyek",
    summary: "Pengendalian WBS, kurva S deviasi biaya anggaran RAB, log cuaca dan mandor harian, serta work order teknisi.",
    odooMekariEquivalent: "Setara Odoo Project/Timesheets & Field Service",
    highlights: ["Struktur WBS & Milestone", "RAB Kurva S Real-time", "Log Harian Lapangan", "Servis Teknisi (Work Order)"],
  },
  {
    id: "manufacturing",
    name: "Manufaktur & Produksi",
    shortName: "Produksi",
    badge: "Pabrikasi & QC",
    summary: "Struktur resep multi-level BOM, perintah kerja SPK pabrik, uji mutu QC material/output, dan servis preventif mesin.",
    odooMekariEquivalent: "Setara Odoo Manufacturing (MRP) & Maintenance",
    highlights: ["Formula Bill of Materials (BOM)", "SPK & Alokasi Bahan Baku", "Inspeksi Kontrol Kualitas QC", "Pemeliharaan Mesin Preventif"],
  },
  {
    id: "governance",
    name: "Tata Kelola & Alur Kerja",
    shortName: "Tata Kelola",
    badge: "Kepatuhan & Integrasi",
    summary: "Mesin alur persetujuan bertingkat, audit trail tidak terhapus, repositori dokumen terenkripsi, dan webhook API terbuka.",
    odooMekariEquivalent: "Setara Odoo Studio/Automation & Enterprise Security",
    highlights: ["Alur Persetujuan Bertingkat", "Jejak Audit (Audit Trail)", "Arsip Dokumen Terenkripsi", "API Terbuka & Multi-Cabang"],
  },
];

export const ERP_MODULE_CATEGORIES = [
  { id: "all", label: "Semua Modul" },
  { id: "finance", label: "Keuangan & Akuntansi" },
  { id: "hr", label: "SDM & Payroll" },
  { id: "procurement", label: "Pengadaan & Pembelian" },
  { id: "inventory", label: "Inventaris & Gudang" },
  { id: "sales", label: "Penjualan & CRM" },
  { id: "project", label: "Proyek & Lapangan" },
  { id: "manufacturing", label: "Manufaktur & Produksi" },
  { id: "governance", label: "Tata Kelola & Alur Kerja" },
] as const;

/**
 * Katalog harga jasa pembuatan (website, sistem bisnis, integrasi, AI).
 * Memakai rentang estimasi awal — angka final keluar di quotation setelah scoping.
 */

export interface ServiceTier {
  id: string;
  name: string;
  scopeLabel: string;
  priceFormatted: string;
  priceMin: string;
  priceMax: string;
  features: string[];
  featured?: boolean;
  prefilledMessage: string;
}

export interface ServiceComparisonRow {
  feature: string;
  values: string[];
}

export interface ServiceComparison {
  columns: string[];
  rows: ServiceComparisonRow[];
}

export interface ServiceQuickItem {
  id: string;
  name: string;
  priceFormatted: string;
  description: string;
}

export interface ServicePricingGroup {
  id: string;
  anchor: string;
  itemNumber: string;
  navLabel: string;
  navPrice: string;
  title: string;
  summary: string;
  /** Paket bertingkat (Basic/Standard/Premium) dengan tabel perbandingan. */
  tiers?: ServiceTier[];
  comparison?: ServiceComparison;
  /** Kartu ringkas "Mulai Rp…" untuk layanan tanpa tingkatan paket. */
  quickItems?: ServiceQuickItem[];
  /** Catatan tambahan (mis. tabel biaya bulanan AI). */
  extraNote?: {
    title: string;
    columns: string[];
    rows: string[][];
    footnote?: string;
  };
  /** Tautan tindak lanjut opsional di bawah blok. */
  crossLink?: {
    text: string;
    href: string;
  };
}

export const SERVICE_PRICING_GROUPS: ServicePricingGroup[] = [
  {
    id: "website",
    anchor: "website",
    itemNumber: "01",
    navLabel: "Website Company Profile",
    navPrice: "Mulai Rp1,5 juta",
    title: "Website Company Profile",
    summary:
      "Representasi digital resmi bisnis Anda, bekerja 24 jam membangun kredibilitas di mata klien dan mitra.",
    tiers: [
      {
        id: "website-basic",
        name: "Basic",
        scopeLabel: "3–5 halaman",
        priceFormatted: "Rp1,5–3 juta",
        priceMin: "Rp1,5jt",
        priceMax: "Rp3jt",
        features: [
          "Template pilihan sesuai industri",
          "Form kontak + tombol WhatsApp",
          "Metadata SEO dasar",
          "Garansi bug 14 hari",
        ],
        prefilledMessage:
          "Halo Krevia Digital, saya tertarik dengan Paket Basic Website Company Profile (Rp1,5–3 juta, 3–5 halaman). Mohon informasi lebih lanjut.",
      },
      {
        id: "website-standard",
        name: "Standard",
        scopeLabel: "6–10 halaman",
        priceFormatted: "Rp4–8 juta",
        priceMin: "Rp4jt",
        priceMax: "Rp8jt",
        featured: true,
        features: [
          "Desain semi custom",
          "Blog/berita + CMS terbatas",
          "Technical + on-page SEO",
          "GA4 dasar",
        ],
        prefilledMessage:
          "Halo Krevia Digital, saya tertarik dengan Paket Standard Website Company Profile (Rp4–8 juta, 6–10 halaman). Mohon informasi lebih lanjut.",
      },
      {
        id: "website-premium",
        name: "Premium",
        scopeLabel: "10+ halaman / custom",
        priceFormatted: "Rp12–25 juta",
        priceMin: "Rp12jt",
        priceMax: "Rp25jt",
        features: [
          "Full custom design",
          "CMS penuh + multi-bahasa",
          "SEO + schema + Search Console",
          "GA4 + GTM + pelacakan conversion",
        ],
        prefilledMessage:
          "Halo Krevia Digital, saya tertarik dengan Paket Premium Website Company Profile (Rp12–25 juta, full custom). Mohon informasi lebih lanjut.",
      },
    ],
    comparison: {
      columns: ["Fitur", "Basic", "Standard", "Premium"],
      rows: [
        { feature: "Jumlah halaman", values: ["3–5 halaman", "6–10 halaman", "10+ / custom"] },
        { feature: "Desain", values: ["Template pilihan", "Semi custom", "Full custom"] },
        { feature: "Dashboard admin / CMS", values: ["Tidak", "Terbatas", "Penuh"] },
        { feature: "SEO", values: ["Metadata dasar", "Technical + on-page", "Schema + Search Console"] },
        { feature: "Analytics", values: ["Tidak", "GA4 dasar", "GA4 + GTM"] },
        { feature: "Garansi bug", values: ["14 hari", "30 hari", "60 hari"] },
        { feature: "Estimasi pengerjaan", values: ["5–7 hari", "10–14 hari", "20–30 hari"] },
      ],
    },
  },
  {
    id: "sistem",
    anchor: "sistem",
    itemNumber: "02",
    navLabel: "Custom Software & Sistem Bisnis",
    navPrice: "Mulai Rp8 juta",
    title: "Custom Software & Sistem Bisnis",
    summary:
      "Untuk proses bisnis yang tidak cukup diselesaikan website biasa — dirancang mengikuti alur kerja unik perusahaan Anda.",
    quickItems: [
      {
        id: "admin-dashboard",
        name: "Admin Dashboard",
        priceFormatted: "Mulai Rp8 juta",
        description: "Manajemen data, user role, alur approval, laporan, dan ekspor.",
      },
      {
        id: "booking",
        name: "Booking & Reservation",
        priceFormatted: "Mulai Rp12 juta",
        description: "Jadwal, ketersediaan, transaksi, status, dan notifikasi otomatis.",
      },
      {
        id: "inventory-asset",
        name: "Inventory & Asset",
        priceFormatted: "Mulai Rp12 juta",
        description: "Stok, pergerakan barang, QR code, histori, dan audit trail.",
      },
      {
        id: "crm-lead",
        name: "CRM & Lead Management",
        priceFormatted: "Mulai Rp10 juta",
        description: "Capture lead, pipeline, follow-up, reminder, dan insight.",
      },
      {
        id: "erp-module",
        name: "Modul ERP / Operasional",
        priceFormatted: "Mulai Rp20 juta",
        description: "Jurnal, transaksi, ledger, rekonsiliasi, dan workflow.",
      },
      {
        id: "custom-web-app",
        name: "Custom Web Application",
        priceFormatted: "Mulai Rp15 juta",
        description: "Frontend, backend, database, dan deployment sesuai kebutuhan.",
      },
    ],
    crossLink: {
      text: "Lihat katalog lengkap modul Krevia ERP",
      href: "/produk/erp",
    },
  },
  {
    id: "integrasi",
    anchor: "integrasi",
    itemNumber: "03",
    navLabel: "Integrasi API & Otomasi",
    navPrice: "Mulai Rp3 juta",
    title: "Integrasi API & Otomasi Bisnis",
    summary:
      "Menghubungkan sistem yang sudah Anda pakai ke dalam satu alur data tersinkronisasi — tanpa entri manual ganda.",
    quickItems: [
      {
        id: "api-integration",
        name: "Integrasi API Pihak Ketiga",
        priceFormatted: "Mulai Rp3 juta",
        description: "Sinkronisasi dengan perbankan, payment gateway, atau sistem legacy.",
      },
      {
        id: "payment-gateway",
        name: "Payment Gateway",
        priceFormatted: "Mulai Rp4 juta",
        description: "Penerimaan pembayaran otomatis dengan verifikasi status transaksi.",
      },
      {
        id: "whatsapp-api",
        name: "WhatsApp Business API",
        priceFormatted: "Mulai Rp5 juta",
        description: "Notifikasi invoice, konfirmasi pembayaran, dan pembaruan status otomatis.",
      },
      {
        id: "workflow-automation",
        name: "Otomasi Alur Kerja",
        priceFormatted: "Mulai Rp6 juta",
        description: "Persetujuan bertingkat, eskalasi tugas, dan pemicu aksi otomatis.",
      },
    ],
    crossLink: {
      text: "Pelajari layanan integrasi sistem kami",
      href: "/layanan",
    },
  },
  {
    id: "ai",
    anchor: "ai",
    itemNumber: "04",
    navLabel: "AI & Chatbot",
    navPrice: "Mulai Rp3 juta",
    title: "AI Solutions",
    summary:
      "Disiapkan lewat knowledge base, workflow, dan eskalasi ke manusia — bukan sekadar widget chat tempelan.",
    quickItems: [
      {
        id: "ai-chatbot-web",
        name: "AI Chatbot Website",
        priceFormatted: "Rp3–6 juta",
        description: "Menjawab FAQ, mengumpulkan lead, dan mengeskalasi ke tim Anda.",
      },
      {
        id: "ai-whatsapp",
        name: "AI WhatsApp Business",
        priceFormatted: "Rp5–10 juta",
        description: "Auto-reply cerdas, kualifikasi lead, dan routing ke tim terkait.",
      },
      {
        id: "ai-cs-ecommerce",
        name: "AI CS E-Commerce",
        priceFormatted: "Mulai Rp8 juta",
        description: "FAQ, rekomendasi produk, cek status pesanan, dan follow-up.",
      },
      {
        id: "ai-agent",
        name: "AI Agent Terintegrasi",
        priceFormatted: "Dibahas saat konsultasi",
        description: "AI agent yang terhubung ke ERP, CRM, dan email perusahaan lewat API.",
      },
      {
        id: "ai-dashboard",
        name: "Dashboard Insight AI",
        priceFormatted: "Rp2–4 juta",
        description: "Ringkasan pertanyaan, lead, dan topik yang paling sering muncul.",
      },
      {
        id: "ai-knowledge-base",
        name: "Knowledge Base & Training",
        priceFormatted: "Mulai Rp2 juta",
        description: "Penyusunan basis pengetahuan agar jawaban AI akurat dan konsisten.",
      },
    ],
    extraNote: {
      title: "Biaya Bulanan & Fair-Use",
      columns: ["Skala", "Volume Chat", "Estimasi per Bulan"],
      rows: [
        ["Kecil", "< 500 chat/bulan", "Rp500rb–1 juta"],
        ["Menengah", "500–2.000 chat/bulan", "Rp1–2,5 juta"],
        ["Besar", "2.000+ chat/bulan", "Custom"],
      ],
      footnote:
        "Biaya bulanan AI hanya berlaku untuk layanan berbasis AI. Website dan sistem bisnis di halaman ini sekali bayar per proyek.",
    },
  },
];

export interface PricingFaq {
  question: string;
  answer: string;
}

export const SERVICE_PRICING_FAQS: PricingFaq[] = [
  {
    question: "Berapa biaya pembuatan website company profile?",
    answer:
      "Mulai Rp1,5 juta untuk 3–5 halaman berbasis template, sampai Rp25 juta untuk desain full custom dengan CMS penuh dan multi-bahasa. Yang menentukan posisi angkanya: jumlah halaman, tingkat kustomisasi desain, dan apakah Anda butuh CMS untuk mengelola konten sendiri.",
  },
  {
    question: "Kenapa harganya berupa rentang, bukan angka pasti?",
    answer:
      "Ruang lingkup baru terkunci setelah kebutuhan fitur, sumber data, dan integrasi dikonfirmasi. Angka di halaman ini adalah estimasi awal supaya Anda punya gambaran anggaran; angka final keluar di quotation setelah sesi konsultasi.",
  },
  {
    question: "Berapa lama pengerjaannya?",
    answer:
      "Website company profile 5–7 hari untuk paket Basic, 10–14 hari untuk Standard, dan 20–30 hari untuk Premium. Sistem bisnis dan custom software memiliki durasi lebih panjang sesuai kompleksitas, biasanya 3–8 minggu.",
  },
  {
    question: "Apakah harga sudah termasuk domain, hosting, dan payment gateway?",
    answer:
      "Belum. Harga di halaman ini mencakup jasa pengerjaan sistemnya. Biaya pihak ketiga seperti domain, hosting, payment gateway, dan kuota API AI dibayar langsung ke penyedianya, dan kami bantu proses setup-nya.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Bertahap mengikuti progres proyek: DP di awal, pembayaran tahap pengembangan, lalu pelunasan saat proyek selesai. Untuk sistem yang lebih besar, pembayaran dibagi per milestone yang disepakati bersama.",
  },
  {
    question: "Apakah ada biaya bulanan?",
    answer:
      "Untuk website dan sistem bisnis, harga di halaman ini sekali bayar per proyek. Yang berjalan bulanan hanya layanan AI, mulai Rp500 ribu untuk volume di bawah 500 chat per bulan. Maintenance dan penambahan fitur dihitung terpisah.",
  },
];

export const ERP_MODULE_CATALOG: ErpModule[] = [
  // 1. Keuangan & Akuntansi (Finance & Accounting)
  {
    id: "mod-gl",
    name: "Buku Besar & Jurnal Otomatis",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "General Ledger real-time, pencatatan ayat jurnal otomatis dari transaksi harian, dan Chart of Accounts (COA) hierarkis.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-ar-invoicing",
    name: "Manajemen Piutang & Faktur Penjualan",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Penerbitan faktur tagihan pelanggan, pemantauan umur piutang (Aging AR), dan pencatatan pembayaran cicilan/pelunasan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-ap-bills",
    name: "Manajemen Hutang & Tagihan Vendor",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Pencatatan tagihan tagihan masuk dari pemasok, jadwal jatuh tempo pembayaran (Aging AP), dan rekonsiliasi bukti potong.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-financial-reports",
    name: "Laporan Keuangan Terpadu",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Laporan Laba Rugi, Neraca Keuangan, Arus Kas (Metode Langsung & Tidak Langsung), dan laporan perubahan ekuitas.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-bank-reconciliation",
    name: "Rekonsiliasi Bank Otomatis",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Penyelarasan mutasi rekening koran bank dengan catatan kas internal untuk mencegah selisih pembukuan.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-fixed-assets",
    name: "Manajemen Aset Tetap & Depresiasi",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Pencatatan aset perusahaan, perhitungan beban penyusutan otomatis garis lurus/saldo menurun, dan nilai sisa buku.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-tax-indonesia",
    name: "Kalkulasi Pajak & Ekspor e-Faktur (PPN/PPh)",
    category: "Keuangan & Akuntansi",
    categorySlug: "finance",
    description: "Perhitungan otomatis PPN 11%/12%, bukti potong PPh 23/Final, serta ekspor skema file CSV e-Faktur DJP resmi.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },

  // 2. SDM & Penggajian (HRM & Payroll)
  {
    id: "mod-employee-database",
    name: "Database Karyawan & Kontrak Kerja",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Pusat data induk profil pegawai, struktur jabatan, riwayat kepangkatan, dan masa berlaku kontrak kerja.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-payroll-id",
    name: "Penggajian Otomatis (Payroll Indonesia)",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Kalkulasi gaji pokok, tunjangan, lembur, serta pemotongan otomatis PPh 21 (TER terbaru) dan BPJS Ketenagakerjaan/Kesehatan.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
    isHighlight: true,
  },
  {
    id: "mod-leave-attendance",
    name: "Manajemen Cuti, Izin & Lembur",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Alur pengajuan cuti tahunan, izin sakit, dan persetujuan lembur staf langsung dari gawai dengan verifikasi atasan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-mobile-gps-attendance",
    name: "Presensi Mobile Berbasis Radius GPS",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Absensi kehadiran harian tim lapangan dan proyek dengan validasi titik koordinat GPS dan foto verifikasi (anti fake-GPS).",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-claims-reimbursement",
    name: "Klaim Biaya Operasional (Reimbursement)",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Pengajuan klaim bensin, akomodasi, dan konsumsi lapangan dengan unggah foto struk serta alur persetujuan bagian keuangan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-employee-portal-ess",
    name: "Portal Mandiri Karyawan (Employee Self-Service)",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Akses gawai mandiri untuk karyawan: unduh slip gaji digital terenkripsi, cek sisa kuota cuti, dan pembaruan data profil.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-kpi-performance",
    name: "Manajemen Kinerja & Penilaian KPI",
    category: "SDM & Payroll",
    categorySlug: "hr",
    description: "Penyusunan target indikator kinerja utama (KPI) bertingkat, evaluasi performa kerja berkala, dan penilaian 360 derajat.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 3. Pengadaan & Pembelian (Procurement & Purchasing)
  {
    id: "mod-purchase-request",
    name: "Permintaan Pembelian (Purchase Requisition)",
    category: "Pengadaan & Pembelian",
    categorySlug: "procurement",
    description: "Formulir permintaan barang dari staf kantor atau lapangan dengan alur persetujuan kepala departemen sebelum PO diterbitkan.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-purchase-order",
    name: "Pesanan Pembelian (Purchase Order / PO)",
    category: "Pengadaan & Pembelian",
    categorySlug: "procurement",
    description: "Penerbitan dokumen PO resmi dengan syarat pembayaran, jadwal kirim, dan pengiriman otomatis via PDF/Email ke pemasok.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-vendor-management",
    name: "Manajemen & Evaluasi Kinerja Vendor",
    category: "Pengadaan & Pembelian",
    categorySlug: "procurement",
    description: "Database profil rekanan pemasok, daftar harga rujukan (price list), dan riwayat ketepatan waktu pengiriman barang.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-3way-matching",
    name: "Pencocokan 3-Arah (3-Way Matching)",
    category: "Pengadaan & Pembelian",
    categorySlug: "procurement",
    description: "Verifikasi otomatis kesesuaian antara jumlah di PO, surat jalan penerimaan gudang (GRN), dan tagihan invoice dari vendor.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },

  // 4. Inventaris & Pergudangan (Inventory & SCM)
  {
    id: "mod-multi-warehouse",
    name: "Manajemen Multi-Gudang & Multi-Lokasi",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Pengelolaan stok tersebar di berbagai gudang utama, gudang proyek lapangan, maupun armada transit.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-stock-movement",
    name: "Mutasi Stok, Transfer & Stock Opname",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Perekaman mutasi barang masuk/keluar, transfer antar cabang, dan penyesuaian selisih fisik saat stock opname periodik.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-reorder-alerts",
    name: "Aturan Pemesanan Ulang & Safety Stock",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Pemberitahuan otomatis saat stok material menipis mencapai titik batas minimum aman guna mencegah kehabisan barang.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-batch-serial",
    name: "Pelacakan Batch, Expired & Nomor Seri",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Pengendalian barang berdasarkan lot produksi, tanggal kedaluwarsa (FEFO/FIFO), dan serial number unit peralatan.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-barcode-qr",
    name: "Pemindaian Barcode & Kode QR",
    category: "Inventaris & Gudang",
    categorySlug: "inventory",
    description: "Pencetakan label dan pemindaian cepat menggunakan kamera gawai atau scanner barcode saat penerimaan barang.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 5. Penjualan & CRM (Sales & Customer Management)
  {
    id: "mod-crm-leads",
    name: "Manajemen Prospek & Saluran Penjualan (CRM)",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Pelacakan alur prospek calon klien dari tahap kontak awal, negosiasi penawaran, hingga kesepakatan final (deal closed).",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-quotation-so",
    name: "Penawaran Harga (Quotation) & Sales Order",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Pembuatan surat penawaran harga resmi dengan sekali klik yang langsung dapat dikonversi menjadi Sales Order (SO).",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-pos-retail",
    name: "Kasir Digital Multi-Outlet (Point of Sale)",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Sistem kasir cepat untuk gerai ritel atau toko cabang, mendukung pembayaran tunai/QRIS dan integrasi stok kasir.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-sales-commission",
    name: "Kalkulasi Komisi Sales & Target Tim",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Perhitungan otomatis komisi perwakilan penjualan berdasarkan pencapaian target omzet atau margin laba transaksi.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-whatsapp-omnichannel",
    name: "Integrasi WhatsApp Business API & Notifikasi",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Kirim tagihan invoice, konfirmasi pembayaran, dan pembaruan status pengiriman langsung ke WhatsApp pelanggan secara otomatis.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-helpdesk-tickets",
    name: "Helpdesk & Tiket Layanan Pelanggan",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Sentralisasi tiket keluhan pelanggan, Service Level Agreement (SLA) waktu respon, dan eskalasi otomatis ke tim terkait.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-pos-shift-cashier",
    name: "Manajemen Shift Kasir & Laci Kas (Cash Drawer)",
    category: "Penjualan & CRM",
    categorySlug: "sales",
    description: "Rekonsiliasi modal awal kasir, pencatatan kas masuk/keluar harian, dan verifikasi selisih fisik saat pergantian shift.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 6. Proyek & Lapangan (Project & Field Operations)
  {
    id: "mod-project-wbs",
    name: "Manajemen Proyek & Tahapan Milestone",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Struktur rincian kerja (WBS), penetapan manajer proyek, penjadwalan fase pekerjaan, dan penugasan tim pelaksana.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-rab-construction",
    name: "RAB & Kontrol Biaya Proyek (Kurva S)",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Perencanaan Rencana Anggaran Biaya baseline, pemantauan pengeluaran upah/alat, dan grafik Kurva S progres fisik vs biaya.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-site-daily-log",
    name: "Log Harian Lapangan & Foto Progres",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Pelaporan harian kondisi cuaca, jumlah tukang aktif, utilisasi alat, kendala lapangan, dan dokumentasi foto real-time.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-subcon-registry",
    name: "Registri & Evaluasi Subkontraktor",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Perekaman data mandor/subkon, Surat Perintah Kerja (SPK), progres penagihan termin (opname), dan retensi garansi.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-field-service-order",
    name: "Perintah Kerja Servis Lapangan (Work Order)",
    category: "Proyek & Lapangan",
    categorySlug: "project",
    description: "Penugasan teknisi servis lapangan, jadwal kunjungan berkala, pencatatan suku cadang terpakai, dan tanda tangan klien.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 7. Manufaktur & Produksi (Manufacturing & MRP)
  {
    id: "mod-bill-of-materials",
    name: "Formula Resep & Bill of Materials (BOM)",
    category: "Manufaktur & Produksi",
    categorySlug: "manufacturing",
    description: "Definisi struktur bahan baku bertingkat (multi-level BOM), takaran komponen, dan estimasi biaya standar produksi.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
    isHighlight: true,
  },
  {
    id: "mod-production-order",
    name: "Perintah Kerja Produksi & Penjadwalan",
    category: "Manufaktur & Produksi",
    categorySlug: "manufacturing",
    description: "Penerbitan Surat Perintah Kerja produksi (SPKP), alokasi bahan baku dari gudang, dan pemantauan output hasil jadi.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-quality-control",
    name: "Kontrol Kualitas (QC Inspection)",
    category: "Manufaktur & Produksi",
    categorySlug: "manufacturing",
    description: "Pemeriksaan standar mutu bahan baku masuk (incoming QC) serta pengujian produk sebelum masuk ke gudang barang jadi.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },
  {
    id: "mod-preventive-maintenance",
    name: "Perawatan Mesin & Aset Produksi",
    category: "Manufaktur & Produksi",
    categorySlug: "manufacturing",
    description: "Jadwal pemeliharaan preventif mesin pabrik atau alat operasional, riwayat servis suku cadang, dan pencatatan jam kerja mesin.",
    status: "planned",
    statusLabel: "Direncanakan",
    includedIn: ["custom"],
  },

  // 8. Tata Kelola, Dokumen & Alur Kerja (Governance & Workflows)
  {
    id: "mod-approval-engine",
    name: "Mesin Alur Persetujuan Bertingkat",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Konfigurasi alur verifikasi dokumen transaksi (PR, PO, Pembayaran, Cuti) berdasarkan nominal dan hirarki manajerial.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
    isHighlight: true,
  },
  {
    id: "mod-audit-trail-sec",
    name: "Jejak Audit (Audit Trail) & Log Keamanan",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Perekaman jejak digital tidak terhapus untuk setiap pembuatan, perubahan, persetujuan, maupun pembatalan data transaksi.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["pro", "custom"],
  },
  {
    id: "mod-document-archive",
    name: "Manajemen Dokumen & Arsip Digital",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Penyimpanan digital terenkripsi untuk berkas kontrak, scan nota, gambar teknik, dan sertifikasi operasional.",
    status: "available",
    statusLabel: "Tersedia",
    includedIn: ["basic", "pro", "custom"],
  },
  {
    id: "mod-custom-integration-api",
    name: "Integrasi API Terbuka & Webhook Kustom",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Konektor data terbuka untuk sinkronisasi dengan sistem legacy, platform perbankan, payment gateway, atau e-commerce.",
    status: "custom",
    statusLabel: "Pengembangan Kustom",
    includedIn: ["custom"],
    isHighlight: true,
  },
  {
    id: "mod-multi-branch-holding",
    name: "Konsolidasi Multi-Cabang & Holding",
    category: "Tata Kelola & Alur Kerja",
    categorySlug: "governance",
    description: "Struktur multi-entitas anak perusahaan dengan pembukuan terpisah serta laporan konsolidasi grup usaha otomatis.",
    status: "custom",
    statusLabel: "Pengembangan Kustom",
    includedIn: ["custom"],
  },
];
