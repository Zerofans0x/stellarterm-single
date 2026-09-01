// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Icon } from "@iconify/react";
// import { motion, AnimatePresence } from "framer-motion";
// import AuthHeroCard from "@/components/auth/AuthHeroCard";

// type ExperienceLevel = "beginner" | "intermediate" | "advanced";
// type MarketType = "forex" | "crypto" | "stocks";
// type GoalType = "fundamentals" | "consistency" | "side_income";

// function CheckIcon({ className }: { className?: string }) {
//   return (
//     <svg
//       className={className || "w-3.5 h-3.5 flex-shrink-0"}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3.2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5.5 12.5L10.5 17.5L20 8" />
//     </svg>
//   );
// }

// export default function OnboardingPage() {
//   const router = useRouter();
//   const [step, setStep] = useState(2);
//   const [experience, setExperience] = useState<ExperienceLevel>("beginner");
//   const [markets, setMarkets] = useState<MarketType[]>(["forex"]);
//   const [goal, setGoal] = useState<GoalType>("fundamentals");
//   const [showPlanModal, setShowPlanModal] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState<"basic" | "pro" | "ultra">("pro");
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSheetOpen, setIsSheetOpen] = useState(false);
//   const [touchStartY, setTouchStartY] = useState<number | null>(null);

//   const toggleMarket = (market: MarketType) => {
//     if (markets.includes(market)) {
//       if (markets.length > 1) {
//         setMarkets(markets.filter((m) => m !== market));
//       }
//     } else {
//       setMarkets([...markets, market]);
//     }
//   };

//   const handleContinueFromStep = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       if (step === 2) {
//         setStep(3);
//       } else if (step === 3) {
//         setShowPlanModal(true);
//       } else if (step < 4) {
//         setStep(step + 1);
//       } else {
//         router.push("/dashboard");
//       }
//     }, 400);
//   };

//   const handleSelectPlanAndProceed = (plan: "basic" | "pro" | "ultra") => {
//     setSelectedPlan(plan);
//     setShowPlanModal(false);
//     setStep(4);
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setTouchStartY(e.touches[0].clientY);
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     if (touchStartY === null) return;
//     const touchEndY = e.changedTouches[0].clientY;
//     const diff = touchStartY - touchEndY;
//     if (diff > 40 && !isSheetOpen) {
//       setIsSheetOpen(true);
//     }
//     setTouchStartY(null);
//   };

//   const basicIncluded = [
//     "Intro to institutional liquidity",
//     "Asset allocation foundations",
//     "Risk infrastructure basics",
//     "Terminal workspace onboarding",
//   ];

//   const basicExcluded = [
//     "Level 3 order book telemetry",
//     "Algorithmic execution models",
//     "Custom quantitative backtesters",
//     "Gamma exposure metrics",
//     "Multi-tier capital governance",
//     "Real-time sentiment engines",
//     "Priority liquidity routing",
//     "Institutional market reviews",
//   ];

//   const proIncluded = [
//     "Everything in Basic",
//     "All advanced quantitative modules",
//     "Complete algorithmic execution framework",
//     "Custom quantitative backtesters",
//     "Level 3 order book telemetry",
//     "Weekly institutional market review",
//     "Verified allocation certificate",
//     "Enterprise fee discounts",
//   ];

//   const proExcluded = ["Dedicated execution desk", "Custom API gateway integration"];

//   const ultraIncluded = [
//     "Everything in Pro",
//     "Dedicated execution desk",
//     "Custom API gateway integration",
//     "Priority liquidity routing",
//     "Direct quantitative analyst access",
//     "Enterprise fee discounts",
//   ];

//   const renderHeroForStep = (isMobile = false) => {
//     if (step === 2) {
//       return (
//         <AuthHeroCard
//           illustrationSrc="/images/auth/onboarding-one-img.png"
//           illustrationPosition="-translate-y-16"
//           illustrationPositionMobile="-translate-y-14"
//           illustrationWidth="w-[720px]"
//           illustrationWidthMobile={250}
//           cardWidth={isMobile ? "w-full" : "w-[750px]"}
//           showBlurOverlay={false}
//           imagesWidth="w-full sm:w-[420px] -translate-y-10 lg:-translate-y-14"
//           title={
//             <>
//               Capital deployment <br />
//               starts with scale <br />
//               <span className="text-[#059669]">governance and precision.</span>
//             </>
//           }
//           subtitle="Define your institutional mandate. Calibrating your capital tier ensures optimal risk-adjusted allocation."
//         />
//       );
//     }

//     if (step === 3) {
//       return (
//         <AuthHeroCard
//           illustrationSrc="/images/auth/oboarding-two-img.png"
//           illustrationPosition=""
//           illustrationPositionMobile=""
//           illustrationWidth=""
//           illustrationWidthMobile={250}
//           cardWidth={isMobile ? "w-full" : "w-[750px]"}
//           imagesWidth="w-full sm:w-[420px] -translate-y-10 lg:-translate-y-14"
//           showBlurOverlay={false}
//           title={
//             <>
//               Macro exposure <br />
//               <span className="text-[#059669]">demands focused liquidity.</span>
//             </>
//           }
//           subtitle="Institutional desks specialize in high-depth asset classes. Select your primary liquidity pools and target instruments."
//         />
//       );
//     }

//     return (
//       <AuthHeroCard
//         illustrationSrc="/images/auth/onboarding-three-img.png"
//         illustrationPosition="-translate-y-12"
//         illustrationPositionMobile="-translate-y-14"
//         illustrationWidth="w-[420px]"
//         illustrationWidthMobile={250}
//         cardWidth={isMobile ? "w-full" : "w-[750px]"}
//         imagesWidth="w-full sm:w-[420px] -translate-y-10 lg:-translate-y-14"
//         bgColor="bg-[#ecfdf5]"
//         showBlurOverlay={false}
//         showSocialProof={false}
//         badge={
//           <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#059669] font-semibold text-[11px] uppercase tracking-wider">
//             {selectedPlan.toUpperCase()} MANDATE ACTIVE
//           </span>
//         }
//         title={
//           <>
//             Mandate initialized, John <br />
//             <span className="text-[#059669]">Access granted</span>
//           </>
//         }
//         subtitle="Your institutional portfolio architecture is loaded. Initializing quantitative telemetry and order books."
//       />
//     );
//   };

//   const renderOnboardingFlow = () => (
//     <div className="pb-10 sm:pb-16">
//       {/* 4-Step Progress Indicator */}
//       <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mb-6 max-w-[280px]">
//         <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
//         <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
//         <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 3 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
//         <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 4 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
//       </div>

//       {/* STEP 2: Capital Tier & Mandate */}
//       {step === 2 && (
//         <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
//           <div>
//             <h2 className="font-mazzard text-[24px] sm:text-[34px] lg:text-[38px] text-[#0A1A32] font-semibold tracking-tight leading-tight">
//               Select your capital tier
//             </h2>
//             <p className="mt-2.5 sm:mt-3 text-[12px] sm:text-[14px] text-slate-600 font-normal leading-relaxed">
//               Configure your asset deployment scale to align risk parameters and execution routing.
//             </p>
//           </div>

