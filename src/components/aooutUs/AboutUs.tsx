import SectionContainer from "../cssComponents/SectionContainer";
import AboutTabs from "./AboutTabs";
import CompanyHqCard from "./CompanyHqCard";

export default function AboutUs() {
  return (
    <SectionContainer
      id="about"
      className="bg-white"
    >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide bg-[#f97316]/15 border text-[#f97316] border-[#f97316]/30 rounded-full">
            ✦ Behind 22-Gold DX
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered for{" "}
            <span className="text-[#f97316]">Absolute Precision</span> & Trust
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Delivering high-grade software systems that empower jewelry
            enterprises to master daily transactions, inventory, and gold
            ledgers.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Tabs with Clean Paragraphs */}
          <AboutTabs />

          {/* Right Column: HQ & Contact Card */}
          <CompanyHqCard />
        </div>
    </SectionContainer>
  );
}
