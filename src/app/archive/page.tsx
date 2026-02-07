'use client';

import React from 'react';
import Link from 'next/link';
import Scanline from '@/components/shared/Scanline';
import BlueprintBg from '@/components/shared/BlueprintBg';
import Navbar from '@/components/layout/Navbar';
import FixedIndicators from '@/components/layout/FixedIndicators';
import Footer from '@/components/layout/Footer';

const ARCHIVE_ITEMS = [
  {
    year: '2024',
    name: 'Neon-Cloud OS',
    stack: 'Next.js, Rust, WebAssembly, Tailwind',
    link: '#',
    linkText: 'GitHub'
  },
  {
    year: '2024',
    name: 'Synthesis Design System',
    stack: 'React, Radix UI, Framer Motion',
    link: '#',
    linkText: 'Live'
  },
  {
    year: '2023',
    name: 'Void Analytics Engine',
    stack: 'D3.js, Three.js, PostgreSQL',
    link: '#',
    linkText: 'GitHub'
  },
  {
    year: '2023',
    name: 'Grid P2P Protocol',
    stack: 'WebRTC, Socket.io, Node.js',
    link: null,
    linkText: 'N/A'
  },
  {
    year: '2022',
    name: 'Onyx Terminal Emulator',
    stack: 'C++, Electron, xterm.js',
    link: '#',
    linkText: 'Source'
  },
  {
    year: '2022',
    name: 'Kinetik Shader Library',
    stack: 'GLSL, WebGL, Vanilla JS',
    link: '#',
    linkText: 'Demo'
  },
  {
    year: '2021',
    name: 'Flux State Manager',
    stack: 'TypeScript, Redux, RxJS',
    link: '#',
    linkText: 'GitHub'
  },
  {
    year: '2021',
    name: 'Neural-Grid CSS Framework',
    stack: 'SCSS, PostCSS, Gulp',
    link: '#',
    linkText: 'Docs'
  },
  {
    year: '2020',
    name: 'Legacy Portfolio v2',
    stack: 'Gatsby, GraphQL, Contentful',
    link: '#',
    linkText: 'Live'
  },
  {
    year: '2019',
    name: 'Static-Pulse Generator',
    stack: 'Python, Flask, Jinja2',
    link: '#',
    linkText: 'GitHub'
  }
];

export default function ArchivePage() {
  return (
    <>
      <Scanline />
      <BlueprintBg />
      <Navbar />
      <FixedIndicators />

      <main className="relative z-10 pt-48 pb-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <header className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="border-l-4 border-black pl-8">
                <div className="text-[10px] text-black/40 mb-4 tracking-[0.4em] uppercase font-mono">
                  System_Log / Project_Directory
                </div>
                <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.8] tracking-tighter uppercase">
                  PROJECT
                  <br />
                  ARCHIVE
                </h1>
              </div>
              <div className="text-right">
                <p className="text-sm max-w-sm text-black/60 leading-relaxed uppercase font-mono">
                  A complete chronological index of experiments, open-source
                  contributions, and legacy builds since 2018.
                </p>
              </div>
            </div>
          </header>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse border-t border-black font-mono">
              <thead>
                <tr className="text-[10px] text-black/40 tracking-[0.2em] uppercase">
                  <th className="py-6 font-normal border-b border-black/10 px-4">
                    Year
                  </th>
                  <th className="py-6 font-normal border-b border-black/10 px-4">
                    Project Name
                  </th>
                  <th className="py-6 font-normal border-b border-black/10 px-4 hidden md:table-cell">
                    Tech Stack
                  </th>
                  <th className="py-6 font-normal border-b border-black/10 px-4 text-right">
                    Link / Source
                  </th>
                </tr>
              </thead>
              <tbody className="text-xs md:text-sm">
                {ARCHIVE_ITEMS.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-black/5 border-b border-black/10 transition-colors"
                  >
                    <td className="py-6 px-4 tabular-nums">{item.year}</td>
                    <td className="py-6 px-4 font-bold uppercase">
                      {item.name}
                    </td>
                    <td className="py-6 px-4 hidden md:table-cell text-black/60">
                      {item.stack}
                    </td>
                    <td className="py-6 px-4 text-right">
                      {item.link ? (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-2 hover:underline group"
                        >
                          {item.linkText}
                          <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            north_east
                          </span>
                        </Link>
                      ) : (
                        <span className="text-black/30">{item.linkText}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-black/40 tracking-[0.2em] uppercase font-mono">
            <div className="flex gap-8">
              <span>END_OF_LIST</span>
              <span>TOTAL_BYTES: 4.2MB</span>
            </div>
            <span>AUTO_REFRESH: OFF / PAGE_01_OF_01</span>
          </div>
        </div>

        <div className="mt-32">
          <Footer />
        </div>
      </main>

      {/* Side Indicators specific to Archive page */}
      <div className="fixed top-1/2 left-6 -translate-y-1/2 hidden xl:block z-40">
        <div className="flex flex-col gap-8 text-[10px] tracking-[0.5em] text-black/20 rotate-180 [writing-mode:vertical-lr] uppercase font-mono">
          <span>Core_Archive_V2</span>
          <span>Index: 42_Projects</span>
          <span>FileSystem: NTFS_EMU</span>
        </div>
      </div>
      <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden xl:block z-40">
        <div className="flex flex-col gap-8 text-[10px] tracking-[0.5em] text-black/20 [writing-mode:vertical-lr] uppercase font-mono">
          <span>Scroll_To_Navigate</span>
          <span>Status: Read_Only</span>
          <span>Auth: Admin</span>
        </div>
      </div>
    </>
  );
}
