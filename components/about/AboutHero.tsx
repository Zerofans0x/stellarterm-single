

"use client";

import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="w-full flex flex-col bg-white text-slate-900 overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex-1 max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-14 flex items-center pt-4 pb-16 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* Illustration: 1st on mobile, Right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-[320px] sm:max-w-[440px] lg:max-w-[560px] flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [-3, 4, -3] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center relative"
              >
                <Image
                  src="/images/about-hero-img.png"
                  alt="About MyStellarTerm Illustration"
                  width={560}
                  height={560}
                  priority
                  className="w-full h-auto object-contain"
                />
              </motion.div>
              {/* Bottom blur fade */}
              <div className="absolute -bottom-2 inset-x-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 blur-xl bg-white w-[90%] h-14 pointer-events-none z-10" />
            </motion.div>
          </div>

          {/* Text: 2nd on mobile, Left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-start z-10 mt-2 lg:mt-0"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center px-6 py-4 rounded-full bg-emerald-50 text-[#047857] text-[12px] sm:text-[15px] tracking-[0.12em] uppercase mb-4 sm:mb-6 shadow-xs font-semibold">
              OUR STORY
            </div>

            {/* Main Headline */}
            <h1 className="font-mazzard text-[36px] sm:text-[52px] lg:text-[62px] text-[#0f172a] leading-[1.08] tracking-tight">
              We built <br className="block lg:hidden" />
              <span className="hidden lg:inline">the platform <br /></span>
              <span className="inline lg:hidden">the platform <br /></span>
              <span className="text-[#059669]">We needed to exist</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 sm:mt-6 text-slate-500 text-[13px] sm:text-[15px] leading-relaxed max-w-[480px] font-normal">
              MyStellarTerm started from a frustration shared by serious investors; <br />
              the financial space is full of noise, but almost none of it is structured to reliably grow your long-term capital.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}