import Link from "next/link";
import { HeroIntro } from "./HeroIntro";

/**
 * Hero beranda.
 *
 * Struktur, proporsi, dan warnanya disalin apa adanya dari `#hero`
 * vandslab.com: tiga baris berisi dua kata raksasa, empat takarir layanan
 * abu-abu, tiga bentuk dekoratif, dan satu tombol kuning bertepi chamfer.
 * Yang diganti hanya isinya, agar tidak ada klaim yang tidak didukung
 * (lihat ADR-0001).
 *
 * Catatan implementasi:
 * - Semua furniture hero diukur dalam `em` terhadap --text-hero-main, jadi
 *   satu komposisi utuh ikut mengecil bersama viewport. Situs rujukannya
 *   sendiri memakai piksel tetap dan mulai meluber di bawah ~1100px.
 * - Kata-kata raksasa bersifat dekoratif (aria-hidden); kalimat yang benar
 *   dibawa oleh satu <h1 class="sr-only">.
 * - Bentuk di situs rujukan adalah animasi Lottie. Di sini dipakai SVG statis
 *   dengan putaran pelan (.hero-spin) tanpa menambah dependensi.
 * - Koreografi pembuka & scroll-nya ada di <HeroIntro />; atribut
 *   `data-hero-anim` di bawah adalah kait yang dibacanya.
 */

/* ---- Isi ----------------------------------------------------------------- */

const CTA_HREF = "/kontak";
const CTA_LABEL = "Konsultasi Sekarang";

/* Empat pilar ERP Krevia — menggantikan takarir layanan situs rujukan. */
const CAPTION_OPERASIONAL = "OPERASIONAL\n& PROYEK";
const CAPTION_KEUANGAN = "KEUANGAN\n& AKUNTANSI";
const CAPTION_SUPPLY_CHAIN = "SUPPLY CHAIN\n& GUDANG";
const CAPTION_SDM = "SDM & PENGGAJIAN";

/* ---- Geometri bentuk (diukur dari tangkapan layar rujukan) --------------- */

/* Empat bilah abu-abu yang menyusun asterisk; lubang 16x16 di tengahnya
   ditutup lagi oleh kotak kuning yang digambar sesudahnya. Hanya asterisknya
   yang berputar — kotak kuningnya tetap tegak seperti di rujukan. */
const ASTERISK_BARS = [
  { x: 72, y: 20, w: 16, h: 120, rotate: 0 },
  { x: 20, y: 72, w: 120, h: 16, rotate: 0 },
  { x: 72.5, y: 24, w: 15, h: 112, rotate: 45 },
  { x: 72.5, y: 24, w: 15, h: 112, rotate: -45 },
] as const;

/* Heptagon bersisi-tujuh dengan satu titik mengarah ke tengah kelompok;
   dipakai empat kali dengan rotasi 90 derajat pada kotak 160x160. */
const HEPTAGON_POINTS =
  "68.87,68.87 37.75,79.76 9.82,62.22 6.13,29.45 29.45,6.13 62.22,9.82 79.76,37.75";

/* Segi delapan beraturan (sisi rata atas/bawah/kiri/kanan) selebar 152px. */
const OCTAGON_POINTS =
  "48.53,4 111.47,4 156,48.53 156,111.47 111.47,156 48.53,156 4,111.47 4,48.53";

/* Panah ↖-ke-kanan-atas yang sama dengan aset tombol rujukan. */
const ARROW_PATH =
  "M8.37148 0H0V3.02982H8.65918L0.0976117 11.6731L2.21938 13.8158L10.5832 5.36964V13.7146H13.5834V5.26069L8.37148 0Z";

const EDGE_LEFT_PATH = "M33.234 0L12.689 6.68704L0 24.1814V45.8186L12.689 63.313L33.234 70";
const EDGE_RIGHT_PATH = "M0 70L20.5339 63.313L33.234 45.8186V24.1814L20.5339 6.68704L0 0";

/* ---- Kepingan ------------------------------------------------------------ */

/** Kotak kuning dengan asterisk abu-abu; bentuk baris pertama. */
function ShapeAsterisk() {
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
      <rect width="160" height="160" className="fill-hero-accent" />
      <g className="hero-spin fill-hero-bg">
        {ASTERISK_BARS.map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={bar.y}
            width={bar.w}
            height={bar.h}
            transform={bar.rotate ? `rotate(${bar.rotate} 80 80)` : undefined}
          />
        ))}
      </g>
      <rect x="72" y="72" width="16" height="16" className="fill-hero-accent" />
    </svg>
  );
}

