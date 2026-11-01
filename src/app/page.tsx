import { Hero } from "@/components/Hero";
import { ErpOverview } from "@/components/ErpOverview";
import { ServicesBento } from "@/components/ServicesBento";
import { WhyKrevia } from "@/components/WhyKrevia";
import { FaqSection } from "@/components/FaqSection";
import { HomeCtaSection } from "@/components/HomeCtaSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50 text-gray-900">
      
      {/* Hapus 'sticky top-0', ganti jadi 'relative' biar dia ikut naik ke atas saat discroll */}
      <div className="relative z-0 h-screen overflow-hidden">
        <Hero />
      </div>

      <div className="relative z-10 bg-gray-50 shadow-[0_-24px_60px_-24px_rgba(16,29,53,0.35)]">
        <ErpOverview />
        <ServicesBento />
        <WhyKrevia />
        <FaqSection />
        <HomeCtaSection />
      </div>
      
      {/* <FloatingWhatsApp /> */}
    </main>
  );
}