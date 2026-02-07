// src/components/home/ProjectLog.tsx
import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

const projects = [
  {
    pid: '001_KOSTHUB',
    title: 'KostHub Platform',
    subtitle: 'Property Management System',
    tech: 'NEXT.JS // POSTGRES',
    year: '2023',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRLaN6q84wTWDd6KCCnayK12BHKuKbkFr_Ln09IzEOPBfpfZDotg_vTJWYJ2k58KbcSBwQpeJILrBOx8u03fbYwC05baMO1minsFhyUziBgnKnwojex5YXseCErLXCGVvQQpylyO8D4whKhO6gxUj1KoehGLCXdEy2LueoIKcsoJMQacBeg3cbGKx3Hitf0AxFyBe6D75UcXAt3_swmc1UNW4KzqaAvb5hu3pHPj0i_E2whwcrqPCE90sZcJWGjjCjXECwZxxdF1W-'
  },
  {
    pid: '002_IO_ANALYSIS',
    title: 'IO Analysis Tool',
    subtitle: 'Economic Calculation Engine',
    tech: 'NODE.JS // NUXT',
    year: '2022',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdrDEfxpWUXWExrhvw0_yDwTfj1Y6ur_bvkOl0SzM_1XxvUmpc_NIC9A50rbSblIJhrdk_-7RDWS83kZEM-MX7XrKissIPQ0ODkxmpYAfmACQusKnT_lu2evVNuW41ScF5u5l-OZbUHzIq3VYIxI_sfEVH24E_vyr_fXaBT3Zyoi67_lnUXu1Qv26InWBTfvRBS5yeg4eGV-vS9xBGb3X5HNQNfmtZ5XOBUI5j-S3Be68AXVwzgar2KkNqAcrn3Z-zMGQYXiZITPc2'
  }
];

export default function ProjectLog() {
  return (
    <section
      id="project-log"
      className="w-full max-w-7xl px-6 md:px-12 py-32 border-t border-black/5 bg-white/50 backdrop-blur-sm"
    >
      <div className="flex justify-between items-end mb-16 border-b border-black pb-4">
        <Link href="/works" className="group flex items-center gap-4">
          <h2 className="font-display font-bold text-5xl uppercase italic tracking-tighter group-hover:text-black/60 transition-colors">
            PROJECT_LOG
          </h2>
          <span className="material-symbols-outlined text-4xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            arrow_forward
          </span>
        </Link>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-mono opacity-50 tracking-[0.3em]">
            ENTRIES [02]
          </span>
          <Link
            href="/works"
            className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold hover:bg-black hover:text-white transition-colors px-1"
          >
            VIEW_FULL_WORKS
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.pid} project={project} />
        ))}
      </div>
    </section>
  );
}
