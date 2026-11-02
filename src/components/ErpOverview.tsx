"use client";

import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Wallet, Truck, Users, Check } from "lucide-react";

/**
 * Empat pilar ERP Krevia.
 *
 * Tata letaknya mengikuti pola "sticky split" yang umum dipakai situs-situs
 * pilihan Awwwards / footer.design: kolom kiri menempel (sticky) memuat judul
 * besar dan nomor pilar yang sedang aktif, sementara kolom kanan berisi blok
 * pilar yang berganti saat digulir. Jadi nomor di kiri berpindah 01 → 04
 * mengikuti blok yang sedang masuk viewport.
 *
 * Seluruh warnanya tetap memakai palet Krevia (lihat `globals.css`), bukan
 * palet referensi: navy `--color-primary`, biru `--color-secondary`, cyan
 * `--color-accent`, dan abu netral gray-*.
 *
 * Tepi bergerigi (notch) bukan milik section ini: notch transisi digambar dari
 * band Stats di atasnya, tepat di tepi bawahnya (lihat <Stats />).
 *
 * Isi teksnya hanya memakai fakta yang sudah tercantum di PRODUCT.md /
 * GLOSSARY.md — 44 modul ERP dan 4 pilar operasional. Tidak ada angka klien
 * atau pencapaian yang belum terverifikasi (lihat ADR-0001).
 *
 * Catatan aksesibilitas: penyorot pilar aktif dihitung dari posisi scroll
 * (blok yang paling dekat dengan garis tengah viewport), khusus untuk
 * memindahkan penanda visual. Karena itu seluruh blok tetap dirender sekaligus
 * (tidak ada konten tersembunyi di balik tab), jadi pembaca layar dan tanpa-JS
 * tetap membaca keempat pilar secara berurutan.
 */

const PILLARS = [
  {
    no: "01",
    title: "Operasional & Proyek",
    icon: Briefcase,
    tag: "Proyek & Lapangan",
    desc: "Menghubungkan catatan harian lapangan, realisasi RAB, dan approval progres fisik agar deviasi anggaran terdeteksi sejak dini.",
    points: ["Site Daily Log Terpadu", "Kontrol Deviasi RAB", "Persetujuan Bertingkat"],
  },
  {
    no: "02",
    title: "Keuangan & Akuntansi",
    icon: Wallet,
    tag: "Arus Kas & Buku Besar",
    desc: "Rekonsiliasi transaksi kasir, pencatatan invoice, dan laporan laba-rugi otomatis tanpa perlu rekap ulang manual di akhir bulan.",
    points: ["Pencatatan Multi-Rekening", "Invoice & Pelunasan Cepat", "Laporan Keuangan Otomatis"],
  },
  {
    no: "03",
    title: "Supply Chain & Gudang",
    icon: Truck,
    tag: "Logistik & Inventaris",
    desc: "Sinkronisasi pesanan pembelian (PO), surat jalan penerimaan barang, dan peringatan batas minimum stok secara real-time.",
    points: ["Kontrol Stok Multi-Gudang", "Pencocokan PO & Faktur", "Peringatan Stok Kritis"],
  },
  {
    no: "04",
    title: "SDM & Penggajian",
    icon: Users,
    tag: "Karyawan & Payroll",
    desc: "Manajemen data karyawan, presensi berbasis lokasi GPS untuk staf lapangan, serta perhitungan lembur dan slip gaji digital.",
    points: ["Presensi GPS Lapangan", "Kalkulasi Lembur Otomatis", "Distribusi Slip Gaji"],
  },
] as const;

