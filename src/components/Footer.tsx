"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { smoothScrollTo } from "@/lib/smoothScroll";

/**
 * Footer ini mengikuti footer flomodia.com apa adanya ("plek ketiplek"):
 * geometri notch SVG (viewBox + path disalin verbatim), serta seluruh ukuran,
 * rasio kolom, dan titik henti responsifnya (479 / 767 / 991 px).
 *
 * Warnanya tidak ikut flomodia: tiap peran dipetakan ke palet Krevia
 * (navy untuk permukaan gelap, gray-100 untuk kartu terangkat, blue untuk
 * aksi, sky untuk elemen interaktif di atas navy) — lihat token
 * --color-footer-* di globals.css.
 *
 * Dua penyesuaian sadar lainnya, keduanya karena konteksnya berbeda:
 * 1. Notch atas diisi warna section di atas footer — di flomodia #140003
 *    (section penutupnya gelap), di Krevia gray-50 (kanvas halamannya terang).
 *    Yang disalin relasinya, bukan angka heksadesimalnya.
 * 2. Kredit agensi "Website Made by Digidop…" diganti detail kontak Krevia,
 *    dan formulir newsletter membuka klien email karena belum ada backend.
 */

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

interface FooterLinkItem {
  label: string;
  href: string;
}

/** Tiga kolom tautan tanpa judul — persis pola .footer_menu flomodia. */
const FOOTER_COLUMNS: FooterLinkItem[][] = [
  [
    { label: "Katalog ERP Modular", href: "/produk/erp" },
    { label: "Paket Langganan ERP", href: "/produk/erp#pricing" },
    { label: "Layanan Rekayasa", href: "/layanan" },
    { label: "Daftar Harga Jasa", href: "/harga" },
  ],
  [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Mengapa Krevia", href: "/#why-krevia" },
    { label: "Tanya Jawab (FAQ)", href: "/#faq" },
    { label: "Hubungi Kami", href: "/kontak" },
  ],
  [
    { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
    { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  ],
];

type SocialIconName = "instagram" | "whatsapp" | "mail";

const SOCIAL_LINKS: Array<{
  label: string;
  href: string;
  external: boolean;
  icon: SocialIconName;
}> = [
  {
    label: "Instagram Krevia Digital",
    href: SITE_CONFIG.instagramUrl,
    external: true,
    icon: "instagram",
  },
  {
    label: "WhatsApp Krevia Digital",
    href: SITE_CONFIG.getWhatsappUrl(),
    external: true,
    icon: "whatsapp",
  },
  {
    label: `Email ${SITE_CONFIG.email}`,
    href: `mailto:${SITE_CONFIG.email}`,
    external: false,
    icon: "mail",
  },
];

/* -------------------------------------------------------------------------- */
/*  SVG — path disalin apa adanya dari flomodia.com                            */
/* -------------------------------------------------------------------------- */

/** Notch atas footer. viewBox 0 0 1280 119. */
const TOP_NOTCH_PATH =
  "M1280 0H0V73.5L-3.85786 69.6421C-16.4572 57.0428 -38 65.9662 -38 83.7843V126.5C-38 130.368 -36.9017 133.98 -35 137.041V143.68V832H1318V118H1282.25H1280V0ZM1280 118H1199.28C1193.98 118 1188.89 115.893 1185.14 112.142L1079.86 6.85786C1076.11 3.10714 1071.02 1 1065.72 1H779.784C774.48 1 769.393 3.10714 765.642 6.85787L718.858 53.6421C715.107 57.3929 710.02 59.5 704.716 59.5H413.784C408.48 59.5 403.393 61.6071 399.642 65.3579L352.858 112.142C349.107 115.893 344.02 118 338.716 118H52.7843C47.4799 118 42.3929 115.893 38.6421 112.142L0 73.5V486H1280V118Z";

/** Notch atas kartu krem. viewBox 0 0 1152 51. */
const CARD_TOP_NOTCH_PATH =
  "M510.716 0.000976562H20C8.95431 0.000976562 0 8.95529 0 20.001V354.501C0 365.547 8.9543 374.501 20 374.501H211.716C217.02 374.501 222.107 376.608 225.858 380.359L249.642 404.143C253.393 407.894 258.48 410.001 263.784 410.001H1104.22C1109.52 410.001 1114.61 407.894 1118.36 404.143L1146.14 376.359C1149.89 372.608 1152 367.521 1152 362.217V52.001C1152 40.9553 1143.05 32.001 1132 32.001H559.284C553.98 32.001 548.893 29.8938 545.142 26.1431L524.858 5.85884C521.107 2.10811 516.02 0.000976562 510.716 0.000976562Z";

/** Notch bawah kartu krem. viewBox 0 0 1152 56. */
const CARD_BOTTOM_NOTCH_PATH =
  "M510.716 -355H20C8.95431 -355 0 -346.046 0 -335V-0.5C0 10.5457 8.9543 19.5 20 19.5H211.716C217.02 19.5 222.107 21.6071 225.858 25.3578L249.642 49.1421C253.393 52.8929 258.48 55 263.784 55H1104.22C1109.52 55 1114.61 52.8929 1118.36 49.1422L1146.14 21.3579C1149.89 17.6071 1152 12.5201 1152 7.21573V-303C1152 -314.046 1143.05 -323 1132 -323H559.284C553.98 -323 548.893 -325.107 545.142 -328.858L524.858 -349.142C521.107 -352.893 516.02 -355 510.716 -355Z";

/** Empat kurung siku tombol. viewBox 0 0 17 17. */
const BUTTON_CORNER_PATHS = [
  { className: "top-[-0.25rem] left-[-0.25rem]", d: "M1 16C1 8 8 1 16 1" },
  { className: "top-[-0.25rem] right-[-0.25rem]", d: "M16 16C16 8 9 1 1 1" },
  { className: "bottom-[-0.25rem] left-[-0.25rem]", d: "M1 1C1 9 8 16 16 16" },
  { className: "bottom-[-0.25rem] right-[-0.25rem]", d: "M16 1C16 9 9 16 1 16" },
];

const SOCIAL_ICON_PATHS: Record<SocialIconName, { viewBox: string; d: string }> = {
  instagram: {
    viewBox: "0 0 32 32",
    d: "M10.4 2.66797H21.6C25.8666 2.66797 29.3333 6.13464 29.3333 10.4013V21.6013C29.3333 23.6523 28.5185 25.6193 27.0683 27.0696C25.618 28.5199 23.651 29.3346 21.6 29.3346H10.4C6.13329 29.3346 2.66663 25.868 2.66663 21.6013V10.4013C2.66663 8.35029 3.48139 6.38329 4.93167 4.93301C6.38195 3.48273 8.34895 2.66797 10.4 2.66797ZM10.1333 5.33464C8.86025 5.33464 7.63935 5.84035 6.73918 6.74052C5.83901 7.6407 5.33329 8.8616 5.33329 10.1346V21.868C5.33329 24.5213 7.47996 26.668 10.1333 26.668H21.8666C23.1397 26.668 24.3606 26.1623 25.2607 25.2621C26.1609 24.3619 26.6666 23.141 26.6666 21.868V10.1346C26.6666 7.4813 24.52 5.33464 21.8666 5.33464H10.1333ZM23 7.33464C23.442 7.33464 23.8659 7.51023 24.1785 7.82279C24.491 8.13535 24.6666 8.55927 24.6666 9.0013C24.6666 9.44333 24.491 9.86725 24.1785 10.1798C23.8659 10.4924 23.442 10.668 23 10.668C22.5579 10.668 22.134 10.4924 21.8214 10.1798C21.5089 9.86725 21.3333 9.44333 21.3333 9.0013C21.3333 8.55927 21.5089 8.13535 21.8214 7.82279C22.134 7.51023 22.5579 7.33464 23 7.33464ZM16 9.33463C17.7681 9.33464 19.4638 10.037 20.714 11.2873C21.9642 12.5375 22.6666 14.2332 22.6666 16.0013C22.6666 17.7694 21.9642 19.4651 20.714 20.7153C19.4638 21.9656 17.7681 22.668 16 22.668C14.2318 22.668 12.5362 21.9656 11.2859 20.7153C10.0357 19.4651 9.33329 17.7694 9.33329 16.0013C9.33329 14.2332 10.0357 12.5375 11.2859 11.2873C12.5362 10.037 14.2318 9.33464 16 9.33463ZM16 12.0013C14.9391 12.0013 13.9217 12.4227 13.1715 13.1729C12.4214 13.923 12 14.9404 12 16.0013C12 17.0622 12.4214 18.0796 13.1715 18.8297C13.9217 19.5799 14.9391 20.0013 16 20.0013C17.0608 20.0013 18.0782 19.5799 18.8284 18.8297C19.5785 18.0796 20 17.0622 20 16.0013C20 14.9404 19.5785 13.923 18.8284 13.1729C18.0782 12.4227 17.0608 12.0013 16 12.0013Z",
  },
  whatsapp: {
    viewBox: "0 0 24 24",
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
  },
  mail: {
    viewBox: "0 0 24 24",
    d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
  },
};

/** Panah tombol submit newsletter. viewBox 0 0 28 22. */
const SUBMIT_ARROW_PATH =
  "M17.2158 0.000976562L26.8631 9.84129L28 11.001L26.8631 12.1607L17.2158 22.001L14.9419 19.6816C14.9419 19.6816 22.2254 12.7529 22.9711 12.2964L22.8169 12.0666C22.1408 12.6381 0 12.641 0 12.641V9.36093C0 9.36093 22.169 9.36093 22.8169 9.93534L22.9711 9.70557C22.2817 9.3639 14.9419 2.32036 14.9419 2.32036L17.2158 0.000976562Z";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Tautan hash di halaman yang sama digulir halus; lintas halaman diserahkan
 * ke Next.js. Konsisten dengan navigasi anchor-aware di Navbar.
 */
function useHashNavigation() {
  const pathname = usePathname();

  return (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const [rawPath, hash] = href.split("#");
    if (!hash) return;

    const targetPath = rawPath || "/";
    if (targetPath !== pathname) return;

    event.preventDefault();
    smoothScrollTo(`#${hash}`, { offset: 80 });
    window.history.pushState(null, "", href);
  };
}

/* -------------------------------------------------------------------------- */
/*  Footer                                                                     */
/* -------------------------------------------------------------------------- */

export function Footer() {
  const onHashLink = useHashNavigation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /**
   * Belum ada backend newsletter, jadi formulir ini membuka klien email
   * dengan alamat yang diisi — bukan diam-diam mengirim ke tempat yang
   * tidak ada.
   */
  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const address = email.trim();
    if (!address) return;

    const subject = encodeURIComponent("Pendaftaran pembaruan Krevia Digital");
    const body = encodeURIComponent(
      `Mohon daftarkan email berikut untuk menerima pembaruan Krevia Digital:\n\n${address}\n`
    );

    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <footer className="relative overflow-hidden bg-footer-surface bg-footer-grain pt-8 text-xl leading-[1.2] text-footer-light min-[480px]:pt-12 md:pt-16 desktop:pt-24">
      {/* Notch atas — setinggi padding-atas footer, seperti aslinya. */}
      <div className="pointer-events-none absolute inset-x-0 top-[-1px] z-[2] h-8 min-[480px]:h-12 md:h-16 desktop:h-24">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1280 119"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={TOP_NOTCH_PATH}
            fill="var(--color-gray-50)"
          />
        </svg>
      </div>

      {/* .padding-global .padding-section-medium */}
      <div className="relative px-4 py-12 md:px-8 md:py-16">
        {/* .container-large */}
        <div className="mx-auto w-full max-w-[80rem]">
          {/* .footer_header */}
          <div className="mb-8 grid grid-cols-1 items-end gap-8 min-[480px]:mb-12 md:mb-24 desktop:mb-32 desktop:grid-cols-[1fr_1.75fr]">
            {/* .footer_header-inner */}
            <div className="flex max-w-[16rem] flex-col gap-4">
              <div
                className="mask-logo-mark h-8 w-8 bg-footer-light"
                role="img"
                aria-label="Krevia Digital"
              />
              <div>{SITE_CONFIG.tagline}</div>
            </div>

            {/* .footer_menu */}
            <div className="grid grid-cols-2 gap-8 min-[480px]:grid-cols-3">
              {FOOTER_COLUMNS.map((column, index) => (
                <div key={index} className="flex flex-col items-start gap-3">
                  {column.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onHashLink(item.href)}
                      className="rounded-sm text-base leading-[1.2] transition-colors duration-100 hover:text-accent focus-visible:ring-2 focus-visible:ring-footer-light/70 focus-visible:ring-offset-2 focus-visible:ring-offset-footer-surface focus-visible:outline-none md:text-xl"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* .footer_card */}
          <div className="relative mt-0 mb-4 flex flex-col justify-between gap-16 rounded-[20px] bg-footer-light px-4 pt-8 pb-4 text-footer-surface md:mt-8 md:mb-8 md:rounded-none md:px-8 md:pt-0 md:pb-0 desktop:mt-12 desktop:mb-12">
            {/* Notch atas kartu — disembunyikan di bawah 768px, seperti aslinya. */}
            <div className="pointer-events-none absolute inset-x-0 bottom-full hidden h-8 md:block desktop:h-12">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1152 51"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={CARD_TOP_NOTCH_PATH}
                  fill="var(--color-footer-light)"
                />
              </svg>
            </div>

            {/* .footer_credit — mengambang di atas kartu, rata kanan. */}
            <p className="absolute right-0 bottom-[calc(100%_+_1.75rem)] w-[51%] text-sm leading-[1.2] font-medium text-balance text-footer-light md:right-2 md:bottom-[calc(100%_+_1.25rem)] md:overflow-hidden md:text-right max-md:inset-x-0 max-md:top-full max-md:bottom-auto max-md:flex max-md:h-16 max-md:w-full max-md:flex-wrap max-md:items-center max-md:justify-center max-md:gap-x-2 max-md:text-center desktop:right-0 desktop:bottom-[calc(100%_+_1.75rem)] desktop:overflow-visible desktop:text-left">
              <span className="whitespace-nowrap">
                WhatsApp{" "}
                <a
                  href={SITE_CONFIG.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm underline underline-offset-4 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:outline-none"
                >
                  {SITE_CONFIG.whatsappDisplay}
                </a>
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="rounded-sm whitespace-nowrap underline underline-offset-4 hover:text-accent focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:outline-none"
              >
                {SITE_CONFIG.email}
              </a>
              <span className="max-md:hidden">
                {" · "}
                {SITE_CONFIG.location}
              </span>
            </p>

            {/* .footer_card-top */}
            <div className="mt-4 flex flex-col items-stretch gap-x-4 gap-y-8 pt-4 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between md:gap-x-8 desktop:mt-0 desktop:pt-0">
              <div
                className="mask-logo-horizontal h-12 w-full shrink-0 self-start bg-footer-surface min-[480px]:w-[12.5rem] min-[480px]:self-auto md:h-24 md:w-[25rem]"
                role="img"
                aria-label="Krevia Digital"
              />

              <Link
                href="/kontak"
                className="group relative inline-block shrink-0 rounded-xl bg-footer-accent px-8 py-3 text-center text-base leading-none font-medium text-footer-light focus-visible:ring-2 focus-visible:ring-footer-deep/60 focus-visible:ring-offset-2 focus-visible:ring-offset-footer-light focus-visible:outline-none"
              >
                <span className="relative z-[1]">Kerja sama?</span>

                {/* Kurung siku yang melebar saat hover — seperti aslinya. */}
                <span
                  className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(.28,1.78,.16,.93)] group-hover:scale-110"
                  aria-hidden="true"
                >
                  {BUTTON_CORNER_PATHS.map((corner) => (
                    <span
                      key={corner.d}
                      className={`absolute flex h-4 w-4 items-center justify-center text-footer-accent ${corner.className}`}
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 17 17"
                        fill="none"
                        preserveAspectRatio="xMidYMid meet"
                        aria-hidden="true"
                      >
                        <path
                          d={corner.d}
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ))}
                </span>
              </Link>
            </div>

            {/* .footer_card-bottom */}
            <div className="relative z-[1] mb-0 flex flex-col gap-4 md:-mb-4 desktop:-mb-8">
              <h2 className="text-2xl leading-none font-medium tracking-[0.02em] desktop:text-5xl">
                Newsletter
              </h2>

              {/* .footer_newsletter */}
              <div className="max-w-none md:max-w-[28rem]">
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  {/* .footer_form-field */}
                  <div className="flex items-center rounded-[25px] bg-footer-surface pl-4 max-md:rounded-[15px] max-md:pr-4 md:pr-8">
                    <label htmlFor="footer-newsletter-email" className="sr-only">
                      Alamat email
                    </label>
                    <input
                      id="footer-newsletter-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="h-16 w-full bg-transparent px-4 text-xl leading-[1.2] font-medium lowercase text-footer-light outline-none placeholder:text-footer-muted"
                    />
                    <button
                      type="submit"
                      aria-label="Kirim alamat email"
                      className="shrink-0 text-accent transition-transform duration-200 hover:translate-x-1 focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:outline-none"
                    >
                      <span className="block h-8 w-8">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 28 22"
                          fill="none"
                          preserveAspectRatio="xMidYMid meet"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d={SUBMIT_ARROW_PATH}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>

                  <p
                    aria-live="polite"
                    className={submitted ? "block text-sm leading-[1.2]" : "hidden"}
                  >
                    Klien email Anda dibuka. Kirim pesan itu untuk menyelesaikan pendaftaran.
                  </p>
                </form>
              </div>

              {/* .footer_infos */}
              <div className="flex w-full flex-col items-start gap-4 self-end md:w-[78%] desktop:flex-row desktop:items-center desktop:justify-between">
                {/* .footer_info-text */}
                <p className="max-w-[28rem] text-sm leading-[1.2]">
                  Masukkan email kerja Anda untuk menerima catatan rilis modul ERP dan pembaruan
                  Krevia Digital.
                </p>

                {/* .footer_info-text-out */}
                <p className="relative left-0 -mt-4 w-full text-left text-sm leading-[1.2] text-footer-surface md:absolute md:top-full md:-left-8 md:mt-4 md:w-[20%] md:text-right md:text-footer-light desktop:mt-0">
                  Tanpa spam — hanya kabar yang relevan.
                </p>

                {/* .footer_social-links */}
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => {
                    const icon = SOCIAL_ICON_PATHS[social.icon];

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        title={social.label}
                        target={social.external ? "_blank" : undefined}
                        rel={social.external ? "noopener noreferrer" : undefined}
                        className="rounded-sm transition-colors duration-200 hover:text-footer-accent focus-visible:ring-2 focus-visible:ring-footer-accent/70 focus-visible:outline-none"
                      >
                        <span className="block h-8 w-8">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox={icon.viewBox}
                            fill="none"
                            preserveAspectRatio="xMidYMid meet"
                            aria-hidden="true"
                          >
                            <path d={icon.d} fill="currentColor" />
                          </svg>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Notch bawah kartu */}
            <div className="pointer-events-none absolute inset-x-0 top-full hidden h-8 md:block desktop:h-12">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1152 56"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d={CARD_BOTTOM_NOTCH_PATH}
                  fill="var(--color-footer-light)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
