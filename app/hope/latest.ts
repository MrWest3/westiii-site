/**
 * Latest upload per channel, from YouTube's public Atom feed. No API key.
 * Cached by Next for six hours; a failed pull falls back to the static line
 * in content.ts so the page never shows an empty slot.
 */

export type Latest = { title: string; href: string } | null;

const FEED = "https://www.youtube.com/feeds/videos.xml?channel_id=";

function decode(text: string) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

export async function fetchLatest(channelId: string): Promise<Latest> {
  try {
    const res = await fetch(`${FEED}${channelId}`, {
      next: { revalidate: 21600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const xml = await res.text();
    const entry = xml.match(/<entry>([\s\S]*?)<\/entry>/)?.[1];
    if (!entry) return null;
    const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1];
    const href = entry.match(/<link rel="alternate" href="([^"]+)"/)?.[1];
    if (!title || !href) return null;
    return { title: decode(title.trim()), href };
  } catch {
    return null;
  }
}
