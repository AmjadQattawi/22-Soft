import { motion } from "framer-motion";
import mobileCatalog from "../assets/mobile/mobile-catalog.jpg";
import mobilePos from "../assets/mobile/mobile-pos.jpg";
import mobilePrimary from "../assets/mobile/mobilePrimary.jpg"

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

export default function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="relative bg-slate-50/60 px-6 md:px-12 py-8 md:py-14 scroll-mt-20 overflow-hidden border-y border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Column: Context & Capabilities */}
        <motion.div
          className=" flex flex-col gap-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="w-fit px-3.5 py-1.5 text-xs font-semibold tracking-wide bg-[#f97316]/15 border text-[#f97316] border-[#f97316]/30 rounded-full">
            ✦ Floor Sales & Mobile Command
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight ">
            Empower Your Team on the{" "}
            <span className="text-[#f97316]">Showroom Floor</span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Move sales representatives away from behind fixed counters. 22-Gold
            DX Mobile transforms handheld devices into real-time terminals for
            visual selling, barcode pricing, and rapid checkout.
          </p>

          <div className="space-y-4 pt-2">
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



        {/* Right Column: Layered 3-Device Mockups */}
        <motion.div
          className=" relative flex items-center justify-center pt-8 pb-4 lg:py-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {/* radiant orange circle behaind the phones */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96  bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />

          {/* 3 phones */}
          <div className="relative flex items-center justify-center w-[60vw] max-w-lg lg:max-w-xl ">

            {/* 1. Left Device: Dashboard / Positions (mobile-primary) */}
            <div className="relative -mr-10 md:-mr-14 z-10 w-44 md:w-56 scale-90 md:scale-95 opacity-85 hover:opacity-100 hover:z-30 hover:scale-105 transition-all duration-500">
              <div className="bg-slate-900 p-2.5 rounded-[2.5rem] shadow-xl border-4 border-slate-800">
                <div className="relative rounded-4xl overflow-hidden bg-white border border-slate-200 aspect-9/19">
                  <img
                    src={mobilePrimary}
                    alt="22-Gold Mobile Dashboard"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* 2. Center Device: Visual Catalog (mobile-catalog inside phone frame) */}
            <div className="relative z-20 w-52 md:w-64 bg-slate-900 p-2.5 rounded-[2.5rem] shadow-2xl shadow-slate-950/20 border-4 border-slate-800 hover:scale-105 transition-all duration-500">
              {/* Screen Shell */}
              <div className="relative rounded-4xl overflow-hidden bg-white border border-slate-200 aspect-9/19">
                <img
                  src={mobileCatalog}
                  alt="Jewelry Showcase Catalog"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* 3. Right Device: Mobile POS Bill (mobile-pos inside phone frame) */}
            <div className="relative -ml-10 md:-ml-14 z-10 w-44 md:w-56 scale-90 md:scale-95 opacity-85 hover:opacity-100 hover:z-30  hover:scale-105 transition-all duration-500">
              <div className="bg-slate-900 p-2.5 rounded-[2.5rem] shadow-xl border-4 border-slate-800">
                <div className="relative rounded-4xl overflow-hidden bg-white border border-slate-200 aspect-9/19">
                  <img
                    src={mobilePos}
                    alt="Mobile POS Invoicing"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
