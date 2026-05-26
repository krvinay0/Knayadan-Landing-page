'use client';

// Brand mark for Shubhsaathi Foundation. Only Hindi gets a dedicated logo;
// every other language shows the English logo by default.

import { useLanguage } from '@/lib/LanguageContext';

export default function Logo({ className = 'h-16 w-16' }) {
  const { lang } = useLanguage();
  const src =
    lang === 'hi'
      ? '/assets/logo/logo_hindi.png'
      : '/assets/logo/logo_english.png';

  return (
    <img
      src={src}
      alt="Shubhsaathi Foundation"
      className={`${className} object-contain`}
    />
  );
}
