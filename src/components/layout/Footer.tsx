// src/components/layout/Footer.tsx
import React from "react";
import defaultLogoSvg from "../../assets/react.svg";

interface FooterProps {
  companyName?: string;
  logoImage?: string;
  year?: number;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = "ChatFlow",
  logoImage = defaultLogoSvg,
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="h-8 rounded-md object-cover"
            src={logoImage}
            alt={`${companyName} Logo`}
          />
          <span className="font-semibold text-white">{companyName}</span>
        </div>
        <div className="text-sm mt-4 md:mt-0">
          © {year} {companyName} Technologies · 企业聊天解决方案。保留所有权利。
        </div>
      </div>
    </footer>
  );
};
