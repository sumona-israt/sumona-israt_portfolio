import { ImageResponse } from "next/og";

import { siteConfig } from "@/data/site";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1117",
          borderRadius: 14,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span style={{ fontSize: 30, fontWeight: 700, color: "#7c93f2" }}>
          {siteConfig.initials}
        </span>
      </div>
    ),
    { ...size }
  );
}
