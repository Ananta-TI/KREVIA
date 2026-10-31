"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Intercept keyboard reload shortcuts (F5, Ctrl+R, Cmd+R) on subpages to return directly to Beranda
    const handleKeyDown = (e: KeyboardEvent) => {
      const isReloadKey =
        e.key === "F5" ||
        ((e.ctrlKey || e.metaKey) && (e.key === "r" || e.key === "R"));

      const isSubpage = pathname !== "/";

      if (isReloadKey && isSubpage) {
        e.preventDefault();
        window.location.replace("/");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname]);

  useEffect(() => {
    // When changing routes without a specific hash, scroll cleanly to top
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
