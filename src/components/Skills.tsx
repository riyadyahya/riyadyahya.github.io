const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Redux/MobX", level: "Expert" },
        { name: "HTML/CSS", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "NestJS", level: "Expert" },
        { name: "MongoDB", level: "Expert" },
        { name: "Microservices", level: "Expert" },
        { name: "RESTful APIs", level: "Expert" }
      ]
    },
    {
      category: "DevOps & Cloud",
      skills: [
        { name: "AWS (EKS, EC2, S3, CloudFront)", level: "Expert" },
        { name: "Terraform", level: "Advanced" },
        { name: "Jenkins", level: "Advanced" },
        { name: "CI/CD", level: "Expert" },
        { name: "Docker", level: "Advanced" }
      ]
    },
    {
      category: "Leadership & Management",
      skills: [
        { name: "Team Leadership", level: "Expert" },
        { name: "Agile/Scrum", level: "Expert" },
        { name: "Project Management", level: "Expert" },
        { name: "Technical Strategy", level: "Expert" },
        { name: "Mentoring", level: "Expert" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width:
                            skill.level === "Expert"
                              ? "100%"
                              : skill.level === "Advanced"
                              ? "85%"
                              : "70%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 