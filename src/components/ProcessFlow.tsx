"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    id: "idea",
    name: "Idea",
    title: "Start with a Spark",
    description:
      "Transform your innovative ideas into actionable plans. We help refine and validate your concept, ensuring it addresses real market needs.",
    image: {
      src: "https://picsum.photos/200",
      alt: "Ideation Phase Illustration",
      elements: [
        {
          id: 1,
          className:
            "absolute top-10 right-10 w-8 h-8 bg-blue-400 rounded-full animate-pulse",
        },
        {
          id: 2,
          className:
            "absolute bottom-20 left-20 w-6 h-6 bg-white rounded-full animate-pulse delay-75",
        },
        {
          id: 3,
          className:
            "absolute top-32 left-1/4 w-4 h-4 bg-gray-400 rounded-full animate-pulse delay-150",
        },
      ],
    },
  },
  {
    id: "design",
    name: "Design",
    title: "Design for Impact",
    description:
      "Create intuitive and engaging user experiences. Our design process focuses on both aesthetics and functionality to captivate your audience.",
    image: {
      src: "https://picsum.photos/200",
      alt: "Design Phase Illustration",
      elements: [
        {
          id: 1,
          className:
            "absolute top-20 right-20 w-8 h-8 bg-purple-400 rounded-full animate-pulse",
        },
        {
          id: 2,
          className:
            "absolute bottom-10 left-10 w-6 h-6 bg-pink-400 rounded-full animate-pulse delay-75",
        },
        {
          id: 3,
          className:
            "absolute top-24 left-1/3 w-4 h-4 bg-indigo-400 rounded-full animate-pulse delay-150",
        },
      ],
    },
  },
  {
    id: "develop",
    name: "Develop",
    title: "Build with Excellence",
    description:
      "Turn designs into robust, scalable solutions using cutting-edge technology and best development practices.",
    image: {
      src: "https://picsum.photos/200",
      alt: "Development Phase Illustration",
      elements: [
        {
          id: 1,
          className:
            "absolute top-16 right-16 w-8 h-8 bg-green-400 rounded-full animate-pulse",
        },
        {
          id: 2,
          className:
            "absolute bottom-16 left-16 w-6 h-6 bg-teal-400 rounded-full animate-pulse delay-75",
        },
        {
          id: 3,
          className:
            "absolute top-28 left-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse delay-150",
        },
      ],
    },
  },
  {
    id: "launch",
    name: "Launch",
    title: "Ready for Takeoff",
    description:
      "Launch your product with confidence. We ensure a smooth deployment and provide ongoing support for continuous growth.",
    image: {
      src: "https://picsum.photos/200",
      alt: "Launch Phase Illustration",
      elements: [
        {
          id: 1,
          className:
            "absolute top-12 right-12 w-8 h-8 bg-orange-400 rounded-full animate-pulse",
        },
        {
          id: 2,
          className:
            "absolute bottom-24 left-24 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-75",
        },
        {
          id: 3,
          className:
            "absolute top-36 left-1/3 w-4 h-4 bg-red-400 rounded-full animate-pulse delay-150",
        },
      ],
    },
  },
];

const ProcessFlow = () => {
  const [activeStage, setActiveStage] = useState("idea");

  const activeIndex = stages.findIndex((stage) => stage.id === activeStage);
  const currentStage = stages[activeIndex];

  return (
    <section className="py-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              From <span className="text-blue-400">Spark</span> to{" "}
              <span className="text-blue-400">Spotlight</span>: we take you
              every step of the way to success.
            </h2>

            {/* Progress Bar */}
            <div className="relative">
              <div className="flex items-center justify-between bg-[#0F172A] rounded-full p-2">
                {stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                      index <= activeIndex ? "text-white" : "text-gray-400"
                    } ${activeStage === stage.id ? "bg-blue-900" : ""}`}
                  >
                    {stage.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="min-h-[200px] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4">
                {currentStage.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {currentStage.description}
              </p>
              <button className="inline-flex items-center text-white px-6 py-3 rounded-full border border-dashed hover:bg-white hover:text-black transition-all duration-300">
                <span className="mr-2">Book a call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-3xl bg-[#0F172A] p-8">
              {/* Decorative elements specific to current stage */}
              <div className="absolute inset-0">
                {currentStage.image.elements.map((element) => (
                  <div key={element.id} className={element.className} />
                ))}
              </div>

              {/* Main illustration with fade transition */}
              <div className="relative h-full flex items-center justify-center transition-opacity duration-300">
                <Image
                  src={currentStage.image.src}
                  alt={currentStage.image.alt}
                  width={200}
                  height={200}
                  className="rounded-2xl transition-all duration-300"
                  priority={activeIndex === 0}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Your launchpad to the market.
          </h3>
          <p className="text-gray-400 max-w-2xl">
            Launching is just the beginning, we ensure your product makes a
            splash and keeps making waves, ensuring a continual customer
            acquisition.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ProcessFlow;