export function ErpOverview() {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const nodes = blockRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (nodes.length === 0) return;

    // Nomor aktif ditentukan dari LETAK setiap blok relatif terhadap satu
    // "garis baca" tetap (sekitar 40% tinggi viewport), bukan dari blok yang
    // paling dekat pusat layar. Aturan berbasis garis ini monoton: saat
    // menggulir ke bawah nomor hanya bisa maju, tidak pernah lompat bolak-balik
    // di sekitar titik tengah, dan tetap benar saat menggulir cepat.
    const READ_LINE = 0.4; // porsi tinggi viewport, diukur dari atas
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * READ_LINE;
      // Blok terakhir yang tepi atasnya sudah melewati garis baca.
      let current = 0;
      nodes.forEach((node, index) => {
        if (node.getBoundingClientRect().top <= line) current = index;
      });
      setActive(current);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="erp-overview"
      aria-label="Empat pilar sistem Krevia Digital"
      className="relative scroll-mt-24 bg-gray-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
          {/* ==== Kolom kiri: panel yang menempel ==== */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase">
                Fondasi Sistem
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 text-balance sm:text-4xl">
                Empat Pilar{" "}
                <span className="text-secondary">Operasional Terpadu</span>.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-700 text-pretty sm:text-base">
                Krevia Digital merancang modularitas sistem berbasis fondasi
                yang solid. Setiap pilar dapat diaktifkan secara bertahap
                sesuai kesiapan tim Anda.
              </p>

              {/* Penanda nomor pilar aktif — inti pola "sticky split".
                  Murni dekoratif; pembaca layar sudah mendapat nomornya di
                  tiap blok kanan. */}
              <div
                aria-hidden="true"
                className="mt-10 hidden items-center gap-6 lg:flex"
              >
                <span className="text-7xl font-extrabold leading-none tabular-nums text-primary">
                  {PILLARS[active].no}
                </span>
                <div className="h-px flex-1 bg-gray-300" />
                <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  {PILLARS.length} Pilar
                </span>
              </div>

              {/* Daftar navigasi ringkas (desktop) — penanda aktif saja,
                  bukan kontrol interaktif, supaya tidak ada state tersembunyi. */}
              <ul aria-hidden="true" className="mt-6 hidden space-y-2.5 lg:block">
                {PILLARS.map((pil, index) => (
                  <li
                    key={pil.no}
                    className={
                      "flex items-center gap-3 text-sm font-semibold transition-colors duration-300 " +
                      (index === active
                        ? "text-secondary"
                        : "text-gray-300")
                    }
                  >
                    <span
                      className={
                        "h-px w-6 transition-all duration-300 " +
                        (index === active ? "w-10 bg-secondary" : "bg-gray-300")
                      }
                    />
                    {pil.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ==== Kolom kanan: blok pilar yang berganti saat digulir ==== */}
          <div className="mt-14 space-y-6 lg:col-span-7 lg:mt-0 lg:space-y-8">
            {PILLARS.map((pil, index) => {
              const Icon = pil.icon;
              const isActive = index === active;
              return (
                <div
                  key={pil.no}
                  ref={(el) => {
                    blockRefs.current[index] = el;
                  }}
                  className={
                    "group relative overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-500 sm:p-8 " +
                    (isActive
                      ? "border-secondary/40 shadow-lg shadow-primary/5"
                      : "border-gray-300")
                  }
                >
                  {/* Garis aksen kiri yang menyala saat blok aktif. */}
                  <span
                    aria-hidden="true"
                    className={
                      "absolute inset-y-0 left-0 w-1 transition-colors duration-500 " +
                      (isActive ? "bg-secondary" : "bg-transparent")
                    }
                  />

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-5xl font-extrabold leading-none tabular-nums text-gray-300 transition-colors duration-500 group-hover:text-gray-500 sm:text-6xl lg:hidden">
                      {pil.no}
                    </span>
                    <span className="hidden text-sm font-bold tracking-[0.2em] text-gray-300 tabular-nums sm:block">
                      {pil.no} / 0{PILLARS.length}
                    </span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-secondary transition-colors duration-500 group-hover:bg-secondary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-6">
                    <span className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase">
                      {pil.tag}
                    </span>
                    <h3 className="mt-1.5 text-xl font-bold text-gray-900 sm:text-2xl">
                      {pil.title}
                    </h3>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-700">
                    {pil.desc}
                  </p>

                  <ul className="mt-6 grid gap-2.5 border-t border-gray-200 pt-6 text-sm text-gray-700 sm:grid-cols-3 sm:gap-4">
                    {pil.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
