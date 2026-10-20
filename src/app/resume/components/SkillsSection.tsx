import React from 'react';
import { SKILLS_DETAILED } from '@/constants';

export default function SkillsSection() {
  return (
    <section className="mb-10 break-inside-avoid-page">
      <h2 className="text-[20px] font-semibold tracking-tight text-neutral-950 mb-5">
        Skills
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {Object.entries(SKILLS_DETAILED).map(([category, items]) => (
          <div key={category}>
            <dt className="text-[14px] font-semibold text-neutral-950 mb-1">{category}</dt>
            <dd className="text-[14px] leading-[1.6] text-neutral-700">
              {Array.isArray(items) ? items.join(', ') : items}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
