// src/components/sections/FAQ.tsx
import React, { useState } from "react";
import type { FAQItem } from "../../types";

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, title = "常见问题" }) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-6">
              <button
                onClick={() => toggle(item.id)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <span className="text-2xl text-indigo-600 shrink-0 ml-4">
                  {openId === item.id ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openId === item.id ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