/** Empat heptagon hitam; bentuk baris kedua. */
function ShapeCluster() {
  return (
    <svg viewBox="0 0 160 160" className="hero-spin h-full w-full" aria-hidden="true">
      <g className="fill-black">
        {[0, 90, 180, 270].map((deg) => (
          <polygon
            key={deg}
            points={HEPTAGON_POINTS}
            transform={deg ? `rotate(${deg} 80 80)` : undefined}
          />
        ))}
      </g>
    </svg>
  );
}

/** Segi delapan hitam dengan panah abu-abu di tengahnya; bentuk baris ketiga. */
function ShapeArrow() {
  return (
    <svg viewBox="0 0 160 160" className="h-full w-full" aria-hidden="true">
      <polygon points={OCTAGON_POINTS} className="fill-black" />
      <g transform="translate(44.68 44.08) scale(5.2)">
        <path d={ARROW_PATH} className="fill-hero-bg" />
      </g>
    </svg>
  );
}

/** Takarir layanan: teks abu-abu 1.25rem pada acuan 216px. */
function Caption({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      data-hero-anim="caption"
      className={`whitespace-pre-line text-[0.0926em] font-semibold leading-tight text-hero-caption ${className}`}
    >
      {children}
    </p>
  );
}

/** Satu kata raksasa beserta kotak tingginya. */
function Word({
  children,
  accent = false,
  boxed = true,
  className = "",
}: {
  children: string;
  accent?: boolean;
  /** true = komposisi desktop (blok 0.74em + nudge), false = mobile (1.5em). */
  boxed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center ${boxed ? "h-[0.74em]" : "h-[1.5em]"} ${className}`}
    >
      <span
        data-hero-anim="word"
        className={`hero-word inline-block leading-none ${
          boxed ? "translate-y-[0.0556em]" : ""
        } ${accent ? "text-hero-accent" : "text-black"}`}
      >
        {children}
      </span>
    </div>
  );
}

/** Sisi chamfer tombol; digambar menempel di luar kotak kuning. */
function ButtonEdge({ side }: { side: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 34 70"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`absolute top-0 h-full w-[0.157em] ${
        side === "left" ? "right-full -mr-[2px]" : "left-full -ml-[2px]"
      }`}
    >
      <path
        d={side === "left" ? EDGE_LEFT_PATH : EDGE_RIGHT_PATH}
        className="fill-hero-accent"
      />
    </svg>
  );
}

/** Panah di dalam tombol; ukurannya tetap agar tidak hilang saat mengecil. */
function ButtonArrow({ className }: { className: string }) {
  return (
    <svg
      data-hero-anim="arrow"
      viewBox="0 0 14 14"
      aria-hidden="true"
      className={`absolute top-1/2 -translate-y-1/2 ${className}`}
    >
      <path d={ARROW_PATH} className="fill-black" />
    </svg>
  );
}

/* ---- Bagian utama -------------------------------------------------------- */

export function Hero() {
  return (
    <>
      <HeroIntro />

      {/* Tanpa JavaScript, koreografi pembuka tidak pernah berjalan — pastikan
          isi hero tetap terbaca, bukan tertinggal transparan. */}
      <noscript>
        <style>{`[data-hero-anim]{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      {/* Kalimat sebenarnya untuk mesin pencari & pembaca layar. */}
      <h1 className="sr-only">
        Hubungkan seluruh operasional bisnis ke dalam satu sistem — platform ERP
        modular Krevia Digital.
      </h1>

      {/* Komposisi ponsel: mengikuti #hero versi md:hidden di situs rujukan. */}
      <section
        id="hero-mobile"
        data-hero-intro=""
        className="relative z-10 flex min-h-screen items-center justify-center overflow-x-hidden overflow-y-visible bg-hero-bg text-[clamp(2.25rem,13.5vw,4rem)] lg:hidden"
      >
        <div className="flex w-full flex-col px-4">
          <div className="flex flex-row items-center justify-center gap-[0.125em]">
            <Word boxed={false}>SATU</Word>
            <div
              data-hero-anim="shape"
              className="flex aspect-square h-[0.75em] shrink-0 items-center justify-center"
            >
              <ShapeAsterisk />
            </div>
            <Word boxed={false}>SISTEM</Word>
          </div>

          <div className="flex flex-row items-center justify-center gap-[0.125em]">
            <Word boxed={false}>UNTUK</Word>
            <div
              data-hero-anim="shape"
              className="flex aspect-square h-[0.75em] shrink-0 items-center justify-center"
            >
              <ShapeCluster />
            </div>
            <Word boxed={false}>SEMUA</Word>
          </div>

          <div className="flex flex-row items-center justify-center gap-[0.125em]">
            <Word boxed={false} accent>
              OPERASI
            </Word>
            <div
              data-hero-anim="shape"
              className="flex aspect-square h-[0.75em] shrink-0 items-center justify-center"
            >
              <ShapeArrow />
            </div>
            <Word boxed={false} accent>
              BISNIS
            </Word>
          </div>

          <div className="mt-[0.375em] flex justify-center">
            <Link
              href={CTA_HREF}
              className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <span
                data-hero-anim="btn"
                className="relative flex h-[0.781em] w-[3.125em] items-center bg-hero-accent"
              >
                <svg
                  viewBox="0 0 34 70"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute top-0 right-full h-full w-[0.375em] -mr-[2px]"
                >
                  <path d={EDGE_LEFT_PATH} className="fill-hero-accent" />
                </svg>
                <svg
                  viewBox="0 0 34 70"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute top-0 left-full h-full w-[0.375em] -ml-[2px]"
                >
                  <path d={EDGE_RIGHT_PATH} className="fill-hero-accent" />
                </svg>
                <span className="block w-full pr-7 text-left text-[0.25em] leading-none font-semibold text-white">
                  {CTA_LABEL}
                </span>
                <ButtonArrow className="right-5 h-2.5 w-2.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Komposisi desktop: meniru #hero versi md:flex, digerbangi lg agar
          tidak jatuh ke rentang 768-1023px yang memang rusak di rujukan. */}
      <section
        id="hero"
        data-hero-intro=""
        className="relative z-10 hidden min-h-screen items-center justify-center overflow-visible bg-hero-bg lg:flex"
      >
        <div className="flex w-full flex-col gap-[0.074em] text-hero-main 2xl:gap-[0.148em]">
          {/* Baris 1 — takarir kiri setinggi dasar baris, takarir kedua
              menumpuk di atas katanya. */}
          <div className="flex flex-row items-end justify-center gap-[0.074em]">
            <Caption className="text-right">{CAPTION_OPERASIONAL}</Caption>
            <Word>SATU</Word>
            <div
              data-hero-anim="shape"
              className="flex aspect-square h-[0.74em] shrink-0 items-center justify-center"
            >
              <ShapeAsterisk />
            </div>
            <div className="flex flex-col items-start gap-[0.037em]">
              <Caption className="order-1 text-left">{CAPTION_KEUANGAN}</Caption>
              <Word className="order-2">SISTEM</Word>
            </div>
          </div>

          {/* Baris 2 — tanpa takarir, ditutup tombol aksi. */}
          <div className="flex flex-row items-center justify-center gap-[0.074em]">
            <Word>UNTUK</Word>
            <div
              data-hero-anim="shape"
              className="flex aspect-square h-[0.74em] shrink-0 items-center justify-center"
            >
              <ShapeCluster />
            </div>
            <Word>SEMUA</Word>
            <Link
              href={CTA_HREF}
              data-hero-btn-link=""
              className="group ml-[0.593em] block w-[1.171em] shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <span
                data-hero-anim="btn"
                className="relative flex h-[0.324em] w-full items-center bg-hero-accent"
              >
                <ButtonEdge side="left" />
                <ButtonEdge side="right" />
                <span
                  data-hero-anim="label"
                  className="block w-full pr-7 text-left text-[0.0926em] leading-none font-semibold whitespace-nowrap text-black"
                >
                  {CTA_LABEL}
                </span>
                <ButtonArrow className="right-1.5 h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          {/* Baris 3 — kata rentang aksen, takarir kedua berada di bawah. */}
          <div className="flex flex-row items-start justify-center gap-[0.074em]">
            <Caption className="text-right">{CAPTION_SUPPLY_CHAIN}</Caption>
            <Word accent>OPERASI</Word>
            <div
              data-hero-anim="shape"
              className="flex aspect-square h-[0.74em] shrink-0 items-center justify-center"
            >
              <ShapeArrow />
            </div>
            <div className="flex flex-col items-start gap-[0.037em]">
              <Word accent className="relative z-10 order-1">
                BISNIS
              </Word>
              <Caption className="order-2 pl-[4.8em] text-left">{CAPTION_SDM}</Caption>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
