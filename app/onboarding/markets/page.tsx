"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AuthHeroCard from "@/components/auth/AuthHeroCard";

export default function OnboardingMarketsPage() {
  const router = useRouter();
  const [markets, setMarkets] = useState<string[]>(["forex"]);
  const [goal, setGoal] = useState<string>("fundamentals");

  const toggleMarket = (m: string) => {
    setMarkets(prev => prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]);
  };

  const handleNext = () => {
    sessionStorage.setItem("onboarding_markets", JSON.stringify(markets));
    sessionStorage.setItem("onboarding_goal", goal);
    router.push("/onboarding/finalize");
  };

  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 h-screen overflow-hidden">
      <div className="absolute top-6 sm:top-8 left-6 sm:left-12 lg:left-16 z-40">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="stellarterm" width={160} height={38} className="h-7 sm:h-8 w-auto object-contain" priority />
        </Link>
      </div>

      <main className="hidden lg:grid w-full h-full max-w-[1400px] mx-auto grid-cols-12 gap-12 items-center p-8">
        <div className="col-span-6">
          <AuthHeroCard
            illustrationSrc="/images/auth/oboarding-two-img.png"
            illustrationPosition=""
            cardWidth="w-[750px]"
            showBlurOverlay={false}
            imagesWidth="w-full sm:w-[420px] -translate-y-10"
            title={<>Macro exposure <br /><span className="text-[#059669]">demands focused liquidity.</span></>}
            subtitle="Select your primary execution markets and objective frameworks."
          />
        </div>
        <div className="col-span-6 flex items-center justify-start pl-10 h-full overflow-y-auto">
          <div className="w-full max-w-[460px] flex flex-col justify-center py-8 my-auto">
            <div className="grid grid-cols-4 gap-2 mb-6 max-w-[280px]">
              <div className="h-1.5 rounded-full bg-[#0A111E]" />
              <div className="h-1.5 rounded-full bg-[#0A111E]" />
              <div className="h-1.5 rounded-full bg-[#0A111E]" />
              <div className="h-1.5 rounded-full bg-[#E2E8F0]" />
            </div>

            <h2 className="font-mazzard text-[34px] text-[#0A1A32] font-semibold tracking-tight leading-tight mb-3">
              Target liquidity pools
            </h2>
            <p className="text-[14px] text-slate-600 mb-6">
              Select your primary execution instruments.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {["forex", "crypto", "stocks"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => toggleMarket(m)}
                  className={`py-4 rounded-[20px] text-center font-medium capitalize border transition-all cursor-pointer ${
                    markets.includes(m)
                      ? "bg-[#059669] text-white border-[#047857]"
                      : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border-emerald-200"
                  }`}
                >
                  {m === "forex" ? "FX Currencies" : m === "crypto" ? "Digital Assets" : "Equities"}
                </button>
              ))}
            </div>

            <div className="space-y-2.5 mb-8">
              {[
                { id: "fundamentals", label: "Systematic quantitative infrastructure deployment" },
                { id: "consistency", label: "Proprietary risk mitigation & capital scaling" },
                { id: "side_income", label: "High-yield algorithmic return generation" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setGoal(item.id)}
                  className={`w-full py-3.5 px-5 rounded-[16px] text-left text-[14px] transition-all cursor-pointer border ${
                    goal === item.id
                      ? "bg-[#059669] text-white border-[#047857]"
                      : "bg-[#ecfdf5] text-slate-700 hover:bg-[#d1fae5] border-emerald-200"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => router.push("/onboarding/experience")}
                className="py-4 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-full cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 py-4 bg-[#047857] hover:bg-[#065f46] text-white font-medium rounded-full cursor-pointer shadow-sm"
              >
                Review & Proceed
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}