import React from 'react';
import { SKILLS_DETAILED } from '@/constants';
import { Settings2 } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <Settings2 className="w-5 h-5" />
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {Object.entries(SKILLS_DETAILED).map(([category, items]) => (
            <div key={category} className="mb-2">
              <div className="font-semibold text-lg text-gray-900 mb-1">{category}</div>
              <div className="text-sm text-gray-800">
                {Array.isArray(items) ? items.join(', ') : items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
