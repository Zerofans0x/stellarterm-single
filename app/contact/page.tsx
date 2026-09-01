"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col bg-white text-slate-900 min-h-screen">
      <Navbar />

      {/* Hero / Header Section */}
      <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-50 text-[#047857] text-[12px] sm:text-[14px] tracking-[0.12em] uppercase mb-4 font-semibold">
            PRIVATE WEALTH SUPPORT
          </span>
          <h1 className="font-mazzard text-[38px] sm:text-[52px] lg:text-[58px] text-[#0f172a] leading-[1.08] tracking-tight">
            Connect With Our <br />
            <span className="text-[#059669]">Client Success Desk</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-slate-500 text-[14px] sm:text-[16px] leading-relaxed">
            Have questions regarding our portfolio tiers, security infrastructure, or capital allocations? Our dedicated advisory team is available 24/7.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 bg-[#ecfdf5] rounded-[32px] p-8 sm:p-10 border border-emerald-100/60 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="font-mazzard text-[26px] text-[#0f172a] tracking-tight">
                Direct Channels
              </h2>
              <p className="mt-2 text-slate-600 text-[14px] leading-relaxed">
                Reach out through any of our official channels or visit our private wealth offices.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    ✉
                  </div>
                  <div>
                    <span className="text-[12px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Secure Email Desk
                    </span>
                    <span className="text-slate-800 font-medium text-[15px]">
                      support@mystellarterm.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    💬
                  </div>
                  <div>
                    <span className="text-[12px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Client Concierge
                    </span>
                    <span className="text-slate-800 font-medium text-[15px]">
                      Live Dashboard Chat (24/7)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#059669] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    📍
                  </div>
                  <div>
                    <span className="text-[12px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Corporate Headquarters
                    </span>
                    <span className="text-slate-800 font-medium text-[15px]">
                      New York Financial District, US
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-emerald-200/60">
              <span className="text-[13px] text-slate-500 block">
                Typical response window: <strong className="text-slate-900">Under 2 hours</strong> for active investors.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Secure Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-12 border border-slate-200 shadow-sm"
          >
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-[#059669] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="font-mazzard text-[28px] text-[#0f172a]">Message Received</h3>
                <p className="text-slate-500 max-w-md mx-auto text-[15px]">
                  Thank you for reaching out. A dedicated portfolio advisor from our support desk will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-7 py-2.5 bg-[#059669] text-white font-medium rounded-full text-[14px] hover:bg-[#047857] transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jonathan Doe"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jonathan.doe@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all text-[14px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-2">
                    Inquiry Category
                  </label>
                  <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all text-[14px] bg-white text-slate-800">
                    <option>Portfolio Tier Allocation ($3K - $100K+)</option>
                    <option>Yield Disbursements & Withdrawals</option>
                    <option>Security & Infrastructure Inquiry</option>
                    <option>Affiliate & Partnership Program</option>
                    <option>General Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Provide details regarding your inquiry..."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#059669] focus:ring-1 focus:ring-[#059669] outline-none transition-all text-[14px] resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#059669] hover:bg-[#047857] text-white font-medium text-[15px] rounded-full transition-all shadow-sm cursor-pointer"
                >
                  Submit Secure Inquiry
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}