//           {/* 3 Experience Level Cards */}
//           <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
//             {/* 1. Beginner */}
//             <button
//               type="button"
//               onClick={() => setExperience("beginner")}
//               className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 experience === "beginner"
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <svg
//                 className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${experience === "beginner" ? "text-white" : "text-[#059669]"}`}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 12C12 7.5 9 5 5.5 5C5.5 8.5 8 12 12 12Z" />
//                 <path d="M12 12C12 7.5 15 5 18.5 5C18.5 8.5 16 12 12 12Z" />
//                 <rect x="7" y="14.5" width="10" height="6.5" rx="1.2" />
//                 <line x1="5.5" y1="14.5" x2="18.5" y2="14.5" />
//               </svg>
//               <span className={`text-[12px] sm:text-[16px] leading-tight ${experience === "beginner" ? "text-white" : "text-[#0F172A]"}`}>
//                 Tier 1 ($50k+)
//               </span>
//               <span
//                 className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${
//                   experience === "beginner" ? "text-emerald-100" : "text-slate-600"
//                 }`}
//               >
//                 Early-stage asset management fund
//               </span>
//             </button>

//             {/* 2. Intermediate */}
//             <button
//               type="button"
//               onClick={() => setExperience("intermediate")}
//               className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 experience === "intermediate"
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <svg
//                 className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${experience === "intermediate" ? "text-white" : "text-[#059669]"}`}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.4"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="20" x2="18" y2="10" />
//                 <line x1="12" y1="20" x2="12" y2="14" />
//                 <line x1="6" y1="20" x2="6" y2="17" />
//                 <polyline points="4 14 10 8 15 13 21 6" />
//                 <polyline points="16 6 21 6 21 11" />
//               </svg>

//               <span className={`text-[12px] sm:text-[16px] leading-tight ${experience === "intermediate" ? "text-white" : "text-[#0F172A]"}`}>
//                 Tier 2 ($250k+)
//               </span>
//               <span
//                 className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${
//                   experience === "intermediate" ? "text-emerald-100" : "text-slate-600"
//                 }`}
//               >
//                 Mid-market private liquidity pool
//               </span>
//             </button>

//             {/* 3. Advanced */}
//             <button
//               type="button"
//               onClick={() => setExperience("advanced")}
//               className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 experience === "advanced"
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <svg
//                 className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${experience === "advanced" ? "text-white" : "text-[#059669]"}`}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <circle cx="12" cy="12" r="6.5" />
//                 <line x1="12" y1="1.5" x2="12" y2="5.5" />
//                 <line x1="12" y1="18.5" x2="12" y2="22.5" />
//                 <line x1="1.5" y1="12" x2="5.5" y2="12" />
//                 <line x1="18.5" y1="12" x2="22.5" y2="12" />
//                 <circle cx="12" cy="12" r="1.8" fill="currentColor" />
//               </svg>

//               <span className={`text-[12px] sm:text-[16px] leading-tight ${experience === "advanced" ? "text-white" : "text-[#0F172A]"}`}>
//                 Tier 3 ($1M+)
//               </span>
//               <span
//                 className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${
//                   experience === "advanced" ? "text-emerald-100" : "text-slate-600"
//                 }`}
//               >
//                 Enterprise institutional syndicate
//               </span>
//             </button>
//           </div>

//           {/* Path Curriculum Note Box */}
//           <div className="p-4 sm:p-5 rounded-[22px] bg-[#ecfdf5] border border-emerald-200 text-slate-700 text-[12px] sm:text-[13px] leading-relaxed">
//             {experience === "beginner" && (
//               <p>
//                 <strong className="text-slate-900 font-semibold">Tier 1 Mandate:</strong> Standard compliance protocols, basic portfolio risk limits, manual execution routing.
//                 <br />
//                 <span className="text-slate-600">Max drawdown cap: 5% · Daily reporting.</span>
//               </p>
//             )}
//             {experience === "intermediate" && (
//               <p>
//                 <strong className="text-slate-900 font-semibold">Tier 2 Mandate:</strong> Multi-asset hedging configurations, advanced liquidity mapping, algorithmic triggers.
//                 <br />
//                 <span className="text-slate-600">Max drawdown cap: 8% · Real-time telemetry.</span>
//               </p>
//             )}
//             {experience === "advanced" && (
//               <p>
//                 <strong className="text-slate-900 font-semibold">Tier 3 Mandate:</strong> Direct market access (DMA) integration, custom L3 order book parsing, gamma exposure controls.
//                 <br />
//                 <span className="text-slate-600">Max drawdown cap: 12% · Dedicated desk.</span>
//               </p>
//             )}
//           </div>

//           {/* Continue Button */}
//           <button
//             type="button"
//             onClick={handleContinueFromStep}
//             disabled={isLoading}
//             className="w-full py-3.5 sm:py-4 px-6 bg-[#047857] hover:bg-[#065f46] active:scale-[0.99] text-white font-medium text-[15px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-sm"
//           >
//             {isLoading ? (
//               <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//             ) : (
//               <>
//                 <span>Continue</span>
//                 <svg
//                   className="w-4 h-4 text-white"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="4" y1="12" x2="20" y2="12" />
//                   <polyline points="14 6 20 12 14 18" />
//                 </svg>
//               </>
//             )}
//           </button>
//         </div>
//       )}

//       {/* STEP 3: Markets & Execution Objective */}
//       {step === 3 && (
//         <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
//           <div>
//             <h2 className="font-mazzard text-[24px] sm:text-[34px] lg:text-[38px] text-[#0A1A32] font-semibold tracking-tight leading-tight">
//               Target liquidity pools
//             </h2>
//             <p className="mt-2.5 sm:mt-3 text-[12px] sm:text-[14px] text-slate-600 font-normal leading-relaxed">
//               Select your primary execution markets. Configurations can be expanded via the institutional dashboard.
//             </p>
//           </div>

//           {/* Market Selectors (3 Squarish Cards) */}
//           <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
//             {/* 1. Forex */}
//             <button
//               type="button"
//               onClick={() => toggleMarket("forex")}
//               className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 markets.includes("forex")
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <svg
//                 className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${markets.includes("forex") ? "text-white" : "text-[#059669]"}`}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.4"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="20" x2="18" y2="10" />
//                 <line x1="12" y1="20" x2="12" y2="14" />
//                 <line x1="6" y1="20" x2="6" y2="17" />
//                 <polyline points="4 14 10 8 15 13 21 6" />
//                 <polyline points="16 6 21 6 21 11" />
//               </svg>
//               <span className={`text-[12px] sm:text-[15.5px] leading-tight ${markets.includes("forex") ? "text-white" : "text-[#0F172A]"}`}>
//                 FX Currencies
//               </span>
//             </button>

