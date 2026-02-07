import React from 'react';

interface PrivateProjectCardProps {
  unit: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  orderReverse?: boolean;
  compact?: boolean;
}

export default function PrivateProjectCard({
  unit,
  title,
  description,
  year,
  tags,
  orderReverse = false,
  compact = false
}: PrivateProjectCardProps) {
  if (compact) {
    return (
      <div className="group">
        <div className="brutalist-card bg-white border border-black/10 p-1 aspect-video relative overflow-hidden">
          <div className="w-full h-full relative overflow-hidden border border-black/5">
            <div
              className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundSize: '20px 20px',
                backgroundImage:
                  'linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)'
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                <span className="material-symbols-outlined text-4xl md:text-5xl scale-125 opacity-20">
                  security
                </span>
                <div className="text-center space-y-1">
                  <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] bg-white border-y border-black px-4 py-1">
                    RESTRICTED
                  </h3>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-wrap opacity-[0.03] pointer-events-none text-[8px] leading-none select-none overflow-hidden">
                {Array(500).fill('01').join(' ')}
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2 py-1 text-[10px] border border-black/10 font-bold font-mono z-20 flex items-center gap-2">
            <span>{unit}</span>
            <span className="material-symbols-outlined text-[10px]">lock</span>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-start font-mono">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight">
              {title}
            </h3>
            <p className="text-[10px] text-black/50 mt-1 uppercase tracking-widest line-clamp-2 pr-4">
              {description}
            </p>
          </div>
          <div className="text-[9px] text-right text-black/40 border-l border-black/10 pl-4 shrink-0">
            <p>{tags.slice(0, 2).join(' // ')}</p>
            <p>ST_YEAR: {year}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
        orderReverse ? '' : ''
      }`}
    >
      {/* Image Section - Restricted */}
      <div className={`lg:col-span-8 ${orderReverse ? 'lg:order-2' : ''}`}>
        <div className="border border-black p-1 bg-white relative overflow-hidden">
          <div className="relative overflow-hidden border border-black/10">
            <div
              className="aspect-video w-full bg-white flex items-center justify-center relative overflow-hidden"
              style={{
                backgroundSize: '20px 20px',
                backgroundImage:
                  'linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)'
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10">
                <span className="material-symbols-outlined text-6xl md:text-8xl scale-125 opacity-20">
                  security
                </span>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] bg-white border-y border-black px-8 py-2">
                    ACCESS_RESTRICTED
                  </h3>
                  <p className="text-[10px] font-bold tracking-[0.5em] opacity-40 uppercase">
                    ENCRYPTED_DATA_STREAM // NDA
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-wrap opacity-[0.03] pointer-events-none text-[8px] leading-none select-none overflow-hidden">
                {Array(500).fill('01').join(' ')}
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono opacity-40 uppercase tracking-tighter">
                Security_Layer: Alpha_8
                <br />
                Status: NDA_Project
              </div>
            </div>
          </div>
          <div className="absolute top-6 left-6 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest font-mono">
            {unit}
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div
        className={`lg:col-span-4 flex flex-col h-full justify-between ${
          orderReverse ? 'lg:order-1' : ''
        }`}
      >
        <div>
          <div className="mb-4 inline-flex items-center gap-2 border border-black px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-black bg-white">
            <span className="material-symbols-outlined text-[12px]">lock</span>
            NDA_Project
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-6 glitch">
            {title}
          </h2>
          <p className="text-sm text-black/70 mb-8 leading-relaxed font-mono">
            {description}
          </p>
          <div className="space-y-4">
            <span className="text-[10px] text-black/40 uppercase tracking-[0.3em] block border-b border-black/10 pb-2 font-mono">
              Technical_Stack
            </span>
            <div className="flex flex-wrap gap-2 font-mono">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-black/10 px-3 py-1 text-xs hover:bg-black hover:text-white transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between font-mono">
          <span className="text-[10px] text-black/40 italic">
            ACCESS_DENIED_0X01F
          </span>
          <div className="flex items-center gap-2 opacity-30 cursor-not-allowed">
            <span className="text-xs font-bold uppercase tracking-widest border-b border-black">
              Request_Access
            </span>
            <span className="material-symbols-outlined text-sm">lock</span>
          </div>
        </div>
      </div>
    </article>
  );
}
