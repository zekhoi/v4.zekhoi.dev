'use client';

import React, { useEffect } from 'react';

// Only these icons are downloaded (~6 KB instead of ~1.1 MB for the full set).
// Add the name here when you use a new icon, or it renders as plain text.
const ICON_NAMES = [
  'arrow_forward',
  'arrow_right_alt',
  'code',
  'dns',
  'download',
  'expand_more',
  'layers',
  'lock',
  'memory',
  'north_east',
  'restart_alt',
  'security',
  'smart_toy',
  'speed',
  'terminal',
  'warning'
];

// Google Fonts requires icon_names in alphabetical order
const FONT_URL = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&icon_names=${[...ICON_NAMES].sort().join(',')}&display=swap`;

export default function MaterialSymbolsLoader() {
  useEffect(() => {
    // Safety check: ensure the stylesheet is enabled after hydration
    // This fixes cases where the onLoad event might be missed or behavior differs in some browsers
    const link = document.getElementById('material-symbols');
    if (link instanceof HTMLLinkElement && link.media === 'print') {
      link.media = 'all';
    }
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preload" href={FONT_URL} as="style" />
      <link
        id="material-symbols"
        rel="stylesheet"
        href={FONT_URL}
        media="print"
        onLoad={(e) => {
          e.currentTarget.media = 'all';
        }}
      />
      <noscript>
        <link rel="stylesheet" href={FONT_URL} />
      </noscript>
    </>
  );
}
