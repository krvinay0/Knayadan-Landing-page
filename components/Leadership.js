'use client';

// Section 3 — Message from the Leadership / Desk.
// A warm, personal note from the founder that builds emotional trust.

import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import { CheckIcon, HeartIcon } from './Icons';

export default function Leadership() {
  const { t } = useLanguage();
  const l = t.leadership;

  return (
    <section id="about" className="section-pad">
      <div className="container-kf grid items-center gap-12 lg:grid-cols-12">
        {/* Portrait -------------------------------------------------------- */}
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <img
              src="/assets/founder.png"
              alt={l.sign || 'Founder'}
              className="object-cover aspect-[4/5] w-full rounded-2xl shadow-warm"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-gradient-to-r from-saffron-500 to-rose-500 px-6 py-4 text-white shadow-warm">
              <p className="font-serif text-lg font-bold">{l.sign}</p>
              <p className="text-xs opacity-90">{l.role}</p>
            </div>
          </div>
        </Reveal>

        {/* Message --------------------------------------------------------- */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">{l.tag}</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              <span className="gradient-text">{l.title}</span>
            </h2>
          </Reveal>

          <div className="mt-5 space-y-4 text-[0.97rem] leading-relaxed text-ink-900/75 dark:text-ink-100/70">
            <Reveal delay={0.14}>
              <p className="border-l-4 border-saffron-300 pl-4 font-serif text-lg italic text-ink-900/80 dark:text-ink-100/75">
                “{l.body1}”
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>{l.body2}</p>
            </Reveal>
            <Reveal delay={0.26}>
              <p>{l.body3}</p>
            </Reveal>
          </div>

          {/* Core values */}
          <Reveal delay={0.32}>
            <ul className="mt-7 flex flex-wrap gap-3">
              {l.values.map((v) => (
                <li
                  key={v}
                  className="flex items-center gap-2 rounded-full bg-saffron-100 px-4 py-2 text-sm font-semibold text-saffron-700 dark:bg-ink-800 dark:text-gold-300"
                >
                  <CheckIcon className="text-base" />
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
