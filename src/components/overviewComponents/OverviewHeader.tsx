import { motion } from "framer-motion";

export default function OverviewHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="text-center max-w-3xl mx-auto space-y-7"
    >
      <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#f97316] bg-[#f97316]/15 border   border-[#f97316]/30 rounded-full">
        ✦ Core System Architecture
      </span>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
        Built from the Ground Up for the{" "}
        <span className="text-[#f97316]">Gold Market</span>
      </h2>
      <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        22-Gold DX replaces disconnected spreadsheets with an end-to-end
        management engine designed around the physical and financial realities
        of jewelry trade.
      </p>
    </motion.div>
  );
}
