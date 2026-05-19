'use client';

// ---------------------------------------------------------------------------
// LanguageContext — drives the English / हिंदी toggle for the whole site.
// The chosen language is persisted to localStorage so it survives reloads.
// ---------------------------------------------------------------------------

import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [ready, setReady] = useState(false);

  // Restore the visitor's previous language choice on first mount.
  useEffect(() => {
    const stored = localStorage.getItem('kf-lang');
    if (stored === 'en' || stored === 'hi') setLang(stored);
    setReady(true);
  }, []);

  // Keep <html lang="..."> accurate for accessibility / SEO.
  useEffect(() => {
    if (!ready) return;
    localStorage.setItem('kf-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang, ready]);

  const toggleLanguage = () => setLang((p) => (p === 'en' ? 'hi' : 'en'));

  const value = {
    lang,
    setLang,
    toggleLanguage,
    t: translations[lang], // current language dictionary
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
