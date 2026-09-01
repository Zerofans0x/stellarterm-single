import Footer from "@/components/shared/Footer";
import PackagesHero from "@/components/packages/PackagesHero";
import PackagesGrid from "@/components/packages/PackagesGrid";

export default function PackagesPage() {
  return (
    <div className="w-full flex flex-col bg-white text-slate-900 min-h-screen">
      {/* Navbar is already rendered inside PackagesHero, so we don't call it here twice */}
      <PackagesHero />
      <PackagesGrid />
      <Footer />
    </div>
  );
}