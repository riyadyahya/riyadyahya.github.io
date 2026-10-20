import Link from 'next/link';
import Section from '@/components/Section';
import { AI_WORKFLOW, CLIENTS, EXPERIENCE, STACK_SUMMARY } from '@/constants';

type Position = {
  title: string;
  startDate: Date;
  endDate?: Date;
};

type Company = {
  company: string;
  website?: string;
  featured?: boolean;
  positions: Position[];
};

const yearRange = (start: Date, end?: Date) => {
  if (end && end.getFullYear() === start.getFullYear()) return `${start.getFullYear()}`;
  return `${start.getFullYear()} – ${end ? end.getFullYear() : 'now'}`;
};

const Experience = () => {
  const companies = Object.values(EXPERIENCE) as Company[];
  const independent = companies.find((c) => c.featured);
  const employers = companies
    .filter((c) => !c.featured)
    .sort((a, b) => {
      const aMax = Math.max(...a.positions.map((p) => p.startDate.getTime()));
      const bMax = Math.max(...b.positions.map((p) => p.startDate.getTime()));
      return bMax - aMax;
    });

  const companySpan = (c: Company) => {
    const start = new Date(Math.min(...c.positions.map((p) => p.startDate.getTime())));
    const ongoing = c.positions.some((p) => !p.endDate);
    const end = ongoing ? undefined : new Date(Math.max(...c.positions.map((p) => p.endDate?.getTime() ?? 0)));
    return yearRange(start, end);
  };

  return (
    <Section id="experience" title="Experience" aside="2016 – now">
      <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
        {independent && (
          <li className="grid gap-1 py-5 sm:grid-cols-[200px_1fr_auto] sm:gap-8">
            <span className="text-[15px] font-medium text-neutral-950">Independent</span>
            <span className="text-[15px] leading-[1.6] text-neutral-700">
              Consultant for {CLIENTS.map((c) => c.name).join(', ')}
            </span>
            <span className="text-[13px] text-neutral-600 tabular-nums sm:pt-0.5">{companySpan(independent)}</span>
          </li>
        )}
        {employers.map((c) => (
          <li key={c.company} className="grid gap-1 py-5 sm:grid-cols-[200px_1fr_auto] sm:gap-8">
            {c.website ? (
              <a
                href={c.website}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-self-start text-[15px] font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
              >
                {c.company}
              </a>
            ) : (
              <span className="text-[15px] font-medium text-neutral-950">{c.company}</span>
            )}
            <ul className="space-y-1">
              {c.positions.map((p) => (
                <li key={p.title} className="text-[15px] leading-[1.6] text-neutral-700">
                  {p.title}
                  {c.positions.length > 1 && (
                    <span className="ml-2 text-[13px] text-neutral-600 tabular-nums">{yearRange(p.startDate, p.endDate)}</span>
                  )}
                </li>
              ))}
            </ul>
            <span className="text-[13px] text-neutral-600 tabular-nums sm:pt-0.5">{companySpan(c)}</span>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[15px] leading-[1.65] text-neutral-700 max-w-[62ch]">
        <span className="font-medium text-neutral-950">Day-to-day stack: </span>
        {STACK_SUMMARY.join(', ')}.
      </p>
      <p className="mt-3 text-[15px] leading-[1.65] text-neutral-700 max-w-[62ch]">
        <span className="font-medium text-neutral-950">AI-native workflow: </span>
        {AI_WORKFLOW.join(', ')}.
      </p>
      <Link
        href="/resume/"
        className="mt-4 inline-block text-[15px] font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
      >
        Read the full résumé
      </Link>
    </Section>
  );
};

export default Experience;
