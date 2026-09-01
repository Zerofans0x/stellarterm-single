"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const FEATURE_CARDS = [
  { text: "Institutional-grade infrastructure protects your capital 24/7. Your peace of mind is our priority.", bg: "#F0Fdf4" },
  { text: "No hidden fees. Every portfolio tier outlines exact expected yields before you commit.", bg: "#f8fafc" },
  { text: "Automated disbursements sent directly to your designated receiving accounts.", bg: "#ecfdf5" },
  { text: "Real-time client dashboard tracks your daily accruals and portfolio growth securely.", bg: "#f8fafc" },
  { text: "Institutional-grade infrastructure protects your capital 24/7. Your peace of mind is our priority.", bg: "#F0Fdf4" },
  { text: "No hidden fees. Every portfolio tier outlines exact expected yields before you commit.", bg: "#f8fafc" },
];

export default function OnePlatform() {
  return (
    <section className="w-full py-20 sm:py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 mb-16 sm:mb-24"
      >
        <h2 className="font-mazzard text-[36px] sm:text-[44px] lg:text-[48px] text-[#111827] leading-[1.1] tracking-tight">
          Complete transparency. <br />
          <span className="text-[#059669]">Total control.</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        className="w-full"
      >
        <div className="flex gap-5 px-6 sm:px-10 lg:px-12 overflow-x-auto scrollbar-hide pb-4">
          {FEATURE_CARDS.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="w-[280px] h-[240px] flex-shrink-0 p-8 rounded-[20px] sm:rounded-b-none sm:rounded-t-[20px] flex items-center shadow-xs border border-slate-100"
              style={{ backgroundColor: card.bg }}
            >
              <p className="text-[15px] text-[#1e293b] font-medium leading-[1.6]">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 mt-20 sm:mt-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="w-full rounded-[32px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5] flex items-center justify-center relative overflow-hidden bg-slate-50 border border-slate-100">
              <Image
                src="/images/one-platform.png" 
                alt="MyStellarTerm Dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="hidden sm:block object-cover"
              />
              <Image
                src="/images/one-platform-mobile.png"
                alt="MyStellarTerm Dashboard"
                fill
                sizes="100vw"
                className="block sm:hidden object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="w-full lg:w-1/2 pt-4 lg:pt-12"
          >
            <span className="text-[13px] font-medium text-slate-500 tracking-wide uppercase">
              What&apos;s inside
            </span>
            <h2 className="font-mazzard text-[36px] sm:text-[42px] lg:text-[46px] text-[#111827] leading-[1.1] tracking-tight mt-3">
              Enterprise management. <br />
              <span className="text-[#059669]">One dashboard</span>
            </h2>
            <p className="mt-4 text-[14px] text-slate-500 font-normal">
              From your initial funding to your automated monthly disbursements.
            </p>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#059669] hover:opacity-85 transition-opacity mt-6 group"
            >
              <span>Explore Portfolios</span>
              <span className="transition-transform group-hover:translate-x-1 font-sans text-lg leading-none">→</span>
            </Link>

            <div className="mt-12 sm:mt-16 flex flex-col w-full max-w-md">
              <div className="flex items-center gap-5 py-5 border-b border-slate-200 group cursor-default transition-colors">
                <div className="w-6 h-6 flex items-center justify-center text-[#059669] flex-shrink-0">
                  <Icon icon="fluent:box-multiple-20-regular" className="w-6 h-6" />
                </div>
                <span className="text-[14px] font-medium text-[#111827]">Tiered Investment Portfolios</span>
              </div>
              <div className="flex items-center gap-5 py-5 border-b border-slate-200 group cursor-default transition-colors">
                <div className="w-6 h-6 flex items-center justify-center text-[#059669] flex-shrink-0">
                  <Icon icon="majesticons:analytics-line" className="w-6 h-6" />
                </div>
                <span className="text-[14px] font-medium text-[#111827]">Real-time Yield Tracking</span>
              </div>
              <div className="flex items-center gap-5 py-5 border-b border-slate-200 group cursor-default transition-colors">
                <div className="w-6 h-6 flex items-center justify-center text-[#059669] flex-shrink-0">
                  <Icon icon="iconoir:wallet" className="w-6 h-6" />
                </div>
                <span className="text-[14px] font-medium text-[#111827]">Automated Disbursements</span>
              </div>
              <div className="flex items-center gap-5 py-5 border-b border-slate-200 group cursor-default transition-colors">
                <div className="w-6 h-6 flex items-center justify-center text-[#059669] flex-shrink-0">
                  <Icon icon="material-symbols:shield-lock-outline" className="w-6 h-6" />
                </div>
                <span className="text-[14px] font-medium text-[#111827]">Encrypted Asset Security</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}