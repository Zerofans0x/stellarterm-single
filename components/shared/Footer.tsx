import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#022c22] pt-16 sm:pt-20 pb-10">
      <div className="w-full max-w-[1260px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-12 sm:gap-16 md:gap-12">
          
          {/* Left Column - Logo and Description */}
          <div className="max-w-xs">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-light.png"
                alt="MyStellarTerm"
                width={180}
                height={42}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-5 sm:mt-6 text-[#94a3b8] text-[12px] sm:text-[13px] leading-[1.7] sm:leading-[1.8] font-normal sm:font-medium">
              A secure and transparent asset management <br />
              ecosystem for investors who are serious <br />
              about growing their capital.
            </p>
          </div>

          {/* Right Columns - Links */}
          <div className="grid grid-cols-3 gap-6 sm:gap-16 md:gap-24">
            
            {/* Column 1 - Platform */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <h4 className="text-[#34d399] text-[11px] sm:text-[12px] tracking-[0.08em] uppercase font-semibold">
                Platform
              </h4>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <Link href="/packages" className="text-slate-300 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                  Investment Portfolios
                </Link>
                <Link href="/security" className="text-slate-300 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                  Security
                </Link>
                <Link href="/affiliate" className="text-slate-300 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                  Affiliate Program
                </Link>
              </div>
            </div>

            {/* Column 2 - Company */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <h4 className="text-[#34d399] text-[11px] sm:text-[12px] tracking-[0.08em] uppercase font-semibold">
                Company
              </h4>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <Link href="/about" className="text-slate-300 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="text-slate-300 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                  Support
                </Link>
                <Link href="/faq" className="text-slate-300 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                  FAQ
                </Link>
              </div>
            </div>

            {/* Column 3 - Account */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <h4 className="text-[#34d399] text-[11px] sm:text-[12px] tracking-[0.08em] uppercase font-semibold">
                Account
              </h4>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <Link href="/login" className="text-slate-300 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                  Log in
                </Link>
                <Link href="/register" className="text-slate-300 hover:text-white text-[13px] sm:text-[14px] transition-colors">
                  Sign up
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-emerald-950 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <p className="text-[#34d399] text-[12px] sm:text-[13px] font-medium">
            &copy; {new Date().getFullYear()} MyStellarTerm. Built for serious investors.
          </p>
          <div className="flex items-center gap-2 text-[#34d399] text-[12px] sm:text-[13px] font-medium">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}