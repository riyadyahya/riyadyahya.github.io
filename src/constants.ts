// Helper function to calculate duration between two dates
export const calculateDuration = (startDate: Date, endDate?: Date): string => {
  const end = endDate || new Date();
  const diffTime = Math.abs(end.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30.44);
  const diffYears = Math.floor(diffMonths / 12);

  if (diffYears > 0) {
    const remainingMonths = diffMonths % 12;
    if (remainingMonths > 0) {
      return `${diffYears} year${diffYears > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    return `${diffYears} year${diffYears > 1 ? 's' : ''}`;
  }

  return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
};

// Helper function to format date range for display
export const formatDateRange = (startDate: Date, endDate?: Date): string => {
  const startFormatted = startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  if (!endDate) {
    return `${startFormatted} - Present`;
  }

  const endFormatted = endDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  return `${startFormatted} - ${endFormatted}`;
};

export const PERSONAL_INFO = {
  name: "Riyad Yahya",
  title: "Lead Software Engineer | Scalable Platforms & Product Growth",
  summary: "Senior Software Engineer and Engineering Leader with over 7 years of experience building scalable SaaS products, particularly in the loyalty and e-commerce space. He specializes in full-stack development using the MERN stack (MongoDB, Express.js, React.js, Node.js), with strong expertise in TypeScript, scalable architectures, and DevOps practices. As the Software Lead at Coretava, he oversaw a team of 6–10 engineers, restructured the engineering organization for improved efficiency, and drove significant technical upgrades, including modular backend architecture and broad integration support with platforms like Shopify, VTEX, and Magento. Riyad combines deep technical knowledge with strategic product thinking, enabling cross-functional collaboration and success in high-growth environments.",
  profileImage: "/profile.jpg"
};

export const TOP_SKILLS = [
  'Full-stack Development',
  'MERN Stack',
  'TypeScript',
  'React',
  'Node.js',
  'NestJS',
  'Software Architecture',
  'API Integration',
  'Microservices',
  'AWS',
  'Docker',
  'Kubernetes',
  'Agile Software Development',
  'Mentorship',
  'CI/CD',
  'BigQuery',
  'Shopify',
  'E-commerce',
  'Team Leadership',
  'DevOps'
];

export const SKILLS_DETAILED = {
  Languages: [
    'JavaScript', 'TypeScript', 'CSS', 'HTML', 'HTML5', 'ECMAScript (ES6)', 'CSS3', 'GraphQL', 'Python', 'Java', 'SQL'
  ],
  Frameworks: [
    'Redux', 'NestJS', 'Next.js', 'Material UI', 'Bootstrap', 'Express.js', 'Jest', 'Flask'
  ],
  'Libraries/APIs': [
    'React', 'MobX', 'Node.js', 'REST APIs', 'Stripe', 'Stripe Connect', 'Stripe API', 'Twilio API', 'Liquid', 'OpenAI API', 'SendGrid API', 'Llama API'
  ],
  Tools: [
    'Webpack', 'Figma', 'Stripe Checkout', 'Git', 'Google Analytics', 'GitHub', 'Amazon Elastic Container Service (ECS)', 'Mocha', 'Jenkins', 'Amazon EKS', 'Kibana', 'Zapier', 'Sentry', 'Amazon Cognito', 'Whisper', 'ChatGPT', 'Auth0'
  ],
  Paradigms: [
    'Microservices', 'Responsive Web Design (RWD)', 'Search Engine Optimization (SEO)', 'Event-driven Architecture', 'Agile Software Development'
  ],
  Platforms: [
    'Google Cloud Platform (GCP)', 'Web', 'Firebase', 'Docker', 'Kubernetes', 'Amazon Web Services (AWS)', 'AWS Lambda', 'Amazon EC2', 'Shopify', 'Heroku', 'Vertex AI', 'WordPress', 'Apache2', 'Ollama', 'Twilio'
  ],
  Storage: [
    'MongoDB', 'Amazon S3 (AWS S3)', 'Database Architecture', 'JSON', 'Databases', 'Google Cloud', 'PostgreSQL'
  ],
  Other: [
    'Front-end', 'WebSockets', 'Full-stack', 'Third-party Integration', 'User Interface (UI)', 'Widgets', 'Front-end Architecture', 'Architecture', 'APIs', 'CORS', 'Web Development', 'Full-stack Development', 'Animation', 'Deployment', 'Responsive Web Apps', 'Webhooks', 'UI Components', 'Design Systems', 'MERN Stack', 'Front-end Development', 'Pixel Perfect', 'Responsiveness', 'Server-side Rendering (SSR)', 'Startups', 'Back-end', 'API Integration', 'CI/CD Pipelines', 'Data Structures', 'Solution Architecture', 'Technical Leadership', 'Software Architecture', 'Data Visualization', 'Booking Systems', 'eCommerce', 'Mobile Video', 'Storybook', 'Content Management Systems (CMS)', 'CTO', 'Leadership', 'Digital Marketing', 'OpenAI', 'OpenAI GPT-4 API', 'Cursor AI', 'Discord Bots', 'Web Scraping', 'Large Language Models (LLMs)', 'Security', 'Pub/Sub', 'Apollo', 'Proxy Servers', 'ElevenLabs Solutions', 'Speech to Text', 'Text to Speech (TTS)', 'AI Agents', 'Llama', 'Azure Text to Speech'
  ]
};

export const EXPERIENCE = {
  coretava: {
    company: "Coretava",
    location: "Palestinian Authority",
    positions: [
      {
        title: "Lead Software Engineer",
        startDate: new Date(2020, 2, 1), // March 2020
        endDate: undefined, // Present
        achievements: [
          "Led the design, development, and scaling of Coretava's loyalty platform, driving cross-functional execution and platform growth.",
          "Restructured teams into specialized frontend/backend units, reducing cross-team blockers by 50% and increasing sprint velocity by 25%.",
          "Championed technical excellence through mentorship and agile refinement.",
          "Drove migration of 250K+ JavaScript lines to TypeScript, cutting runtime errors by 35% and accelerating feature delivery by 20%.",
          "Restructured React frontend into a monorepo, enabling component modularization and publication of multiple loyalty widget flavors for diverse customers. Delivered JS SDKs to merchants, granting full frontend customizability.",
          "Adopted NestJS for backend services, enabling 5x traffic growth while reducing module coupling by 60%.",
          "Designed RabbitMQ messaging to decouple 10 microservices, supporting 3K+ concurrent users with 40% fewer AWS resources (P99 latency <200ms).",
          "Migrated analytics to BigQuery, slashing main DB load by 70% and speeding complex queries 30x (15min → 30s).",
          "Launched CoreLoyalty, adopted by 100+ merchants in 6 months, featuring a flexible point system (↓70% customization requests) and SMB-tailored cashback model (↑40% retention).",
          "Developed 15+ API integrations (VTEX, Magento, WooCommerce), expanding addressable market by 60% and reducing merchant onboarding from 4 weeks → 3 days.",
          "Designed public REST APIs and developer tools for third-party adoption. Collaborated with POS providers on real-time integrations, establishing Coretava as the region's most interoperable loyalty platform."
        ]
      },
      {
        title: "Senior Software Engineer",
        startDate: new Date(2018, 9, 1), // October 2018
        endDate: new Date(2020, 2, 1), // March 2020
        achievements: [
          "Architected end-to-end Shopify integration via custom apps, enabling seamless merchant onboarding (adopted by 30+ clients within 3 months, expanding TAM by 15%).",
          "Led development of Android/iOS SDKs (complementing web SDKs), reducing client integration time by 40% and accelerating enterprise adoption.",
          "Co-launched TeamUp – a team-based loyalty product – by building a React Native mobile app that drove a 30% engagement lift in pilot enterprise accounts.",
          "Engineered AWS infrastructure (ECS/EC2/S3/CloudFront) supporting 500% YoY traffic growth with zero downtime during peak events.",
          "Mentored junior engineers on React/Redux best practices and CI/CD standards, reducing production incidents by 50%."
        ]
      },
      {
        title: "Software Engineer",
        startDate: new Date(2018, 0, 1), // January 2018
        endDate: new Date(2018, 9, 1), // October 2018
        achievements: [
          "Designed and implemented the initial microservices backend (Node.js/ Express) deployed on AWS ECS. Established public API access via EC2 load balancers, creating a robust infrastructure for growth.",
          "Developed key backend services powering user/tenant management, points lifecycle (earning/redemption), and interactive loyalty mechanics (missions, games, surveys).",
          "Spearheaded development of the React/Redux admin dashboard, customer-facing Gamibot widget, and JavaScript SDK – critical tools for internal operations and client integration.",
          "Managed frontend deployment pipeline using AWS S3 + CloudFront CDN, ensuring high-performance global access to the widget and dashboard.",
          "Delivered a production-ready MVP that successfully onboarded multiple early customers, proving product value and technical scalability."
        ]
      }
    ]
  },
  toptal: {
    company: "Toptal",
    location: "Palestinian Authority",
    positions: [
      {
        title: "Senior Software Engineer",
        startDate: new Date(2021, 6, 1), // July 2021
        endDate: undefined, // Present
        achievements: [
          "Atlantic Business Technologies: Built React loan application platform with real-time tracking and role-based access, reducing submission errors by 40%",
          "Perpetuating Inc.: Developed full-stack event management system (React/ Node.js) featuring Stripe payments and 30% faster load times via lazy loading",
          "DigiTech LLC: Engineered WebRTC streaming platform with real-time chat and customizable dashboards, maintaining 99% uptime during peak traffic"
        ]
      }
    ]
  },
  freightos: {
    company: "Freightos",
    location: "Palestinian Authority",
    positions: [
      {
        title: "Software Engineer",
        startDate: new Date(2016, 5, 1), // June 2016
        endDate: new Date(2018, 9, 1), // October 2018
        achievements: [
          "Spearheaded frontend development (React.js, Redux) for the core team revamping Freightos' marketplace platform, now serving 100K+ monthly active users.",
          "Architected a domain-driven frontend structure and integrated the company's internal UI kit.",
          "Owned the end-to-end release pipeline: implemented comprehensive testing (Jest unit/snapshot, E2E) and established robust CI/CD workflows.",
          "Championed seamless deployments using LaunchDarkly feature flags and Segment analytics for data-driven feature validation and performance monitoring."
        ]
      }
    ]
  }
};

export const EDUCATION = {
  university: "Birzeit University - Ramallah, Palestine",
  degree: "Bachelor's degree in Computer System Engineering",
  startDate: new Date(2012, 8, 1), // September 2012
  endDate: new Date(2017, 5, 1) // June 2017
};

export const CONTACT_INFO = {
  email: 'riyadyhia@gmail.com',
  phone: '+970597216925',
  linkedin: 'https://www.linkedin.com/in/riyad-yahya/',
  github: 'https://github.com/riyadyahya',
  portfolio: 'https://riyadyahya.github.io/'
};
