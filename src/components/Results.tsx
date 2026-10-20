import Section from '@/components/Section';
import { RESULTS } from '@/constants';

const Results = () => {
  return (
    <Section id="results" title="Selected results">
      <div className="space-y-12">
        {RESULTS.map((r) => (
          <article key={r.title} className="grid gap-2 sm:grid-cols-[200px_1fr] sm:gap-8">
            <p className="text-[14px] text-neutral-600 sm:pt-1">{r.company}</p>
            <div className="max-w-[62ch]">
              <h3 className="text-[19px] sm:text-[21px] leading-[1.3] font-semibold tracking-tight text-neutral-950 mb-2">
                {r.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-neutral-700">{r.body}</p>
              <ul aria-label="Stack" className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-neutral-600">
                {r.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Results;
