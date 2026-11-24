"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { freeCallUrl } from "../lib/links";

const links = [
  { label: "Learn", href: "/learn" },
  { label: "Services", href: "/services" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Work", href: "/builds" },
  { label: "Hope", href: "/hope" },
];

const callButton =
  "inline-flex items-center justify-center rounded bg-[var(--crimson)] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--crimson-light)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--crimson)]";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";
  const useSolidNav = !isHome || scrolled || menuOpen;
  // Names the page in Calendly, so a booked call says where it came from.
  const page = isHome ? "home" : pathname.slice(1).replaceAll("/", "-");
  const bar = `block h-0.5 w-6 transition-[transform,opacity,background-color] duration-200 ${
    useSolidNav ? "bg-[var(--ink)]" : "bg-white"
  }`;

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
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          useSolidNav
            ? "border-[var(--border)] bg-white/95 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6">
          <Link href="/" aria-label="Home" className="shrink-0">
            <Image
              src="/logo.png"
              alt="West III"
              width={80}
              height={40}
              className={`object-contain transition-[filter] duration-300 ${
                useSolidNav ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-200 ${
                  useSolidNav
                    ? "text-[var(--ink-secondary)] hover:text-[var(--crimson)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={freeCallUrl(`nav-${page}`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${callButton} px-4 py-2`}
            >
              Book a free call
            </a>
          </nav>

          {/* Phone: the call button stays on the bar, next to the menu. */}
          <div className="flex items-center gap-1 md:hidden">
            <a
              href={freeCallUrl(`nav-phone-${page}`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${callButton} min-h-11 px-3.5`}
            >
              Book a free call
            </a>
            <button
              type="button"
              className="flex h-12 w-12 flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span className={`${bar} ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`${bar} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`${bar} ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="flex flex-col border-b border-[var(--border)] bg-white px-6 pb-4 md:hidden"
            aria-label="Mobile"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center text-base font-medium text-[var(--ink-secondary)] hover:text-[var(--crimson)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      {!isHome && <div className="h-16" aria-hidden="true" />}
    </>
  );
}
