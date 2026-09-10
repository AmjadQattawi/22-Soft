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
      <span className="text-xs font-semibold uppercase tracking-widest text-[#f97316]">
        MOBILE EXPERIENCE
      </span>

      <h2 className="text-2xl md:text-4xl font-bold text-[#18395b] tracking-tight leading-tight">
        Run Your Jewelry Business{" "}
        <span className="text-[#f97316]">From Anywhere</span>
      </h2>
<p className="text-base leading-7 text-slate-600 max-w-xl">
  Stay connected to 22-Gold DX beyond the desktop with mobile access to key business operations.
</p>
      <div className="space-y-3 pt-1">
        {capabilities.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-[#f97316]/40 transition-colors duration-200"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-bold shrink-0 mt-0.5">
              ✓
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#18395b] leading-none">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2.5 pt-3 text-xs font-medium text-slate-500">
        <a
          href="https://play.google.com/store/apps/details?id=com.soft_22App"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-[#18395b] hover:text-[#f97316] text-xs font-semibold border border-slate-200 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
        >
          <svg className="w-3.5 h-3.5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download Android</span>
        </a>

        <a
          href="https://apps.apple.com/jo/app/22-gold/id6739332966"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-[#18395b] hover:text-[#f97316] text-xs font-semibold border border-slate-200 shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
        >
          <svg className="w-3.5 h-3.5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download iOS</span>
        </a>

        <span className="text-slate-400">• Offline Sync</span>
      </div>
    </motion.div>
  );
}