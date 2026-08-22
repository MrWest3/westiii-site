import { ImageResponse } from "next/og";

export const alt = "David West, the AI guy in Atlanta. The $999 AI Assessment.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(139,26,26,0.35) 0%, rgba(10,10,10,0) 70%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C9A027",
            marginBottom: 28,
          }}
        >
          Atlanta, Georgia
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>David</span>
          <span style={{ color: "#A82020" }}>West III</span>
        </div>
        <div
          style={{
            fontSize: 34,
            color: "rgba(255,255,255,0.75)",
            marginTop: 36,
          }}
        >
          The AI guy in Atlanta. The $999 AI Assessment.
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.45)",
            marginTop: 18,
          }}
        >
          5+ hours a week, in 48 hours, or you don&apos;t pay.
        </div>
      </div>
    ),
    { ...size }
  );
}
