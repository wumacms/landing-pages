// 落地页渲染容器：根据站点配置动态渲染区块，新增落地页无需改动此文件
import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getSiteById } from "../sites";
import type { SectionType, SiteData } from "../types";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { FeatureLeftImage } from "../components/sections/FeatureLeftImage";
import { FeatureRightImage } from "../components/sections/FeatureRightImage";
import { FeatureBottomImage } from "../components/sections/FeatureBottomImage";
import { FeaturesGrid } from "../components/sections/FeaturesGrid";
import { Team } from "../components/sections/Team";
import { Stats } from "../components/sections/Stats";
import { Pricing } from "../components/sections/Pricing";
import { FAQ } from "../components/sections/FAQ";
import { CTA } from "../components/sections/CTA";

/** 区块类型 → 组件映射（异构 props，使用宽松类型便于配置驱动渲染） */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SectionComponent = React.FC<any>;
const sectionRenderers: Record<SectionType, SectionComponent> = {
  hero: Hero,
  featureLeftImage: FeatureLeftImage,
  featureRightImage: FeatureRightImage,
  featureBottomImage: FeatureBottomImage,
  featuresGrid: FeaturesGrid,
  team: Team,
  stats: Stats,
  pricing: Pricing,
  faq: FAQ,
  cta: CTA,
};

/** 从站点数据中取出区块所需的 props（数组型区块做一次适配） */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resolveSectionProps = (type: SectionType, data: SiteData): any => {
  switch (type) {
    case "featuresGrid":
      return data.featuresGrid ? { features: data.featuresGrid } : undefined;
    case "team":
      return data.team ? { members: data.team } : undefined;
    case "stats":
      return data.stats ? { stats: data.stats } : undefined;
    case "pricing":
      return data.pricing ? { plans: data.pricing } : undefined;
    case "faq":
      return data.faq ? { items: data.faq } : undefined;
    default:
      return data[type];
  }
};

export const SiteView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const site = getSiteById(id);

  if (!site) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-white">
      {/* 悬浮返回首页按钮 */}
      <Link
        to="/"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gray-900/90 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur transition hover:bg-gray-900"
      >
        <ArrowLeft className="h-4 w-4" />
        返回作品集
      </Link>

      <Navbar {...site.data.navbar} />
      <main>
        {site.sections.map((type) => {
          const Comp = sectionRenderers[type];
          const props = resolveSectionProps(type, site.data);
          if (!props) return null;
          return <Comp key={type} {...props} />;
        })}
      </main>
      <Footer {...site.data.footer} />
    </div>
  );
};
