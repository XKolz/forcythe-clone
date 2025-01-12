"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    company: "Starks",
    testimonial:
      "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand's story, captivating our audience like never before.",
    author: "Sarah Chen",
    position: "Founder",
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    company: "ExecutivePros",
    testimonial:
      "Working with Forcythe transformed our digital presence completely. Their innovative solutions and attention to detail helped us achieve unprecedented growth in our market segment.",
    author: "Michael Rodriguez",
    position: "CEO",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    company: "stac.ai",
    testimonial:
      "Forcythe's expertise in AI integration and user experience design helped us create a platform that truly stands out. Their team's dedication to excellence is unmatched.",
    author: "Alex Kim",
    position: "CTO",
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    company: "Iwaria",
    testimonial:
      "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand's story, captivating our audience like never before.",
    author: "Iwaria",
    position: "Founder",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    company: "Beaupreneur",
    testimonial:
      "The strategic vision and technical expertise of Forcythe helped us redefine our market approach. Their solutions have become integral to our success story.",
    author: "Emma Thompson",
    position: "Founder",
    image: "https://picsum.photos/200",
  },
];

const TestimonialTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    setDisplayText("");

    const text = testimonials[activeIndex].testimonial;
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsAnimating(false);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-[#020817]">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Discover the{" "}
          <span className="text-blue-400">transformative stories</span> of
          startups that scaled new heights with us
        </h2>
      </div>

      {/* Tabs Container */}
      <div className="max-w-5xl mx-auto mb-12 px-4">
        <div className="flex items-center justify-between bg-[#0F172A] rounded-full p-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-900 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.company}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonial Card */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-[#0F172A] rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                {testimonials[activeIndex].company}
              </h3>
              {/* // Add a CSS class or disable interactions based on animation state */}
              <p
                className={`text-gray-300 leading-relaxed min-h-[200px] ${
                  isAnimating ? "" : ""
                }`}
              >
                {displayText}
              </p>
              <div className="flex items-center space-x-4">
                <p className="text-white font-medium">
                  {testimonials[activeIndex].author},{" "}
                  <span className="text-gray-400">
                    {testimonials[activeIndex].position}
                  </span>
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].author}
                className="w-full h-[400px] object-cover rounded-2xl"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTabs;
