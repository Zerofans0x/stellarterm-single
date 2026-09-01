"use client";

import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import { motion } from "framer-motion";

export default function PackagesHero() {
  return (
    <section className="w-full flex flex-col bg-white text-slate-900 overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-8 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center lg:items-end w-full">
          
          {/* Geometric 3D Coin Illustration: 1st on mobile, Right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[500px] lg:max-w-[620px] flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/images/pricing-hero-img.png"
                  alt="Investment Portfolios Geometric Illustration"
                  width={620}
                  height={380}
                  priority
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Headline & Subheading: 2nd on mobile, Left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-start z-10 lg:pb-4"
          >
            <h1 className="font-mazzard text-[34px] sm:text-[52px] lg:text-[62px] text-[#0f172a] leading-[1.08] tracking-tight">
              Structured tiers <br />
              <span className="text-[#059669]">Consistent capital growth</span>
            </h1>

            <p className="mt-4 sm:mt-8 text-slate-500 text-[12.5px] sm:text-[15px] leading-relaxed max-w-[440px] font-normal">
              No hidden management fees, transparent allocations. Pick the portfolio tier that <br className="block sm:hidden" />
              matches your capital objectives.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}