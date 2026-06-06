import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow writing to data directory in production
  experimental: {},
  output: "standalone",
};

export default nextConfig;
