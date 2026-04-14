import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK = "https://services.leadconnectorhq.com/hooks/We47Ogqr3hMySU8CAGhM/webhook-trigger/g3sXeWsdUAV53yXh7GFm3";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
