import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/tools/:path*",
        destination: "https://zescra.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
