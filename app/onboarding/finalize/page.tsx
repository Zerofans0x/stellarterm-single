

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import AuthHeroCard from "@/components/auth/AuthHeroCard";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";

export default function OnboardingFinalizePage() {
  const router = useRouter();
  const { completeOnboarding } = useAuth();
  
  const [tier, setTier] = useState("growth-tier");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedTier = sessionStorage.getItem("onboarding_tier");
    if (savedTier) setTier(savedTier);
  }, []);

  const handleFinalizeAndPay = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const markets = JSON.parse(sessionStorage.getItem("onboarding_markets") || '["forex"]');
      const goal = sessionStorage.getItem("onboarding_goal") || "fundamentals";

      const riskMap: Record<string, string> = {
        fundamentals: "Conservative",
        consistency: "Moderate",
        side_income: "Aggressive",
      };

      const payload = {
        experienceLevel: "Experienced",
        marketsOfInterest: markets,
        primaryGoal: goal,
        riskTolerance: riskMap[goal] || "Moderate",
        planTier: tier,
      };

      // 1. Save telemetry profile
      await completeOnboarding(payload);

      // 2. Map frontend tier format to backend expected enum keys to prevent rejection
      const slugToBackendKeyMap: Record<string, string> = {
        "starter-tier": "STARTER_TIER",
        "growth-tier": "GROWTH_TIER",
        "executive-tier": "EXECUTIVE_TIER",
        "institutional": "INSTITUTIONAL",
      };

      const backendFormattedSlug = slugToBackendKeyMap[tier] || tier;

      // 3. Request Crypto Invoice from backend with mapped slug
      const { data } = await api.post("/payments/crypto/subscribe", {
        slug: backendFormattedSlug
      });

      const checkoutUrl = data?.checkoutUrl || data?.data?.checkoutUrl;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        router.push("/dashboard");
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Failed to initialize subscription gateway.");
      setIsLoading(false);
    }
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
            illustrationSrc="/images/auth/onboarding-three-img.png"
            illustrationPosition="-translate-y-12"
            cardWidth="w-[750px]"
            bgColor="bg-[#ecfdf5]"
            showBlurOverlay={false}
            showSocialProof={false}
            badge={<span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#059669] font-semibold text-[11px] uppercase">{tier.replace('-tier', '')} MANDATE</span>}
            title={<>Mandate initialized <br /><span className="text-[#059669]">Access granted</span></>}
            subtitle="Your institutional portfolio architecture is loaded. Initializing quantitative telemetry."
          />
        </div>
        <div className="col-span-6 flex items-center justify-start pl-10 h-full overflow-y-auto">
          <div className="w-full max-w-[460px] flex flex-col justify-center py-8 my-auto">
            <div className="grid grid-cols-4 gap-2 mb-6 max-w-[280px]">
              <div className="h-1.5 rounded-full bg-[#0A111E]" />
              <div className="h-1.5 rounded-full bg-[#0A111E]" />
              <div className="h-1.5 rounded-full bg-[#0A111E]" />
              <div className="h-1.5 rounded-full bg-[#0A111E]" />
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-[14px] bg-rose-50 border border-rose-200 text-rose-600 text-[12px] flex items-center gap-2">
                <Icon icon="lucide:alert-circle" className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <h2 className="font-mazzard text-[32px] text-[#0F172A] tracking-tight leading-tight mb-2">
              Terminal architecture overview
            </h2>
            <p className="text-[13.5px] text-slate-500 mb-6">
              Reviewing configuration and generating secure gateway invoice for <strong className="text-slate-900 uppercase">{tier}</strong>.
            </p>

            <div className="space-y-2.5 mb-8">
              {[
                { id: 1, title: "Telemetry Dashboard", desc: "Real-time portfolio allocation and drawdown tracking." },
                { id: 2, title: "Execution Modules", desc: "Quantitative frameworks for live market deployment." },
                { id: 3, title: "Compliance & Risk", desc: "Automated safety circuit breakers." },
              ].map((item) => (
                <div key={item.id} className="p-3.5 rounded-[16px] bg-[#ecfdf5] border border-emerald-200 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border border-slate-700 text-slate-700 font-semibold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[13.5px] text-slate-900">{item.title}</h4>
                    <p className="text-[11.5px] text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => router.push("/onboarding/markets")}
                className="py-3.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-full cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleFinalizeAndPay}
                disabled={isLoading}
                className="flex-1 py-3.5 px-6 bg-[#047857] hover:bg-[#065f46] text-white font-medium rounded-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-xs"
              >
                {isLoading ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span>Proceed to Crypto Payment</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}