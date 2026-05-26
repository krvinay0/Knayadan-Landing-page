'use client';

// Section 12 — Footer: brand note, quick links, programmes, social handles,
// newsletter, the 80G tax note, and legal disclaimers.

import { useLanguage } from '@/lib/LanguageContext';
import Logo from './Logo';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
  ArrowRight,
} from './Icons';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'goals', label: t.nav.goals },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'news', label: t.nav.news },
    { id: 'contact', label: t.nav.contact },
  ];

  const programmes = t.goals.items.map((i) => i.title);

  const socials = [
    { Icon: FacebookIcon, label: 'Facebook', href: '#' },
    { Icon: InstagramIcon, label: 'Instagram', href: '#' },
    { Icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
    { Icon: YoutubeIcon, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-ink-950 text-ink-100">
      {/* Tax-exemption highlight strip */}
      <div className="bg-gradient-to-r from-saffron-500 to-rose-500 py-3 text-center text-sm font-semibold text-white">
        {t.footer.taxNote}
      </div>

      <div className="container-kf grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + about */}
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-serif text-lg font-bold">{t.nav.brand}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-100/65">
            {t.footer.about}
          </p>
          {/* Newsletter */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5"
            aria-label={t.footer.newsletter}
          >
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold-300">
              {t.footer.newsletter}
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                required
                placeholder={t.footer.emailPlaceholder}
                className="w-full rounded-lg border border-ink-800 bg-ink-900 px-3 py-2 text-sm outline-none focus:border-saffron-400"
              />
              <button
                type="submit"
                className="flex shrink-0 items-center gap-1 rounded-lg bg-gradient-to-r from-saffron-500 to-rose-500 px-3 py-2 text-sm font-semibold text-white"
              >
                <ArrowRight className="text-sm" />
              </button>
            </div>
          </form>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="font-serif text-base font-bold text-gold-300">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-ink-100/70 transition-colors hover:text-saffron-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Programmes */}
        <div>
          <h3 className="font-serif text-base font-bold text-gold-300">
            {t.footer.programmes}
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {programmes.map((p) => (
              <li key={p}>
                <a
                  href="#goals"
                  className="text-ink-100/70 transition-colors hover:text-saffron-400"
                >
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#legal"
                className="text-ink-100/70 transition-colors hover:text-saffron-400"
              >
                {t.nav.legal}
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-serif text-base font-bold text-gold-300">
            {t.footer.connect}
          </h3>
          <div className="mt-4 flex gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-lg text-ink-100/80 transition-colors hover:bg-gradient-to-r hover:from-saffron-500 hover:to-rose-500 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
          <a
            href="#donate"
            className="btn-primary mt-6 w-full"
          >
            {t.nav.donate}
          </a>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-ink-800">
        <div className="container-kf py-6">
          <p className="text-xs leading-relaxed text-ink-100/45">
            {t.footer.disclaimer}
          </p>
          <div className="mt-3 flex flex-col items-center justify-between gap-2 text-xs text-ink-100/55 sm:flex-row">
            <span>{t.footer.rights}</span>
            <span>{t.footer.madeWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
