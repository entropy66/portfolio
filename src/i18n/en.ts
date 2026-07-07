const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },

  hero: {
    greeting: 'Engineering · Technology',
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
    preview: 'Live Demo',
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
    tagline: 'From construction site to startup — building tech products with engineering thinking',
    bio: 'B.Eng. in Civil Engineering from Guangdong University of Technology. 2 years as Assistant Engineer at Chevalier Construction in Hong Kong — coordinated government infrastructure projects across tender, site, and admin phases, ensuring on-time delivery. Started a tech business in 2025, building an AI token platform with 500+ users and 20B+ tokens consumed, profitable. Experienced a quant trading loss due to poor risk management, learning that "technology is just a tool, risk management is the core". Seeking opportunities that combine engineering thinking with technical capability.',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: 'Kowloon City, HK / Nanshan, Shenzhen',
    blog: 'https://www.negentropypath.top/',
    avatar: '/portfolio/avatar.png',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-zhang-6a6483420/', icon: 'linkedin' },
    ],
  },

  stats: [
    { value: '500+', label: 'Users' },
    { value: '200亿', label: 'Tokens' },
    { value: '盈利', label: '主动离场' },
  ],

  skillsData: [
    { name: 'HKSSM Specification', category: 'engineering' as const },
    { name: 'BQ Preparation & Cost Estimation', category: 'engineering' as const },
    { name: 'Site Inspection (RIF / ITAP)', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: 'Project Coordination & Multi-stakeholder Management', category: 'engineering' as const },
    { name: 'AI Tools Deep Application (ChatGPT/Claude)', category: 'tech' as const },
    { name: 'Dispute Resolution & Company Interest Protection', category: 'general' as const },
    { name: 'Cross-department Coordination & On-time Delivery', category: 'general' as const },
    { name: 'Fast Learner: independent in 3 months from apprentice', category: 'general' as const },
    { name: 'English Working Communication (HK 2 years)', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: 'Assistant Engineer (AE)',
      period: '2023.10 — 2025.09',
      description: 'Coordinated government infrastructure projects across tender, site, and admin phases, ensuring on-time delivery.',
      highlights: [
        'Participated in 6 government infrastructure tenders (SSM 520, SSN 505, etc.), handled BQ preparation and tender document management',
        'On-site at SSM518 public housing for 9 months, independently coordinated construction progress and solved technical issues',
        'Liaised with government and client departments for inspection, ensured on-time project delivery',
        'Organized 10 years of company archives (HR, finance), optimized internal management processes',
        'Assisted in resolving partner company disputes, effectively protected company interests',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: 'Independent Startup',
      role: 'Tech Entrepreneur',
      period: '2025.11 — 2026.06',
      description: 'Explored tech entrepreneurship — AI platform profitable, quant strategy experienced setback with core lesson learned.',
      highlights: [
        'Built AI Token trading platform: 500+ users, 20B+ tokens consumed, profitable',
        'Proactively exited due to rising competition and ban risk — demonstrated risk judgment',
        'Developed AI-assisted quant strategy, experienced loss due to poor risk management, extracted "risk management > tech" insight',
        'Built AI-powered market information processing platform, improved data processing efficiency',
      ],
      technologies: ['AI API', 'Data Analysis', 'AI Tools'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'AI Copy Trading System',
      description: 'AI-powered copy trading system — LLM parses Discord trading signals and executes trades automatically.',
      technologies: ['AI API', 'Discord API', 'Exchange API', 'Docker', 'Cloud Server'],
      highlights: [
        'One-click deployment: cloud server script completes system setup',
        'Signal parsing: ChatGPT/DeepSeek auto-identifies trader signals',
        'Auto trading: integrated with Bybit/Bitget/Binance exchange APIs',
        'Risk management: loss-based sizing, leverage settings, batch take-profit',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: 'AI Token Platform',
      description: 'Solving information asymmetry for mainland China users unable to access ChatGPT/Claude. Validated with CLV model and ROI Sharpe Ratio.',
      technologies: ['AI API', 'Payment System', 'Platform'],
      highlights: [
        'Model validation: CLV/CAC > 5, positive ROI, sustained token consumption',
        '500+ users registered, 20B+ tokens consumed, profitable',
        'Exit decision: rising competition → increasing price elasticity → proactive exit',
        'Validated CLV model and ROI Sharpe Ratio theory in real business',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: 'Quantitative Trading Exploration',
      description: 'AI-assisted quant trading strategy — extracting risk management methodology from failure.',
      technologies: ['AI Tools', 'Data Analysis'],
      highlights: [
        'Developed automated trading strategy with AI assistance',
        'Experienced loss due to insufficient risk management, extracted core lessons',
        'Cognitive upgrade: over-reliance on AI, weak risk control, lack of live trading experience',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default en
