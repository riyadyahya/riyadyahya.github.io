import { CONTACT_INFO, EXPERIENCE, FAQ, PERSONAL_INFO, SERVICES, SITE_URL, TOP_SKILLS } from '@/constants';

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const questions = (items: typeof FAQ) =>
  items.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer },
  }));

const formerEmployers = Object.values(EXPERIENCE)
  .filter((c) => !('featured' in c && c.featured))
  .map((c) => ({ '@type': 'Organization', name: c.company, url: c.website }));

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: PERSONAL_INFO.name,
      description: PERSONAL_INFO.description,
      inLanguage: 'en',
      publisher: { '@id': PERSON_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: PERSONAL_INFO.name,
      jobTitle: PERSONAL_INFO.title,
      description: PERSONAL_INFO.description,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/riyad-yahya.jpg`,
      email: CONTACT_INFO.email,
      address: { '@type': 'PostalAddress', addressCountry: 'PS' },
      sameAs: [CONTACT_INFO.linkedin, CONTACT_INFO.github],
      knowsAbout: TOP_SKILLS,
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Birzeit University' },
        ...formerEmployers,
      ],
      makesOffer: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: `${s.problem} ${s.offer}`,
        },
      })),
    },
  ],
};

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  url: `${SITE_URL}/`,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': PERSON_ID },
  mainEntity: questions(FAQ),
};

export const faqPageJsonLd = (faq: typeof FAQ) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: questions(faq),
});

export const breadcrumbJsonLd = (links: { name: string; href: string }[], current: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    ...links.map((link, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: link.name,
      item: `${SITE_URL}${link.href}`,
    })),
    { '@type': 'ListItem', position: links.length + 1, name: current },
  ],
});

export const resumeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/resume/`,
  name: `Résumé | ${PERSONAL_INFO.name}`,
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: { '@id': PERSON_ID },
};
