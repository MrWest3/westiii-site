"use client";

import { useState } from "react";
import AnimateIn from "./AnimateIn";

const videos = [
  {
    id: "UnX2neRbZ7o",
    title: "I Built an AI Operating System to Run My Business 24/7 (Here's How)",
    views: "463 views",
  },
  {
    id: "W33ASlngzW8",
    title: "OpenClaw Explained: Origins, How It Works, Cost, and Real Use Cases",
    views: "325 views",
  },
  {
    id: "bvQ6rIhWkTU",
    title: "This Looks Like a Real Coca-Cola Commercial (Made With AI)",
    views: "118 views",
  },
  {
    id: "37ne0GgvHb8",
    title: "How to Build AI Characters & Visual Boards Using Freepik Spaces",
    views: "1.6K views",
  },
  {
    id: "Y97Nr_uWb8E",
    title: "I Used AI to Create a Nintendo Switch Ad (Here's How I Did It)",
    views: "156 views",
  },
  {
    id: "hc7RU5HwKiY",
    title: "HOW TO AI FACE SWAP",
    views: "352 views",
  },
];

function PlayIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function FeaturedVideo({ video }: { video: (typeof videos)[0] }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1`;

  return (
    <div>
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black group">
        {playing ? (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="w-full h-full relative block cursor-pointer"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={thumb}
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[var(--crimson)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <PlayIcon size={28} />
              </div>
            </div>
          </button>
        )}
      </div>
      <div className="mt-4">
        <p className="font-bold text-[var(--ink)] text-lg leading-snug">{video.title}</p>
        <p className="text-sm text-[var(--muted)] mt-1">{video.views}</p>
      </div>
    </div>
  );
}

function VideoCard({ video }: { video: (typeof videos)[0] }) {
  const thumb = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black mb-3">
        <img
          src={thumb}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[var(--crimson)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            <PlayIcon size={14} />
          </div>
        </div>
      </div>
      <p className="text-sm font-semibold text-[var(--ink)] leading-snug group-hover:text-[var(--crimson)] transition-colors duration-200 line-clamp-2">
        {video.title}
      </p>
      <p className="text-xs text-[var(--muted)] mt-1">{video.views}</p>
    </a>
  );
}

export default function YouTube() {
  const [featured, ...rest] = videos;

  return (
    <section id="youtube" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <AnimateIn>
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--crimson)] mb-4">
                YouTube
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--ink)] leading-tight">
                Watch the Build
              </h2>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.15}>
            <a
              href="https://www.youtube.com/@WestTech3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[var(--crimson)] hover:underline inline-flex items-center gap-1.5 pb-1"
            >
              @WestTech3
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </AnimateIn>
        </div>

        {/* Featured */}
        <AnimateIn delay={0.1}>
          <FeaturedVideo video={featured} />
        </AnimateIn>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {rest.map((video, i) => (
            <AnimateIn key={video.id} delay={0.05 * i}>
              <VideoCard video={video} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
