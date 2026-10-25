import {
  AI_WORKFLOW,
  AUDIT_PRICE,
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

const mvpToProduction = [
  '## AI-built MVP to production',
  `For founders who built an MVP with Lovable, Bolt, v0, Replit, Base44, Cursor, Windsurf or Claude Code and now need it to hold up with real users, real payments and a growing team. Details: ${SITE_URL}/mvp-to-production/`,
  bulletList([
    `Production audit: ${AUDIT_PRICE}, fixed price, report within 48 hours of access. Covers data and access rules, payments, secrets and environments, reliability, performance and cost, and codebase health, with a ranked fix list.`,
    'Hardening sprint: fixed quote after the audit, usually 3 to 5 days.',
    'MVP to production: fixed quote after the audit, usually 1 to 3 weeks. Moves the app to a codebase and infrastructure the team owns, keeping the screens users already know.',
    'Fractional CTO: monthly, priced after a call based on scope.',
  ]),
  '### Guides by tool',
  bulletList([
    link('Lovable to production', `${SITE_URL}/lovable-to-production/`),
    link('Replit to production', `${SITE_URL}/replit-to-production/`),
    link('Bolt to production', `${SITE_URL}/bolt-to-production/`),
    link('v0 to production', `${SITE_URL}/v0-to-production/`),
    link('Base44 to production', `${SITE_URL}/base44-to-production/`),
    link('AI-written codebase audit for Cursor, Windsurf and Claude Code', `${SITE_URL}/ai-codebase-audit/`),
  ]),
];

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
      ...mvpToProduction,
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
