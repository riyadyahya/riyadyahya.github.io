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
  summary: "AI-augmented Lead Software Engineer, ten years in. Currently full-time at DataQueue, building a conversational AI platform on Next.js / NestJS with multi-cloud DevOps, accelerated by a stack of AI dev tools — Claude Code, Cursor, and custom subagents. Earlier: Lead Software Engineer at Coretava.",
  profileImage: "/profile.jpg"
};

export const TOP_SKILLS = [
  'Full-stack Development',
  'Next.js',
  'TypeScript',
  'NestJS',
  'Node.js',
  'React',
  'MongoDB',
  'MERN Stack',
  'AI Agents',
  'Voice AI',
  'Conversational AI',
  'AI-Augmented Development',
  'Claude Code',
  'Software Architecture',
  'Microservices',
  'AWS',
  'GCP',
  'Docker',
  'Kubernetes',
  'Vercel',
  'Terraform',
  'CI/CD',
  'DevOps',
  'Technical Leadership',
  'Team Leadership',
  'Mentorship',
  'Stripe Integration',
  'E-commerce',
  'BigQuery',
  'Agile Software Development'
];

export const SKILLS_DETAILED = {
  Languages: [
    'TypeScript', 'JavaScript', 'Python', 'SQL', 'GraphQL', 'HTML', 'CSS'
  ],
  Frontend: [
    'Next.js', 'React', 'Redux', 'MobX', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'Storybook', 'Server-side Rendering (SSR)', 'Responsive Web Design'
  ],
  Backend: [
    'Node.js', 'NestJS', 'Express.js', 'Payload CMS', 'FastAPI', 'Flask', 'REST APIs', 'GraphQL APIs', 'WebSockets', 'Webhooks', 'Microservices', 'Event-driven Architecture'
  ],
  'Databases & Storage': [
    'MongoDB', 'PostgreSQL', 'Supabase', 'BigQuery', 'Firebase', 'Amazon S3'
  ],
  'DevOps & Cloud': [
    'GCP (GKE)', 'AWS (ECS, EC2, EKS, Lambda, S3, CloudFront)', 'Vercel', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'CI/CD Pipelines'
  ],
  'AI & Voice': [
    'LiveKit', 'Deepgram', 'ElevenLabs', 'OpenAI', 'Whisper', 'Llama', 'Ollama', 'Vertex AI', 'AI Agents', 'Large Language Models (LLMs)', 'Speech-to-Text', 'Text-to-Speech', 'Asterisk', 'Vital PBX', 'SIP'
  ],
  'Integrations & APIs': [
    'Stripe (Connect, Checkout)', 'Twilio', 'SendGrid', 'Nash', 'Shippo', 'WhatsApp', 'Auth0', 'Amazon Cognito', 'Shopify', 'VTEX', 'Magento', 'WooCommerce', 'Pub/Sub', 'Apollo'
  ],
  'Testing & Tooling': [
    'Jest', 'Mocha', 'Sentry', 'Kibana', 'Google Analytics', 'Git', 'GitHub', 'Webpack', 'Figma'
  ],
  'AI-Augmented Development': [
    'Claude Code', 'Cursor AI', 'Claude Agent SDK', 'Custom Subagents', 'MCP Servers', 'Agentic Workflows', 'AI-Assisted Code Review', 'Automated Codebase Exploration', 'Anthropic API', 'OpenAI API'
  ],
  'Architecture & Leadership': [
    'Software Architecture', 'Solution Architecture', 'Technical Leadership', 'MERN Stack', 'Agile Software Development', 'Mentorship', 'Team Restructuring', 'Third-party Integration'
  ]
};

export const EXPERIENCE = {
  dataqueue: {
    company: "DataQueue",
    website: "https://www.dataqueue.ai/",
    location: "Remote",
    featured: true,
    positions: [
      {
        title: "Senior Full-Stack & DevOps Engineer",
        startDate: new Date(2025, 6, 1), // July 1, 2025
        endDate: undefined, // Present
        achievements: [
          "Developing a conversation AI platform end-to-end using Next.js, NestJS, and MongoDB, delivering scalable AI-powered conversational experiences.",
          "Owning DevOps on GCP GKE (Google Kubernetes Engine) — managing containerized deployments, cluster orchestration, networking, and cloud infrastructure for production scalability and reliability.",
          "Building robust NestJS backend services backed by MongoDB, ensuring high performance and reliability for real-time AI interactions.",
          "Creating responsive and intuitive Next.js frontend interfaces for seamless user engagement across web platforms.",
          "Implementing and managing Stripe integration for payment processing and subscription management.",
          "Developing WhatsApp integration for messaging and conversational AI interactions.",
          "Building SIP integrations with LiveKit, Asterisk, and Vital PBX for telephony infrastructure and voice communication.",
          "Implementing full-stack solutions combining NestJS APIs and Next.js frontend components for end-to-end feature delivery."
        ]
      }
    ]
  },
  coretava: {
    company: "Coretava",
    website: "https://coretava.com",
    location: "Palestinian Authority",
    positions: [
      {
        title: "Lead Software Engineer",
        startDate: new Date(2020, 2, 1),
        endDate: new Date(2025, 6, 1), // July 1, 2025
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
  freightos: {
    company: "Freightos",
    website: "https://freightos.com",
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
