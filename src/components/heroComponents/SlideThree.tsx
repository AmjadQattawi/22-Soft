import zebraRfidReader from "../../assets/landing page/rfid_item_locator.png";
import rfidSmartInventory from "../../assets/landing page/rfid/rfid_smart_inventory.jpeg";
import { useTranslation } from "react-i18next";

export default function SlideThree() {
  const { t } = useTranslation();

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Content */}
      <div className="text-center lg:text-start">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8A3D] md:text-sm">
          {t("home.hero.slideThree.label")}
        </span>

        <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t("home.hero.slideThree.title")}
          <span className="block text-[#FF8A3D]">
            {t("home.hero.slideThree.highlight")}
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
          {t("home.hero.slideThree.description")}
        </p>

        <div className="mt-7 flex justify-center lg:justify-start ">
          <a
            href="/22-gold-dx#rfid"
            className="inline-flex items-center justify-center rounded-xl bg-[#c94f00] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea580c] sm:text-base"
          >
            {t("home.hero.slideThree.button")}
          </a>
        </div>
      </div>

      {/* RFID Visual */}
      <div   dir="ltr" className="relative flex h-100 items-center justify-center scale-120 animate-float">
        {/* Glow */}
        <div className="absolute h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

        {/* Zebra RFID Reader */}
        <img
          src={zebraRfidReader}
          alt="Zebra RFID Reader"
          className="absolute left-[8%] top-1/2 z-10 w-[55%] max-w-80 -translate-y-1/2 object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
        />

        {/* Smart Inventory Phone */}
        <div className="absolute right-[8%] top-1/2 z-20 h-85 w-45 -translate-y-1/2 rounded-[34px] border-[6px] border-slate-900 bg-slate-900 p-0.75 shadow-[0_25px_40px_rgba(0,0,0,0.35)]">
          {/* Speaker */}
          <div className="absolute left-1/2 top-1.75 z-30 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-600" />

          <img
            src={rfidSmartInventory}
            alt="22-Gold DX RFID Smart Inventory"
            className="h-full w-full rounded-[25px] object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}