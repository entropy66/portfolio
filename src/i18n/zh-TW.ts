const zhTW = {
  nav: {
    about: '關於',
    skills: '技能',
    experience: '經歷',
    projects: '項目',
    contact: '聯繫',
  },

  hero: {
    greeting: '你好，我是',
    ctaProjects: '查看項目',
    ctaContact: '聯繫我',
    scrollHint: '向下滾動',
  },

  about: {
    label: '關於我',
    heading: '熱愛技術與設計的交叉領域',
    location: '位置',
    email: '郵箱',
    phone: '電話',
    social: '社交',
  },

  skills: {
    label: '技能棧',
    heading: '技術能力',
    categories: {
      engineering: '工程技術',
      tech: '數位技術',
      general: '通用能力',
    },
  },

  experience: {
    label: '工作經歷',
    heading: '職業歷程',
  },

  projects: {
    label: '作品集',
    heading: '精選項目',
    github: 'GitHub',
    preview: '線上預覽',
  },

  contact: {
    label: '聯繫方式',
    heading: '有想法？聊聊吧',
    description: '無論是工作機會還是技術交流，隨時歡迎聯繫我。',
  },

  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: '張煒健',
    title: '工程師 · 創業者',
    tagline: '從土木工程到數位世界，用技術解決真實問題',
    bio: '廣東工業大學土木工程學士，曾任職於香港 Chevalier 建築公司，參與多個政府公屋及公共設施項目招標與施工。具備紮實的工程素養——從 BQ 編寫、施工驗收到 HKSSM 規範應用。2025 年投身創業，獨立搭建網站、開發量化交易策略、探索 AI 工具落地。正在尋找將工程思維與技術能力結合的新機會。',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: '中國',
    avatar: '/avatar.png',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-zhang-6a6483420/', icon: 'linkedin' },
    ],
  },

  skillsData: [
    { name: 'HKSSM 規範度數', category: 'engineering' as const },
    { name: 'BQ 製作', category: 'engineering' as const },
    { name: '工程量計算', category: 'engineering' as const },
    { name: 'RIF / ITAP 驗收流程', category: 'engineering' as const },
    { name: 'Rebar / Soil / SRT / Prode 檢測', category: 'engineering' as const },
    { name: 'Code of Practice', category: 'engineering' as const },
    { name: 'Buildings Ordinance', category: 'engineering' as const },
    { name: '網站搭建與運營', category: 'tech' as const },
    { name: '量化交易策略', category: 'tech' as const },
    { name: '數據分析', category: 'tech' as const },
    { name: 'AI 工具應用', category: 'tech' as const },
    { name: '資訊處理系統開發', category: 'tech' as const },
    { name: 'Microsoft Office', category: 'general' as const },
    { name: '英文讀寫', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程師（AE）',
      period: '2023.03 — 2025.09',
      description: '參與香港政府基建項目，覆蓋招標、施工、行政三個階段。',
      highlights: [
        '參與多個政府項目招標（SSM 520 公屋、SSN 505 公共市場等），獨立完成 BQ 製作和招標文件整理',
        '駐場香港簡約公屋 SSM518 項目 9 個月，負責 RIF 製作和施工驗收協助',
        '參與 excavation、backfilling、footing、MIC installation 等多項驗收',
        '掌握 rebar test、soil test、SRT、Prode test 等多種檢測方法',
        '負責公司資產管理和採購，協調招聘會議與面試安排',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: '獨立創業',
      role: '創業者',
      period: '2025.11 — 2026.06',
      description: '獨立探索技術創業方向，涵蓋網站開發、量化交易和 AI 應用。',
      highlights: [
        '搭建個人獨立站，負責產品設計和運營全流程',
        '開發量化交易策略，進行數據驅動的決策分析',
        '搭建 AI 中轉站販售 Token，探索 AI 工具商業化',
        '開發資訊處理網站，提升資料處理效率',
      ],
      technologies: ['網站開發', '量化交易', '數據分析', 'AI 工具'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: '個人獨立站',
      description: '從零搭建的獨立站點，涵蓋產品設計、前端開發、運營推廣全流程。',
      technologies: ['網站搭建', '產品設計', '運營'],
      highlights: [
        '獨立完成從設計到上線的完整流程',
        '負責產品定位和用戶增長',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: '量化交易策略',
      description: '基於數據分析的量化交易系統，探索數據驅動的投資決策。',
      technologies: ['數據分析', '策略開發', 'Python'],
      highlights: [
        '開發自動化交易策略',
        '數據回測與風險評估',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: 'AI 中轉站',
      description: '搭建 AI Token 交易平台，探索 AI 工具的商業化落地路徑。',
      technologies: ['AI API', '支付系統', '網站開發'],
      highlights: [
        '完成平台搭建和 Token 分發',
        '探索 AI 工具的商業變現模式',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-4',
      title: '資訊處理網站',
      description: '面向資料處理效率提升的工具型網站。',
      technologies: ['Web 開發', '資料處理'],
      highlights: [
        '簡化資料處理工作流',
        '提升資訊處理效率',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default zhTW
