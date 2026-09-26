import { posts, type Post } from "./posts";

/**
 * Drafts render in `next dev` only. A post goes live when its status in
 * posts.ts flips to "published", after David approves the copy.
 */
const showDrafts = process.env.NODE_ENV === "development";

export function visiblePosts(): Post[] {
  return posts
    .filter((post) => post.status === "published" || showDrafts)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function findPost(slug: string): Post | undefined {
  return visiblePosts().find((post) => post.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
