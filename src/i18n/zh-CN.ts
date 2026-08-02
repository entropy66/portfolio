const zhCN = {
  nav: {
    about: '关于',
    skills: '技能',
    experience: '经历',
    projects: '项目',
    contact: '联系',
  },

  hero: {
    greeting: '建筑工程师 → 科技创业者',
    ctaProjects: '查看项目',
    ctaContact: '联系我',
    scrollHint: '向下滚动',
  },

  about: {
    label: '关于我',
    heading: '从建筑工程师到科技创业者',
    location: '位置',
    email: '邮箱',
    phone: '电话',
    social: '社交',
  },

  skills: {
    label: '技能',
    heading: '技术能力',
    categories: {
      engineering: '工程管理',
      ai: 'AI 工程',
      tools: '技术工具',
      strengths: '核心优势',
    },
  },

  experience: {
    label: '经历',
    heading: '职业历程',
  },

  projects: {
    label: '作品集',
    heading: '精选项目',
    github: 'GitHub',
    preview: '在线预览',
  },

  contact: {
    label: '联系',
    heading: '有想法？聊聊吧',
    description: '对产品/数据方向感兴趣。如果你在做 AI、基础设施或金融科技相关的事——聊聊吧。',
  },

  footer: {
    rights: '保留所有权利',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: '张炜健',
    title: '建筑工程师 → 科技创业者',
    tagline: '从工地到创业——用工程思维打造技术产品',
    bio: '从土木工程到科技创业。2 年香港 Chevalier 助理工程师经验，协调政府基建项目从招标到验收全流程。2025 年独立搭建 AI API 中转平台：572 用户，1400+ 亿 Token 消耗，盈利退出。用工程思维做产品，用技术能力落地。正在寻找产品/数据方向的机会。',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: '九龙城, 香港 / 南山, 深圳',
    blog: 'https://www.negentropypath.top/',
    avatar: '/portfolio/avatar.png',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-zhang-6a6483420/', icon: 'linkedin' },
    ],
  },

  stats: [
      { value: '569万+', label: '请求' },
      { value: '500+', label: '用户' },
      { value: '1400+亿', label: 'Tokens' },
      { value: '盈利', label: '择时退出' },
    ],

  skillsData: [
      // ── 工程管理 ──
      { name: '招标文件审核与工程量数据整理', category: 'engineering' as const },
      { name: '现场协调与质量验收管理', category: 'engineering' as const },
      { name: '档案整理与信息管理', category: 'engineering' as const },
      { name: '四方 Stakeholder 协调', category: 'engineering' as const },

      // ── AI 工程 ──
      { name: 'AI API 集成与平台搭建', category: 'ai' as const },
      { name: 'LLM 应用开发（ChatGPT/Claude/DeepSeek）', category: 'ai' as const },
      { name: 'Vibe Coding / AI 辅助开发', category: 'ai' as const },
      { name: '数据分析与量化策略', category: 'ai' as const },

      // ── 技术工具 ──
      { name: 'AutoCAD（2D 图纸）', category: 'tools' as const },
      { name: 'Revit（BIM 建筑信息模型）', category: 'tools' as const },
      { name: 'SAP2000（结构分析）', category: 'tools' as const },

      // ── 核心优势 ──
      { name: '3 个月从零基础独立负责政府项目', category: 'strengths' as const },
      { name: '协调 3 个香港政府项目按期交付', category: 'strengths' as const },
      { name: 'AI 平台 500+ 用户盈利后主动退场', category: 'strengths' as const },
      { name: '交易系统中建立系统化风控框架', category: 'strengths' as const },
    ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程师（AE）',
      period: '2023.10 — 2025.09',
      description: '协调政府基建项目招标、施工、行政三个阶段，确保按时交付。',
      highlights: [
        '参与 6 个政府基建项目招标（SSM 520、SSN 505 等），负责 BQ 制作和招标文件管理',
        '驻场 SSM518 公屋项目 9 个月，独立协调施工进度并解决技术问题',
        '对接政府部门和客户进行验收，确保项目按时交付',
        '整理公司 10 年档案（人事、财务），优化内部管理流程',
        '协助解决合作公司纠纷，有效保护公司利益',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: '独立创业',
      role: '科技创业者',
      period: '2025.11 — 2026.06',
      description: '探索科技创业——AI 平台盈利，量化交易系统建立系统化风控机制。',
      highlights: [
              '搭建 AI API 中转平台：572 用户，1400+ 亿 Token，569 万+ 请求，盈利退出',
              '因竞争加剧主动离场——用 CLV 模型验证退出时机',
              '开发 AI 辅助量化交易系统，建立系统化风控机制（仓位管理、止损、批量止盈）',
              '搭建 AI 驱动的市场信息处理平台，提升数据处理效率',
            ],
      technologies: ['AI API', '数据分析', 'AI 工具'],
    },
  ],

  projectsData: [
    {
          id: 'proj-1',
          title: 'AI API 中转平台',
          image: '/portfolio/images/api-dashboard.png',
          description: '面向中国大陆用户的 AI API 中转服务。累计 1,409.8 亿 Token 消耗，569 万+ 请求，572 用户，实际盈利退出。',
      technologies: ['AI API', '支付系统', '缓存优化', 'CLV 模型'],
      highlights: [
        '140.98B Token 消耗，5,689,657 次请求，572 注册用户，盈利退出',
        '管理 5+ 模型：GPT-5.4 / Claude Sonnet 4-6 / GPT-5.3 Codex / GPT-5.4 Mini / GPT-5.5',
        '实际成本 $29.23K vs 标准成本 $85.43K，缓存节省 $22.51K',
        '缓存命中率峰值接近 100%，平均响应时间 107ms',
        '退出决策：竞争加剧 → 价格弹性上升 → 主动离场，验证了 CLV 模型',
      ],
      github: undefined,
      link: 'https://api.negentropypath.xyz/admin/accounts',
    },
    {
          id: 'proj-2',
          title: 'AI 跟单交易系统',
          image: '/portfolio/images/copy-trading.png',
          description: 'AI 驱动的多交易员跟单系统——LLM 解析 Discord 交易信号，自动对接交易所执行交易。',
      technologies: ['AI API', 'Discord API', '交易所 API', 'Docker', '云服务器'],
      highlights: [
        '累计交易 2,156 笔，覆盖 12+ 个交易员信号源',
        'TOP1 交易员收益 +$4,727.17，手续费累计 $11,782.57',
        '支持 Bybit / Bitget / Binance 三大交易所',
        '风控功能：亏损制仓、杠杆设置、批量止盈',
        '交易对覆盖 BTC、ETH、WLD、SOL 等主流币种',
      ],
      github: undefined,
      link: undefined,
    },
    {
          id: 'proj-3',
          title: '量化交易执行引擎',
          image: '/portfolio/images/quant-engine.jpg',
          description: '多实例并行量化交易系统——BTC/USDC 永续合约做空策略，亚秒级延迟执行。',
      technologies: ['Python', '交易所 REST API', '多进程架构', '风控系统'],
      highlights: [
        '系统延迟 261ms-273ms，实盘级执行能力',
        '多进程并行架构，独立运行多个策略实例',
        '内置本地止损机制，单笔亏损控制在 0.3% 以内',
        '信号过滤流程：原始信号 → 确认（约 1.8s）→ 执行',
        '系统化风控框架：仓位管理、止损、批量止盈',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default zhCN