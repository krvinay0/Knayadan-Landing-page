// Lightweight inline SVG icon set — keeps the project dependency-free for icons.
// Every icon inherits `currentColor` so it adapts to light/dark automatically.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  width: '1em',
  height: '1em',
};

export const SunIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

export const GlobeIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const HeartIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M19 8.4c0 4.6-7 9.6-7 9.6s-7-5-7-9.6A4 4 0 0 1 12 6a4 4 0 0 1 7 2.4z" />
  </svg>
);

export const RingIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="14" r="6" />
    <path d="M9 8l3-4 3 4" />
  </svg>
);

export const ShieldIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
    <path d="M9.5 12l1.8 1.8L15 10" />
  </svg>
);

export const BookIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5a2 2 0 0 1 2-2h7v16H6a2 2 0 0 0-2 2z" />
    <path d="M20 5a2 2 0 0 0-2-2h-5v16h5a2 2 0 0 1 2 2z" />
  </svg>
);

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const DocIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

export const EyeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const DownloadIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
  </svg>
);

export const PinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const PhoneIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2.1z" />
  </svg>
);

export const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

export const CalendarIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

export const TrophyIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0z" />
    <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 18h6M10 14h4v4h-4z" />
  </svg>
);

export const StarIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...p}>
    <path d="M12 2l3 6.3 6.9.9-5 4.8 1.3 6.8L12 17.8 5.8 20.8 7 14 2 9.2l6.9-.9z" />
  </svg>
);

export const FacebookIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
  </svg>
);

export const InstagramIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedInIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...p}>
    <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.3 2.3-2.6 4.7-2.6 5 0 6 3.3 6 7.6V24h-5v-7.3c0-1.7 0-4-2.4-4s-2.8 1.9-2.8 3.9V24H8z" />
  </svg>
);

export const YoutubeIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...p}>
    <path d="M23 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18.8 4.7 12 4.7 12 4.7s-6.8 0-8.5.5A3 3 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z" />
  </svg>
);

export const PlayIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...p}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// Maps the string keys used in translations to actual icon components.
export const goalIcons = { ring: RingIcon, shield: ShieldIcon, book: BookIcon };
