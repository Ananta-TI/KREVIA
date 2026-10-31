"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { smoothScrollTo } from "@/lib/smoothScroll";

export function SmoothScroll() {
  useEffect(() => {
    // 1. Force manual scroll restoration so browsers do not jerkily snap
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
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

    // Handle initial hash navigation if present
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace(/^#/, "");
      const targetElement = document.getElementById(hashId);
      if (targetElement) {
        setTimeout(() => {
          smoothScrollTo(targetElement, {
            duration: 1200,
            offset: 80,
          });
        }, 400);
      }
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
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
