import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  outputFileTracingExcludes: {
    "*": ["data/**/*"],
  },
};

export default nextConfig;
