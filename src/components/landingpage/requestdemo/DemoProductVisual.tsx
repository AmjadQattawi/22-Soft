import LaptopMockup from "../../../assets/hero/DesktopApp.png";
import MobileMockup from "../../../assets/hero/MobileApp.png";
import rfidItemLocator from "../../../assets/landing page/rfid_item_locator.png";

export default function DemoProductVisual() {
  return (
    <div className="relative m-3 flex min-h-135 items-center justify-center overflow-hidden rounded-2xl p-10 lg:p-14">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#102b46] via-[#18395b] to-[#234974]" />

      {/* Orange Glow */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Blue Glow */}
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Product Label */}
      <div className="absolute left-7 top-7 z-20 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
          22-Gold DX
        </span>
      </div>

      {/* Devices */}
      <div className="relative z-10 w-full max-w-xl py-10">
        {/* Laptop */}
        <img
          src={LaptopMockup}
          alt="22-Gold DX Desktop Application"
          className="relative z-10 w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.38)] "
        />

        {/* RFID */}
        <img
          src={rfidItemLocator}
          alt="22-Gold DX RFID Smart Inventory"
          className="absolute  bottom-10 z-20 w-[38%] max-w-72 rounded-[11px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] "
        />

        {/* Mobile App */}
        <img
          src={MobileMockup}
          alt="22-Gold DX Mobile Application"
          className="absolute right-1 bottom-13 z-20 w-[25%] max-w-36 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-transform duration-700 "
        />

        <div className="absolute right-8 top-0 z-30 flex items-end transition-transform duration-300 hover:-translate-y-2"></div>
      </div>
    </div>
  );
}
