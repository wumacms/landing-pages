// ===== 通用数据结构 =====

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  icon?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaVariant?: "primary" | "outline" | "ghost";
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// ===== 各区块组件的 props（与 components/sections/*、components/layout/* 一一对应）=====

export interface NavbarProps {
  logoText?: string;
  logoImage?: string;
  menuItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}

export interface FooterProps {
  companyName?: string;
  logoImage?: string;
  year?: number;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  imageUrl: string;
}

export interface FeatureImageProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface FeatureBottomImageProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface CTAProps {
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

// ===== 站点（落地页）配置 =====

/** 内置区块类型，按需组合成落地页 */
export type SectionType =
  | "hero"
  | "featureLeftImage"
  | "featureRightImage"
  | "featureBottomImage"
  | "featuresGrid"
  | "team"
  | "stats"
  | "pricing"
  | "faq"
  | "cta";

/** 单个区块的 props，与 SectionType 一一对应 */
export interface SiteData {
  navbar?: NavbarProps;
  hero?: HeroProps;
  featureLeftImage?: FeatureImageProps;
  featureRightImage?: FeatureImageProps;
  featureBottomImage?: FeatureBottomImageProps;
  featuresGrid?: Feature[];
  team?: TeamMember[];
  stats?: Stat[];
  pricing?: PricingPlan[];
  faq?: FAQItem[];
  cta?: CTAProps;
  footer?: FooterProps;
}

/**
 * 落地页站点配置：一份配置即可驱动一个完整的落地页。
 * 新增站点时在 src/sites/ 下创建配置并注册到 src/sites/index.ts 即可。
 */
export interface SiteConfig {
  /** 唯一标识，同时作为路由路径 /sites/:id */
  id: string;
  /** 站点展示名称 */
  name: string;
  /** 一句话标语 */
  tagline: string;
  /** 详细描述（首页卡片展示） */
  description: string;
  /** 标签，用于首页检索过滤 */
  tags: string[];
  /** 封面图（首页卡片），可选 */
  cover?: string;
  /** 区块渲染顺序 */
  sections: SectionType[];
  /** 各区块数据 */
  data: SiteData;
}
