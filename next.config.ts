import type { NextConfig } from "next";

// Vercel already sets HSTS on the custom domain; the rest is on us.
const securityHeaders = [
  // The site never needs to be framed. Blocks clickjacking.
  { key: "X-Frame-Options", value: "DENY" },
  // Browsers must trust the declared Content-Type, never sniff.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin cross-site, full URL same-origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Nothing on this site uses these sensors.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

// December 2026: the site is nine public pages. Everything below points an
// old address at the page that replaced it, so links in bios, DMs and QR codes
// keep working. Temporary (307) while the cut is reviewed; make them permanent
// once it has held for a month.
const retiredRoutes = [
  { source: "/coaching", destination: "/learn#coaching" },
  { source: "/workshops", destination: "/learn" },
  { source: "/speaking", destination: "/learn#talks" },
  { source: "/ai-employees", destination: "/services" },
  { source: "/practice-os", destination: "/services" },
  { source: "/atlanta", destination: "/" },
  { source: "/assessment", destination: "/book" },
  { source: "/free", destination: "/#connect" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return retiredRoutes.map((route) => ({ ...route, permanent: false }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
