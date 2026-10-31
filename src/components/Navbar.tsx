"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Home,
  Boxes,
  Sparkles,
  Code2,
  ReceiptText,
  Building2,
  Info,
  MessageSquare,
  HelpCircle,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

interface NavLeaf {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface NavGroup {
  label: string;
  icon: LucideIcon;
  /** Tautan langsung (tanpa dropdown). */
  href?: string;
  /** Sub-tautan yang dirender sebagai dropdown/akordeon. */
  children?: NavLeaf[];
}

/**
 * Struktur navigasi terpusat untuk seluruh halaman.
 * Satu sumber kebenaran agar desktop dropdown dan mobile drawer konsisten.
 *
 * Kaidah: link yang mengarah ke section beranda ("/#...") tampil DATAR (di-scroll),
 * sedangkan dropdown hanya dipakai untuk kelompok link yang berpindah halaman.
 */
const NAV_GROUPS: NavGroup[] = [
  { label: "Beranda", href: "/", icon: Home },
  {
    label: "Produk",
    href: "/produk/erp",
    icon: Boxes,
  },
  {
    label: "Layanan",
    icon: Sparkles,
    children: [
      { label: "Layanan Rekayasa", href: "/layanan", icon: Code2 },
      { label: "Daftar Harga Jasa", href: "/harga", icon: ReceiptText },
    ],
  },
  {
    label: "Perusahaan",
    icon: Building2,
    children: [
      { label: "Tentang Kami", href: "/tentang-kami", icon: Info },
      { label: "Kontak & Konsultasi", href: "/kontak", icon: MessageSquare },
    ],
  },
  { label: "FAQ", href: "/#faq", icon: HelpCircle },
];

const CTA = { label: "Konsultasi Sekarang", href: "/kontak" } as const;

/** Semua hash section beranda yang dipakai navbar (mis. ["faq"]). */
const HOME_SECTION_HASHES = NAV_GROUPS.flatMap((group) =>
  [group.href, ...(group.children?.map((child) => child.href) ?? [])]
)
  .filter((href): href is string => Boolean(href?.startsWith("/#")))
  .map((href) => href.split("#")[1]);

/** Jarak aman di atas target agar tidak tertutup navbar yang fixed. */
const NAV_OFFSET = 80;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  // Menyimpan hash tujuan saat navigasi lintas-halaman (mis. klik "/#faq" dari halaman lain)
  const pendingHashRef = useRef<string | null>(null);
  // Hash aktif, dipakai agar link section beranda (mis. FAQ) tidak selalu ikut menyala di beranda
  const [activeHash, setActiveHash] = useState("");

