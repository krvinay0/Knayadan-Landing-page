'use client';

// Section 10 — News & Events. Upcoming events + latest news feed.

import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ImagePlaceholder from './ImagePlaceholder';
import { CalendarIcon, PinIcon, ArrowRight, BookIcon } from './Icons';

export default function NewsEvents() {
  const { t } = useLanguage();
  const n = t.news;

  return (
    <section
      id="news"
      className="section-pad bg-white dark:bg-ink-900"
    >
      <div className="container-kf">
        <SectionHeading eyebrow={n.tag} title={n.title} subtitle={n.subtitle} />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Upcoming events --------------------------------------------- */}
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="mb-5 flex items-center gap-2 font-serif text-xl font-bold">
                <CalendarIcon className="text-saffron-500" />
                {n.upcomingTag}
              </h3>
            </Reveal>
            <div className="space-y-4">
              {n.events.map((ev, i) => (
                <Reveal key={ev.title} delay={i * 0.1}>
                  <article className="card-kf flex gap-4 bg-saffron-50/60 hover:shadow-warm dark:bg-ink-950/60">
                    {/* Date chip */}
                    <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-rose-500 px-3 py-2 text-center text-white">
                      <span className="text-[0.65rem] font-semibold uppercase leading-none">
                        {ev.date.split(' ')[1]}
                      </span>
                      <span className="font-serif text-xl font-bold leading-tight">
                        {ev.date.split(' ')[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-serif font-bold leading-snug">
                        {ev.title}
                      </h4>
                      <p className="mt-1 flex items-center gap-1 text-xs text-saffron-600 dark:text-gold-300">
                        <PinIcon className="text-sm" /> {ev.place}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-ink-900/65 dark:text-ink-100/60">
                        {ev.desc}
                      </p>
                      <a
                        href="#contact"
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-rose-500 hover:gap-2"
                      >
                        {n.register} <ArrowRight className="text-sm" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Latest news ------------------------------------------------- */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="mb-5 flex items-center gap-2 font-serif text-xl font-bold">
                <BookIcon className="text-saffron-500" />
                {n.latestTag}
              </h3>
            </Reveal>
            <div className="space-y-5">
              {n.articles.map((art, i) => (
                <Reveal key={art.title} delay={i * 0.1}>
                  <article className="card-kf group flex flex-col gap-4 hover:shadow-warm sm:flex-row">
                    <ImagePlaceholder
                      variant={i + 2}
                      icon={BookIcon}
                      className="aspect-[4/3] w-full shrink-0 sm:w-44"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-saffron-600 dark:text-gold-300">
                        {art.date}
                      </p>
                      <h4 className="mt-1 font-serif text-lg font-bold leading-snug">
                        {art.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink-900/65 dark:text-ink-100/60">
                        {art.excerpt}
                      </p>
                      <a
                        href="#news"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-rose-500 hover:gap-2"
                      >
                        {n.readMore} <ArrowRight className="text-sm" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
