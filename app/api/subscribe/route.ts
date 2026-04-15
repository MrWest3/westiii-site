import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/We47Ogqr3hMySU8CAGhM/webhook-trigger/g3sXeWsdUAV53yXh7GFm3";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  console.log("[subscribe] received email:", email);

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const ghlRes = await fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const ghlBody = await ghlRes.text();
    console.log("[subscribe] GHL status:", ghlRes.status, "body:", ghlBody);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.log("[subscribe] GHL fetch error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
