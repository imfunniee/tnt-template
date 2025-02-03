import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@imfunniee/ui"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
