"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || "w-4 h-4 flex-shrink-0"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 12.5L10.5 17.5L20 8" />
    </svg>
  );
}

export default function PackagesGrid() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const isAnnual = billingCycle === "annual";

  const starterIncluded = [
    "Monthly dividend disbursements",
    "Automated risk management",
    "Standard asset protection",
    "Client dashboard access",
    "Email support",
  ];

  const starterExcluded = [
    "Bi-weekly compounding options",
    "Advanced risk mitigation protocols",
    "Priority asset protection tier",
    "Dedicated account manager",
    "Customized algorithmic hedging",
    "Private advisory sessions",
  ];

  const growthIncluded = [
    "Everything in Starter Tier",
    "Bi-weekly yield compounding options",
    "Advanced risk mitigation protocols",
    "Priority asset protection tier",
    "Dedicated account manager",
    "24/7 priority support",
  ];

  const growthExcluded = [
    "Customized algorithmic hedging",
    "Private advisory sessions",
  ];

  const institutionalIncluded = [
    "Everything in Growth Tier",
    "Immediate weekly yield liquidity",
    "Customized algorithmic hedging",
    "Enterprise-grade cold storage",
    "Private advisory sessions",
    "Direct concierge support",
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 pb-16 sm:pb-24">
      {/* Duration Toggle (Left-aligned) */}
      <div className="mb-6 sm:mb-8 flex justify-start">
        <div className="inline-flex items-center p-1 sm:p-1.5 bg-emerald-50 rounded-full gap-1.5 sm:gap-2 border border-emerald-100">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-normal sm:font-medium transition-all cursor-pointer ${!isAnnual
                ? "bg-[#059669] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 shadow-xs"
              }`}
          >
            Monthly Yields
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("annual")}
            className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-normal sm:font-medium transition-all cursor-pointer ${isAnnual
                ? "bg-[#059669] text-white shadow-xs"
                : "bg-white text-slate-600 hover:text-slate-900 shadow-xs"
              }`}
          >
            Annual Portfolios (High Yield)
          </button>
        </div>
      </div>

      {/* Light-Green Outer Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full bg-[#ecfdf5] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 border border-emerald-100/60"
      >
        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          
          {/* Card 1: $3K STARTER */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex-1 w-full h-full bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-xs border border-emerald-100/50"
          >
            <div className="mb-12">
              <h2 className="font-mazzard text-xl sm:text-[22px] text-[#0f172a] tracking-tight">
                STARTER TIER
              </h2>
              <div className="font-mazzard text-2xl sm:text-[26px] text-[#059669] mt-1.5">
                $3,000
              </div>

              <p className="text-[13px] text-slate-500 font-normal mt-4">
                Minimum Capital Allocation
              </p>
              <p className="text-[12px] sm:text-[12.5px] text-slate-500 font-normal leading-relaxed mt-1.5 min-h-[48px]">
                Ideal for individuals starting structured asset growth with dependable monthly allocations.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-200/90 my-4" />

              {/* Features list */}
              <ul className="space-y-2 text-[12px] sm:text-[12.5px]">
                {starterIncluded.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-800 font-normal">
                    <CheckIcon className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {starterExcluded.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 font-normal">
                    <Icon icon="lucide:x" className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href="/register?tier=3k"
                className="w-full block py-3 px-5 bg-slate-900 hover:bg-[#059669] text-white text-[13.5px] font-medium rounded-full text-center transition-all cursor-pointer"
              >
                Allocate $3K
              </Link>
            </div>
          </motion.div>

          {/* Card 2: $5K GROWTH */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex-1 w-full h-full bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-xs border border-emerald-100/50"
          >
            <div className="mb-12">
              <h2 className="font-mazzard text-xl sm:text-[22px] text-[#0f172a] tracking-tight">
                GROWTH TIER
              </h2>
              <div className="font-mazzard text-2xl sm:text-[26px] text-[#059669] mt-1.5">
                $5,000
              </div>

              <p className="text-[13px] text-slate-500 font-normal mt-4">
                Minimum Capital Allocation
              </p>
              <p className="text-[12px] sm:text-[12.5px] text-slate-500 font-normal leading-relaxed mt-1.5 min-h-[48px]">
                Balanced portfolio tier optimized for enhanced yields and compounding returns.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-200/90 my-4" />

              {/* Features list */}
              <ul className="space-y-2 text-[12px] sm:text-[12.5px]">
                {growthIncluded.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-800 font-normal">
                    <CheckIcon className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {growthExcluded.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 font-normal">
                    <Icon icon="lucide:x" className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href="/register?tier=5k"
                className="w-full block py-3 px-5 bg-slate-900 hover:bg-[#059669] text-white text-[13.5px] font-medium rounded-full text-center transition-all cursor-pointer"
              >
                Allocate $5K
              </Link>
            </div>
          </motion.div>

          {/* Card 3: $25K EXECUTIVE (Featured Popular Card) */}
          <motion.div
            whileHover={{ y: -7 }}
            transition={{ duration: 0.2 }}
            className="flex-1 w-full h-full relative bg-[#059669] text-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-xl"
          >
            {/* Top Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-[#040C26] text-white text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm whitespace-nowrap">
              Most Popular Choice
            </div>

            <div className="mb-12 mt-2">
              <h2 className="font-mazzard text-xl sm:text-[22px] text-white tracking-tight">
                EXECUTIVE TIER
              </h2>
              <div className="font-mazzard text-2xl sm:text-[26px] text-white mt-1.5">
                $25,000
              </div>

              <p className="text-[13px] text-white/90 font-normal mt-4">
                Minimum Capital Allocation
              </p>
              <p className="text-[12px] sm:text-[12.5px] text-white/80 font-normal leading-relaxed mt-1.5 min-h-[48px]">
                High-allocation portfolio engineered for robust yields and customized risk management.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/25 my-4" />

              {/* Features list */}
              <ul className="space-y-2 text-[12px] sm:text-[12.5px]">
                {institutionalIncluded.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-white font-normal">
                    <CheckIcon className="w-3.5 h-3.5 text-white flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href="/register?tier=25k"
                className="w-full block py-3 px-5 bg-white hover:bg-slate-50 text-[#059669] text-[13.5px] font-medium rounded-full text-center transition-all shadow-md cursor-pointer"
              >
                Allocate $25K
              </Link>
            </div>
          </motion.div>

          {/* Card 4: $100K INSTITUTIONAL */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex-1 w-full h-full bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-xs border border-emerald-100/50"
          >
            <div className="mb-12">
              <h2 className="font-mazzard text-xl sm:text-[22px] text-[#0f172a] tracking-tight">
                INSTITUTIONAL
              </h2>
              <div className="font-mazzard text-2xl sm:text-[26px] text-[#059669] mt-1.5">
                $100,000
              </div>

              <p className="text-[13px] text-slate-500 font-normal mt-4">
                Minimum Capital Allocation
              </p>
              <p className="text-[12px] sm:text-[12.5px] text-slate-500 font-normal leading-relaxed mt-1.5 min-h-[48px]">
                Tailored multi-account architecture for family offices and institutional wealth managers.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-200/90 my-4" />

              {/* Features list */}
              <ul className="space-y-2 text-[12px] sm:text-[12.5px]">
                <li className="flex items-center gap-2 text-slate-800 font-normal">
                  <CheckIcon className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                  <span>Everything in Executive Tier</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800 font-normal">
                  <CheckIcon className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                  <span>Dedicated private wealth desk</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800 font-normal">
                  <CheckIcon className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                  <span>Custom treasury integration</span>
                </li>
                <li className="flex items-center gap-2 text-slate-800 font-normal">
                  <CheckIcon className="w-3.5 h-3.5 text-[#059669] flex-shrink-0" />
                  <span>Direct board-level reporting</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-4">
              <Link
                href="/register?tier=100k"
                className="w-full block py-3 px-5 bg-slate-900 hover:bg-[#059669] text-white text-[13.5px] font-medium rounded-full text-center transition-all cursor-pointer"
              >
                Inquire for $100K+
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}