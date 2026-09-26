import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a deployable site to /out (Vercel, Netlify, any static host).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  agentRules: false,
};

export default nextConfig;
