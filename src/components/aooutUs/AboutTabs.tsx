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


export default function AboutTabs(){
  const [activeTab, setActiveTab] = useState<string>("story");
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
    return(
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
    )
}