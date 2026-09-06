

import { motion } from "framer-motion";
import { type FeatureItem } from "./featuresData";

interface FeatureTabsListProps {
  features: FeatureItem[];
  activeIdx: number;
  onSelectTab: (index: number) => void;
}

export default function FeatureTabsList({
  features,
  activeIdx,
  onSelectTab,
}: FeatureTabsListProps) {
  return (
    <div className="lg:col-span-5 space-y-3">
      {features.map((item, idx) => {
        const isActive = activeIdx === idx;
        return (
          <motion.div
            key={item.id}
            onClick={() => onSelectTab(idx)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`p-5 rounded-2xl cursor-pointer transition-all border ${
              isActive
                ? "bg-white border-[#f97316] shadow-xl shadow-orange-500/10"
                : "bg-white/60 border-slate-200/80 hover:bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${item.badgeBg}`}
              >
                {item.badge}
              </span>
              <span
                className={`text-2xl font-black ${
                  isActive ? "text-[#f97316]" : "text-slate-300"
                }`}
              >
                {item.number}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900 mt-2">
              {item.title}
            </h3>

            {isActive && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 space-y-1.5 border-t border-slate-100 pt-3"
              >
                {item.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-slate-600 font-medium"
                  >
                    <span className="text-[#f97316] font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}