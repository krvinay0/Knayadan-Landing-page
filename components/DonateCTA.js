'use client';

// Donate band — the primary conversion section, targeted by every "Donate Now"
// link on the site (anchor id="donate").

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import { HeartIcon, ShieldIcon, CheckIcon } from './Icons';

export default function DonateCTA() {
  const { t } = useLanguage();
  const d = t.donate;
  const [selected, setSelected] = useState(2); // default highlight

  const trust = [d.trust1, d.trust2, d.trust3, d.trust4];

  return (
    <section
      id="donate"
      className="relative overflow-hidden bg-gradient-to-br from-saffron-500 via-rose-500 to-gold-500 py-16 text-white sm:py-20"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-white/10" />

      <div className="container-kf relative grid items-center gap-10 lg:grid-cols-2">
        {/* Message ------------------------------------------------------- */}
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest">
              {d.tag}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
              {d.title}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
              {d.desc}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
              {trust.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <CheckIcon className="shrink-0 text-base" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Donation card ------------------------------------------------- */}
        <Reveal delay={0.2}>
          <div className="rounded-3xl bg-white p-7 text-ink-900 shadow-2xl dark:bg-ink-900 dark:text-ink-100">
            <p className="mb-4 text-sm font-semibold text-ink-900/70 dark:text-ink-100/70">
              {d.amountNote}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {d.amounts.map((amt, i) => (
                <button
                  key={amt}
                  onClick={() => setSelected(i)}
                  className={`rounded-xl border-2 py-3 font-serif text-lg font-bold transition-all ${
                    selected === i
                      ? 'border-transparent bg-gradient-to-r from-saffron-500 to-rose-500 text-white shadow-warm'
                      : 'border-saffron-200 hover:border-saffron-400 dark:border-ink-700'
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>

            {/* Demo CTAs — connect to a payment gateway (Razorpay etc.). */}
            <a
              href="#donate"
              className="btn-primary mt-5 w-full text-base"
            >
              <HeartIcon className="text-base" />
              {d.cta} · {d.amounts[selected]}
            </a>
            <a
              href="#donate"
              className="mt-3 block text-center text-sm font-semibold text-saffron-600 hover:underline dark:text-gold-300"
            >
              {d.ctaSecondary}
            </a>

            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-ink-900/55 dark:text-ink-100/55">
              <ShieldIcon className="text-sm" />
              {t.footer.taxNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
