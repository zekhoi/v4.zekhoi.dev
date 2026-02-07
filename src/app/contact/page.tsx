'use client';

import React from 'react';
import Scanline from '@/components/shared/Scanline';
import BlueprintBg from '@/components/shared/BlueprintBg';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <>
      <Scanline />
      <BlueprintBg />
      <Navbar />

      <main className="relative z-10 pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar / Info Column */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-48 flex flex-col gap-12">
              <div className="border border-black p-6 bg-white">
                <p className="text-[10px] text-black/40 mb-4 tracking-[0.2em] uppercase font-mono">
                  SYSTEM_STATUS
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 animate-pulse"></span>
                  <span className="font-bold text-xs uppercase tracking-widest font-mono">
                    Available for Projects
                  </span>
                </div>
              </div>
              <div className="space-y-8 font-mono">
                <div>
                  <p className="text-[10px] text-black/40 mb-2 tracking-[0.2em] uppercase">
                    COMM_CHANNELS
                  </p>
                  <div className="flex flex-col gap-1 text-sm font-bold uppercase">
                    <a
                      className="hover:underline"
                      href="mailto:hello@zekhoi.dev"
                    >
                      HELLO@ZEKHOI.DEV
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-black/40 mb-2 tracking-[0.2em] uppercase">
                    LOCATION
                  </p>
                  <p className="text-sm font-bold uppercase">REMOTE / GLOBAL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content / Form Column */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.8] tracking-tighter uppercase mb-16">
              GET_IN
              <br />
              TOUCH
            </h1>
            <form action="#" className="space-y-0 border-t border-black/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="group border-b border-black/10 md:border-r border-black/10 relative transition-colors bg-transparent hover:bg-black/[0.02]">
                  <label
                    className="block text-[10px] text-black/40 p-4 tracking-[0.2em] uppercase transition-colors group-focus-within:text-black font-mono"
                    htmlFor="name"
                  >
                    01 / NAME
                  </label>
                  <input
                    className="w-full bg-transparent border-none p-4 pt-0 focus:ring-0 text-xl font-bold placeholder:text-black/10 uppercase outline-none font-mono"
                    id="name"
                    name="name"
                    placeholder="YOUR NAME"
                    required
                    type="text"
                  />
                </div>
                <div className="group border-b border-black/10 relative transition-colors bg-transparent hover:bg-black/[0.02]">
                  <label
                    className="block text-[10px] text-black/40 p-4 tracking-[0.2em] uppercase transition-colors group-focus-within:text-black font-mono"
                    htmlFor="email"
                  >
                    02 / EMAIL
                  </label>
                  <input
                    className="w-full bg-transparent border-none p-4 pt-0 focus:ring-0 text-xl font-bold placeholder:text-black/10 uppercase outline-none font-mono"
                    id="email"
                    name="email"
                    placeholder="YOUR@EMAIL.COM"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="group border-b border-black/10 relative transition-colors bg-transparent hover:bg-black/[0.02]">
                <label
                  className="block text-[10px] text-black/40 p-4 tracking-[0.2em] uppercase transition-colors group-focus-within:text-black font-mono"
                  htmlFor="message"
                >
                  03 / MESSAGE
                </label>
                <textarea
                  className="w-full bg-transparent border-none p-4 pt-0 focus:ring-0 text-xl font-bold placeholder:text-black/10 uppercase resize-none outline-none font-mono min-h-[200px]"
                  id="message"
                  name="message"
                  placeholder="TYPE YOUR MESSAGE HERE..."
                  required
                  rows={6}
                ></textarea>
              </div>
              <div className="pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <p className="text-[10px] text-black/40 max-w-xs uppercase leading-relaxed tracking-widest font-mono">
                  By submitting this form, you acknowledge that your data will
                  be transmitted via encrypted protocols for processing.
                </p>
                <button
                  className="bg-black text-white px-12 py-6 font-bold text-xl uppercase tracking-tighter hover:bg-[var(--color-brutal-primary)] transition-all flex items-center gap-4 group"
                  type="submit"
                >
                  SEND_MESSAGE
                  <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-32">
          <Footer />
        </div>
      </main>

      {/* Side Indicators specific to Contact page */}
      <div className="fixed top-1/2 left-6 -translate-y-1/2 hidden xl:block z-40">
        <div className="flex flex-col gap-8 text-[10px] tracking-[0.5em] text-black/20 rotate-180 [writing-mode:vertical-lr] uppercase font-mono">
          <span>Core_System_Online</span>
          <span>Latency: 24ms</span>
          <span>Data_Buffer: Optimized</span>
        </div>
      </div>
      <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden xl:block z-40">
        <div className="flex flex-col gap-8 text-[10px] tracking-[0.5em] text-black/20 [writing-mode:vertical-lr] uppercase font-mono">
          <span>Version_Control: GIT</span>
          <span>Deployment: Vercel</span>
          <span>Framework: NextJS</span>
        </div>
      </div>

      {/* Bottom fixed bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 p-6 md:p-8 pointer-events-none">
        <div className="flex justify-between items-end w-full">
          <div className="pointer-events-auto bg-white border border-black/10 p-2 text-[10px] uppercase font-mono shadow-sm">
            Status:{' '}
            <span className="text-blue-600 font-bold">DIRECTORY_LOADED</span>
          </div>
          <div className="pointer-events-auto text-[10px] text-black/40 rotate-180 [writing-mode:vertical-lr] font-mono tracking-widest">
            © 2026 ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </>
  );
}
