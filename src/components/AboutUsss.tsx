import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabData {
  id: string;
  label: string;
  title: string;
  lead: string;
  description: string;
}

const tabs: TabData[] = [
  {
    id: "story",
    label: "Our Story",
    title: "Rooted in Industry Practice & Software Engineering",
    lead: "22-Soft was founded by combining specialized software expertise with deep, hands-on field experience in retail and bullion markets. We develop dependable software built on solid technical standards to simplify complex operations with complete accuracy.",
    description:
      "Our systems evolve directly through customer feedback, ensuring complete confidentiality for sensitive vault accounts while our technical team provides continuous, attentive operational guidance.",
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "Pioneering the Digital Transformation of Jewelry Trade",
    lead: "We envision an effortless digital transition across gold workshops and retail counters, eliminating manual paperwork while keeping data integrity strictly intact.",
    description:
      "By leveraging modern technologies, we empower companies to achieve micro-gram precision across all karats, scrap melting, and multi-currency ledgers with zero room for error.",
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Your Success Is Our Success",
    lead: "Our goal is simple: meet client expectations, streamline daily workflows, and grow together as dependable long-term technical partners.",
    description:
      "We actively incorporate client feedback to engineer flexible reports and tailored features, turning complex gold market transactions into an intuitive, seamless experience.",
  },
];

export default function AboutUsss() {

      const [activeTab, setActiveTab] = useState<string>("story");
    const currentTab = tabs.find((t)=> activeTab === t.id || tabs[0] )
  return (
    <section
      id="about-us"
      className="relative bg-slate-50/70 px-6 md:px-12  py-4 lg:py-6 scroll-mt-20 overflow-hidden border-b border-slate-200/60"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
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

        {/* 2-Column Layout (grid)*/}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* right col 1 */}
          <div className="lg:col-span-7 bg-white p-7 md:p-9 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            {/* Tabs Navigation */}
            <div className="flex gap-2 border-b border-slate-200 pb-3">
                        {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-[#f97316]"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {tab.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute -bottom-3.35 left-0 right-0 h-0.5 bg-[#f97316]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div> 
            {/* End Tabs Navigation */}
            
          </div>
          {/* End right col 1 */}

        </div>
      </div>
    </section>
  );
}
