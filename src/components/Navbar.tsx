"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/booking", label: "Booking" },
  { href: "/dishes", label: "Dishes" },
  { href: "/rooms", label: "Rooms" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-300 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo and Tagline */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="text-2xl font-bold text-blue-900 tracking-wide">
            LuxeBite
          </span>
          <span className="text-sm text-blue-800 group-hover:text-blue-900 transition">
            Fine Dining & Luxury Stays
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative font-medium text-blue-800 hover:text-blue-900 transition duration-300",
                pathname === item.href && "text-blue-900"
              )}
            >
              {item.label}
              <span
                className={clsx(
                  "absolute left-0 -bottom-1 h-[2px] w-full rounded bg-gradient-to-r from-blue-500 to-blue-700 scale-x-0 transition-transform duration-300 origin-left",
                  pathname === item.href ? "scale-x-100" : "hover:scale-x-100"
                )}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-blue-800 hover:text-blue-900 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-pink-200 px-6 pb-4 shadow-lg space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                "block font-medium text-blue-800 hover:text-blue-900 transition",
                pathname === item.href && "text-blue-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
