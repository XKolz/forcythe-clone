"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const WorldMapDots = () => {
  // Create a grid of dots that roughly resembles a world map
  // This is a simplified version - you might want to use an actual map SVG for production
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="max-w-[1920px] mx-auto h-full">
        {/* Grid container */}
        <div className="grid grid-cols-12 md:grid-cols-24 lg:grid-cols-32 gap-8 p-8 h-full">
          {Array.from({ length: 384 }).map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-400" />
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#020817] overflow-hidden">
      {/* Background Elements */}
      <WorldMapDots />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020817]" />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-20 md:pt-40 md:pb-28">
          {/* Content Container */}
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
              <span className="block">We build </span>
              <span className="text-[#7EB6FF] block">products</span>
              <span className="block">that shape a better future</span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              We&apos;re the architects of digital excellence across industries.
              We redefine business with cutting-edge digital strategies that
              invokes sector-wide transformation.
            </p>

            {/* CTA Button */}
            <button
              className="group inline-flex items-center text-white px-8 py-4 
                         rounded-full border border-dashed hover:bg-white 
                         hover:text-[#020817] transition-all duration-300 ease-in-out"
            >
              <span className="mr-2 text-base font-medium">Book a Call</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
