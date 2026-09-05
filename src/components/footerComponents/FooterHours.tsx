export default function FooterHours() {
  return (
    <div className="lg:col-span-2 space-y-4">
      <p className="text-white font-bold text-xs uppercase tracking-wider">
        Working Hours
      </p>
      <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
        <div>
          <p className="text-white font-semibold">Sunday – Thursday</p>
          <p className="text-slate-300">9:00 AM – 6:00 PM</p>
        </div>
        <div className="pt-1">
          <p className="text-white font-semibold">Friday – Saturday</p>
          <p className="text-rose-300 font-medium">Closed</p>
        </div>
        <p className="text-[11px] text-slate-400 pt-2">
          ⓘ Jordan Time — Excluding official holidays
        </p>
      </div>
    </div>
  );
}