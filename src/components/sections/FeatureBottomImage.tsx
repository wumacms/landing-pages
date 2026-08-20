// src/components/sections/FeatureBottomImage.tsx
import React from "react";

interface FeatureBottomImageProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const FeatureBottomImage: React.FC<FeatureBottomImageProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
        <div className="mt-12">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-2xl shadow-xl border border-gray-200 w-full h-auto object-cover max-w-5xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
