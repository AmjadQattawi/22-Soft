import { clientCountries } from "../ClientsData";

interface ClientCountryListProps {
  activeCountry: string | null;
  setActiveCountry: (id: string | null) => void;
}

export default function ClientCountryList({
  activeCountry,
  setActiveCountry,
}: ClientCountryListProps) {
  return (
    <div className="lg:col-span-4 space-y-3">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Global Presence
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 mt-1">
          Active Regional Deployment
        </h3>
      </div>

      <div className="space-y-2">
        {clientCountries.map((c) => {
          const isSelected = activeCountry === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setActiveCountry(c.id)}
              onMouseLeave={() => setActiveCountry(null)}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-orange-50/70 border-[#f97316] shadow-sm translate-x-1"
                  : "bg-slate-50/70 border-slate-200/70 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://flagcdn.com/w40/${c.flagCode}.png`}
                  srcSet={`https://flagcdn.com/w80/${c.flagCode}.png 2x`}
                  alt={`${c.name} Flag`}
                  className="w-6 h-4 object-cover rounded shadow-xs border border-black/10"
                  loading="lazy"
                />
                <span className="text-sm font-semibold text-slate-800">
                  {c.name}
                </span>
              </div>

              {c.isHq && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-200 uppercase">
                  HQ
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
