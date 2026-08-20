// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import defaultLogoSvg from "../../assets/react.svg";
import type { NavbarProps } from "../../types";

export const Navbar: React.FC<NavbarProps> = ({
  logoText = "ChatFlow",
  logoImage = defaultLogoSvg,
  menuItems = [],
  ctaText = "开始免费试用",
  ctaHref = "#",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <img className="h-8" src={logoImage} alt={`${logoText} Logo`} />
            <span className="text-xl font-semibold text-gray-800 tracking-tight">
              {logoText}
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item, index) => {
              if (item.children && item.children.length > 0) {
                return (
                  <div key={index} className="relative group">
                    <button className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50">
                      {item.icon && <span>{item.icon}</span>}
                      {item.label}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                      <div className="py-2">
                        {item.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition ${
                              child.icon ? "" : "block"
                            }`}
                          >
                            {child.icon && <span>{child.icon}</span>}
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={index}
                  href={item.href || "#"}
                  className="px-3 py-2 text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50"
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Button href={ctaHref} size="sm" className="hidden sm:inline-flex">
              {ctaText}
            </Button>
            <button
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="菜单"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {menuItems.map((item, index) => {
              if (item.children && item.children.length > 0) {
                return (
                  <div key={index} className="py-2">
                    <div className="font-medium text-gray-700 px-3 py-2">
                      {item.label}
                    </div>
                    {item.children.map((child, childIndex) => (
                      <a
                        key={childIndex}
                        href={child.href}
                        className="block px-6 py-2 text-sm text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.icon && (
                          <span className="mr-2">{child.icon}</span>
                        )}
                        {child.label}
                      </a>
                    ))}
                  </div>
                );
              }
              return (
                <a
                  key={index}
                  href={item.href || "#"}
                  className="block py-3 px-3 text-gray-600 hover:text-indigo-600 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </a>
              );
            })}
            <Button href={ctaHref} fullWidth className="mt-4">
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
