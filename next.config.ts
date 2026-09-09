import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: "/creator-home",
  assetPrefix: "/creator-home",
  trailingSlash: true,
};

export default nextConfig;
