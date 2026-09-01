"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AuthHeroCard from "@/components/auth/AuthHeroCard";

export default function OnboardingExperiencePage() {
  const router = useRouter();
  const [tier, setTier] = useState<string>("growth-tier");

  const handleNext = () => {
    // Store in session storage to carry across steps
    sessionStorage.setItem("onboarding_tier", tier);
    router.push("/onboarding/markets");
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
            illustrationSrc="/images/auth/onboarding-one-img.png"
            illustrationPosition="-translate-y-16"
            illustrationWidth="w-[720px]"
            cardWidth="w-[750px]"
            showBlurOverlay={false}
            imagesWidth="w-full sm:w-[420px] -translate-y-10"
            title={<>Capital deployment <br /> starts with scale <br /><span className="text-[#059669]">governance and precision.</span></>}
            subtitle="Define your institutional mandate. Calibrating your capital tier ensures optimal risk-adjusted allocation."
          />
        </div>
        <div className="col-span-6 flex items-center justify-start pl-10 h-full overflow-y-auto">
          <div className="w-full max-w-[460px] flex flex-col justify-center py-8 my-auto">
            <div className="grid grid-cols-4 gap-2 mb-6 max-w-[280px]">
              <div className="h-1.5 rounded-full bg-[#0A111E]" />
              <div className="h-1.5 rounded-full bg-[#E2E8F0]" />
              <div className="h-1.5 rounded-full bg-[#E2E8F0]" />
              <div className="h-1.5 rounded-full bg-[#E2E8F0]" />
            </div>

            <h2 className="font-mazzard text-[34px] text-[#0A1A32] font-semibold tracking-tight leading-tight mb-3">
              Select your capital tier
            </h2>
            <p className="text-[14px] text-slate-600 mb-6">
              Configure your asset deployment scale to align risk parameters.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { id: "starter-tier", label: "Starter Tier ($3,000)", desc: "Monthly dividend disbursements & automated risk management" },
                { id: "growth-tier", label: "Growth Tier ($5,000)", desc: "Bi-weekly compounding options & advanced risk mitigation" },
                { id: "executive-tier", label: "Executive Tier ($25,000)", desc: "Immediate weekly liquidity & algorithmic hedging" },
                { id: "institutional", label: "Institutional ($100,000+)", desc: "Dedicated private wealth desk & custom treasury integration" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTier(item.id)}
                  className={`w-full p-4 rounded-[20px] text-left transition-all cursor-pointer border ${
                    tier === item.id
                      ? "bg-[#059669] text-white border-[#047857] shadow-md"
                      : "bg-[#ecfdf5] text-slate-800 hover:bg-[#d1fae5] border-emerald-200"
                  }`}
                >
                  <div className="font-semibold text-[15px]">{item.label}</div>
                  <div className={`text-[12px] mt-0.5 ${tier === item.id ? "text-emerald-100" : "text-slate-500"}`}>
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full py-4 bg-[#047857] hover:bg-[#065f46] text-white font-medium text-[15px] rounded-full transition-all cursor-pointer shadow-sm"
            >
              Continue to Markets
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}