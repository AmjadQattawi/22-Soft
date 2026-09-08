import { clientCountries } from "../ClientsData";

interface WorldMapInteractiveProps {
  activeCountry: string | null;
  setActiveCountry: (id: string | null) => void;
}

export default function WorldMapInteractive({
  activeCountry,
  setActiveCountry,
}: WorldMapInteractiveProps) {
  return (
    <div className="lg:col-span-8 relative w-full aspect-16/video bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center p-6 border border-slate-800 shadow-inner">
      {/* Realistic world map background (High-detail Vector Map) */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="World Map"
        className="w-full h-full object-contain opacity-25 filter invert"
      />

      {/* Pins network  */}
      {clientCountries.map((c) => {
        const isHovered = activeCountry === c.id;

        return (
          <div
            key={c.id}
            style={{ top: c.top, left: c.left }}
            onMouseEnter={() => setActiveCountry(c.id)}
            onMouseLeave={() => setActiveCountry(null)}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
          >
            {/*Pulse effect (Radar Ping) */}
            <span
              className={`absolute -inset-2 rounded-full animate-ping opacity-50 ${
                c.isHq ? "bg-sky-400" : "bg-[#f97316]"
              }`}
            />

            {/* Central point*/}
            <span
              className={`relative block w-2 h-2 rounded-full border border-slate-900 shadow-lg transition-transform duration-200 ${
                c.isHq ? "bg-sky-400" : "bg-[#f97316]"
              } ${isHovered ? "scale-150" : "scale-100"}`}
            />

            {/* xTooltip window appears above the point when hovering */}
            <div
              className={`absolute bottom-full overflow-hidden left-1/2 -translate-x-1/2 mb-2 px-3 lg:px-4 py-1.5 rounded-lg bg-slate-950 text-white border border-slate-800 shadow-2xl flex items-center justify-center gap-2 whitespace-nowrap pointer-events-none transition-all duration-200 z-30 ${
                isHovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }`}
            >
              <img
                src={`https://flagcdn.com/w20/${c.flagCode}.png`}
                alt={c.name}
                className="w-4 h-2.5 object-cover rounded-xs"
              />
              <span className="text-xs font-semibold">
                {c.name} {c.isHq && "(Headquarters)"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
