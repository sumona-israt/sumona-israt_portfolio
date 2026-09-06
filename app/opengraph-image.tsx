import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#0d1117",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span style={{ fontSize: 22, color: "#7c93f2", letterSpacing: 4, textTransform: "uppercase" }}>
          {siteConfig.eyebrow}
        </span>
        <span style={{ fontSize: 64, fontWeight: 700, color: "#f5f5f7", marginTop: 24 }}>
          {siteConfig.name}
        </span>
        <span style={{ fontSize: 28, color: "#a1a1aa", marginTop: 20, maxWidth: 900 }}>
          {siteConfig.title}
        </span>
        <div style={{ display: "flex", width: 120, height: 6, background: "#7c93f2", marginTop: 40, borderRadius: 999 }} />
      </div>
    ),
    { ...size }
  );
}
