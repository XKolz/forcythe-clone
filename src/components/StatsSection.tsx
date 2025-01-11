"use client";
import React, { useEffect, useState, useRef } from "react";

const CountUpNumber = ({ end, duration = 2000, suffix = "" }: any) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const startTime = Date.now();
          const timer = setInterval(() => {
            const timePassed = Date.now() - startTime;
            if (timePassed >= duration) {
              setCount(end);
              clearInterval(timer);
              return;
            }

            const progress = timePassed / duration;
            setCount(Math.floor(end * progress));
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 50, label: "Clients", suffix: "+" },
    { value: 120, label: "Projects", suffix: "+" },
    { value: 10, label: "Team Leads", suffix: "+" },
    { value: 10, label: "Glorious Years", suffix: "+" },
  ];

  return (
    <section className="relative bg-[#020817] py-32">
      {/* Curved line SVG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl">
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120C0 120 300 0 600 0C900 0 1200 120 1200 120"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-20 max-w-4xl mx-auto leading-tight">
          We build solutions that help{" "}
          <span className="text-blue-400">businesses</span> of all sizes to{" "}
          <span className="text-blue-400">scale</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-blue-400">
                <CountUpNumber
                  end={stat.value}
                  duration={2000}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
