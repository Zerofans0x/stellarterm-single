"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isHome = pathname === "/";

  return (
    <header
      className={`w-full pb-4 flex items-center justify-between z-30 relative ${
        isHome
          ? "px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8"
          : "px-[36px] sm:px-[64px] lg:px-[88px] pt-[36px] sm:pt-[56px] lg:pt-[64px]"
      }`}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png" 
          alt="MyStellarTerm"
          width={180}
          height={42}
          className="h-8 sm:h-9 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors duration-150 ${
                isActive
                  ? "text-[#059669] font-semibold"
                  : "text-[#0f172a] hover:text-[#059669]"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="/login"
          className="px-6 py-2.5 text-[15px] font-medium text-[#059669] border-2 border-[#059669] rounded-full hover:bg-emerald-50 transition-colors duration-200"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-6 py-2.5 text-[15px] font-medium text-white bg-[#059669] rounded-full hover:bg-[#047857] transition-colors duration-200 shadow-sm"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button & Dropdown */}
      <div className="relative md:hidden" ref={menuRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium transition-all shadow-sm cursor-pointer ${
            isOpen || !isHome
              ? "bg-[#059669] text-white shadow-md"
              : "bg-white text-slate-900 border border-slate-100 hover:bg-slate-50"
          }`}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="text-[15px] leading-none font-semibold">+</span>
          <span>Menu</span>
        </button>

        {/* Mobile Dropdown Card */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2.5 bg-white rounded-[24px] shadow-2xl border border-slate-100/90 p-2 flex flex-col gap-1 w-[136px] text-center z-50 animate-in fade-in zoom-in-95 duration-150">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full py-2 px-3 rounded-full text-[13.5px] font-medium transition-all ${
                    isActive
                      ? "bg-[#059669] text-white shadow-sm font-semibold"
                      : "text-slate-800 hover:text-black hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}