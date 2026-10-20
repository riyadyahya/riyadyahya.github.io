// Helper function to calculate duration between two dates
export const calculateDuration = (startDate: Date, endDate?: Date): string | null => {
  if (!endDate) return null;

  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30.44);
  const diffYears = Math.floor(diffMonths / 12);
  const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? '' : 's'}`;

  if (diffYears > 0) {
    const remainingMonths = diffMonths % 12;
    if (remainingMonths > 0) {
      return `${plural(diffYears, 'year')} ${plural(remainingMonths, 'month')}`;
    }
    return plural(diffYears, 'year');
  }

  return plural(diffMonths, 'month');
};

// Helper function to format date range for display
export const formatDateRange = (startDate: Date, endDate?: Date): string => {
  const startFormatted = startDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  if (!endDate) {
    return `${startFormatted} – Present`;
  }

  const endFormatted = endDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  return `${startFormatted} – ${endFormatted}`;
};

export const PERSONAL_INFO = {
  name: "Riyad Yahya",
  title: "Fractional CTO & Senior Engineer",
  tagline: "I help early- and growth-stage teams ship AI products, and the platforms they run on.",
  description: "Fractional CTO and hands-on senior engineer helping early- and growth-stage teams ship AI and voice products on Next.js, Supabase, NestJS, AWS and GCP. Ten years in; previously DataQueue, Coretava and Freightos.",
  summary: "Fractional CTO and hands-on senior engineer, ten years in. I partner with multiple companies to own architecture and lead engineering while building alongside the team. I ship AI and voice products, and platforms on Next.js / NestJS with multi-cloud DevOps, using AI dev tools like Claude Code, Cursor, and custom subagents. Most recently I led full-stack and DevOps at DataQueue; before that, Lead Software Engineer at Coretava for ~5 years.",
  availability: "Taking on new projects",
  location: "Remote, based in Palestine",
  timezone: "UTC+2, UTC+3 in summer",
};

export const TOP_SKILLS = [
  'Full-stack Development',
  'Next.js',
  'TypeScript',
  'NestJS',
  'Node.js',
  'React',
  'Python',
  'FastAPI',
  'Supabase',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'MERN Stack',
  'AI Agents',
  'Voice AI',
  'Conversational AI',
  'LiveKit',
  'Twilio',
  'AI-Augmented Development',
  'Vibe Coding',
  'Agentic Coding',
  'Prompt Engineering',
  'Context Engineering',
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
    'Next.js', 'React', 'TanStack Query', 'Redux', 'MobX', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'Storybook', 'Server-side Rendering (SSR)', 'Responsive Web Design'
  ],
  Backend: [
    'Node.js', 'NestJS', 'Express.js', 'Python (FastAPI, Flask)', 'Payload CMS', 'REST APIs', 'GraphQL APIs', 'WebSockets', 'Webhooks', 'RabbitMQ', 'Amazon SQS', 'Microservices', 'Event-driven Architecture'
  ],
  'Databases & Storage': [
    'PostgreSQL', 'Supabase (Postgres, Auth, Storage)', 'MongoDB', 'Redis', 'BigQuery (analytics, ML)', 'Firebase', 'Amazon S3'
  ],
  'DevOps & Cloud': [
    'Vercel', 'GCP (GKE)', 'AWS (ECS, EC2, EKS, Lambda, S3, CloudFront)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'CI/CD Pipelines'
  ],
  'AI & Voice': [
    'LiveKit', 'Twilio Voice', 'Deepgram', 'ElevenLabs', 'OpenAI', 'Whisper', 'Llama', 'Ollama', 'Vertex AI', 'AI Agents', 'AI Agent Orchestration', 'Agentic AI Systems', 'RAG (knowledge bases)', 'Large Language Models (LLMs)', 'Speech-to-Text', 'Text-to-Speech', 'Asterisk', 'Vital PBX', 'SIP'
  ],
  'Integrations & APIs': [
    'Stripe (Connect, Checkout, Billing)', 'Twilio', 'WhatsApp Business API', 'Gmail API', 'SendGrid', 'Nash', 'Shippo', 'Auth0', 'Amazon Cognito', 'Shopify', 'VTEX', 'Magento', 'WooCommerce', 'Pub/Sub', 'Apollo'
  ],
  'Testing & Tooling': [
    'Jest', 'Mocha', 'Sentry', 'Kibana', 'Google Analytics', 'Git', 'GitHub', 'Webpack', 'Figma'
  ],
  'AI-Augmented Development': [
    'Vibe Coding', 'Agentic Coding', 'Claude Code', 'Cursor AI', 'Replit', 'Claude Agent SDK', 'Custom Subagents', 'MCP Servers', 'Prompt Engineering', 'Context Engineering', 'Spec-driven Development', 'Agentic Workflows', 'AI-Assisted Code Review', 'Automated Codebase Exploration', 'Anthropic API', 'OpenAI API', 'Gemini API'
  ],
  'Architecture & Leadership': [
    'Software Architecture', 'Solution Architecture', 'Technical Leadership', 'MERN Stack', 'Agile Software Development', 'Mentorship', 'Team Restructuring', 'Third-party Integration'
  ]
};

export const EXPERIENCE = {
  independent: {
    company: "Independent Consulting",
    website: "",
    location: "Remote",
    featured: true,
    positions: [
      {
        title: "Fractional CTO & Senior Engineer",
        startDate: new Date(2025, 5, 1), // June 2025
        endDate: undefined, // Present
        achievements: [
          "Partner with multiple companies as a fractional CTO and hands-on senior engineer, shipping full-stack product and platform work across Next.js, Supabase, NestJS, Node.js, and Python.",
          "Advise on software architecture, multi-cloud DevOps (Vercel, AWS, GCP), and scalable backend design for early- and growth-stage teams.",
          "Embed AI-native delivery to speed up teams and raise code quality: vibe coding for fast prototypes, and agentic coding with Claude Code, Cursor, and custom subagents for production.",
          "Build AI, voice, and conversational features end-to-end, from LLM orchestration to real-time telephony and messaging integrations."
        ]
      }
    ]
  },
  dataqueue: {
    company: "DataQueue",
    website: "https://www.dataqueue.ai/",
    location: "Remote",
    positions: [
      {
        title: "Senior Full-Stack & DevOps Engineer",
        startDate: new Date(2025, 6, 1), // July 1, 2025
        endDate: new Date(2026, 5, 1), // June 1, 2026
        achievements: [
          "Built a conversational AI platform end-to-end using Next.js, NestJS, and MongoDB, delivering scalable AI-powered conversational experiences.",
          "Owned DevOps on GCP GKE (Google Kubernetes Engine), managing containerized deployments, cluster orchestration, networking, and cloud infrastructure for production scalability and reliability.",
          "Built robust NestJS backend services backed by MongoDB, ensuring high performance and reliability for real-time AI interactions.",
          "Created responsive and intuitive Next.js frontend interfaces for seamless user engagement across web platforms.",
          "Implemented and managed Stripe integration for payment processing and subscription management.",
          "Developed WhatsApp integration for messaging and conversational AI interactions.",
          "Built SIP integrations with LiveKit, Asterisk, and Vital PBX for telephony infrastructure and voice communication.",
          "Implemented full-stack solutions combining NestJS APIs and Next.js frontend components for end-to-end feature delivery."
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
          "Co-launched TeamUp, a team-based loyalty product, by building a React Native mobile app that drove a 30% engagement lift in pilot enterprise accounts.",
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
          "Spearheaded development of the React/Redux admin dashboard, customer-facing Gamibot widget, and JavaScript SDK, critical tools for internal operations and client integration.",
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
  phoneDisplay: '+970 597 216 925',
  whatsapp: 'https://wa.me/970597216925',
  calendar: 'https://calendar.app.google/g1xnQQhhXEsXTe2X7',
  linkedin: 'https://www.linkedin.com/in/riyad-yahya/',
  github: 'https://github.com/riyadyahya',
  portfolio: 'https://riyadyahya.github.io/'
};

export const CLIENTS = [
  {
    name: 'Instack AI',
    legalName: '24x7 Direct Pty Ltd',
    website: 'https://instack.com.au/',
    role: 'Senior Solution Architect & Engineer',
    achievements: [
      'Leading a 4-engineer team building a multi-tenant SaaS voice agent platform: customers design voice workflows, connect Twilio numbers and calendars, and upload knowledge bases to handle inbound and outbound calls.',
      'Cut the voice agent’s response latency roughly 3x, from 2 or 3 seconds to about 1 second, so conversations feel real-time.',
      'Built and deployed LiveKit voice agents on AWS ECS, with Deepgram speech-to-text, ElevenLabs text-to-speech and OpenAI for reasoning.',
      'Integrated Twilio telephony from the ground up, including regulated-number provisioning, regulatory bundles and toll-free support, plus per-number Stripe billing with failure rollbacks.',
      'Built the structured call-data capture and workflow-variable engine, turning static call flows into data-aware ones.',
    ],
  },
  {
    name: 'BidSource',
    website: 'https://www.bidsource.io/',
    role: 'Senior Solution Architect',
    achievements: [
      'Building a rate management platform for freight forwarders on Next.js, with Supabase (Postgres, Auth, Storage) as the entire backend, replacing spreadsheet-based pricing workflows.',
      'Designed and shipped Opportunities, which combines multiple buy rates, batch carrier outreach and derived sell rates in one flow, replacing multi-day manual quoting cycles.',
      'Built a 4-tier lane pricing recommendation engine with AI estimation and confidence scoring, plus projected-margin calculations.',
      'Built AWS Lambda functions for rate allocation, provisioned infrastructure with Terraform, and added fuel-surcharge management through the EIA API.',
    ],
  },
  {
    name: 'Yalla Bites',
    website: 'https://yallabites.com/',
    role: 'Backend & DevOps Engineer',
    achievements: [
      'Building backend services for a US home-chef marketplace that connects customers with local cooks for on-demand meal delivery.',
      'Developing on Next.js, Payload CMS and Supabase on Vercel, with Stripe payments, payouts and subscriptions.',
      'Integrated Nash for delivery orchestration and Shippo for shipping labels, and own CI/CD with GitHub Actions and Sentry monitoring.',
    ],
  },
];

export const SERVICES = [
  {
    title: 'Fractional CTO',
    problem: 'You need senior technical leadership, but not a full-time CTO yet.',
    offer: 'I join your team part-time to own architecture decisions, review code, mentor engineers, and set up an AI-assisted workflow (Claude Code, Cursor, custom subagents) that your team can keep running.',
    proof: 'Leading a four-engineer team at Instack AI today. At Coretava I led 6 to 10 engineers and split them into frontend and backend units: 50% fewer cross-team blockers and 25% faster sprints.',
  },
  {
    title: 'AI and voice features, end to end',
    problem: 'You want an assistant that can actually talk to your customers: in your app, on WhatsApp, or over the phone.',
    offer: 'I build the whole path: LLM orchestration, real-time speech with LiveKit, Deepgram and ElevenLabs, telephony through Twilio and Asterisk, WhatsApp messaging, and the Stripe billing around it.',
    proof: 'Cut Instack AI’s voice agent response time from 2 or 3 seconds to about one, and built DataQueue’s conversational AI platform end to end.',
  },
  {
    title: 'Platform and DevOps',
    problem: 'Deploys feel risky, the cloud bill keeps growing, or the database struggles under load.',
    offer: 'Architecture reviews and hands-on fixes across Vercel, Supabase, AWS and GCP (GKE): Kubernetes, Terraform, CI/CD, message queues, and moving heavy queries off your main database.',
    proof: 'At Coretava: 3K+ concurrent users on 40% fewer AWS resources, and analytics queries cut from 15 minutes to 30 seconds.',
  },
];

export const RESULTS = [
  {
    company: 'Instack AI',
    title: 'A voice agent that answers in about a second, down from two or three',
    body: 'Led a sustained performance push on a multi-tenant voice agent platform built on LiveKit, Deepgram, ElevenLabs and OpenAI, cutting response latency roughly 3x so calls feel real-time. Also built its Twilio telephony layer and per-number Stripe billing.',
    stack: ['LiveKit', 'Twilio', 'Deepgram', 'ElevenLabs', 'OpenAI', 'AWS ECS', 'Supabase', 'Stripe'],
  },
  {
    company: 'DataQueue',
    title: 'A conversational AI platform for web, WhatsApp and phone',
    body: 'Led full-stack and DevOps for the platform end to end: NestJS services on MongoDB, a Next.js product UI, Stripe subscriptions, WhatsApp messaging, and SIP telephony through LiveKit, Asterisk and Vital PBX, all running on GKE.',
    stack: ['Next.js', 'NestJS', 'MongoDB', 'Redis', 'GKE', 'Terraform', 'LiveKit', 'Asterisk', 'Stripe'],
  },
  {
    company: 'BidSource',
    title: 'Freight quotes in one flow instead of days of spreadsheets',
    body: 'Designed and shipped Opportunities, which lets forwarders combine buy rates, send batch carrier outreach and derive sell rates in one place, backed by a 4-tier lane pricing engine with AI estimates and confidence scores.',
    stack: ['Next.js', 'Supabase', 'Vercel', 'Python (FastAPI)', 'AWS Lambda', 'Terraform', 'OpenAI'],
  },
  {
    company: 'Coretava',
    title: 'Analytics queries from 15 minutes to 30 seconds',
    body: 'Moved analytics off the main MongoDB database and onto BigQuery, which also became the base for big-data analysis and machine learning. Complex queries became 30× faster and load on MongoDB dropped by 70%.',
    stack: ['MongoDB', 'BigQuery'],
  },
  {
    company: 'Coretava',
    title: 'Merchant onboarding from four weeks to three days',
    body: 'Built 15+ e-commerce integrations, including VTEX, Magento and WooCommerce, plus public REST APIs for third parties. The addressable market grew 60%.',
    stack: ['REST APIs', 'VTEX', 'Magento', 'WooCommerce'],
  },
];

export const FAQ = [
  {
    question: 'What does an engagement look like?',
    answer: 'Usually one of three shapes: a fixed-scope build, such as a voice agent or a set of integrations; an architecture or infrastructure review with a written plan; or a part-time fractional CTO role. We pick the shape on the first call.',
  },
  {
    question: 'How much does it cost?',
    answer: 'It depends on scope. After the intro call I send a short written proposal with either a fixed price or a day rate, so you know the number before any work starts.',
  },
  {
    question: 'Where are you based, and what hours do you work?',
    answer: `I work remotely from Palestine (${PERSONAL_INFO.timezone}). My day overlaps with European working hours and with mornings on the US East Coast.`,
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Yes. Most of my work happens alongside in-house engineers: pairing, code review, and leaving code and docs your team can own.',
  },
  {
    question: 'How do you use AI tools?',
    answer: 'Heavily, and on purpose. I vibe-code prototypes and internal tools to test ideas in hours, then switch to agentic coding for production: Claude Code, Cursor, custom subagents and MCP servers handle exploration, review and routine code, while I own the architecture and review and test every change before it ships.',
  },
];

export const STACK_SUMMARY = [
  'TypeScript', 'Next.js', 'Node.js', 'NestJS', 'Python (FastAPI)',
  'Supabase', 'PostgreSQL', 'MongoDB', 'Redis',
  'Vercel', 'AWS', 'GCP', 'Kubernetes', 'Terraform',
  'LiveKit', 'Twilio', 'OpenAI', 'Stripe',
];

export const AI_WORKFLOW = [
  'Vibe coding for prototypes', 'Agentic coding', 'Claude Code', 'Cursor',
  'Custom subagents', 'MCP servers', 'Context engineering',
];
