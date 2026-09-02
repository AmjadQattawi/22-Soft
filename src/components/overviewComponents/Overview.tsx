import OverviewCard from "./OverviewCard";
import { motion } from "framer-motion";

const overviewData = [
  {
    icon: "⚖️",
    title: "Dual Weight & Karat Tracking",
    description:
      "Distinguish instantly between gross weight, net pure gold, and precious stone deductions. Automated calculation of making charges (الحِلة) per gram or item.",
    hoverBorder: "hover:border-[#f97316]/50",
    iconBg: "bg-[#f97316]/20",
    iconBorder: "border-[#f97316]/40",
  },
  {
    icon: "📈",
    title: "Multi-Currency & Gold Position",
    description:
      "Track live cash and bullion exposure across JoD, USD, SAR, and pure Gold. Real-time monitoring of Short vs. Long positions and scrap (كسر) trade settlements.",
    hoverBorder: "hover:border-[#43923d]/50",
    iconBg: "bg-[#43923d]/20",
    iconBorder: "border-[#43923d]/40",
  },
  {
    icon: "📱",
    title: "Desktop & Mobile Synergy",
    description:
      "Equip back-office accountants with deep ledger auditing and robust desktop reporting, while floor sales reps use fast mobile POS and QR barcode scanning.",
    hoverBorder: "hover:border-blue-400/50",
    iconBg: "bg-blue-500/20",
    iconBorder: "border-blue-400/40",
  },
];

export default function Overview() {
  return (
    // bg for all section
    <motion.section
      id="overview"
      className="relative bg-slate-50/50 text-black px-6 md:px-12 py-8 md:py-14 "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* width for all section */}
      <div className="max-w-7xl mx-auto gap-8 lg:gap-12 flex flex-col ">
        {/* Section Title: Introduction to the System */}
        <div className="text-center max-w-3xl mx-auto space-y-7">
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#f97316] bg-[#f97316]/15 border   border-[#f97316]/30 rounded-full">
            ✦ Core System Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Built from the Ground Up for the{" "}
            <span className="text-[#f97316]">Gold Market</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            22-Gold DX replaces disconnected spreadsheets with an end-to-end
            management engine designed around the physical and financial
            realities of jewelry trade.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {overviewData.map((item, index) => (
            <OverviewCard key={index} {...item} />
          ))}
        </div>


        {/* End width for all section  */}
      </div>
    </motion.section>
  );
}
