export default function OverView() {
  return (
    // bg for all section
    <section
      id="overview"
      className="relative bg-[#1b3a5f] text-white py-20 px-6 md:px-12"
    >
      {/* width for all section */}
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Section Title: Introduction to the System */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#43923d] bg-[#43923d]/15 border border-[#43923d]/30 rounded-full">
            ✦ Core System Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Built from the Ground Up for the{" "}
            <span className="text-[#f97316]">Gold Market</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            22-Gold DX replaces disconnected spreadsheets with an end-to-end
            management engine designed around the physical and financial
            realities of jewelry trade.
          </p>
        </div>

        {/*  Network of three cards  (grid)*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* col-1*/}
          <div className="bg-white/5 border border-white/10 hover:border-[#f97316]/50 rounded-2xl p-8 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#f97316]/20 border border-[#f97316]/40 flex items-center justify-center text-2xl">
              ⚖️
            </div>
            <h3 className="text-xl font-bold text-white">
              Dual Weight & Karat Tracking
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Distinguish instantly between gross weight, net pure gold, and
              precious stone deductions. Automated calculation of making charges
              (الحِلة) per gram or item.
            </p>
          </div>

          {/* col-2*/}
          <div className="bg-white/5 border border-white/10 hover:border-[#43923d]/50 rounded-2xl p-8 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#43923d]/20 border border-[#43923d]/40 flex items-center justify-center text-2xl">
              📈
            </div>
            <h3 className="text-xl font-bold text-white">
              Multi-Currency & Gold Position
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Track live cash and bullion exposure across JoD, USD, SAR, and
              pure Gold. Real-time monitoring of Short vs. Long positions and
              scrap (كسر) trade settlements.
            </p>
          </div>

          {/* col-3*/}
          <div className="bg-white/5 border border-white/10 hover:border-blue-400/50 rounded-2xl p-8 space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-2xl">
              📱
            </div>
            <h3 className="text-xl font-bold text-white">
              Desktop & Mobile Synergy
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Equip back-office accountants with deep ledger auditing and robust
              desktop reporting, while floor sales reps use fast mobile POS and
              QR barcode scanning.
            </p>
          </div>

          {/* End Grid */}
        </div>

        {/* End width for all section  */}
      </div>
      
    </section>
  );
}
