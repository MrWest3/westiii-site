import type { Metadata } from "next";
import PreviewChatClient from "./PreviewChatClient";

export const metadata: Metadata = {
  title: "VitaMineral IV Therapy Front Desk Preview",
  description:
    "A working preview of an AI front desk for VitaMineral IV Therapy, built by David West.",
  robots: { index: false, follow: false },
};

export default function VitamineralPreviewPage() {
  return <PreviewChatClient />;
}
