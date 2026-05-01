import { EXPERIENCE, formatDateRange, calculateDuration } from '@/constants';

type Position = {
  title: string;
  startDate: Date;
  endDate?: Date;
  achievements: string[];
};

type Company = {
  company: string;
  website?: string;
  location: string;
  positions: Position[];
};

const Experience = () => {
  const companies = Object.values(EXPERIENCE) as Company[];

  // Sort companies by their most recent position start date (desc)
  const sorted = [...companies].sort((a, b) => {
    const aMax = Math.max(...a.positions.map((p) => p.startDate.getTime()));
    const bMax = Math.max(...b.positions.map((p) => p.startDate.getTime()));
    return bMax - aMax;
  });

  // Year of the most recent position across the company
  const startYear = (c: Company) => {
    const oldest = Math.min(...c.positions.map((p) => p.startDate.getTime()));
    return new Date(oldest).getFullYear();
  };
  const endYear = (c: Company) => {
    // If any position has no endDate, it's ongoing
    if (c.positions.some((p) => !p.endDate)) return 'Now';
    const newest = Math.max(...c.positions.map((p) => p.endDate?.getTime() ?? 0));
    return new Date(newest).getFullYear().toString();
  };

  return (
    <section id="experience" className="py-20 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-neutral-950">Work</h2>
          <span className="text-[13px] text-neutral-500">2016 — Now</span>
        </div>

        <div className="space-y-14">
          {sorted.map((c) => (
            <article key={c.company}>
              <header className="mb-5">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  {c.website ? (
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[18px] font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950"
                    >
                      {c.company}
                    </a>
                  ) : (
                    <span className="text-[18px] font-medium text-neutral-950">{c.company}</span>
                  )}
                  <span className="text-[13px] text-neutral-500">{c.location}</span>
                  <span className="ml-auto text-[13px] text-neutral-500 tabular-nums">
                    {startYear(c)} — {endYear(c)}
                  </span>
                </div>
              </header>

              <ol className="relative border-l border-neutral-200 pl-6 space-y-8">
                {c.positions.map((p, i) => (
                  <li key={i}>
                    <span className="absolute -left-[5px] mt-2 w-2.5 h-2.5 rounded-full bg-white border border-neutral-400" />
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                      <h3 className="text-[16px] font-medium text-neutral-950">{p.title}</h3>
                      <span className="text-[13px] text-neutral-500 tabular-nums">
                        {formatDateRange(p.startDate, p.endDate)}
                        <span className="text-neutral-400"> · {calculateDuration(p.startDate, p.endDate)}</span>
                      </span>
                    </div>
                    <ul className="mt-2 space-y-2 text-[15px] leading-[1.65] text-neutral-700 max-w-[62ch]">
                      {p.achievements.map((a, idx) => (
                        <li key={idx} className="relative pl-5">
                          <span className="absolute left-0 top-[0.7em] w-2 h-px bg-neutral-300" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
