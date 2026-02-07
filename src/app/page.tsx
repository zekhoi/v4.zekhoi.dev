import type { Metadata } from 'next';
import React from 'react';
import Hero from '@/components/home/Hero';
import ProjectLog from '@/components/home/ProjectLog';
import ExperienceLog from '@/components/home/ExperienceLog';
import Philosophy from '@/components/home/Philosophy';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Home | Khoironi Kurnia Syah',
  description:
    'Welcome to my portfolio. Product engineer specializing in building high-performance products and scalable systems.',
  alternates: {
    canonical: 'https://zekhoi.dev'
  },
  openGraph: {
    title: 'Home | Khoironi Kurnia Syah',
    description:
      'Product engineer specializing in building high-performance products and scalable systems.',
    url: 'https://zekhoi.dev',
    type: 'website'
  }
};

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col items-center">
      <Hero />
      <ProjectLog />
      <ExperienceLog />
      <Philosophy />
      <Footer />
    </main>
  );
}
