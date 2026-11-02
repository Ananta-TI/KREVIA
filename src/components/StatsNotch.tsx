"use client";

import { useEffect, useRef } from "react";

/**
 * Notch pembatas antara hero dan band Stats.
 *
 * Komponen ini murni dekoratif dan dipisah dari <Stats /> supaya band statistik
 * tetap bersih. Ia dirender sebagai anak pertama <Stats /> dan diikat ke tepi
 * ATAS band (`absolute bottom-full`), jadi kakinya berhenti tepat di garis
 * 100vh dan badannya tumbuh ke atas menimpa area hero — tanpa menambah tinggi
 * layout sama sekali. Karena <Stats /> `relative` dan tidak `overflow-hidden`,
 * notch tidak terpotong.
 *
 * Gerakannya mengikuti scroll (bukan fade): saat halaman mentok di paling atas
 * notch tergeser PENUH ke bawah (`translateY(100%)`) sehingga seluruh bentuknya
 * berada di bawah lipatan dan hero terlihat bersih satu layar penuh. Semakin
 * halaman digulir, notch naik makin banyak secara proporsional sampai akhirnya
 * duduk penuh di posisinya (menimpa hero dengan tepi bergerigi).
 *
 * Nilai geser dihitung lewat satu listener `scroll` pasif + rAF, ditulis
 * langsung ke style elemen (bukan lewat state React) supaya tidak memicu render
 * ulang tiap frame. Saat `prefers-reduced-motion` aktif, notch langsung tampil
 * di posisi penuh tanpa ikut bergerak.
 *
 * Catatan SSR: nilai awal selalu tergeser penuh ke bawah di server dan klien,
 * jadi tidak ada perbedaan markup saat hidrasi; efek hanya memperbaruinya
 * setelah posisi scroll pertama terbaca.
 *
 * Geometrinya sama dengan notch atas Footer (turunan dari TOP_NOTCH_PATH di
 * Footer.tsx).
 */
const TOP_NOTCH_PATH =
  "M1280 118H1199.28C1193.98 118 1188.89 115.893 1185.14 112.142L1079.86 6.85786C1076.11 3.10714 1071.02 1 1065.72 1H779.784C774.48 1 769.393 3.10714 765.642 6.85787L718.858 53.6421C715.107 57.3929 710.02 59.5 704.716 59.5H413.784C408.48 59.5 403.393 61.6071 399.642 65.3579L352.858 112.142C349.107 115.893 344.02 118 338.716 118H52.7843C47.4799 118 42.3929 115.893 38.6421 112.142L0 73.5V118Z";

/* Jarak scroll sampai notch mencapai posisi penuh. Semakin besar, semakin
   lambat notch naik; 400px terasa sebanding dengan transisi welcome/hero. */
const REVEAL_DISTANCE = 400;

export function StatsNotch() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.transform = "";
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(window.scrollY / REVEAL_DISTANCE, 1);
      const offset = (1 - progress) * 100;
      el.style.transform = `translateY(${offset.toFixed(2)}%)`;
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      ref={ref}
      className="pointer-events-none absolute inset-x-0 bottom-full z-0 h-8 min-[480px]:h-12 md:h-16 desktop:h-34 -mb-10"
      style={{ transform: "translateY(100%)" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1280 119"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={TOP_NOTCH_PATH}
          fill="var(--color-primary)"
        />
      </svg>
    </div>
  );
}
