// ClientsPreview.tsx

import { Link } from "react-router-dom";
import SectionContainer from "../../csscomponents/SectionContainer";
import ClientsSlider from "../ClientsSlider";

export default function ClientsPreview() {
  return (
    <SectionContainer
      id="clients-preview"
      className="bg-slate-100/40"
      divclassName="gap-8 lg:gap-10"
    >
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-sm font-semibold uppercase tracking-widest text-[#f97316]">
          TRUSTED PARTNERSHIPS
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#18395b]">
          Trusted by Jewelry Businesses
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Discover some of the businesses that rely on 22-Soft solutions.
        </p>
      </div>

      <ClientsSlider />

      <div className="flex justify-center">
        <Link
          to="/clients"
          className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ea6c0a]"
        >
          View All Clients
        </Link>
      </div>
    </SectionContainer>
  );
}