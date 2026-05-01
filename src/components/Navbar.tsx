'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Now', href: '#now' },
  { name: 'Work', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
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
        scrolled ? 'bg-white/85 backdrop-blur border-b border-neutral-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-[15px] font-medium tracking-tight text-neutral-950">
            Riyad Yahya
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-[14px] text-neutral-500">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-neutral-950 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link href="/resume" className="hover:text-neutral-950 transition-colors">
              Resume
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="sm:hidden p-2 -mr-2 text-neutral-500"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden pb-4 border-b border-neutral-200">
            <div className="flex flex-col gap-3 text-[15px] text-neutral-500">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-neutral-950"
                >
                  {item.name}
                </a>
              ))}
              <Link
                href="/resume"
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-neutral-950"
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
