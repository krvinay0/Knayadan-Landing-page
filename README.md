# Shubhsaathi Foundation — Website

A professional, emotionally resonant, and trustworthy website for **Shubhsaathi
Foundation**, a registered Section 8 non-profit supporting underprivileged
families with daughters' marriages, women's health insurance subsidies, and
skill development.

## ✨ Features

- **Bilingual** — full English ⇄ हिंदी toggle for the entire site
- **Light / Dark theme** — warm & trustworthy light mode, elegant dark mode
- **Mobile-first responsive** layout for phones, tablets, and desktops
- **Calm scroll animations** via Framer Motion (respects reduced-motion)
- **Sticky "Donate Now" CTA** highlighting the 80G tax benefit
- **12 sections** — Hero, Leadership Message, Goals, Team, Supporters,
  Gallery (filterable), Awards, Legal Docs, News & Events, Donation band,
  Contact (with assistance + enquiry forms and a Google Map), Footer

## 🧱 Tech Stack

| Layer        | Choice                          |
|--------------|---------------------------------|
| Framework    | Next.js 14 (App Router)         |
| Styling      | Tailwind CSS 3                  |
| Animation    | Framer Motion                   |
| Language     | JavaScript / JSX                |

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## 📁 Project Structure

```
app/
  layout.js            Root layout, metadata, no-flash theme script
  page.js              Composes all 12 sections in order
  providers.js         Wraps Theme + Language contexts
  globals.css          Tailwind layers + brand component classes
components/
  Header.js  Hero.js  Leadership.js  Goals.js  Team.js
  Supporters.js  Gallery.js  Awards.js  LegalDocs.js
  NewsEvents.js  DonateCTA.js  Contact.js  Footer.js
  Reveal.js            Scroll fade-in wrapper (Framer Motion)
  SectionHeading.js    Shared eyebrow + title + subtitle
  ImagePlaceholder.js  Warm gradient stand-in for real photos
  Icons.js  Logo.js  BackToTop.js
lib/
  translations.js      All EN + HI content (single source of truth)
  LanguageContext.js   English ⇄ हिंदी toggle, persisted
  ThemeContext.js      Light ⇄ Dark toggle, persisted
```

## 🖼️ Replacing Placeholder Content

The site ships with tasteful gradient placeholders so it runs immediately.
To go live with real content:

1. **Photos** — drop images into `/public` and replace `<ImagePlaceholder>`
   usages with Next.js `<Image>` components.
2. **Text** — every visible string lives in `lib/translations.js`. Edit the
   `en` and `hi` objects; the rest of the UI updates automatically.
3. **Legal PDFs** — point the `View` / `Download` links in
   `components/LegalDocs.js` at the real document URLs.
4. **Donations** — wire the buttons in `components/DonateCTA.js` to a payment
   gateway (e.g. Razorpay).
5. **Forms** — connect the handlers in `components/Contact.js` to an API
   route or email service.
6. **Map** — the Contact map uses a keyless Google Maps embed; swap in an
   API-keyed embed for production if desired.

## 🎨 Brand Palette

Defined in `tailwind.config.js`: warm **saffron**, soft **rose/pink**, and
**gold** accents for light mode; elegant **ink** surfaces for dark mode.

---

© 2026 Shubhsaathi Foundation. All donations are tax-exempt under Section 80G of
the Income Tax Act.
# Knayadan-Landing-page
