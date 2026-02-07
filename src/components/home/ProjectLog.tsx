import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '@/lib/data';
import { getOgImage } from '@/lib/og-image';
import PrivateProjectCard from './PrivateProjectCard';

export default async function ProjectLog() {
  const slicedProjects = PROJECTS.slice(0, 2);

  // Fetch dynamic OG images for consistency with Works page
  const projectsWithOg = await Promise.all(
    slicedProjects.map(async (item) => {
      let ogImage = item.image; // default to static image

      if (item.type === 'public' && item.link) {
        const fetchedOg = await getOgImage(item.link);
        if (fetchedOg) {
          ogImage = fetchedOg;
        }
      }

      return {
        id: item.id,
        unit: item.pid,
        pid: item.pid,
        title: item.title,
        subtitle: item.description,
        tech: item.tags.slice(0, 2).join(' // '),
        tags: item.tags,
        year: item.year,
        image: ogImage || undefined,
        type: item.type // Pass the type (public/private) to the card
      };
    })
  );

  return (
    <section
      id="project-log"
      className="w-full max-w-7xl px-6 md:px-12 py-32 border-t border-black/5 bg-white/50 backdrop-blur-sm"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-black pb-4 gap-4">
        <Link href="/works" className="group flex items-center gap-4">
          <h2 className="font-display font-bold text-3xl md:text-5xl uppercase italic tracking-tighter group-hover:text-black/60 transition-colors">
            PROJECT_LOG
          </h2>
          <span className="material-symbols-outlined text-3xl md:text-4xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
            arrow_forward
          </span>
        </Link>
        <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-1 w-full md:w-auto justify-between md:justify-end">
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
        {projectsWithOg.map((project) =>
          project.type === 'public' ? (
            <ProjectCard key={project.id} project={project} />
          ) : (
            <PrivateProjectCard
              key={project.id}
              unit={project.unit}
              title={project.title}
              description={project.subtitle}
              year={project.year}
              tags={project.tags}
              compact={true}
            />
          )
        )}
      </div>
    </section>
  );
}
