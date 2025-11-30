import React from 'react';
import { SKILLS_DETAILED } from '@/constants';

export default function SkillsSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
        {Object.entries(SKILLS_DETAILED).map(([category, items]) => (
          <div key={category} className="mb-2">
            <div className="font-semibold mb-1">{category}</div>
            <div className="text-sm text-gray-700">
              {Array.isArray(items) ? items.join(', ') : items}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
