import { motion, AnimatePresence } from "framer-motion";
import { type FeatureItem } from "./featuresData";

interface FeatureWindowPreviewProps {
  feature: FeatureItem;
}

export default function FeatureWindowPreview({
  feature,
}: FeatureWindowPreviewProps) {
  return (
    <div className="lg:col-span-7">
      <div className="bg-slate-900/5 rounded-3xl p-3 border border-slate-200 shadow-2xl backdrop-blur-xs">
        {/* Window Header */}
        <div className="flex items-center justify-between pb-2.5 px-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
          </div>
          <span className="text-xs text-slate-500 font-mono">
            22-Gold DX Desktop v2.4 • {feature.badge}
          </span>
          <div className="w-10" />
        </div>

        {/* The big picture */}
        <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-white border border-slate-200/80">
          <AnimatePresence mode="wait">
            <motion.img
              key={feature.id}
              src={feature.imageSrc}
              alt={feature.imageAlt}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full object-cover object-top"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}