"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InvestmentSuccess() {
  return (
    <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-8 sm:mb-14 lg:mb-20"
      >
        <h2 className="font-mazzard text-[34px] sm:text-4xl lg:text-[40px] text-[#0f172a] tracking-tight leading-[1.1]">
          Realizing <br className="block sm:hidden" />
          Wealth
        </h2>
        <p className="mt-2 sm:mt-1.5 text-xs sm:text-base text-slate-500 font-normal">
          Consistent growth for our verified clients
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        className="flex flex-row items-center lg:justify-center gap-3.5 sm:gap-6 overflow-x-auto scrollbar-hide -mx-6 px-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0 pb-4"
      >
        {/* Main Featured Card */}
        <div className="order-1 lg:order-2 relative w-[82vw] max-w-[340px] sm:max-w-[480px] lg:max-w-[700px] lg:flex-1 h-[220px] sm:h-[290px] lg:h-[420px] rounded-[22px] sm:rounded-[26px] overflow-hidden group shadow-2xl bg-slate-900 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900 via-teal-950 to-slate-950">
            <Image
              src="/images/alubarika.jpg" 
              alt="Enterprise Plan Investor"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-center mix-blend-overlay opacity-80"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent z-10" />

          <div className="absolute top-3.5 left-3.5 sm:top-6 sm:left-6 z-20">
            <span className="inline-block px-3.5 py-1.5 sm:px-6 sm:py-3 bg-[#d1fae5] text-[#064e3b] font-medium text-[11px] sm:text-[14px] leading-none rounded-full shadow-sm">
              Enterprise Portfolio
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <button
              type="button"
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 pointer-events-auto cursor-pointer group/btn"
              aria-label="Play video"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 fill-[#1e1b18] translate-x-0.5 transition-transform group-hover/btn:scale-105">
                <polygon points="6,3.5 20,12 6,20.5" />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-3 sm:bottom-6 inset-x-3.5 sm:inset-x-8 z-20">
            <h3 className="text-white text-[14px] sm:text-lg lg:text-2xl tracking-tight font-normal sm:font-bold">
              $100K Yield in 6 months
            </h3>
            <p className="mt-0.5 sm:mt-1.5 text-white/80 text-[10px] sm:text-[13px] max-w-xl leading-snug sm:leading-relaxed font-normal line-clamp-2 sm:line-clamp-none">
              Verified disbursements. Consistent returns. See how our clients leverage the Enterprise tier to build sustainable, long-term capital.
            </p>
          </div>
        </div>

        {/* Small Card 1 */}
        <div className="order-2 lg:order-1 relative w-[145px] sm:w-[175px] lg:w-[200px] h-[220px] sm:h-[290px] lg:h-[350px] rounded-[22px] sm:rounded-[24px] overflow-hidden group shadow-lg flex-shrink-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950">
            <Image src="/images/bella.jpg" alt="Pro Package" fill className="object-cover object-center mix-blend-overlay opacity-80" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
          <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20">
            <span className="inline-block px-3.5 py-1.5 sm:px-6 sm:py-3 bg-[#f1f5f9] text-slate-900 font-medium text-[11px] sm:text-[14px] leading-none rounded-full shadow-sm">
              Pro Tier
            </span>
          </div>
          <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-5 z-20 flex flex-col items-start gap-1.5 sm:gap-3">
            <p className="text-white text-[12px] sm:text-[15px] lg:text-[18px] leading-tight max-w-[150px]">
              $12K in <br /> passive <br /> yields. Just 4 <br /> months
            </p>
            <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#059669] text-white text-[11px] font-medium rounded-full">
              <span>Watch</span>
            </button>
          </div>
        </div>

        {/* Small Card 2 */}
        <div className="order-3 lg:order-3 relative w-[145px] sm:w-[175px] lg:w-[200px] h-[220px] sm:h-[290px] lg:h-[350px] rounded-[22px] sm:rounded-[24px] overflow-hidden group shadow-lg flex-shrink-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950">
            <Image src="/images/emrld.jpg" alt="Starter Package" fill className="object-cover object-center mix-blend-overlay opacity-80" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
          <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20">
            <span className="inline-block px-3.5 py-1.5 sm:px-6 sm:py-3 bg-[#f1f5f9] text-slate-900 font-medium text-[11px] sm:text-[14px] leading-none rounded-full shadow-sm">
              Starter
            </span>
          </div>
          <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-5 z-20 flex flex-col items-start gap-1.5 sm:gap-3">
            <p className="text-white text-[12px] sm:text-[15px] lg:text-[18px] leading-tight max-w-[150px]">
              Doubled <br /> initial <br /> capital in <br /> 1 year
            </p>
            <button type="button" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#059669] text-white text-[11px] font-medium rounded-full">
              <span>Watch</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}