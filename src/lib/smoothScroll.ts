"use client";

/**
 * High-performance, mathematically interpolated smooth scroll.
 * Uses easeInOutQuart curve for a cinematic, luxurious glide down the page.
 */
export function smoothScrollTo(
  target: string | HTMLElement,
  options?: { duration?: number; offset?: number; onComplete?: () => void }
) {
  if (typeof window === "undefined") return;

  const offset = options?.offset ?? 80; // Offset for sticky navbar
  const durationMs = options?.duration ?? 1400; // ~1.4s luxurious glide
  const durationSeconds = durationMs / 1000;

  let targetElement: HTMLElement | null = null;
  if (typeof target === "string") {
    const cleanId = target.replace(/^#/, "");
    targetElement = document.getElementById(cleanId) || document.querySelector(target);
  } else {
    targetElement = target;
  }

  if (!targetElement) return;

  // 1. If Lenis is active on window, delegate directly to Lenis for supreme momentum
  const lenis = (window as unknown as { lenis?: { scrollTo: Function } }).lenis;
  if (lenis && typeof lenis.scrollTo === "function") {
    lenis.scrollTo(targetElement, {
      offset: -offset, // Lenis offset is negative to leave space for navbar
      duration: durationSeconds,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      immediate: false,
      lock: false,
      force: true,
      onComplete: () => {
        if (options?.onComplete) options.onComplete();
      },
    });
    return;
  }

  const startPosition = window.pageYOffset || document.documentElement.scrollTop;
  const elementRect = targetElement.getBoundingClientRect();
  const targetPosition = elementRect.top + startPosition - offset;
  const distance = targetPosition - startPosition;

  // Already at target
  if (Math.abs(distance) < 2) {
    if (options?.onComplete) options.onComplete();
    return;
  }

  let startTime: number | null = null;
  let isCancelled = false;

  // Ultra-luxurious cubic-bezier / quartic deceleration curve
  const easeInOutQuart = (t: number): number => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  // If the user manually intervenes by scrolling, cancel gracefully
  const cancelEvents = ["wheel", "touchmove"];
  const handleUserCancel = () => {
    isCancelled = true;
    cancelEvents.forEach((ev) => window.removeEventListener(ev, handleUserCancel));
  };
  cancelEvents.forEach((ev) => window.addEventListener(ev, handleUserCancel, { passive: true }));

  function step(currentTime: number) {
    if (isCancelled) return;
    if (startTime === null) startTime = currentTime;

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / durationMs, 1);
    const ease = easeInOutQuart(progress);

    window.scrollTo(0, Math.round(startPosition + distance * ease));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, Math.round(targetPosition));
      cancelEvents.forEach((ev) => window.removeEventListener(ev, handleUserCancel));
      if (options?.onComplete) options.onComplete();
    }
  }

  requestAnimationFrame(step);
}

/**
 * Standard anchor click handler for seamless navigation across all components.
 */
export function handleNavClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  options?: { offset?: number; duration?: number; onComplete?: () => void }
) {
  e.preventDefault();
  smoothScrollTo(href, {
    offset: options?.offset ?? 80,
    duration: options?.duration ?? 1200,
    onComplete: options?.onComplete,
  });
  if (typeof window !== "undefined") {
    window.history.pushState(null, "", href);
  }
}
