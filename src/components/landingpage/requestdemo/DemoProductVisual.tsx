import LaptopMockup from "../../../assets/mockup/DesktopApp.png";
import MobileMockup from "../../../assets/mockup/MobileApp.png";
import mobilePos from "../../../assets/mobile/mobile-pos.jpg";

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
          className="relative z-10 w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.38)]"
        />

        {/* POS Mobile */}
        <div className="absolute -left-1 bottom-15 z-20 w-[22%] max-w-32 transition-transform duration-300 hover:-translate-y-2">
          <div className="relative rounded-[22px] border-[5px] border-slate-950 bg-slate-950 p-0.5 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">

            <div className="absolute left-1/2 top-1.5 z-30 h-0.75  w-7 -translate-x-1/2 rounded-full bg-slate-600" />

            <img
              src={mobilePos}
              alt="22-Gold DX Mobile POS"
              className="aspect-9/18 w-full rounded-[15px] object-cover object-top"
            />

          </div>
        </div>

        {/* Mobile App */}
        <img
          src={MobileMockup}
          alt="22-Gold DX Mobile Application"
          className="absolute -bottom-9 right-1 z-20 w-[25%] max-w-36 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-2"
        />

      </div>
    </div>
  );
}