'use client';

// ---------------------------------------------------------------------------
// LanguageContext — drives the site's language selector.
//
// English and Hindi have full translations. The remaining scheduled Indian
// languages are listed so visitors can pick them in the dropdown; until their
// dictionaries land in translations.js we fall back to the English copy so
// the page is never blank.
// ---------------------------------------------------------------------------

import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './translations';

// Scheduled languages of India + English. `native` is what the dropdown shows.
export const LANGUAGES = [
  { code: 'en', native: 'English' },
  { code: 'hi', native: 'हिंदी' },
  { code: 'bn', native: 'বাংলা' },
  { code: 'gu', native: 'ગુજરાતી' },
  { code: 'mr', native: 'मराठी' },
  { code: 'ta', native: 'தமிழ்' },
  { code: 'te', native: 'తెలుగు' },
  { code: 'kn', native: 'ಕನ್ನಡ' },
  { code: 'ml', native: 'മലയാളം' },
  { code: 'or', native: 'ଓଡ଼ିଆ' },
  { code: 'pa', native: 'ਪੰਜਾਬੀ' },
  { code: 'ur', native: 'اردو' },
  // { code: 'as', native: 'অসমীয়া' },
  // { code: 'sa', native: 'संस्कृतम्' },
  // { code: 'ks', native: 'कॉशुर' },
  // { code: 'kok', native: 'कोंकणी' },
  // { code: 'mai', native: 'मैथिली' },
  // { code: 'mni', native: 'মৈতৈলোন্' },
  // { code: 'ne', native: 'नेपाली' },
  // { code: 'sd', native: 'सिन्धी' },
  // { code: 'sat', native: 'ᱥᱟᱱᱛᱟᱲᱤ' },
  // { code: 'brx', native: 'बड़ो' },
  // { code: 'doi', native: 'डोगरी' },
];

const SUPPORTED_CODES = LANGUAGES.map((l) => l.code);

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [ready, setReady] = useState(false);

  // Restore the visitor's previous language choice on first mount.
  useEffect(() => {
    const stored = localStorage.getItem('kf-lang');
    if (stored && SUPPORTED_CODES.includes(stored)) setLang(stored);
    setReady(true);
  }, []);

  // Keep <html lang="..."> accurate for accessibility / SEO.
  useEffect(() => {
    if (!ready) return;
    localStorage.setItem('kf-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang, ready]);

  // Toggle remains for the legacy en/hi flow; the dropdown uses setLang.
  const toggleLanguage = () => setLang((p) => (p === 'en' ? 'hi' : 'en'));

  const value = {
    lang,
    setLang,
    toggleLanguage,
    languages: LANGUAGES,
    // Fall back to English when a dictionary isn't yet provided for `lang`.
    t: translations[lang] || translations.en,
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
