'use client';

// Section 9 — Legal Documents & Transparency.
// A grid where donors can view / download the foundation's statutory papers.

import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { DocIcon, EyeIcon, DownloadIcon, ShieldIcon } from './Icons';

export default function LegalDocs() {
  const { t } = useLanguage();
  const lg = t.legal;

  return (
    <section id="legal" className="section-pad">
      <div className="container-kf">
        <SectionHeading
          eyebrow={lg.tag}
          title={lg.title}
          subtitle={lg.subtitle}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lg.items.map((doc, i) => (
            <Reveal key={doc.name} delay={(i % 3) * 0.1}>
              <article className="card-kf flex h-full flex-col hover:shadow-warm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-saffron-100 text-2xl text-saffron-600 dark:bg-ink-800 dark:text-gold-300">
                    <DocIcon />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold leading-snug">
                      {doc.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-900/65 dark:text-ink-100/60">
                  {doc.desc}
                </p>
                {/* Actions. `#` placeholders — point href at the real PDFs. */}
                <div className="mt-5 flex gap-3">
                  <a
                    href="#legal"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-saffron-200 py-2 text-xs font-semibold text-saffron-700 transition-colors hover:bg-saffron-100 dark:border-ink-800 dark:text-gold-300 dark:hover:bg-ink-800"
                  >
                    <EyeIcon className="text-sm" /> {lg.view}
                  </a>
                  <a
                    href="#legal"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-saffron-500 to-rose-500 py-2 text-xs font-semibold text-white"
                  >
                    <DownloadIcon className="text-sm" /> {lg.download}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Reassurance strip */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex items-center justify-center gap-3 rounded-2xl bg-saffron-100 px-6 py-4 text-center text-sm font-medium text-saffron-800 dark:bg-ink-800 dark:text-gold-200">
            <ShieldIcon className="shrink-0 text-lg" />
            {t.footer.taxNote}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
