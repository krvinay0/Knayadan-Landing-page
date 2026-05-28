'use client';

// Section 7 — Media Gallery. Filterable masonry grid of photos / video clips.

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ImagePlaceholder from './ImagePlaceholder';
import { RingIcon, ShieldIcon, BookIcon, PlayIcon } from './Icons';

const catIcon = { weddings: RingIcon, health: ShieldIcon, events: BookIcon };

// Image mappings by category
const categoryImages = {
  weddings: [
    '/assets/weddings/weddings_1.png',
    '/assets/weddings/weddings_2.png',
    '/assets/weddings/weddings_3.png',
    '/assets/weddings/weddings_4.png',
    '/assets/weddings/weddings_5.png',
  ],
  events: [
    '/assets/distribution_drives/distribution_drives_1.png',
    '/assets/distribution_drives/distribution_drives_2.png',
    '/assets/distribution_drives/distribution_drives_3.png',
  ],
};

export default function Gallery() {
  const { t } = useLanguage();
  const g = t.gallery;
  const [filter, setFilter] = useState('all');

  // Filter keys map to the `filters` dictionary in translations.
  const filterKeys = ['all', 'weddings', 'health', 'events'];

  const items = g.items
    .map((it, idx) => ({ ...it, idx })) // keep original index for gradient variety
    .filter((it) => filter === 'all' || it.cat === filter);

  return (
    <section id="gallery" className="section-pad">
      <div className="container-kf">
        <SectionHeading eyebrow={g.tag} title={g.title} subtitle={g.subtitle} />

        {/* Filter buttons ------------------------------------------------- */}
        <Reveal>
          <div className="mb-9 flex flex-wrap justify-center gap-3">
            {filterKeys.map((key) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${filter === key
                  ? 'bg-gradient-to-r from-saffron-500 to-rose-500 text-white shadow-warm'
                  : 'border border-saffron-200 text-saffron-700 hover:bg-saffron-100 dark:border-ink-800 dark:text-gold-300 dark:hover:bg-ink-800'
                  }`}
              >
                {g.filters[key]}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry grid (CSS columns) ------------------------------------- */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {items.map((it, i) => {
            const Icon = catIcon[it.cat] || RingIcon;
            // Vary the height for an organic masonry rhythm.
            const aspect = ['aspect-square', 'aspect-[4/5]', 'aspect-[4/3]'][
              it.idx % 3
            ];

            // Get image for this category (cycling through available images)
            const images = categoryImages[it.cat] || [];
            const imageIndex = it.idx % Math.max(images.length, 1);
            const imageSrc = images[imageIndex];

            return (
              <Reveal key={`${filter}-${it.idx}`} delay={(i % 6) * 0.07}>
                <figure className="group relative break-inside-avoid overflow-hidden rounded-2xl shadow-card">
                  {imageSrc ? (
                    <div className={`relative w-full ${aspect} overflow-hidden rounded-2xl bg-ink-100 dark:bg-ink-900/60`}>
                      <Image
                        src={imageSrc}
                        alt={it.caption}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      variant={it.idx}
                      icon={Icon}
                      className={`w-full ${aspect}`}
                      rounded="rounded-none"
                    />
                  )}
                  {/* Video clip indicator on every third tile */}
                  {it.idx % 3 === 1 && (
                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-saffron-600 shadow">
                      <PlayIcon className="text-sm" />
                    </span>
                  )}
                  {/* Caption overlay */}
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-ink-950/85 to-transparent p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {it.caption}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
