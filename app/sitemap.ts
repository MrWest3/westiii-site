import type { MetadataRoute } from "next";

const BASE = "https://westiii.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/book`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/builds`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/practice-os`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/speaking`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/weststone`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
