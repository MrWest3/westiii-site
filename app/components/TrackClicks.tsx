"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Counts clicks on every Calendly link, site wide, so the free call and the
 * assessment show up as events without wiring each button by hand. The
 * placement comes from the link's own utm_content (see lib/links.ts).
 */
export default function TrackClicks() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (!href.includes("calendly.com")) return;

      let placement = "untagged";
      try {
        placement = new URL(href).searchParams.get("utm_content") ?? placement;
      } catch {
        // a malformed href still counts as a click
      }

      track(href.includes("/ai-audit") ? "assessment_click" : "free_call_click", {
        placement,
        page: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
