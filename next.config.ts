import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000 // 1 year for immutable images
  },

  // Compression
  compress: true,

  // Production source maps disabled for smaller bundle
  productionBrowserSourceMaps: false,

  // Cache headers for static assets
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5
  },

  // Use Turbopack for faster builds (Next.js 16 default)
  turbopack: {
    // Pin the root so a stray lockfile in a parent directory isn't picked up
    root: __dirname
  }
};

export default nextConfig;
