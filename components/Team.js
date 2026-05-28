'use client';

// Section 5 — About the Employees & Team. Profile cards build human connection.

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ImagePlaceholder from './ImagePlaceholder';
import { HeartIcon } from './Icons';

// Keyed by member position, not name: member names are localized in every
// language, so a name-keyed lookup only matched English. Order matches the
// `team.members` array in lib/translations/*.js.
const teamPhotos = [
  '/assets/team/Shri_Vinay_Kumar.png',
  '/assets/team/Smt._Anjali_Sharma.png',
  '/assets/team/Dr._Pooja_Mishra.png',
  '/assets/team/Shri_Arun_Prasad.png',
  '/assets/team/Smt._Kavita_Devi.png',
  '/assets/team/Shri_Manoj_Kumar.png',
  '/assets/team/Ms._Sneha_Raj.png',
  '/assets/team/Shri_Dinesh_Yadav.png'
];

export default function Team() {
  const { t } = useLanguage();
  const team = t.team;

  // Build initials for the avatar placeholder (e.g. "Anjali Sharma" -> "AS").
  const initials = (name) =>
    name
      .replace(/^(Shri|Smt\.|Dr\.|Ms\.|श्री|श्रीमती|डॉ\.|सुश्री)\s*/u, '')
      .split(' ')
      .slice(0, 2)
      .map((w) => w[0])
      .join('');

  return (
    <section id="team" className="section-pad">
      <div className="container-kf">
        <SectionHeading
          eyebrow={team.tag}
          title={team.title}
          subtitle={team.subtitle}
        />

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {team.members.map((m, i) => {
            const photo = teamPhotos[i];
            return (
              <Reveal key={m.name} delay={(i % 4) * 0.1}>
                <article className="card-kf group h-full text-center hover:shadow-warm">
                  {/* Avatar */}
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-900/60">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={m.name}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    ) : (
                      <ImagePlaceholder
                        variant={i}
                        rounded="rounded-full"
                        className="h-28 w-28"
                      />
                    )}
                    {!photo && (
                      <span className="absolute inset-0 flex items-center justify-center font-serif text-2xl font-bold text-white/90">
                        {initials(m.name)}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold">{m.name}</h3>
                  <p className="text-sm font-semibold text-saffron-600 dark:text-gold-300">
                    {m.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-900/65 dark:text-ink-100/60">
                    {m.bio}
                  </p>
                  <HeartIcon className="mx-auto mt-3 text-base text-rose-300 opacity-0 transition-opacity group-hover:opacity-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
