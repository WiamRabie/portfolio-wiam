import { ImageResponse } from "next/og"

export const alt = "Wiam Rabie — AI & Digital Engineering"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0D070A",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#FF3388",
            marginBottom: 28,
          }}
        >
          AI Engineering · Casablanca
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: 20,
          }}
        >
          Wiam Rabie
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#B968F3",
            marginBottom: 32,
          }}
        >
          RAG & AI Agents · Machine Learning · Digital Health AI
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#B8ADB8",
            maxWidth: 900,
          }}
        >
          AI engineer building production LLM systems — with a clinical background in digital health.
        </div>
      </div>
    ),
    { ...size },
  )
}
