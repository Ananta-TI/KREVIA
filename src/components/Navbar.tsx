"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "Beranda", href: "/" },
    { label: "Produk ERP", href: "/produk/erp" },
    { label: "Layanan", href: "/layanan" },
    { label: "Harga", href: "/harga" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Kontak", href: "/kontak" },
  ];

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-300/80 shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Lockup */}
          <Link href="/" className="shrink-0 flex items-center group py-1" aria-label="Beranda Krevia Digital">
            <Image
              src="/logo-horizontal.png"
              alt="Krevia Digital"
              width={375}
              height={90}
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navigasi Utama">
            {navItems.map((item) => {
              const active = isItemActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm ${
                    active
                      ? "text-primary font-bold border-b-2 border-secondary"
                      : "text-gray-700 hover:text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary hover:bg-navy-light text-white text-sm font-semibold transition-all duration-200 hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <span>Konsultasi Sekarang</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-gray-300 px-4 pt-4 pb-6 shadow-xl animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2.5" aria-label="Navigasi Mobile">
            {navItems.map((item) => {
              const active = isItemActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    active
                      ? "bg-gray-100 text-primary font-bold"
                      : "text-gray-700 hover:text-secondary hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-gray-200">
              <Link
                href="/kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-primary text-white text-sm font-bold shadow-sm"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
