import type { Metadata } from 'next';
import { Geist, Geist_Mono, Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
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
    icon: '/favicon.ico'
  },
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
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-background-light font-mono text-black selection:bg-black selection:text-white overflow-x-hidden curser-crosshair`}
      >
        {children}
      </body>
    </html>
  );
}
