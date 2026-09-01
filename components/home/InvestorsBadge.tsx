"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Keeping your original image paths to prevent import errors
const AVATAR_SETS = [
  ["/images/emrld.jpg", "/images/alubarika.jpg", "/images/bella.jpg"],
  ["/images/bella.jpg", "/images/emrld.jpg", "/images/alubarika.jpg"],
  ["/images/alubarika.jpg", "/images/bella.jpg", "/images/emrld.jpg"],
];

export default function InvestorsBadge() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runLoop = () => {
      // 1. Rest State (3.0s pause)
      timeoutId = setTimeout(() => {
        // 2. Collapse / Exit to the right behind front avatar (~650ms)
        setIsCollapsed(true);

        timeoutId = setTimeout(() => {
          // 3. Swap profile images
          setCurrentSetIndex((prev) => (prev + 1) % AVATAR_SETS.length);

          timeoutId = setTimeout(() => {
            // 4. Re-expand outward horizontally to the left (~650ms)
            setIsCollapsed(false);

            // Continue loop
            runLoop();
          }, 120);
        }, 680);
      }, 3000);
    };

    runLoop();

    return () => clearTimeout(timeoutId);
  }, []);

  const currentAvatars = AVATAR_SETS[currentSetIndex];

  return (
    <div className="absolute -top-7 left-[56%] xl:left-[45%] z-30 bg-white px-5 py-3 rounded-2xl 
    shadow-[0_30px_20px_-10px_rgba(0,0,0,0.30),0_8px_20px_-5px_rgba(0,0,0,0.04)] 
    border-2 border-slate-100/50 flex items-center gap-3.5 select-none transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
      {/* Avatar Stack Container - Width dynamically animates between 32px (collapsed) and 68px (expanded) */}
      <div
        className={`flex items-center relative h-8 transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] overflow-visible ${
          isCollapsed ? "w-8 -space-x-8" : "w-[68px] -space-x-2.5"
        }`}
      >
        {/* Avatar 1 (Back left) */}
        <div
          className="relative w-8 h-8 rounded-full overflow-hidden z-10 flex-shrink-0 transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: isCollapsed ? "translateX(36px) scale(0.85)" : "translateX(0) scale(1)",
            opacity: isCollapsed ? 0 : 1,
          }}
        >
          <Image
            src={currentAvatars[0]}
            alt="Investor"
            fill
            sizes="32px"
            className="object-cover object-top"
          />
        </div>

        {/* Avatar 2 (Middle) */}
        <div
          className="relative w-8 h-8 rounded-full overflow-hidden  z-20 flex-shrink-0 transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: isCollapsed ? "translateX(18px) scale(0.9)" : "translateX(0) scale(1)",
            opacity: isCollapsed ? 0 : 1,
          }}
        >
          <Image
            src={currentAvatars[1]}
            alt="Investor"
            fill
            sizes="32px"
            className="object-cover object-top"
          />
        </div>

        {/* Avatar 3 (Front right - anchor) */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden z-30 flex-shrink-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
          <Image
            src={currentAvatars[2]}
            alt="Investor"
            fill
            sizes="32px"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Badge Text */}
      <div className="text-[15px] xl:text-[16px] text-slate-700 tracking-tight whitespace-nowrap flex items-center gap-1.5 font-normal">
        {/* Changed color to forest green to match the financial growth theme */}
        <span className="font-semibold text-[#059669]">3,124</span>
        <span>active investors</span>
        <span className="text-slate-400">today</span>
      </div>
    </div>
  );
}