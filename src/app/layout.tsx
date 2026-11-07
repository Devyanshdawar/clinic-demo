import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { clinicData } from "@/data/clinic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyActionButtons from "@/components/layout/StickyActionButtons";
import CookieConsent from "@/components/layout/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://veritashealthclinic.com"),
  title: {
    default: `${clinicData.name} | Chiropractic, Physiotherapy, Orthopedics & Aesthetics`,
    template: `%s | ${clinicData.shortName}`,
  },
  description: clinicData.description,
  keywords: [
    "Chiropractor near me",
    "Spinal decompression Bengaluru",
    "Sports physiotherapy clinic",
    "Orthopedic specialist",
    "Knee joint preservation",
    "Medical aesthetics clinic",
    "Non-surgical anti-aging",
    "RF microneedling",
    "Sciatica relief",
  ],
  authors: [{ name: clinicData.name }],
  creator: clinicData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veritashealthclinic.com",
    siteName: clinicData.name,
    title: `${clinicData.name} | Advanced Musculoskeletal & Aesthetic Medicine`,
    description: clinicData.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${clinicData.name} Facility & Diagnostics`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: clinicData.name,
    description: clinicData.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinicData.name,
    description: clinicData.description,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    telephone: clinicData.phone,
    email: clinicData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicData.address.street,
      addressLocality: clinicData.address.city,
      addressRegion: clinicData.address.state,
      postalCode: clinicData.address.zip,
      addressCountry: clinicData.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.972776,
      longitude: 77.638549,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    medicalSpecialty: [
      "Chiropractic",
      "Physiotherapy",
      "Orthopedic",
      "Dermatology",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Chiropractic Spinal Decompression & Alignment",
      },
      {
        "@type": "MedicalProcedure",
        name: "Evidence-Based Physiotherapy & Sports Rehabilitation",
      },
      {
        "@type": "MedicalProcedure",
        name: "Orthopedic Diagnostics & Joint-Preservation Injections",
      },
      {
        "@type": "MedicalProcedure",
        name: "Clinical Aesthetics & Non-Invasive Skin Rejuvenation",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-stone-900 selection:bg-brand-100 selection:text-brand-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-brand-900 text-gold-300 px-4 py-2 rounded-xl text-xs font-bold shadow-elevated border border-gold-400"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <StickyActionButtons />
        <CookieConsent />
      </body>
    </html>
  );
}

