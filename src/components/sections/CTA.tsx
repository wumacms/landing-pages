// src/components/sections/CTA.tsx
import React from 'react';
import { Button } from '../ui/Button';
import type { CTAProps } from '../../types';

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}) => {
  return (
    <section className="bg-indigo-600 py-16">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-indigo-100 text-lg mb-8">{description}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href={primaryCtaHref} variant="secondary" size="lg">
            {primaryCtaText}
          </Button>
          <Button href={secondaryCtaHref} variant="outline" size="lg" className="border-white text-white hover:bg-indigo-500">
            {secondaryCtaText}
          </Button>
        </div>
      </div>
    </section>
  );
};