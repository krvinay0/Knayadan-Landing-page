'use client';

// Section 6 — Supporters & Regular Donors.
// A moving marquee of corporate CSR partners + a "Wall of Fame" donor grid.

import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { StarIcon, HeartIcon } from './Icons';

// Placeholder corporate partners — names are language-neutral brand names.
const partners = [
  'Bharat Steel CSR',
  'Ganga Textiles',
  'Sunrise Pharma',
  'Maithili Bank',
  'Aastha Motors',
  'Vidya Tech Labs',
];

export default function Supporters() {
  const { t } = useLanguage();
  const s = t.supporters;

  return (
    <section
      id="supporters"
      className="section-pad bg-white dark:bg-ink-900"
    >
      <div className="container-kf">
        <SectionHeading eyebrow={s.tag} title={s.title} subtitle={s.subtitle} />

        {/* Corporate CSR partners — infinite marquee ---------------------- */}
        <Reveal>
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-saffron-600 dark:text-gold-300">
            {s.corporateTag}
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-saffron-100 bg-saffron-50/60 py-6 dark:border-ink-800 dark:bg-ink-950/60">
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-saffron-50/90 to-transparent dark:from-ink-900" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-saffron-50/90 to-transparent dark:from-ink-900" />
            {/* The track is duplicated so the loop is seamless. */}
            <div className="marquee-track flex w-max animate-marquee items-center gap-12 px-6">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="flex shrink-0 items-center gap-2 font-serif text-lg font-bold text-ink-900/55 dark:text-ink-100/55"
                >
                  <StarIcon className="text-base text-gold-400" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Wall of Fame — individual donors ------------------------------- */}
        <Reveal delay={0.1}>
          <p className="mb-5 mt-12 text-center text-sm font-bold uppercase tracking-widest text-saffron-600 dark:text-gold-300">
            {s.wallTag}
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.donors.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.1}>
              <article className="card-kf flex items-center gap-4 bg-saffron-50/60 dark:bg-ink-950/60">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-saffron-500 text-white">
                  <HeartIcon className="text-lg" />
                </div>
                <div>
                  <h3 className="font-serif font-bold leading-tight">{d.name}</h3>
                  <p className="text-xs text-ink-900/60 dark:text-ink-100/55">
                    {d.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
