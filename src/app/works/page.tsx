import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works | Khoironi Kurnia Syah',
  description:
    'Explore my portfolio of innovative systems architecture projects including Neon-Cloud OS, Void Analytics, and Grid Protocol.',
  keywords: [
    'portfolio',
    'projects',
    'next.js',
    'rust',
    'webassembly',
    'systems architecture',
    'd3.js',
    'webrtc'
  ],
  alternates: {
    canonical: 'https://zekhoi.dev/works'
  },
  openGraph: {
    title: 'Works | Khoironi Kurnia Syah',
    description:
      'Explore my portfolio of innovative systems architecture and full-stack projects.',
    url: 'https://zekhoi.dev/works',
    type: 'website'
  }
};

import React from 'react';
import Link from 'next/link';
import Scanline from '@/components/shared/Scanline';
import BlueprintBg from '@/components/shared/BlueprintBg';
import Navbar from '@/components/layout/Navbar';
import FixedIndicators from '@/components/layout/FixedIndicators';
import Footer from '@/components/layout/Footer';

const WORK_ITEMS = [
  {
    id: '01',
    unit: 'Unit_001',
    title: 'Neon-Cloud OS',
    description:
      'A browser-based operating system designed for edge computing. It features a custom micro-kernel built in Rust, enabling low-latency execution of containerized web applications directly in the client.',
    tags: ['NEXT.JS', 'RUST (WASM)', 'WEBGL', 'DOCKER'],
    year: '2024',
    link: '#',
    linkText: 'View_Deployment',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRLaN6q84wTWDd6KCCnayK12BHKuKbkFr_Ln09IzEOPBfpfZDotg_vTJWYJ2k58KbcSBwQpeJILrBOx8u03fbYwC05baMO1minsFhyUziBgnKnwojex5YXseCErLXCGVvQQpylyO8D4whKhO6gxUj1KoehGLCXdEy2LueoIKcsoJMQacBeg3cbGKx3Hitf0AxFyBe6D75UcXAt3_swmc1UNW4KzqaAvb5hu3pHPj0i_E2whwcrqPCE90sZcJWGjjCjXECwZxxdF1W-'
  },
  {
    id: '02',
    unit: 'Unit_002',
    title: 'Void Analytics',
    description:
      'A high-performance data visualization engine capable of processing 1M+ data points per second. Utilizing custom shaders for rendering complex topologies in real-time.',
    tags: ['D3.JS', 'THREE.JS', 'TYPESCRIPT', 'GLSL'],
    year: '2023',
    link: '#',
    linkText: 'Exploration_Report',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdrDEfxpWUXWExrhvw0_yDwTfj1Y6ur_bvkOl0SzM_1XxvUmpc_NIC9A50rbSblIJhrdk_-7RDWS83kZEM-MX7XrKissIPQ0ODkxmpYAfmACQusKnT_lu2evVNuW41ScF5u5l-OZbUHzIq3VYIxI_sfEVH24E_vyr_fXaBT3Zyoi67_lnUXu1Qv26InWBTfvRBS5yeg4eGV-vS9xBGb3X5HNQNfmtZ5XOBUI5j-S3Be68AXVwzgar2KkNqAcrn3Z-zMGQYXiZITPc2'
  },
  {
    id: '03',
    unit: 'Unit_003',
    title: 'Grid Protocol',
    description:
      'Decentralized messaging infrastructure leveraging WebRTC for true peer-to-peer communication. Implements a double-ratchet encryption protocol for maximum security.',
    tags: ['WEBRTC', 'NODE.JS', 'REDIS', 'GO'],
    year: '2023',
    link: '#',
    linkText: 'Protocol_Specs',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuHFZqO3KWwmXqeSWxsGxGdA4QjNOApeB5b79tfXFjJK14MbKp5LnwaROfsiLarrGoPGAsAs7YaNrvogNCb8PlEcpuwGjLpYN0gVuDuSFUVjKIjBND6ATKOT_UpzowoCpp0mqnfS_3mqpU6ITthYD2lKEskNWiqtA5oY3N50gWVJnsuR26iwmCI5I2TPHBfpYvtBk47pbb1hFKa2fXo9ZzxUxqlD-rdjcKLhsUkoP7tCjw03ya9EFxRGEYaVdliZGAIzSNq-YoVByb'
  }
];

export default function WorksPage() {
  return (
    <>
      <Scanline />
      <BlueprintBg />
      <Navbar />
      <FixedIndicators />

      <main className="relative z-10 w-full flex flex-col items-center min-h-screen">
        <header className="w-full max-w-7xl px-6 md:px-12 pt-48 pb-24 border-b border-black/10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="border-l-4 border-black pl-8">
              <span className="text-xs tracking-[0.5em] text-black/40 uppercase block mb-4 font-mono">
                Project Gallery
              </span>
              <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.8] tracking-tighter uppercase">
                SELECTED
                <br />
                WORKS_
              </h1>
            </div>
            <div className="text-[10px] text-black/60 uppercase text-right leading-relaxed tracking-widest mb-2 font-mono">
              Displaying: 03 Curated Units
              <br />
              Filter: All_Architectures
            </div>
          </div>
        </header>

        <section className="w-full max-w-7xl px-6 md:px-12 py-24 space-y-48">
          {WORK_ITEMS.map((item, index) => (
            <article
              key={item.id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              {/* Image Section */}
              <div
                className={`lg:col-span-8 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="border border-black p-1 bg-white relative overflow-hidden">
                  <img
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out aspect-video object-cover"
                    alt={item.title}
                    src={item.image}
                  />
                  <div className="absolute top-6 left-6 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-mono">
                    {item.unit}
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div
                className={`lg:col-span-4 flex flex-col h-full justify-between ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div>
                  <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-6 glitch">
                    {item.title}
                  </h2>
                  <p className="text-sm text-black/70 mb-8 leading-relaxed font-mono">
                    {item.description}
                  </p>
                  <div className="space-y-4">
                    <span className="text-[10px] text-black/40 uppercase tracking-[0.3em] block border-b border-black/10 pb-2 font-mono">
                      Technical_Stack
                    </span>
                    <div className="flex flex-wrap gap-2 font-mono">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-black/10 px-3 py-1 text-xs hover:bg-black hover:text-white transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between font-mono">
                  <span className="text-[10px] text-black/40">
                    YEAR_{item.year}
                  </span>
                  <Link
                    className="flex items-center gap-2 group/link"
                    href={item.link}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest border-b border-black">
                      {item.linkText}
                    </span>
                    <span className="material-symbols-outlined text-sm transform group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="w-full max-w-4xl px-6 py-48 text-center">
          <h2 className="text-xs tracking-[0.4em] text-black/40 mb-12 uppercase font-mono">
            Inquiry
          </h2>
          <p className="font-display text-2xl md:text-5xl leading-none uppercase text-black italic">
            Seeking projects that push the{' '}
            <span className="bg-black text-white px-3 not-italic">
              boundaries
            </span>{' '}
            of technical{' '}
            <span className="border-b-4 border-black font-black">
              FEASIBILITY
            </span>
            .
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}
