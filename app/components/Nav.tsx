"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "AI Employees", href: "/ai-employees" },
  { label: "Offers", href: "/services" },
  { label: "Creative", href: "/creative" },
  { label: "Workshops", href: "/workshops" },
  { label: "Atlanta", href: "/atlanta" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const useSolidNav = !isHome || scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setScrolled(window.scrollY > 40);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useSolidNav
            ? "bg-white/95 backdrop-blur-sm border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="West III"
              width={80}
              height={40}
              className={`object-contain transition-all duration-300 ${
                useSolidNav ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-200 ${
                  useSolidNav
                    ? "text-[var(--ink-secondary)] hover:text-[var(--crimson)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="text-sm font-semibold px-4 py-2 bg-[var(--crimson)] text-white rounded hover:bg-[var(--crimson-light)] transition-colors duration-200"
            >
              Book Your Assessment
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${
                useSolidNav ? "bg-[var(--ink)]" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${
                useSolidNav ? "bg-[var(--ink)]" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${
                useSolidNav ? "bg-[var(--ink)]" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="md:hidden bg-white border-b border-[var(--border)] px-6 py-4 flex flex-col gap-4"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[var(--ink-secondary)] hover:text-[var(--crimson)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold px-4 py-2 bg-[var(--crimson)] text-white rounded text-center"
            >
              Book Your Assessment
            </Link>
          </nav>
        )}
      </header>
      {!isHome && <div className="h-16" aria-hidden="true" />}
    </>
  );
}
