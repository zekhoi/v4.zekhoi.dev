import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for immutable images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },

  // Compression
  compress: true,

  // Production source maps disabled for smaller bundle
  productionBrowserSourceMaps: false,

  // Optimize font loading and tree-shake unused code
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'radix-ui',
      '@base-ui/react',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ]
  },

  // Cache headers for static assets
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5
  },

  // Use Turbopack for faster builds (Next.js 16 default)
  turbopack: {}
};

export default nextConfig;
