'use client';

// Consistent section header: eyebrow label + gradient title + optional subtitle.

import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : ''} mb-12`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-[2.6rem]">
          <span className="gradient-text">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-base leading-relaxed text-ink-900/70 dark:text-ink-100/65">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
