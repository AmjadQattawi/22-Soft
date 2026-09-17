import { motion } from "framer-motion";
import type { FeatureItem } from "./featuresData";
import { useTranslation } from "react-i18next";

type Props = {
  features: FeatureItem[];
  activeIdx: number;
  onSelectTab: (idx: number) => void;
};

export default function FeatureTabsList({
  features,
  activeIdx,
  onSelectTab,
}: Props) {
  const { t } = useTranslation();

  // lg:col-span-3

  return (
    <div className="lg:col-span-3 space-y-3">
      {features.map((item, idx) => {
        const isActive = activeIdx === idx;
        return (
          <motion.div
            key={item.id}
            onClick={() => onSelectTab(idx)}
            whileHover={{ scale: 1.01 }}
            className={`p-5 rounded-2xl cursor-pointer transition-all border bg-white/60
              ${isActive ? " border-[#f97316]" : " border-slate-200/80 hover:bg-white hover:border-slate-300"}
               `}

          >
            <div className="flex items-center justify-between">
              <span
                className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${item.badgeBg}`}
              >
                {t(`home.features.items.${item.translationKey}.badge`)}
              </span>
              <span
                className="text-2xl font-black text-[#C94F00] "
                
              >
                {item.number}
              </span>
            </div>

            <h3 className="text-base font-bold text-slate-900 mt-2">
              {t(`home.features.items.${item.translationKey}.title`)}
            </h3>
 
          </motion.div>
        );
      })}
    </div>
  );
}