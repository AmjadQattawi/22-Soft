
import SectionContainer from "../cssComponents/SectionContainer";
import MobileCapabilities from "./MobileCapabilities";
import MobileMockupShowcase from "./MobileMockupShowcase";



export default function MobileApp() {
  return (
    <SectionContainer
      id="mobile-app"
      className="bg-white "
      >
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

        {/* Left Column: Context & Capabilities */}
       <MobileCapabilities />


        {/* Right Column: Layered 3-Device Mockups */}
       <MobileMockupShowcase />
        
      </div>
    </SectionContainer>
  );
}
