import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://westiii.com"),
  title: {
    default: "David West | AI Consultant in Atlanta | AI Assessments for Small Business",
    template: "%s | David West III",
  },
  description:
    "I'm an AI consultant in Atlanta. My $999 assessment finds 5+ hours you can reclaim every week, in 48 hours, or you don't pay.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "David West | AI Consultant in Atlanta | AI Assessments for Small Business",
    description:
      "I'm an AI consultant in Atlanta. My $999 assessment finds 5+ hours you can reclaim every week, in 48 hours, or you don't pay.",
    url: "https://westiii.com",
    siteName: "David West III",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "David West | AI Consultant in Atlanta | AI Assessments for Small Business",
    description:
      "I'm an AI consultant in Atlanta. My $999 assessment finds 5+ hours you can reclaim every week, in 48 hours, or you don't pay.",
    creator: "@___DW3",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://westiii.com/#business",
  name: "Studio West Creatives",
  alternateName: "David West",
  description: "AI consultant serving small business owners in Atlanta.",
  url: "https://westiii.com",
  email: "StudioWest3@proton.me",
  founder: {
    "@type": "Person",
    name: "David A. West III",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  areaServed: [
    "Atlanta",
    "Sandy Springs",
    "Buckhead",
    "Midtown Atlanta",
    "Decatur",
    "Marietta",
    "Alpharetta",
    "Dunwoody",
    "Roswell",
    "Smyrna",
  ].map((name) => ({ "@type": "City", name })),
  sameAs: [
    "https://www.youtube.com/@WestTech3",
    "https://www.instagram.com/__dw3/",
    "https://x.com/___DW3",
    "https://www.tiktok.com/@___dw3",
    "https://www.linkedin.com/in/david-west-iii-289ba7148",
    "https://github.com/MrWest3",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        {children}
        <Footer />
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_654d2a8260d3499dbd56e94a2f9ef659"
          strategy="lazyOnload"
        />
        <Analytics />
      </body>
    </html>
  );
}
