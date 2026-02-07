'use client';

import React, { useEffect } from 'react';

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
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        as="style"
      />
      <link
        id="material-symbols"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        media="print"
        onLoad={(e) => {
          e.currentTarget.media = 'all';
        }}
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </noscript>
    </>
  );
}
