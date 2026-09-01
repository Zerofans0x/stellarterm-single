

import Image from "next/image";

export default function AboutRoadmap() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <h2 className="font-mazzard text-3xl sm:text-4xl lg:text-[40px] text-[#0f172a] tracking-tight">
          The Investment Roadmap
        </h2>
      </div>

      {/* Roadmap Graphic: Horizontal Scroll on Mobile, Full Width on Desktop */}
      <div className="w-full overflow-x-auto scrollbar-hide -mx-6 px-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0 pb-4">
        <div className="min-w-[700px] sm:min-w-[900px] lg:min-w-0 w-full max-w-none lg:max-w-[1280px] mx-auto">
          <Image
            src="/images/about-roadmap.png"
            alt="The Investment Roadmap - 1 Account Creation, 2 Tier Selection, 3 Capital Allocation, 4 Yield Tracking, 5 Secure Disbursements"
            width={1280}
            height={480}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}