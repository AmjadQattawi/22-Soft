
import { motion } from "framer-motion";
import { clients } from "./ClientsData";
export default function ClientsSlider() {
  const marqueeList = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden ">
      {/* Side Gradients */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-linear-to-r from-white to-transparent md:w-28" />

      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-linear-to-l from-white to-transparent md:w-28" />

      <motion.div
        className="flex w-max items-center gap-5"
        animate={{ x: ["0%", "-25%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {marqueeList.map((client, index) => (
          <div
            key={index}
            className="group flex h-24 w-28 shrink-0 cursor-pointer flex-col items-center justify-between rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-md md:h-28 md:w-32"
          >
            {/* Logo */}
            <div className="flex w-full flex-1 items-center justify-center overflow-hidden">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-9 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105 md:max-h-11"
              />
            </div>

            {/* Client Info */}
            <div className="flex w-full flex-col items-center gap-1 border-t border-slate-100 pt-1.5">
              <span className="max-w-full truncate text-center text-[11px] font-bold text-slate-700 transition-colors group-hover:text-[#f97316]">
                {client.name}
              </span>

              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-500">
                {client.country}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}