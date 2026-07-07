import type { ResumeData } from '../types'

const resume: ResumeData = {
  personal: {
    name: '张炜健',
    title: '工程背景 · 技术能力',
    tagline: '2年香港建筑行业经验，用工程思维做技术产品',
    bio: '广东工业大学土木工程学士，2年香港Chevalier建筑公司助理工程师经验。负责政府基建项目的招标、施工、行政全流程协调，确保项目按期完成。具备扎实的工程素养——从BQ编写、施工验收到HKSSM规范应用。2025年投身创业，搭建AI中转站实现500+用户、200亿Token消耗。正在寻找将工程思维与技术能力结合的新机会。',
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
    { name: '施工验收流程（RIF / ITAP）', category: 'engineering' },
    { name: 'Code of Practice / Buildings Ordinance', category: 'engineering' },
    { name: '项目进度管理与协调', category: 'engineering' },
    { name: 'React / Vite（前端开发）', category: 'tech' },
    { name: 'Python（数据分析、量化策略）', category: 'tech' },
    { name: 'AI 工具应用（ChatGPT/Claude）', category: 'tech' },
    { name: '英文读写（香港工作环境2年）', category: 'general' },
  ],

  experience: [
    {
      id: 'exp-1',
      company: 'Chevalier (Construction) Company Limited',
      role: '助理工程师（AE）',
      period: '2023.10 — 2025.09',
      description: '负责政府基建项目招标、施工、行政全流程协调，确保项目按期完成。',
      highlights: [
        '【招标】参与6个政府基建项目招标（SSM 520公屋、SSN 505公共市场等），负责招标文件整理和BQ制作',
        '【施工】驻场SSM518简约公屋项目9个月，协调施工进度，解决施工过程中遇到的各种问题',
        '【施工】协调政府部门和业主部门验收工程，确保项目按期交付',
        '【行政】处理公司前10年文件（人事、财务）的检查和整理',
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

  projects: [
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
    },
  ],
}

export default resume
