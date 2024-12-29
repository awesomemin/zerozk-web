import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nng-phinf.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'livecloud-thumb.akamaized.net',
      },
      {
        protocol: 'https',
        hostname: 'ssl.pstatic.net',
      },
    ],
  },
};

export default nextConfig;
