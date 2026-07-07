const zhTW = {
  nav: {
    about: '關於',
    skills: '技能',
    experience: '經歷',
    projects: '項目',
    contact: '聯繫',
  },

  hero: {
    greeting: '工程背景 · 技術能力',
    ctaProjects: '查看項目',
    ctaContact: '聯繫我',
    scrollHint: '向下滾動',
  },

  about: {
    label: '關於我',
    heading: '從建築工程師到科技創業者',
    location: '位置',
    email: '郵箱',
    phone: '電話',
    social: '社交',
  },

  skills: {
    label: '技能',
    heading: '技術能力',
    categories: {
      engineering: '工程技術',
      tech: '技術工具',
      general: '核心能力',
    },
  },

  experience: {
    label: '經歷',
    heading: '職業歷程',
  },

  projects: {
    label: '作品集',
    heading: '精選項目',
    github: 'GitHub',
    preview: '線上預覽',
  },

  contact: {
    label: '聯繫',
    heading: '有想法？聊聊吧',
    description: '無論是工作機會還是技術交流，隨時歡迎聯繫我。',
  },

  footer: {
    rights: '保留所有權利',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: '張煒健',
    title: '工程背景 · 技術能力',
    tagline: '從工地到創業——用工程思維打造技術產品',
    bio: '廣東工業大學土木工程學士。在香港 Chevalier 建築公司擔任助理工程師 2 年——協調政府基建項目招標、施工、行政三個階段，確保按時交付。2025 年開始科技創業，搭建 AI Token 平台，500+ 用戶，200 億+ Token 消耗，盈利。經歷過量化交易虧損，深刻認識到「技術只是工具，風控才是核心」。正在尋找將工程思維與技術能力結合的新機會。',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: '九龍城, 香港 / 南山, 深圳',
    blog: 'https://www.negentropypath.top/',
    avatar: '/portfolio/avatar.png',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/michael-zhang-6a6483420/', icon: 'linkedin' },
    ],
  },

  stats: [
    { value: '500+', label: '用戶' },
    { value: '200億', label: 'Tokens' },
    { value: '盈利', label: '主動離場' },
  ],

  skillsData: [
    { name: 'HKSSM 規範應用', category: 'engineering' as const },
    { name: 'BQ 編寫與成本估算', category: 'engineering' as const },
    { name: '施工驗收（RIF / ITAP）', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: '項目協調與多方溝通', category: 'engineering' as const },
    { name: 'AI 工具深度應用（ChatGPT / Claude / Codex / Claude Code / Vibe Coding）', category: 'tech' as const },
    { name: 'AutoCAD（2D圖紙繪製）', category: 'tech' as const },
    { name: 'Revit（建築信息模型 BIM）', category: 'tech' as const },
    { name: 'SAP2000（結構分析與計算）', category: 'tech' as const },
    { name: 'Python（數據分析、量化策略）', category: 'tech' as const },
    { name: '解決問題能力：處理利益糾紛、解決施工技術問題', category: 'general' as const },
    { name: '項目管理能力：協調3個香港政府項目，確保按期交付', category: 'general' as const },
    { name: '風險判斷能力：AI中轉站主動離場，量化虧損中提煉風控認知', category: 'general' as const },
    { name: '快速學習能力：3個月從零基礎獨立負責項目', category: 'general' as const },
  ],

  experienceData: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程師（AE）',
      period: '2023.10 — 2025.09',
      description: '協調政府基建項目招標、施工、行政三個階段，確保按時交付。',
      highlights: [
        '參與 6 個政府基建項目招標（SSM 520、SSN 505 等），負責 BQ 製作和招標文件管理',
        '駐場 SSM518 公屋項目 9 個月，獨立協調施工進度並解決技術問題',
        '對接政府部門和客戶進行驗收，確保項目按時交付',
        '整理公司 10 年檔案（人事、財務），優化內部管理流程',
        '協助解決合作公司糾紛，有效保護公司利益',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: '獨立創業',
      role: '科技創業者',
      period: '2025.11 — 2026.06',
      description: '探索科技創業——AI 平台盈利，量化策略經歷挫折並汲取核心教訓。',
      highlights: [
        '搭建 AI Token 交易平台：500+ 用戶，200 億+ Token 消耗，盈利',
        '因競爭加劇和封禁風險主動離場——體現風險判斷力',
        '開發 AI 輔助量化策略，因風控不足導致虧損，提煉「風控 > 技術」認知',
        '搭建 AI 驅動的市場信息處理平台，提升資料處理效率',
      ],
      technologies: ['AI API', '資料分析', 'AI 工具'],
    },
  ],

  projectsData: [
    {
      id: 'proj-1',
      title: 'AI 跟單交易系統',
      description: 'AI 驅動的跟單交易系統——LLM 解析 Discord 交易信號並自動執行交易。',
      technologies: ['AI API', 'Discord API', '交易所 API', 'Docker', '雲伺服器'],
      highlights: [
        '一鍵部署：雲伺服器腳本完成系統搭建',
        '信號解析：ChatGPT/DeepSeek 自動識別交易員信號',
        '自動交易：對接 Bybit/Bitget/Binance 交易所 API',
        '風控管理：虧損制倉、槓桿設定、批量止盈',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-2',
      title: 'AI Token 平台',
      description: '解決中國大陸用戶無法存取 ChatGPT/Claude 的資訊不對稱問題。用 CLV 模型和 ROI 夏普比率驗證。',
      technologies: ['AI API', '支付系統', '平台'],
      highlights: [
        '模型驗證：CLV/CAC > 5，正向 ROI，持續 Token 消耗',
        '500+ 用戶註冊，200 億+ Token 消耗，盈利',
        '退出決策：競爭加劇 → 價格彈性上升 → 主動離場',
        '在真實商業中驗證了 CLV 模型和 ROI 夏普比率理論',
      ],
      github: undefined,
      link: undefined,
    },
    {
      id: 'proj-3',
      title: '量化交易探索',
      description: 'AI 輔助量化交易策略——從失敗中提煉風控方法論。',
      technologies: ['AI 工具', '資料分析'],
      highlights: [
        '借助 AI 開發自動化交易策略',
        '因風控不足導致虧損，提煉核心教訓',
        '認知升級：過度依賴 AI、風控薄弱、缺乏實盤經驗',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default zhTW
