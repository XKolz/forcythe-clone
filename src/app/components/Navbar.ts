// components/Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="font-bold text-xl">
          {/* Replace with your own logo or text */}
          <Link href="/">ForcytheClone</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
