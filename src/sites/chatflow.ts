// ChatFlow 站点配置：数据与配置同置于一个文件，一个落地页对应一个数据文件
import type { SiteConfig } from "../types";
import coverImage from "../assets/hero.png";

export const chatflowSite: SiteConfig = {
  id: "chatflow",
  name: "ChatFlow",
  tagline: "企业级即时通讯平台",
  description:
    "安全、高效、可定制的企业聊天平台营销落地页：完整的产品介绍、核心团队、数据统计、定价方案与常见问题。",
  tags: ["企业协作", "即时通讯", "SaaS", "AI 助手"],
  cover: coverImage,
  sections: [
    "hero",
    "featureLeftImage",
    "featureRightImage",
    "featureBottomImage",
    "featuresGrid",
    "team",
    "stats",
    "pricing",
    "faq",
    "cta",
  ],
  data: {
    navbar: {
      logoText: "ChatFlow",
      menuItems: [
        {
          label: "产品",
          children: [
            { label: "即时通讯", href: "#", icon: "💬" },
            { label: "视频会议", href: "#", icon: "📹" },
            { label: "AI 助手", href: "#", icon: "🤖" },
            { label: "数据洞察", href: "#", icon: "📊" },
          ],
        },
        {
          label: "解决方案",
          children: [
            { label: "🏢 大型企业", href: "#" },
            { label: "🚀 初创团队", href: "#" },
            { label: "🛒 电商零售", href: "#" },
            { label: "⚕️ 医疗健康", href: "#" },
          ],
        },
        {
          label: "资源",
          children: [
            { label: "📚 帮助文档", href: "#" },
            { label: "🎓 开发者教程", href: "#" },
            { label: "💡 最佳实践", href: "#" },
            { label: "🌐 社区论坛", href: "#" },
          ],
        },
        { label: "价格", href: "#" },
        {
          label: "企业服务",
          children: [
            { label: "🏷️ 专属定制", href: "#" },
            { label: "🔒 数据合规", href: "#" },
            { label: "🤝 客户成功案例", href: "#" },
          ],
        },
      ],
      ctaText: "开始免费试用",
      ctaHref: "#",
    },
    hero: {
      title: "企业级即时通讯\n让协作更快一步",
      subtitle:
        "安全、高效、可定制——专为现代企业打造的智能聊天平台，集成工作流与数据洞察。",
      primaryCtaText: "开始免费使用",
      primaryCtaHref: "#",
      secondaryCtaText: "联系销售",
      secondaryCtaHref: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    },
    featureLeftImage: {
      title: "无缝沟通，跨越部门",
      description:
        "打破信息孤岛，通过话题群组、私聊和富媒体分享，让每个人都能快速找到所需信息。集成企业目录，一键联系同事。",
      tags: ["端到端加密", "无限历史记录"],
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=30",
    },
    featureRightImage: {
      title: "深度集成工作流",
      description:
        "与您使用的工具无缝连接：Jira、GitLab、Google Drive、Salesforce。在聊天中创建任务、分享文件、触发自动化。",
      tags: ["Slack 导入", "API 开放"],
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=30",
    },
    featureBottomImage: {
      title: "全平台一致体验",
      description: "无论是在桌面、网页还是移动端，消息实时同步，操作流畅如一。",
      imageUrl:
        "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    },
    featuresGrid: [
      {
        id: 1,
        title: "企业级安全",
        description: "端到端加密、SSO、DLP策略，满足合规需求。",
        icon: "🔒",
      },
      {
        id: 2,
        title: "实时同步",
        description: "毫秒级延迟，跨设备已读回执与状态。",
        icon: "⚡",
      },
      {
        id: 3,
        title: "无限集成",
        description: "连接200+企业应用，自定义机器人。",
        icon: "🧩",
      },
      {
        id: 4,
        title: "分析洞察",
        description: "团队活跃度、响应时间数据可视化。",
        icon: "📊",
      },
    ],
    team: [
      {
        id: 1,
        name: "张伟",
        role: "CEO & 创始人",
        avatar:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=30",
      },
      {
        id: 2,
        name: "陈敏",
        role: "CTO",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=30",
      },
      {
        id: 3,
        name: "王磊",
        role: "产品总监",
        avatar:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=30",
      },
      {
        id: 4,
        name: "李莉",
        role: "设计负责人",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=30",
      },
    ],
    stats: [
      { id: 1, value: "500+", label: "企业客户" },
      { id: 2, value: "98%", label: "客户留存率" },
      { id: 3, value: "20M+", label: "日消息量" },
      { id: 4, value: "24/7", label: "技术支持" },
    ],
    pricing: [
      {
        id: 1,
        name: "基础版",
        price: "¥49",
        period: "/月/人",
        features: ["消息历史1年", "10GB 文件存储", "基础集成"],
        ctaText: "选择基础版",
        ctaVariant: "outline",
      },
      {
        id: 2,
        name: "商业版",
        price: "¥99",
        period: "/月/人",
        features: ["无限历史", "100GB 存储", "所有集成 + API", "高级支持"],
        isPopular: true,
        ctaText: "选择商业版",
        ctaVariant: "primary",
      },
      {
        id: 3,
        name: "企业版",
        price: "定制",
        features: ["本地部署选项", "无限存储", "专属客户成功", "SSO/合规"],
        ctaText: "联系销售",
        ctaVariant: "outline",
      },
    ],
    faq: [
      {
        id: 1,
        question: "支持本地部署吗？",
        answer: "是的，企业版支持私有云或本地服务器部署，满足最高安全合规要求。",
      },
      {
        id: 2,
        question: "可以试用多久？",
        answer: "所有新用户均可享受30天全功能免费试用，无需信用卡。",
      },
      {
        id: 3,
        question: "数据存储在哪里？",
        answer:
          "数据存储在云端的独立数据库，可选中国大陆或海外区域，符合当地法规。",
      },
      {
        id: 4,
        question: "如何迁移现有聊天记录？",
        answer: "我们提供专业迁移工具，支持从Slack、Teams等平台导入历史数据。",
      },
    ],
    cta: {
      title: "准备好让团队协作更高效了吗？",
      description: "立即开始免费试用，无需信用卡。",
      primaryCtaText: "开始免费试用",
      primaryCtaHref: "#",
      secondaryCtaText: "联系我们",
      secondaryCtaHref: "#",
    },
    footer: { companyName: "ChatFlow" },
  },
};
