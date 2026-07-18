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
    default: "David West III — Fractional CTO & AI Systems Builder",
    template: "%s | David West III",
  },
  description:
    "Fractional CTO and AI consultant in Atlanta. I build AI operating systems, deploy working agents for businesses, and train the teams that run them. Founder of Studio West Creatives.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "David West III — Fractional CTO & AI Systems Builder",
    description:
      "AI operating systems, working agents, and hands-on AI training for businesses. Atlanta.",
    url: "https://westiii.com",
    siteName: "David West III",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "David West III — Fractional CTO & AI Systems Builder",
    description:
      "AI operating systems, working agents, and hands-on AI training for businesses. Atlanta.",
    creator: "@___DW3",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David A. West III",
  alternateName: "David West III",
  url: "https://westiii.com",
  jobTitle: "Fractional CTO & AI Consultant",
  worksFor: {
    "@type": "Organization",
    name: "Studio West Creatives",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.youtube.com/@WestTech3",
    "https://www.instagram.com/__dw3/",
    "https://x.com/___DW3",
    "https://www.tiktok.com/@___dw3",
    "https://www.linkedin.com/in/david-west-iii-289ba7148",
    "https://github.com/MrWest3",
  ],
  knowsAbout: [
    "Fractional CTO services",
    "AI implementation",
    "AI agents",
    "AI operating systems",
    "Workflow automation",
    "AI training and workshops",
    "AI creative production",
    "Solutions engineering",
    "Cybersecurity",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Nav />
        {children}
        <Footer />
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_654d2a8260d3499dbd56e94a2f9ef659"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
