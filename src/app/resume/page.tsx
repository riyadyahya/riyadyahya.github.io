'use client';

import ProfileHeader from './components/ProfileHeader';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-0 lg:px-4 py-0 lg:py-10 print:py-0">
        <main className="bg-white layout-content p-6">
          <ProfileHeader />
          <ExperienceTimeline />
          <SkillsSection />
          <EducationSection />
        </main>
      </div>
    </div>
  );
}
