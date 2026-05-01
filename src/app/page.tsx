import { Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Now from '@/components/Now';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Now />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
