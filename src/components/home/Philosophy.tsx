// src/components/home/Philosophy.tsx
import React from 'react';

export default function Philosophy() {
  return (
    <section className="w-full max-w-4xl px-6 pt-16 pb-32 text-center bg-white/40 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
      <h2 className="text-[10px] tracking-[0.6em] text-black/40 mb-12 uppercase font-mono">
        CORE_PHILOSOPHY
      </h2>
      <p className="font-display text-2xl md:text-4xl leading-relaxed md:leading-tight uppercase text-black relative z-10 break-words">
        Building digital experiences that prioritize
        <br className="md:hidden" />
        <span className="bg-black text-white px-2 py-1 italic mx-1 inline-block transform -skew-x-6 my-1">
          raw performance
        </span>
        <span className="inline-block md:inline">and</span>
        <span className="border border-black px-2 py-1 italic mx-1 inline-block transform -skew-x-6 my-1 hover:bg-black hover:text-white transition-colors duration-300">
          structural integrity
        </span>
        . minimalism is not the absence of design, but the presence of
        <span className="text-[var(--color-brutal-primary)] font-bold ms-1 border-b-2 border-[var(--color-brutal-primary)]">
          clarity
        </span>
        .
      </p>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
    </section>
  );
}
