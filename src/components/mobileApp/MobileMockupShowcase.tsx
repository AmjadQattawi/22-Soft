import { motion } from "framer-motion";
import mobileCatalog from "../../assets/mobile/mobile-catalog.jpg";
import mobilePos from "../../assets/mobile/mobile-pos.jpg";
import mobilePrimary from "../../assets/mobile/mobilePrimary.jpg";

const devices = [
  {
    id: "left",
    src: mobilePrimary,
    alt: "22-Gold Mobile Dashboard",
    wrapperClass:
      "-mr-8 md:-mr-10 z-10 w-36 md:w-44 scale-90 md:scale-95 opacity-85 hover:opacity-100 hover:z-30 hover:scale-105 shadow-xl",
  },
  {
    id: "center",
    src: mobileCatalog,
    alt: "Jewelry Showcase Catalog",
    wrapperClass:
      "z-20 w-44 md:w-52 shadow-2xl shadow-slate-950/20 hover:scale-105",
  },
  {
    id: "right",
    src: mobilePos,
    alt: "Mobile POS Invoicing",
    wrapperClass:
      "-ml-8 md:-ml-10 z-10 w-36 md:w-44 scale-90 md:scale-95 opacity-85 hover:opacity-100 hover:z-30 hover:scale-105 shadow-xl",
  },
];

export default function MobileMockupShowcase() {
  return (
    <motion.div
      className=" relative flex items-center justify-center pt-8 pb-4 lg:py-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {/* radiant orange circle behaind the phones */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96  bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />

      {/*  3 phones */}
      <div className="relative flex items-center justify-center w-full max-w-lg lg:max-w-xl animate-float">
        {devices.map((device) => (
          <div
            key={device.id}
            className={`relative transition-all duration-500 ${device.wrapperClass}`}
          >
            <div className="bg-slate-900 p-2.5 rounded-[2.5rem] border-4 border-slate-800">
              <div className="relative rounded-4xl overflow-hidden bg-white border border-slate-200 aspect-9/19">
                <img
                  src={device.src}
                  alt={device.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
