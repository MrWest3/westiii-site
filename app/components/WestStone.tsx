"use client";

import { useState, useEffect } from "react";
import AnimateIn from "./AnimateIn";

type Asset = {
  id: string;
  thumb: string;
  video?: string;
  alt: string;
  city?: string;
};

const videos: Asset[] = [
  { id: "olandria-trailer", thumb: "/weststone/Olandria-Visa-Trailer-thumb.jpg", video: "/weststone/Olandria-Visa-Trailer.mp4", alt: "Olandria Visa Trailer" },
  { id: "atlanta-skyline", thumb: "/weststone/Atlanta-Skyline-Visa-Tap-Animation-thumb.jpg", video: "/weststone/Atlanta-Skyline-Visa-Tap-Animation.mp4", alt: "Atlanta Skyline Visa Tap", city: "Atlanta" },
  { id: "cafe-tap", thumb: "/weststone/Cafe-Visa-Tap-Goal-Celebration-thumb.jpg", video: "/weststone/Cafe-Visa-Tap-Goal-Celebration.mp4", alt: "Cafe Visa Tap Goal Celebration" },
  { id: "nyc-pigeon", thumb: "/weststone/NYC-Pigeon-Soccer-Animation-thumb.jpg", video: "/weststone/NYC-Pigeon-Soccer-Animation.mp4", alt: "NYC Pigeon Soccer Animation", city: "NYC" },
  { id: "nyc-turnstile", thumb: "/weststone/NYC-Turnstile-Visa-Tap-thumb.jpg", video: "/weststone/NYC-Turnstile-Visa-Tap.mp4", alt: "NYC Turnstile Visa Tap", city: "NYC" },
  { id: "streetwear-food", thumb: "/weststone/Streetwear-Guy-Visa-Tap-Food-Truck-thumb.jpg", video: "/weststone/Streetwear-Guy-Visa-Tap-Food-Truck.mp4", alt: "Streetwear Visa Tap Food Truck" },
  { id: "crazy-tapin", thumb: "/weststone/CrazyStreetTapin-April26-thumb.jpg", video: "/weststone/CrazyStreetTapin-April26.mp4", alt: "Crazy Street Tap-In" },
  { id: "global-tapin", thumb: "/weststone/GlobalTapinReel-April26-thumb.jpg", video: "/weststone/GlobalTapinReel-April26.mp4", alt: "Global Tap-In Reel" },
  { id: "run-scream-1", thumb: "/weststone/RunScreamTapin-April26-thumb.jpg", video: "/weststone/RunScreamTapin-April26.mp4", alt: "Run Scream Tap-In" },
  { id: "run-scream-2", thumb: "/weststone/RunScreamTapin2-April26-thumb.jpg", video: "/weststone/RunScreamTapin2-April26.mp4", alt: "Run Scream Tap-In 2" },
];

