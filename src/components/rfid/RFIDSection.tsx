import { Link } from "react-router-dom";
import SectionContainer from "../csscomponents/SectionContainer";

import rfidReader from "../../assets/landing page/rfid_item_locator.png";
import rfidSmartInventory from "../../assets/landing page/rfid/rfid_smart_inventory.jpeg";

export default function RFIDSection() {
  return (
    <SectionContainer id="rfid" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* RFID Visual */}
        <div className="relative flex min-h-115 items-center justify-center">


          {/* Orange Glow */}
          <div className="absolute left-[18%] top-[20%] h-52 w-52 rounded-full bg-orange-200/40 blur-3xl" />

          {/* RFID Reader */}
          <img
            src={rfidReader}
            alt="RFID jewelry inventory reader integrated with 22-Gold DX"
            className="absolute left-[5%] top-1/2 z-10 w-[68%] max-w-100 -translate-y-1/2 object-contain drop-shadow-[0_30px_40px_rgba(15,23,42,0.22)] 
            transition-transform duration-500 hover:-translate-y-[52%]"
          />

          {/* Smart Inventory Phone */}
          <div
            className="absolute  bottom-[3%] right-[5%] z-20
      h-85 w-45   rounded-[34px]
      border-[6px]
      border-slate-900
      bg-slate-900
      p-0.75
      shadow-[0_30px_45px_rgba(15,23,42,0.28)]
      transition-transform
      duration-500
      hover:-translate-y-2
    "
          >
            {/* Speaker */}
            <div className="absolute left-1/2 top-1.75 z-30 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-600" />

            {/* App Screenshot */}
            <img
              src={rfidSmartInventory}
              alt="22-Gold DX RFID smart inventory interface"
              className="h-full w-full rounded-[25px] object-cover object-top"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c94f00] md:text-sm">
            RFID Jewelry Technology
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#18395b] md:text-4xl">
            Smarter Inventory
            <span className="block text-[#c94f00]">Powered by RFID</span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-600">
            Speed up jewelry inventory checks with RFID technology integrated
            with 22-Gold DX. Locate tagged items, identify jewelry instantly,
            and keep physical stock connected with your system.
          </p>

          {/* Benefits */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold text-[#18395b]">Faster Inventory</h3>
              <p className="mt-1 text-sm text-slate-600">
                Scan multiple tagged items efficiently.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-semibold text-[#18395b]">Item Locator</h3>
              <p className="mt-1 text-sm text-slate-600">
                Quickly locate specific jewelry pieces.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7">
            <Link
              to="/22-gold-dx"
              className="inline-flex items-center justify-center rounded-xl bg-[#c2410c] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea580c]"
            >
              Explore RFID Solutions
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
