"use client";

import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";

type GridItem = {
  id: string;
  thumb: string;
  video?: string;
  alt: string;
  client?: string;
  deliverable?: string;
};

const igReels: GridItem[] = Array.from({ length: 10 }, (_, i) => ({
  id: `ig-${i + 1}`,
  thumb: `/creative/creative-${String(i + 1).padStart(2, "0")}.jpg`,
  video: `/creative/creative-${String(i + 1).padStart(2, "0")}.mp4`,
  alt: `AI creative reel ${i + 1}`,
}));

const clientWork: GridItem[] = [
  { id: "c-01", thumb: "/creative/client-01.jpg", video: "/creative/client-01.mp4", alt: "ADIO Commercial", client: "DataVault AI", deliverable: "Brand Commercial" },
  { id: "c-02", thumb: "/creative/client-02.jpg", video: "/creative/client-02.mp4", alt: "Baby Gender Reveal", client: "Personal Client", deliverable: "Pixar-Style Gender Reveal" },
  { id: "c-03", thumb: "/creative/client-03.jpg", video: "/creative/client-03.mp4", alt: "STYS Studio Video", client: "STYS", deliverable: "Studio Campaign Video" },
  { id: "c-04", thumb: "/creative/client-04.jpg", video: "/creative/client-04.mp4", alt: "STYS Yellow Collection", client: "STYS", deliverable: "Collection Launch Video" },
  { id: "c-05", thumb: "/creative/client-05.jpg", video: "/creative/client-05.mp4", alt: "The Lab Ad", client: "The Lab USA", deliverable: "Brand Commercial" },
  { id: "c-06", thumb: "/creative/client-06.jpg", video: "/creative/client-06.mp4", alt: "VerifyU Commercial", client: "VerifyU", deliverable: "App Ad" },
  { id: "c-07", thumb: "/creative/client-07.png", alt: "STYS Pro Model", client: "STYS", deliverable: "AI Virtual Photo Shoot" },
  { id: "c-08", thumb: "/creative/client-08.png", alt: "STYS Studio", client: "STYS", deliverable: "AI Virtual Photo Shoot" },
  { id: "c-09", thumb: "/creative/client-09.png", alt: "RevFit Ad", client: "Revenge Fitness", deliverable: "Logo Redesign" },
  { id: "c-10", thumb: "/creative/client-10.png", alt: "RevFit Ad", client: "Revenge Fitness", deliverable: "Brand Ad" },
  { id: "c-11", thumb: "/creative/client-11.png", alt: "RevFit Clothing", client: "Revenge Fitness", deliverable: "Clothing Mockup" },
  { id: "c-12", thumb: "/creative/client-12.png", alt: "RevFit Clothing", client: "Revenge Fitness", deliverable: "Clothing Mockup" },
];

function GridItem({ item, onClick }: { item: GridItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group block relative w-full aspect-square overflow-hidden rounded-lg bg-[var(--border)] cursor-pointer"
      aria-label={`View ${item.alt}`}
    >
      <img
        src={item.thumb}
        alt={item.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-[var(--crimson)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          {item.video ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          )}
        </div>
        {(item.client || item.deliverable) && (
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent md:bg-none md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            {item.client && (
              <p className="text-white text-xs font-bold leading-tight truncate">{item.client}</p>
            )}
            {item.deliverable && (
              <p className="text-white/70 text-xs leading-tight truncate">{item.deliverable}</p>
            )}
          </div>
        )}
      </div>
    </button>
  );
}

export default function CreativeGrid() {
  const [active, setActive] = useState<GridItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      <section id="creative" className="py-24 md:py-32 px-6 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <AnimateIn>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
                  Creative Work
                </p>
              </AnimateIn>
              <AnimateIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] leading-tight">
                  Made With AI
                </h2>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.15}>
              <a
                href="https://www.instagram.com/__dw3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--crimson)] hover:underline inline-flex items-center gap-1.5 pb-1"
              >
                @__dw3
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </AnimateIn>
          </div>

          {/* IG Reels */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-16">
            {igReels.map((item, i) => (
              <AnimateIn key={item.id} delay={0.03 * i}>
                <GridItem item={item} onClick={() => setActive(item)} />
              </AnimateIn>
            ))}
          </div>

          {/* Client Work */}
          <AnimateIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-6">
              Client Work
            </p>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {clientWork.map((item, i) => (
              <AnimateIn key={item.id} delay={0.03 * i}>
                <GridItem item={item} onClick={() => setActive(item)} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div
            className="relative w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {active.video ? (
              <video
                key={active.video}
                src={active.video}
                autoPlay
                controls
                playsInline
                className="w-full rounded-xl"
                style={{ maxHeight: "85vh" }}
              />
            ) : (
              <img
                src={active.thumb}
                alt={active.alt}
                className="w-full rounded-xl object-contain"
                style={{ maxHeight: "85vh" }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