  // 1. Deteksi posisi scroll untuk transisi "floating pill"
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Tutup overlay setiap kali rute berpindah
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setActiveHash(window.location.hash);
  }, [pathname]);

  // 2b. Setelah pindah halaman, gulir ke hash yang tertunda (mis. "/#faq")
  useEffect(() => {
    const hash = pendingHashRef.current;
    if (!hash) return;
    pendingHashRef.current = null;
    const timer = setTimeout(() => {
      smoothScrollTo(hash, { offset: NAV_OFFSET });
      setActiveHash(hash);
    }, 350);
    return () => clearTimeout(timer);
  }, [pathname]);

  // 2c. Jaga status aktif tetap sinkron bila hash berubah (mis. tombol back/forward)
  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  // 3. Tutup dropdown saat klik di luar atau menekan Escape
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // 4. Deteksi item aktif: cocokkan path, lalu (bila ada) hash-nya.
  //    Link tanpa hash tetap aktif selama hash saat ini bukan salah satu section beranda di navbar.
  const isActivePath = useCallback(
    (href: string) => {
      const [rawPath, hash] = href.split("#");
      const targetPath = rawPath || "/";

      const pathMatches =
        targetPath === "/"
          ? pathname === "/"
          : pathname === targetPath || pathname.startsWith(`${targetPath}/`);
      if (!pathMatches) return false;

      if (hash) return activeHash === `#${hash}`;
      return !activeHash || !HOME_SECTION_HASHES.includes(activeHash.slice(1));
    },
    [pathname, activeHash]
  );

  const isGroupActive = (group: NavGroup) =>
    group.href
      ? isActivePath(group.href)
      : Boolean(group.children?.some((child) => isActivePath(child.href)));

  const toggleDropdown = (label: string) =>
    setOpenDropdown((current) => (current === label ? null : label));

  // Smooth scroll ke atas (pakai Lenis bila aktif, dengan fallback native).
  const scrollToTop = () => {
    const lenis = (window as unknown as { lenis?: { scrollTo: Function } }).lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { duration: 1.2, force: true });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Logo & "Beranda": saat sudah di beranda, gulir ke atas alih-alih navigasi ulang.
  const closeOverlays = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  /**
   * Navigasi sadar-anchor:
   * - Tautan ke section beranda (mis. "/#faq"):
   *     · sedang di beranda  → smooth scroll ke section
   *     · sedang di halaman lain → navigasi ke beranda lalu scroll (via pendingHashRef)
   * - Tautan "/" saat sudah di beranda → smooth scroll ke atas
   * - Tautan hash di halaman yang sama (mis. "/produk/erp#pricing") → smooth scroll
   * - Tautan antar-halaman biasa → serahkan ke Next.js
   */
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [rawPath, hash] = href.split("#");
    const targetPath = rawPath || "/";
    const onSamePage = targetPath === pathname;

    // Hash di halaman yang sama → scroll (mis. "/#faq" saat di beranda)
    if (onSamePage && hash) {
      e.preventDefault();
      closeOverlays();
      smoothScrollTo(`#${hash}`, { offset: NAV_OFFSET });
      window.history.pushState(null, "", href);
      setActiveHash(`#${hash}`);
      return;
    }

    // Tautan tanpa hash ke halaman yang sama
    if (onSamePage && !hash) {
      closeOverlays();
      if (targetPath === "/") {
        // Di beranda: klik logo/"Beranda" → gulir ke atas & bersihkan hash.
        e.preventDefault();
        scrollToTop();
        if (window.location.hash) {
          window.history.replaceState(null, "", "/");
          setActiveHash("");
        }
      }
      return;
    }

    // Lintas halaman: biarkan Next.js menavigasi, catat hash untuk di-scroll setelahnya.
    closeOverlays();
    if (hash) pendingHashRef.current = `#${hash}`;
  };

  const desktopLinkBase =
    "group relative flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary";

  const desktopTone = (active: boolean) =>
    active
      ? "text-primary"
      : scrolled
        ? "text-gray-900 hover:text-primary"
        : "text-gray-700 hover:text-primary";

  return (
    <header className="pointer-events-none fixed top-0 left-0 z-50 flex w-full justify-center">
      <div
        className={`pointer-events-auto relative flex w-full flex-col transition-all duration-500 ease-in-out ${
          scrolled
            ? "mt-4 max-w-[92%] rounded-3xl bg-white/85 shadow-lg shadow-gray-900/10 backdrop-blur-2xl backdrop-saturate-150 xl:max-w-[1120px] xl:rounded-full"
            : "mt-0 max-w-full bg-transparent"
        }`}
      >
        <div ref={navRef} className="relative z-10 mx-auto w-full max-w-[1400px]">
          {/* Top Bar */}
          <div
            className={`flex w-full items-center justify-between transition-all duration-500 ease-in-out ${
              scrolled ? "px-5 py-2.5 lg:px-7" : "px-4 py-4 sm:px-6 lg:px-10"
            }`}
          >
            {/* Logo Lockup */}
            <Link
              href="/"
              onClick={(e) => handleNav(e, "/")}
              className="group flex shrink-0 items-center py-1"
              aria-label="Beranda Krevia Digital"
            >
              <Image
                src="/logo-horizontal.png"
                alt="Krevia Digital"
                width={375}
                height={90}
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-9"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex lg:gap-1.5" aria-label="Navigasi Utama">
              {NAV_GROUPS.map((group) => {
                const Icon = group.icon;
                const activeGroup = isGroupActive(group);

                // Tautan langsung (tanpa dropdown)
                if (!group.children) {
                  return (
                    <Link
                      key={group.href}
                      href={group.href as string}
                      onClick={(e) => handleNav(e, group.href as string)}
                      aria-current={activeGroup ? "page" : undefined}
                      className={`${desktopLinkBase} ${desktopTone(activeGroup)}`}
                    >
                      <Icon
                        size={14}
                        className={
                          activeGroup
                            ? "text-primary"
                            : "opacity-60 transition-opacity group-hover:opacity-100 group-hover:text-primary"
                        }
                      />
                      <span>{group.label}</span>
                      <span
                        className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                          activeGroup ? "w-6" : "w-0 group-hover:w-6"
                        }`}
                      />
                    </Link>
                  );
                }

                // Grup dengan dropdown
                const isOpenDropdown = openDropdown === group.label;
                return (
                  <div key={group.label} className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(group.label)}
                      aria-expanded={isOpenDropdown}
                      aria-haspopup="true"
                      className={`${desktopLinkBase} ${desktopTone(activeGroup)}`}
                    >
                      <Icon
                        size={14}
                        className={activeGroup ? "text-primary" : "opacity-60 group-hover:text-primary"}
                      />
                      <span>{group.label}</span>
                      <ChevronDown
                        size={14}
                        className={`opacity-60 transition-transform duration-300 group-hover:opacity-100 ${
                          isOpenDropdown ? "rotate-180" : ""
                        }`}
                      />
                      {activeGroup && (
                        <span className="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-primary" />
                      )}
                    </button>

                    {isOpenDropdown && (
                      <div className="absolute left-1/2 mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-300 bg-white/95 py-2 shadow-xl shadow-gray-900/10 backdrop-blur-2xl">
                        {group.children.map((item) => {
                          const ChildIcon = item.icon;
                          const itemActive = isActivePath(item.href);
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={(e) => handleNav(e, item.href)}
                              aria-current={itemActive ? "page" : undefined}
                              className={`flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium transition-colors ${
                                itemActive
                                  ? "bg-primary/10 font-bold text-primary"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              }`}
                            >
                              {ChildIcon && (
                                <ChildIcon size={14} className={itemActive ? "text-primary" : "opacity-60"} />
                              )}
                              <span>{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <Link
                href={CTA.href}
                onClick={(e) => handleNav(e, CTA.href)}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <span>{CTA.label}</span>
                <ArrowUpRight className="h-4 w-4 text-accent" />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
                aria-expanded={mobileOpen}
                className="flex h-10 w-10 flex-col items-center justify-center space-y-1.5 rounded-full border border-gray-300 bg-white/70 text-gray-900 shadow-sm backdrop-blur-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    mobileOpen ? "translate-y-[8px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                    mobileOpen ? "-translate-y-[8px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`grid overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${
              mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="mt-1 flex flex-col px-5 pb-6 sm:px-6">
                <div className="mb-2 h-px w-full bg-gray-300/70" />

                {NAV_GROUPS.map((group) => {
                  const Icon = group.icon;

                  // Tautan langsung
                  if (!group.children) {
                    const activeItem = isActivePath(group.href as string);
                    return (
                      <Link
                        key={group.href}
                        href={group.href as string}
                        onClick={(e) => handleNav(e, group.href as string)}
                        aria-current={activeItem ? "page" : undefined}
                        className={`flex items-center gap-3 border-b border-gray-300/60 py-3 text-sm font-medium transition-colors ${
                          activeItem ? "font-bold text-primary" : "text-gray-700 hover:text-primary"
                        }`}
                      >
                        <Icon size={14} className={activeItem ? "text-primary" : "opacity-60"} />
                        <span>{group.label}</span>
                      </Link>
                    );
                  }

                  // Grup akordeon
                  const expanded = openDropdown === group.label;
                  const activeGroup = isGroupActive(group);
                  return (
                    <div key={group.label} className="border-b border-gray-300/60 py-2">
                      <button
                        type="button"
                        onClick={() => toggleDropdown(group.label)}
                        aria-expanded={expanded}
                        className={`flex w-full items-center justify-between text-sm font-bold ${
                          activeGroup ? "text-primary" : "text-gray-700"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon size={14} className={activeGroup ? "text-primary" : "opacity-60"} />
                          {group.label}
                        </span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          expanded ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-1 pb-1">
                            {group.children.map((item) => {
                              const ChildIcon = item.icon;
                              const itemActive = isActivePath(item.href);
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={(e) => handleNav(e, item.href)}
                                  aria-current={itemActive ? "page" : undefined}
                                  className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                                    itemActive
                                      ? "bg-primary/10 text-primary"
                                      : "text-gray-700 hover:bg-gray-100"
                                  }`}
                                >
                                  {ChildIcon && (
                                    <ChildIcon size={13} className={itemActive ? "text-primary" : "opacity-60"} />
                                  )}
                                  <span>{item.label}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <Link
                  href={CTA.href}
                  onClick={(e) => handleNav(e, CTA.href)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-center text-sm font-bold text-white shadow-lg transition active:scale-[0.98]"
                >
                  <span>{CTA.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-accent" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
