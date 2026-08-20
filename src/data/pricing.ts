export const pricingPlans = [
  {
    id: 1,
    name: "基础版",
    price: "¥49",
    period: "/月/人",
    features: ["消息历史1年", "10GB 文件存储", "基础集成"],
    ctaText: "选择基础版",
    ctaVariant: "outline" as const,
  },
  {
    id: 2,
    name: "商业版",
    price: "¥99",
    period: "/月/人",
    features: ["无限历史", "100GB 存储", "所有集成 + API", "高级支持"],
    isPopular: true,
    ctaText: "选择商业版",
    ctaVariant: "primary" as const,
  },
  {
    id: 3,
    name: "企业版",
    price: "定制",
    features: ["本地部署选项", "无限存储", "专属客户成功", "SSO/合规"],
    ctaText: "联系销售",
    ctaVariant: "outline" as const,
  },
];
