import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@boringhand/ui"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
