

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-10 sm:py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 14 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-[980px] flex items-center justify-center"
      >
        {/* Desktop / Tablet - Original paths preserved */}
        <Image
          src="/images/stats-image.png"
          alt="4,200+ Active Investors, 40+ Structured Portfolios, $50M+ Capital Managed, 99% Disbursement Rate"
          width={1132}
          height={128}
          priority
          className="hidden sm:block w-full h-auto object-contain"
        />
        {/* Mobile - Original paths preserved */}
        <Image
          src="/images/stats-image-mobile.png"
          alt="4,200+ Active Investors, 40+ Structured Portfolios, $50M+ Capital Managed, 99% Disbursement Rate"
          width={500}
          height={300}
          priority
          className="block sm:hidden w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}