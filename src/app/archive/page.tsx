import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import { ARCHIVE } from '@/lib/data';
import { OG_IMAGES } from '@/lib/metadata';

export const metadata: Metadata = {
  title: 'Archive',
  description:
    'Archive of side projects, experiments, and open-source work since 2021.',
  alternates: {
    canonical: 'https://zekhoi.dev/archive'
  },
  openGraph: {
    title: 'Archive | Khoironi Kurnia Syah',
    description: 'Archive of past projects and technical explorations.',
    url: 'https://zekhoi.dev/archive',
    type: 'website',
    images: OG_IMAGES
  }
};

export default function ArchivePage() {
  return (
    <>
      <main className="relative z-10 min-h-screen pt-32 md:pt-48 pb-16 md:pb-32">
        <header className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-24 border-b border-black/10 mb-12 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="border-l-4 border-black pl-4 md:pl-8">
              <div className="text-[10px] text-black/40 mb-4 tracking-[0.4em] uppercase font-mono">
                System_Log / Project_Directory
              </div>
              <h1 className="font-display font-black text-4xl md:text-8xl leading-[0.8] tracking-tighter uppercase">
                PROJECT
                <br />
                ARCHIVE
              </h1>
            </div>
            <div className="text-left md:text-right w-full md:w-auto">
              <p className="text-sm max-w-sm text-black/60 leading-relaxed uppercase font-mono">
                A chronological index of side projects, experiments, and
                open-source work since 2021.
              </p>
            </div>
          </div>
        </header>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 overflow-x-auto">
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
              {ARCHIVE.map((item) => (
                <tr
                  key={item.name}
                  className="hover:bg-black/5 border-b border-black/10 transition-colors"
                >
                  <td className="py-6 px-4 tabular-nums">{item.year}</td>
                  <td className="py-6 px-4 font-bold uppercase">{item.name}</td>
                  <td className="py-6 px-4 hidden md:table-cell text-black/60">
                    {item.stack}
                  </td>
                  <td className="py-6 px-4 text-right">
                    {item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
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

        <div className="mt-12 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-black/40 tracking-[0.2em] uppercase font-mono">
          <div className="flex gap-8">
            <span>END_OF_LIST</span>
            <span>ENTRIES [{ARCHIVE.length.toString().padStart(2, '0')}]</span>
          </div>
          <span>AUTO_REFRESH: OFF / PAGE_01_OF_01</span>
        </div>

        <div className="mt-32">
          <Footer />
        </div>
      </main>
    </>
  );
}
