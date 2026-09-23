import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the root so a stray lockfile in a parent directory isn't picked up
    root: __dirname
  }
};

export default nextConfig;
