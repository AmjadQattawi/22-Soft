import { Link } from "react-router-dom";
import LaptopMockup from "../../assets/hero/DesktopApp.png";
import MobileMockup from "../../assets/hero/MobileApp.png";
import { useTranslation } from "react-i18next";

export default function SlideTwo() {
  const { t } = useTranslation();

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-35 items-center">
      {/* Visual */}
      <div
        dir="ltr"
        className="relative flex items-center justify-center order-2 lg:order-1 scale-130 "
      >
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
      <div className="text-center lg:text-start order-1 lg:order-2">
        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">
          {t("home.hero.slideTwo.label")}
        </span>

        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          <bdi dir="ltr">22-Gold DX</bdi>
          <span className="block text-[#FF8A3D]">
            {t("home.hero.slideTwo.highlight")}
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200">
          {t("home.hero.slideTwo.description")}
        </p>

        <div className="mt-7 flex justify-center lg:justify-start">
          <Link
            to="/22-gold-dx"
            className="inline-flex items-center justify-center bg-[#c94f00] hover:bg-[#ea580c]  rounded-xl px-6 py-3 text-sm sm:text-base font-semibold text-white transition duration-200  hover:-translate-y-0.5"
          >
            {t("home.hero.slideTwo.button")}
          </Link>
        </div>
      </div>
    </div>
  );
}
