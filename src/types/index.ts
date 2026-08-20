// src/types/index.ts
export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  icon?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period?: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaVariant?: "primary" | "outline" | "ghost";
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
