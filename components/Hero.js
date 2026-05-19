'use client';

// Hero — the emotional first impression: headline, dual CTAs, and impact stats.

import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import ImagePlaceholder from './ImagePlaceholder';
import { HeartIcon, ArrowRight, RingIcon } from './Icons';

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { val: t.hero.stat1Val, label: t.hero.stat1 },
    { val: t.hero.stat2Val, label: t.hero.stat2 },
    { val: t.hero.stat3Val, label: t.hero.stat3 },
    { val: t.hero.stat4Val, label: t.hero.stat4 },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[4.75rem]"
    >
      {/* Soft warm background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-saffron-100 via-saffron-50 to-saffron-50 dark:from-ink-900 dark:via-ink-950 dark:to-ink-950" />
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/20" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl dark:bg-gold-900/20" />

      <div className="container-kf grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">
        {/* Copy ------------------------------------------------------------ */}
        <div>
          <Reveal>
            <span className="eyebrow">{t.hero.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.12] sm:text-5xl md:text-6xl">
              <span className="gradient-text">{t.hero.headline}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-900/75 sm:text-lg dark:text-ink-100/70">
              {t.hero.subline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#donate" className="btn-primary">
                <HeartIcon className="text-base" />
                {t.hero.ctaPrimary}
              </a>
              <a href="#contact" className="btn-secondary">
                <RingIcon className="text-base" />
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>

          {/* Impact stats */}
          <Reveal delay={0.4}>
            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-serif text-2xl font-bold text-saffron-600 sm:text-3xl dark:text-gold-300">
                    {s.val}
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-ink-900/65 dark:text-ink-100/60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Hero image ------------------------------------------------------ */}
        <Reveal delay={0.25}>
          <div className="relative">
            <ImagePlaceholder
              variant={0}
              icon={HeartIcon}
              className="aspect-[4/5] w-full shadow-warm"
            />
            {/* Floating caption card */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-saffron-100 bg-white/95 p-4 shadow-card backdrop-blur sm:left-8 sm:right-8 dark:border-ink-800 dark:bg-ink-900/95">
              <p className="flex items-center gap-2 text-sm font-medium">
                <ArrowRight className="shrink-0 text-saffron-500" />
                {t.hero.imageCaption}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
