import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a deployable site to /out (Vercel, Netlify, any static host).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  agentRules: false,
  // The dev-only Next.js badge sits bottom-left, on top of the pitch theme picker.
  devIndicators: false,
};

export default nextConfig;
