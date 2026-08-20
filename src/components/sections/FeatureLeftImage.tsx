// src/components/sections/FeatureLeftImage.tsx
import React from "react";

interface FeatureLeftImageProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const FeatureLeftImage: React.FC<FeatureLeftImageProps> = ({
  title,
  description,
  tags,
  imageUrl,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-2xl shadow-lg border border-gray-200 w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-indigo-600 font-medium">
              {tags.map((tag, index) => (
                <span key={index} className="flex items-center gap-1">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
