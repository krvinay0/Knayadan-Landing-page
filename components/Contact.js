'use client';

// Section 11 — Contact Us & Assistance.
// Two tabbed forms (beneficiary application + general enquiry), office details,
// and an embedded Google Map of the registered office in Patna, Bihar.

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { PinIcon, PhoneIcon, MailIcon, ClockIcon, CheckIcon } from './Icons';

// Shared input styling.
const inputCls =
  'w-full rounded-lg border border-saffron-200 bg-white px-4 py-2.5 text-sm ' +
  'outline-none transition-colors focus:border-saffron-400 focus:ring-2 ' +
  'focus:ring-saffron-200 dark:border-ink-800 dark:bg-ink-950 ' +
  'dark:focus:ring-ink-700';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const f = c.fields;

  const [tab, setTab] = useState('assist'); // 'assist' | 'enquiry'
  const [sent, setSent] = useState(false);

  // Demo handler — wire this to an API route / email service in production.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-kf">
        <SectionHeading eyebrow={c.tag} title={c.title} subtitle={c.subtitle} />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Forms -------------------------------------------------------- */}
          <Reveal className="lg:col-span-7">
            <div className="card-kf">
              {/* Tab switcher */}
              <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-saffron-100 p-1.5 dark:bg-ink-800">
                {[
                  { id: 'assist', label: c.assistTitle },
                  { id: 'enquiry', label: c.enquiryTitle },
                ].map((tb) => (
                  <button
                    key={tb.id}
                    onClick={() => setTab(tb.id)}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      tab === tb.id
                        ? 'bg-white text-saffron-700 shadow dark:bg-ink-950 dark:text-gold-300'
                        : 'text-ink-900/60 dark:text-ink-100/60'
                    }`}
                  >
                    {tb.label}
                  </button>
                ))}
              </div>

              {/* Success banner */}
              {sent && (
                <div className="mb-5 flex items-center gap-2 rounded-lg bg-green-100 px-4 py-3 text-sm font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                  <CheckIcon className="text-base" />
                  {c.success}
                </div>
              )}

              {/* Beneficiary application form */}
              {tab === 'assist' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-ink-900/65 dark:text-ink-100/60">
                    {c.assistDesc}
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={f.name}>
                      <input className={inputCls} type="text" required />
                    </Field>
                    <Field label={f.phone}>
                      <input className={inputCls} type="tel" required />
                    </Field>
                    <Field label={f.district}>
                      <input className={inputCls} type="text" required />
                    </Field>
                    <Field label={f.type}>
                      <select className={inputCls} required defaultValue="">
                        <option value="" disabled>
                          —
                        </option>
                        {f.typeOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label={f.message}>
                    <textarea className={inputCls} rows={4} required />
                  </Field>
                  <label className="flex items-start gap-2 text-xs text-ink-900/65 dark:text-ink-100/60">
                    <input type="checkbox" required className="mt-0.5" />
                    {f.consent}
                  </label>
                  <button type="submit" className="btn-primary w-full">
                    {f.submit}
                  </button>
                </form>
              )}

              {/* General enquiry form */}
              {tab === 'enquiry' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-sm text-ink-900/65 dark:text-ink-100/60">
                    {c.enquiryDesc}
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label={f.name}>
                      <input className={inputCls} type="text" required />
                    </Field>
                    <Field label={f.email}>
                      <input className={inputCls} type="email" required />
                    </Field>
                  </div>
                  <Field label={f.subject}>
                    <input className={inputCls} type="text" required />
                  </Field>
                  <Field label={f.message}>
                    <textarea className={inputCls} rows={5} required />
                  </Field>
                  <button type="submit" className="btn-primary w-full">
                    {f.send}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Office info + map ------------------------------------------- */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-5">
              <div className="card-kf space-y-4">
                <h3 className="font-serif text-lg font-bold">{c.infoTitle}</h3>
                <InfoRow icon={PinIcon}>{c.address}</InfoRow>
                <InfoRow icon={ClockIcon}>{c.hours}</InfoRow>
                <InfoRow icon={PhoneIcon}>
                  <a href="tel:+916123456789" className="hover:underline">
                    +91 612 345 6789
                  </a>
                </InfoRow>
                <InfoRow icon={MailIcon}>
                  <a
                    href="mailto:care@kanyadanfoundation.org"
                    className="hover:underline"
                  >
                    care@kanyadanfoundation.org
                  </a>
                </InfoRow>
              </div>

              {/* Interactive Google Map of the registered office */}
              <div className="card-kf flex-1 overflow-hidden p-0">
                <p className="border-b border-saffron-100 px-5 py-3 font-serif text-sm font-bold dark:border-ink-800">
                  {c.mapTitle}
                </p>
                <iframe
                  title="Kanyadan Foundation office location"
                  src="https://www.google.com/maps?q=Boring+Road,+Patna,+Bihar&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Small presentational helpers --------------------------------------------- */

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-ink-900/75 dark:text-ink-100/70">
        {label}
      </span>
      {children}
    </label>
  );
}

function InfoRow({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3 text-sm text-ink-900/75 dark:text-ink-100/70">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-saffron-100 text-saffron-600 dark:bg-ink-800 dark:text-gold-300">
        <Icon className="text-base" />
      </span>
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}
