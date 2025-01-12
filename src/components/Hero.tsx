import React from "react";
import { ArrowRight } from "lucide-react";

const WorldMapDots: React.FC = () => {
  // Define regions where dots should appear more densely to represent continents
  const continentPattern: number[][] = [
    // North America
    [3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8],
    [3, 4, 5, 6, 7, 8],
    [4, 5, 6, 7],
    // Europe
    [12, 13, 14, 15],
    [11, 12, 13, 14, 15],
    [12, 13, 14],
    // Asia
    [15, 16, 17, 18, 19, 20, 21],
    [16, 17, 18, 19, 20, 21, 22],
    [17, 18, 19, 20, 21],
    // Africa
    [13, 14, 15, 16],
    [12, 13, 14, 15, 16],
    [13, 14, 15],
    // South America
    [7, 8, 9],
    [6, 7, 8, 9],
    [7, 8, 9, 10],
    // Australia
    [20, 21, 22],
    [21, 22, 23],
  ];

  const shouldShowDot = (row: number, col: number): boolean => {
    return continentPattern[row]?.includes(col) || Math.random() < 0.1; // Sparse random dots for oceans
  };

  return (
    <div className="absolute inset-0 opacity-20">
      <div className="max-w-[1920px] mx-auto h-full">
        <div className="grid grid-cols-32 gap-4 p-8 h-full">
          {Array.from({ length: 18 }).map((_, row) => (
            <React.Fragment key={`row-${row}`}>
              {Array.from({ length: 32 }).map(
                (_, col) =>
                  shouldShowDot(row, col) && (
                    <div
                      key={`dot-${row}-${col}`}
                      className="w-2 h-2 rounded-full bg-gray-400"
                      style={{
                        gridRow: row + 1,
                        gridColumn: col + 1,
                      }}
                    />
                  )
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative md:min-h-screen bg-[#020817] overflow-hidden">
      <WorldMapDots />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#020817]/80 to-[#020817]" />

      {/* Content */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
              <span className="block">We build </span>
              <span className="text-[#7EB6FF] block">products</span>
              <span className="block">that shape a better future</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              We&apos;re the architects of digital excellence across industries.
              We redefine business with cutting-edge digital strategies that
              invokes sector-wide transformation.
            </p>

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
