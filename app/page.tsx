import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import CelebratingExcellence from "@/components/home/InvestmentSuccess";
import Whystellarterm from "@/components/home/WhyMyStellarTerm";
import OnePlatform from "@/components/home/OnePlatform";
import WhoItsFor from "@/components/home/WhoItsFor";
import Results from "@/components/home/RecentPayouts";
import Faq from "@/components/shared/Faq";
import Cta from "@/components/shared/Cta";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 flex flex-col selection:bg-cyan-100 selection:text-cyan-900">
      <main className="flex-1 flex flex-col">
        <Hero />
        <Stats />
        <CelebratingExcellence />
        <Whystellarterm />
        <OnePlatform />
        <WhoItsFor />
        <Results />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}



