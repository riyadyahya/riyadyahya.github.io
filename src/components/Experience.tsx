const Experience = () => {
  const experiences = [
    {
      company: "Coretava",
      role: "Software Engineering Manager (CTO)",
      period: "March 2020 - Present",
      duration: "5 years 4 months",
      location: "United States",
      description: "Coretava – Comprehensive Loyalty & Retention Platform",
      achievements: [
        "Led and managed a team of 6-10 engineers, restructuring the team into specialized frontend and backend units for improved expertise and collaboration",
        "Spearheaded technical debt cleanup, migrating codebase from JavaScript to TypeScript and implementing NestJS for improved modularity and scalability",
        "Launched CoreLoyalty platform with enhanced point system, cashback mode, and extended feature flexibility",
        "Expanded integration ecosystem to support VTEX, Tray, Nuvemshop, WooCommerce, Magento, PrestaShop, and Wake",
        "Developed powerful public APIs and strategic POS integrations through key partnerships",
        "Transformed Coretava into a comprehensive loyalty platform with strong technical foundation and diverse integration network"
      ]
    },
    {
      company: "Coretava",
      role: "Senior Software Engineer",
      period: "October 2018 - March 2020",
      duration: "1 year 6 months",
      location: "United States",
      description: "Coretava – E-commerce Loyalty Platform",
      achievements: [
        "Expanded platform with seamless Shopify integration through custom-built apps",
        "Developed SDKs for Android and iOS to complement existing web SDK",
        "Launched TeamUp product for team-based loyalty with mobile app for employee challenges and rewards",
        "Built backend using Node.js/Express and MongoDB, frontend with React/Redux",
        "Managed infrastructure and deployment using AWS Cloud (ECS, EC2, S3, CloudFront)"
      ]
    },
    {
      company: "Coretava",
      role: "Software Engineer",
      period: "January 2018 - October 2018",
      duration: "10 months",
      location: "United States",
      description: "Gamiphy / Coretava – E-commerce Loyalty Platform",
      achievements: [
        "Led full-stack development for Gamibot MVP, an e-commerce loyalty solution",
        "Developed Gamibot dashboard using React and Redux, built widget and JavaScript SDK",
        "Designed and implemented microservices architecture using Node.js and Express",
        "Managed AWS infrastructure including ECS deployment and EC2 load balancers",
        "Built core services for user/tenant management, points system, and interactive loyalty features",
        "Successfully onboarded early customers, validating product value and scalability"
      ]
    },
    {
      company: "Freightos",
      role: "Software Engineer",
      period: "June 2016 - October 2018",
      duration: "2 years 5 months",
      location: "United States",
      description: "Freightos – Online Marketplace for Global Shipping",
      achievements: [
        "Led frontend implementation of marketplace platform serving 100K+ monthly active users using React.js and Redux",
        "Implemented domain-driven folder structure and integrated company's internal UI kit",
        "Owned testing and release pipeline with Jest for unit and snapshot tests",
        "Set up CI/CD workflow combining unit, snapshot, and end-to-end tests",
        "Implemented deployment practices using LaunchDarkly for feature flagging and Segment for event tracking"
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