"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const AUDIENCE_CARDS = [
  { title: "The Private Investor", image: "/images/wif-1.png" },
  { title: "Long-term Builders", image: "/images/wif-2.png" },
  { title: "Passive Income Seekers", image: "/images/wif-3.png" },
];

export default function WhoItsFor() {
  return (
    <section className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 lg:py-32">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
        <span className="text-[12px] tracking-[0.15em] text-slate-400 uppercase">WHO IT&apos;S FOR</span>
        <h2 className="font-mazzard text-[44px] sm:text-[32px] lg:text-[48px] text-[#111827] leading-[1.1] tracking-tight mt-4">
          Built for <span className="text-[#059669]">serious <br className="block sm:hidden" />portfolio growth</span>
        </h2>
        <p className="mt-4 text-[12px] sm:text-[15px] text-slate-500 font-normal leading-[1.6] max-w-[500px]">
          Whether you require monthly liquidity or long-term compounding, there is a structured tier for you.
        </p>
      </motion.div>

      {/* Rest of the carousel grid remains identical, rendering AUDIENCE_CARDS */}
      <div className="flex justify-center sm:justify-end mt-10 sm:mt-24 lg:mt-30">
        <div className="flex flex-row md:grid md:grid-cols-3 gap-3.5 sm:gap-6 w-full max-w-[1000px] overflow-x-auto scrollbar-hide pb-4">
          {AUDIENCE_CARDS.map((card, index) => (
            <div key={index} className="relative w-[43vw] max-w-[200px] min-w-[150px] md:w-full aspect-[4/5] bg-[#f0f4f9] rounded-[20px] overflow-hidden group flex-shrink-0 md:flex-shrink-1">
              <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute bottom-3.5 left-3.5 bg-[#059669] text-white text-[11px] sm:text-[13px] font-medium px-3.5 py-1.5 rounded-full z-10 whitespace-nowrap shadow-sm">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}