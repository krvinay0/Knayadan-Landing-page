// Home page — composes every section of the Shubhsaathi Foundation site in order.
// Section components are individually client components; this page itself can
// stay a server component since it only arranges them.

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Leadership from '@/components/Leadership';
import Goals from '@/components/Goals';
import Team from '@/components/Team';
import Supporters from '@/components/Supporters';
import Gallery from '@/components/Gallery';
import Awards from '@/components/Awards';
import LegalDocs from '@/components/LegalDocs';
import NewsEvents from '@/components/NewsEvents';
import DonateCTA from '@/components/DonateCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 2  — Hero */}
        <Hero />
        {/* 3  — Message from the Leadership */}
        <Leadership />
        {/* 4  — Our Goals & Mission */}
        <Goals />
        {/* 5  — Team & Employees */}
        <Team />
        {/* 6  — Supporters & Regular Donors */}
        <Supporters />
        {/* 7  — Media Gallery */}
        <Gallery />
        {/* 8  — Awards & Recognitions */}
        <Awards />
        {/* 9  — Legal Documents & Transparency */}
        <LegalDocs />
        {/* 10 — News & Events */}
        <NewsEvents />
        {/* Conversion band — target of every "Donate Now" link */}
        <DonateCTA />
        {/* 11 — Contact & Assistance */}
        <Contact />
      </main>
      {/* 12 — Footer */}
      <Footer />
      <BackToTop />
    </>
  );
}
