import { CLIENTS, CONTACT_INFO, PERSONAL_INFO, SITE_URL } from '@/constants';
import { bulletList, link, markdownDocument, markdownResponse } from '@/utils/markdown';

export const dynamic = 'force-static';

export function GET() {
  return markdownResponse(
    markdownDocument([
      `# ${PERSONAL_INFO.name}`,
      `> ${PERSONAL_INFO.description}`,
      bulletList([
        `Role: ${PERSONAL_INFO.title}`,
        `Availability: ${PERSONAL_INFO.availability}`,
        `Location: ${PERSONAL_INFO.location} (${PERSONAL_INFO.timezone})`,
        `Current clients: ${CLIENTS.map((c) => c.name).join(', ')}`,
        `Contact: ${CONTACT_INFO.email}, or book a 30-minute call at ${CONTACT_INFO.calendar}`,
      ]),
      '## Pages',
      bulletList([
        `${link('Full profile', `${SITE_URL}/llms-full.txt`)}: services, selected results, work history, skills, education and FAQ in one Markdown file`,
        `${link('Home', `${SITE_URL}/`)}: services, selected results, experience summary, FAQ and contact`,
        `${link('Résumé', `${SITE_URL}/resume/`)}: full work history, skills and education`,
      ]),
      '## Profiles',
      bulletList([
        link('LinkedIn', CONTACT_INFO.linkedin),
        link('GitHub', CONTACT_INFO.github),
      ]),
    ]),
  );
}
