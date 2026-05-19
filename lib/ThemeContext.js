'use client';

// ---------------------------------------------------------------------------
// ThemeContext — drives the Light / Dark mode toggle.
// Adds or removes the `dark` class on <html>, which Tailwind reads.
// ---------------------------------------------------------------------------

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [ready, setReady] = useState(false);

  // Restore a saved theme, otherwise respect the OS preference.
  useEffect(() => {
    const stored = localStorage.getItem('kf-theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    setReady(true);
  }, []);

  // Reflect the current theme onto <html> and persist it.
  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('kf-theme', theme);
  }, [theme, ready]);

  const toggleTheme = () => setTheme((p) => (p === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
