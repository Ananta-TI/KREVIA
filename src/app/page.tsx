import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ErpOverview } from "@/components/ErpOverview";
import { ServicesBento } from "@/components/ServicesBento";
import { WhyKrevia } from "@/components/WhyKrevia";
import { FaqSection } from "@/components/FaqSection";
import { HomeCtaSection } from "@/components/HomeCtaSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <ErpOverview />
      <ServicesBento />
      <WhyKrevia />
      <FaqSection />
      <HomeCtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
