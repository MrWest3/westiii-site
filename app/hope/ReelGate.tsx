"use client";

import { useSearchParams } from "next/navigation";

/**
 * Shows its children only to visitors who came from the HOPE reel's
 * comment-to-DM link (westiii.com/hope?ref=hope-reel). Everyone else never
 * sees the "video that brought you here" card.
 */
export default function ReelGate({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  if (searchParams.get("ref") !== "hope-reel") return null;
  return <div className="mb-5">{children}</div>;
}
