import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/hooks/useToast";
import ToastViewport from "@/components/ui/ToastViewport";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import BackToTop from "@/components/ui/BackToTop";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import LoadingScreen from "@/components/ui/LoadingScreen";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://novacabs.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nova Cabs — Premium Taxi Service | Airport, Local & Outstation",
    template: "%s | Nova Cabs",
  },
  description:
    "Reliable taxi service for airport transfers, local rides, outstation trips, and corporate travel. Transparent per-km pricing, professional drivers, instant WhatsApp booking — no app or login required.",
  keywords: [
    "cab booking",
    "taxi service",
    "airport transfer",
    "outstation cab",
    "corporate taxi",
    "local cab rental",
    "sharing ride taxi",
  ],
  authors: [{ name: "Nova Cabs" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nova Cabs — Travel Comfortably, Arrive Safely",
    description:
      "Reliable taxi service for airport transfers, local rides, outstation trips & corporate travel. Book instantly on WhatsApp.",
    siteName: "Nova Cabs",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Nova Cabs premium taxi service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Cabs — Travel Comfortably, Arrive Safely",
    description:
      "Reliable taxi service for airport transfers, local rides, outstation trips & corporate travel.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Amar Tours & Travels",
  description:
    "Premium taxi service offering airport transfers, local rides, outstation trips, corporate travel, wedding cars, and sharing rides.",
  url: siteUrl,
  areaServed: "IN",
  priceRange: "₹₹",
  availableLanguage: ["English", "Hindi"],
  openingHours: "Mo-Su 00:00-23:59",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-base text-ink font-body antialiased">
        <LoadingScreen />
        <ToastProvider>
          {children}
          <ToastViewport />
        </ToastProvider>
        <FloatingWhatsApp />
        <BackToTop />
        <MobileBottomNav />
      </body>
    </html>
  );
}
