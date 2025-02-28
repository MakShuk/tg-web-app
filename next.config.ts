import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cs5.pikabu.ru',
      },
    ],
  },
};

export default nextConfig;
