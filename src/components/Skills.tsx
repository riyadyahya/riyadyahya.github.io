import { SKILLS_DETAILED } from '@/constants';

const Skills = () => {
  const entries = Object.entries(SKILLS_DETAILED);

  return (
    <section id="skills" className="py-20 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-neutral-950">Skills</h2>
          <span className="text-[13px] text-neutral-500">By category</span>
        </div>

        <dl className="divide-y divide-neutral-200">
          {entries.map(([category, items]) => (
            <div
              key={category}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 py-4 first:pt-0"
            >
              <dt className="text-[14px] font-medium text-neutral-950">{category}</dt>
              <dd className="text-[15px] leading-[1.65] text-neutral-700">{items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;
