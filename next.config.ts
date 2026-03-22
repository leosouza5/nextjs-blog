import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "disciplined-elk-259.convex.cloud",
        protocol: "https",
        port: "",
      },
      {
        hostname: "blissful-hedgehog-27.convex.cloud",
        protocol: "https",
        port: "",
      }
    ]
  }
};

export default nextConfig;
