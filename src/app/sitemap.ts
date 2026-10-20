import { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/resume/`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
