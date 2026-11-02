import { StatsNotch } from "./StatsNotch";

/**
 * Ringkasan angka Krevia di bawah hero.
 *
 * Komponen ini semula disalin dari proyek lain dan bergantung pada
 * `useContent()` serta CSS variable `--c-stats-*` yang tidak ada di sini.
 * Sekarang datanya ditulis langsung dan hanya memakai fakta yang sudah
 * tercantum di PRODUCT.md/GLOSSARY.md: 44 modul ERP, 4 pilar operasional,
 * 3 paket langganan, dan sesi konsultasi 30 menit. Tidak ada angka klien
 * atau pencapaian yang belum terverifikasi (lihat ADR-0001).
 *
 * Notch pembatasnya dipisah menjadi <StatsNotch /> dan dipasang sebagai anak
 * pertama di dalam section ini di `page.tsx`/komponen pemanggil. Band ini tetap
 * bersih: hanya `bg-primary` dan daftar angka. Karena section `relative` dan
 * TIDAK memakai `overflow-hidden`, notch `absolute top-full` bisa menggantung ke
 * atas (ke arah hero) tanpa terpotong — latar di belakangnya adalah wrapper
 * berlatar `bg-gray-50` yang senada dengan hero.
 */
const STATS = [
  { value: "44", label: "Modul ERP" },
  { value: "4", label: "Pilar Operasional" },
  { value: "3", label: "Paket Langganan" },
  { value: "30", label: "Menit Konsultasi" },
] as const;

export function Stats() {
  return (
    <section
      id="stats"
      aria-label="Ringkasan Krevia Digital"
      className="relative border-b border-gray-700/60 bg-primary"
    >
      {/* Notch digambar di belakang band (z-0), lalu band navy-nya sendiri
          ditutup lapisan `bg-primary` (z-10) supaya bagian notch yang masuk ke
          area band tertutup rapi — yang terlihat hanya tepi bergerigi yang
          menyembul di ATAS garis band. Konten angka diberi z-20 agar tetap di
          atas semuanya. */}
      <StatsNotch/>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-primary"
      />
      <ul className="relative z-20 mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-4 lg:gap-x-8">
        {STATS.map((stat) => (
          <li key={stat.label} className="text-center">
            <strong className="block text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {stat.value}
            </strong>
            <span className="mt-1 block text-xs font-medium text-gray-300 sm:text-sm">
              {stat.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