const illustrations: Asset[] = [
  { id: "olandria-yellow", thumb: "/weststone/Olandria-Yellow-Top-Portrait.png", alt: "Olandria — Yellow Top Portrait" },
  { id: "olandria-burgundy", thumb: "/weststone/Olandria-Burgundy-Dress.png", alt: "Olandria — Burgundy Dress" },
  { id: "olandria-paris", thumb: "/weststone/Olandria-Paris-Street-Walk.png", alt: "Olandria — Paris Street Walk" },
  { id: "olandria-luxury-1", thumb: "/weststone/Olandria-Luxury-Box-Visa-Card-v1.png", alt: "Olandria — Luxury Box v1" },
  { id: "olandria-luxury-2", thumb: "/weststone/Olandria-Luxury-Box-Visa-Card-v2.png", alt: "Olandria — Luxury Box v2" },
  { id: "olandria-luxury-3", thumb: "/weststone/Olandria-Luxury-Box-Visa-Card-v3.png", alt: "Olandria — Luxury Box v3" },
  { id: "olandria-dressing", thumb: "/weststone/Olandria-Dressing-Room-Visa-Card.png", alt: "Olandria — Dressing Room" },
  { id: "atl-beltline-soccer", thumb: "/weststone/Atlanta-Beltline-Street-Soccer.png", alt: "Atlanta Beltline Street Soccer", city: "Atlanta" },
  { id: "atl-beltline-street", thumb: "/weststone/Atlanta-Beltline-Streetwear-Portrait.png", alt: "Atlanta Beltline Streetwear", city: "Atlanta" },
  { id: "atl-skyline-v1", thumb: "/weststone/Atlanta-Skyline-Illustration-v1.png", alt: "Atlanta Skyline v1", city: "Atlanta" },
  { id: "atl-skyline-v2", thumb: "/weststone/Atlanta-Skyline-Illustration-v2.png", alt: "Atlanta Skyline v2", city: "Atlanta" },
  { id: "atl-stadium-family", thumb: "/weststone/Atlanta-Stadium-Family-Celebration.png", alt: "Atlanta Stadium Family", city: "Atlanta" },
  { id: "atl-tunnel-v1", thumb: "/weststone/Atlanta-Stadium-Tunnel-Streamer-v1.png", alt: "Atlanta Stadium Tunnel v1", city: "Atlanta" },
  { id: "atl-tunnel-v2", thumb: "/weststone/Atlanta-Stadium-Tunnel-Streamer-v2.png", alt: "Atlanta Stadium Tunnel v2", city: "Atlanta" },
  { id: "nyc-block", thumb: "/weststone/NYC-Block-Party-Street-View.png", alt: "NYC Block Party", city: "NYC" },
  { id: "nyc-rainy", thumb: "/weststone/NYC-Rainy-Night-Fan-Crowd.png", alt: "NYC Rainy Night", city: "NYC" },
  { id: "nyc-bar-v1", thumb: "/weststone/NYC-Sports-Bar-Friends-v1.png", alt: "NYC Sports Bar v1", city: "NYC" },
  { id: "nyc-bar-v2", thumb: "/weststone/NYC-Sports-Bar-Friends-v2.png", alt: "NYC Sports Bar v2", city: "NYC" },
  { id: "la-coliseum", thumb: "/weststone/LA-Coliseum-Luxury-Box-Visa-Tap.png", alt: "LA Coliseum Luxury Box", city: "LA" },
  { id: "la-food-v1", thumb: "/weststone/LA-Street-Food-Cart-v1.png", alt: "LA Street Food Cart v1", city: "LA" },
  { id: "la-food-v2", thumb: "/weststone/LA-Street-Food-Cart-v2.png", alt: "LA Street Food Cart v2", city: "LA" },
  { id: "london-pub", thumb: "/weststone/London-Pub-Watch-Party-3D.png", alt: "London Pub Watch Party", city: "London" },
  { id: "rio-beach", thumb: "/weststone/Rio-Beach-Golden-Hour.png", alt: "Rio Beach Golden Hour", city: "Rio" },
  { id: "tokyo-night", thumb: "/weststone/Tokyo-Night-Market-World-Cup.png", alt: "Tokyo Night Market", city: "Tokyo" },
  { id: "fan-crowd", thumb: "/weststone/Fan-Crowd-Surf-Downtown.png", alt: "Fan Crowd Surf Downtown" },
  { id: "four-cities", thumb: "/weststone/Four-Cities-Visa-Tap-Grid.png", alt: "Four Cities Visa Tap Grid" },
  { id: "global-fans", thumb: "/weststone/Global-Fans-Visa-Payment-Collage.png", alt: "Global Fans Visa Collage" },
  { id: "usa-map", thumb: "/weststone/USA-Host-Cities-Map-Visa-Tap.png", alt: "USA Host Cities Map" },
];

function Thumb({ asset, onClick }: { asset: Asset; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full aspect-square overflow-hidden rounded-lg bg-[var(--border)] cursor-pointer block"
      aria-label={`View ${asset.alt}`}
    >
      <img
        src={asset.thumb}
        alt={asset.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center gap-2">
        <div className="w-10 h-10 rounded-full bg-[var(--crimson)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          {asset.video ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          )}
        </div>
        {asset.city && (
          <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
            {asset.city}
          </span>
        )}
      </div>
    </button>
  );
}

export default function WestStone() {
  const [active, setActive] = useState<Asset | null>(null);

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
      <section id="weststone" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <AnimateIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
              The WestStone Project
            </p>
          </AnimateIn>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
            <AnimateIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] leading-tight">
                Visa &times; FIFA
                <br />
                <span className="text-[var(--crimson)]">World Cup 2026</span>
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <div className="flex gap-3 pb-1">
                {["28 Illustrations", "11 Animated Spots", "8 Host Cities"].map((stat) => (
                  <span key={stat} className="text-xs font-semibold px-3 py-1.5 bg-[var(--surface)] text-[var(--ink-secondary)] rounded-full border border-[var(--border)]">
                    {stat}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.2}>
            <p className="text-[var(--muted)] max-w-2xl mb-14 leading-relaxed">
              A full AI-generated creative campaign built to compete with agency-level work — produced solo.
              Original brand character, city-specific illustrations, and animated spots across 8 World Cup host cities.
            </p>
          </AnimateIn>

          {/* Animated Spots */}
          <AnimateIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-6">
              Animated Spots
            </p>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-16">
            {videos.map((v, i) => (
              <AnimateIn key={v.id} delay={0.03 * i}>
                <Thumb asset={v} onClick={() => setActive(v)} />
              </AnimateIn>
            ))}
          </div>

          {/* Illustrations */}
          <AnimateIn>
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-6">
              Illustrations — 8 Host Cities
            </p>
          </AnimateIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {illustrations.map((img, i) => (
              <AnimateIn key={img.id} delay={0.02 * i}>
                <Thumb asset={img} onClick={() => setActive(img)} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
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
            className="relative w-full max-w-lg"
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
            {active.alt && (
              <p className="text-white/60 text-xs text-center mt-3">{active.alt}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
