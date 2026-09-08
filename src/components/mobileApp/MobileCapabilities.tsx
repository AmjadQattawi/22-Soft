import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Visual Showcase Catalog",
    desc: "HD piece showcase with instant karat and ID lookups.",
  },
  {
    title: "Mobile POS & Making Charges",
    desc: "Scan QR codes and bill making fees on the go.",
  },
  {
    title: "Instant Vault & Ledger Sync",
    desc: "Real-time updates directly to desktop accounting.",
  },
];

export default function MobileCapabilities() {
  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="w-fit px-3 py-1 text-xs font-semibold tracking-wide bg-[#f97316]/15 border text-[#f97316] border-[#f97316]/30 rounded-full">
        ✦ Floor Sales & Mobile Command
      </span>

      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
        Run Your Jewelry Business{" "}
        <span className="text-[#f97316]">From Anywhere</span>
      </h2>

      <div className="space-y-3 pt-1">
        {capabilities.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-bold shrink-0">
              ✓
            </span>
            <div>
              <h4 className="text-sm font-bold text-slate-900 leading-none">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-3 text-xs font-medium text-slate-500">
        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
          Android
        </span>
        <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
          iOS
        </span>
        <span>• Offline Sync</span>
      </div>
    </motion.div>
  );
}