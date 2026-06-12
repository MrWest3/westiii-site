import type { Metadata } from "next";
import AiAgentsDemoClient from "./AiAgentsDemoClient";

export const metadata: Metadata = {
  title: "AI Front Desk Agent Demo - Studio West Creatives",
  description:
    "A local prototype of a guarded AI front desk, intake, lead summary, alerts, and owner pipeline for healthcare and wellness practices.",
};

export default function AiAgentsDemoPage() {
  return <AiAgentsDemoClient />;
}
