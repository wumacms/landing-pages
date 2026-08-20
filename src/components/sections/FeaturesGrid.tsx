// src/components/sections/FeaturesGrid.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/Card";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface FeaturesGridProps {
  features: Feature[];
  title?: string;
  description?: string;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  features,
  title = "专为商务打造的特性",
  description = "从安全到效率，面面俱到",
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {description && <p className={`text-gray-600 mt-2`}>{description}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} hover bordered>
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 text-xl mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
