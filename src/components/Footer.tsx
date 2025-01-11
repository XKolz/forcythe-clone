"use client";
import React, { useState, FormEvent } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Podcast,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe:", { email, isChecked });
  };

  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Studio", href: "#" },
    { name: "Foundation", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Podcast, href: "#" },
  ];

  return (
    <footer className="bg-[#020817] pt-32 pb-8">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-blue-400">Ready to Scale?</span>
        </h2>
        <p className="text-3xl md:text-4xl text-white mb-8">
          Join successful brands that chose us
          <br />
          as their <span className="text-blue-400">growth accelerator</span>
        </p>
        <button className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
          <span className="mr-2 font-medium">Book a Call</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 pb-12">
          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <form onSubmit={handleSubscribe}>
              <div className="flex bg-[#0F172A] rounded-full p-1">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-black rounded-full hover:bg-blue-50 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </div>
              <div className="flex items-center mt-4 space-x-2">
                <input
                  type="checkbox"
                  id="notifications"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 text-blue-400 focus:ring-blue-400"
                />
                <label
                  htmlFor="notifications"
                  className="text-sm text-gray-400"
                >
                  I agree to receive other notifications from Forcythe
                </label>
              </div>
            </form>
          </div>

          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/api/placeholder/150/40"
              alt="Forcythe"
              width={150}
              height={32}
              className="h-8 w-auto"
            />
            <p className="text-gray-400 leading-relaxed">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <nav className="space-y-4">
              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 Forcythe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
