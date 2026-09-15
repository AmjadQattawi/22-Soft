import SectionContainer from "../csscomponents/SectionContainer"
import MobileCapabilities from "./MobileCapabilities";
import MobileMockupShowcase from "./MobileMockupShowcase";

export default function MobileApp() {
  return (
    <SectionContainer id="mobile-app" className="bg-slate-100/70 ">
      <div className=" grid grid-cols-1 min-h-[calc(100vh-20rem)] lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        {/* Left Column: Context & Capabilities */}
        <MobileCapabilities />

        {/* Right Column: Layered 3-Device Mockups */}
        <MobileMockupShowcase />
      </div>
    </SectionContainer>
  );
}
