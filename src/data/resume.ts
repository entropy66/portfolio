import type { ResumeData } from '../types'

const resume: ResumeData = {
  personal: {
    name: '张炜健',
    title: '工程师 · 创业者',
    tagline: '从土木工程到数字世界，用技术解决真实问题',
    bio: '广东工业大学土木工程学士，曾任职于香港 Chevalier 建筑公司，参与多个政府公屋及公共设施项目招标与施工。具备扎实的工程素养——从 BQ 编写、施工验收到 HKSSM 规范应用。2025 年投身创业，独立搭建网站、开发量化交易策略、探索 AI 工具落地。正在寻找将工程思维与技术能力结合的新机会。',
    email: 'entropy688@gmail.com',
    phone: '+86 173-8880-5447',
    location: '中国',
    social: [
      { platform: 'WhatsApp', url: 'https://wa.me/85254834987', icon: 'whatsapp' },
    ],
  },

  skills: [
    { name: 'HKSSM 规范度数', category: 'engineering' },
    { name: 'BQ 制作', category: 'engineering' },
    { name: '工程量计算', category: 'engineering' },
    { name: 'RIF / ITAP 验收流程', category: 'engineering' },
    { name: 'Rebar / Soil / SRT / Prode 检测', category: 'engineering' },
    { name: 'Code of Practice', category: 'engineering' },
    { name: 'Buildings Ordinance', category: 'engineering' },
    { name: '网站搭建与运营', category: 'tech' },
    { name: '量化交易策略', category: 'tech' },
    { name: '数据分析', category: 'tech' },
    { name: 'AI 工具应用', category: 'tech' },
    { name: '信息处理系统开发', category: 'tech' },
    { name: 'Microsoft Office', category: 'general' },
    { name: '英文读写', category: 'general' },
  ],

  experience: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程师（AE）',
      period: '2023.03 — 2025.09',
      description: '参与香港政府基建项目，覆盖招标、施工、行政三个阶段。',
      highlights: [
        '参与多个政府项目招标（SSM 520 公屋、SSN 505 公共市场等），独立完成 BQ 制作和招标文件整理',
        '驻场香港简约公屋 SSM518 项目 9 个月，负责 RIF 制作和施工验收协助',
        '参与 excavation、backfilling、footing、MIC installation 等多项验收',
        '掌握 rebar test、soil test、SRT、Prode test 等多种检测方法',
        '负责公司资产管理和采购，协调招聘会议与面试安排',
      ],
      technologies: ['HKSSM', 'BQ', 'RIF', 'ITAP', 'Code of Practice', 'Buildings Ordinance'],
    },
    {
      id: 'exp-2',
      company: '独立创业',
      role: '创业者',
      period: '2025.11 — 2026.06',
      description: '独立探索技术创业方向，涵盖网站开发、量化交易和 AI 应用。',
      highlights: [
        '搭建个人独立站，负责产品设计和运营全流程',
        '开发量化交易策略，进行数据驱动的决策分析',
        '搭建 AI 中转站售卖 Token，探索 AI 工具商业化',
        '开发信息处理网站，提升数据处理效率',
      ],
      technologies: ['网站开发', '量化交易', '数据分析', 'AI 工具'],
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: '个人独立站',
      description: '从零搭建的独立站点，涵盖产品设计、前端开发、运营推广全流程。',
      technologies: ['网站搭建', '产品设计', '运营'],
      highlights: [
        '独立完成从设计到上线的完整流程',
        '负责产品定位和用户增长',
      ],
    },
    {
      id: 'proj-2',
      title: '量化交易策略',
      description: '基于数据分析的量化交易系统，探索数据驱动的投资决策。',
      technologies: ['数据分析', '策略开发', 'Python'],
      highlights: [
        '开发自动化交易策略',
        '数据回测与风险评估',
      ],
    },
    {
      id: 'proj-3',
      title: 'AI 中转站',
      description: '搭建 AI Token 交易平台，探索 AI 工具的商业化落地路径。',
      technologies: ['AI API', '支付系统', '网站开发'],
      highlights: [
        '完成平台搭建和 Token 分发',
        '探索 AI 工具的商业变现模式',
      ],
    },
    {
      id: 'proj-4',
      title: '信息处理网站',
      description: '面向数据处理效率提升的工具型网站。',
      technologies: ['Web 开发', '数据处理'],
      highlights: [
        '简化数据处理工作流',
        '提升信息处理效率',
      ],
    },
  ],
}

export default resume
