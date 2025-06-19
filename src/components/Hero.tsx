import Image from 'next/image';
import profile from '../assets/profile.jpg';
import { PERSONAL_INFO } from '@/constants';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
              <Image
                src={profile}
                alt={PERSONAL_INFO.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-blue-600">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {PERSONAL_INFO.title}
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-5xl mx-auto">
            {PERSONAL_INFO.summary}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              View Experience
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
