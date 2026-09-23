'use client';

import { useEffect, useState } from 'react';

// performance.memory is a non-standard API that only Chromium browsers expose
type PerformanceWithMemory = Performance & {
  memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number };
};

const readMemory = () => (performance as PerformanceWithMemory).memory;

export default function MemLoad() {
  const [memLoad, setMemLoad] = useState<number | null>(null);

  useEffect(() => {
    if (!readMemory()) return;

    const update = () => {
      const memory = readMemory();
      if (memory) {
        setMemLoad((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100);
      }
    };

    update();
    const interval = setInterval(update, 5000);

    return () => clearInterval(interval);
  }, []);

  return <span>MEM_LOAD: {memLoad === null ? '--' : memLoad.toFixed(2)}%</span>;
}
