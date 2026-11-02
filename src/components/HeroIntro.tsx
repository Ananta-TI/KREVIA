"use client";

import { useEffect } from "react";

/* ---------------------------------------------------------------------------
 * Animasi pembuka & animasi scroll hero.
 *
 * Koreografinya disalin dari vandslab.com — GSAP timeline di bundle mereka —
 * lalu dijalankan ulang dengan Web Animations API supaya tidak menambah
 * dependensi. Padanan easing GSAP:
 *   power3.out   -> cubic-bezier(0.215, 0.61, 0.355, 1)
 *   power3.inOut -> cubic-bezier(0.645, 0.045, 0.355, 1)
 *   power2.out   -> cubic-bezier(0.25, 0.46, 0.45, 0.94)
 *
 * Urutan desktop:
 *   0.00-0.50s  tiga bentuk meluncur dari luar layar, berkumpul di satu baris
 *               di tengah viewport
 *   0.50-1.00s  ketiganya naik/turun ke tinggi baris kedua (masih di tengah)
 *   1.00-2.00s  bentuk terbang ke slotnya
 *   2.00-2.70s  setelah bentuk diam di slotnya, kata & tombol masuk dari sisi
 *               masing-masing; tombol melebar dari 0 dan panahnya meluncur
 *   2.70-3.20s  takarir empat pilar menyusul setelah kata selesai
 *
 * Urutan ponsel: tiga bentuk langsung berkumpul di tengah, diam 1,5 detik,
 * lalu menyebar sampai 2 detik. Kata-kata baru masuk setelah bentuk selesai
 * (tanpa takarir, karena komposisi ponsel memang tidak memuatnya).
 *
 * Scroll (desktop & ponsel): scroll tidak dikunci selama intro. Begitu intro
 * selesai, kata-kata (dan takarir di desktop) bergeser ke samping (+-900px)
 * dan ke bawah (900px) secara ter-scrub, sementara bentuk hanya turun. Titik
 * nol scrub diambil dari posisi scroll saat intro selesai agar tidak melompat.
 * ------------------------------------------------------------------------- */

/** Durasi koreografi bentuk (ms) — 2 detik seperti rujukan. */
const SHAPE_MS = 2000;

/** Durasi masuknya teks & tombol setelah bentuk selesai bergerak (ms). */
const TEXT_MS = 700;

/** Durasi masuknya takarir empat pilar setelah kata selesai (ms). */
const CAPTION_MS = 500;

const EASE_OUT3 = "cubic-bezier(0.215, 0.61, 0.355, 1)";
const EASE_INOUT3 = "cubic-bezier(0.645, 0.045, 0.355, 1)";
const EASE_OUT2 = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

/** Jarak antar-bentuk saat berkumpul di tengah (desktop, px). */
const SHAPE_GAP = 8;
/** Jarak antar-bentuk saat berkumpul di tengah (ponsel, px). */
const MOBILE_SHAPE_GAP = 80;

type Track = { el: HTMLElement; dx: number; dy: number };

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function box(el: Element) {
  const r = el.getBoundingClientRect();
  return {
    left: r.left,
    top: r.top,
    w: r.width,
    h: r.height,
    cx: r.left + r.width / 2,
    cy: r.top + r.height / 2,
  };
}

function translate(x: number, y: number) {
  return `translate3d(${x}px, ${y}px, 0)`;
}

