// src/components/home/ExperienceLog.tsx
import React from 'react';

const experiences = [
  {
    period: 'AUG 2023 - PRESENT',
    role: 'Product Engineer',
    company: 'Zero One Group (Jakarta)',
    description:
      'Developing social media automation & AI-driven RAG systems. Built an LMS with self-hosted video streaming and optimized legacy processes, reducing technical debt. Tech: Node.js, Fastify, Python, docker.'
  },
  {
    period: 'MAY 2023 - AUG 2023',
    role: 'Product Engineer Intern',
    company: 'Zero One Group (Jakarta)',
    description:
      'Architected a modular backend using Fastify and Nx monorepo, enabling 30% faster team development velocity. Collaborated in agile cross-functional teams.'
  },
  {
    period: 'MAR 2023 - MAY 2023',
    role: 'Full Stack Intern',
    company: 'Kamar Pelajar (Sweden)',
    description:
      'Developed responsive web platforms for international students using Laravel & Bootstrap. Managed workflows via Trello to ensure on-time feature delivery.'
  }
];

export default function ExperienceLog() {
  return (
    <section className="w-full max-w-7xl px-6 md:px-12 pt-32 pb-16 border-t border-black bg-white/50 backdrop-blur-sm relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-black pb-4 gap-4">
        <h2 className="font-display font-bold text-3xl md:text-5xl uppercase italic tracking-tighter">
          EXPERIENCE_LOG
        </h2>
        <span className="text-[10px] font-mono opacity-50 tracking-[0.3em]">
          ENTRIES [{experiences.length.toString().padStart(2, '0')}]
        </span>
      </div>
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-8 md:py-12 border-b border-black hover:bg-black/5 transition-colors group"
          >
            <div className="md:col-span-2 text-xs font-bold tracking-widest text-black/40 uppercase">
              {exp.period}
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-bold uppercase tracking-tight">
                {exp.role}
              </h3>
              <p className="text-[10px] text-[var(--color-brutal-primary)] mt-1 uppercase tracking-widest font-bold">
                {exp.company}
              </p>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm leading-relaxed text-black/70 max-w-2xl font-mono">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
