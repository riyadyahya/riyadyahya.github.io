import { AUDIT_PRICE, CLIENTS, CONTACT_INFO, PERSONAL_INFO, SITE_URL } from '@/constants';
import { bulletList, link, markdownDocument, markdownResponse } from '@/utils/markdown';

export const dynamic = 'force-static';

const guide = (tool: string, path: string) =>
  `${link(`${tool} to production`, `${SITE_URL}${path}`)}: what ${tool} builds, where ${tool} apps break, and three ways to make them production-ready`;

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
        `${link('AI-built MVP to production', `${SITE_URL}/mvp-to-production/`)}: a ${AUDIT_PRICE} production audit delivered in 48 hours, then hardening, a move to a production codebase, or fractional CTO support`,
        guide('Lovable', '/lovable-to-production/'),
        guide('Replit', '/replit-to-production/'),
        guide('Bolt', '/bolt-to-production/'),
        guide('v0', '/v0-to-production/'),
        guide('Base44', '/base44-to-production/'),
        `${link('AI-written codebase audit', `${SITE_URL}/ai-codebase-audit/`)}: audits and guardrails for codebases built with Cursor, Windsurf and Claude Code`,
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
