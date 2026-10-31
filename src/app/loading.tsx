import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-xs">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-3 border-gray-200 border-t-secondary animate-spin" />
        <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
          Memuat Halaman...
        </span>
      </div>
    </div>
  );
}
