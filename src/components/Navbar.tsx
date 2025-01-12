"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import BookCallButton from "./BookCallButton";
import SVGClient from "./SVGClient";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Studio", href: "#" },
    { label: "Foundation", href: "#" },
  ];

  return (
    <nav className="bg-[#020817] px-4 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <SVGClient src="../svg/logo.svg" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Book a Call Button */}
        <div className="hidden md:block">
          <BookCallButton />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-[#020817] py-4 z-50 border-t border-gray-800">
          <div className="flex flex-col space-y-4 px-4 max-w-7xl mx-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <BookCallButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
