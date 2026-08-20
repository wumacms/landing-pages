// src/App.tsx
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { FeatureLeftImage } from "./components/sections/FeatureLeftImage";
import { FeatureRightImage } from "./components/sections/FeatureRightImage";
import { FeatureBottomImage } from "./components/sections/FeatureBottomImage";
import { FeaturesGrid } from "./components/sections/FeaturesGrid";
import { Team } from "./components/sections/Team";
import { Stats } from "./components/sections/Stats";
import { Pricing } from "./components/sections/Pricing";
import { FAQ } from "./components/sections/FAQ";
import { CTA } from "./components/sections/CTA";

import { navItems } from "./data/navbar";
import { heroData } from "./data/hero";
import {
  featuresGrid,
  featureLeftImage,
  featureRightImage,
  featureBottomImage,
} from "./data/features";
import { teamMembers } from "./data/team";
import { stats } from "./data/stats";
import { pricingPlans } from "./data/pricing";
import { faqItems } from "./data/faq";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      <Navbar
        logoText="ChatFlow"
        menuItems={navItems}
        ctaText="开始免费试用"
        ctaHref="#"
      />

      <main>
        <Hero {...heroData} />
        <FeatureLeftImage {...featureLeftImage} />
        <FeatureRightImage {...featureRightImage} />
        <FeatureBottomImage {...featureBottomImage} />
        <FeaturesGrid features={featuresGrid} />
        <Team members={teamMembers} />
        <Stats stats={stats} />
        <Pricing plans={pricingPlans} />
        <FAQ items={faqItems} />
        <CTA
          title="立即提升团队协作效率"
          description="加入数百家信任我们的企业，开启高效沟通之旅。"
          primaryCtaText="免费试用30天"
          primaryCtaHref="#"
          secondaryCtaText="预约演示"
          secondaryCtaHref="#"
        />
      </main>

      <Footer companyName="ChatFlow" />
    </div>
  );
}

export default App;
