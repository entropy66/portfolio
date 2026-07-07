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
    heading: '從建築工程師到技術創業者',
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
      tech: '數字技術',
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
    title: '工程背景 · 技術能力',
    tagline: '2年香港建築行業經驗，用工程思維做技術產品',
    bio: '廣東工業大學土木工程學士，2年香港Chevalier建築公司助理工程師經驗。負責政府基建項目的招標、施工、行政全流程協調，確保項目按期完成。具備紮實的工程素養——從BQ編寫、施工驗收到HKSSM規範應用。2025年投身創業，搭建AI中轉站實現500+用戶、200億Token消耗。正在尋找將工程思維與技術能力結合的新機會。',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: '中國',
    avatar: '/portfolio/avatar.png',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-zhang-6a6483420/', icon: 'linkedin' },
    ],
  },

  skillsData: [
    { name: 'HKSSM 規範度數', category: 'engineering' as const },
    { name: 'BQ 製作', category: 'engineering' as const },
    { name: '施工驗收流程（RIF / ITAP）', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: '項目進度管理與協調', category: 'engineering' as const },
    { name: 'React / Vite（前端開發）', category: 'tech' as const },
    { name: 'Python（數據分析、量化策略）', category: 'tech' as const },
    { name: 'AI 工具應用（ChatGPT/Claude）', category: 'tech' as const },
    { name: '英文讀寫（香港工作環境2年）', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程師（AE）',
      period: '2023.10 — 2025.09',
      description: '負責政府基建項目招標、施工、行政全流程協調，確保項目按期完成。',
      highlights: [
        '【招標】參與6個政府基建項目招標（SSM 520公屋、SSN 505公共市場等），負責招標文件整理和BQ製作',
        '【施工】駐場SSM518簡約公屋項目9個月，協調施工進度，解決施工過程中遇到的各種問題',
        '【施工】協調政府部門和業主部門驗收工程，確保項目按期交付',
        '【行政】處理公司前10年文件（人事、財務）的檢查和整理',
        '【行政】協助處理合作公司利益糾紛，幫助公司維護權益',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: '獨立創業',
      role: '技術創業者',
      period: '2025.11 — 2026.06',
      description: '獨立探索技術創業，AI中轉站實現盈利，量化策略經歷失敗並總結教訓。',
      highlights: [
        '【AI中轉站】搭建AI Token交易平台，500+用戶，消耗Token 200億+，實現盈利',
        '【AI中轉站】因競爭加劇、封號風險提高，主動離場——展示了風險判斷能力',
        '【量化策略】用AI工具輔助開發量化交易策略，因風控不足虧損1萬多美元',
        '【教訓】深刻理解風控重要性：技術只是工具，風險管理才是核心',
        '【信息處理】搭建AI對市場的信息處理和加工平台',
      ],
      technologies: ['AI API', 'Python', 'React', '數據分析'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'AI 中轉站',
      description: '解決中國大陸用戶無法使用ChatGPT/Claude的信息不對稱問題。',
      technologies: ['AI API', '支付系統', 'React', '網站開發'],
      highlights: [
        '500+用戶註冊，消耗Token 200億+',
        '實現盈利，後因競爭加劇主動離場',
        '展示了發現商機、快速執行、風險判斷的能力',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: '量化交易策略（失敗案例）',
      description: '用AI工具輔助開發量化交易策略，嘗試自動化交易。',
      technologies: ['Python', '數據分析', 'AI 工具'],
      highlights: [
        '用AI輔助開發自動化交易策略',
        '因風控不足虧損1萬多美元，項目失敗',
        '教訓：過度依賴AI、風控不足、缺乏實戰經驗',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: '信息處理系統',
      description: 'AI對市場的信息處理和加工平台。',
      technologies: ['Web 開發', '數據處理', 'AI 工具'],
      highlights: [
        '搭建信息處理工作流',
        '提升數據處理效率',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default zhTW
