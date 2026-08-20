// src/components/sections/Pricing.tsx
import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import type { PricingPlan } from "../../types";

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export const Pricing: React.FC<PricingProps> = ({
  plans,
  title = "灵活定价",
  description = "按需选择，无隐藏费用",
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {description && <p className={`text-gray-600 mt-2`}>{description}</p>}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              bordered={!plan.isPopular}
              className={`${plan.isPopular ? "border-2 border-indigo-200 shadow-md relative" : ""}`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-8 bg-indigo-600 text-white px-3 py-1 text-sm rounded-b-lg">
                  最受欢迎
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-4xl font-bold mt-4">
                {plan.price}
                {plan.period && (
                  <span className="text-base font-normal text-gray-500">
                    {plan.period}
                  </span>
                )}
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="#"
                variant={plan.ctaVariant || "primary"}
                fullWidth
                className="mt-8"
              >
                {plan.ctaText}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
