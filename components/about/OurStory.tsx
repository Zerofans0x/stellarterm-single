// "use client";

// import { motion } from "framer-motion";

// export default function OurStory() {
//   const storyItems = [
//     {
//       title: "Founded in 2021.",
//       description:
//         "Started off as TCA (Tech-Crypto Academy). Had about 9+ student registered in the Academy. First pricing at $35.",
//     },
//     {
//       title: "Renamed chartopia in 2024 (I & II).",
//       description:
//         "Summer bootcamp hosted 3 other professional traders. Had about 1000+ students. Pricing pegged at $50.",
//     },
//     {
//       title: "Metamorphosized into 'stellarterm' (2024).",
//       description:
//         "Psy 2.0 hosted about 1,116 student. Psy 26 hosted about 1,366 student. Total traders trained this far 5,000+",
//     },
//   ];

//   return (
//     <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//         {/* Left Column Spacer / Potential graphic anchor */}
//         <div className="hidden lg:block lg:col-span-6" />

//         {/* Right Column: Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
//           className="lg:col-span-6 max-w-xl"
//         >
//           <h2 className="font-mazzard text-3xl sm:text-4xl lg:text-[40px] text-[#0f172a] tracking-tight mb-8">
//             Our story
//           </h2>

//           <div className="space-y-6 sm:space-y-7 text-[14px] sm:text-[15px] leading-relaxed text-slate-500 font-normal font-mazzard">
//             {storyItems.map((item, index) => (
//               <motion.p
//                 key={index}
//                 initial={{ opacity: 0, x: 12 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.12 }}
//               >
//                 <span className="font-semibold text-[#0f172a]">{item.title}</span>{" "}
//                 {item.description}
//               </motion.p>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  const storyItems = [
    {
      title: "Founded in 2021.",
      description:
        "Started as a boutique capital advisory group supporting early digital asset investors with initial tiered portfolio structures.",
    },
    {
      title: "Expanded operations in 2024.",
      description:
        "Scaled our asset management framework to onboard over 1,000+ active clients globally with optimized risk parameters.",
    },
    {
      title: "Evolved into MyStellarTerm (2026).",
      description:
        "Relaunched with enhanced institutional-grade security infrastructure. Total capital managed across portfolios has now crossed significant milestones with thousands of active investors.",
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column Spacer */}
        <div className="hidden lg:block lg:col-span-6" />

        {/* Right Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-6 max-w-xl"
        >
          <h2 className="font-mazzard text-3xl sm:text-4xl lg:text-[40px] text-[#0f172a] tracking-tight mb-8">
            Our story
          </h2>

          <div className="space-y-6 sm:space-y-7 text-[14px] sm:text-[15px] leading-relaxed text-slate-500 font-normal font-mazzard">
            {storyItems.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
              >
                <span className="font-semibold text-[#0f172a]">{item.title}</span>{" "}
                {item.description}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}