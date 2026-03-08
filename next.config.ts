import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/dijes-deportivos",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
