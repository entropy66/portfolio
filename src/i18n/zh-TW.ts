const zhTW = {
  nav: {
    about: '關於',
    skills: '技能',
    experience: '經歷',
    projects: '項目',
    contact: '聯繫',
  },

  hero: {
    greeting: '建築工程師 → 科技創業者',
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
      engineering: '工程管理',
      ai: 'AI 工程',
      tools: '技術工具',
      strengths: '核心優勢',
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
    description: '對產品/數據方向感興趣。如果你在做 AI、基礎設施或金融科技相關的事——聊聊吧。',
  },

  footer: {
    rights: '保留所有權利',
    builtWith: 'Built with React + Vite',
  },

  personal: {
    name: '張煒健',
    title: '建築工程師 → 科技創業者',
    tagline: '從工地到創業——用工程思維打造技術產品',
    bio: '從土木工程到科技創業。2 年香港 Chevalier 助理工程師經驗，協調政府基建項目從招標到驗收全流程。2025 年獨立搭建 AI API 中轉平台：572 用戶，1400+ 億 Token 消耗，盈利退出。用工程思維做產品，用技術能力落地。正在尋找產品/數據方向的機會。',
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
      { value: '569萬+', label: '請求' },
      { value: '500+', label: '用戶' },
      { value: '1400+億', label: 'Tokens' },
      { value: '盈利', label: '擇時退出' },
    ],

  skillsData: [
    // ── 工程管理 ──
    { name: 'HKSSM 規範應用', category: 'engineering' as const },
    { name: 'BQ 編寫與成本估算', category: 'engineering' as const },
    { name: '施工驗收（RIF / ITAP）', category: 'engineering' as const },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' as const },
    { name: '政府項目協調（招標→施工→驗收）', category: 'engineering' as const },

    // ── AI 工程 ──
    { name: 'AI API 集成與平台搭建', category: 'ai' as const },
    { name: 'LLM 應用開發（ChatGPT/Claude/DeepSeek）', category: 'ai' as const },
    { name: 'Vibe Coding / AI 輔助開發', category: 'ai' as const },
    { name: '數據分析與量化策略', category: 'ai' as const },

    // ── 技術工具 ──
    { name: 'AutoCAD（2D 圖紙）', category: 'tools' as const },
    { name: 'Revit（BIM 建築信息模型）', category: 'tools' as const },
    { name: 'SAP2000（結構分析）', category: 'tools' as const },

    // ── 核心優勢 ──
    { name: '3 個月從零基礎獨立負責政府項目', category: 'strengths' as const },
    { name: '協調 3 個香港政府項目按期交付', category: 'strengths' as const },
    { name: 'AI 平台 500+ 用戶盈利後主動退場', category: 'strengths' as const },
    { name: '量化虧損中提煉風控第一性原理', category: 'strengths' as const },
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
      description: '探索科技創業——AI 平台盈利，量化交易系統建立系統化風控機制。',
      highlights: [
              '搭建 AI API 中轉平台：572 用戶，1400+ 億 Token，569 萬+ 請求，盈利退出',
              '因競爭加劇主動離場——用 CLV 模型驗證退出時機',
              '開發 AI 輔助量化交易系統，建立系統化風控機制（倉位管理、止損、批量止盈）',
              '搭建 AI 驅動的市場信息處理平台，提升資料處理效率',
            ],
      technologies: ['AI API', '資料分析', 'AI 工具'],
    },
  ],

  projectsData: [
    {
          id: 'proj-1',
          title: 'AI API 中轉平台',
          image: '/portfolio/images/api-dashboard.png',
          description: '面向中國大陸用戶的 AI API 中轉服務。累計 1,409.8 億 Token 消耗，569 萬+ 請求，572 用戶，實際盈利退出。',
      technologies: ['AI API', '支付系統', '快取優化', 'CLV 模型'],
      highlights: [
              '140.98B Token 消耗，5,689,657 次請求，572 註冊用戶，盈利退出',
              '管理 5+ 模型：GPT-5.4 / Claude Sonnet 4-6 / GPT-5.3 Codex / GPT-5.4 Mini / GPT-5.5',
              '實際成本 $29.23K vs 標準成本 $85.43K，快取節省 $22.51K',
              '快取命中率峰值接近 100%，平均響應時間 107ms',
              '退出決策：競爭加劇 → 價格彈性上升 → 主動離場，驗證了 CLV 模型',
            ],
      github: undefined,
      link: 'https://api.negentropypath.xyz/admin/accounts',
    },
    {
          id: 'proj-2',
          title: 'AI 跟單交易系統',
          image: '/portfolio/images/copy-trading.png',
          description: 'AI 驅動的多交易員跟單系統——LLM 解析 Discord 交易信號，自動對接交易所執行交易。',
      technologies: ['AI API', 'Discord API', '交易所 API', 'Docker', '雲伺服器'],
      highlights: [
        '累計交易 2,156 筆，覆蓋 12+ 個交易員信號源',
        'TOP1 交易員收益 +$4,727.17，手續費累計 $11,782.57',
        '支援 Bybit / Bitget / Binance 三大交易所',
        '風控功能：虧損制倉、槓桿設定、批量止盈',
        '交易對覆蓋 BTC、ETH、WLD、SOL 等主流幣種',
      ],
      github: undefined,
      link: undefined,
    },
    {
          id: 'proj-3',
          title: '量化交易執行引擎',
          image: '/portfolio/images/quant-engine.jpg',
          description: '多實例並行量化交易系統——BTC/USDC 永續合約做空策略，亞秒級延遲執行。',
      technologies: ['Python', '交易所 REST API', '多進程架構', '風控系統'],
      highlights: [
        '系統延遲 261ms-273ms，實盤級執行能力',
        '多進程並行架構，獨立運行多個策略實例',
        '內置本地止損機制，單筆虧損控制在 0.3% 以內',
        '信號過濾流程：原始信號 → 確認（約 1.8s）→ 執行',
        '系統化風控框架：倉位管理、止損、批量止盈',
      ],
      github: undefined,
      link: undefined,
    },
  ],
}

export default zhTW