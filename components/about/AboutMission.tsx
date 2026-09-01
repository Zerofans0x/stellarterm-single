// "use client";

// import { motion } from "framer-motion";

// export default function AboutMission() {
//   const missionCards = [
//     {
//       title: (
//         <>
//           Structure over <br /> content volume
//         </>
//       ),
//       description: "35 focused courses beats 300 random videos.",
//     },
//     {
//       title: (
//         <>
//           Honesty over <br /> motivation
//         </>
//       ),
//       description:
//         "We'll tell you what's wrong with your trading, not what you want to hear.",
//     },
//     {
//       title: (
//         <>
//           Psychology is <br /> not optional
//         </>
//       ),
//       description:
//         "Every system we teach includes the mental framework to apply it.",
//     },
//   ];

//   return (
//     <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-40px" }}
//         transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
//         className="max-w-2xl"
//       >
//         <span className="text-[12px] tracking-[0.15em] text-slate-400 uppercase">
//           OUR MISSION
//         </span>
//         <h2 className="font-mazzard text-[32px] sm:text-[44px] lg:text-[48px] text-[#111827] leading-[1.1] tracking-tight mt-4">
//           Real trader development, <br />
//           <span className="text-[#006DEB]">not lifestyle marketing</span>
//         </h2>
//         <p className="mt-5 text-[14px] sm:text-[15px] text-slate-500 font-normal leading-[1.6] max-w-[580px]">
//           We believe the trading education industry has a responsibility
//           problem. Too many platforms profit from people&apos;s desire to get rich
//           quickly — selling signals, copy trading access, and motivational
//           content ... All that changes at stellarterm.
//         </p>
//       </motion.div>

//       {/* 3 Mission Cards: Horizontal Scroll on Mobile, Grid on Desktop */}
//       <div className="flex justify-start sm:justify-end mt-10 sm:mt-20">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
//           className="flex flex-row md:grid md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[1000px] overflow-x-auto scrollbar-hide -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0 pb-4"
//         >
//           {missionCards.map((card, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -4 }}
//               transition={{ duration: 0.2 }}
//               className="w-[78vw] max-w-[270px] md:max-w-none md:w-auto flex-shrink-0 md:flex-shrink flex flex-col rounded-[28px] sm:rounded-[24px] overflow-hidden border border-slate-100/80 bg-[#f8fafc] shadow-xs cursor-pointer"
//             >
//               {/* Top Light Half */}
//               <div className="h-[90px] sm:h-[130px] bg-[#f4f8fe]" />

//               {/* Bottom Blue Half */}
//               <div className="bg-[#006DEB] text-white p-6 pt-6 pb-7 sm:p-8 flex-1 flex flex-col justify-start min-h-[160px] sm:min-h-[190px]">
//                 <h3 className="text-[18px] sm:text-[20px] font-medium leading-[1.28] tracking-tight">
//                   {card.title}
//                 </h3>
//                 <p className="text-white/90 text-[13px] sm:text-[14px] leading-[1.55] mt-3 sm:mt-3.5 font-normal">
//                   {card.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function AboutMission() {
  const missionCards = [
    {
      title: (
        <>
          Structure over <br /> speculative noise
        </>
      ),
      description: "Disciplined portfolio engineering beats guesswork every time.",
    },
    {
      title: (
        <>
          Honesty over <br /> inflated promises
        </>
      ),
      description:
        "We provide transparent metrics on your capital allocation, not empty hype.",
    },
    {
      title: (
        <>
          Security is <br /> non-negotiable
        </>
      ),
      description:
        "Every tier we offer includes robust asset protection and risk controls.",
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-20 sm:py-28">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-2xl"
      >
        <span className="text-[12px] tracking-[0.15em] text-slate-400 uppercase font-semibold">
          OUR MISSION
        </span>
        <h2 className="font-mazzard text-[32px] sm:text-[44px] lg:text-[48px] text-[#111827] leading-[1.1] tracking-tight mt-4">
          Real capital growth, <br />
          <span className="text-[#059669]">not speculative marketing</span>
        </h2>
        <p className="mt-5 text-[14px] sm:text-[15px] text-slate-500 font-normal leading-[1.6] max-w-[580px]">
          We believe the modern wealth management sector has a transparency problem. 
          Too many platforms rely on complexity and high-risk gimmicks. 
          At MyStellarTerm, we do things differently through structured portfolios and clarity.
        </p>
      </motion.div>

      {/* 3 Mission Cards: Horizontal Scroll on Mobile, Grid on Desktop */}
      <div className="flex justify-start sm:justify-end mt-10 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="flex flex-row md:grid md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[1000px] overflow-x-auto scrollbar-hide -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0 pb-4"
        >
          {missionCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="w-[78vw] max-w-[270px] md:max-w-none md:w-auto flex-shrink-0 md:flex-shrink flex flex-col rounded-[28px] sm:rounded-[24px] overflow-hidden border border-slate-100/80 bg-[#f8fafc] shadow-xs cursor-pointer"
            >
              {/* Top Light Half */}
              <div className="h-[90px] sm:h-[130px] bg-emerald-50/40" />

              {/* Bottom Green Half */}
              <div className="bg-[#059669] text-white p-6 pt-6 pb-7 sm:p-8 flex-1 flex flex-col justify-start min-h-[160px] sm:min-h-[190px]">
                <h3 className="text-[18px] sm:text-[20px] font-medium leading-[1.28] tracking-tight">
                  {card.title}
                </h3>
                <p className="text-white/90 text-[13px] sm:text-[14px] leading-[1.55] mt-3 sm:mt-3.5 font-normal">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}