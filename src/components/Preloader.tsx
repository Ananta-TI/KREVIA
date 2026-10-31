"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [statusText, setStatusText] = useState("Menginisialisasi Sistem ERP...");

  useEffect(() => {
    // Pin viewport strictly to top on mount
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }

    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";
    const lenis = (window as unknown as { lenis?: { stop: Function; start: Function; scrollTo: Function } }).lenis;
    lenis?.scrollTo(0, { immediate: true });
    lenis?.stop();

    // Progress counter animation
    const startTime = performance.now();
    const duration = 1200; // 1.2 seconds total loading time

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      // Quartic ease-out for realistic loading speed deceleration
      const easedProgress = Math.round((1 - Math.pow(1 - rawProgress, 3)) * 100);
      setProgress(easedProgress);

      if (easedProgress < 35) {
        setStatusText("Menginisialisasi Sistem Inti...");
      } else if (easedProgress < 75) {
        setStatusText("Memuat Alur Kerja Operasional...");
      } else if (easedProgress < 99) {
        setStatusText("Menghubungkan Modul ERP...");
      } else {
        setStatusText("Selamat Datang di Krevia Digital");
      }

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Short pause at 100% before curtain reveal
        setTimeout(() => {
          setIsComplete(true);
          document.body.style.overflow = "";
          const activeLenis = (window as unknown as { lenis?: { start: Function } }).lenis;
          activeLenis?.start();
        }, 200);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);

    // Safety fallback: ensure screen is never stuck
    const fallbackTimer = setTimeout(() => {
      setIsComplete(true);
      document.body.style.overflow = "";
      const activeLenis = (window as unknown as { lenis?: { start: Function } }).lenis;
      activeLenis?.start();
    }, 2200);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = "";
      const activeLenis = (window as unknown as { lenis?: { start: Function } }).lenis;
      activeLenis?.start();
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="krevia-preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden"
        >
          {/* Ambient Lighting Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-secondary/15 via-primary/5 to-transparent rounded-full blur-[140px] pointer-events-none" />

          {/* Top Status Header */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 flex items-center justify-between text-xs font-bold tracking-[0.2em] text-gray-500 uppercase"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Krevia Digital • ERP Terintegrasi</span>
            </div>
            <span>Bangun Lebih Cerdas. Beroperasi Lebih Baik.</span>
          </motion.div>

          {/* Center Brand Lockup & Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <div className="relative h-14 sm:h-16 w-auto flex items-center justify-center">
                <Image
                  src="/logo-horizontal.png"
                  alt="Krevia Digital"
                  width={420}
                  height={100}
                  className="h-14 sm:h-16 w-auto object-contain"
                  priority
                />
              </div>

              {/* Shimmer line underneath */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-28 h-[1.5px] bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
            </motion.div>

            {/* Dynamic Status Text */}
            <motion.p
              key={statusText}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs sm:text-sm font-semibold tracking-wide text-gray-500 mt-2"
            >
              {statusText}
            </motion.p>
          </div>

          {/* Bottom Progress Metrics & Sleek Bar */}
          <div className="relative z-10 max-w-xl mx-auto w-full">
            <div className="flex items-end justify-between mb-3 text-gray-900">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Kesiapan Sistem
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-primary tabular-nums">
                  {progress}
                </span>
                <span className="text-sm font-bold text-secondary">%</span>
              </div>
            </div>

            <div className="relative h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs tracking-wider font-semibold text-gray-500 uppercase">
              <span>Arsitektur ERP Modular</span>
              <span>v1.0.0</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
