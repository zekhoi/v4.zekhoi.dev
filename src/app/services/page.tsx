import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Khoironi Kurnia Syah',
  description:
    'Technical consulting and development services including system architecture, backend development, and performance optimization.',
  keywords: [
    'technical consulting',
    'system architecture',
    'backend development',
    'performance optimization',
    'database design',
    'devops',
    'cloud infrastructure'
  ],
  alternates: {
    canonical: 'https://zekhoi.dev/services'
  },
  openGraph: {
    title: 'Services | Khoironi Kurnia Syah',
    description:
      'Technical consulting and development services for high-performance systems.',
    url: 'https://zekhoi.dev/services',
    type: 'website'
  }
};

import React from 'react';
import Scanline from '@/components/shared/Scanline';
import BlueprintBg from '@/components/shared/BlueprintBg';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TechStack from '@/components/home/TechStack';

export default function ServicesPage() {
  return (
    <>
      <Scanline />
      <BlueprintBg />
      <Navbar />

      <main className="relative z-10 min-h-screen pt-48 pb-32">
        <header className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="border-l-4 border-black pl-8">
            <p className="text-xs tracking-[0.4em] text-black/40 mb-4 uppercase font-mono">
              Operational Capabilities
            </p>
            <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.8] tracking-tighter uppercase mb-6">
              TECHNICAL
              <br />
              SPECIFICATION
            </h1>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest text-black/60 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500"></span> System: Active
              </span>
              <span>Type: Technical Consulting</span>
              <span>Location: Remote/Global</span>
            </div>
          </div>
        </header>

        <section className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16">
            {/* Service 01 */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/10 pt-12">
              <div className="lg:col-span-1">
                <span className="text-4xl font-black text-black/10 font-mono">
                  01
                </span>
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-4xl">
                    dns
                  </span>
                  <h2 className="font-display font-bold text-4xl uppercase tracking-tighter">
                    Full-stack Systems
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-black/70 mb-8 max-w-md font-mono">
                  Architecting robust, scalable backends coupled with
                  high-performance frontend architectures. Specialized in
                  distributed systems and type-safe development environments.
                </p>
                <div className="p-6 bg-zinc-50 border border-black/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40 font-mono">
                    Methodology
                  </h3>
                  <p className="text-xs leading-relaxed italic font-mono">
                    &quot;Adopting a &apos;Security-by-Design&apos; approach. We
                    leverage micro-services or modular monoliths depending on
                    load requirements, ensuring zero-downtime deployment
                    pipelines and horizontal scalability.&quot;
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Architecture
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Distributed
                        Microservices
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Serverless
                        Orchestration
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Event-Driven
                        Design
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Infrastructure
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> CI/CD
                        Pipeline Automation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span>{' '}
                        Containerization (Docker)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Cloud
                        Security Hardening
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 02 */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/10 pt-12">
              <div className="lg:col-span-1">
                <span className="text-4xl font-black text-black/10 font-mono">
                  02
                </span>
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-4xl">
                    layers
                  </span>
                  <h2 className="font-display font-bold text-4xl uppercase tracking-tighter">
                    UI/UX Engineering
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-black/70 mb-8 max-w-md font-mono">
                  Bridging the gap between aesthetic design and technical
                  feasibility. Developing design systems that are as
                  maintainable as they are beautiful.
                </p>
                <div className="p-6 bg-zinc-50 border border-black/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40 font-mono">
                    Methodology
                  </h3>
                  <p className="text-xs leading-relaxed italic font-mono">
                    &quot;Design logic over decoration. Every component is
                    stress-tested for accessibility and performance. We build
                    systems, not just screens, using atomic design
                    principles.&quot;
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Frontend Tech
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span>{' '}
                        Component-Driven Dev
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> State
                        Management Logic
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Interactive
                        Data Viz
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      User Experience
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Accessibility
                        (WCAG)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Motion
                        Orchestration
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Rapid
                        Prototyping
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 03 */}
            <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-black/10 pt-12">
              <div className="lg:col-span-1">
                <span className="text-4xl font-black text-black/10 font-mono">
                  03
                </span>
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-4xl">
                    speed
                  </span>
                  <h2 className="font-display font-bold text-4xl uppercase tracking-tighter">
                    Performance Optimization
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-black/70 mb-8 max-w-md font-mono">
                  Identifying bottlenecks and refactoring legacy codebases for
                  peak efficiency. We specialize in sub-second load times and
                  high Core Web Vital scores.
                </p>
                <div className="p-6 bg-zinc-50 border border-black/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40 font-mono">
                    Methodology
                  </h3>
                  <p className="text-xs leading-relaxed italic font-mono">
                    &quot;Data-driven auditing. We use profiling tools to
                    isolate memory leaks and render-blocking resources, applying
                    aggressive caching and payload reduction strategies.&quot;
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Auditing
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> V8 Engine
                        Profiling
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Bundle Size
                        Analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> SQL Query
                        Tuning
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Optimization
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Edge Caching
                        / CDN
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Asset
                        Minification
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Runtime
                        Performance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TechStack />

        <div className="mt-32">
          <Footer />
        </div>
      </main>

      {/* Side Indicators specific to Services page */}
      <div className="fixed top-1/2 left-6 -translate-y-1/2 hidden xl:block z-40">
        <div className="flex flex-col gap-8 text-[10px] tracking-[0.5em] text-black/20 rotate-180 [writing-mode:vertical-lr] uppercase font-mono">
          <span>Terminal_Output_Link</span>
          <span>Security_Protocols_Active</span>
          <span>Spec_v2.01_Beta</span>
        </div>
      </div>
      <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden xl:block z-40">
        <div className="flex flex-col gap-8 text-[10px] tracking-[0.5em] text-black/20 [writing-mode:vertical-lr] uppercase font-mono">
          <span>Protocol: HTTPS</span>
          <span>Node_Cluster: Primary</span>
          <span>Stack: Light_Industrial</span>
        </div>
      </div>

      {/* Bottom fixed bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 p-6 md:p-8 pointer-events-none">
        <div className="flex justify-between items-end w-full">
          <div className="pointer-events-auto bg-white border border-black/10 p-2 text-[10px] uppercase font-mono shadow-sm">
            Status:{' '}
            <span className="text-blue-600 font-bold">SERVICES_ACTIVE</span>
          </div>
          <div className="pointer-events-auto text-[10px] text-black/40 rotate-180 [writing-mode:vertical-lr] font-mono tracking-widest">
            © 2026 SERVICES_LOG
          </div>
        </div>
      </div>
    </>
  );
}
