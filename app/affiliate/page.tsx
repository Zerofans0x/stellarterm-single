"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AffiliatePage() {
  return (
    <div className="w-full flex flex-col bg-white text-slate-900 min-h-screen">
      <Navbar />

      <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-50 text-[#047857] text-[12px] sm:text-[14px] tracking-[0.12em] uppercase mb-4 font-semibold">
            PARTNERSHIP REWARDS
          </span>
          <h1 className="font-mazzard text-[38px] sm:text-[52px] lg:text-[58px] text-[#0f172a] leading-[1.08] tracking-tight">
            Grow Your Network, <br />
            <span className="text-[#059669]">Earn Lifetime Commissions</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-slate-500 text-[14px] sm:text-[16px] leading-relaxed">
            Introduce serious investors to MyStellarTerm and earn recurring commission percentages on initial capital allocations made through your referral network.
          </p>

          <div className="mt-8">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#059669] text-white font-medium rounded-full hover:bg-[#047857] transition-all shadow-sm"
            >
              Get Your Referral Link
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-200">
            <h3 className="font-mazzard text-[22px] text-[#0f172a]">1. Share Link</h3>
            <p className="mt-3 text-slate-500 text-[14px]">Distribute your unique referral code across your professional network.</p>
          </div>
          <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-200">
            <h3 className="font-mazzard text-[22px] text-[#0f172a]">2. Capital Allocated</h3>
            <p className="mt-3 text-slate-500 text-[14px]">Referred investors select their preferred structured portfolio tiers.</p>
          </div>
          <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-200">
            <h3 className="font-mazzard text-[22px] text-[#0f172a]">3. Earn Yields</h3>
            <p className="mt-3 text-slate-500 text-[14px]">Receive automated commission disbursements directly to your balance.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}