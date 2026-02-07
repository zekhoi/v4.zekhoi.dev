// src/components/home/ProjectCard.tsx
import React from 'react';
import ProjectPlaceholder from './ProjectPlaceholder';

interface ProjectProps {
  pid: string;
  title: string;
  subtitle: string;
  tech: string;
  year: string;
  image?: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="group">
      <div className="brutalist-card bg-white border border-black/10 p-1 aspect-video relative overflow-hidden">
        <div className="w-full h-full bg-zinc-100 flex items-center justify-center overflow-hidden relative">
          {project.image ? (
            <img
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100 opacity-90"
              src={project.image}
            />
          ) : (
            <ProjectPlaceholder
              title={project.title}
              unit={project.pid.split('_')[0]} // Extract Unit ID roughly
              year={project.year}
            />
          )}
        </div>
        <div className="absolute top-4 left-4 bg-white px-2 py-1 text-[10px] border border-black/10 font-bold font-mono z-20">
          {project.pid}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-start font-mono">
        <div>
          <h3 className="text-xl font-bold uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-[10px] text-black/50 mt-1 uppercase tracking-widest">
            {project.subtitle}
          </p>
        </div>
        <div className="text-[9px] text-right text-black/40 border-l border-black/10 pl-4">
          <p>{project.tech}</p>
          <p>ST_YEAR: {project.year}</p>
        </div>
      </div>
    </div>
  );
}
