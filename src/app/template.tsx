"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

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
    <div className="w-full overflow-x-clip">
      {children}
    </div>
  );
}
