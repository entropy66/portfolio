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
      tech: '技術工具',
      general: '綜合能力',
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
    tagline: '從工地到創業，用工程思維做技術產品',
    bio: '廣東工業大學土木工程學士。2年香港Chevalier建築公司助理工程師，負責政府基建項目全流程協調。2025年投身科技創業，獨立搭建AI平台實現500+用戶、200億Token消耗並盈利。經歷過量化交易的風控失敗，深刻理解「技術只是工具，風險管理才是核心」。正在尋找將工程思維與技術能力結合的新機會。',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: '香港九龍城 / 深圳南山',
    blog: 'https://www.negentropypath.top/',
    avatar: '/portfolio/avatar.png',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-zhang-6a6483420/', icon: 'linkedin' },
    ],
  },

  skillsData: [
    { name: 'HKSSM 規範應用', category: 'engineering' as const },
    { name: 'BQ 編寫與成本估算', category: 'engineering' as const },
    { name: '施工驗收（RIF / ITAP）', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: '項目進度管理與多方協調', category: 'engineering' as const },
    { name: '利益糾紛處理與公司權益維護', category: 'general' as const },
    { name: '跨部門協調與按期交付', category: 'general' as const },
    { name: '3個月從學徒到獨立負責項目', category: 'general' as const },
    { name: 'AI 工具深度應用（ChatGPT/Claude）', category: 'tech' as const },
    { name: '英文工作溝通（香港2年）', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程師（AE）',
      period: '2023.10 — 2025.09',
      description: '負責政府基建項目招標、施工、行政全流程協調，確保項目按期完成。',
      highlights: [
        '參與6個政府基建項目招標（SSM 520公屋、SSN 505公共市場等），負責BQ製作和投標文件管理',
        '駐場SSM518簡約公屋項目9個月，獨立協調施工進度，解決現場技術問題',
        '對接政府部門和業主驗收，確保項目按期交付',
        '梳理公司10年檔案（人事、財務），優化內部管理流程',
        '協助處理合作公司利益糾紛，有效維護公司權益',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: '獨立創業',
      role: '技術創業者',
      period: '2025.11 — 2026.06',
      description: '獨立探索技術創業——AI平台實現盈利，量化策略經歷挫折並提煉出核心教訓。',
      highlights: [
        '搭建AI Token交易平台：500+用戶，200億+Token消耗，實現盈利',
        '因競爭加劇、封號風險上升，主動評估風險後離場——展示風險判斷力',
        '開發AI輔助量化策略，因風控不足經歷虧損，提煉出「風控 > 技術」的核心認知',
        '搭建AI驅動的市場信息處理平台，提升數據處理效率',
      ],
      technologies: ['AI API', '數據分析', 'AI 工具'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'AI 跟單系統',
      description: 'AI驅動的自動跟單系統——用LLM解析Discord交易信號並自動執行交易。',
      technologies: ['AI API', 'Discord API', '交易所API', 'Docker', '雲服務器'],
      highlights: [
        '一鍵部署：雲服務器腳本即可完成系統部署',
        '信號解析：用ChatGPT/DeepSeek自動識別交易員信號',
        '自動下單：對接Bybit/Bitget/Binance等交易所API',
        '風控管理：以損定量、槓桿設置、分批止盈',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: 'AI 中轉站',
      description: '解決中國大陸用戶無法訪問ChatGPT/Claude的信息不對稱問題。用CLV模型和ROI夏普比率驗證項目可行性。',
      technologies: ['AI API', '支付系統', '平台搭建'],
      highlights: [
        '模型驗證：CLV/CAC > 5，ROI為正，用戶持續消耗Token',
        '500+用戶註冊，200億+Token消耗，實現盈利',
        '退出決策：競爭加劇→價格彈性變大→主動離場',
        '驗證了CLV模型和ROI夏普比率理論在實際業務中的應用',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: '量化交易探索',
      description: '用AI工具輔助開發量化交易策略——從失敗中提煉風控方法論。',
      technologies: ['AI 工具', '數據分析'],
      highlights: [
        '用AI輔助開發自動化交易策略',
        '因風控不足經歷虧損，提煉核心教訓',
        '認知升級：過度依賴AI、風控不足、缺乏實戰經驗',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default zhTW
