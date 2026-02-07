import React from 'react';

interface ProjectPlaceholderProps {
  title: string;
  unit: string;
  year: string;
}

export default function ProjectPlaceholder({
  title,
  unit,
  year
}: ProjectPlaceholderProps) {
  return (
    <div className="aspect-video w-full bg-white relative flex items-center justify-center overflow-hidden border border-black/5">
      {/* Grid pattern background - slightly different/denser */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundSize: '10px 10px',
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)'
        }}
      />

      {/* Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black/20"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black/20"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black/20"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black/20"></div>

      {/* Top status */}
      <div className="absolute top-4 w-full flex justify-between px-6 text-[9px] text-black/40 font-bold uppercase tracking-widest z-10">
        <span>
          {unit} {'//'} OFF_GRID
        </span>
        <span>SYS_IDLE</span>
      </div>

      {/* Center 3D Object */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full h-full perspective-1000">
        <div className="relative w-24 h-24 transform-style-3d animate-tumble">
          {/* Missing Asset Icon - 3D Cross */}
          <div
            className="absolute inset-0 border-2 border-black/20 bg-black/5"
            style={{ transform: 'rotateY(45deg)' }}
          ></div>
          <div
            className="absolute inset-0 border-2 border-black/20 bg-black/5"
            style={{ transform: 'rotateY(-45deg)' }}
          ></div>
          <div
            className="absolute inset-0 border-2 border-black/20 bg-black/5"
            style={{ transform: 'rotateX(90deg)' }}
          ></div>

          {/* Warning diagonals */}
          <div
            className="absolute inset-0 border-t border-b border-black/10"
            style={{ transform: 'rotateY(45deg) scale(0.8)' }}
          ></div>
          <div
            className="absolute inset-0 border-l border-r border-black/10"
            style={{ transform: 'rotateY(-45deg) scale(0.8)' }}
          ></div>
        </div>

        {/* Title and status */}
        <div className="text-center mt-2 max-w-[80%]">
          <div className="inline-block border border-black px-4 py-1 text-xs font-bold tracking-[0.2em] uppercase mb-2 bg-white">
            Asset_Missing
          </div>
          <p className="text-[9px] text-black/40 tracking-[0.2em] uppercase mb-1">
            No_Signal
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/80 truncate">
            {title}
          </p>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-4 left-6 text-[9px] text-black/40 font-mono">
        R: 00 G: 00 B: 00
      </div>
      <div className="absolute bottom-4 right-6 text-[9px] text-black/40 font-mono">
        Y: {year} {'//'} HZ: 60.0
      </div>

      {/* CSS for 3D Cube */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .translate-z-12 {
          transform: translateZ(48px);
        }
        @keyframes tumble {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        .animate-tumble {
          animation: tumble 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
