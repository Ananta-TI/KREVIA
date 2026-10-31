import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Lock, FileText, CheckCircle2, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kebijakan Privasi & Perlindungan Data | Krevia Digital",
  description:
    "Kebijakan privasi resmi Krevia Digital mengenai pelindungan data pribadi dan kerahasiaan informasi mitra bisnis sesuai UU No. 27 Tahun 2022 (UU PDP).",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-gray-300/90 bg-white/95 backdrop-blur-md sticky top-0 z-50 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center group py-1">
            <Image
              src="/logo-horizontal.png"
              alt="Krevia Digital"
              width={375}
              height={90}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Document Header */}
        <div className="mb-12 pb-8 border-b border-gray-300">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-primary text-xs font-bold mb-4 shadow-xs">
            <Shield className="w-3.5 h-3.5 text-secondary" />
            <span>Kepatuhan Hukum &amp; Tata Kelola Data</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Kebijakan Privasi &amp; Perlindungan Data
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-500 font-medium">
            Berlaku efektif sejak: Oktober 2026 • Tunduk pada Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) Republik Indonesia.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gray-100 text-primary text-xs font-black flex items-center justify-center shrink-0">
                01
              </span>
              Komitmen Privasi Krevia Digital
            </h2>
            <p>
              Krevia Digital (&ldquo;kami&rdquo;) merupakan entitas rekayasa perangkat lunak dan transformasi digital yang berbasis di Kota Pekanbaru, Riau, Indonesia. Kami berkomitmen menjunjung tinggi standar keamanan tertinggi dalam mengelola data mitra bisnis, calon klien, dan pengunjung situs web kami (<strong>kreviadigitalid.my.id</strong>).
            </p>
            <p>
              Kebijakan ini menjelaskan bagaimana kami mengumpulkan, mengamankan, dan menggunakan data Anda secara transparan tanpa pernah memperjualbelikannya kepada pihak ketiga mana pun.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gray-100 text-primary text-xs font-black flex items-center justify-center shrink-0">
                02
              </span>
              Data yang Kami Kumpulkan
            </h2>
            <p>
              Kami hanya mengumpulkan data yang diberikan secara sadar dan sukarela oleh Anda melalui formulir konsultasi resmi atau jalur komunikasi langsung:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong>Informasi Kontak Klien:</strong> Nama lengkap, nama perusahaan/organisasi, alamat email resmi, serta nomor telepon/WhatsApp aktif.
              </li>
              <li>
                <strong>Rincian Kebutuhan Proyek:</strong> Deskripsi alur operasional, preferensi teknologi, serta kendala sistem yang ingin diselesaikan bersama tim kami.
              </li>
              <li>
                <strong>Data Telemetri Teknis:</strong> Data anonim agregat seperti jenis peramban, resolusi layar, dan durasi kunjungan semata-mata untuk mengoptimalkan performa dan kecepatan render situs web.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gray-100 text-primary text-xs font-black flex items-center justify-center shrink-0">
                03
              </span>
              Tujuan Penggunaan Data
            </h2>
            <p>
              Data yang Anda percayakan kepada kami hanya digunakan untuk kepentingan profesional berikut:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-gray-300 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Menyusun dokumen proposal teknis dan estimasi arsitektur sistem.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-300 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Melakukan komunikasi tatap muka atau daring terkait tahapan proyek.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-300 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Pelaksanaan kewajiban hukum, penandatanganan NDA, dan kontrak kerja.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-300 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  Memberikan layanan garansi bug-free dan dukungan teknis purnajual.
                </span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gray-100 text-primary text-xs font-black flex items-center justify-center shrink-0">
                04
              </span>
              Perlindungan Kerahasiaan Proyek (NDA &amp; Hak Milik)
            </h2>
            <p>
              Krevia Digital memegang prinsip etika profesi yang ketat terkait data bisnis mitra:
            </p>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-300 space-y-2.5">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <Lock className="w-4 h-4 text-secondary" />
                <span>Jaminan Non-Disclosure Agreement (NDA)</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Kami siap menandatangani dokumen kerahasiaan resmi sebelum Anda membagikan informasi kepemilikan bisnis, basis data pelanggan, atau algoritma rahasia dagang internal Anda.
              </p>
              <div className="pt-2 text-xs font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-secondary" />
                <span>100% Kepemilikan Source Code Klien: Tidak ada klaim royalti sepihak dari Krevia Digital atas sistem yang telah Anda lunasi.</span>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-gray-100 text-primary text-xs font-black flex items-center justify-center shrink-0">
                05
              </span>
              Hak Pemilik Data Pribadi (UU PDP No. 27/2022)
            </h2>
            <p>
              Sebagai subjek data, Anda berhak sepenuhnya untuk:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-600">
              <li>Meminta salinan data kontak Anda yang tersimpan di sistem kami.</li>
              <li>Meminta perbaikan atau pembaruan data jika terjadi perubahan kontak bisnis.</li>
              <li>Meminta penghapusan permanen (<em>right to be forgotten</em>) atas data kontak Anda dari buku alamat kami kapan saja.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4 pt-4 border-t border-gray-300">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Kontak Kepatuhan &amp; Informasi Hukum
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Jika Anda memiliki pertanyaan mengenai tata kelola privasi data ini atau ingin meminta pelaksanaan hak data pribadi Anda, silakan hubungi tim kami melalui:
            </p>

            <div className="p-6 rounded-2xl bg-white border border-gray-300 shadow-xs space-y-3 max-w-xl">
              <p className="font-bold text-gray-900 text-base">
                Krevia Digital — Tim Kepatuhan Hukum &amp; Privasi
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-secondary shrink-0" />
                <span>Kota Pekanbaru, Riau, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span>Email: {SITE_CONFIG.email}</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-300/90 bg-white py-8 text-center text-xs text-gray-500">
        <div className="max-w-5xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Krevia Digital. Seluruh hak cipta dilindungi undang-undang.</p>
        </div>
      </footer>
    </div>
  );
}
