import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { domains: ["storage.googleapis.com", "loremflickr.com"] },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
