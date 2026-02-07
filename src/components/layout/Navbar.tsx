'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'WORK', href: '/works' },
  { label: 'ARCHIVE', href: '/archive' },
  { label: 'SERVICES', href: '/services' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:px-12 md:py-8 pointer-events-none">
        <div className="flex justify-between items-center w-full max-w-[1920px] mx-auto">
          <div className="pointer-events-auto bg-white border border-black p-4 shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)]">
            <Link
              href="/"
              className="font-mono font-bold text-xl tracking-tighter"
            >
              ZEKHOI.DEV
            </Link>
            <p className="text-[10px] text-black/50 mt-1 uppercase font-mono">
              SYS_VER: 4.0.0 / PROD_BUILD
            </p>
          </div>
          <div className="pointer-events-auto flex items-center gap-1 uppercase text-xs tracking-[0.2em]">
            <div className="hidden md:flex items-center gap-0 border border-black/10 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:bg-black/5 px-6 py-4 transition-colors border-r border-black/10 hover:font-bold flex items-center gap-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-4 font-bold hover:bg-[var(--color-brutal-primary)] transition-all flex items-center gap-2"
              >
                CONTACT_ME
              </Link>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden bg-white border border-black p-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.05)] z-50 relative active:translate-y-1 active:shadow-none transition-all"
            >
              {isOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-center font-mono">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold hover:text-[var(--color-brutal-primary)] hover:italic transition-all tracking-tighter"
              >
                {item.label}
              </Link>
            ))}
            <div className="w-12 h-px bg-black/10 mx-auto my-4"></div>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-black text-white px-12 py-6 font-bold hover:bg-[var(--color-brutal-primary)] transition-all text-xl tracking-widest"
            >
              CONTACT_ME
            </Link>
          </div>

          <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] text-black/30 font-mono">
            System_Nav_Mobile
          </div>
        </div>
      )}
    </>
  );
}