//             {/* 2. Crypto */}
//             <button
//               type="button"
//               onClick={() => toggleMarket("crypto")}
//               className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 markets.includes("crypto")
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <svg
//                 className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${markets.includes("crypto") ? "text-white" : "text-[#059669]"}`}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 12C12 7.5 9 5 5.5 5C5.5 8.5 8 12 12 12Z" />
//                 <path d="M12 12C12 7.5 15 5 18.5 5C18.5 8.5 16 12 12 12Z" />
//                 <rect x="7" y="14.5" width="10" height="6.5" rx="1.2" />
//                 <line x1="5.5" y1="14.5" x2="18.5" y2="14.5" />
//               </svg>
//               <span className={`text-[12px] sm:text-[15.5px] leading-tight ${markets.includes("crypto") ? "text-white" : "text-[#0F172A]"}`}>
//                 Digital Assets
//               </span>
//             </button>

//             {/* 3. Stocks */}
//             <button
//               type="button"
//               onClick={() => toggleMarket("stocks")}
//               className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 markets.includes("stocks")
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <svg
//                 className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${markets.includes("stocks") ? "text-white" : "text-[#059669]"}`}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.4"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="18" y1="20" x2="18" y2="10" />
//                 <line x1="12" y1="20" x2="12" y2="14" />
//                 <line x1="6" y1="20" x2="6" y2="17" />
//                 <polyline points="4 14 10 8 15 13 21 6" />
//                 <polyline points="16 6 21 6 21 11" />
//               </svg>
//               <span className={`text-[14px] sm:text-[15.5px] leading-tight ${markets.includes("stocks") ? "text-white" : "text-[#0F172A]"}`}>
//                 Equities
//               </span>
//             </button>
//           </div>

//           {/* Main Goal Section */}
//           <div className="pt-2">
//             <span className="block text-[11.5px] sm:text-[12px] font-semibold text-slate-500 tracking-wider uppercase mb-2.5">
//               PRIMARY DEPLOYMENT OBJECTIVE
//             </span>

//             <div className="space-y-2.5">
//               <button
//                 type="button"
//                 onClick={() => setGoal("fundamentals")}
//                 className={`w-full py-3.5 sm:py-4 px-5 rounded-[16px] sm:rounded-[18px] text-left text-[13.5px] sm:text-[14px] font-normal transition-all cursor-pointer ${
//                   goal === "fundamentals"
//                     ? "bg-[#059669] text-white border border-[#047857] shadow-sm"
//                     : "bg-[#ecfdf5] text-slate-700 hover:bg-[#d1fae5] border border-emerald-200"
//                 }`}
//               >
//                 Systematic quantitative infrastructure deployment
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setGoal("consistency")}
//                 className={`w-full py-3.5 sm:py-4 px-5 rounded-[16px] sm:rounded-[18px] text-left text-[13.5px] sm:text-[14px] font-normal transition-all cursor-pointer ${
//                   goal === "consistency"
//                     ? "bg-[#059669] text-white border border-[#047857] shadow-sm"
//                     : "bg-[#ecfdf5] text-slate-700 hover:bg-[#d1fae5] border border-emerald-200"
//                 }`}
//               >
//                 Proprietary risk mitigation & capital scaling
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setGoal("side_income")}
//                 className={`w-full py-3.5 sm:py-4 px-5 rounded-[16px] sm:rounded-[18px] text-left text-[13.5px] sm:text-[14px] font-normal transition-all cursor-pointer ${
//                   goal === "side_income"
//                     ? "bg-[#059669] text-white border border-[#047857] shadow-sm"
//                     : "bg-[#ecfdf5] text-slate-700 hover:bg-[#d1fae5] border border-emerald-200"
//                 }`}
//               >
//                 High-yield algorithmic return generation
//               </button>
//             </div>
//           </div>

//           {/* Continue Button */}
//           <button
//             type="button"
//             onClick={handleContinueFromStep}
//             disabled={isLoading}
//             className="w-full py-3.5 sm:py-4 px-6 bg-[#047857] hover:bg-[#065f46] active:scale-[0.99] text-white font-medium text-[15px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-sm mt-6"
//           >
//             {isLoading ? (
//               <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//             ) : (
//               <>
//                 <span>Continue</span>
//                 <svg
//                   className="w-4 h-4 text-white"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="4" y1="12" x2="20" y2="12" />
//                   <polyline points="14 6 20 12 14 18" />
//                 </svg>
//               </>
//             )}
//           </button>
//         </div>
//       )}

//       {/* STEP 4: Terminal Architecture Overview */}
//       {step === 4 && (
//         <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
//           <div>
//             <h2 className="font-mazzard text-[24px] sm:text-[32px] lg:text-[36px] text-[#0F172A] tracking-tight leading-tight">
//               Terminal architecture overview
//             </h2>
//             <p className="mt-1.5 sm:mt-2 text-[12px] sm:text-[13.5px] text-slate-500 font-normal leading-relaxed">
//               A quick review of the core institutional components you will interact with.
//             </p>
//           </div>

//           {/* 5 Area Cards */}
//           <div className="space-y-2 sm:space-y-2.5">
//             {[
//               { id: 1, title: "Telemetry Dashboard", desc: "Command center for real-time portfolio allocation, asset exposure, and drawdown tracking." },
//               { id: 2, title: "Execution Modules", desc: "Rigorous algorithmic modules and quantitative frameworks for live market deployment." },
//               { id: 3, title: "Quantitative Tools", desc: "Level 3 order book parsers, custom backtesters, and gamma exposure analytical models." },
//               { id: 4, title: "Risk Compliance", desc: "Automated risk limits, safety circuit breakers, and institutional reporting protocols." },
//               { id: 5, title: "Analyst Syndicate", desc: "Direct collaboration lines with fellow quantitative operators and research desks." },
//             ].map((item) => (
//               <div key={item.id} className="p-3 sm:p-4 rounded-[16px] bg-[#ecfdf5] border border-emerald-200 flex items-start gap-2.5 sm:gap-3">
//                 <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full border-[1.5px] border-slate-700 text-slate-700 font-semibold text-[10px] sm:text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
//                   {item.id}
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-[12.5px] sm:text-[14px] text-slate-900 leading-tight">
//                     {item.title}
//                   </h4>
//                   <p className="mt-0.5 text-[11px] sm:text-[12px] text-slate-500 font-normal leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Go to my dashboard Button */}
//           <button
//             type="button"
//             onClick={handleContinueFromStep}
//             disabled={isLoading}
//             className="w-full py-3 sm:py-3.5 px-5 bg-[#047857] hover:bg-[#065f46] active:scale-[0.99] text-white font-medium text-[13.5px] sm:text-[15px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-xs"
//           >
//             {isLoading ? (
//               <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//             ) : (
//               <>
//                 <span>Initialize Dashboard</span>
//                 <svg
//                   className="w-3.5 h-3.5 text-white"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="4" y1="12" x2="20" y2="12" />
//                   <polyline points="14 6 20 12 14 18" />
//                 </svg>
//               </>
//             )}
//           </button>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="relative min-h-screen w-full bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 h-screen overflow-hidden">
//       {showPlanModal && (
//         <div className="absolute top-6 sm:top-8 left-6 sm:left-12 lg:left-16 z-40">
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/images/logo.png"
//               alt="stellarterm"
//               width={160}
//               height={38}
//               className="h-7 sm:h-8 w-auto object-contain"
//               priority
//             />
//           </Link>
//         </div>
//       )}

