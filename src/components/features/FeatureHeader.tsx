import { motion } from "framer-motion";

export default function FeatureHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-center max-w-2xl mx-auto space-y-7  "
    >
      {/* <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#f97316] bg-[#f97316]/15 border border-[#f97316]/30 rounded-full">
        ✦ Operational Modules
      </span> */}

      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
        Engineered for Every Corner of Your{" "}
        <span className="text-[#f97316]">Jewelry Business</span>
      </h2>
    </motion.div>
  );
}