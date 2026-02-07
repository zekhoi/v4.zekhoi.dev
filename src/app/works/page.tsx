import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works | Khoironi Kurnia Syah',
  description:
    'Portfolio of full-stack web projects including LMS platforms, AI automation tools, and responsive web applications.',
  keywords: [
    'portfolio',
    'projects',
    'next.js',
    'react',
    'full-stack development',
    'web development',
    'node.js'
  ],
  alternates: {
    canonical: 'https://zekhoi.dev/works'
  },
  openGraph: {
    title: 'Works | Khoironi Kurnia Syah',
    description:
      'Portfolio of full-stack web projects and product development work.',
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
import PrivateProjectCard from '@/components/home/PrivateProjectCard';
import ProjectPlaceholder from '@/components/home/ProjectPlaceholder';
import { getOgImage } from '@/lib/og-image';

const WORK_ITEMS = [
  {
    id: '01',
    unit: 'Unit_001',
    title: 'Supreme Solar',
    description:
      'Full-stack development for an Indonesian solar energy company. Built responsive web platform with product catalog, project showcase, and customer inquiry system. Integrated with backend APIs for lead management.',
    tags: ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND'],
    year: '2024',
    link: 'https://supremesolar.id',
    linkText: 'Visit_Site',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRLaN6q84wTWDd6KCCnayK12BHKuKbkFr_Ln09IzEOPBfpfZDotg_vTJWYJ2k58KbcSBwQpeJILrBOx8u03fbYwC05baMO1minsFhyUziBgnKnwojex5YXseCErLXCGVvQQpylyO8D4whKhO6gxUj1KoehGLCXdEy2LueoIKcsoJMQacBeg3cbGKx3Hitf0AxFyBe6D75UcXAt3_swmc1UNW4KzqaAvb5hu3pHPj0i_E2whwcrqPCE90sZcJWGjjCjXECwZxxdF1W-'
  },
  {
    id: '02',
    unit: 'Unit_002',
    title: 'Bakti Komdigi LMS',
    description:
      'Learning management system with video hosting capabilities. Developed frontend UI components for course management, student progress tracking, and video player integration. Collaborated on backend API integration for course delivery platform.',
    tags: ['REACT', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL'],
    year: '2024',
    link: 'https://baktikomdigi.id/',
    linkText: 'View_Platform',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdrDEfxpWUXWExrhvw0_yDwTfj1Y6ur_bvkOl0SzM_1XxvUmpc_NIC9A50rbSblIJhrdk_-7RDWS83kZEM-MX7XrKissIPQ0ODkxmpYAfmACQusKnT_lu2evVNuW41ScF5u5l-OZbUHzIq3VYIxI_sfEVH24E_vyr_fXaBT3Zyoi67_lnUXu1Qv26InWBTfvRBS5yeg4eGV-vS9xBGb3X5HNQNfmtZ5XOBUI5j-S3Be68AXVwzgar2KkNqAcrn3Z-zMGQYXiZITPc2'
  },
  {
    id: '03',
    unit: 'Unit_003',
    title: 'Agent AI',
    description:
      'AI-powered agent platform for automation and task management. Built product interface for agent configuration, monitoring, and analytics. Integrated LLM APIs for intelligent task execution and workflow automation.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'OPENAI_API', 'TAILWIND'],
    year: '2024',
    link: 'https://agentai.ai/',
    linkText: 'Explore_Platform',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuHFZqO3KWwmXqeSWxsGxGdA4QjNOApeB5b79tfXFjJK14MbKp5LnwaROfsiLarrGoPGAsAs7YaNrvogNCb8PlEcpuwGjLpYN0gVuDuSFUVjKIjBND6ATKOT_UpzowoCpp0mqnfS_3mqpU6ITthYD2lKEskNWiqtA5oY3N50gWVJnsuR26iwmCI5I2TPHBfpYvtBk47pbb1hFKa2fXo9ZzxUxqlD-rdjcKLhsUkoP7tCjw03ya9EFxRGEYaVdliZGAIzSNq-YoVByb'
  },
  {
    id: '04',
    unit: 'Unit_004',
    title: 'Capacity Building',
    description:
      'Educational organization platform for professional development programs. Developed course management dashboard, participant tracking system, and content delivery interface. Implemented responsive design for accessibility across devices.',
    tags: ['REACT', 'JAVASCRIPT', 'NODE.JS', 'MONGODB'],
    year: '2023',
    link: 'https://capacity-building.org/',
    linkText: 'View_Portal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAdrDEfxpWUXWExrhvw0_yDwTfj1Y6ur_bvkOl0SzM_1XxvUmpc_NIC9A50rbSblIJhrdk_-7RDWS83kZEM-MX7XrKissIPQ0ODkxmpYAfmACQusKnT_lu2evVNuW41ScF5u5l-OZbUHzIq3VYIxI_sfEVH24E_vyr_fXaBT3Zyoi67_lnUXu1Qv26InWBTfvRBS5yeg4eGV-vS9xBGb3X5HNQNfmtZ5XOBUI5j-S3Be68AXVwzgar2KkNqAcrn3Z-zMGQYXiZITPc2'
  }
];

const PRIVATE_PROJECTS = [
  {
    id: '05',
    unit: 'Unit_005',
    title: 'Social Media Automation',
    description:
      'Private application for automating social media scheduling and posting. Built scheduling dashboard with calendar interface, content management tools, and analytics integration. Implemented automation workflows for multiple social platforms.',
    tags: ['REACT', 'TYPESCRIPT', 'EXPRESS', 'CRON_JOBS'],
    year: '2023'
  }
];

export default async function WorksPage() {
  // Fetch og:images for all projects at runtime
  const workItemsWithOg = await Promise.all(
    WORK_ITEMS.map(async (item) => ({
      ...item,
      ogImage: await getOgImage(item.link)
    }))
  );

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
                WORKS
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
          {/* Public Projects */}
          {workItemsWithOg.map((item, index) => (
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
                  {item.ogImage ? (
                    <img
                      className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out aspect-video object-cover"
                      alt={item.title}
                      src={item.ogImage}
                      loading="lazy"
                    />
                  ) : (
                    <ProjectPlaceholder
                      title={item.title}
                      unit={item.unit}
                      year={item.year}
                    />
                  )}
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

          {/* Private Projects */}
          {PRIVATE_PROJECTS.map((project) => (
            <PrivateProjectCard
              key={project.id}
              unit={project.unit}
              title={project.title}
              description={project.description}
              year={project.year}
              tags={project.tags}
            />
          ))}
        </section>

        <section className="w-full max-w-4xl px-6 py-48 text-center">
          <h2 className="text-xs tracking-[0.4em] text-black/40 mb-12 uppercase font-mono">
            Inquiry
          </h2>
          <p className="font-display text-2xl md:text-5xl leading-tight uppercase text-black italic">
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
