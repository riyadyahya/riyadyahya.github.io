const Experience = () => {
  const experiences = [
    {
      company: "Coretava",
      role: "Software Engineering Manager",
      period: "March 2020 - Present",
      duration: "5 years 4 months",
      location: "Palestine",
      description: "Coretava – User Engagement & Retention Platform",
      achievements: [
        "Led DevOps strategy and cloud infrastructure management, implementing AWS EKS, EC2, S3, and CloudFront for scalable deployments",
        "Architected and scaled backend infrastructure using NestJS, TypeScript, and MongoDB, supporting 100+ million monthly active users",
        "Built and managed high-performing engineering teams, mentoring engineers and fostering innovation",
        "Spearheaded Agile and DevOps transformation, optimizing development workflows and accelerating product releases",
        "Led integrations with major e-commerce platforms, expanding the company's ecosystem",
        "Implemented system monitoring, security best practices, and disaster recovery strategies"
      ]
    },
    {
      company: "Coretava",
      role: "Senior Software Engineer",
      period: "October 2018 - March 2020",
      duration: "1 year 6 months",
      location: "Palestine",
      description: "Coretava – User Engagement & Retention Platform",
      achievements: [
        "Designed and implemented scalable backend infrastructure using microservices architecture",
        "Automated cloud infrastructure and deployment using Terraform and Jenkins",
        "Developed the Coretava loyalty app and front-end dashboard using React, TypeScript, and MobX",
        "Led integrations with major e-commerce platforms including Shopify, PrestaShop, and others",
        "Optimized system scalability and performance through cloud architecture and API design"
      ]
    },
    {
      company: "Coretava",
      role: "Software Engineer",
      period: "January 2018 - October 2018",
      duration: "10 months",
      location: "Palestine",
      description: "Coretava – User Engagement & Retention Platform",
      achievements: [
        "Designed and developed backend services using Node.js, TypeScript, and MongoDB",
        "Managed DevOps infrastructure on AWS EKS and EC2",
        "Developed feature-rich loyalty app with missions, games, and referral systems",
        "Built responsive Coretava dashboard for campaign and customer data management",
        "Implemented gamification tools to boost customer interaction and retention"
      ]
    },
    {
      company: "Freightos",
      role: "Software Engineer",
      period: "June 2016 - October 2018",
      duration: "2 years 5 months",
      location: "Palestine",
      description: "Freightos – Online Marketplace for Global Shipping",
      achievements: [
        "Developed and enhanced the Freightos Marketplace using React and Redux",
        "Implemented Test-Driven Development (TDD), reducing regression bugs by 80%",
        "Designed and implemented CI/CD pipeline using Jenkins",
        "Contributed to automating freight sales for global freight companies"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transition-transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.period}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {exp.duration} • {exp.location}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm md:text-base">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 