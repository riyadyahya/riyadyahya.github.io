import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  aside?: ReactNode;
  children: ReactNode;
};

const Section = ({ id, title, aside, children }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="py-20 border-t border-neutral-200">
    <div className="max-w-4xl mx-auto px-5 sm:px-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-10">
        <h2 id={`${id}-title`} className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-neutral-950">
          {title}
        </h2>
        {aside && <span className="text-[13px] text-neutral-600">{aside}</span>}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
