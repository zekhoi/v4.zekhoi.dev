'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [memLoad, setMemLoad] = useState(0.12);

  useEffect(() => {
    const updateMemory = () => {
      // Try to get real memory usage from Chrome/Chromium non-standard API
      // @ts-expect-error - performance.memory is non-standard
      if (window.performance && window.performance.memory) {
        // @ts-expect-error - performance.memory is non-standard
        const { usedJSHeapSize, jsHeapSizeLimit } = window.performance.memory;
        // Calculate usage percentage
        // If heap limit is very large, this might be small.
        const percent = (usedJSHeapSize / jsHeapSizeLimit) * 100;
        setMemLoad(percent);
      } else {
        // Fallback simulation for browsers without memory API coverage (Safari/Firefox)
        // Fluctuate slightly to look alive
        setMemLoad((prev) => {
          const change = (Math.random() - 0.5) * 0.1;
          const newValue = prev + change;
          return Math.max(0.1, Math.min(2.5, newValue));
        });
      }
    };

    const interval = setInterval(updateMemory, 1000);
    updateMemory(); // Initial call

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-white border-t border-black/10 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <h2 className="font-mono font-black text-6xl md:text-8xl leading-none tracking-tighter uppercase">
              LET&apos;S
              <br />
              CONNECT
            </h2>
            <div className="border-l-4 border-black pl-6">
              <p className="text-sm text-black/60 max-w-xs uppercase tracking-widest leading-relaxed font-mono">
                SUMMARY: A results-driven Product Engineer specializing in
                Backend Development, Auto-Scaling Systems and AI-Driven RAG
                Architectures.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {[
              {
                id: '01',
                label: 'LINKEDIN',
                sub: '@KHOIRONIKS',
                href: 'https://linkedin.com/in/khoironiks'
              },
              {
                id: '02',
                label: 'GITHUB',
                sub: '@ZEKHOI',
                href: 'https://github.com/zekhoi'
              },
              {
                id: '03',
                label: 'MEDIUM',
                sub: '@ZEKHOI',
                href: 'https://medium.com/@zekhoi'
              },
              {
                id: '04',
                label: 'EMAIL',
                sub: 'CONTACT_ME',
                href: 'mailto:khoironidev@gmail.com'
              }
            ].map((item) => (
              <Link
                key={item.id}
                className="brutalist-card bg-white p-8 flex flex-col justify-between aspect-square group font-mono"
                href={item.href}
                target="_blank"
              >
                <span className="text-[10px] text-black/40 font-bold uppercase tracking-widest">
                  {item.id} / {item.label}
                </span>
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold tracking-tighter">
                    {item.sub}
                  </span>
                  <span className="material-symbols-outlined transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    north_east
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-32 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-black/40 tracking-[0.2em] uppercase font-mono">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500"></span>SYS_V_4.0.0
            </span>
            <span>MEM_LOAD: {memLoad.toFixed(2)}%</span>
          </div>
          <span>ZEKHOI_DEV / ARCH_CORE_v4</span>
        </div>
      </div>
    </footer>
  );
}
