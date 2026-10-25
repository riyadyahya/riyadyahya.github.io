import Link from 'next/link';
import type { ReactNode } from 'react';
import BookCallButton from '@/components/BookCallButton';
import Breadcrumbs, { type Crumb } from '@/components/Breadcrumbs';

type PageHeroProps = {
  trail?: Crumb[];
  current: string;
  title: string;
  linkHref: string;
  linkLabel: string;
  children: ReactNode;
  footer?: ReactNode;
};

const PageHero = ({ trail = [], current, title, linkHref, linkLabel, children, footer }: PageHeroProps) => (
  <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
    <div className="max-w-4xl mx-auto px-5 sm:px-6">
      <Breadcrumbs trail={trail} current={current} />
      <h1 className="max-w-[22ch] text-[34px] sm:text-[46px] leading-[1.1] tracking-tight font-semibold mb-6 text-neutral-950">
        {title}
      </h1>
      <div className="space-y-4 text-[16px] sm:text-[17px] leading-[1.65] text-neutral-700 max-w-[62ch]">{children}</div>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <BookCallButton />
        <Link
          href={linkHref}
          className="text-[15px] text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
        >
          {linkLabel}
        </Link>
      </div>
      {footer}
    </div>
  </section>
);

export default PageHero;
