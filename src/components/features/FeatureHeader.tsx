import { motion } from "framer-motion";

export default function FeatureHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
      className="text-center max-w-3xl mx-auto space-y-4"
    >
      <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#f97316] bg-[#f97316]/15 border-[#f97316]/30 rounded-full">
        ✦ Operational Modules
      </span>
      <h2 className="text-3xl md:text-3xl font-extrabold tracking-tight text-slate-900">
        Engineered for Every Corner of Your{" "}
        <span className="text-[#f97316]">Jewelry Business</span>
      </h2>
      <p className="text-slate-600 text-base md:text-lg leading-relaxed">
        Eliminate operational blind spots. From the retail sales counter to
        complex bullion settlement ledgers, 22-Gold DX gives you full command
        over your inventory and cash flows.
      </p>
    </motion.div>
  );
}