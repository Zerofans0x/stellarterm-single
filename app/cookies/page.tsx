// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import Navbar from "@/components/shared/Navbar";
// import Footer from "@/components/shared/Footer";

// export const metadata: Metadata = {
//   title: "Cookies Policy | stellarterm",
//   description: "Manage your cookie preferences for stellarterm.",
// };

// export default function CookiesPage() {
//   return (
//     <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-cyan-100 selection:text-cyan-900 overflow-hidden">
//       <Navbar />

//       <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24">
//         {/* Container to align backgrounds and foregrounds */}
//         <div className="relative w-full max-w-[900px] flex justify-center mt-8">

//           {/* Background 404-single image */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] sm:w-full h-[400px] md:h-[500px] pointer-events-none z-0">
//             <Image
//               src="/images/404-single.png"
//               alt="Background Pattern"
//               fill
//               className="object-contain object-top opacity-90"
//               sizes="100vw"
//             />
//           </div>

//           {/* Foreground Cookie Card */}
//           <div className="relative z-10 w-full max-w-[500px] bg-white rounded-[36px] sm:rounded-[44px] pt-12 pb-16 px-8 sm:px-10 shadow-[0_20px_60px_-15px_rgba(0,10,50,0.1)] flex flex-col items-center min-h-[540px]">
//             {/* Cookie Image */}
//             <div className="flex justify-center mb-8">
//               <div className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px]">
//                 <Image
//                   src="/images/cookies.png"
//                   alt="Cookie Icon"
//                   fill
//                   className="object-contain"
//                   sizes="(max-width: 640px) 150px, 170px"
//                 />
//               </div>
//             </div>

//             <h1 className="font-mazzard text-[26px] sm:text-[32px] text-[#0f172a] tracking-tight mb-5 text-center">
//               Choose your cookies
//             </h1>

//             <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 font-medium leading-relaxed mb-10 text-center px-1">
//               We use cookies to improve your experience, understand how you use
//               our website, and personalize content and ads. You can choose which
//               cookies you allow.
//             </p>

//             <div className="w-full flex flex-col sm:flex-row gap-4 mb-10 mt-auto">
//               <button
//                 type="button"
//                 className="flex-1 py-3.5 px-4 bg-[#0f172a] hover:bg-black text-white text-[14px] font-medium rounded-full transition-colors text-center shadow-md cursor-pointer"
//               >
//                 Accept All
//               </button>
//               <button
//                 type="button"
//                 className="flex-1 py-3.5 px-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-600 text-[14px] font-medium rounded-full transition-colors text-center cursor-pointer"
//               >
//                 Reject Non-Essential
//               </button>
//             </div>

//             <p className="text-[11px] sm:text-[11.5px] text-slate-400 font-medium leading-relaxed text-center mb-5">
//               By selecting <span className="text-[#006DEB]">&quot;Accept All&quot;</span>, you agree to our use of cookies. You can change your preferences at any time.
//             </p>

//             <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-[11.5px] text-slate-400 font-medium">
//               <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
//               <span>•</span>
//               <Link href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</Link>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }


import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Telemetry & Cookies Policy | stellarterm",
  description: "Manage your telemetry and cookie preferences for the stellarterm institutional platform.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 overflow-hidden">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24">
        {/* Container to align backgrounds and foregrounds */}
        <div className="relative w-full max-w-[900px] flex justify-center mt-8">

          {/* Background 404-single image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] sm:w-full h-[400px] md:h-[500px] pointer-events-none z-0">
            <Image
              src="/images/404-single.png"
              alt="Background Pattern"
              fill
              className="object-contain object-top opacity-90"
              sizes="100vw"
            />
          </div>

          {/* Foreground Cookie Card */}
          <div className="relative z-10 w-full max-w-[500px] bg-white rounded-[36px] sm:rounded-[44px] pt-12 pb-16 px-8 sm:px-10 shadow-[0_20px_60px_-15px_rgba(4,120,87,0.1)] flex flex-col items-center min-h-[540px]">
            {/* Cookie Image */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[150px] h-[150px] sm:w-[170px] sm:h-[170px]">
                <Image
                  src="/images/cookies.png"
                  alt="Telemetry Icon"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 150px, 170px"
                />
              </div>
            </div>

            <h1 className="font-mazzard text-[26px] sm:text-[32px] text-[#0f172a] tracking-tight mb-5 text-center">
              Telemetry & cookie governance
            </h1>

            <p className="text-[13.5px] sm:text-[14.5px] text-slate-500 font-medium leading-relaxed mb-10 text-center px-1">
              We deploy advanced telemetry cookies to optimize institutional execution, monitor order book security, and tailor our platform services to your asset mandate.
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-4 mb-10 mt-auto">
              <button
                type="button"
                className="flex-1 py-3.5 px-4 bg-[#059669] hover:bg-[#047857] text-white text-[14px] font-medium rounded-full transition-colors text-center shadow-md cursor-pointer"
              >
                Accept All
              </button>
              <button
                type="button"
                className="flex-1 py-3.5 px-4 bg-white border border-slate-300 hover:bg-slate-50 text-slate-600 text-[14px] font-medium rounded-full transition-colors text-center cursor-pointer"
              >
                Reject Non-Essential
              </button>
            </div>

            <p className="text-[11px] sm:text-[11.5px] text-slate-400 font-medium leading-relaxed text-center mb-5">
              By selecting <span className="text-[#059669]">&quot;Accept All&quot;</span>, you consent to our use of institutional cookies and session telemetry. Preferences can be modified anytime.
            </p>

            <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-[11.5px] text-slate-400 font-medium">
              <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/cookies" className="hover:text-slate-600 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}