import React from 'react';
import Scanline from '@/components/shared/Scanline';
import BlueprintBg from '@/components/shared/BlueprintBg';
import Navbar from '@/components/layout/Navbar';
import FixedIndicators from '@/components/layout/FixedIndicators';
import Hero from '@/components/home/Hero';
import ProjectLog from '@/components/home/ProjectLog';
import ExperienceLog from '@/components/home/ExperienceLog';
import Philosophy from '@/components/home/Philosophy';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Scanline />
      <BlueprintBg />
      <Navbar />
      <FixedIndicators />
      <main className="relative z-10 min-h-screen flex flex-col items-center">
        <Hero />
        <ProjectLog />
        <ExperienceLog />
        <Philosophy />
        <Footer />
      </main>
    </>
  );
}
