"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const WHY_CARDS = [
  {
    icon: <Icon icon="hugeicons:chart-up" className="w-6 h-6" />,
    title: <>Transparent <br /> Yields.</>,
    description: "Track your actual portfolio growth daily. We prioritize clear metrics and exact distribution timelines.",
  },
  {
    icon: <Icon icon="material-symbols:shield-lock-outline" className="w-6 h-6" />,
    title: <>Institutional <br /> Security.</>,
    description: "Regulated protocols, strict risk management, and encrypted infrastructure ensure your assets stay safe.",
  },
  {
    icon: <Icon icon="fluent:calendar-ltr-24-regular" className="w-6 h-6" />,
    title: <>Structured <br /> Portfolios.</>,
    description: "Choose between monthly withdrawals or compound your returns annually to maximize your overall capital.",
  },
];

export default function WhyMyStellarTerm() {
  return (
    <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 lg:py-28">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
        <span className="text-[14px] tracking-[0.15em] text-slate-800 uppercase">WHY MYSTELLARTERM?</span>
        <h2 className="font-mazzard text-[32px] sm:text-[44px] lg:text-[48px] text-[#111827] leading-[1.1] tracking-tight mt-4">
          Your capital shouldn&apos;t sit idle. <br />
          <span className="text-[#059669]">Put it to work.</span>
        </h2>
        <p className="mt-5 text-[14px] sm:text-[15px] text-slate-500 font-normal leading-[1.6] max-w-[500px]">
          We take the complexity out of asset management. No need to monitor markets—just select a structured portfolio and let our firm generate consistent returns.
        </p>
      </motion.div>

      {/* Grid rendering remains identical, iterating over WHY_CARDS */}
      <div className="flex justify-start sm:justify-end mt-12 sm:mt-16">
        <div className="flex flex-row md:grid md:grid-cols-3 gap-2 w-full max-w-[950px] overflow-x-auto scrollbar-hide pb-4">
          {WHY_CARDS.map((card, idx) => (
            <div key={idx} className="w-[78vw] max-w-[270px] flex flex-col rounded-[28px] overflow-hidden border border-slate-100 bg-[#f8fafc] flex-shrink-0 md:flex-shrink-1">
              <div className="p-6 pt-7 pb-6">
                <div className="w-[48px] h-[48px] bg-[#059669] rounded-[16px] flex items-center justify-center shadow-sm text-white">
                  {card.icon}
                </div>
              </div>
              <div className="bg-[#059669] text-white p-6 pt-7 pb-8 flex-1 flex flex-col justify-start">
                <h3 className="text-[19px] sm:text-[20px] leading-[1.25] tracking-tight">{card.title}</h3>
                <p className="text-white/90 text-[13px] leading-[1.6] mt-3.5 font-normal">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}