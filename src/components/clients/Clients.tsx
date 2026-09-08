import SectionContainer from "../cssComponents/SectionContainer";
import ClientsMap from "./clientsmap/ClientsMap";
import ClientsSlider from "./ClientsSlider";

export default function Clients() {
  return (
    <SectionContainer
      id="clients"
      className=" bg-slate-100/25 min-h-[calc(100vh-5rem)] flex items-center justify-center lg:pt-10 lg:pb-25 div"
      divclassName="gap-12 lg:gap-16"
    >
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#f97316] bg-[#f97316]/15 border-[#f97316]/30 rounded-full">
          ✦ Trusted Partnerships
        </span>
        <h2 className="text-3xl md:text-3xl font-extrabold tracking-tight text-slate-900">
          Chosen by the Best in the{" "}
          <span className="text-[#f97316]">Jewelry Industry</span>
        </h2>
        {/* <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Market-leading goldsmiths, retail showrooms, and bullion traders
            rely on 22-Gold DX to secure daily transactions and ledger accuracy.
          </p> */}
      </div>

      {/* show Clients Slider */}
      <ClientsSlider />

      {/* 2. Interactive Map */}
      <ClientsMap />
    </SectionContainer>
  );
}
