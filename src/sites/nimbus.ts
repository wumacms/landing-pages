// 示例站点：演示「复用同一套区块组件，仅提供数据」即可产出全新落地页
import type { SiteConfig } from "../types";

export const nimbusSite: SiteConfig = {
  id: "nimbus-cloud",
  name: "Nimbus Cloud",
  tagline: "开发者云服务平台",
  description:
    "演示多站点复用架构的示例落地页：同样一组区块组件，仅通过配置数据即可快速产出风格不同的页面。",
  tags: ["云服务", "开发者工具", "示例"],
  cover:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
  sections: [
    "hero",
    "featuresGrid",
    "featureRightImage",
    "stats",
    "pricing",
    "faq",
    "cta",
  ],
  data: {
    navbar: {
      logoText: "Nimbus",
      ctaText: "登录控制台",
      ctaHref: "#",
    },
    hero: {
      title: "构建、部署、扩展\n一切皆在云端",
      subtitle:
        "面向开发者的云基础设施：全球节点、秒级伸缩、按量计费，让专注回归代码本身。",
      primaryCtaText: "免费开始",
      primaryCtaHref: "#",
      secondaryCtaText: "查看文档",
      secondaryCtaHref: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=60",
    },
    featuresGrid: [
      {
        id: 1,
        title: "全球边缘节点",
        description: "30+ 区域覆盖，就近接入，毫秒级延迟。",
        icon: "🌍",
      },
      {
        id: 2,
        title: "秒级弹性伸缩",
        description: "按流量自动扩容，无需人工干预。",
        icon: "📈",
      },
      {
        id: 3,
        title: "一键 CI/CD",
        description: "Git 推送即部署，回滚只需一条命令。",
        icon: "🚀",
      },
      {
        id: 4,
        title: "按量付费",
        description: "只为真正消耗的资源买单，成本透明。",
        icon: "💳",
      },
    ],
    featureRightImage: {
      title: "命令行即可完成一切",
      description:
        "功能完备的 CLI 与 REST API，让基础设施即代码成为现实，原生支持 Terraform 与 Pulumi。",
      tags: ["REST API", "Terraform"],
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=30",
    },
    stats: [
      { id: 1, value: "99.99%", label: "可用性 SLA" },
      { id: 2, value: "30+", label: "全球区域" },
      { id: 3, value: "120K", label: "开发者" },
      { id: 4, value: "2.1ms", label: "平均响应" },
    ],
    pricing: [
      {
        id: 1,
        name: "开发者",
        price: "$0",
        period: "/月",
        features: ["1 个项目", "10GB 存储", "社区支持"],
        ctaText: "免费使用",
        ctaVariant: "outline",
      },
      {
        id: 2,
        name: "团队",
        price: "$49",
        period: "/月",
        features: ["无限项目", "1TB 存储", "7×24 支持", "自定义域名"],
        isPopular: true,
        ctaText: "开始试用",
        ctaVariant: "primary",
      },
      {
        id: 3,
        name: "企业",
        price: "定制",
        features: ["私有化部署", "专属客户成功", "SLA 保障"],
        ctaText: "联系销售",
        ctaVariant: "outline",
      },
    ],
    faq: [
      {
        id: 1,
        question: "注册后多久可以开始使用？",
        answer: "注册即可立即开始，无需信用卡；每个账号默认赠送 $200 免费额度。",
      },
      {
        id: 2,
        question: "支持哪些部署方式？",
        answer: "支持全球公有云托管与私有化部署两种模式，企业版可自定义网络与合规策略。",
      },
      {
        id: 3,
        question: "如何从其他云平台迁移？",
        answer: "提供一键迁移工具与专业迁移服务，可在不影响线上业务的情况下平滑切换。",
      },
    ],
    cta: {
      title: "现在就开始你的云端之旅",
      description: "注册即送 $200 免费额度，随用随付、随时可停。",
      primaryCtaText: "立即注册",
      primaryCtaHref: "#",
      secondaryCtaText: "联系销售",
      secondaryCtaHref: "#",
    },
    footer: { companyName: "Nimbus Cloud" },
  },
};
