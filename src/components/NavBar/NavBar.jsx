// components/Navbar.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegClock, FaChartLine } from "react-icons/fa6";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <BiHomeAlt2 size={18} /> },
    {
      name: "Timeline",
      href: "/timeline",
      icon: <FaRegClock size={18} />,
    },
    {
      name: "Stats",
      href: "/stats",
      icon: <FaChartLine size={18} />,
    },
  ];

  return (
    <nav className="bg-white border-b border-[#E9E9E9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-15 items-center justify-between">
          {/* Logo */}
          <div className="text-[#244d3f] font-bold text-xl">
            Keen<span className="font-semibold">Keeper</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 rounded-sm text-sm font-medium transition-colors
                  ${
                    pathname === item.href
                      ? "bg-[#244D3F] text-white"
                      : "text-[#64748B] hover:text-white hover:bg-[#244D3F]"
                  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#244D3F] focus:outline-none"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E9E9E9] px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-center text-left gap-2 px-3 py-2 rounded-sm text-sm font-medium transition-colors
                ${
                  pathname === item.href
                    ? "bg-[#244D3F] text-white"
                    : "text-[#64748B] hover:text-white hover:bg-[#244D3F]"
                }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
