import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import TechStack from '@/components/home/TechStack';

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

export default function ServicesPage() {
  return (
    <>
      <main className="relative z-10 min-h-screen pt-32 md:pt-48 pb-16 md:pb-32">
        <header className="max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-24 border-b border-black/10 mb-12 md:mb-24">
          <div className="border-l-4 border-black pl-4 md:pl-8">
            <p className="text-xs tracking-[0.4em] text-black/40 mb-4 uppercase font-mono">
              Operational_Capabilities
            </p>
            <h1 className="font-display font-black text-4xl md:text-8xl leading-[0.8] tracking-tighter uppercase mb-6">
              TECHNICAL
              <br />
              SPECIFICATION
            </h1>
            <div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest text-black/60 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500"></span> System: Active
              </span>
              <span>Type: Product Engineering</span>
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
                    Full-Stack Development
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-black/70 mb-8 max-w-md font-mono">
                  Building modern web applications with React, Next.js, and
                  Node.js. Creating responsive frontends paired with functional
                  backend APIs.
                </p>
                <div className="p-6 bg-zinc-50 border border-black/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40 font-mono">
                    Experience
                  </h3>
                  <p className="text-xs leading-relaxed italic font-mono">
                    &quot;Full-stack development with TypeScript, React/Next.js
                    on the frontend and Node.js/Express on the backend. Building
                    responsive, functional applications with clean code.&quot;
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Frontend
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> React /
                        Next.js
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> TypeScript
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Tailwind CSS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Shadcn/ui
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Backend
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Node.js /
                        Express
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> PostgreSQL /
                        MongoDB
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> REST APIs
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
                    UI/UX Implementation
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-black/70 mb-8 max-w-md font-mono">
                  Building clean, accessible user interfaces with modern tools.
                  Creating reusable components and responsive designs that work
                  across devices.
                </p>
                <div className="p-6 bg-zinc-50 border border-black/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40 font-mono">
                    Experience
                  </h3>
                  <p className="text-xs leading-relaxed italic font-mono">
                    &quot;Component-based design with React and Tailwind CSS.
                    Focus on accessibility and responsive layouts. Building
                    user-friendly interfaces that are maintainable and
                    scalable.&quot;
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Frontend Skills
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> React
                        Components
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Responsive
                        Design
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> State
                        Management
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Tools & Libraries
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Tailwind /
                        CSS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Shadcn/ui
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Framer Motion
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
                    Code Quality & Debugging
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-black/70 mb-8 max-w-md font-mono">
                  Writing clean, maintainable code with best practices.
                  Debugging issues efficiently and improving code performance
                  where possible.
                </p>
                <div className="p-6 bg-zinc-50 border border-black/5">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40 font-mono">
                    Experience
                  </h3>
                  <p className="text-xs leading-relaxed italic font-mono">
                    &quot;Writing clean TypeScript code with focus on
                    readability and maintainability. Using linting and testing
                    to catch issues early. Continuous learning and code
                    improvement.&quot;
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Best Practices
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> TypeScript
                        Typing
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Code
                        Documentation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Git Workflows
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-black/10 p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-100">
                    <h4 className="font-bold text-xs uppercase mb-4 pb-2 border-b border-black/5">
                      Tools
                    </h4>
                    <ul className="text-[11px] space-y-2 uppercase tracking-tighter">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> ESLint /
                        Prettier
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Browser
                        DevTools
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black"></span> Testing
                        Basics
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
    </>
  );
}
