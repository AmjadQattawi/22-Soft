import { motion } from "framer-motion";


const capabilities = [
  {
    title: "Interactive Visual Catalog",
    desc: "Showcase bracelets, rings, and sets with high-resolution imagery, karat purities, and piece IDs directly to clients on the floor.",
  },
  {
    title: "Instant Mobile POS Billing",
    desc: "Scan QR codes, compute making fees (الحِلة) per gram, and record multi-tender payments without leaving the customer's side.",
  },
  {
    title: "Live Vault & Ledger Sync",
    desc: "Every transaction executed on the mobile terminal immediately updates desktop inventory, journal ledgers, and gold positions.",
  },
];

export default function MobileCapabilities(){


    return(
         <motion.div
          className=" flex flex-col gap-2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="w-fit px-3.5 py-1.5 text-xs font-semibold tracking-wide bg-[#f97316]/15 border text-[#f97316] border-[#f97316]/30 rounded-full">
            ✦ Floor Sales & Mobile Command
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight ">
            Empower Your Team on the{" "}
            <span className="text-[#f97316]">Showroom Floor</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Move sales representatives away from behind fixed counters. 22-Gold
            DX Mobile transforms handheld devices into real-time terminals for
            visual selling, barcode pricing, and rapid checkout.
          </p>

          <div className="space-y-2 ">
            {capabilities.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/70 shadow-xs"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f97316]/15 text-[#f97316] text-xs font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-slate-500">
            <span className="px-3 py-1 rounded-lg bg-slate-200/70 text-slate-700">
              Android Terminal
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-200/70 text-slate-700">
              iOS Companion
            </span>
            <span>• Offline-Ready Sync</span>
          </div>
        </motion.div>
    )
}