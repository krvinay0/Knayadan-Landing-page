'use client';

// A small floating "scroll to top" button that appears after scrolling down.

import { useEffect, useState } from 'react';
import { ArrowRight } from './Icons';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-saffron-500 to-rose-500 text-white shadow-warm transition-transform hover:scale-110"
    >
      <ArrowRight className="-rotate-90 text-lg" />
    </button>
  );
}