//       <main
//         className={`hidden lg:grid w-full h-full max-w-[1400px] mx-auto grid-cols-12 gap-12 items-center p-8 transition-all duration-300 ${
//           showPlanModal ? "blur-md pointer-events-none select-none filter" : ""
//         }`}
//       >
//         {renderHeroForStep(false)}

//         <div className="col-span-6 flex items-center justify-start pl-10 h-full overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
//           <div className="w-full max-w-[460px] mx-0 flex flex-col justify-center py-8 my-auto">
//             {renderOnboardingFlow()}
//           </div>
//         </div>
//       </main>

//       <div
//         className={`lg:hidden relative w-full h-full p-3 sm:p-4 pb-0 flex flex-col justify-between overflow-hidden bg-white transition-all duration-300 ${
//           showPlanModal ? "blur-md pointer-events-none select-none filter" : ""
//         }`}
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="absolute inset-3 sm:inset-4 bottom-0 z-0">
//           {renderHeroForStep(true)}
//         </div>

//         {!isSheetOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             onClick={() => setIsSheetOpen(true)}
//             className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center justify-center cursor-pointer"
//           >
//             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md shadow-md border border-white/60 text-[#047857] text-[12px] font-medium animate-bounce">
//               <Icon icon="lucide:chevron-up" className="w-4 h-4" />
//               <span>Swipe up to continue</span>
//             </div>
//           </motion.div>
//         )}

//         <AnimatePresence>
//           {isSheetOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsSheetOpen(false)}
//               className="absolute inset-0 bg-black/25 backdrop-blur-[2px] z-20 cursor-pointer"
//             />
//           )}
//         </AnimatePresence>

//         <AnimatePresence>
//           {isSheetOpen && (
//             <motion.div
//               initial={{ y: "100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "100%" }}
//               transition={{ type: "spring", stiffness: 320, damping: 30 }}
//               drag="y"
//               dragConstraints={{ top: 0 }}
//               dragElastic={0.2}
//               onDragEnd={(e, info) => {
//                 if (info.offset.y > 80 || info.velocity.y > 300) {
//                   setIsSheetOpen(false);
//                 }
//               }}
//               className="relative z-30 mt-auto w-full bg-white rounded-t-[32px] sm:rounded-t-[36px] shadow-[0_-16px_48px_rgba(4,120,87,0.15)] px-5 pt-3 pb-7 max-h-[85vh] overflow-y-auto touch-pan-y"
//             >
//               <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3 cursor-grab active:cursor-grabbing" />
//               <div className="w-full max-w-[400px] mx-auto">
//                 {renderOnboardingFlow()}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {showPlanModal && (
//         <div className="fixed inset-0 z-50 bg-white sm:bg-[#ecfdf5] lg:bg-slate-900/10 lg:backdrop-blur-xs overflow-y-auto p-2.5 sm:p-4 lg:p-6 flex items-start lg:items-center justify-center animate-in fade-in duration-200">
//           <div className="w-full max-w-[440px] lg:max-w-[960px] my-auto bg-emerald-50 sm:bg-transparent rounded-[45px]">
//             <div className="lg:hidden px-4 pt-3 pb-10">
//               <Link href="/" className="inline-flex items-center">
//                 <Image
//                   src="/images/logo.png"
//                   alt="stellarterm"
//                   width={150}
//                   height={34}
//                   className="h-7 w-auto object-contain"
//                   priority
//                 />
//               </Link>
//             </div>

//             <div className="w-full bg-[#ecfdf5] rounded-[45px] sm:rounded-[36px] lg:rounded-[36px] p-4.5 sm:p-6 lg:p-8 shadow-xl lg:shadow-2xl">
//               <div className="mb-4 sm:mb-6 mt-4 sm:mt-0">
//                 <h2 className="font-mazzard text-[24px] sm:text-[28px] lg:text-[36px] text-[#0F172A] font-semibold tracking-tight leading-none">
//                   Select institutional plan
//                 </h2>
//               </div>

//               <div className="w-full lg:bg-emerald-100/60 lg:rounded-[28px] lg:p-5">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 items-start">
//                   <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
//                     <div>
//                       <h3 className="font-mazzard text-[20px] sm:text-[22px] text-[#0F172A] font-bold tracking-tight">
//                         STANDARD
//                       </h3>
//                       <div className="font-mazzard text-[20px] sm:text-[22px] text-[#0F172A] font-bold mt-0.5">
//                         $0
//                       </div>

//                       <p className="text-[12.5px] text-slate-400 font-medium mt-3">
//                         Complimentary tier
//                       </p>
//                       <p className="text-[11.5px] sm:text-[12px] text-slate-500 font-normal leading-relaxed mt-1">
//                         Essential tools for exploratory portfolio evaluation and baseline liquidity routing.
//                       </p>

//                       <div className="w-full h-px bg-slate-200 my-4" />

//                       <ul className="space-y-2 text-[11.5px] sm:text-[12px]">
//                         {basicIncluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-2 text-slate-800 font-normal">
//                             <CheckIcon className="w-3.5 h-3.5 text-slate-900 flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                         {basicExcluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-2 text-slate-400 font-normal">
//                             <Icon icon="lucide:x" className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="mt-6 pt-2">
//                       <button
//                         type="button"
//                         onClick={() => handleSelectPlanAndProceed("basic")}
//                         className="w-full py-3.5 px-5 bg-black hover:bg-slate-900 active:scale-[0.99] text-white text-[13.5px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
//                       >
//                         Deploy Standard
//                       </button>
//                     </div>
//                   </div>

//                   <div className="bg-[#059669] text-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-lg shadow-emerald-500/25">
//                     <div>
//                       <h3 className="font-mazzard text-[20px] sm:text-[22px] text-white font-bold tracking-tight">
//                         PROFESSIONAL
//                       </h3>
//                       <div className="font-mazzard text-[20px] sm:text-[22px] text-white font-bold mt-0.5">
//                         $2,490/year
//                       </div>

//                       <p className="text-[12.5px] text-white/95 font-medium mt-3">
//                         billed annually
//                       </p>
//                       <p className="text-[11.5px] sm:text-[12px] text-white/85 font-normal leading-relaxed mt-1">
//                         Designed for active asset managers requiring quantitative modules and order book telemetry.
//                       </p>

//                       <div className="w-full h-px bg-white/20 my-4" />

