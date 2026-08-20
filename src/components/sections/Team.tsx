// src/components/sections/Team.tsx
import React from "react";
import type { TeamMember } from "../../types";

interface TeamProps {
  members: TeamMember[];
  title?: string;
  description?: string;
}

export const Team: React.FC<TeamProps> = ({
  members,
  title = "核心团队",
  description = "来自全球顶尖企业的协作专家",
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {description && <p className={`text-gray-600 mt-2`}>{description}</p>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-md border-2 border-white"
              />
              <h3 className="font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
