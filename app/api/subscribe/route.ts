import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY!;
const GHL_LOCATION_ID = "We47Ogqr3hMySU8CAGhM";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  console.log("[subscribe] received email:", email);

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const res = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        "Version": "2021-07-28",
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        email,
        tags: ["west-report-subscriber"],
      }),
    });

    const body = await res.text();
    console.log("[subscribe] GHL status:", res.status, body);

    if (!res.ok) {
      return NextResponse.json({ error: "GHL error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.log("[subscribe] error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
