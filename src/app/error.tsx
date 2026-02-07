'use client';

import { useEffect } from 'react';
import Scanline from '@/components/shared/Scanline';
import BlueprintBg from '@/components/shared/BlueprintBg';
import Navbar from '@/components/layout/Navbar';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Scanline />
      <BlueprintBg />
      <Navbar />

      <main className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center p-6 pt-24 md:pt-0">
        <div className="w-full max-w-6xl">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-[0.5em] text-black/40 uppercase block mb-2 font-mono">
              Error_Code: 500
            </span>
            <h1 className="font-display font-black text-6xl md:text-[8vw] leading-none tracking-tighter uppercase animate-flicker break-words">
              500_SYSTEM
              <br className="hidden md:block" />
              COLLAPSE
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Terminal Section */}
            <div className="lg:col-span-8 border border-black/10 bg-white/50 backdrop-blur-sm p-1 relative h-[400px] lg:h-auto">
              <div className="bg-black/5 h-full p-6 font-mono text-[11px] leading-relaxed overflow-y-auto terminal-scroll">
                <div className="flex items-center gap-2 mb-4 border-b border-black/10 pb-2">
                  <span className="material-symbols-outlined text-sm">
                    terminal
                  </span>
                  <span className="uppercase font-bold tracking-widest">
                    Diagnostic_Trace
                  </span>
                </div>
                <div className="space-y-1 text-black/60">
                  <p className="text-red-600 font-bold">
                    [CRITICAL_KERNEL_PANIC] Exception at{' '}
                    {error.digest || '0x000293F'}
                  </p>
                  <p>&gt; Initializing stack dump...</p>
                  <p>&gt; Traceback (most recent system call last):</p>
                  <p className="pl-4 text-black">
                    Error: {error.message || 'Unknown system error'}
                  </p>
                  <p className="pl-4">
                    File &quot;core/memory_manager.rs&quot;, line 12, in
                    allocate
                  </p>
                  <p className="pl-4 text-red-600">
                    FATAL: Buffer overflow in heap_segment_0
                  </p>
                  <p>&gt; Attempting recovery...</p>
                  <p className="text-red-600">
                    [FAILED] Resource temporarily unavailable (os error 11)
                  </p>
                  <p>
                    &gt; Dumping registers: EAX: 0x00000000 EBX: 0x00000000 ECX:
                    0x00000000
                  </p>
                  <p>&gt; System integrity: COMPROMISED</p>
                  <p>&gt; Shutdown sequence initiated...</p>
                </div>
              </div>
            </div>

            {/* Actions Section */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="border border-black/10 p-6 bg-white/50 backdrop-blur-sm flex flex-col justify-between flex-1 min-h-[250px]">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 bg-black animate-pulse-dot rounded-full"></span>
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono">
                      RETRYING_CONNECTION...
                    </span>
                  </div>
                  <p className="text-xs text-black/60 uppercase leading-relaxed font-mono">
                    The server encountered an internal configuration error and
                    was unable to complete your request. Our automated watchdog
                    is currently mapping the fault.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="text-[9px] text-black/40 uppercase mb-4 border-b border-black/10 pb-2 font-mono">
                    Primary_Action
                  </div>
                  <button
                    onClick={() => reset()}
                    className="group w-full flex items-center justify-between bg-black text-white p-4 transition-all hover:pr-6 cursor-pointer"
                  >
                    <span className="font-bold tracking-widest text-sm font-mono">
                      FORCE_REBOOT
                    </span>
                    <span className="material-symbols-outlined transform group-hover:rotate-45 transition-transform text-lg">
                      restart_alt
                    </span>
                  </button>
                </div>
              </div>

              <div className="border border-black/10 p-4 bg-white/50 backdrop-blur-sm flex items-center justify-between font-mono">
                <span className="text-[10px] text-black/40 font-bold uppercase">
                  Node_ID: HK-01-X
                </span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-black/10"></div>
                  <div className="w-2 h-2 bg-black/10"></div>
                  <div className="w-2 h-2 bg-black/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Status */}
      <div className="fixed bottom-0 left-0 w-full z-40 p-6 md:p-12 pointer-events-none flex justify-between items-end">
        <div className="pointer-events-auto bg-white border border-black p-2 text-[10px] uppercase font-mono">
          Error_Status:{' '}
          <span className="font-bold text-red-600">CRITICAL_FAULT</span>
        </div>
        <div className="pointer-events-auto text-[10px] text-black/40 rotate-180 [writing-mode:vertical-lr] tracking-widest uppercase font-mono">
          © 2024 SYSTEM_CORE_DUMP
        </div>
      </div>

      {/* Overlay Text Left */}
      <div className="fixed top-1/2 left-6 -translate-y-1/2 hidden xl:block pointer-events-none z-0">
        <div className="flex flex-col gap-12 text-[9px] tracking-[0.8em] text-black/20 rotate-180 [writing-mode:vertical-lr] uppercase font-mono">
          <span>MEM_CORRUPTION_DETECTED</span>
          <span>SIGABRT_RECIEVED</span>
        </div>
      </div>

      {/* Overlay Text Right */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden xl:block pointer-events-none z-0">
        <div className="flex flex-col gap-12 text-[9px] tracking-[0.8em] text-black/20 [writing-mode:vertical-lr] uppercase font-mono">
          <span>THREAD_ID: {error.digest || '0xFA92'}</span>
          <span>DUMPING_CORE...</span>
        </div>
      </div>
    </>
  );
}
