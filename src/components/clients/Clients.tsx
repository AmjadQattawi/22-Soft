import SectionContainer from "../csscomponents/SectionContainer";
import ClientsMap from "./clientsmap/ClientsMap";
import ClientsSlider from "./ClientsSlider";

export default function Clients() {
  return (
    <SectionContainer
      id="clients"
      className=" bg-slate-100/25 min-h-[calc(100vh-5rem)] flex items-center justify-center lg:pt-10 lg:pb-25 div"
      divclassName="gap-12 lg:gap-13"
    >
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-sm font-semibold uppercase tracking-widest text-[#B94700]">
          TRUSTED PARTNERSHIPS
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#18395b]">
          Trusted by Jewelry Businesses
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Discover some of the businesses that rely on 22-Soft solutions.
        </p>
      </div>

      {/* show Clients Slider */}
      <ClientsSlider />

      {/* 2. Interactive Map */}
      <ClientsMap />
    </SectionContainer>
  );
}
