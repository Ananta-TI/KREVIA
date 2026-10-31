import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kreviadigitalid.my.id"),
  title: "Krevia Digital | Solusi ERP Modular & Sistem Bisnis Terintegrasi",
  description:
    "Krevia Digital menyediakan solusi ERP modular dan jasa pembuatan website company profile profesional untuk membantu bisnis mengintegrasikan operasional dan memperkuat kredibilitas di Pekanbaru dan Indonesia.",
  keywords: [
    "Krevia Digital",
    "ERP Pekanbaru",
    "Platform ERP Modular",
    "ERP Konstruksi Indonesia",
    "Software ERP Riau",
    "Kontrol Biaya Proyek",
    "Sistem Bisnis Terintegrasi",
    "Aplikasi Manajemen Bisnis",
    "Jasa Website Company Profile",
    "Website Profil Perusahaan Pekanbaru",
    "Jasa Pembuatan Website Profesional",
  ],
  authors: [{ name: "Krevia Digital" }],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Krevia Digital | Solusi ERP Modular & Sistem Bisnis Terintegrasi",
    description:
      "Krevia Digital menyediakan solusi ERP modular dan jasa pembuatan website company profile untuk membantu bisnis mengintegrasikan operasional dan memperkuat kredibilitas.",
    url: "https://kreviadigitalid.my.id",
    siteName: "Krevia Digital",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krevia Digital - Platform ERP Modular & Sistem Bisnis Terintegrasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krevia Digital | Solusi ERP Modular & Sistem Bisnis Terintegrasi",
    description:
      "Krevia Digital menyediakan solusi ERP modular dan jasa pembuatan website company profile untuk membantu bisnis mengintegrasikan operasional dan memperkuat kredibilitas.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kreviadigitalid.my.id/#organization",
      name: "Krevia Digital",
      url: "https://kreviadigitalid.my.id",
      logo: "https://kreviadigitalid.my.id/logo-mark.png",
      description: "Startup rekayasa perangkat lunak dan transformasi digital berbasis di Pekanbaru, Indonesia.",
      email: "support@kreviadigitalid.my.id",
      telephone: "+6285121282601",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pekanbaru",
        addressRegion: "Riau",
        addressCountry: "ID",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://kreviadigitalid.my.id/#erp",
      name: "Krevia Modular ERP",
      operatingSystem: "All (Web Based Cloud)",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "399000",
        priceCurrency: "IDR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                var checkReloadRedirect = function() {
                  var nav = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType('navigation')[0];
                  var isReload = (nav && nav.type === 'reload') || (window.performance && window.performance.navigation && window.performance.navigation.type === 1);
                  var path = window.location.pathname || '';
                  if (path.length > 1 && path.charAt(path.length - 1) === '/') {
                    path = path.slice(0, -1);
                  }
                  if (isReload && path !== '/' && path !== '') {
                    window.location.replace('/');
                    return true;
                  }
                  return false;
                };
                if (!checkReloadRedirect()) {
                  window.addEventListener('DOMContentLoaded', checkReloadRedirect);
                }
                window.scrollTo(0, 0);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${plusJakarta.className} bg-gray-50 text-gray-900 antialiased selection:bg-accent/30 selection:text-primary`}>
        <Preloader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
