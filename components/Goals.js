'use client';

// Section 4 — Our Goals & Mission. Three-pillar grid + mission statement.

import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { goalIcons, StarIcon } from './Icons';

export default function Goals() {
  const { t } = useLanguage();
  const g = t.goals;

  return (
    <section
      id="goals"
      className="section-pad bg-white dark:bg-ink-900"
    >
      <div className="container-kf">
        <SectionHeading
          eyebrow={g.tag}
          title={g.title}
          subtitle={g.subtitle}
        />

        {/* Three pillars -------------------------------------------------- */}
        <div className="grid gap-7 md:grid-cols-3">
          {g.items.map((item, i) => {
            const Icon = goalIcons[item.icon] || StarIcon;
            return (
              <Reveal key={item.title} delay={i * 0.12}>
                <article className="card-kf group h-full bg-saffron-50/60 hover:shadow-warm dark:bg-ink-950/60">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-rose-500 text-2xl text-white shadow-warm transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-900/70 dark:text-ink-100/65">
                    {item.desc}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Mission statement ---------------------------------------------- */}
        <Reveal delay={0.2}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-saffron-500 via-rose-500 to-gold-500 p-[2px]">
            <div className="rounded-[1.4rem] bg-white px-8 py-10 text-center dark:bg-ink-900">
              <span className="eyebrow">{g.missionTag}</span>
              <p className="mx-auto mt-4 max-w-3xl font-serif text-xl font-medium leading-relaxed sm:text-2xl">
                {g.missionText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
