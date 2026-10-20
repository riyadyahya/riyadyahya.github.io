import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="pt-40 pb-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <p className="text-[13px] text-neutral-600 mb-3 tabular-nums">Error 404</p>
        <h1 className="text-[34px] sm:text-[44px] leading-[1.12] tracking-tight font-semibold text-neutral-950 mb-4">
          This page doesn&apos;t exist
        </h1>
        <p className="text-[16px] sm:text-[17px] leading-[1.65] text-neutral-700 max-w-[52ch] mb-10">
          The link may be old or mistyped. Everything on this site is reachable from the home page.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-md border border-neutral-300 px-5 text-[15px] font-medium text-neutral-950 hover:border-neutral-950 transition-colors"
          >
            Go to the home page
          </Link>
          <BookCallButton />
        </div>
      </div>
    </section>
  );
}
