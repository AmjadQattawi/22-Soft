import { motion } from "framer-motion";

export default function FeatureHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center  "
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-[#c94f00]">
        CORE CAPABILITIES
      </span>

      <h2 className="text-2xl mt-3 md:text-4xl font-bold text-[#18395b]">
        Powerful Features for Your{" "}
        <span className="text-[#c94f00]">Jewelry Business</span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm md:text-base leading-relaxed text-slate-600">
        From inventory and accounting to daily operations, 22-Gold DX brings all essential tools together.
      </p>
    </motion.div>
  );
}