const zhCN = {
  nav: {
    about: '关于',
    skills: '技能',
    experience: '经历',
    projects: '项目',
    contact: '联系',
  },

  hero: {
    greeting: '工程背景 · 技术能力',
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
      engineering: '工程技术',
      tech: '技术工具',
      general: '核心能力',
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
    description: '无论是工作机会还是技术交流，随时欢迎联系我。',
  },

  footer: {
    rights: '保留所有权利',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: '张炜健',
    title: '工程背景 · 技术能力',
    tagline: '从工地到创业——用工程思维打造技术产品',
    bio: '广东工业大学土木工程学士。在香港 Chevalier 建筑公司担任助理工程师 2 年——协调政府基建项目招标、施工、行政三个阶段，确保按时交付。2025 年开始科技创业，搭建 AI Token 平台，500+ 用户，1400+ 亿 Token 消耗，盈利。经历过量化交易亏损，深刻认识到"技术只是工具，风控才是核心"。正在寻找将工程思维与技术能力结合的新机会。',
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
    { value: '500+', label: '用户' },
    { value: '1400+亿', label: 'Tokens' },
    { value: '盈利', label: '主动离场' },
  ],

  skillsData: [
    { name: 'HKSSM 规范应用', category: 'engineering' as const },
    { name: 'BQ 编写与成本估算', category: 'engineering' as const },
    { name: '施工验收（RIF / ITAP）', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: '项目协调与多方沟通', category: 'engineering' as const },
    { name: 'AI 工具深度应用（ChatGPT / Claude / Codex / Claude Code / Vibe Coding）', category: 'tech' as const },
    { name: 'AutoCAD（2D图纸绘制）', category: 'tech' as const },
    { name: 'Revit（建筑信息模型 BIM）', category: 'tech' as const },
    { name: 'SAP2000（结构分析与计算）', category: 'tech' as const },
    { name: 'Python（数据分析、量化策略）', category: 'tech' as const },
    { name: '解决问题能力：处理利益纠纷、解决施工技术问题', category: 'general' as const },
    { name: '项目管理能力：协调3个香港政府项目，确保按期交付', category: 'general' as const },
    { name: '风险判断能力：AI中转站主动离场，量化亏损中提炼风控认知', category: 'general' as const },
    { name: '快速学习能力：3个月从零基础独立负责项目', category: 'general' as const },
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
      description: '探索科技创业——AI 平台盈利，量化策略经历挫折并汲取核心教训。',
      highlights: [
        '搭建 AI Token 交易平台：500+ 用户，1400+ 亿 Token 消耗，盈利',
        '因竞争加剧和封禁风险主动离场——体现风险判断力',
        '开发 AI 辅助量化策略，因风控不足导致亏损，提炼"风控 > 技术"认知',
        '搭建 AI 驱动的市场信息处理平台，提升数据处理效率',
      ],
      technologies: ['AI API', '数据分析', 'AI 工具'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'AI 跟单交易系统',
      description: 'AI 驱动的跟单交易系统——LLM 解析 Discord 交易信号并自动执行交易。',
      technologies: ['AI API', 'Discord API', '交易所 API', 'Docker', '云服务器'],
      highlights: [
        '一键部署：云服务器脚本完成系统搭建',
        '信号解析：ChatGPT/DeepSeek 自动识别交易员信号',
        '自动交易：对接 Bybit/Bitget/Binance 交易所 API',
        '风控管理：亏损制仓、杠杆设置、批量止盈',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: 'AI Token 平台',
      description: '解决中国大陆用户无法访问 ChatGPT/Claude 的信息不对称问题。用 CLV 模型和 ROI 夏普比率验证。',
      technologies: ['AI API', '支付系统', '平台'],
      highlights: [
        '模型验证：CLV/CAC > 5，正向 ROI，持续 Token 消耗',
        '500+ 用户注册，1400+ 亿 Token 消耗，盈利',
        '退出决策：竞争加剧 → 价格弹性上升 → 主动离场',
        '在真实商业中验证了 CLV 模型和 ROI 夏普比率理论',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: '量化交易探索',
      description: 'AI 辅助量化交易策略——从失败中提炼风控方法论。',
      technologies: ['AI 工具', '数据分析'],
      highlights: [
        '借助 AI 开发自动化交易策略',
        '因风控不足导致亏损，提炼核心教训',
        '认知升级：过度依赖 AI、风控薄弱、缺乏实盘经验',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default zhCN
