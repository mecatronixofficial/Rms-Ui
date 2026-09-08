import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { siteUrl } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "RMS Textile Mills | Circular Knitting Division, Tiruppur",
    template: "%s | RMS Textile Mills",
  },
  description: "RMS Textile Mills, Tiruppur â€” an imported circular knitting division with Pailung machines for Single Jersey, Air Tex, Honey Comb, Two Thread Fleece and Lycra fabrics.",
  keywords: ["Knitting Mills Tiruppur", "Circular Knitting", "Pailung Knitting Machines", "Single Jersey Fabric", "Textile Mills Tiruppur", "Lycra Fabric"],
  openGraph: {
    title: "RMS Textile Mills",
    description: "True to Knits, True to Quality.",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/knitting-floor-hero.webp", width: 1792, height: 874, alt: "Circular knitting production" }],
  },
  twitter: { card: "summary_large_image", title: "RMS Textile Mills", description: "True to Knits, True to Quality.", images: ["/knitting-floor-hero.webp"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#192a0f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RMS Textile Mills",
    description: "Imported circular knitting division in Tiruppur, Tamil Nadu.",
    telephone: "+91 98434 19599",
    taxID: "33DBIPR9169F1Z6",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 10/524/E, Malliyanan Thottam, Kunnangalpalayam, Karaipudur Village",
      addressLocality: "Tiruppur",
      postalCode: "641605",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${manrope.variable} ${space.variable} font-sans`}
      >
        <Navbar />
        <main>{children}</main>
        <FloatingActions />
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
