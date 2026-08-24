import Link from "next/link";
import { notFound } from "next/navigation";
import { deliverables, getDeliverable, type Block } from "../../lib/deliverables";

export function generateStaticParams() {
  return deliverables.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDeliverable(slug);
  if (!d) return {};
  return {
    // the root layout appends "| David West III" via its title template
    title: d.title,
    description: d.description,
  };
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === "prose") {
          return (
            <div key={i} className="mt-12 space-y-5">
              {block.body.map((p, j) => (
                <p
                  key={j}
                  className="text-lg leading-relaxed text-[var(--ink)] max-w-[44ch]"
                >
                  {p}
                </p>
              ))}
            </div>
          );
        }

        if (block.kind === "callout") {
          return (
            <div
              key={i}
              className="mt-12 border border-[var(--border)] border-l-[3px] border-l-[var(--crimson)] bg-[var(--surface)] p-6 rounded-r-lg"
            >
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--crimson)] mb-3">
                {block.label}
              </p>
              <p className="text-lg leading-relaxed text-[var(--ink)]">
                {block.body}
              </p>
            </div>
          );
        }

        if (block.kind === "cta") {
          const external = block.href.startsWith("http");
          const inner = (
            <>
              <span className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--muted)]">
                {block.eyebrow}
              </span>
              <span className="block text-2xl font-black text-[var(--crimson)] mt-1">
                {block.label}
              </span>
              <span className="block text-sm text-[var(--ink-secondary)] mt-2">
                {block.sub}
              </span>
            </>
          );
          const cls =
            "mt-12 inline-block border border-[var(--border)] border-l-4 border-l-[var(--crimson)] bg-white p-6 rounded-r-lg hover:border-[var(--crimson)] transition-colors duration-200";
          return external ? (
            <a
              key={i}
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cls}
            >
              {inner}
            </a>
          ) : (
            <Link key={i} href={block.href} className={cls}>
              {inner}
            </Link>
          );
        }

        // list
        return (
          <div key={i} className="mt-14">
            {block.intro ? (
              <p className="text-lg leading-relaxed text-[var(--ink-secondary)] mb-8 max-w-[46ch]">
                {block.intro}
              </p>
            ) : null}
            <ol className="border-t border-[var(--border)]">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className={`border-b border-[var(--border)] py-7 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 ${
                    item.flag
                      ? "bg-[var(--surface)] border-l-[3px] border-l-[var(--crimson)] pl-5 pr-5"
                      : ""
                  }`}
                >
                  <span
                    className={`text-3xl font-black leading-none tabular-nums ${
                      item.flag ? "text-[var(--crimson)]" : "text-[var(--gold)]"
                    }`}
                  >
                    {block.numbered
                      ? String(j + 1).padStart(2, "0")
                      : "—"}
                  </span>
                  <div>
                    {item.tag ? (
                      <span className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-[var(--crimson)] border border-[var(--crimson)] rounded px-2 py-1 mb-2">
                        {item.tag}
                      </span>
                    ) : null}
                    <h2 className="text-xl font-bold text-[var(--ink)] leading-snug">
                      {item.head}
                    </h2>
                    {item.body.map((p, k) =>
                      p.startsWith("QUOTE:") ? (
                        <p
                          key={k}
                          className="mt-3 font-mono text-sm leading-relaxed text-[var(--crimson)] bg-[var(--surface)] border-l-[3px] border-l-[var(--gold)] p-4 rounded-r"
                        >
                          {p.slice(6)}
                        </p>
                      ) : (
                        <p
                          key={k}
                          className="mt-2 text-base leading-relaxed text-[var(--ink-secondary)]"
                        >
                          {p}
                        </p>
                      )
                    )}
                    {item.meta ? (
                      <p className="mt-3 text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--muted)]">
                        {item.meta}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </>
  );
}

export default async function DeliverablePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDeliverable(slug);
  if (!d) notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[680px] mx-auto px-6 pb-24">
        <header className="pt-16 pb-8">
          <p className="text-xs font-bold tracking-[0.16em] uppercase text-[var(--gold)] mb-6">
            {d.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] leading-[0.98] text-balance">
            {d.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--ink-secondary)] max-w-[46ch]">
            {d.standfirst}
          </p>
          <div className="mt-8 h-px bg-[var(--border)]" />
        </header>

        <Blocks blocks={d.blocks} />

        <footer className="mt-16 pt-6 border-t border-[var(--border)] text-sm leading-relaxed text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--crimson)]">
            David West III
          </Link>
          {" · Make AI Easy is a weekly breakdown."}
          {d.footnote ? ` ${d.footnote}` : ""}
        </footer>
      </div>
    </main>
  );
}
