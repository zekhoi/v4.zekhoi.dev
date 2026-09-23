import { ImageResponse } from 'next/og';

export const alt = 'Khoironi Kurnia Syah, Product Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const NAME = ['KHOIRONI', 'KURNIA SYAH'];
const ROLE = 'PRODUCT ENGINEER & AUTOMATION SPECIALIST';
const TAGS = ['FRONTEND', 'BACKEND', 'AUTOMATION', 'DEVOPS', 'AI_SYSTEMS'];

// Downloads only the glyphs in `text`. Returns null on failure so a network
// problem falls back to the default font instead of failing the build.
async function loadGoogleFont(family: string, weight: number, text: string) {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const src = css.match(
      /src: url\((.+?)\) format\('(opentype|truetype)'\)/
    )?.[1];
    if (!src) return null;

    const res = await fetch(src);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const monoText = [
    'ZEKHOI.DEV',
    'SYS_VER: 4.0.0 / PROD_BUILD',
    'STATUS: NODE_ACTIVE',
    ROLE,
    ...TAGS,
    ' // '
  ].join('');

  const [display, mono, monoBold] = await Promise.all([
    loadGoogleFont('Space Grotesk', 700, NAME.join('')),
    loadGoogleFont('Geist Mono', 400, monoText),
    loadGoogleFont('Geist Mono', 700, monoText)
  ]);

  const fonts = [
    display && { name: 'Space Grotesk', data: display, weight: 700 as const },
    mono && { name: 'Geist Mono', data: mono, weight: 400 as const },
    monoBold && { name: 'Geist Mono', data: monoBold, weight: 700 as const }
  ].filter((font) => font !== null);

  return new ImageResponse(
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 56,
        backgroundColor: '#ffffff',
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        color: '#000000',
        fontFamily: 'Geist Mono'
      }}
    >
      {/* Blueprint rings, as in the site background */}
      <svg
        width="560"
        height="560"
        viewBox="0 0 560 560"
        style={{ position: 'absolute', right: -80, top: 35 }}
      >
        <g fill="none" stroke="#E5E5E5" strokeWidth="1.5">
          <circle cx="280" cy="280" r="270" strokeDasharray="10 10" />
          <circle cx="280" cy="280" r="190" />
          <circle cx="280" cy="280" r="95" />
          <line x1="0" y1="280" x2="560" y2="280" strokeDasharray="3 3" />
          <line x1="280" y1="0" x2="280" y2="560" strokeDasharray="3 3" />
        </g>
      </svg>

      <div style={{ display: 'flex' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '18px 22px',
            border: '2px solid #000000',
            backgroundColor: '#ffffff'
          }}
        >
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>
            ZEKHOI.DEV
          </div>
          <div
            style={{ marginTop: 6, fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}
          >
            SYS_VER: 4.0.0 / PROD_BUILD
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            marginBottom: 24,
            fontSize: 18,
            letterSpacing: 9,
            color: 'rgba(0, 0, 0, 0.45)'
          }}
        >
          {ROLE}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Space Grotesk',
            fontSize: 128,
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: -6,
            textShadow:
              '6px 0 0 rgba(255, 0, 0, 0.12), -3px -6px 0 rgba(0, 255, 0, 0.12), 3px 6px 0 rgba(0, 0, 255, 0.12)'
          }}
        >
          {NAME.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 16
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '10px 14px',
            border: '1px solid rgba(0, 0, 0, 0.15)',
            backgroundColor: '#ffffff'
          }}
        >
          <span>STATUS:</span>
          <span style={{ marginLeft: 10, fontWeight: 700, color: '#0d59f2' }}>
            NODE_ACTIVE
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            letterSpacing: 2,
            color: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          {TAGS.join(' // ')}
        </div>
      </div>
    </div>,
    { ...size, fonts }
  );
}
