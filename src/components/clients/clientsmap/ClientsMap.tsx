import { useState } from "react";
import ClientCountryList from "./ClientCountryList";
import WorldMapInteractive from "./WorldMapInteractive";

export default function ClientsMap() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);

  return (
    <div className="w-full bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xs">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sidebar with countries and flags */}
    <ClientCountryList activeCountry={activeCountry} setActiveCountry={setActiveCountry}/>

        {/*The  map with the Pins */}
        <WorldMapInteractive activeCountry={activeCountry} setActiveCountry={setActiveCountry} />

        
      </div>
    </div>
  );
}
