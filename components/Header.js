'use client';

// Sticky header: brand, primary navigation, language + theme toggles, and the
// always-visible "Donate Now" CTA highlighting the 80G tax benefit.

import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { useTheme } from '@/lib/ThemeContext';
import Logo from './Logo';
import {
  SunIcon,
  MoonIcon,
  GlobeIcon,
  MenuIcon,
  CloseIcon,
  HeartIcon,
} from './Icons';

export default function Header() {
  const { t, lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add a shadow + solid background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Navigation links — `id` matches the section anchors in app/page.js.
  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'goals', label: t.nav.goals },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'legal', label: t.nav.legal },
    { id: 'news', label: t.nav.news },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-card backdrop-blur dark:bg-ink-950/95'
          : 'bg-transparent'
      }`}
    >
      <div className="container-kf flex h-[4.75rem] items-center justify-between gap-4">
        {/* Brand ----------------------------------------------------------- */}
        <a href="#home" className="flex items-center gap-3" aria-label={t.nav.brand}>
          <Logo />
          <span className="leading-tight">
            <span className="block font-serif text-base font-bold sm:text-lg">
              {t.nav.brand}
            </span>
            <span className="block text-[0.68rem] font-medium uppercase tracking-wider text-saffron-600 dark:text-gold-300">
              {t.nav.brandTag}
            </span>
          </span>
        </a>

        {/* Desktop navigation --------------------------------------------- */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink-900/80 transition-colors hover:bg-saffron-100 hover:text-saffron-700 dark:text-ink-100/80 dark:hover:bg-ink-800 dark:hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Controls -------------------------------------------------------- */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-saffron-200 px-3 py-2 text-sm font-semibold text-saffron-700 transition-colors hover:bg-saffron-100 dark:border-ink-800 dark:text-gold-300 dark:hover:bg-ink-800"
            aria-label={`Switch language to ${t.common.langLabel}`}
          >
            <GlobeIcon className="text-base" />
            <span>{t.common.langLabel}</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full border border-saffron-200 p-2.5 text-saffron-700 transition-colors hover:bg-saffron-100 dark:border-ink-800 dark:text-gold-300 dark:hover:bg-ink-800"
            aria-label={theme === 'dark' ? t.common.themeLight : t.common.themeDark}
          >
            {theme === 'dark' ? (
              <SunIcon className="text-base" />
            ) : (
              <MoonIcon className="text-base" />
            )}
          </button>

          {/* Donate CTA (hidden on the smallest screens; in the mobile menu instead) */}
          <a href="#donate" className="btn-primary hidden sm:inline-flex">
            <HeartIcon className="text-base" />
            <span className="flex flex-col items-start leading-none">
              <span>{t.nav.donate}</span>
              <span className="text-[0.6rem] font-medium opacity-90">
                {t.nav.donateNote}
              </span>
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-full border border-saffron-200 p-2.5 text-saffron-700 lg:hidden dark:border-ink-800 dark:text-gold-300"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <CloseIcon className="text-base" />
            ) : (
              <MenuIcon className="text-base" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer ----------------------------------------- */}
      {menuOpen && (
        <nav
          className="border-t border-saffron-100 bg-white px-5 py-4 lg:hidden dark:border-ink-800 dark:bg-ink-950"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium hover:bg-saffron-100 dark:hover:bg-ink-800"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#donate"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            <HeartIcon className="text-base" />
            {t.nav.donate} · {t.nav.donateNote}
          </a>
        </nav>
      )}
    </header>
  );
}
