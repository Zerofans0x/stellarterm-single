
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Icon } from "@iconify/react";
// import { motion, AnimatePresence } from "framer-motion";
// import AuthHeroCard from "@/components/auth/AuthHeroCard";
// import { useAuth } from "@/context/AuthContext";
// import { api } from "@/lib/api";

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
//   const { completeOnboarding } = useAuth();

//   const [step, setStep] = useState(2);
//   const [experience, setExperience] = useState<ExperienceLevel>("beginner");
//   const [markets, setMarkets] = useState<MarketType[]>(["forex"]);
//   const [goal, setGoal] = useState<GoalType>("fundamentals");
//   const [showPlanModal, setShowPlanModal] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState<"starter" | "growth" | "executive" | "institutional">("growth");
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
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

//   const handleContinueFromStep = async () => {
//     setErrorMessage("");
//     if (step === 2) {
//       setStep(3);
//     } else if (step === 3) {
//       setShowPlanModal(true);
//     } else if (step === 4) {
//       setIsLoading(true);
//       try {
//         const experienceMap = {
//           beginner: "Retail/Novice",
//           intermediate: "Experienced",
//           advanced: "Algorithmic"
//         };

//         const planMap = {
//           starter: "starter-tier",
//           growth: "growth-tier",
//           executive: "executive-tier",
//           institutional: "institutional"
//         };

//         // 1. Submit Onboarding Profile details
//         await completeOnboarding({
//           experienceLevel: experienceMap[experience],
//           marketsOfInterest: markets,
//           primaryGoal: goal,
//           planTier: selectedPlan
//         });

//         // 2. Initialize Crypto / BTCPay Payment Gateway Invoice
//         const { data } = await api.post("/payments/crypto/subscribe", {
//           slug: planMap[selectedPlan]
//         });

