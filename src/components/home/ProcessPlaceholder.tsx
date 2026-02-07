interface ProcessPlaceholderProps {
  title: string;
  unit: string;
  year: string;
}

export default function ProcessPlaceholder({
  title,
  unit,
  year
}: ProcessPlaceholderProps) {
  return (
    <div className="aspect-video w-full bg-white relative flex items-center justify-center overflow-hidden border border-black/5">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundSize: '20px 20px',
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)'
        }}
      />

      {/* Top left status */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 text-[9px] text-black/40 font-bold uppercase tracking-widest z-10">
        <span>{unit}</span>
        <span>YEAR_{year}</span>
      </div>

      {/* Top right status */}
      <div className="absolute top-4 right-4 text-[9px] text-black/40 font-bold uppercase tracking-widest z-10">
        <span>LOADING..</span>
      </div>

      {/* Center animated element */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full h-full">
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div
            className="absolute inset-0 border border-black/20 animate-spin"
            style={{ animationDuration: '8s' }}
          ></div>

          {/* Middle rotating ring (reverse) */}
          <div
            className="absolute inset-4 border border-black/40"
            style={{
              animation: 'spin 12s linear infinite reverse'
            }}
          ></div>

          {/* Inner pulsing border */}
          <div className="absolute inset-8 border-2 border-black animate-pulse"></div>

          {/* Center dot */}
          <div className="w-1 h-1 bg-black"></div>
        </div>

        {/* Title and status */}
        <div className="text-center">
          <div className="bg-black text-white px-6 py-2 text-sm font-bold tracking-[0.3em] uppercase mb-2">
            {title}
          </div>
          <p className="text-[9px] text-black/40 tracking-[0.2em] uppercase">
            FETCHING_PREVIEW
          </p>
        </div>
      </div>

      {/* Bottom progress indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
        <div className="w-1 h-1 bg-black/20"></div>
        <div className="w-1 h-1 bg-black/40 animate-pulse"></div>
        <div className="w-1 h-1 bg-black/20"></div>
      </div>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
