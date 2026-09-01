import Mockup from "../../assets/other/Mockup.png";

export default function HeroShowcase() {
  return (
    <div className="relative flex justify-center items-center animate-fade-up">
      {/* 1. glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-80 h-80 bg-orange-400/35 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/3 w-80 h-80 bg-[#234974]/25 rounded-full blur-[90px] pointer-events-none" />

      {/* 2. Photo container and capsules*/}
      <div className="relative  w-full max-w-lg lg:max-w-none">
        {/*  Top Capsule: Instant synchronization with a green pulse  */}
        <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 hover:scale-105 transition-transform duration-300">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-800 tracking-tight">
            Live Position Sync
          </span>
        </div>


        <img
          src={Mockup}
          alt="22-Gold DX ERP Mockup"
          className="relative z-10 w-full h-auto object-contain drop-shadow-2xl animate-float transition-transform duration-500 hover:scale-[1.03] cursor-pointer"
        />

        {/* Lower capsule: Accuracy of weights and gauges */}
        <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 hover:scale-105 transition-transform duration-300">
          <span className="text-sm">✨</span>
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-extrabold text-slate-900 leading-tight">
              100% Precision
            </span>
            <span className="text-[10px] text-slate-500 leading-tight font-medium">
              Pure Weight & Karats
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