export function HeroIntro() {
  useEffect(() => {
    const root = document.documentElement;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const scope = document.getElementById(desktop ? "hero" : "hero-mobile");
    if (!scope) return;

    const anims: Animation[] = [];
    const timers: number[] = [];
    let raf = 0;
    let finished = false;
    let scrollCleanup: (() => void) | null = null;

    const nodes = <T extends HTMLElement>(sel: string) =>
      Array.from(scope.querySelectorAll<T>(sel));

    const shapes = nodes('[data-hero-anim="shape"]');
    const words = nodes('[data-hero-anim="word"]');
    const captions = nodes('[data-hero-anim="caption"]');
    const btn = scope.querySelector<HTMLElement>('[data-hero-anim="btn"]');
    const label = scope.querySelector<HTMLElement>('[data-hero-anim="label"]');
    const arrow = scope.querySelector<HTMLElement>('[data-hero-anim="arrow"]');

    const play = (
      el: Element,
      frames: Keyframe[],
      timing: { duration?: number; delay?: number } = {},
    ) => {
      const a = el.animate(frames, {
        duration: timing.duration ?? SHAPE_MS,
        delay: timing.delay ?? 0,
        easing: "linear",
        fill: "both",
      });
      anims.push(a);
    };

    /** Animasi scroll: elemen hero menyebar keluar saat hero meninggalkan layar. */
    const startScroll = () => {
      if (reducedMotion()) return;

      // Scroll tidak dikunci selama intro, jadi posisi scroll saat intro
      // selesai dijadikan titik nol. Tanpa ini, scrub langsung melompat ke
      // p = scrollY / 3vh dan elemen bergeser mendadak.
      let originY = window.scrollY;

      const els = nodes<HTMLElement>(
        '[data-hero-anim="word"], [data-hero-anim="caption"], [data-hero-anim="btn"], [data-hero-anim="shape"]',
      );
      let plan: Track[] = [];

      const build = () => {
        plan = els.map((el) => {
          const b = box(el);
          const isShape = el.dataset.heroAnim === "shape";
          const dir = isShape ? 0 : b.cx < window.innerWidth / 2 ? -1 : 1;
          return { el, dx: dir * 900, dy: 900 };
        });
      };

      const apply = () => {
        raf = 0;
        // Titik nol ikut turun saat pengguna menggulir ke atas. Kalau tetap
        // di posisi saat intro selesai, ada zona mati: setelah kembali ke atas,
        // scrub baru bergerak ketika scroll melewati posisi lama itu.
        originY = Math.min(originY, window.scrollY);
        // Rentang scrub rujukan: "center center" -> "bottom top-=200vh",
        // yang pada hero setinggi 100vh berarti 0 -> 300vh.
        const p = Math.min(
          Math.max((window.scrollY - originY) / (window.innerHeight * 3), 0),
          1,
        );
        for (const t of plan) {
          t.el.style.transform = translate(t.dx * p, t.dy * p);
        }
      };

      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(apply);
      };

      const onResize = () => {
        build();
        onScroll();
      };

      build();
      apply();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize);
      scrollCleanup = () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      };
    };

    const finish = () => {
      if (finished) return;
      finished = true;

      // Efek animasi dilepas supaya transform inline (scrub scroll) bisa menang.
      for (const a of anims) a.cancel();
      anims.length = 0;

      root.dataset.intro = "done";
      root.dataset.kreviaReady = "1";

      for (const el of [...shapes, ...words, ...captions]) {
        el.style.opacity = "1";
        el.style.transform = "";
      }
      if (btn) btn.style.width = "";
      if (label) label.style.opacity = "1";
      if (arrow) {
        arrow.style.left = "";
        arrow.style.right = "";
        arrow.style.transform = "";
        arrow.style.opacity = "1";
      }

      window.dispatchEvent(new Event("krevia:ready"));

      startScroll();
    };

    // Pembuka berjalan pada SETIAP muat ulang halaman (refresh), sesuai
    // permintaan. Yang dilewati hanya: kembali ke beranda lewat navigasi klien
    // (penanda sudah "done", jadi bukan muat ulang), deep link ke anchor
    // ("skip"), dan pengguna yang meminta gerak dikurangi. Selain "play",
    // konten langsung ditampilkan supaya tidak pernah tertinggal kosong.
    if (root.dataset.intro !== "play" || reducedMotion()) {
      finish();
      return;
    }

    const vw = window.innerWidth;

    if (desktop) {
      /* ---- Desktop: tiga bentuk berkumpul dulu di tengah ---- */
      if (shapes.length === 3) {
        const g = shapes.map(box);
        const size = g[0].w || 160;
        const cx = vw / 2;

        // Titik kumpul: satu baris mendatar di tengah, jarak 8px dari bentuk
        // tengah — persis rumus `n - (rect.left + rect.width/2) - o - 8`
        // milik rujukan.
        const gx = [
          cx - g[0].cx - size - SHAPE_GAP,
          cx - g[1].cx,
          cx - g[2].cx + size + SHAPE_GAP,
        ];
        const gy = [g[1].cy - g[0].cy, 0, g[1].cy - g[2].cy];
        const fromX = [gx[0] - 200, gx[1], gx[2] + 200];
        const fromY = [gy[0], 200, gy[2]];

        shapes.forEach((el, i) => {
          play(el, [
            {
              offset: 0,
              transform: translate(fromX[i], fromY[i]),
              opacity: 0,
              easing: EASE_OUT3,
            },
            {
              offset: 0.25,
              transform: translate(gx[i], gy[i]),
              opacity: 1,
              easing: EASE_INOUT3,
            },
            {
              offset: 0.5,
              transform: translate(gx[i], 0),
              opacity: 1,
              easing: EASE_INOUT3,
            },
            { offset: 1, transform: translate(0, 0), opacity: 1 },
          ]);
        });
      }

      /* ---- Setelah bentuk diam di slotnya, kata-kata baru masuk ---- */
      for (const el of words) {
        const b = box(el);
        const dir = b.cx < vw / 2 ? -1 : 1;
        play(
          el,
          [
            {
              offset: 0,
              transform: translate(dir * 100, 0),
              opacity: 0,
              easing: EASE_OUT3,
            },
            { offset: 1, transform: translate(0, 0), opacity: 1 },
          ],
          { duration: TEXT_MS, delay: SHAPE_MS },
        );
      }

      /* ---- Takarir empat pilar menyusul setelah kata selesai ---- */
      for (const el of captions) {
        const b = box(el);
        const dir = b.cx < vw / 2 ? -1 : 1;
        const dy = b.cy < window.innerHeight / 2 ? -40 : 40;
        play(
          el,
          [
            {
              offset: 0,
              transform: translate(dir * 100, dy),
              opacity: 0,
              easing: EASE_OUT3,
            },
            { offset: 1, transform: translate(0, 0), opacity: 1 },
          ],
          { duration: CAPTION_MS, delay: SHAPE_MS + TEXT_MS },
        );
      }

      /* ---- Tombol melebar dari 0, panah meluncur, label menyusul ---- */
      if (btn) {
        // Ukur lebar akhir & posisi istirahat panah SEBELUM animasi lebar
        // dipasang. Kalau diukur sesudahnya, lebar tombol sudah 0 dan panah
        // akan meluncur ke koordinat negatif — menimpa label di kiri.
        const w = btn.getBoundingClientRect().width;
        const btnLeft = btn.getBoundingClientRect().left;
        const restingLeft = arrow
          ? arrow.getBoundingClientRect().left - btnLeft
          : 0;

        play(
          btn,
          [
            { offset: 0, width: "0px", easing: EASE_OUT3 },
            { offset: 1, width: `${w}px` },
          ],
          { duration: TEXT_MS, delay: SHAPE_MS },
        );

        if (arrow) {
          arrow.style.left = "0px";
          arrow.style.right = "auto";
          play(
            arrow,
            [
              {
                offset: 0,
                transform: "translateX(-7px)",
                opacity: 0,
                easing: EASE_OUT3,
              },
              {
                offset: 1,
                transform: `translateX(${restingLeft}px)`,
                opacity: 1,
              },
            ],
            { duration: TEXT_MS, delay: SHAPE_MS },
          );
        }

        if (label) {
          play(
            label,
            [
              { offset: 0, opacity: 0, easing: EASE_OUT2 },
              { offset: 1, opacity: 1 },
            ],
            { duration: TEXT_MS - 150, delay: SHAPE_MS + 150 },
          );
        }
      }
    } else {
      /* ---- Ponsel: bentuk langsung berkumpul, diam 1,5s, lalu menyebar ---- */
      if (shapes.length === 3) {
        const g = shapes.map(box);
        const cx = vw / 2;
        const targets = [
          cx - MOBILE_SHAPE_GAP,
          cx,
          cx + MOBILE_SHAPE_GAP,
        ];
        const gx = shapes.map((_, i) => targets[i] - g[i].cx);
        const gy = shapes.map((_, i) => g[1].cy - g[i].cy);

        shapes.forEach((el, i) => {
          play(el, [
            {
              offset: 0,
              transform: translate(gx[i], gy[i]),
              opacity: 1,
            },
            {
              offset: 0.75,
              transform: translate(gx[i], gy[i]),
              opacity: 1,
              easing: EASE_INOUT3,
            },
            { offset: 1, transform: translate(0, 0), opacity: 1 },
          ]);
        });
      }

      /* ---- Ponsel: bentuk berkumpul & menyebar dulu, teks menyusul ---- */
      for (const el of words) {
        const b = box(el);
        const dir = b.cx < vw / 2 ? -1 : 1;
        play(
          el,
          [
            {
              offset: 0,
              transform: translate(dir * 100, 0),
              opacity: 0,
              easing: EASE_OUT3,
            },
            { offset: 1, transform: translate(0, 0), opacity: 1 },
          ],
          { duration: TEXT_MS, delay: SHAPE_MS },
        );
      }

      if (btn) {
        play(
          btn,
          [
            { offset: 0, opacity: 0, easing: EASE_OUT2 },
            { offset: 1, opacity: 1 },
          ],
          { duration: TEXT_MS, delay: SHAPE_MS },
        );
      }
    }

    const totalMs = SHAPE_MS + TEXT_MS + (captions.length ? CAPTION_MS : 0);
    timers.push(window.setTimeout(() => finish(), totalMs + 80));
    // Jaring pengaman: apa pun yang gagal, konten tidak pernah tertinggal kosong.
    timers.push(window.setTimeout(() => finish(), 7000));

    return () => {
      for (const t of timers) window.clearTimeout(t);
      if (raf) cancelAnimationFrame(raf);
      for (const a of anims) a.cancel();
      scrollCleanup?.();

      // Efek ini harus bisa dijalankan ulang dari nol. React StrictMode
      // (aktif di `next dev`) memasang, membongkar, lalu memasang lagi efek
      // ini; kalau jejak animasi pertama dibiarkan, elemen akan tertinggal
      // transparan selamanya. Gaya inline yang dipasang langsung di sini
      // dibersihkan; animasi WAAPI sudah dikembalikan oleh cancel().
      if (!finished) {
        if (arrow) {
          arrow.style.left = "";
          arrow.style.right = "";
          arrow.style.transform = "";
          arrow.style.opacity = "";
        }
      }
    };
  }, []);

  return null;
}
