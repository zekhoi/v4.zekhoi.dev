'use client';

import React, { useState, useEffect, useSyncExternalStore } from 'react';

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    (callback) => {
      window.addEventListener('online', callback);
      window.addEventListener('offline', callback);
      return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
      };
    },
    () => navigator.onLine,
    () => true
  );
  return isOnline;
}

export default function FixedIndicators() {
  const [latency, setLatency] = useState(24);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate realistic latency fluctuations between 1ms and 45ms
      setLatency(Math.floor(Math.random() * (45 - 1 + 1) + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-40 p-6 md:p-12 pointer-events-none">
        <div className="flex justify-between items-end w-full">
          <div className="pointer-events-auto bg-white border border-black/10 p-2 text-[10px] uppercase font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)]">
            Status:{' '}
            <span
              className={`${isOnline ? 'text-blue-600' : 'text-red-500'} font-bold transition-colors duration-300`}
            >
              {isOnline ? 'NODE_ACTIVE' : 'NET_OFFLINE'}
            </span>
          </div>
          <div className="pointer-events-auto text-[10px] text-black/40 rotate-180 [writing-mode:vertical-lr] tracking-[0.3em]">
            CORE_MOD_v4 // © {new Date().getFullYear()}
          </div>
        </div>
      </div>
      <div className="fixed top-1/2 left-6 -translate-y-1/2 hidden xl:block z-50">
        <div className="flex flex-col gap-12 text-[10px] tracking-[0.5em] text-black/20 rotate-180 [writing-mode:vertical-lr] uppercase font-mono">
          <span>{`Core_System_${isOnline ? 'Online' : 'Offline'}`}</span>
          <div className="w-px h-16 bg-black/10 mx-auto"></div>
          <span>Latency: {isOnline ? latency : '0'}ms</span>
        </div>
      </div>
      <div className="fixed top-1/2 right-6 -translate-y-1/2 hidden xl:block z-50">
        <div className="flex flex-col gap-12 text-[10px] tracking-[0.5em] text-black/20 [writing-mode:vertical-lr] uppercase font-mono">
          <span>Stack: NextJS</span>
          <div className="w-px h-16 bg-black/10 mx-auto"></div>
          <span>Build_State: Stable</span>
        </div>
      </div>
    </>
  );
}
