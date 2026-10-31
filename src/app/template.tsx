"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Hanya untuk navigasi antar-halaman di sisi klien.
    // Pada muat pertama (refresh / deep link) posisi scroll dibiarkan
    // dipulihkan oleh browser, agar halaman tidak "mulai dari awal" lagi.
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Bila tujuan navigasi punya hash sendiri, biarkan anchor yang menggulir.
    if (typeof window !== "undefined" && !window.location.hash) {
      const lenis = (window as unknown as { lenis?: { scrollTo: Function } }).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1], // easeOutQuart: luxurious deceleration
      }}
      className="w-full overflow-x-clip"
    >
      {children}
    </motion.div>
  );
}
