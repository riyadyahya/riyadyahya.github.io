import Image from 'next/image';
import profile from '../assets/profile.jpeg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-lg">
              <Image
                src={profile}
                alt="Riyad Yahya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Riyad Yahya</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            Senior Software Engineer specializing in React.js, Node.js, and MongoDB
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            Building scalable & secure systems with over 7 years of experience in SaaS companies.
            Expert in MERN stack, DevOps, and leading high-performing engineering teams.
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
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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
