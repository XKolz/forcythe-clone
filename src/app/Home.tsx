import BlogSection from "@/components/BlogSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProcessFlow from "@/components/ProcessFlow";
import ScrollingShowcase from "@/components/ScrollingShowcase";
import StatsSection from "@/components/StatsSection";
import TestimonialTabs from "@/components/TestimonialTabs";
import React from "react";
// Navbar
// Footer
// Hero

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollingShowcase />
      <TestimonialTabs />
      <ProcessFlow />
      <FeatureSection />
      <StatsSection />
      <BlogSection />
      <Footer />
    </>
  );
}
