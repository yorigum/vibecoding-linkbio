import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.11"],
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
        source: '/tools/zescra',
        destination: 'https://zescra.vercel.app',
      },
      {
        source: '/tools/zescra/:path*',
        destination: 'https://zescra.vercel.app/:path*',
      },
      {
        source: '/tools/zpl/:path*',
        destination: 'https://zescra.vercel.app/zpl/:path*',
      },
      {
        source: '/tools/esc/:path*',
        destination: 'https://zescra.vercel.app/esc/:path*',
      },
      {
        source: '/tools/assets/:path*',
        destination: 'https://zescra.vercel.app/assets/:path*',
      },
      {
        source: '/tools/css/:path*',
        destination: 'https://zescra.vercel.app/css/:path*',
      },
      {
        source: '/tools/js/:path*',
        destination: 'https://zescra.vercel.app/js/:path*',
      },
      {
        source: '/tools/shared/:path*',
        destination: 'https://zescra.vercel.app/shared/:path*',
      },
    ];
  },
};

export default nextConfig;
