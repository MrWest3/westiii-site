import Image from "next/image";
import { AI_2040_URL, type WatchItem } from "./content";

const outLink =
  "inline-flex items-center gap-1 text-sm font-bold text-[var(--crimson)] transition-colors hover:text-[var(--crimson-light)]";

function External({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function WatchCard({ item }: { item: WatchItem }) {
  if (item.layout === "portrait") {
    return (
      <article className="flex h-full flex-col gap-5 rounded-2xl border border-[var(--gold)] bg-white p-5 sm:flex-row">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:aspect-auto sm:h-[268px] sm:w-[152px] sm:shrink-0">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 640px) 152px, 90vw"
            className="object-cover object-[50%_45%]"
          />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--gold)]">
            {item.kind}
          </p>
          <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">{item.title}</h3>
          <p className="leading-relaxed text-[var(--ink-secondary)]">{item.body}</p>
          <External href={item.href} className={outLink}>
            {item.linkLabel} <span aria-hidden="true">→</span>
          </External>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-5">
      {item.layout === "pair" && item.secondImage ? (
        <div className="grid grid-cols-2 gap-2">
          {[item.image, item.secondImage].map((src) => (
            <div
              key={src}
              className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[var(--border)]"
            >
              <Image
                src={src}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 768px) 560px, 45vw"
                className="object-cover object-left-top"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 768px) 560px, 90vw"
            className="object-cover"
          />
        </div>
      )}
      <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--gold)]">
        {item.kind}
      </p>
      <h3 className="text-xl font-black leading-tight text-[var(--ink)] md:text-2xl">{item.title}</h3>
      <p className="leading-relaxed text-[var(--ink-secondary)]">{item.body}</p>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <External href={item.href} className={outLink}>
          {item.linkLabel} <span aria-hidden="true">→</span>
        </External>
        {item.layout === "pair" && (
          <External href={AI_2040_URL} className={outLink}>
            ai-2040.com <span aria-hidden="true">→</span>
          </External>
        )}
      </div>
    </article>
  );
}
