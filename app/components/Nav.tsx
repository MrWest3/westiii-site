"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "WestStone", href: "#weststone" },
  { label: "Building", href: "#building" },
  { label: "YouTube", href: "#youtube" },
  { label: "Connect", href: "#connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-[var(--border)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="Home">
          <Image
            src="/logo.png"
            alt="West III"
            width={80}
            height={40}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--ink-secondary)] hover:text-[var(--crimson)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            className="text-sm font-semibold px-4 py-2 bg-[var(--crimson)] text-white rounded hover:bg-[var(--crimson-light)] transition-colors duration-200"
          >
            Work With Me
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[var(--ink)] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--ink)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--ink)] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-[var(--border)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[var(--ink-secondary)] hover:text-[var(--crimson)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold px-4 py-2 bg-[var(--crimson)] text-white rounded text-center"
          >
            Work With Me
          </a>
        </div>
      )}
    </header>
  );
}
