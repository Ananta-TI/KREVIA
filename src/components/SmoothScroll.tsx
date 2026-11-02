"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function SmoothScroll() {
  useEffect(() => {
    // 1. Browser yang mengurus pemulihan posisi scroll saat refresh/kembali.
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }

    // 2. Initialize Lenis with bespoke floating inertia physics
    const lenis = new Lenis({
      lerp: 0.075, // Silky exponential dampening for mousewheel & trackpad
      wheelMultiplier: 0.9, // Balanced wheel impulse for luxurious float without jerkiness
      touchMultiplier: 1.5,
      smoothWheel: true,
      syncTouch: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      respectReducedMotion: false,
      autoRaf: true,
    });

    // Expose lenis globally for universal access across components
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // 2. Gulir ke anchor awal URL (deep link / refresh pada "/#faq") —
    //    ditunda sampai intro selesai agar tidak berebut dengan koreografi
    //    pembuka.
    const scrollToInitialHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const element = document.getElementById(hash.replace(/^#/, ""));
      if (!element) return;
      smoothScrollTo(element, { duration: 1000, offset: 80 });
    };

    // Halaman tanpa koreografi hero (semua halaman selain beranda) tidak punya
    // komponen yang mengirim "krevia:ready"; tandai siap di sini agar anchor
    // awal tetap digulirkan. Penanda intro juga langsung ditutup supaya
    // kembali ke beranda lewat navigasi klien tidak memutar ulang koreografi.
    if (!document.querySelector("[data-hero-intro]")) {
      document.documentElement.dataset.kreviaReady = "1";
      document.documentElement.dataset.intro = "done";
    }

    const isReady = document.documentElement.dataset.kreviaReady === "1";
    if (isReady) {
      requestAnimationFrame(scrollToInitialHash);
    } else {
      window.addEventListener("krevia:ready", scrollToInitialHash, { once: true });
    }

    // 3. Intercept all internal anchor clicks across the entire document
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.getElementById(href.replace(/^#/, ""));
        if (targetElement) {
          e.preventDefault();
          e.stopPropagation();

          // Trigger high-precision cinematic smooth scroll via Lenis
          smoothScrollTo(targetElement, {
            duration: 1400,
            offset: 80,
          });

          // Update URL hash gently without page jump
          window.history.pushState(null, "", href);
        }
      }
    };

    // Use capture phase so we always intercept before default browser hash jump
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("krevia:ready", scrollToInitialHash);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
