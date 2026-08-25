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

const nextConfig: NextConfig = {
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
