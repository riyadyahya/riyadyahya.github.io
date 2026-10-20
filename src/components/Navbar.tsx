'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';

const navItems = [
  { name: 'Services', href: '/#services' },
  { name: 'Results', href: '/#results' },
  { name: 'Experience', href: '/#experience' },
  { name: 'FAQ', href: '/#faq' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 no-print transition-colors ${
        scrolled || isMenuOpen ? 'bg-white/90 backdrop-blur border-b border-neutral-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between gap-4 h-14">
          <Link href="/" className="text-[15px] font-medium tracking-tight text-neutral-950">
            Riyad Yahya
          </Link>

          <nav aria-label="Main" className="hidden md:flex items-center gap-6 text-[14px] text-neutral-600">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-neutral-950 transition-colors">
                {item.name}
              </a>
            ))}
            <Link href="/resume/" className="hover:text-neutral-950 transition-colors">
              Résumé
            </Link>
            <BookCallButton compact />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <BookCallButton compact />
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2.5 -mr-2.5 text-neutral-600"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav id="mobile-menu" aria-label="Main" className="md:hidden pb-3">
            <ul className="flex flex-col text-[16px] text-neutral-700">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 hover:text-neutral-950"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/resume/" onClick={() => setIsMenuOpen(false)} className="block py-3 hover:text-neutral-950">
                  Résumé
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
