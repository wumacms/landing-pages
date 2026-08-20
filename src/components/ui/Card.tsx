// src/components/ui/Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  bordered = true,
}) => {
  const baseStyles = "bg-white p-6 rounded-2xl";
  const borderStyles = bordered ? "border border-gray-200" : "";
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-md hover:-translate-y-1"
    : "shadow-sm";

  return (
    <div
      className={`${baseStyles} ${borderStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-gray-900 ${className}`}>{children}</h3>
);

export const CardDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <p className={`text-gray-500 text-sm ${className}`}>{children}</p>
);
