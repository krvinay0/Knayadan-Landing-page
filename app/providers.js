'use client';

// Wraps the app in both global contexts. Kept as a separate client component
// so the root layout can remain a server component.

import { ThemeProvider } from '@/lib/ThemeContext';
import { LanguageProvider } from '@/lib/LanguageContext';

export default function Providers({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
