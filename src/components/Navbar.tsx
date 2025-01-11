// // components/Navbar.js
// import React from "react";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <header className="w-full bg-white shadow">
//       <nav className="container mx-auto flex items-center justify-between py-4 px-4">
//         <div className="font-bold text-xl">
//           {/* Replace with your own logo or text */}
//           <Link href="/">ForcytheClone</Link>
//         </div>
//         <ul className="flex space-x-6">
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <Link href="/services">Services</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Studio", href: "#" },
    { label: "Foundation", href: "#" },
  ];

  return (
    <nav className="bg-[#020817] px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-xl font-semibold">© forcythe</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Book a Call Button */}
        <div className="hidden md:block">
          <button className="text-white px-6 py-2 rounded-full border border-dashed hover:bg-white hover:text-black transition-colors">
            Book a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#020817] py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="text-white px-6 py-2 rounded-full border border-dashed hover:bg-white hover:text-black transition-colors w-fit">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
