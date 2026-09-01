
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import InvestorsBadge from "@/components/home/InvestorsBadge";

export default function Hero() {
  return (
    <section className="p-3 sm:p-6 lg:p-8">
      <div className="relative isolate w-full rounded-[24px] sm:rounded-2xl overflow-hidden min-h-[860px] lg:h-[calc(100vh-64px)] flex flex-col justify-between">
        {/* Background Gradients */}
        <div className="hidden lg:block absolute inset-0 -z-10 pointer-events-none rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-gradient-bg.png"
            alt="Hero background gradient"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="block lg:hidden absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          {/* <Image
            src="/images/hero-bg-mobile.png"
            alt="Hero mobile background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top"
          /> */}
        </div>

        <Navbar />

        {/* Hero Main Content */}
        <div className="w-full px-4 sm:px-10 lg:px-14 pt-2 pb-10 lg:pt-4 lg:pb-12 flex-1 flex flex-col justify-end lg:justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-13 items-start px-2 sm:px-8 mt-56 sm:mt-64 lg:mt-12">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-5 z-10 pt-1"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [-2, 3, -2], rotate: [-1, 1, -1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="block lg:hidden absolute right-0 sm:right-6 bottom-3 pointer-events-none z-20"
                >
                  <Image
                    src="/images/pricing-arrow-mobile.png"
                    alt="Arrow pointing to returns"
                    width={100}
                    height={220}
                    className="w-[100px] h-auto object-contain"
                  />
                </motion.div>

                <h1 className="font-mazzard text-[38px] sm:text-5xl text-[#0f172a] leading-[1.08] tracking-tight">
                  Grow Your <br />
                  Capital With <br />
                  <span className="font-thicccboi bg-gradient-to-b from-[#059669] to-[#34d399] bg-clip-text text-transparent inline-block">
                    Structure
                  </span>
                </h1>
              </div>

              <p className="mt-4 sm:mt-5 text-slate-600 text-[13.5px] sm:text-[15px] max-w-md leading-relaxed font-normal">
                One secure platform to select your investment tier, <br className="hidden sm:inline" />
                manage your portfolio, and track steady yields.
              </p>

              {/* Action Buttons - Fixed layout to prevent text wrapping/breaking */}
              <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/register"
                    className="px-7 py-3.5 bg-[#059669] hover:bg-[#047857] text-white font-medium text-[14px] sm:text-[15px] rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center justify-center cursor-pointer whitespace-nowrap"
                  >
                    View Portfolios
                  </Link>
                </motion.div>

                <button
                  type="button"
                  className="inline-flex items-center gap-3 font-medium group cursor-pointer text-slate-900 hover:text-[#059669] transition-colors duration-200"
                >
                  <span className="w-10 h-10 sm:w-[46px] sm:h-[46px] rounded-full border-[2.5px] sm:border-[3px] border-slate-900 group-hover:border-[#059669] group-hover:scale-105 flex items-center justify-center transition-all duration-200 flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 group-hover:text-[#059669] translate-x-[2px] transition-colors duration-200"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="7 4 19 12 7 20 7 4"></polygon>
                    </svg>
                  </span>
                  <span className="text-[14px] sm:text-[16px] text-slate-900 group-hover:text-[#059669] transition-colors duration-200 whitespace-nowrap">
                    How it works
                  </span>
                </button>
              </div>

              {/* Package Features List */}
              <div className="mt-12 sm:mt-36 space-y-1.5 sm:space-y-2 text-[9.5px] min-[360px]:text-[11px] sm:text-xs text-slate-600 font-normal sm:font-medium">
                <div className="flex items-center gap-x-2 min-[360px]:gap-x-3 sm:gap-x-5">
                  <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
                    Monthly Dividends
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
                    Annual Portfolios
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
                    Asset Protection
                  </span>
                </div>
                <div className="flex items-center gap-x-2 min-[360px]:gap-x-3 sm:gap-x-5">
                  <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
                    Automated Disbursements
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
                    Encrypted Infrastructure
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#059669] flex-shrink-0" />
                    Dedicated Support
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Image Column */}
            <div className="hidden lg:flex lg:col-span-8 relative justify-end items-center ml-20">
              <div className="relative w-full max-w-[940px]">
                <motion.div
                  animate={{ y: [-3, 4, -3], rotate: [-0.5, 0.5, -0.5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-16 top-[178px] xl:-left-[220px] xl:top-[120px] pointer-events-none z-20"
                >
                  <Image
                    src="/images/pricing-arrow.png"
                    alt="Arrow pointing to dashboard"
                    width={420}
                    height={420}
                    className="w-[320px] h-auto object-contain"
                  />
                </motion.div>

                <InvestorsBadge />

                <div className="relative z-10 w-full">
                  <Image
                    src="/images/pricing.png" 
                    alt="MyStellarTerm Dashboard Preview"
                    width={1914}
                    height={1164}
                    priority
                    className="w-[800px] h-auto object-contain rounded-[20px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-100/50"
                  />
                </div>

                <motion.div
                  animate={{ y: [-3, 4, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-4 xl:-bottom-8 xl:-right-6 z-40 w-[47%] max-w-[430px] pointer-events-none"
                >
                  <Image
                    src="/images/pricing-widget.png" 
                    alt="Earnings Widget"
                    width={600}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>

                <div className="absolute -bottom-20 -left-[250px] w-64 h-64 bg-white p-4 border-2 border-emerald-100 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none z-20"></div>
                <div className="absolute -left-[100px] -bottom-[50px] blur-xl p-10 rounded-full bg-white w-[900px] h-[120px] z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}