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
    lead:
      "22-Soft was founded by combining specialized software expertise with deep, hands-on field experience in retail and bullion markets. We develop dependable software built on solid technical standards to simplify complex operations with complete accuracy.",
    description:
      "Our systems evolve directly through customer feedback, ensuring complete confidentiality for sensitive vault accounts while our technical team provides continuous, attentive operational guidance.",
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "Pioneering the Digital Transformation of Jewelry Trade",
    lead:
      "We envision an effortless digital transition across gold workshops and retail counters, eliminating manual paperwork while keeping data integrity strictly intact.",
    description:
      "By leveraging modern technologies, we empower companies to achieve micro-gram precision across all karats, scrap melting, and multi-currency ledgers with zero room for error.",
  },
  {
    id: "mission",
    label: "Our Mission",
    title: "Your Success Is Our Success",
    lead:
      "Our goal is simple: meet client expectations, streamline daily workflows, and grow together as dependable long-term technical partners.",
    description:
      "We actively incorporate client feedback to engineer flexible reports and tailored features, turning complex gold market transactions into an intuitive, seamless experience.",
  },
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("story");

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
      
      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 pb-3 text-sm font-semibold transition ${
                isActive
                  ? "text-[#c2410c]"
                  : "text-slate-600 hover:text-[#18395b]"
              }`}
            >
              {tab.label}

              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-[#f97316]"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="pt-7"
        >
          <h2 className="text-xl font-bold leading-snug text-[#18395b] md:text-2xl">
            {currentTab.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {currentTab.lead}
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {currentTab.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}