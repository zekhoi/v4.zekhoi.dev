// src/components/home/Hero.tsx
'use client';

import React from 'react';

export default function Hero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById('project-log');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 w-full relative">
      <div className="text-center relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-black/10"></div>
        <p className="text-sm tracking-[0.5em] text-black/40 mb-8 uppercase font-mono">
          Product Engineer & Automation Specialist
        </p>
        <h1 className="font-display font-black text-[9vw] leading-[0.85] tracking-tighter uppercase glitch text-black mb-4">
          KHOIRONI
          <br />
          KURNIA SYAH
        </h1>
        <div className="mt-16 flex flex-wrap justify-center gap-12 text-sm text-black/40 font-mono">
          {[
            { icon: 'code', label: 'FRONTEND' },
            { icon: 'terminal', label: 'BACKEND' },
            { icon: 'smart_toy', label: 'AUTOMATION' },
            { icon: 'dns', label: 'DEVOPS' },
            { icon: 'memory', label: 'AI_SYSTEMS' }
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center group cursor-help"
            >
              <span className="material-symbols-outlined text-3xl mb-2 text-black/20 group-hover:text-black transition-colors">
                {item.icon}
              </span>
              <span className="border-t border-black/5 pt-2">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 mb-24">
          <a
            href="https://docs.google.com/document/d/1ZfDHKW1rYWNgZ1r4CyOhj0UM5dzw1SLRx1UJY3Z9IYI/export?format=pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black px-6 py-3 text-xs uppercase tracking-widest font-mono hover:bg-black hover:text-white transition-all duration-200"
          >
            DOWNLOAD_RESUME
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
        </div>
        <button
          onClick={scrollToContent}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 text-[10px] text-black/20 tracking-widest flex flex-col items-center hover:text-black/60 transition-colors cursor-pointer z-50"
        >
          <span>SCROLL_TO_INIT_VIEWPORT</span>
          <span className="material-symbols-outlined animate-bounce mt-2">
            expand_more
          </span>
        </button>
      </div>
    </section>
  );
}
