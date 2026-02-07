import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

import Scanline from '@/components/shared/Scanline';
import BlueprintBg from '@/components/shared/BlueprintBg';
import Navbar from '@/components/layout/Navbar';
import FixedIndicators from '@/components/layout/FixedIndicators';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap'
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap'
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap'
});

const baseUrl = 'https://zekhoi.dev';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Khoironi Kurnia Syah | Product Engineer',
    template: '%s | zekhoi.dev'
  },
  description:
    'Product Engineer. Building high-performance products and scalable systems with modern technologies. Available for consulting and projects.',
  keywords: [
    'product engineer',
    'fullstack developer',
    'next.js',
    'typescript',
    'react',
    'backend development',
    'web development',
    'consulting',
    'technical consulting'
  ],
  authors: [
    {
      name: 'Khoironi Kurnia Syah',
      url: baseUrl
    }
  ],
  creator: 'Khoironi Kurnia Syah',
  publisher: 'Khoironi Kurnia Syah',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png'
      }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Khoironi Kurnia Syah | Product Engineer',
    description:
      'Product Engineer. Building high-performance products and scalable systems with modern technologies.',
    siteName: 'zekhoi.dev'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khoironi Kurnia Syah | Product Engineer',
    description:
      'Product Engineer. Building high-performance products and scalable systems with modern technologies.',
    creator: '@zekhoi'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'google-site-verification=YOUR_CODE'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Khoironi Kurnia Syah',
    url: 'https://zekhoi.dev',
    jobTitle: 'Product Engineer',
    email: 'me@zekhoi.dev',
    sameAs: ['https://github.com/zekhoi', 'https://linkedin.com/in/zekhoi'],
    knowsAbout: [
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Rust',
      'System Architecture',
      'Database Design',
      'DevOps'
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Material Symbols font with optimal loading strategy */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background-light font-mono text-black selection:bg-black selection:text-white overflow-x-hidden cursor-crosshair`}
      >
        <Scanline />
        <BlueprintBg />
        <Navbar />
        <FixedIndicators />
        {children}
      </body>
    </html>
  );
}
