import type { Metadata } from 'next';
import { PERSONAL_INFO } from '@/constants';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export const pageMetadata = ({ title, description, path }: PageMetadataOptions): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} | ${PERSONAL_INFO.name}`,
    description,
    type: 'website',
    url: path,
    siteName: PERSONAL_INFO.name,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${PERSONAL_INFO.name}, ${PERSONAL_INFO.title}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${PERSONAL_INFO.name}`,
    description,
    images: ['/og.png'],
  },
});
