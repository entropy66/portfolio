const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },

  hero: {
    greeting: "Hi, I'm",
    ctaProjects: 'View Projects',
    ctaContact: 'Contact Me',
    scrollHint: 'Scroll Down',
  },

  about: {
    label: 'About Me',
    heading: 'From Building Engineer to Tech Entrepreneur',
    location: 'Location',
    email: 'Email',
    phone: 'Phone',
    social: 'Social',
  },

  skills: {
    label: 'Skills',
    heading: 'Technical Abilities',
    categories: {
      engineering: 'Engineering',
      tech: 'Tech Tools',
      general: 'Core Competencies',
    },
  },

  experience: {
    label: 'Experience',
    heading: 'Career Journey',
  },

  projects: {
    label: 'Portfolio',
    heading: 'Featured Projects',
    github: 'GitHub',
    preview: 'Preview',
  },

  contact: {
    label: 'Contact',
    heading: "Let's Talk",
    description: 'Whether for job opportunities or tech discussions, feel free to reach out.',
  },

  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: 'Zhang Weijian',
    title: 'Engineering Background · Technical Skills',
    tagline: '2 years in Hong Kong construction — building tech products with engineering thinking',
    bio: "B.Eng. in Civil Engineering from Guangdong University of Technology. 2 years as Assistant Engineer at Chevalier Construction in Hong Kong — coordinated government infrastructure projects across tender, site, and admin phases, ensuring on-time delivery. Solid engineering skills from BQ preparation to site inspection and HKSSM compliance. Started a tech business in 2025, building an AI token platform with 500+ users and 20B+ tokens consumed. Seeking opportunities that combine engineering thinking with technical capability.",
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
    { name: 'HKSSM Specification', category: 'engineering' as const },
    { name: 'BQ Preparation', category: 'engineering' as const },
    { name: 'Site Inspection (RIF / ITAP)', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: 'Project Coordination & Management', category: 'engineering' as const },
    { name: 'Problem Solving: resolved disputes, protected company interests', category: 'general' as const },
    { name: 'Coordination: managed construction progress, ensured on-time delivery', category: 'general' as const },
    { name: 'Fast Learner: independent in 3 months from apprentice', category: 'general' as const },
    { name: 'AI Tools (ChatGPT/Claude)', category: 'tech' as const },
    { name: 'English (2 years in HK work environment)', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: 'Assistant Engineer (AE)',
      period: '2023.10 — 2025.09',
      description: 'Coordinated government infrastructure projects across tender, site, and admin phases, ensuring on-time delivery.',
      highlights: [
        '【Tender】Participated in 6 government infrastructure tenders (SSM 520, SSN 505, etc.), handled tender documents and BQ preparation',
        '【Site】On-site at SSM518 public housing for 9 months, coordinated construction progress and solved on-site issues',
        '【Site】Coordinated government and client department inspections, ensured on-time project delivery',
        '【Admin】Reviewed 10 years of company files (HR, finance) for audit and organization',
        '【Admin】Assisted in resolving partner company disputes, protecting company interests',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: 'Independent Startup',
      role: 'Tech Entrepreneur',
      period: '2025.11 — 2026.06',
      description: 'Explored tech entrepreneurship — AI platform profitable, quant strategy failed with valuable lessons.',
      highlights: [
        '【AI Platform】Built AI token trading platform: 500+ users, 20B+ tokens consumed, profitable',
        '【AI Platform】Exited proactively due to rising competition and ban risk — demonstrated risk judgment',
        '【Quant Strategy】Developed AI-assisted trading strategy, lost $10K+ due to poor risk management',
        '【Lesson】Learned that risk management matters more than technical tools',
        '【Info System】Built AI-powered market information processing platform',
      ],
      technologies: ['AI API', 'Data Analysis', 'AI Tools'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'AI Token Platform',
      description: 'Solving the information asymmetry for mainland China users unable to access ChatGPT/Claude.',
      technologies: ['AI API', 'Payment System', 'Platform'],
      highlights: [
        '500+ users, 20B+ tokens consumed',
        'Profitable — exited proactively due to rising competition',
        'Demonstrated ability to spot opportunities, execute fast, and judge risk',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: 'Quantitative Trading (Failed Case)',
      description: 'AI-assisted automated trading strategy development.',
      technologies: ['AI Tools', 'Data Analysis'],
      highlights: [
        'Developed automated trading strategy with AI assistance',
        'Lost $10K+ due to insufficient risk management',
        'Lesson: over-reliance on AI, weak risk control, lack of live trading experience',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: 'Information Processing System',
      description: 'AI-powered market information processing and analysis platform.',
      technologies: ['AI Tools', 'Data Processing'],
      highlights: [
        'Built information processing workflow',
        'Improved data processing efficiency',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default en
