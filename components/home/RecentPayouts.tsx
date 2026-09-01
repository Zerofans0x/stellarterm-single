"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Flag({ country }: { country: string }) {
  const flags: Record<string, { src: string; alt: string }> = {
    ng: { src: "/images/flag-for-nigeria.png", alt: "Nigeria" },
    gh: { src: "/images/flag-for-ghana.png", alt: "Ghana" },
    sa: { src: "/images/flag-for-south-africa.png", alt: "South Africa" },
  };
  const flag = flags[country];
  if (!flag) return null;
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 relative shadow-xs">
      <Image src={flag.src} alt={flag.alt} width={24} height={24} className="w-full h-full object-cover" />
    </div>
  );
}

export default function RecentPayouts() {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const scrollAmount = 364;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const gridItems = [
    { img: "/images/result-1.png", name: "Client ID: 492...", flag: "ng" },
    { img: "/images/result-2.png", name: "Client ID: 881...", flag: "gh" },
    { img: "/images/result-3.png", name: "Client ID: 102...", flag: "sa" },
    { img: "/images/result-2.png", name: "Client ID: 749...", flag: "gh" },
  ];

  return (
    <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 lg:py-32 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
        <div className="flex items-center gap-2 text-slate-500 tracking-[0.1em] text-[12px] uppercase">
          <svg className="w-4 h-4 text-[#059669]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>VERIFIED DISBURSEMENTS</span>
        </div>
        <h2 className="font-mazzard text-[34px] sm:text-[44px] lg:text-[48px] text-[#111827] leading-[1.1] tracking-tight mt-4">
          <span className="block sm:hidden">More than just <br /> promises</span>
          <span className="hidden sm:block">Consistent yields.</span>
        </h2>
        <p className="hidden sm:block mt-4 text-[14px] sm:text-[15px] text-slate-500 font-normal leading-[1.6]">
          Capital distributions processed securely across the globe every day.
        </p>
      </motion.div>

      {/* Grid rendering exact same as original file, just updated the button text/color */}
      <div className="mt-8 sm:mt-12">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center justify-center bg-[#059669] text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-[13px] sm:text-[14px] hover:bg-[#047857] transition-colors shadow-sm"
        >
          {isExpanded ? "Collapse Records" : "Explore Distributions"}
        </button>
      </div>
    </section>
  );
}