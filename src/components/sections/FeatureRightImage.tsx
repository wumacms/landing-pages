// src/components/sections/FeatureRightImage.tsx
import React from "react";

interface FeatureRightImageProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const FeatureRightImage: React.FC<FeatureRightImageProps> = ({
  title,
  description,
  tags,
  imageUrl,
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <img
              src={imageUrl}
              alt={title}
              className="rounded-2xl shadow-lg border border-gray-200 w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
