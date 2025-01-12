import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Blog } from "../types/Blog";
import SVGClient from "./SVGClient";

const BlogCard: React.FC<Blog> = ({ image, category, date, title, author }) => {
  return (
    <div className="group relative rounded-2xl bg-[#0F172A] overflow-hidden transition-all duration-300 hover:-translate-y-1">
      {/* Border gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-blue-500/20 group-hover:to-blue-500/20 transition-all duration-300" />

      {/* Image container with zoom effect */}
      <div className="relative w-full aspect-[2/1] overflow-hidden">
        <Image
          src={image}
          alt={title}
          // fill
          width={400}
          height={200}
          className="object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Logo overlay */}
        <div className="absolute top-4 left-28">
          <SVGClient src="../svg/logo.svg" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span>{category}</span>
          <div className="flex items-center space-x-2">
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

// const BlogSection = () => {
const BlogSection: React.FC = () => {
  //   const blogs = [
  const blogs: Blog[] = [
    {
      image: "https://picsum.photos/200",
      category: "Blog",
      author: "The Reformist",
      date: "May 29th, 2024",
      title: "Will AI take over Art?",
    },
    {
      image: "https://picsum.photos/200",
      category: "Blog",
      author: "The Reformist",
      date: "May 29th, 2024",
      title: "Cryptocurrency vs Tokens",
    },
    {
      image: "https://picsum.photos/200",
      category: "Blog",
      author: "The Reformist",
      date: "May 29th, 2024",
      title: "Cryptocurrency and Crypto asset",
    },
  ];

  return (
    <section className="py-20 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Read our articles, news and product blog
          </h2>
          <button className="hidden md:inline-flex items-center text-white px-6 py-3 rounded-full border border-dashed hover:bg-white hover:text-black transition-all duration-300">
            <span className="mr-2">Visit Blog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        {/* Mobile Blog Button */}
        <div className="md:hidden mt-8 text-center">
          <button className="inline-flex items-center text-white px-6 py-3 rounded-full border border-dashed hover:bg-white hover:text-black transition-all duration-300">
            <span className="mr-2">Visit Blog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
