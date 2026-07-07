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
    heading: 'From Tender Apprentice to Tech Entrepreneur',
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
      tech: 'Digital Tech',
      general: 'General',
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
    tagline: 'From tender apprentice to independent project lead — building tech products with engineering thinking',
    bio: "B.Eng. in Civil Engineering from Guangdong University of Technology. 2 years at Chevalier Construction in Hong Kong — started as a tender apprentice, independently managing government project tenders within 3 months. On-site at SSM518 public housing for 9 months, producing 1000+ RIFs, growing from site newcomer to project coordinator. Started a tech business in 2025, building an AI token platform with 500+ users and 20B+ tokens consumed. Seeking opportunities that combine engineering thinking with technical capability.",
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
    { name: 'BQ Preparation (2 independent projects)', category: 'engineering' as const },
    { name: 'RIF Production (1000+ forms)', category: 'engineering' as const },
    { name: 'Site Inspection (ITAP)', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: 'React / Vite (Frontend Development)', category: 'tech' as const },
    { name: 'Python (Data Analysis, Quant Strategy)', category: 'tech' as const },
    { name: 'AI Tools (ChatGPT/Claude)', category: 'tech' as const },
    { name: 'English (2 years in HK work environment)', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: 'Assistant Engineer (AE)',
      period: '2023.10 — 2025.09',
      description: 'Covered tender, site, and admin phases — grew from apprentice to independent project coordinator.',
      highlights: [
        '【Tender】Participated in 6 government infrastructure tenders (SSM 520, SSN 505, etc.)',
        '【Tender】Independently managed 2 full tender processes, mastered drawing-to-BQ conversion',
        '【Site】On-site at SSM518 public housing for 9 months, produced 1000+ RIFs',
        '【Site】Participated in excavation, backfilling, footing, MIC installation inspections',
        '【Site】Later coordinated workers, materials, and government/client department inspections',
        '【Admin】Reviewed 10 years of company files (HR, finance) for audit',
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
      technologies: ['AI API', 'Python', 'React', 'Data Analysis'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'AI Token Platform',
      description: 'Solving the information asymmetry for mainland China users unable to access ChatGPT/Claude.',
      technologies: ['AI API', 'Payment System', 'React', 'Web Dev'],
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
      technologies: ['Python', 'Data Analysis', 'AI Tools'],
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
      technologies: ['Web Dev', 'Data Processing', 'AI Tools'],
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
