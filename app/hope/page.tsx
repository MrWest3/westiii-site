import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";
import HopeSubscribe from "./HopeSubscribe";
import { fetchLatest } from "./latest";
import {
  AI_2040_URL,
  LAST_UPDATED,
  books,
  channels,
  diamandis,
  featuredBook,
  ideas,
  startHere,
} from "./content";

export const metadata: Metadata = {
  title: { absolute: "The Blueprint to a Desirable Future | David West III" },
  description:
    "The podcasts, books, people, and ideas that let me picture a good future with AI. Updated as I find them.",
  alternates: { canonical: "/hope" },
  openGraph: {
    title: "The Blueprint to a Desirable Future",
    description:
      "The podcasts, books, people, and ideas that let me picture a good future with AI.",
    url: "https://westiii.com/hope",
  },
};

const eyebrow =
  "mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--crimson)]";
const h2 =
  "max-w-3xl text-4xl font-black leading-tight tracking-tight text-[var(--ink)] md:text-5xl";
const card = "rounded-2xl border border-[var(--border)] bg-white";
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

export default async function HopePage() {
  const latest = await Promise.all(channels.map((c) => fetchLatest(c.channelId)));

  return (
    <main className="overflow-hidden bg-white">
      {/* hero */}
      <section className="border-b border-[var(--border)] px-6 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              westiii.com/hope
            </p>
          </AnimateIn>
          <AnimateIn delay={0.08}>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl">
              The blueprint to a{" "}
              <span className="text-[var(--crimson)]">desirable future.</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.14}>
            <p className="mt-5 max-w-2xl text-lg font-medium leading-snug text-[var(--ink-secondary)] sm:text-xl md:mt-6 md:text-2xl">
              The future you can picture is the only one you can build. This page is the
              feed that lets me picture a good one. Podcasts, books, people, and ideas,
              updated as I find them.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="#start"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-[var(--crimson)] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)]"
              >
                Start here <span aria-hidden="true">→</span>
              </a>
              <a
                href="#entries"
                className="inline-flex min-h-12 items-center justify-center rounded border border-[var(--border)] px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--gold)]"
              >
                Get new entries by email
              </a>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
              Last entry added {LAST_UPDATED}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* thesis */}
      <section className="bg-[var(--surface)] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-12">
          <AnimateIn>
            <div className="border-l-2 border-[var(--crimson)] pl-5 sm:pl-7">
              <p className="text-xl font-semibold leading-relaxed text-[var(--ink)] md:text-2xl">
                If everything you take in is doom, you will only be able to imagine doom.
                The person who watches nothing but collapse content and dystopian movies
                has a real read on the risks and half a picture of the future, so that is
                the half they build toward.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-[var(--ink-secondary)] md:text-lg">
              <p>
                I made this page because I take AI seriously, seriously enough to say on
                camera that anything over a 1% chance of catastrophe is grounds for
                caution. And I still expect the next ten years to be the best decade in
                human history for the people who are paying attention.
              </p>
              <p>
                Both of those can be true. What decides which one you live in is your
                mindset, and your mindset is built from what you feed it. So here is what
                I feed mine. Take what you want. Godspeed.
              </p>
              <p className="text-sm font-bold text-[var(--ink)]">David West III</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* start here */}
      <section id="start" className="scroll-mt-20 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>Start here</p>
            <h2 className={`${h2} mb-10`}>Four things to watch before you read anything.</h2>
          </AnimateIn>
          <div className="grid gap-5 md:grid-cols-2">
            {startHere.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.06}>
                <article className={`${card} flex h-full flex-col gap-4 p-5`}>
                  {item.layout === "portrait" ? (
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:aspect-auto sm:h-[268px] sm:w-[152px] sm:shrink-0">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(min-width: 640px) 152px, 90vw"
                          priority
                          className="object-cover object-[50%_45%]"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-3">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--gold)]">
                          {item.kind}
                        </p>
                        <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                          {item.title}
                        </h3>
                        <p className="leading-relaxed text-[var(--ink-secondary)]">{item.body}</p>
                        <External href={item.href} className={outLink}>
                          {item.linkLabel} <span aria-hidden="true">→</span>
                        </External>
                      </div>
                    </div>
                  ) : (
                    <>
                      {item.layout === "pair" && item.secondImage ? (
                        <div className="grid grid-cols-2 gap-2">
                          {[item.image, item.secondImage].map((src) => (
                            <div
                              key={src}
                              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)]"
                            >
                              <Image
                                src={src}
                                alt={item.imageAlt}
                                fill
                                sizes="(min-width: 768px) 280px, 45vw"
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
                      <h3 className="text-xl font-black leading-tight text-[var(--ink)] md:text-2xl">
                        {item.title}
                      </h3>
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
                    </>
                  )}
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* books */}
      <section id="books" className="scroll-mt-20 bg-[var(--surface)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>Books</p>
            <h2 className={`${h2} mb-10`}>Ten books. Start with the newest one I read.</h2>
          </AnimateIn>

          <AnimateIn>
            <article className="mb-5 grid gap-8 rounded-2xl border border-[var(--gold)] bg-white p-6 md:grid-cols-[260px_minmax(0,1fr)] md:items-center md:p-8">
              <div className="flex justify-center rounded-xl bg-[var(--surface)] p-6">
                <div className="relative h-72 w-48">
                  <Image
                    src={featuredBook.cover}
                    alt={`${featuredBook.title} cover`}
                    fill
                    sizes="192px"
                    className="rounded object-contain drop-shadow-[0_16px_28px_rgba(10,10,10,0.22)]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--gold)]">
                  Start with this one
                </p>
                <h3 className="text-3xl font-black leading-tight tracking-tight text-[var(--ink)]">
                  {featuredBook.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  {featuredBook.authors}, {featuredBook.year}
                </p>
                <p className="leading-relaxed text-[var(--ink-secondary)] md:text-lg">
                  {featuredBook.body}
                </p>
                <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">
                  {featuredBook.flag}
                </p>
                <div className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
                  <External href={featuredBook.readHref} className={outLink}>
                    Read it free <span aria-hidden="true">→</span>
                  </External>
                  <Link href={featuredBook.countdownHref} className={outLink}>
                    The 1,000-day countdown I built <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          </AnimateIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <AnimateIn key={book.title} delay={(index % 3) * 0.06}>
                <article className={`${card} flex h-full flex-col gap-4 p-5`}>
                  <div className="flex justify-center rounded-xl bg-[var(--surface)] p-5">
                    <div className="relative h-60 w-40">
                      <Image
                        src={book.cover}
                        alt={`${book.title} cover`}
                        fill
                        sizes="160px"
                        className="rounded object-contain drop-shadow-[0_12px_24px_rgba(10,10,10,0.18)]"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black leading-tight text-[var(--ink)]">{book.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                      {book.authors}, {book.year}
                    </p>
                  </div>
                  <p className="flex-1 leading-relaxed text-[var(--ink-secondary)]">{book.body}</p>
                  <External href={book.href} className={outLink}>
                    Get the book <span aria-hidden="true">→</span>
                  </External>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* people */}
      <section id="people" className="scroll-mt-20 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>People I watch</p>
            <h2 className={`${h2} mb-10`}>Seven channels that keep my feed pointed forward.</h2>
          </AnimateIn>
          <div className="grid gap-4 md:grid-cols-2">
            {channels.map((channel, index) => {
              const live = latest[index];
              return (
                <AnimateIn key={channel.name} delay={(index % 2) * 0.06}>
                  <article className={`${card} flex h-full gap-4 p-5`}>
                    <Image
                      src={channel.avatar}
                      alt=""
                      width={64}
                      height={64}
                      className="h-16 w-16 shrink-0 rounded-full"
                    />
                    <div className="flex flex-col gap-1.5">
                      <External
                        href={channel.href}
                        className="text-lg font-black text-[var(--ink)] transition-colors hover:text-[var(--crimson)]"
                      >
                        {channel.name}
                      </External>
                      <p className="leading-relaxed text-[var(--ink-secondary)]">{channel.why}</p>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--gold)]">
                        Latest:{" "}
                        {live ? (
                          <External href={live.href} className="hover:underline">
                            {live.title}
                          </External>
                        ) : (
                          channel.fallbackLatest
                        )}
                      </p>
                    </div>
                  </article>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ideas */}
      <section className="bg-[var(--ink)] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]">
              Ideas I keep coming back to
            </p>
            <h2 className="mb-10 max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Six lines that do most of the work.
            </h2>
          </AnimateIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ideas.map((idea, index) => (
              <AnimateIn key={idea.line} delay={(index % 3) * 0.06}>
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-white/15 p-6">
                  <p className="text-2xl font-black text-[var(--gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-xl font-black leading-tight md:text-2xl">{idea.line}</p>
                  <p className="text-sm leading-relaxed text-white/60">{idea.note}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* reads */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
            <p className={eyebrow}>Reads</p>
            <h2 className={`${h2} mb-10`}>Blogs and pages worth a bookmark.</h2>
          </AnimateIn>
          <AnimateIn delay={0.06}>
            <article className={`${card} grid gap-8 p-6 md:grid-cols-2 md:p-8`}>
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--gold)]">
                  {diamandis.label}
                </p>
                <h3 className="text-2xl font-black leading-tight text-[var(--ink)]">
                  <External href={diamandis.href} className="hover:text-[var(--crimson)]">
                    {diamandis.title}
                  </External>
                </h3>
                <p className="leading-relaxed text-[var(--ink-secondary)]">{diamandis.body}</p>
              </div>
              <ul className="flex flex-col divide-y divide-[var(--border)]">
                {diamandis.posts.map((post) => (
                  <li key={post.href} className="py-3 first:pt-0 last:pb-0">
                    <External
                      href={post.href}
                      className="font-bold text-[var(--ink)] transition-colors hover:text-[var(--crimson)]"
                    >
                      {post.title}
                    </External>
                    <p className="text-sm text-[var(--ink-secondary)]">{post.note}</p>
                  </li>
                ))}
              </ul>
            </article>
          </AnimateIn>
        </div>
      </section>

      {/* email */}
      <section id="entries" className="scroll-mt-20 bg-[var(--surface)] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-12">
          <AnimateIn>
            <p className={eyebrow}>New entries</p>
            <h2 className={h2}>When I add something, you hear about it.</h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-secondary)]">
              One email when the page changes. No daily sends, no selling.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <HopeSubscribe />
          </AnimateIn>
        </div>
      </section>
    </main>
  );
}
