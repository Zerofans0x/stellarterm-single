


"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function LegalContent({ defaultTab = "terms" }: { defaultTab?: "terms" | "privacy" }) {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy">(defaultTab);

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-14 pt-4 pb-16 sm:py-24">
        <h1 className="font-mazzard text-[32px] sm:text-[56px] text-[#0f172a] tracking-tight mb-8 sm:mb-12">
          {activeTab === "terms" ? "Terms of service" : "Privacy Policy"}
        </h1>

        {/* Tabs */}
        <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("terms")}
            className="flex flex-col items-center group cursor-pointer w-[100px] sm:w-[160px]"
          >
            <span
              className={`text-[15px] sm:text-[18px] font-medium transition-colors pb-2 sm:pb-3 ${
                activeTab === "terms"
                  ? "text-[#059669]"
                  : "text-slate-400 group-hover:text-slate-600"
              }`}
            >
              Terms
            </span>
            <div
              className={`w-full h-[3px] sm:h-[3.5px] rounded-full transition-all ${
                activeTab === "terms"
                  ? "bg-[#059669]"
                  : "bg-[#b8c2cc] group-hover:bg-slate-400"
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("privacy")}
            className="flex flex-col items-center group cursor-pointer w-[100px] sm:w-[160px]"
          >
            <span
              className={`text-[15px] sm:text-[18px] font-medium transition-colors pb-2 sm:pb-3 ${
                activeTab === "privacy"
                  ? "text-[#059669]"
                  : "text-slate-400 group-hover:text-slate-600"
              }`}
            >
              Privacy
            </span>
            <div
              className={`w-full h-[3px] sm:h-[3.5px] rounded-full transition-all ${
                activeTab === "privacy"
                  ? "bg-[#059669]"
                  : "bg-[#b8c2cc] group-hover:bg-slate-400"
              }`}
            />
          </button>
        </div>

        {/* Content Box */}
        <div className="w-full max-w-[1000px] mx-auto bg-transparent sm:bg-[#f8fafc] rounded-[32px] sm:rounded-[44px] p-0 sm:p-12 md:p-16">
          {activeTab === "terms" && (
            <div className="space-y-8 sm:space-y-12">
              <section>
                <h2 className="text-[#059669] text-[19px] sm:text-[26px] font-medium mb-3 sm:mb-4">
                  1. About Our Services
                </h2>
                <div className="text-[12.5px] sm:text-[14px] text-slate-800 leading-[1.65] sm:leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                    MyStellarTerm is an asset management and capital growth platform providing structured investment portfolios, automated yields, market analytics, risk management frameworks, client dashboards, and secure disbursements.
                    Our services are designed to help users allocate capital effectively and generate consistent returns. We maintain rigorous asset protection and transparency across all tiers, though we do not guarantee specific returns beyond stated portfolio parameters.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  2. Financial Disclaimer
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    All information provided by MyStellarTerm is for informational and asset allocation purposes
                    only. Our content and portfolio options should not be considered personalized financial, legal, or tax advice. Any market strategies, performance projections, or analytics presented are intended to demonstrate structural portfolio concepts.
                  </p>
                  <p>
                    You are responsible for conducting your own research and managing your individual capital allocations.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  3. Capital Risk & Yields
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Allocating capital into digital asset markets and structured portfolios involves inherent risk.
                    Past performance, historical results, and projected yields do not guarantee future outcomes. Market conditions can fluctuate, and capital allocations carry associated risks.
                    MyStellarTerm implements institutional-grade risk management and cold storage protocols, but users acknowledge that capital deployment involves market exposure.
                  </p>
                  <p>Only allocate capital you are prepared to manage strategically.</p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  4. User Account & Security
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Accessing your client dashboard requires an account. You agree to provide accurate information
                    and maintain the security of your credentials, including enabling multi-factor authentication (2FA).
                    You are responsible for all actions taken through your account and must notify us immediately of any unauthorized access.
                    Accounts must not be shared or transferred.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  5. Portfolio Tiers & Digital Assets
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Capital deposits and portfolio selections operate according to the terms specified at the time of allocation. Yields are credited based on your chosen tier schedule (monthly or annual). 
                    Users may not attempt to reverse-engineer, exploit, or bypass platform infrastructure or security controls.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  6. Deposits, Withdrawals & Disbursements
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    All deposits, portfolio selections, and withdrawal requests are processed according to our verified platform pipelines. 
                    Disbursements are credited to user dashboards based on active portfolio schedules and can be routed to designated external crypto wallets securely.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  7. Intellectual Property
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    All content belonging to MyStellarTerm, including our logo, branding, website design, software architecture, dashboards, graphics, and written materials, is protected by applicable intellectual-property laws.
                    You may use our platform for personal investment purposes but may not reproduce, modify, distribute, or commercially exploit our proprietary systems.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  8. Platform Conduct
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Users must interact with our platform and support channels responsibly. 
                    Any attempt to distribute spam, fraudulent data, malicious scripts, or engage in unauthorized system penetration will result in immediate account termination.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  9. Security & Infrastructure
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    We maintain enterprise-grade encryption and cold storage protocols for asset security. 
                    While we deploy rigorous defense systems, digital platforms face dynamic operational environments, and users acknowledge standard digital asset security parameters.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  10. Client Testimonials & Metrics
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Performance metrics, yields, and testimonials displayed across our platform reflect real client allocations and structured portfolio tiers. 
                    Individual results may vary based on selected allocation tiers, deposit sizes, and duration.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  11. Limitation of Liability
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    To the maximum extent permitted by applicable law, MyStellarTerm, its operators,
                    affiliates, and partners will not be held liable for market-related capital fluctuations resulting from external market conditions beyond our structured portfolio controls.
                  </p>
                </div>
              </section>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="space-y-12">
              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  1. Information We Collect
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    We collect information you provide when you register an account, select a portfolio tier, contact
                    our support desk, or interact with our secure platform.
                  </p>
                  <p>This may include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Full name and contact details</li>
                    <li>Email address</li>
                    <li>Account credentials and 2FA data</li>
                    <li>Portfolio transaction records</li>
                    <li>Support communications</li>
                  </ul>
                  <p>
                    We also automatically collect technical telemetry such as IP addresses, browser types, and encrypted session metadata.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Manage your secure client dashboard</li>
                    <li>Process portfolio capital allocations and disbursements</li>
                    <li>Provide responsive client support</li>
                    <li>Enhance platform security and fraud prevention</li>
                    <li>Comply with regulatory and legal requirements</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  3. Payment & Transaction Security
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Transactions are processed using enterprise encryption and secure cryptographic protocols. 
                    MyStellarTerm adheres to strict privacy standards to safeguard your deposit records and yield disbursements.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  4. Cookies & Analytics
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    We utilize cookies and session identifiers to maintain user authentication, secure your dashboard navigation, and optimize platform speed.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  5. Data Confidentiality & Sharing
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>We do not sell or trade your personal information.</p>
                  <p>Data sharing is strictly restricted to essential infrastructure partners required for secure hosting, encrypted communications, and compliance audits.</p>
                </div>
              </section>

              <section>
                <h2 className="text-[#059669] text-[22px] sm:text-[26px] font-medium mb-4">
                  6. Data Protection Standards
                </h2>
                <div className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed space-y-4">
                  <p>
                    We deploy robust administrative, technical, and physical security measures—including cold storage architectures and encrypted databases—to protect your personal information against unauthorized access.
                  </p>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}