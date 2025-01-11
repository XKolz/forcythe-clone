import Image from "next/image";
import React from "react";
// Image

const ScrollingShowcase = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      image: "https://picsum.photos/200",
      title: "Mobile App Dashboard",
    },
    {
      id: 2,
      image: "https://picsum.photos/200",
      title: "Global Resources Platform",
    },
    {
      id: 3,
      image: "https://picsum.photos/200",
      title: "Treasury Gateway",
    },
    {
      id: 4,
      image: "https://picsum.photos/200",
      title: "X-factor Business",
    },
    {
      id: 5,
      image: "https://picsum.photos/200",
      title: "Financial Infrastructure",
    },
  ];

  return (
    <section className="py-20 bg-[#020817] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Success in <span className="text-blue-400">Motion</span> - Our
          clients&apos; journey
        </h2>
      </div>

      {/* First Row - Moving Left */}
      <div className="relative mb-8 w-full">
        <div className="animate-scroll-left flex gap-4 whitespace-nowrap">
          {/* First set of images */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[300px] md:w-[400px] flex-shrink-0 rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] md:h-[250px] object-cover"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {projects.map((project) => (
            <div
              key={`${project.id}-duplicate`}
              className="w-[300px] md:w-[400px] flex-shrink-0 rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] md:h-[250px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Moving Right */}
      <div className="relative w-full">
        <div className="animate-scroll-right flex gap-4 whitespace-nowrap">
          {/* First set of images */}
          {projects.map((project) => (
            <div
              key={`${project.id}-second`}
              className="w-[300px] md:w-[400px] flex-shrink-0 rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] md:h-[250px] object-cover"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {projects.map((project) => (
            <div
              key={`${project.id}-second-duplicate`}
              className="w-[300px] md:w-[400px] flex-shrink-0 rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] md:h-[250px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingShowcase;
