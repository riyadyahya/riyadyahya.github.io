import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Results from '@/components/Results';
import Experience from '@/components/Experience';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import JsonLd from '@/components/JsonLd';
import { faqJsonLd } from '@/structuredData';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <Services />
      <Results />
      <Experience />
      <FAQ />
      <Contact />
    </>
  );
}
