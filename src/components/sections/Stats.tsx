// src/components/sections/Stats.tsx
import React from "react";
import type { Stat } from "../../types";

interface StatsProps {
  stats: Stat[];
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id}>
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-indigo-100 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
