import { motion, AnimatePresence } from "framer-motion";
import { type FeatureItem } from "./featuresData";

interface FeatureWindowPreviewProps {
  feature: FeatureItem;
}

export default function FeatureWindowPreview({
  feature,
}: FeatureWindowPreviewProps) {
  return (
    <div className="lg:col-span-8 xl:col-span-9 w-full">
      <div className="bg-slate-900/5 rounded-3xl  border border-slate-200 shadow-2xl backdrop-blur-xs">
        {/* Window Header */}
        {/* <div className="flex justify-center items-center pb-2.5 px-2">

          <span className="  text-xs text-slate-500 font-mono">
            22-Gold DX Desktop v2.4 • {feature.badge}
          </span>
          <div className="w-10" />
        </div> */}

        {/* The big picture */}
        <div className="relative aspect-video  rounded-2xl overflow-hidden bg-white border border-slate-200/80">
          <AnimatePresence >  
            <motion.img
              key={feature.id}
              src={feature.imageSrc}
              alt={feature.imageAlt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1  }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}