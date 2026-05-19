import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Kanyadan Foundation — Empowering Daughters, Uplifting Families',
  description:
    'Kanyadan Foundation is a registered Section 8 non-profit supporting underprivileged families with dignified marriages, subsidised health insurance for women, and skill development. Donations are 80G tax-exempt.',
  keywords: [
    'Kanyadan Foundation',
    'NGO Bihar',
    'donate marriage',
    '80G tax exemption',
    'women empowerment',
    'health insurance subsidy',
  ],
  openGraph: {
    title: 'Kanyadan Foundation',
    description: 'Empowering Daughters, Uplifting Families.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#f4861a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          Inline pre-paint script: applies the saved theme before React
          hydrates, which prevents a flash of the wrong colour scheme.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('kf-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);var l=localStorage.getItem('kf-lang');if(l)document.documentElement.setAttribute('lang',l);}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
