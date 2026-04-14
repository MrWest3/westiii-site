import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "David West III — Creative Technologist & AI Systems Builder",
  description:
    "Creative technologist, AI systems builder, and Solutions Engineer based in Atlanta. Founder of Studio West Creatives.",
  openGraph: {
    title: "David West III",
    description: "Creative Technologist. AI Systems Builder. Atlanta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full">
        {children}
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_654d2a8260d3499dbd56e94a2f9ef659"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
