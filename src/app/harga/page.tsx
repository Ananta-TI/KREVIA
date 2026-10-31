import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "Daftar Harga Jasa Website & Sistem Custom | Krevia Digital",
  description:
    "Daftar harga jasa pembuatan website company profile, custom software, sistem bisnis, integrasi API, dan AI chatbot dari Krevia Digital. Rentang harga jelas dengan penawaran final di quotation.",
  keywords: [
    "Harga Jasa Pembuatan Website Pekanbaru",
    "Biaya Website Company Profile",
    "Harga Custom Software Indonesia",
    "Harga Sistem ERP Kustom",
    "Biaya Integrasi API",
    "Harga AI Chatbot WhatsApp",
    "Daftar Harga Jasa Digital",
  ],
  alternates: {
    canonical: "/harga",
  },
  openGraph: {
    title: "Daftar Harga Jasa Website & Sistem Custom | Krevia Digital",
    description:
      "Rentang harga transparan untuk website company profile, custom software, sistem bisnis, integrasi API, dan AI chatbot. Estimasi awal, final di quotation.",
    url: "https://kreviadigitalid.my.id/harga",
    siteName: "Krevia Digital",
    locale: "id_ID",
    type: "website",
  },
};

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <PricingPageContent />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
