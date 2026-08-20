// src/components/sections/Hero.tsx
import React from "react";
import { Button } from "../ui/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  imageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageUrl,
}) => {
  return (
    <section className="relative bg-linear-to-b from-white to-gray-50 pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 whitespace-pre-line">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-10">{subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href={primaryCtaHref} size="lg">
              {primaryCtaText}
            </Button>
            <Button href={secondaryCtaHref} variant="outline" size="lg">
              {secondaryCtaText}
            </Button>
          </div>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <img
            src={imageUrl}
            alt="团队协作界面"
            className="rounded-xl shadow-2xl border border-gray-200 w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