//         if (data.success && data.checkoutUrl) {
//           // Redirect user directly to BTCPay checkout screen
//           window.location.href = data.checkoutUrl;
//         } else {
//           router.push("/dashboard");
//         }
//       } catch (error: any) {
//         setErrorMessage(error.response?.data?.message || "Failed to complete telemetry synchronization.");
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleSelectPlanAndProceed = (plan: "starter" | "growth" | "executive" | "institutional") => {
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

//   const starterIncluded = [
//     "Monthly dividend disbursements",
//     "Automated risk management",
//     "Standard asset protection",
//     "Client dashboard access",
//     "Email support",
//   ];

//   const growthIncluded = [
//     "Everything in Starter Tier",
//     "Bi-weekly yield compounding options",
//     "Advanced risk mitigation protocols",
//     "Priority asset protection tier",
//     "Dedicated account manager",
//     "24/7 priority support",
//   ];

//   const executiveIncluded = [
//     "Everything in Growth Tier",
//     "Immediate weekly yield liquidity",
//     "Customized algorithmic hedging",
//     "Enterprise-grade cold storage",
//     "Private advisory sessions",
//     "Direct concierge support",
//   ];

//   const institutionalIncluded = [
//     "Everything in Executive Tier",
//     "Dedicated private wealth desk",
//     "Custom treasury integration",
//     "Direct board-level reporting",
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
//             Mandate initialized <br />
//             <span className="text-[#059669]">Access granted</span>
//           </>
//         }
//         subtitle="Your institutional portfolio architecture is loaded. Initializing quantitative telemetry and order books."
//       />
//     );
//   };

//   const renderOnboardingFlow = () => (
//     <div className="pb-10 sm:pb-16">
//       <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mb-6 max-w-[280px]">
//         <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
//         <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
//         <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 3 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
//         <div className={`h-1.5 rounded-full transition-colors duration-300 ${step >= 4 ? "bg-[#0A111E]" : "bg-[#E2E8F0]"}`} />
//       </div>

//       {errorMessage && (
//         <div className="mb-4 p-2.5 sm:p-3 rounded-[14px] bg-rose-50 border border-rose-200 text-rose-600 text-[11.5px] sm:text-[12.5px] flex items-center gap-2">
//           <Icon icon="lucide:alert-circle" className="w-4 h-4 flex-shrink-0" />
//           <span>{errorMessage}</span>
//         </div>
//       )}

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

//           <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
//             <button
//               type="button"
//               onClick={() => setExperience("beginner")}
//               className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 experience === "beginner"
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <span className={`text-[12px] sm:text-[15px] font-semibold leading-tight ${experience === "beginner" ? "text-white" : "text-[#0F172A]"}`}>
//                 Starter ($3k)
//               </span>
//               <span className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${experience === "beginner" ? "text-emerald-100" : "text-slate-600"}`}>
//                 Starter capital allocation tier
//               </span>
//             </button>

//             <button
//               type="button"
//               onClick={() => setExperience("intermediate")}
//               className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 experience === "intermediate"
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <span className={`text-[12px] sm:text-[15px] font-semibold leading-tight ${experience === "intermediate" ? "text-white" : "text-[#0F172A]"}`}>
//                 Growth ($5k)
//               </span>
//               <span className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${experience === "intermediate" ? "text-emerald-100" : "text-slate-600"}`}>
//                 Optimized balanced yield tier
//               </span>
//             </button>

//             <button
//               type="button"
//               onClick={() => setExperience("advanced")}
//               className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 experience === "advanced"
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <span className={`text-[12px] sm:text-[15px] font-semibold leading-tight ${experience === "advanced" ? "text-white" : "text-[#0F172A]"}`}>
//                 Executive ($25k+)
//               </span>
//               <span className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${experience === "advanced" ? "text-emerald-100" : "text-slate-600"}`}>
//                 High-allocation institutional tier
//               </span>
//             </button>
//           </div>

//           <div className="p-4 sm:p-5 rounded-[22px] bg-[#ecfdf5] border border-emerald-200 text-slate-700 text-[12px] sm:text-[13px] leading-relaxed">
//             {experience === "beginner" && (
//               <p>
//                 <strong className="text-slate-900 font-semibold">Starter Mandate ($3,000):</strong> Monthly dividend disbursements, automated risk management, and standard asset protection.
//               </p>
//             )}
//             {experience === "intermediate" && (
//               <p>
//                 <strong className="text-slate-900 font-semibold">Growth Mandate ($5,000):</strong> Bi-weekly yield compounding options, advanced risk mitigation protocols, and a dedicated account manager.
//               </p>
//             )}
//             {experience === "advanced" && (
//               <p>
//                 <strong className="text-slate-900 font-semibold">Executive / Institutional Mandate ($25,000+):</strong> Immediate weekly liquidity, customized algorithmic hedging, and direct concierge support.
//               </p>
//             )}
//           </div>

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

//           <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
//             <button
//               type="button"
//               onClick={() => toggleMarket("forex")}
//               className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 markets.includes("forex")
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <span className={`text-[12px] sm:text-[15.5px] leading-tight ${markets.includes("forex") ? "text-white" : "text-[#0F172A]"}`}>
//                 FX Currencies
//               </span>
//             </button>

//             <button
//               type="button"
//               onClick={() => toggleMarket("crypto")}
//               className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 markets.includes("crypto")
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <span className={`text-[12px] sm:text-[15.5px] leading-tight ${markets.includes("crypto") ? "text-white" : "text-[#0F172A]"}`}>
//                 Digital Assets
//               </span>
//             </button>

//             <button
//               type="button"
//               onClick={() => toggleMarket("stocks")}
//               className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
//                 markets.includes("stocks")
//                   ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
//                   : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
//               }`}
//             >
//               <span className={`text-[14px] sm:text-[15.5px] leading-tight ${markets.includes("stocks") ? "text-white" : "text-[#0F172A]"}`}>
//                 Equities
//               </span>
//             </button>
//           </div>

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
//                 <span>Proceed to Payment & Checkout</span>
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
//           <div className="w-full max-w-[440px] lg:max-w-[1200px] my-auto bg-emerald-50 sm:bg-transparent rounded-[45px]">
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
//                   Select allocation tier
//                 </h2>
//               </div>

//               <div className="w-full lg:bg-emerald-100/60 lg:rounded-[28px] lg:p-5">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 items-stretch">
                  
//                   {/* Starter Tier */}
//                   <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
//                     <div>
//                       <h3 className="font-mazzard text-[18px] sm:text-[20px] text-[#0F172A] font-bold tracking-tight">
//                         STARTER TIER
//                       </h3>
//                       <div className="font-mazzard text-[20px] sm:text-[24px] text-[#059669] font-bold mt-0.5">
//                         $3,000
//                       </div>
//                       <p className="text-[12px] text-slate-400 font-medium mt-2">
//                         Minimum Capital Allocation
//                       </p>
//                       <p className="text-[11.5px] text-slate-500 font-normal leading-relaxed mt-1">
//                         Ideal for individuals starting structured asset growth with dependable monthly allocations.
//                       </p>
//                       <div className="w-full h-px bg-slate-200 my-3" />
//                       <ul className="space-y-1.5 text-[11px] sm:text-[11.5px]">
//                         {starterIncluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-1.5 text-slate-800 font-normal">
//                             <CheckIcon className="w-3 h-3 text-[#059669] flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="mt-6 pt-2">
//                       <button
//                         type="button"
//                         onClick={() => handleSelectPlanAndProceed("starter")}
//                         className="w-full py-3 px-4 bg-slate-900 hover:bg-[#059669] active:scale-[0.99] text-white text-[13px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
//                       >
//                         Allocate $3K
//                       </button>
//                     </div>
//                   </div>

//                   {/* Growth Tier */}
//                   <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
//                     <div>
//                       <h3 className="font-mazzard text-[18px] sm:text-[20px] text-[#0F172A] font-bold tracking-tight">
//                         GROWTH TIER
//                       </h3>
//                       <div className="font-mazzard text-[20px] sm:text-[24px] text-[#059669] font-bold mt-0.5">
//                         $5,000
//                       </div>
//                       <p className="text-[12px] text-slate-400 font-medium mt-2">
//                         Minimum Capital Allocation
//                       </p>
//                       <p className="text-[11.5px] text-slate-500 font-normal leading-relaxed mt-1">
//                         Balanced portfolio tier optimized for enhanced yields and compounding returns.
//                       </p>
//                       <div className="w-full h-px bg-slate-200 my-3" />
//                       <ul className="space-y-1.5 text-[11px] sm:text-[11.5px]">
//                         {growthIncluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-1.5 text-slate-800 font-normal">
//                             <CheckIcon className="w-3 h-3 text-[#059669] flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="mt-6 pt-2">
//                       <button
//                         type="button"
//                         onClick={() => handleSelectPlanAndProceed("growth")}
//                         className="w-full py-3 px-4 bg-slate-900 hover:bg-[#059669] active:scale-[0.99] text-white text-[13px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
//                       >
//                         Allocate $5K
//                       </button>
//                     </div>
//                   </div>

//                   {/* Executive Tier (Featured) */}
//                   <div className="bg-[#059669] text-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-lg shadow-emerald-500/25 relative">
//                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[#040C26] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm whitespace-nowrap">
//                       Most Popular
//                     </div>
//                     <div className="mt-1">
//                       <h3 className="font-mazzard text-[18px] sm:text-[20px] text-white font-bold tracking-tight">
//                         EXECUTIVE TIER
//                       </h3>
//                       <div className="font-mazzard text-[20px] sm:text-[24px] text-white font-bold mt-0.5">
//                         $25,000
//                       </div>
//                       <p className="text-[12px] text-white/90 font-medium mt-2">
//                         Minimum Capital Allocation
//                       </p>
//                       <p className="text-[11.5px] text-white/85 font-normal leading-relaxed mt-1">
//                         High-allocation portfolio engineered for robust yields and customized risk management.
//                       </p>
//                       <div className="w-full h-px bg-white/20 my-3" />
//                       <ul className="space-y-1.5 text-[11px] sm:text-[11.5px]">
//                         {executiveIncluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-1.5 text-white font-normal">
//                             <CheckIcon className="w-3 h-3 text-white flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="mt-6 pt-2">
//                       <button
//                         type="button"
//                         onClick={() => handleSelectPlanAndProceed("executive")}
//                         className="w-full py-3 px-4 bg-white hover:bg-slate-50 active:scale-[0.99] text-[#059669] text-[13px] font-semibold rounded-full text-center transition-all shadow-md cursor-pointer"
//                       >
//                         Allocate $25K
//                       </button>
//                     </div>
//                   </div>

//                   {/* Institutional Tier */}
//                   <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
//                     <div>
//                       <h3 className="font-mazzard text-[18px] sm:text-[20px] text-[#0F172A] font-bold tracking-tight">
//                         INSTITUTIONAL
//                       </h3>
//                       <div className="font-mazzard text-[20px] sm:text-[24px] text-[#059669] font-bold mt-0.5">
//                         $100,000
//                       </div>
//                       <p className="text-[12px] text-slate-400 font-medium mt-2">
//                         Minimum Capital Allocation
//                       </p>
//                       <p className="text-[11.5px] text-slate-500 font-normal leading-relaxed mt-1">
//                         Tailored multi-account architecture for family offices and institutional wealth managers.
//                       </p>
//                       <div className="w-full h-px bg-slate-200 my-3" />
//                       <ul className="space-y-1.5 text-[11px] sm:text-[11.5px]">
//                         {institutionalIncluded.map((feat, i) => (
//                           <li key={i} className="flex items-center gap-1.5 text-slate-800 font-normal">
//                             <CheckIcon className="w-3 h-3 text-[#059669] flex-shrink-0" />
//                             <span className="leading-snug">{feat}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="mt-6 pt-2">
//                       <button
//                         type="button"
//                         onClick={() => handleSelectPlanAndProceed("institutional")}
//                         className="w-full py-3 px-4 bg-slate-900 hover:bg-[#059669] active:scale-[0.99] text-white text-[13px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
//                       >
//                         Allocate $100K+
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
import { api } from "@/lib/api";

type ExperienceLevel = "beginner" | "intermediate" | "advanced";
type MarketType = "forex" | "crypto" | "stocks";
type GoalType = "fundamentals" | "consistency" | "side_income";

// UNIFIED SYSTEM SLUGS (Matches backend Enums exactly)
type PlanTier = "starter-tier" | "growth-tier" | "executive-tier" | "institutional";

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
  
  // Default unified tier state
  const [selectedPlan, setSelectedPlan] = useState<PlanTier>("growth-tier");
  
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
        // Enums mapped strictly to the backend InvestorProfile schema
        const experienceMap = {
          beginner: "Retail/Novice",
          intermediate: "Experienced",
          advanced: "Algorithmic"
        };
        
        // Match risk tolerance to the goal to satisfy backend requirements safely
        const riskMap = {
          fundamentals: "Conservative",
          consistency: "Moderate",
          side_income: "Aggressive"
        };

        const payload = {
          experienceLevel: experienceMap[experience],
          marketsOfInterest: markets,
          primaryGoal: goal,
          riskTolerance: riskMap[goal] || "Moderate",
          planTier: selectedPlan
        };

        // 1. Submit Onboarding Profile details
        await completeOnboarding(payload);

        // 2. Initialize Crypto / BTCPay Payment Gateway Invoice
        const { data } = await api.post("/payments/crypto/subscribe", {
          slug: selectedPlan
        });

        // Add flexible checkoutUrl mapping just in case the backend nests it inside `data.data`
        const checkoutUrl = data?.checkoutUrl || data?.data?.checkoutUrl;

        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        } else {
          router.push("/dashboard");
        }
      } catch (error: any) {
        setErrorMessage(error.response?.data?.message || "Failed to complete telemetry synchronization.");
        setIsLoading(false);
      }
    }
  };

  const handleSelectPlanAndProceed = (plan: PlanTier) => {
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

  // Ensure these feature arrays match the tier offerings exactly
  const starterIncluded = [
    "Monthly dividend disbursements",
    "Automated risk management",
    "Standard asset protection",
    "Client dashboard access",
    "Email support",
  ];

  const growthIncluded = [
    "Everything in Starter Tier",
    "Bi-weekly yield compounding options",
    "Advanced risk mitigation protocols",
    "Priority asset protection tier",
    "Dedicated account manager",
    "24/7 priority support",
  ];

  const executiveIncluded = [
    "Everything in Growth Tier",
    "Immediate weekly yield liquidity",
    "Customized algorithmic hedging",
    "Enterprise-grade cold storage",
    "Private advisory sessions",
    "Direct concierge support",
  ];

  const institutionalIncluded = [
    "Everything in Executive Tier",
    "Dedicated private wealth desk",
    "Custom treasury integration",
    "Direct board-level reporting",
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
            {selectedPlan.replace('-tier', '').toUpperCase()} MANDATE ACTIVE
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

      {/* STEP 2 */}
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

          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
            <button
              type="button"
              onClick={() => setExperience("beginner")}
              className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                experience === "beginner"
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <span className={`text-[12px] sm:text-[15px] font-semibold leading-tight ${experience === "beginner" ? "text-white" : "text-[#0F172A]"}`}>
                Starter ($3k)
              </span>
              <span className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${experience === "beginner" ? "text-emerald-100" : "text-slate-600"}`}>
                Starter capital allocation tier
              </span>
            </button>

            <button
              type="button"
              onClick={() => setExperience("intermediate")}
              className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                experience === "intermediate"
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <span className={`text-[12px] sm:text-[15px] font-semibold leading-tight ${experience === "intermediate" ? "text-white" : "text-[#0F172A]"}`}>
                Growth ($5k)
              </span>
              <span className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${experience === "intermediate" ? "text-emerald-100" : "text-slate-600"}`}>
                Optimized balanced yield tier
              </span>
            </button>

            <button
              type="button"
              onClick={() => setExperience("advanced")}
              className={`w-full aspect-[1/1.14] p-2.5 sm:p-4 rounded-[26px] sm:rounded-[32px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                experience === "advanced"
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <span className={`text-[12px] sm:text-[15px] font-semibold leading-tight ${experience === "advanced" ? "text-white" : "text-[#0F172A]"}`}>
                Executive ($25k+)
              </span>
              <span className={`mt-1 text-[10px] sm:text-[11px] leading-tight ${experience === "advanced" ? "text-emerald-100" : "text-slate-600"}`}>
                High-allocation institutional tier
              </span>
            </button>
          </div>

          <div className="p-4 sm:p-5 rounded-[22px] bg-[#ecfdf5] border border-emerald-200 text-slate-700 text-[12px] sm:text-[13px] leading-relaxed">
            {experience === "beginner" && (
              <p>
                <strong className="text-slate-900 font-semibold">Starter Mandate ($3,000):</strong> Monthly dividend disbursements, automated risk management, and standard asset protection.
              </p>
            )}
            {experience === "intermediate" && (
              <p>
                <strong className="text-slate-900 font-semibold">Growth Mandate ($5,000):</strong> Bi-weekly yield compounding options, advanced risk mitigation protocols, and a dedicated account manager.
              </p>
            )}
            {experience === "advanced" && (
              <p>
                <strong className="text-slate-900 font-semibold">Executive / Institutional Mandate ($25,000+):</strong> Immediate weekly liquidity, customized algorithmic hedging, and direct concierge support.
              </p>
            )}
          </div>

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
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14 6 20 12 14 18" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* STEP 3 */}
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

          <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
            <button
              type="button"
              onClick={() => toggleMarket("forex")}
              className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                markets.includes("forex")
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <span className={`text-[12px] sm:text-[15.5px] leading-tight ${markets.includes("forex") ? "text-white" : "text-[#0F172A]"}`}>
                FX Currencies
              </span>
            </button>
            <button
              type="button"
              onClick={() => toggleMarket("crypto")}
              className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                markets.includes("crypto")
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <span className={`text-[12px] sm:text-[15.5px] leading-tight ${markets.includes("crypto") ? "text-white" : "text-[#0F172A]"}`}>
                Digital Assets
              </span>
            </button>
            <button
              type="button"
              onClick={() => toggleMarket("stocks")}
              className={`w-full aspect-[1/1.08] p-3 sm:p-4 rounded-[26px] sm:rounded-[30px] flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                markets.includes("stocks")
                  ? "bg-[#059669] text-white border border-[#047857] shadow-md shadow-emerald-500/20"
                  : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border border-emerald-200"
              }`}
            >
              <span className={`text-[14px] sm:text-[15.5px] leading-tight ${markets.includes("stocks") ? "text-white" : "text-[#0F172A]"}`}>
                Equities
              </span>
            </button>
          </div>

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

          <div className="flex items-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="py-3.5 sm:py-4 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[15px] rounded-full transition-all cursor-pointer"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleContinueFromStep}
              disabled={isLoading}
              className="flex-1 py-3.5 sm:py-4 px-6 bg-[#047857] hover:bg-[#065f46] active:scale-[0.99] text-white font-medium text-[15px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-sm"
            >
              {isLoading ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Continue</span>
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* STEP 4 */}
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

          <div className="flex items-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => setStep(3)} // Allow user to go back and open modal again
              className="py-3 sm:py-3.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[13.5px] sm:text-[15px] rounded-full transition-all cursor-pointer"
            >
              Back
            </button>

            <button
              type="button"
              onClick={handleContinueFromStep}
              disabled={isLoading}
              className="flex-1 py-3 sm:py-3.5 px-5 bg-[#047857] hover:bg-[#065f46] active:scale-[0.99] text-white font-medium text-[13.5px] sm:text-[15px] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-xs"
            >
              {isLoading ? (
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Proceed to Payment</span>
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 h-screen overflow-hidden">
      {/* Top Logo (Active during modal) */}
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

      {/* Main Grid for Desktop */}
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

      {/* Main Grid for Mobile */}
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

      {/* PLAN MODAL (All 4 Cards Fully Restored) */}
      {showPlanModal && (
        <div className="fixed inset-0 z-50 bg-white sm:bg-[#ecfdf5] lg:bg-slate-900/10 lg:backdrop-blur-xs overflow-y-auto p-2.5 sm:p-4 lg:p-6 flex items-start lg:items-center justify-center animate-in fade-in duration-200">
          <div className="w-full max-w-[440px] lg:max-w-[1200px] my-auto bg-emerald-50 sm:bg-transparent rounded-[45px]">
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
              <div className="mb-4 sm:mb-6 mt-4 sm:mt-0 flex justify-between items-center">
                <h2 className="font-mazzard text-[24px] sm:text-[28px] lg:text-[36px] text-[#0F172A] font-semibold tracking-tight leading-none">
                  Select allocation tier
                </h2>
                {/* Optional button to close modal and return to Step 3 */}
                <button 
                  onClick={() => setShowPlanModal(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <Icon icon="lucide:x" className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="w-full lg:bg-emerald-100/60 lg:rounded-[28px] lg:p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 items-stretch">
                  
                  {/* Card 1: Starter Tier */}
                  <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
                    <div>
                      <h3 className="font-mazzard text-[18px] sm:text-[20px] text-[#0F172A] font-bold tracking-tight">
                        STARTER TIER
                      </h3>
                      <div className="font-mazzard text-[20px] sm:text-[24px] text-[#059669] font-bold mt-0.5">
                        $3,000
                      </div>
                      <p className="text-[12px] text-slate-400 font-medium mt-2">Minimum Capital Allocation</p>
                      <p className="text-[11.5px] text-slate-500 font-normal leading-relaxed mt-1">
                        Ideal for individuals starting structured asset growth with dependable monthly allocations.
                      </p>
                      <div className="w-full h-px bg-slate-200 my-3" />
                      <ul className="space-y-1.5 text-[11px] sm:text-[11.5px]">
                        {starterIncluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-slate-800 font-normal">
                            <CheckIcon className="w-3 h-3 text-[#059669] flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectPlanAndProceed("starter-tier")}
                        className="w-full py-3 px-4 bg-slate-900 hover:bg-[#059669] active:scale-[0.99] text-white text-[13px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
                      >
                        Allocate $3K
                      </button>
                    </div>
                  </div>

                  {/* Card 2: Growth Tier */}
                  <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
                    <div>
                      <h3 className="font-mazzard text-[18px] sm:text-[20px] text-[#0F172A] font-bold tracking-tight">
                        GROWTH TIER
                      </h3>
                      <div className="font-mazzard text-[20px] sm:text-[24px] text-[#059669] font-bold mt-0.5">
                        $5,000
                      </div>
                      <p className="text-[12px] text-slate-400 font-medium mt-2">Minimum Capital Allocation</p>
                      <p className="text-[11.5px] text-slate-500 font-normal leading-relaxed mt-1">
                        Balanced portfolio tier optimized for enhanced yields and compounding returns.
                      </p>
                      <div className="w-full h-px bg-slate-200 my-3" />
                      <ul className="space-y-1.5 text-[11px] sm:text-[11.5px]">
                        {growthIncluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-slate-800 font-normal">
                            <CheckIcon className="w-3 h-3 text-[#059669] flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectPlanAndProceed("growth-tier")}
                        className="w-full py-3 px-4 bg-slate-900 hover:bg-[#059669] active:scale-[0.99] text-white text-[13px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
                      >
                        Allocate $5K
                      </button>
                    </div>
                  </div>

                  {/* Card 3: Executive Tier (Featured) */}
                  <div className="bg-[#059669] text-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-lg shadow-emerald-500/25 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[#040C26] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                      Most Popular
                    </div>
                    <div className="mt-1">
                      <h3 className="font-mazzard text-[18px] sm:text-[20px] text-white font-bold tracking-tight">
                        EXECUTIVE TIER
                      </h3>
                      <div className="font-mazzard text-[20px] sm:text-[24px] text-white font-bold mt-0.5">
                        $25,000
                      </div>
                      <p className="text-[12px] text-white/90 font-medium mt-2">Minimum Capital Allocation</p>
                      <p className="text-[11.5px] text-white/85 font-normal leading-relaxed mt-1">
                        High-allocation portfolio engineered for robust yields and customized risk management.
                      </p>
                      <div className="w-full h-px bg-white/20 my-3" />
                      
                      {/* 🚀 FULLY RESTORED EXECUTIVE FEATURES LIST */}
                      <ul className="space-y-1.5 text-[11px] sm:text-[11.5px]">
                        {executiveIncluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-white font-normal">
                            <CheckIcon className="w-3 h-3 text-white flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectPlanAndProceed("executive-tier")}
                        className="w-full py-3 px-4 bg-white hover:bg-slate-50 active:scale-[0.99] text-[#059669] text-[13px] font-semibold rounded-full text-center transition-all shadow-md cursor-pointer"
                      >
                        Allocate $25K
                      </button>
                    </div>
                  </div>

                  {/* Card 4: Institutional Tier */}
                  <div className="bg-white rounded-[22px] sm:rounded-[26px] p-5 sm:p-6 flex flex-col justify-between shadow-sm border border-slate-100 lg:border-emerald-100">
                    <div>
                      <h3 className="font-mazzard text-[18px] sm:text-[20px] text-[#0F172A] font-bold tracking-tight">
                        INSTITUTIONAL
                      </h3>
                      <div className="font-mazzard text-[20px] sm:text-[24px] text-[#059669] font-bold mt-0.5">
                        $100,000
                      </div>
                      <p className="text-[12px] text-slate-400 font-medium mt-2">Minimum Capital Allocation</p>
                      <p className="text-[11.5px] text-slate-500 font-normal leading-relaxed mt-1">
                        Tailored multi-account architecture for family offices and institutional wealth managers.
                      </p>
                      <div className="w-full h-px bg-slate-200 my-3" />
                      
                      {/* 🚀 FULLY RESTORED INSTITUTIONAL FEATURES LIST */}
                      <ul className="space-y-1.5 text-[11px] sm:text-[11.5px]">
                        {institutionalIncluded.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-slate-800 font-normal">
                            <CheckIcon className="w-3 h-3 text-[#059669] flex-shrink-0" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectPlanAndProceed("institutional")}
                        className="w-full py-3 px-4 bg-slate-900 hover:bg-[#059669] active:scale-[0.99] text-white text-[13px] font-medium rounded-full text-center transition-all cursor-pointer shadow-xs"
                      >
                        Allocate $100K+
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
