export default function MetricsStrip() {
  return (
    <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
      
      {/* مؤشر 1: دقة الأوزان والعيارات */}
      <div className="flex flex-col border-l-2 border-[#f97316]/40 pl-4 space-y-0.5">
        <span className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
          99.9%
        </span>
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Karat & Weight Accuracy
        </span>
      </div>

      {/* مؤشر 2: موقف الذهب والعملات اللحظي */}
      <div className="flex flex-col border-l-2 border-[#43923d]/50 pl-4 space-y-0.5">
        <span className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
          Real-Time
        </span>
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Gold & Cash Position
        </span>
      </div>

      {/* مؤشر 3: توازن ومزامنة القيود المحاسبية */}
      <div className="flex flex-col border-l-2 border-[#234974]/40 pl-4 space-y-0.5">
        <span className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
          100%
        </span>
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Automated Ledger Sync
        </span>
      </div>

      {/* مؤشر 4: الربط بين المكتبي وتطبيق الموبايل */}
      <div className="flex flex-col border-l-2 border-amber-500/40 pl-4 space-y-0.5">
        <span className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
          Unified
        </span>
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          Desktop & POS Mobile
        </span>
      </div>

    </div>
  );
}