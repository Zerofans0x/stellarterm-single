"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function CoursesHero() {
  return (
    <section className="w-full flex flex-col bg-white text-slate-900 overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-10 lg:px-14 pt-4 pb-8 lg:pt-12 lg:pb-16">
        {/* Top Grid: Headline + Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
          
          {/* Geometric Illustration: 1st on mobile, Right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/images/courses-hero-img.png"
                  alt="Courses Geometric Illustration"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Left Column: Text: 2nd on mobile, Left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-start z-10"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center px-6 py-4 rounded-full bg-[#E6F0FD] text-[#1E1E1E] text-[12px] sm:text-[15px] tracking-[0.12em] uppercase mb-4 sm:mb-6 shadow-xs">
              38 COURSES
            </div>

            {/* Main Headline */}
            <h1 className="font-mazzard text-[34px] sm:text-[52px] lg:text-[62px] text-[#0f172a] leading-[1.08] tracking-tight">
              Learn markets the <br />
              <span className="text-[#006DEB]">structured way.</span>
            </h1>

            {/* Subtext */}
            <p className="mt-4 sm:mt-6 text-slate-500 text-[13px] sm:text-[15px] leading-relaxed max-w-[480px] font-normal">
              Every course is built around a clear outcome — not just information.
              Progress unlocks as you demonstrate understanding.
            </p>
          </motion.div>

        </div>

        {/* Bottom Assessment Banner: "Not sure where to start?" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 sm:mt-20 w-full bg-[#E6F0FD] rounded-[10px] sm:rounded-[12px] p-6 sm:p-12 lg:px-14 lg:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5 sm:gap-6 border border-blue-50/50"
        >
          <div className="max-w-2xl">
            <h2 className="font-mazzard text-[22px] sm:text-3xl lg:text-[34px] text-[#0f172a] tracking-tight">
              Not sure where to start?
            </h2>
            <p className="mt-2 text-slate-600 text-[13px] sm:text-[15px] leading-relaxed font-normal">
              Take the 2-min assessment and get a personalised learning path <br /> based
              on your experience and goals.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#006DEB] hover:bg-[#005bb5] text-white font-medium text-[13.5px] sm:text-[15px] rounded-full shadow-md hover:shadow-lg transition-all group cursor-pointer"
            >
              <span>Find my path</span>
              <Icon
                icon="lucide:arrow-right"
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
