const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },

  hero: {
    greeting: 'Hello, I\'m',
    ctaProjects: 'View Projects',
    ctaContact: 'Contact Me',
    scrollHint: 'Scroll Down',
  },

  about: {
    label: 'About Me',
    heading: 'Where Engineering Meets Technology',
    location: 'Location',
    email: 'Email',
    phone: 'Phone',
    social: 'Social',
  },

  skills: {
    label: 'Skill Set',
    heading: 'Technical Competencies',
    categories: {
      engineering: 'Engineering',
      tech: 'Digital Tech',
      general: 'General',
    },
  },

  experience: {
    label: 'Work History',
    heading: 'Career Path',
  },

  projects: {
    label: 'Portfolio',
    heading: 'Selected Projects',
    github: 'GitHub',
    preview: 'Live Demo',
  },

  contact: {
    label: 'Get in Touch',
    heading: 'Let\'s Talk',
    description: 'Open to job opportunities and tech discussions. Feel free to reach out.',
  },

  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: 'Weijian Zhang',
    title: 'Engineer · Entrepreneur',
    tagline: 'From civil engineering to the digital world — solving real problems with technology',
    bio: 'Bachelor of Civil Engineering from Guangdong University of Technology. Spent over two years at Chevalier (Construction) in Hong Kong, contributing to government housing and public infrastructure projects across tendering, site supervision, and administration. Skilled in BQ preparation, construction inspection, and HKSSM specifications. In 2025, pivoted to entrepreneurship — building websites, developing quantitative trading strategies, and exploring AI tool commercialization. Seeking opportunities that combine engineering discipline with technical innovation.',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: 'China',
    avatar: '/portfolio/avatar.png',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-zhang-6a6483420/', icon: 'linkedin' },
    ],
  },

  skillsData: [
    { name: 'HKSSM Specifications', category: 'engineering' as const },
    { name: 'BQ Preparation', category: 'engineering' as const },
    { name: 'Quantity Surveying', category: 'engineering' as const },
    { name: 'RIF / ITAP Inspection', category: 'engineering' as const },
    { name: 'Rebar / Soil / SRT / Prode Testing', category: 'engineering' as const },
    { name: 'Code of Practice', category: 'engineering' as const },
    { name: 'Buildings Ordinance', category: 'engineering' as const },
    { name: 'Web Development & Operations', category: 'tech' as const },
    { name: 'Quantitative Trading', category: 'tech' as const },
    { name: 'Data Analysis', category: 'tech' as const },
    { name: 'AI Tools & Integration', category: 'tech' as const },
    { name: 'Information Systems', category: 'tech' as const },
    { name: 'Microsoft Office', category: 'general' as const },
    { name: 'English Proficiency', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: 'Assistant Engineer (AE)',
      period: 'Mar 2023 — Sep 2025',
      description: 'Contributed to Hong Kong government infrastructure projects across three phases: tendering, site supervision, and administration.',
      highlights: [
        'Participated in multiple government project tenders (SSM 520 Public Housing, SSN 505 Public Market, etc.), independently preparing BQs and tender documents',
        'On-site at Hong Kong SSM518 Modular Public Housing for 9 months, responsible for RIF preparation and construction inspection support',
        'Involved in excavation, backfilling, footing, and MIC installation inspections',
        'Proficient in rebar test, soil test, SRT, and Prode test methodologies',
        'Managed company asset procurement and coordinated recruitment meetings and interviews',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: 'Self-Employed',
      role: 'Entrepreneur',
      period: 'Nov 2025 — Jun 2026',
      description: 'Independently explored tech entrepreneurship across web development, quantitative trading, and AI applications.',
      highlights: [
        'Built a personal independent website, handling product design and operations end-to-end',
        'Developed quantitative trading strategies with data-driven decision analysis',
        'Launched an AI token distribution platform, exploring AI tool commercialization',
        'Built an information processing website to improve data handling efficiency',
      ],
      technologies: ['Web Dev', 'Quant Trading', 'Data Analysis', 'AI Tools'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'Personal Website',
      description: 'An independent site built from scratch — covering product design, frontend development, and operations.',
      technologies: ['Web Dev', 'Product Design', 'Operations'],
      highlights: [
        'Completed the full cycle from design to deployment independently',
        'Handled product positioning and user growth',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: 'Quantitative Trading System',
      description: 'A data-driven quantitative trading system exploring automated investment decisions.',
      technologies: ['Data Analysis', 'Strategy Dev', 'Python'],
      highlights: [
        'Developed automated trading strategies',
        'Conducted data backtesting and risk assessment',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: 'AI Token Platform',
      description: 'An AI token distribution platform exploring commercialization of AI tools.',
      technologies: ['AI API', 'Payment Systems', 'Web Dev'],
      highlights: [
        'Completed platform setup and token distribution',
        'Explored monetization models for AI tools',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-4',
      title: 'Info Processing Tool',
      description: 'A utility website designed to improve data processing efficiency.',
      technologies: ['Web Dev', 'Data Processing'],
      highlights: [
        'Simplified data processing workflows',
        'Improved information handling efficiency',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default en
