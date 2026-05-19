'use client';

// Brand mark for Kanyadan Foundation — a stylised lotus + protective hands.
// Pure SVG so it stays crisp at every size and adapts to the theme.

export default function Logo({ className = 'h-11 w-11' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="kf-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4861a" />
          <stop offset="55%" stopColor="#d23f6c" />
          <stop offset="100%" stopColor="#c08f37" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="url(#kf-logo)" />
      {/* Cupping hands */}
      <path
        d="M14 40c2 6 9 11 18 11s16-5 18-11c-3 1-6 1-8-1-3 3-8 4-10 4s-7-1-10-4c-2 2-5 2-8 1z"
        fill="#fff"
        opacity="0.95"
      />
      {/* Lotus petals */}
      <path d="M32 14c-3 5-3 11 0 16 3-5 3-11 0-16z" fill="#fff" />
      <path d="M32 18c-6 3-9 8-9 14 5-3 9-8 9-14z" fill="#fff" opacity="0.85" />
      <path d="M32 18c6 3 9 8 9 14-5-3-9-8-9-14z" fill="#fff" opacity="0.85" />
    </svg>
  );
}