//                       <ul className="space-y-2 text-[11.5px] sm:text-[12px]">
//                         {proIncluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-2 text-white font-normal">
//                             <CheckIcon className="w-3.5 h-3.5 text-white flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                         {proExcluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-2 text-white/50 font-normal">
//                             <Icon icon="lucide:x" className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="mt-6 pt-2">
//                       <button
//                         type="button"
//                         onClick={() => handleSelectPlanAndProceed("pro")}
//                         className="w-full py-3.5 px-5 bg-white hover:bg-slate-50 active:scale-[0.99] text-[#059669] text-[13.5px] font-semibold rounded-full text-center transition-all shadow-md cursor-pointer"
//                       >
//                         Select Professional
//                       </button>
//                     </div>
//                   </div>

//                   <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
//                     <div>
//                       <h3 className="font-mazzard text-[20px] sm:text-[22px] text-[#0F172A] font-bold tracking-tight">
//                         ENTERPRISE
//                       </h3>
//                       <div className="flex items-baseline gap-2 mt-0.5">
//                         <span className="font-mazzard text-[20px] sm:text-[22px] text-[#0F172A] font-bold">
//                           $4,990/year
//                         </span>
//                         <span className="text-[11.5px] text-[#059669] font-semibold">
//                           Custom SLA
//                         </span>
//                       </div>

//                       <p className="text-[12.5px] text-slate-400 font-medium mt-3">
//                         billed annually
//                       </p>
//                       <p className="text-[11.5px] sm:text-[12px] text-slate-500 font-normal leading-relaxed mt-1">
//                         For institutional syndicates and funds needing dedicated infrastructure and custom API gateways.
//                       </p>

//                       <div className="w-full h-px bg-slate-200 my-4" />

//                       <ul className="space-y-2 text-[11.5px] sm:text-[12px]">
//                         {ultraIncluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-2 text-slate-800 font-normal">
//                             <CheckIcon className="w-3.5 h-3.5 text-slate-900 flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="mt-6 pt-2">
//                       <button
//                         type="button"
//                         onClick={() => handleSelectPlanAndProceed("ultra")}
//                         className="w-full py-3.5 px-5 bg-black hover:bg-slate-900 active:scale-[0.99] text-white text-[13.5px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
//                       >
//                         Deploy Enterprise
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import AuthHeroCard from "@/components/auth/AuthHeroCard";
import { useAuth } from "@/context/AuthContext";

type ExperienceLevel = "beginner" | "intermediate" | "advanced";
type MarketType = "forex" | "crypto" | "stocks";
type GoalType = "fundamentals" | "consistency" | "side_income";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className || "w-3.5 h-3.5 flex-shrink-0"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 12.5L10.5 17.5L20 8" />
    </svg>
  );
}

