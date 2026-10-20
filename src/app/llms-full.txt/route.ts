import {
  AI_WORKFLOW,
  CLIENTS,
  CONTACT_INFO,
  EDUCATION,
  EXPERIENCE,
  FAQ,
  PERSONAL_INFO,
  RESULTS,
  SERVICES,
  SITE_URL,
  SKILLS_DETAILED,
  STACK_SUMMARY,
} from '@/constants';
import { formatDateRange } from '@/utils/dates';
import { bulletList, link, markdownDocument, markdownResponse } from '@/utils/markdown';

export const dynamic = 'force-static';

const services = SERVICES.flatMap((s) => [
  `### ${s.title}`,
  `${s.problem} ${s.offer}`,
  `Track record: ${s.proof}`,
]);

const results = RESULTS.flatMap((r) => [
  `### ${r.company}: ${r.title}`,
  r.body,
  `Stack: ${r.stack.join(', ')}`,
]);

const clients = [
  '#### Selected clients',
  ...CLIENTS.flatMap((client) => [
    `**${link(client.name, client.website)}**${client.legalName ? ` (${client.legalName})` : ''}, ${client.role}`,
    bulletList(client.achievements),
  ]),
];

const experience = Object.values(EXPERIENCE).flatMap((company) =>
  company.positions.flatMap((position) => [
    `### ${position.title}, ${company.website ? link(company.company, company.website) : company.company}`,
    formatDateRange(position.startDate, position.endDate),
    bulletList(position.achievements),
    ...('featured' in company && company.featured ? clients : []),
  ]),
);

const skills = bulletList([
  `Day-to-day stack: ${STACK_SUMMARY.join(', ')}`,
  `AI-native workflow: ${AI_WORKFLOW.join(', ')}`,
  ...Object.entries(SKILLS_DETAILED).map(([category, items]) => `${category}: ${items.join(', ')}`),
]);

const faq = FAQ.flatMap((q) => [`### ${q.question}`, q.answer]);

export function GET() {
  return markdownResponse(
    markdownDocument([
      `# ${PERSONAL_INFO.name}`,
      `> ${PERSONAL_INFO.description}`,
      PERSONAL_INFO.summary,
      bulletList([
        `Role: ${PERSONAL_INFO.title}`,
        `Availability: ${PERSONAL_INFO.availability}`,
        `Location: ${PERSONAL_INFO.location} (${PERSONAL_INFO.timezone})`,
        `Website: ${SITE_URL}/`,
        `Résumé: ${SITE_URL}/resume/`,
      ]),
      '## Services',
      ...services,
      '## Selected results',
      ...results,
      '## Experience',
      ...experience,
      '## Skills',
      skills,
      '## Education',
      `${EDUCATION.degree}, ${EDUCATION.university} (${formatDateRange(EDUCATION.startDate, EDUCATION.endDate)})`,
      '## FAQ',
      ...faq,
      '## Contact',
      bulletList([
        `Book a 30-minute call: ${CONTACT_INFO.calendar}`,
        `Email: ${CONTACT_INFO.email}`,
        `WhatsApp: ${CONTACT_INFO.phoneDisplay} (${CONTACT_INFO.whatsapp})`,
        `LinkedIn: ${CONTACT_INFO.linkedin}`,
        `GitHub: ${CONTACT_INFO.github}`,
      ]),
    ]),
  );
}
