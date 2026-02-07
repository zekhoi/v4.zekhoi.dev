import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      {/* Broken Footer Status */}
      <div className="fixed bottom-0 left-0 w-full z-40 p-6 md:p-12 pointer-events-none flex justify-between items-end">
        <div className="pointer-events-auto bg-white border border-black p-2 text-[10px] uppercase flex flex-col gap-1">
          <div>
            System_Status:
            <span className="font-bold text-red-600 ml-1">
              CRITICAL_FAILURE
            </span>
          </div>
          <div>
            Error_Code: <span className="font-bold ml-1">0x00000194</span>
          </div>
        </div>
        <div className="pointer-events-auto text-[10px] text-black/40 rotate-180 [writing-mode:vertical-lr] tracking-widest uppercase">
          © 2024 TERMINAL_NULL
        </div>
      </div>

      <main className="relative z-10 w-full h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-12">
          {/* 3D Wireframe */}
          <div className="relative wireframe-container py-12">
            <div className="gyro-structure">
              <div className="gyro-ring gyro-ring-outer"></div>
              <div className="gyro-ring gyro-ring-mid"></div>
              <div className="gyro-ring gyro-ring-inner"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-red-600/50 text-6xl animate-pulse">
                  warning
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-9xl leading-none tracking-tighter uppercase glitch-static break-all md:break-normal">
              404_NOT_FOUND
            </h1>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-black text-white px-4 py-1 text-xs font-bold tracking-[0.4em] uppercase">
                SYSTEM_INTEGRITY_COMPROMISED
              </div>
              <div className="text-[10px] text-black/60 font-bold tracking-widest uppercase">
                ERROR: PATH_UNDEFINED // DIR_NOT_RESOLVED
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg border border-black/10 p-6 text-left space-y-2 bg-white/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
            <p className="text-[10px] text-black/40 font-bold uppercase mb-4 tracking-widest">
              [ ERROR_LOG_DUMP ]
            </p>
            <p className="text-[11px] leading-relaxed font-mono">
              <span className="text-black/30">14:02:44</span>
              <span className="text-red-600 ml-2">[FAIL]</span> CRITICAL:
              REQUESTED_URI_NOT_FOUND
              <br />
              <span className="text-black/30">14:02:44</span>
              <span className="text-red-600 ml-2">[FAIL]</span> STACK_TRACE:
              0xFC004...NULL_POINTER
              <br />
              <span className="text-black/30">14:02:44</span>
              <span className="text-black/60 ml-2">[INFO]</span>{' '}
              RECOVERY_PROTOCOL: ENABLED
              <br />
              <span className="text-black/30">14:02:45</span>
              <span className="text-black/60 ml-2">[WARN]</span>
              SEGMENTATION_FAULT_RECOVERED
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 pt-8">
            <Link
              className="terminal-btn group border border-black bg-white px-8 py-4 text-sm font-bold tracking-[0.2em] transition-all hover:bg-black hover:text-white relative"
              href="/"
            >
              <span className="relative z-10">[ RETURN_TO_ORIGIN ]</span>
              <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform border border-black"></div>
            </Link>
            <p className="text-[9px] text-black/40 uppercase tracking-[0.3em]">
              Session_ID: 982-AX-00-ERR
            </p>
          </div>
        </div>

        <div className="fixed top-1/2 left-6 -translate-y-1/2 hidden xl:block">
          <div className="flex flex-col gap-12 text-[9px] tracking-[0.8em] text-black/20 rotate-180 [writing-mode:vertical-lr] uppercase">
            <span>Access_Forbidden</span>
            <span>Kernel_Panic: 404</span>
          </div>
        </div>
        <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden xl:block">
          <div className="flex flex-col gap-12 text-[9px] tracking-[0.8em] text-black/20 [writing-mode:vertical-lr] uppercase">
            <span>Null_Reference</span>
            <span>Memory_Leak_Detected</span>
          </div>
        </div>
      </main>
    </>
  );
}
