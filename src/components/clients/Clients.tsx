import ClientsSlider from "./ClientsSlider";


export default function Clients() {

  return (
    <section
      id="clients"
      className="relative  bg-white px-6 md:px-12 py-4 lg:py-6 overflow-hidden "
    >
      {/* All */}
      <div className="max-w-7xl mx-auto space-y-4 lg:space-y-6">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#f97316] bg-[#f97316]/15 border-[#f97316]/30 rounded-full">
            ✦ Trusted Partnerships
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Chosen by the Best in the{" "}
            <span className="text-[#f97316]">Jewelry Industry</span>
          </h2>
          {/* <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Market-leading goldsmiths, retail showrooms, and bullion traders
            rely on 22-Gold DX to secure daily transactions and ledger accuracy.
          </p> */}
        </div>


        {/* show Clients Slider */}
       <ClientsSlider/>
        
      </div>

      {/* End All */}
    </section>
  );
}
