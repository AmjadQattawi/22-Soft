
import MobileCapabilities from "./MobileCapabilities";
import MobileMockupShowcase from "./MobileMockupShowcase";



export default function MobileApp() {
  return (
    <section
      id="mobile-app"
      className="relative bg-slate-100/70 px-6 md:px-12 py-4 lg:py-6 scroll-mt-20 overflow-hidden border-y border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Column: Context & Capabilities */}
       <MobileCapabilities />



        {/* Right Column: Layered 3-Device Mockups */}
       <MobileMockupShowcase />
        
      </div>
    </section>
  );
}
