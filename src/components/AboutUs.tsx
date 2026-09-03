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
    description: "Our systems evolve directly through customer feedback, ensuring complete confidentiality for sensitive vault accounts while our technical team provides continuous, attentive operational guidance.",
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "Pioneering the Digital Transformation of Jewelry Trade",
    lead: "We envision an effortless digital transition across gold workshops and retail counters, eliminating manual paperwork while keeping data integrity strictly intact.",
    description: "By leveraging modern technologies, we empower companies to achieve micro-gram precision across all karats, scrap melting, and multi-currency ledgers with zero room for error.",
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Your Success Is Our Success",
    lead: "Our goal is simple: meet client expectations, streamline daily workflows, and grow together as dependable long-term technical partners.",
    description: "We actively incorporate client feedback to engineer flexible reports and tailored features, turning complex gold market transactions into an intuitive, seamless experience.",
  },
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<string>("story");
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section
      id="about-us"
      className="relative bg-slate-50/70 px-6 md:px-12 py-4 lg:py-6 scroll-mt-20 overflow-hidden border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide bg-[#f97316]/15 border text-[#f97316] border-[#f97316]/30 rounded-full">
            ✦ Behind 22-Gold DX
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered for <span className="text-[#f97316]">Absolute Precision</span> & Trust
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Delivering high-grade software systems that empower jewelry enterprises to master daily transactions, inventory, and gold ledgers.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Tabs with Clean Paragraphs */}
          <div className="lg:col-span-7 bg-white p-7 md:p-9 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              {/* Tabs Navigation */}
              <div className="flex gap-2 border-b border-slate-200 pb-3">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-4 py-2 text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "text-[#f97316]"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute bottom-[-13px] left-0 right-0 h-0.5 bg-[#f97316]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4 pt-6"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                    {currentTab.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {currentTab.lead}
                  </p>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    {currentTab.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: HQ & Contact Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-7 md:p-9 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-[#f97316]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#f97316] font-extrabold">
                  Headquarters
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  22-Soft Company
                </h3>
                <p className="text-slate-400 text-xs md:text-sm mt-0.5">
                  Specialized Enterprise Software & Solutions
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4 text-xs md:text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-white">Main Office</p>
                  <p className="text-slate-400 mt-0.5">
                    Ali Nassouh At-Taher St., Al Swaifyeh, Amman, Jordan
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">Telephone</p>
                  <a href="tel:065930238" className="text-slate-400 hover:text-white transition mt-0.5 block">
                    06 5930238
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-white">Direct Mobile Lines</p>
                  <p className="text-slate-400 mt-0.5">
                    <a href="tel:00962792223100" className="hover:text-white transition">079 2223100</a>
                    {" • "}
                    <a href="tel:00962785284592" className="hover:text-white transition">078 5284592</a>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@22-soft.com" className="text-slate-400 hover:text-white transition mt-0.5 block">
                    info@22-soft.com
                  </a>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-6 relative">
              <a
                href="#request-demo"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-xs md:text-sm shadow-md transition-all duration-200"
              >
                Schedule Consultation & Visit
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}