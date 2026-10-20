import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { resumeJsonLd } from '@/structuredData';
import ProfileHeader from './components/ProfileHeader';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';

export const metadata: Metadata = {
  title: 'Résumé',
  alternates: { canonical: '/resume/' },
};

export default function ResumePage() {
  return (
    <div className="pt-14 print:pt-0">
      <JsonLd data={resumeJsonLd} />
      <div className="max-w-4xl mx-auto px-5 sm:px-6 py-12 print:px-0 print:py-0">
        <ProfileHeader />
        <ExperienceTimeline />
        <SkillsSection />
        <EducationSection />
      </div>
    </div>
  );
}
