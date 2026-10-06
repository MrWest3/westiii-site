import type { MetadataRoute } from "next";
import { visiblePosts } from "./hope/journal/lib";

const BASE = "https://westiii.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/book`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/learn`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/coaching`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/real-estate`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/hope`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/ai-employees`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/atlanta`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/creative`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/builds`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/practice-os`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/speaking`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/workshops`, changeFrequency: "monthly", priority: 0.7 },
    ...visiblePosts()
      .filter((post) => post.status === "published")
      .map((post) => ({
        url: `${BASE}/hope/journal/${post.slug}`,
        changeFrequency: "yearly" as const,
        priority: 0.6,
      })),
  ];
}
