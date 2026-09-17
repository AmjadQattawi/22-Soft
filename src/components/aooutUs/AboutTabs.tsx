import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

interface TabData {
  id: string;
  translationKey: string;
}

const tabs: TabData[] = [
  {
    id: "story",
    translationKey: "story",
  },
  {
    id: "vision",
    translationKey: "vision",
  },
  {
    id: "mission",
    translationKey: "mission",
  },
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState("story");
  const { t } = useTranslation();

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
              {t(`about.tabs.${tab.translationKey}.label`)}

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
            {t(`about.tabs.${currentTab.translationKey}.title`)}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {t(`about.tabs.${currentTab.translationKey}.lead`)}
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
            {t(`about.tabs.${currentTab.translationKey}.description`)}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}