import Link from 'next/link';
import { CONTACT_INFO, PERSONAL_INFO } from '@/constants';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 no-print">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="text-[14px] leading-[1.6] text-neutral-600">
          <p className="font-medium text-neutral-950">{PERSONAL_INFO.name}</p>
          <p>
            {PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-neutral-600">
          <Link href="/mvp-to-production/" className="hover:text-neutral-950">
            MVP to production
          </Link>
          <Link href="/resume/" className="hover:text-neutral-950">
            Résumé
          </Link>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950">
            LinkedIn
          </a>
          <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-950">
            GitHub
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-neutral-950">
            Email
          </a>
          <a href={CONTACT_INFO.calendar} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-accent-strong">
            Book a call
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
