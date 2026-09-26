import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "../../../components/AnimateIn";
import { FREE_CALL_URL } from "../../../lib/links";
import type { Block } from "../posts";
import { findPost, formatDate, visiblePosts } from "../lib";

export const dynamicParams = false;

export function generateStaticParams() {
  return visiblePosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.title} | David West III` },
    description: post.dek,
    alternates: { canonical: `/hope/journal/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.dek,
      url: `https://westiii.com/hope/journal/${post.slug}`,
      images: [{ url: post.image }],
    },
    robots: post.status === "draft" ? { index: false, follow: false } : undefined,
  };
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={index}
          className="mt-12 text-2xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-8 border-l-2 border-[var(--crimson)] pl-5 text-xl font-semibold leading-relaxed text-[var(--ink)] md:text-2xl"
        >
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={index} className="my-6 flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={index} className="mt-5">
          {block.text}
        </p>
      );
  }
}

export default async function JournalPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const others = visiblePosts().filter((p) => p.slug !== post.slug);

  return (
    <main className="bg-white">
      <article>
        <header className="bg-gradient-to-b from-[#1b0d08] via-[#3b1a0e] to-[#5a2c14] px-6 pb-0 pt-12 text-white md:pt-16">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <Link
                href="/hope#journal"
                className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)] hover:text-white"
              >
                Hope journal
              </Link>
              <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{post.dek}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-white/50">
                David West III · {formatDate(post.date)} · {post.readMinutes} min read
                {post.status === "draft" && (
                  <span className="ml-2 rounded bg-[var(--gold)] px-1.5 py-0.5 text-[var(--ink)]">
                    Draft, not public
                  </span>
                )}
              </p>
            </AnimateIn>
            <div className="relative mt-10 aspect-[16/8] translate-y-10 overflow-hidden rounded-2xl shadow-2xl md:translate-y-16">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 768px) 768px, 92vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="px-6 pb-16 pt-20 md:pb-24 md:pt-28">
          <div className="mx-auto max-w-[65ch] text-lg leading-relaxed text-[var(--ink-secondary)]">
            {post.blocks.map(renderBlock)}
            <p className="mt-10 text-base font-bold text-[var(--ink)]">David West III</p>
          </div>
        </div>
      </article>

      <section className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-14 md:py-16">
        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Keep going
            </p>
            {others.length > 0 ? (
              <Link
                href={`/hope/journal/${others[0].slug}`}
                className="text-xl font-black leading-snug text-[var(--ink)] hover:text-[var(--crimson)]"
              >
                {others[0].title} <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <Link
                href="/hope"
                className="text-xl font-black text-[var(--ink)] hover:text-[var(--crimson)]"
              >
                Back to Hope <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]">
              Want help with AI?
            </p>
            <a
              href={FREE_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-black text-[var(--ink)] hover:text-[var(--crimson)]"
            >
              Book a free 15-minute call <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
