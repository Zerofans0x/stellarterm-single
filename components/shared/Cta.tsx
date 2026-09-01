

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-white">
      {/* test */}
      <div className="max-w-[1460px] sm:mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full sm:rounded-[48px] overflow-hidden flex flex-col sm:flex-row items-center sm:min-h-[600px] lg:min-h-[650px] shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100/80"
        >
          {/* Desktop Background Image */}
          <div className="hidden sm:block absolute inset-0 z-0">
            <Image
              src="/images/home-cta-img.png"
              alt="Grow your capital"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-right md:object-center"
              priority
            />
          </div>

          {/* Mobile Top Illustration */}
          <div className="block sm:hidden w-full pt-8 pb-4 flex items-center justify-center relative z-10">
            <Image
              src="/images/cta-img-mobile.png"
              alt="Grow your capital"
              width={360}
              height={360}
              className="w-full h-auto object-contain rounded-tl-[32px]"
              priority
            />
          </div>

          {/* Content layered on top */}
          <div className="relative z-10 w-full sm:w-[55%] xl:w-1/2 flex flex-col p-6 sm:p-14 lg:p-20 pb-10">
            <span className="text-[12px] font-medium tracking-wide text-slate-500 uppercase mb-2">
              START INVESTING TODAY
            </span>
            <h2 className="font-mazzard text-[32px] sm:text-[36px] lg:text-[40px] text-[#111827] leading-[1.1] tracking-tight">
              Stop letting your <br className="block sm:hidden" />
              capital sit idle. <br />
              <span className="text-[#059669]">Build your wealth</span>
            </h2>
            <div className="mt-4 text-[13px] sm:text-[14px] text-slate-500 font-normal leading-[1.5]">
              <p>Join thousands of clients earning consistent yields through our structured monthly and annual portfolios.</p>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center px-7 py-3 text-[14px] sm:text-[15px] font-medium rounded-full transition-colors duration-200 border-[1.5px] border-[#059669] text-[#059669] bg-white hover:bg-emerald-50 whitespace-nowrap"
              >
                View portfolios
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-7 py-3 text-[14px] sm:text-[15px] font-medium rounded-full transition-colors duration-200 shadow-sm bg-[#059669] text-white hover:bg-[#059669] whitespace-nowrap"
              >
                Start investing
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}