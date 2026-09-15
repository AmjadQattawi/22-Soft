import { Link } from "react-router-dom";
import LaptopMockup from "../../assets/hero/DesktopApp.png";
import MobileMockup from "../../assets/hero/MobileApp.png";

export default function SlideTwo() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30 items-center">
      {/* Visual */}
      <div className="relative flex items-center justify-center order-2 lg:order-1 scale-130 ">
        <div className="relative w-full max-w-xl lg:max-w-2xl ">
          <img
            src={LaptopMockup}
            alt="22-Gold DX Desktop Application"
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
          />
          <img
            src={MobileMockup}
            alt="22-Gold DX Mobile Application"
            className="absolute -bottom-6 right-6 sm:right-10 w-[28%] max-w-42.5 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center lg:text-left order-1 lg:order-2">
        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">
          Jewelry ERP Solution
        </span>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          <span className="text-[#FF8A3D]">22-Gold DX</span>
          <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl">
            Specialized Software Solutions
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-200 leading-relaxed">
          Easy to use, user-friendly applications built for modern jewelry
          business operations.
        </p>

        <div className="mt-7 flex justify-center lg:justify-start">
          <Link
            to="/22-gold-dx"
            className="inline-flex items-center justify-center bg-[#c94f00] hover:bg-[#ea580c]  rounded-xl px-6 py-3 text-sm sm:text-base font-semibold text-white transition duration-200  hover:-translate-y-0.5"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
