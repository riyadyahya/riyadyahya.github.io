import { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants';

export const dynamic = 'force-static';

const guides = [
  '/lovable-to-production/',
  '/replit-to-production/',
  '/bolt-to-production/',
  '/v0-to-production/',
  '/base44-to-production/',
  '/ai-codebase-audit/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/mvp-to-production/`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...guides.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/resume/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
