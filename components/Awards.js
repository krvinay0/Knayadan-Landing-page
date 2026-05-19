'use client';

// Section 8 — Awards & Recognitions. Certificate/badge cards for social impact.

import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { TrophyIcon, StarIcon } from './Icons';

export default function Awards() {
  const { t } = useLanguage();
  const a = t.awards;

  return (
    <section
      id="awards"
      className="section-pad bg-white dark:bg-ink-900"
    >
      <div className="container-kf">
        <SectionHeading eyebrow={a.tag} title={a.title} subtitle={a.subtitle} />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {a.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.1}>
              <article className="card-kf group relative h-full overflow-hidden text-center hover:shadow-warm">
                {/* Decorative ribbon corner */}
                <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-br from-saffron-400 to-rose-400 opacity-70" />

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-saffron-500 text-3xl text-white shadow-warm transition-transform duration-300 group-hover:scale-110">
                  <TrophyIcon />
                </div>

                <p className="mt-4 font-serif text-2xl font-bold text-saffron-600 dark:text-gold-300">
                  {item.year}
                </p>
                <h3 className="mt-1 font-serif text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-ink-900/60 dark:text-ink-100/55">
                  {item.org}
                </p>

                {/* Star rating flourish */}
                <div className="mt-3 flex justify-center gap-0.5 text-gold-400">
                  {[...Array(5)].map((_, s) => (
                    <StarIcon key={s} className="text-xs" />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