export default function OnboardingPage() {
  const router = useRouter();
  const { completeOnboarding } = useAuth();

  const [step, setStep] = useState(2);
  const [experience, setExperience] = useState<ExperienceLevel>("beginner");
  const [markets, setMarkets] = useState<MarketType[]>(["forex"]);
  const [goal, setGoal] = useState<GoalType>("fundamentals");
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "pro" | "ultra">("pro");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const toggleMarket = (market: MarketType) => {
    if (markets.includes(market)) {
      if (markets.length > 1) {
        setMarkets(markets.filter((m) => m !== market));
      }
    } else {
      setMarkets([...markets, market]);
    }
  };

  const handleContinueFromStep = async () => {
    setErrorMessage("");
    if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setShowPlanModal(true);
    } else if (step === 4) {
      setIsLoading(true);
      try {
        // Map frontend states to backend expectation
        const experienceMap = {
          beginner: "Retail/Novice",
          intermediate: "Experienced",
          advanced: "Algorithmic"
        };

        const planMap = {
          basic: "Standard",
          pro: "Premium",
          ultra: "Institutional"
        };

        await completeOnboarding({
          experienceLevel: experienceMap[experience],
          marketsOfInterest: markets,
          primaryGoal: goal,
          planTier: planMap[selectedPlan]
        });
      } catch (error: any) {
        setErrorMessage(error.response?.data?.message || "Failed to complete telemetry synchronization.");
        setIsLoading(false);
      }
    }
  };

  const handleSelectPlanAndProceed = (plan: "basic" | "pro" | "ultra") => {
    setSelectedPlan(plan);
    setShowPlanModal(false);
    setStep(4);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (diff > 40 && !isSheetOpen) {
      setIsSheetOpen(true);
    }
    setTouchStartY(null);
  };

  const basicIncluded = [
    "Intro to institutional liquidity",
    "Asset allocation foundations",
    "Risk infrastructure basics",
    "Terminal workspace onboarding",
  ];

  const basicExcluded = [
    "Level 3 order book telemetry",
    "Algorithmic execution models",
    "Custom quantitative backtesters",
    "Gamma exposure metrics",
    "Multi-tier capital governance",
    "Real-time sentiment engines",
    "Priority liquidity routing",
    "Institutional market reviews",
  ];

  const proIncluded = [
    "Everything in Basic",
    "All advanced quantitative modules",
    "Complete algorithmic execution framework",
    "Custom quantitative backtesters",
    "Level 3 order book telemetry",
    "Weekly institutional market review",
    "Verified allocation certificate",
    "Enterprise fee discounts",
  ];

  const proExcluded = ["Dedicated execution desk", "Custom API gateway integration"];

  const ultraIncluded = [
    "Everything in Pro",
    "Dedicated execution desk",
    "Custom API gateway integration",
    "Priority liquidity routing",
    "Direct quantitative analyst access",
    "Enterprise fee discounts",
  ];

  const renderHeroForStep = (isMobile = false) => {
    if (step === 2) {
      return (
        <AuthHeroCard
          illustrationSrc="/images/auth/onboarding-one-img.png"
          illustrationPosition="-translate-y-16"
          illustrationPositionMobile="-translate-y-14"
          illustrationWidth="w-[720px]"
          illustrationWidthMobile={250}
          cardWidth={isMobile ? "w-full" : "w-[750px]"}
          showBlurOverlay={false}
          imagesWidth="w-full sm:w-[420px] -translate-y-10 lg:-translate-y-14"
          title={
            <>
              Capital deployment <br />
              starts with scale <br />
              <span className="text-[#059669]">governance and precision.</span>
            </>
          }
          subtitle="Define your institutional mandate. Calibrating your capital tier ensures optimal risk-adjusted allocation."
        />
      );
    }

    if (step === 3) {
      return (
        <AuthHeroCard
          illustrationSrc="/images/auth/oboarding-two-img.png"
          illustrationPosition=""
          illustrationPositionMobile=""
          illustrationWidth=""
          illustrationWidthMobile={250}
          cardWidth={isMobile ? "w-full" : "w-[750px]"}
          imagesWidth="w-full sm:w-[420px] -translate-y-10 lg:-translate-y-14"
          showBlurOverlay={false}
          title={
            <>
              Macro exposure <br />
              <span className="text-[#059669]">demands focused liquidity.</span>
            </>
          }
          subtitle="Institutional desks specialize in high-depth asset classes. Select your primary liquidity pools and target instruments."
        />
      );
    }

    return (
      <AuthHeroCard
        illustrationSrc="/images/auth/onboarding-three-img.png"
        illustrationPosition="-translate-y-12"
        illustrationPositionMobile="-translate-y-14"
        illustrationWidth="w-[420px]"
        illustrationWidthMobile={250}
        cardWidth={isMobile ? "w-full" : "w-[750px]"}
        imagesWidth="w-full sm:w-[420px] -translate-y-10 lg:-translate-y-14"
        bgColor="bg-[#ecfdf5]"
        showBlurOverlay={false}
        showSocialProof={false}
        badge={
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#059669] font-semibold text-[11px] uppercase tracking-wider">
            {selectedPlan.toUpperCase()} MANDATE ACTIVE
          </span>
        }
        title={
          <>
            Mandate initialized <br />
            <span className="text-[#059669]">Access granted</span>
          </>
        }
        subtitle="Your institutional portfolio architecture is loaded. Initializing quantitative telemetry and order books."
      />
    );
  };

  const renderOnboardingFlow = () => (
    <div className="pb-10 sm:pb-16">
      {/* 4-Step Progress Indicator */}
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mb-6 max-w-[280px]">
        <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
        <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
        <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 3 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
        <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 4 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
      </div>

      {errorMessage && (
        <div className="mb-4 p-2.5 sm:p-3 rounded-[14px] bg-rose-50 border border-rose-200 text-rose-600 text-[11.5px] sm:text-[12.5px] flex items-center gap-2">
          <Icon icon="lucide:alert-circle" className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* STEP 2: Capital Tier & Mandate */}
      {step === 2 && (
        <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
          <div>
            <h2 className="font-mazzard text-[24px] sm:text-[34px] lg:text-[38px] text-[#0A1A32] font-semibold tracking-tight leading-tight">
              Select your capital tier
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[12px] sm:text-[14px] text-slate-600 font-normal leading-relaxed">
              Configure your asset deployment scale to align risk parameters and execution routing.
            </p>
          </div>

          {/* 3 Experience Level Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
            {/* 1. Beginner */}
            <button
              type="button"
              onClick={() => setExperience("beginner")}
              className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                experience === "beginner"
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <svg
                className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${experience === "beginner" ? "text-white" : "text-[#059669]"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 12C12 7.5 9 5 5.5 5C5.5 8.5 8 12 12 12Z" />
                <path d="M12 12C12 7.5 15 5 18.5 5C18.5 8.5 16 12 12 12Z" />
                <rect x="7" y="14.5" width="10" height="6.5" rx="1.2" />
                <line x1="5.5" y1="14.5" x2="18.5" y2="14.5" />
              </svg>
              <span className={`text-[12px] sm:text-[16px] leading-tight ${experience === "beginner" ? "text-white" : "text-[#0F172A]"}`}>
                Tier 1 ($50k+)
              </span>
              <span
                className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${
                  experience === "beginner" ? "text-emerald-100" : "text-slate-600"
                }`}
              >
                Early-stage asset management fund
              </span>
            </button>

            {/* 2. Intermediate */}
            <button
              type="button"
              onClick={() => setExperience("intermediate")}
              className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                experience === "intermediate"
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <svg
                className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${experience === "intermediate" ? "text-white" : "text-[#059669]"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="14" />
                <line x1="6" y1="20" x2="6" y2="17" />
                <polyline points="4 14 10 8 15 13 21 6" />
                <polyline points="16 6 21 6 21 11" />
              </svg>

              <span className={`text-[12px] sm:text-[16px] leading-tight ${experience === "intermediate" ? "text-white" : "text-[#0F172A]"}`}>
                Tier 2 ($250k+)
              </span>
              <span
                className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${
                  experience === "intermediate" ? "text-emerald-100" : "text-slate-600"
                }`}
              >
                Mid-market private liquidity pool
              </span>
            </button>

            {/* 3. Advanced */}
            <button
              type="button"
              onClick={() => setExperience("advanced")}
              className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                experience === "advanced"
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <svg
                className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${experience === "advanced" ? "text-white" : "text-[#059669]"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="6.5" />
                <line x1="12" y1="1.5" x2="12" y2="5.5" />
                <line x1="12" y1="18.5" x2="12" y2="22.5" />
                <line x1="1.5" y1="12" x2="5.5" y2="12" />
                <line x1="18.5" y1="12" x2="22.5" y2="12" />
                <circle cx="12" cy="12" r="1.8" fill="currentColor" />
              </svg>

              <span className={`text-[12px] sm:text-[16px] leading-tight ${experience === "advanced" ? "text-white" : "text-[#0F172A]"}`}>
                Tier 3 ($1M+)
              </span>
              <span
                className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${
                  experience === "advanced" ? "text-emerald-100" : "text-slate-600"
                }`}
              >
                Enterprise institutional syndicate
              </span>
            </button>
          </div>

          {/* Path Curriculum Note Box */}
          <div className="p-4 sm:p-5 rounded-[22px] bg-[#ecfdf5] border border-emerald-200 text-slate-700 text-[12px] sm:text-[13px] leading-relaxed">
            {experience === "beginner" && (
              <p>
                <strong className="text-slate-900 font-semibold">Tier 1 Mandate:</strong> Standard compliance protocols, basic portfolio risk limits, manual execution routing.
                <br />
                <span className="text-slate-600">Max drawdown cap: 5% · Daily reporting.</span>
              </p>
            )}
            {experience === "intermediate" && (
              <p>
                <strong className="text-slate-900 font-semibold">Tier 2 Mandate:</strong> Multi-asset hedging configurations, advanced liquidity mapping, algorithmic triggers.
                <br />
                <span className="text-slate-600">Max drawdown cap: 8% · Real-time telemetry.</span>
              </p>
            )}
            {experience === "advanced" && (
              <p>
                <strong className="text-slate-900 font-semibold">Tier 3 Mandate:</strong> Direct market access (DMA) integration, custom L3 order book parsing, gamma exposure controls.
                <br />
                <span className="text-slate-600">Max drawdown cap: 12% · Dedicated desk.</span>
              </p>
            )}
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleContinueFromStep}
            disabled={isLoading}
            className="w-full py-3.5 sm:py-4 px-6 bg-[#047857] hover:bg-[#065f46] active:scale-[0.99] text-white font-medium text-[15px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-sm"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Continue</span>
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* STEP 3: Markets & Execution Objective */}
      {step === 3 && (
        <div className="space-y-5 sm:space-y-6 animate-in fade-in duration-300">
          <div>
            <h2 className="font-mazzard text-[24px] sm:text-[34px] lg:text-[38px] text-[#0A1A32] font-semibold tracking-tight leading-tight">
              Target liquidity pools
            </h2>
            <p className="mt-2.5 sm:mt-3 text-[12px] sm:text-[14px] text-slate-600 font-normal leading-relaxed">
              Select your primary execution markets. Configurations can be expanded via the institutional dashboard.
            </p>
          </div>

          {/* Market Selectors (3 Squarish Cards) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
            {/* 1. Forex */}
            <button
              type="button"
              onClick={() => toggleMarket("forex")}
              className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                markets.includes("forex")
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <svg
                className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${markets.includes("forex") ? "text-white" : "text-[#059669]"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="14" />
                <line x1="6" y1="20" x2="6" y2="17" />
                <polyline points="4 14 10 8 15 13 21 6" />
                <polyline points="16 6 21 6 21 11" />
              </svg>
              <span className={`text-[12px] sm:text-[15.5px] leading-tight ${markets.includes("forex") ? "text-white" : "text-[#0F172A]"}`}>
                FX Currencies
              </span>
            </button>

            {/* 2. Crypto */}
            <button
              type="button"
              onClick={() => toggleMarket("crypto")}
              className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                markets.includes("crypto")
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <svg
                className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${markets.includes("crypto") ? "text-white" : "text-[#059669]"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 12C12 7.5 9 5 5.5 5C5.5 8.5 8 12 12 12Z" />
                <path d="M12 12C12 7.5 15 5 18.5 5C18.5 8.5 16 12 12 12Z" />
                <rect x="7" y="14.5" width="10" height="6.5" rx="1.2" />
                <line x1="5.5" y1="14.5" x2="18.5" y2="14.5" />
              </svg>
              <span className={`text-[12px] sm:text-[15.5px] leading-tight ${markets.includes("crypto") ? "text-white" : "text-[#0F172A]"}`}>
                Digital Assets
              </span>
            </button>

            {/* 3. Stocks */}
            <button
              type="button"
              onClick={() => toggleMarket("stocks")}
              className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                markets.includes("stocks")
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <svg
                className={`w-6 h-6 sm:w-9 sm:h-9 mb-1.5 sm:mb-2 ${markets.includes("stocks") ? "text-white" : "text-[#059669]"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="14" />
                <line x1="6" y1="20" x2="6" y2="17" />
                <polyline points="4 14 10 8 15 13 21 6" />
                <polyline points="16 6 21 6 21 11" />
              </svg>
              <span className={`text-[14px] sm:text-[15.5px] leading-tight ${markets.includes("stocks") ? "text-white" : "text-[#0F172A]"}`}>
                Equities
              </span>
            </button>
          </div>

          {/* Main Goal Section */}
          <div className="pt-2">
            <span className="block text-[11.5px] sm:text-[12px] font-semibold text-slate-500 tracking-wider uppercase mb-2.5">
              PRIMARY DEPLOYMENT OBJECTIVE
            </span>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => setGoal("fundamentals")}
                className={`w-full py-3.5 sm:py-4 px-5 rounded-[16px] sm:rounded-[18px] text-left text-[13.5px] sm:text-[14px] font-normal transition-all cursor-pointer ${
                  goal === "fundamentals"
                    ? "bg-[#059669] text-white border border-[#047857] shadow-sm"
                    : "bg-[#ecfdf5] text-slate-700 hover:bg-[#d1fae5] border border-emerald-200"
                }`}
              >
                Systematic quantitative infrastructure deployment
              </button>

              <button
                type="button"
                onClick={() => setGoal("consistency")}
                className={`w-full py-3.5 sm:py-4 px-5 rounded-[16px] sm:rounded-[18px] text-left text-[13.5px] sm:text-[14px] font-normal transition-all cursor-pointer ${
                  goal === "consistency"
                    ? "bg-[#059669] text-white border border-[#047857] shadow-sm"
                    : "bg-[#ecfdf5] text-slate-700 hover:bg-[#d1fae5] border border-emerald-200"
                }`}
              >
                Proprietary risk mitigation & capital scaling
              </button>

              <button
                type="button"
                onClick={() => setGoal("side_income")}
                className={`w-full py-3.5 sm:py-4 px-5 rounded-[16px] sm:rounded-[18px] text-left text-[13.5px] sm:text-[14px] font-normal transition-all cursor-pointer ${
                  goal === "side_income"
                    ? "bg-[#059669] text-white border border-[#047857] shadow-sm"
                    : "bg-[#ecfdf5] text-slate-700 hover:bg-[#d1fae5] border border-emerald-200"
                }`}
              >
                High-yield algorithmic return generation
              </button>
            </div>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            onClick={handleContinueFromStep}
            disabled={isLoading}
            className="w-full py-3.5 sm:py-4 px-6 bg-[#047857] hover:bg-[#065f46] active:scale-[0.99] text-white font-medium text-[15px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-sm mt-6"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Continue</span>
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* STEP 4: Terminal Architecture Overview */}
      {step === 4 && (
        <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-300">
          <div>
            <h2 className="font-mazzard text-[24px] sm:text-[32px] lg:text-[36px] text-[#0F172A] tracking-tight leading-tight">
              Terminal architecture overview
            </h2>
            <p className="mt-1.5 sm:mt-2 text-[12px] sm:text-[13.5px] text-slate-500 font-normal leading-relaxed">
              A quick review of the core institutional components you will interact with.
            </p>
          </div>

          {/* 5 Area Cards */}
          <div className="space-y-2 sm:space-y-2.5">
            {[
              { id: 1, title: "Telemetry Dashboard", desc: "Command center for real-time portfolio allocation, asset exposure, and drawdown tracking." },
              { id: 2, title: "Execution Modules", desc: "Rigorous algorithmic modules and quantitative frameworks for live market deployment." },
              { id: 3, title: "Quantitative Tools", desc: "Level 3 order book parsers, custom backtesters, and gamma exposure analytical models." },
              { id: 4, title: "Risk Compliance", desc: "Automated risk limits, safety circuit breakers, and institutional reporting protocols." },
              { id: 5, title: "Analyst Syndicate", desc: "Direct collaboration lines with fellow quantitative operators and research desks." },
            ].map((item) => (
              <div key={item.id} className="p-3 sm:p-4 rounded-[16px] bg-[#ecfdf5] border border-emerald-200 flex items-start gap-2.5 sm:gap-3">
                <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full border-[1.5px] border-slate-700 text-slate-700 font-semibold text-[10px] sm:text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {item.id}
                </div>
                <div>
                  <h4 className="font-semibold text-[12.5px] sm:text-[14px] text-slate-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] sm:text-[12px] text-slate-500 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Go to my dashboard Button */}
          <button
            type="button"
            onClick={handleContinueFromStep}
            disabled={isLoading}
            className="w-full py-3 sm:py-3.5 px-5 bg-[#047857] hover:bg-[#065f46] active:scale-[0.99] text-white font-medium text-[13.5px] sm:text-[15px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-xs"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Initialize Dashboard</span>
                <svg
                  className="w-3.5 h-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 h-screen overflow-hidden">
      {showPlanModal && (
        <div className="absolute top-6 sm:top-8 left-6 sm:left-12 lg:left-16 z-40">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="stellarterm"
              width={160}
              height={38}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>
      )}

      <main
        className={`hidden lg:grid w-full h-full max-w-[1400px] mx-auto grid-cols-12 gap-12 items-center p-8 transition-all duration-300 ${
          showPlanModal ? "blur-md pointer-events-none select-none filter" : ""
        }`}
      >
        {renderHeroForStep(false)}

        <div className="col-span-6 flex items-center justify-start pl-10 h-full overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300">
          <div className="w-full max-w-[460px] mx-0 flex flex-col justify-center py-8 my-auto">
            {renderOnboardingFlow()}
          </div>
        </div>
      </main>

      <div
        className={`lg:hidden relative w-full h-full p-3 sm:p-4 pb-0 flex flex-col justify-between overflow-hidden bg-white transition-all duration-300 ${
          showPlanModal ? "blur-md pointer-events-none select-none filter" : ""
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-3 sm:inset-4 bottom-0 z-0">
          {renderHeroForStep(true)}
        </div>

        {!isSheetOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsSheetOpen(true)}
            className="absolute bottom-5 left-0 right-0 z-10 flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md shadow-md border border-white/60 text-[#047857] text-[12px] font-medium animate-bounce">
              <Icon icon="lucide:chevron-up" className="w-4 h-4" />
              <span>Swipe up to continue</span>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {isSheetOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSheetOpen(false)}
              className="absolute inset-0 bg-black/25 backdrop-blur-[2px] z-20 cursor-pointer"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isSheetOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, info) => {
                if (info.offset.y > 80 || info.velocity.y > 300) {
                  setIsSheetOpen(false);
                }
              }}
              className="relative z-30 mt-auto w-full bg-white rounded-t-[32px] sm:rounded-t-[36px] shadow-[0_-16px_48px_rgba(4,120,87,0.15)] px-5 pt-3 pb-7 max-h-[85vh] overflow-y-auto touch-pan-y"
            >
              <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-3 cursor-grab active:cursor-grabbing" />
              <div className="w-full max-w-[400px] mx-auto">
                {renderOnboardingFlow()}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showPlanModal && (
        <div className="fixed inset-0 z-50 bg-white sm:bg-[#ecfdf5] lg:bg-slate-900/10 lg:backdrop-blur-xs overflow-y-auto p-2.5 sm:p-4 lg:p-6 flex items-start lg:items-center justify-center animate-in fade-in duration-200">
          <div className="w-full max-w-[440px] lg:max-w-[960px] my-auto bg-emerald-50 sm:bg-transparent rounded-[45px]">
            <div className="lg:hidden px-4 pt-3 pb-10">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="stellarterm"
                  width={150}
                  height={34}
                  className="h-7 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            <div className="w-full bg-[#ecfdf5] rounded-[45px] sm:rounded-[36px] lg:rounded-[36px] p-4.5 sm:p-6 lg:p-8 shadow-xl lg:shadow-2xl">
              <div className="mb-4 sm:mb-6 mt-4 sm:mt-0">
                <h2 className="font-mazzard text-[24px] sm:text-[28px] lg:text-[36px] text-[#0F172A] font-semibold tracking-tight leading-none">
                  Select institutional plan
                </h2>
              </div>

              <div className="w-full lg:bg-emerald-100/60 lg:rounded-[28px] lg:p-5">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 items-start">
                  <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
                    <div>
                      <h3 className="font-mazzard text-[20px] sm:text-[22px] text-[#0F172A] font-bold tracking-tight">
                        STANDARD
                      </h3>
                      <div className="font-mazzard text-[20px] sm:text-[22px] text-[#0F172A] font-bold mt-0.5">
                        $0
                      </div>

                      <p className="text-[12.5px] text-slate-400 font-medium mt-3">
                        Complimentary tier
                      </p>
                      <p className="text-[11.5px] sm:text-[12px] text-slate-500 font-normal leading-relaxed mt-1">
                        Essential tools for exploratory portfolio evaluation and baseline liquidity routing.
                      </p>

                      <div className="w-full h-px bg-slate-200 my-4" />

                      <ul className="space-y-2 text-[11.5px] sm:text-[12px]">
                        {basicIncluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-800 font-normal">
                            <CheckIcon className="w-3.5 h-3.5 text-slate-900 flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                        {basicExcluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-400 font-normal">
                            <Icon icon="lucide:x" className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectPlanAndProceed("basic")}
                        className="w-full py-3.5 px-5 bg-black hover:bg-slate-900 active:scale-[0.99] text-white text-[13.5px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
                      >
                        Deploy Standard
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#059669] text-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-lg shadow-emerald-500/25">
                    <div>
                      <h3 className="font-mazzard text-[20px] sm:text-[22px] text-white font-bold tracking-tight">
                        PROFESSIONAL
                      </h3>
                      <div className="font-mazzard text-[20px] sm:text-[22px] text-white font-bold mt-0.5">
                        $2,490/year
                      </div>

                      <p className="text-[12.5px] text-white/95 font-medium mt-3">
                        billed annually
                      </p>
                      <p className="text-[11.5px] sm:text-[12px] text-white/85 font-normal leading-relaxed mt-1">
                        Designed for active asset managers requiring quantitative modules and order book telemetry.
                      </p>

                      <div className="w-full h-px bg-white/20 my-4" />

                      <ul className="space-y-2 text-[11.5px] sm:text-[12px]">
                        {proIncluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-white font-normal">
                            <CheckIcon className="w-3.5 h-3.5 text-white flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                        {proExcluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/50 font-normal">
                            <Icon icon="lucide:x" className="w-3.5 h-3.5 text-white/50 flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectPlanAndProceed("pro")}
                        className="w-full py-3.5 px-5 bg-white hover:bg-slate-50 active:scale-[0.99] text-[#059669] text-[13.5px] font-semibold rounded-full text-center transition-all shadow-md cursor-pointer"
                      >
                        Select Professional
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
                    <div>
                      <h3 className="font-mazzard text-[20px] sm:text-[22px] text-[#0F172A] font-bold tracking-tight">
                        ENTERPRISE
                      </h3>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="font-mazzard text-[20px] sm:text-[22px] text-[#0F172A] font-bold">
                          $4,990/year
                        </span>
                        <span className="text-[11.5px] text-[#059669] font-semibold">
                          Custom SLA
                        </span>
                      </div>

                      <p className="text-[12.5px] text-slate-400 font-medium mt-3">
                        billed annually
                      </p>
                      <p className="text-[11.5px] sm:text-[12px] text-slate-500 font-normal leading-relaxed mt-1">
                        For institutional syndicates and funds needing dedicated infrastructure and custom API gateways.
                      </p>

                      <div className="w-full h-px bg-slate-200 my-4" />

                      <ul className="space-y-2 text-[11.5px] sm:text-[12px]">
                        {ultraIncluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-800 font-normal">
                            <CheckIcon className="w-3.5 h-3.5 text-slate-900 flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectPlanAndProceed("ultra")}
                        className="w-full py-3.5 px-5 bg-black hover:bg-slate-900 active:scale-[0.99] text-white text-[13.5px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
                      >
                        Deploy Enterprise
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}