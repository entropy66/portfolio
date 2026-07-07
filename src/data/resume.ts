import type { ResumeData } from '../types'

const resume: ResumeData = {
  personal: {
    name: '张炜健',
    title: '工程背景 · 技术能力',
    tagline: '从工地到创业，用工程思维做技术产品',
    bio: '广东工业大学土木工程学士。2年香港Chevalier建筑公司助理工程师，负责政府基建项目全流程协调。2025年投身科技创业，独立搭建AI平台实现500+用户、200亿Token消耗并盈利。经历过量化交易的风控失败，深刻理解"技术只是工具，风险管理才是核心"。正在寻找将工程思维与技术能力结合的新机会。',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: '中国',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
    ],
  },

  skills: [
    { name: 'HKSSM 规范应用', category: 'engineering' },
    { name: 'BQ 编写与成本估算', category: 'engineering' },
    { name: '施工验收（RIF / ITAP）', category: 'engineering' },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' },
    { name: '项目进度管理与多方协调', category: 'engineering' },
    { name: '利益纠纷处理与公司权益维护', category: 'general' },
    { name: '跨部门协调与按期交付', category: 'general' },
    { name: '3个月从学徒到独立负责项目', category: 'general' },
    { name: 'AI 工具深度应用（ChatGPT/Claude）', category: 'tech' },
    { name: '英文工作沟通（香港2年）', category: 'general' },
  ],

  experience: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程师（AE）',
      period: '2023.10 — 2025.09',
      description: '负责政府基建项目招标、施工、行政全流程协调，确保项目按期完成。',
      highlights: [
        '参与6个政府基建项目招标（SSM 520公屋、SSN 505公共市场等），负责BQ制作和投标文件管理',
        '驻场SSM518简约公屋项目9个月，独立协调施工进度，解决现场技术问题',
        '对接政府部门和业主验收，确保项目按期交付',
        '梳理公司10年档案（人事、财务），优化内部管理流程',
        '协助处理合作公司利益纠纷，有效维护公司权益',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: '独立创业',
      role: '技术创业者',
      period: '2025.11 — 2026.06',
      description: '独立探索技术创业——AI平台实现盈利，量化策略经历挫折并提炼出核心教训。',
      highlights: [
        '搭建AI Token交易平台：500+用户，200亿+Token消耗，实现盈利',
        '因竞争加剧、封号风险上升，主动评估风险后离场——展示风险判断力',
        '开发AI辅助量化策略，因风控不足经历亏损，提炼出"风控 > 技术"的核心认知',
        '搭建AI驱动的市场信息处理平台，提升数据处理效率',
      ],
      technologies: ['AI API', '数据分析', 'AI 工具'],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'AI 跟单系统',
      description: 'AI驱动的自动跟单系统——用LLM解析Discord交易信号并自动执行交易。',
      technologies: ['AI API', 'Discord API', '交易所API', 'Docker', '云服务器'],
      highlights: [
        '一键部署：云服务器脚本即可完成系统部署',
        '信号解析：用ChatGPT/DeepSeek自动识别交易员信号',
        '自动下单：对接Bybit/Bitget/Binance等交易所API',
        '风控管理：以损定量、杠杆设置、分批止盈',
      ],
    },
    {
      id: 'proj-2',
      title: 'AI 中转站',
      description: '解决中国大陆用户无法访问ChatGPT/Claude的信息不对称问题。',
      technologies: ['AI API', '支付系统', '平台搭建'],
      highlights: [
        '500+用户注册，200亿+Token消耗',
        '实现盈利，因竞争加剧主动离场',
        '展示了发现商机、快速执行、风险判断的能力',
      ],
    },
    {
      id: 'proj-3',
      title: '量化交易探索',
      description: '用AI工具辅助开发量化交易策略——从失败中提炼风控方法论。',
      technologies: ['AI 工具', '数据分析'],
      highlights: [
        '用AI辅助开发自动化交易策略',
        '因风控不足经历亏损，提炼核心教训',
        '认知升级：过度依赖AI、风控不足、缺乏实战经验',
      ],
    },
  ],
}

export default resume
