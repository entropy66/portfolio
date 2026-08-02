const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },

  hero: {
    greeting: 'Building Engineer → Tech Entrepreneur',
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
      engineering: 'Engineering Management',
      ai: 'AI Engineering',
      tools: 'Tech Tools',
      strengths: 'Key Strengths',
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
    description: 'Interested in product / data roles. If you are building something in AI, infrastructure, or fintech — let\'s talk.',
  },

  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: 'Zhang Weijian',
    title: 'Building Engineer → Tech Entrepreneur',
    tagline: 'From construction site to startup — building tech products with engineering thinking',
    bio: 'Built and operated a profitable AI API platform serving 572 users and processing 140B+ tokens — exited on market timing. Previously 2 years as Assistant Engineer at Chevalier Construction in Hong Kong, coordinating government infrastructure projects from tender to handover. Combined engineering rigor with technical execution to build real products. Now looking for product / data roles where I can apply the same builder mindset.',
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
      { value: '5.69M+', label: 'Requests' },
      { value: '500+', label: 'Users' },
      { value: '140B+', label: 'Tokens' },
      { value: 'Profitable', label: 'Exit on Timing' },
    ],

  skillsData: [
      // ── Engineering Management ──
      { name: 'Tender Document Review & Quantity Data Analysis', category: 'engineering' as const },
      { name: 'Site Coordination & Quality Acceptance Management', category: 'engineering' as const },
      { name: 'Records Management & Information Architecture', category: 'engineering' as const },
      { name: 'Multi-party Stakeholder Coordination', category: 'engineering' as const },

      // ── AI Engineering ──
      { name: 'AI API Integration & Platform Building', category: 'ai' as const },
      { name: 'LLM Application Development (ChatGPT/Claude/DeepSeek)', category: 'ai' as const },
      { name: 'Vibe Coding / AI-assisted Development', category: 'ai' as const },
      { name: 'Data Analysis & Quant Strategies', category: 'ai' as const },

      // ── Tech Tools ──
      { name: 'AutoCAD (2D Drafting)', category: 'tools' as const },
      { name: 'Revit (BIM)', category: 'tools' as const },
      { name: 'SAP2000 (Structural Analysis)', category: 'tools' as const },

      // ── Key Strengths ──
      { name: 'From zero to independent project lead in 3 months', category: 'strengths' as const },
      { name: 'Coordinated 3 HK government projects to on-time delivery', category: 'strengths' as const },
      { name: 'Built AI platform with 500+ users, profitable exit', category: 'strengths' as const },
      { name: 'Built systematic risk framework for trading systems', category: 'strengths' as const },
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
      description: 'Explored tech entrepreneurship — built AI platform profitable, built quant trading system with systematic risk controls.',
      highlights: [
              'Built AI API gateway: 572 users, 140B+ tokens, 5.69M requests, profitable exit',
              'Exited proactively as competition intensified — validated CLV-based decision framework',
              'Developed AI-assisted quant trading system with systematic risk controls (position sizing, stop-loss, batch take-profit)',
              'Built AI-powered market information processing platform, improved data processing efficiency',
            ],
      technologies: ['AI API', 'Data Analysis', 'AI Tools'],
    },
  ],

  projectsData: [
    {
          id: 'proj-1',
          title: 'AI API Gateway',
          image: '/portfolio/images/api-dashboard.png',
          description: 'AI API proxy service for mainland China users. 140.98B tokens consumed, 5.69M+ requests, 572 users, profitable exit.',
      technologies: ['AI API', 'Payment System', 'Cache Optimization', 'CLV Model'],
      highlights: [
              '140.98B tokens consumed, 5,689,657 requests, 572 registered users, profitable exit',
              'Managed models: ChatGPT, Claude, Gemini',
              'Cache hit rate peaked at ~100%, average response time 107ms',
              'Exit decision: rising competition → price elasticity increase → proactive exit, validated CLV model',
            ],
      github: undefined,
      link: 'https://api.negentropypath.xyz/admin/accounts',
    },
    {
          id: 'proj-2',
          title: 'AI Copy Trading System',
          image: '/portfolio/images/copy-trading.png',
          description: 'AI-powered multi-trader copy trading system — LLM parses Discord trading signals and executes trades automatically.',
      technologies: ['AI API', 'Discord API', 'Exchange API', 'Docker', 'Cloud Server'],
      highlights: [
        '2,156 total trades executed, covering 12+ trader signal sources',
        'TOP1 trader profit +$4,727.17, total fees $11,782.57',
        'Integrated with Bybit / Bitget / Binance exchanges',
        'Risk management: loss-based sizing, leverage settings, batch take-profit',
        'Trading pairs: BTC, ETH, WLD, SOL and other major cryptocurrencies',
      ],
      github: undefined,
      link: undefined,
    },
    {
          id: 'proj-3',
          title: 'Quantitative Trading Engine',
          image: '/portfolio/images/quant-engine.jpg',
          description: 'Multi-instance parallel quant trading system — BTC/USDC perpetual contract short strategy with sub-second latency.',
      technologies: ['Python', 'Exchange REST API', 'Multi-process Architecture', 'Risk Control'],
      highlights: [
        'System latency 261ms-273ms, live-trading grade execution',
        'Multi-process parallel architecture running independent strategy instances',
        'Built-in local stop-loss, single trade loss controlled within 0.3%',
        'Signal pipeline: raw signal → confirmation (~1.8s) → execution',
        'Systematic risk framework: position sizing, stop-loss, and batch take-profit',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default en