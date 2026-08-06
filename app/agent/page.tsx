import type { Metadata } from "next";
import { Suspense } from "react";
import AgentChatClient from "./AgentChatClient";

export const metadata: Metadata = {
  title: "The Bottleneck Agent",
  description:
    "A 3 minute conversation that finds the one function you should take off your plate. Built by David West.",
  robots: { index: false, follow: true },
};

export default function AgentPage() {
  return (
    <Suspense>
      <AgentChatClient />
    </Suspense>
  );
}
