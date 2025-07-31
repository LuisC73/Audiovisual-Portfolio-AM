import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-83e1ef1038d14a1a93021b6e5a6d45ef.r2.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
