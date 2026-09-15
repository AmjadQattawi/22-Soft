import OverviewHeader from "./OverviewHeader";
import OverviewDetails from "./OverviewDetails";
import OverviewVisual from "./OverviewVisual";
import { motion } from "framer-motion";

export default function Overview() {
  return (
    <motion.section     
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
       className="relative overflow-hidden bg-white px-6  md:px-10 py-3 md:py-4 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <OverviewHeader />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <OverviewDetails />
          <OverviewVisual />
        </div>
      </div>
    </motion.section>
  );
}