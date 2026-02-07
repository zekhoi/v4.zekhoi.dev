import type { Metadata } from 'next';

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import PrivateProjectCard from '@/components/home/PrivateProjectCard';
import ProjectPlaceholder from '@/components/home/ProjectPlaceholder';
import { getOgImage } from '@/lib/og-image';
import { PROJECTS } from '@/lib/data';

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

export default async function WorksPage() {
  // Fetch og:images for public projects at runtime
  const processedProjects = await Promise.all(
    PROJECTS.map(async (item) => {
      if (item.type === 'public') {
        return {
          ...item,
          isPrivate: false,
          ogImage: await getOgImage(item.link)
        };
      }
      return {
        ...item,
        isPrivate: true,
        ogImage: null
      };
    })
  );

  return (
    <>
      <main className="relative z-10 min-h-screen pt-32 md:pt-48 pb-16 md:pb-32">
        <header className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-24 border-b border-black/10 mb-12 md:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="border-l-4 border-black pl-4 md:pl-8">
              <span className="text-xs tracking-[0.5em] text-black/40 uppercase block mb-4 font-mono">
                Project_Gallery
              </span>
              <h1 className="font-display font-black text-4xl md:text-8xl leading-[0.8] tracking-tighter uppercase">
                SELECTED
                <br />
                WORKS
              </h1>
            </div>
            <div className="text-[10px] text-black/60 uppercase text-left md:text-right leading-relaxed tracking-widest mb-1 md:mb-2 font-mono w-full md:w-auto">
              Displaying: 03 Curated Units
              <br />
              Filter: All_Architectures
            </div>
          </div>
        </header>

        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 space-y-24 md:space-y-48">
          {processedProjects.map((item, index) => {
            if (item.isPrivate) {
              return (
                <PrivateProjectCard
                  key={item.id}
                  unit={item.pid}
                  title={item.title}
                  description={item.description}
                  year={item.year}
                  tags={item.tags}
                />
              );
            }

            return (
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
                        unit={item.pid}
                        year={item.year}
                      />
                    )}
                    <div className="absolute top-6 left-6 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-mono">
                      {item.pid}
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
            );
          })}
        </section>

        <section className="w-full max-w-4xl mx-auto py-24 md:py-48 text-center">
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
