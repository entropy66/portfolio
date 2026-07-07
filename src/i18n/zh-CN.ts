const zhCN = {
  nav: {
    about: '关于',
    skills: '技能',
    experience: '经历',
    projects: '项目',
    contact: '联系',
  },

  hero: {
    greeting: '你好，我是',
    ctaProjects: '查看项目',
    ctaContact: '联系我',
    scrollHint: '向下滚动',
  },

  about: {
    label: '关于我',
    heading: '从招标学徒到技术创业者',
    location: '位置',
    email: '邮箱',
    phone: '电话',
    social: '社交',
  },

  skills: {
    label: '技能栈',
    heading: '技术能力',
    categories: {
      engineering: '工程技术',
      tech: '数字技术',
      general: '通用能力',
    },
  },

  experience: {
    label: '工作经历',
    heading: '职业历程',
  },

  projects: {
    label: '作品集',
    heading: '精选项目',
    github: 'GitHub',
    preview: '在线预览',
  },

  contact: {
    label: '联系方式',
    heading: '有想法？聊聊吧',
    description: '无论是工作机会还是技术交流，随时欢迎联系我。',
  },

  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: '张炜健',
    title: '工程背景 · 技术能力',
    tagline: '从招标学徒到独立负责项目，用工程思维做技术产品',
    bio: '广东工业大学土木工程学士，2年香港Chevalier建筑公司经验。从招标学徒起步，3个月后独立负责政府项目招标；驻场简约公屋9个月，制作RIF 1000+份，从施工新人成长为项目协调人。2025年投身创业，搭建AI中转站实现500+用户、200亿Token消耗。正在寻找将工程思维与技术能力结合的新机会。',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: '中国',
    avatar: '/portfolio/avatar.png',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-zhang-6a6483420/', icon: 'linkedin' },
    ],
  },

  skillsData: [
    { name: 'HKSSM 规范度数', category: 'engineering' as const },
    { name: 'BQ 制作（独立完成2个项目）', category: 'engineering' as const },
    { name: 'RIF 制作（1000+份）', category: 'engineering' as const },
    { name: '施工验收流程（ITAP）', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: 'React / Vite（前端开发）', category: 'tech' as const },
    { name: 'Python（数据分析、量化策略）', category: 'tech' as const },
    { name: 'AI 工具应用（ChatGPT/Claude）', category: 'tech' as const },
    { name: '英文读写（香港工作环境2年）', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程师（AE）',
      period: '2023.10 — 2025.09',
      description: '覆盖招标、施工、行政三个阶段，从学徒成长为独当一面的项目协调人。',
      highlights: [
        '【招标】参与6个政府基建项目招标（SSM 520公屋、SSN 505公共市场等）',
        '【招标】独立负责2个项目的完整招标流程，掌握从图纸到BQ的转化能力',
        '【施工】驻场SSM518简约公屋项目9个月，制作RIF 1000+份',
        '【施工】参与excavation、backfilling、footing、MIC installation等多项验收',
        '【施工】后期负责协调施工人员、材料，协调政府部门和业主部门验收',
        '【行政】处理公司前10年文件（人事、财务）的检查和验收',
        '【行政】协助处理合作公司利益纠纷，帮助公司维护权益',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: '独立创业',
      role: '技术创业者',
      period: '2025.11 — 2026.06',
      description: '独立探索技术创业，AI中转站实现盈利，量化策略经历失败并总结教训。',
      highlights: [
        '【AI中转站】搭建AI Token交易平台，500+用户，消耗Token 200亿+，实现盈利',
        '【AI中转站】因竞争加剧、封号风险提高，主动离场——展示了风险判断能力',
        '【量化策略】用AI工具辅助开发量化交易策略，因风控不足亏损1万多美元',
        '【教训】深刻理解风控重要性：技术只是工具，风险管理才是核心',
        '【信息处理】搭建AI对市场的信息处理和加工平台',
      ],
      technologies: ['AI API', 'Python', 'React', '数据分析'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'AI 中转站',
      description: '解决中国大陆用户无法使用ChatGPT/Claude的信息不对称问题。',
      technologies: ['AI API', '支付系统', 'React', '网站开发'],
      highlights: [
        '500+用户注册，消耗Token 200亿+',
        '实现盈利，后因竞争加剧主动离场',
        '展示了发现商机、快速执行、风险判断的能力',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: '量化交易策略（失败案例）',
      description: '用AI工具辅助开发量化交易策略，尝试自动化交易。',
      technologies: ['Python', '数据分析', 'AI 工具'],
      highlights: [
        '用AI辅助开发自动化交易策略',
        '因风控不足亏损1万多美元，项目失败',
        '教训：过度依赖AI、风控不足、缺乏实战经验',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: '信息处理系统',
      description: 'AI对市场的信息处理和加工平台。',
      technologies: ['Web 开发', '数据处理', 'AI 工具'],
      highlights: [
        '搭建信息处理工作流',
        '提升数据处理效率',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default zhCN
