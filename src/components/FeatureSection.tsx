"use client";
import React from "react";
import { Layers } from "lucide-react";

const FeatureCard = ({ title, description, icon: Icon }: any) => {
  return (
    <div className="relative group">
      {/* Animated border effect */}
      <div
        className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent 
                    rounded-2xl blur-sm group-hover:blur-md transition-all duration-300
                    animate-border-flow"
      ></div>

      {/* Card content */}
      <div className="relative bg-[#0B1121] rounded-2xl p-8 h-full">
        <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Experience",
      description:
        "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
      icon: Layers,
    },
    {
      title: "Quick Support",
      description:
        "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
      icon: Layers,
    },
    {
      title: "Cost Savings",
      description:
        "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
      icon: Layers,
    },
  ];

  return (
    <section className="py-20 bg-[#020817]">
      <style jsx global>{`
        @keyframes border-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-border-flow {
          animation: border-flow 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Your best call for <span className="text-blue-400">B2B/B2C</span>{" "}
          product innovation
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
