"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion } from "framer-motion";

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "Cold Storage Protocols",
      description: "The majority of client capital and asset reserves are isolated offline in multi-signature cold storage vaults, protected from online threat vectors.",
    },
    {
      title: "Enterprise Encryption",
      description: "All client data, dashboard telemetry, and portfolio configuration pathways are secured using military-grade TLS and AES-256 encryption standards.",
    },
    {
      title: "Mandatory Multi-Factor Authentication",
      description: "Enhanced account security enforced via strict Time-based One-Time Password (TOTP) verification for every sensitive dashboard action or withdrawal.",
    },
    {
      title: "Automated Risk Mitigation",
      description: "Proprietary algorithmic circuit breakers monitor market volatility 24/7 to safeguard portfolio liquidity and protect principal capital allocations.",
    },
  ];

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
            INSTITUTIONAL SAFEGUARDS
          </span>
          <h1 className="font-mazzard text-[38px] sm:text-[52px] lg:text-[58px] text-[#0f172a] leading-[1.08] tracking-tight">
            Uncompromising Security for <br />
            <span className="text-[#059669]">Your Capital Assets</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-slate-500 text-[14px] sm:text-[16px] leading-relaxed">
            We deploy multi-layered financial infrastructure designed to protect your investments against operational threats while maintaining complete operational transparency.
          </p>
        </motion.div>
      </section>

      <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#ecfdf5] rounded-[32px] p-8 sm:p-10 border border-emerald-100/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#059669] text-white flex items-center justify-center font-bold text-xl mb-6 shadow-sm">
                  🛡️
                </div>
                <h3 className="font-mazzard text-[22px] text-[#0f172a] tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}