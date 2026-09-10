
import { motion } from "framer-motion";
import { clients } from "./ClientsData";

export default function ClientsSlider() {
  const marqueeList = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden rounded-4xl  p-5  ">
      {/* Left and Right Lateral gradient */}

      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-linear-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-linear-to-l from-white to-transparent" />

      <motion.div
        className="flex w-max items-center gap-8 "
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
            className="relative flex flex-col items-center justify-between w-36 h-32 md:w-44 md:h-40 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-[0_0_30px_rgba(0,0,0,0.12)] transition-all duration-300 p-3 shrink-0 hover:scale-105 cursor-pointer group"
          >
            <div className="flex-1 w-full flex items-center justify-center overflow-hidden">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 md:max-h-16 max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="w-full flex flex-col items-center gap-1 pt-1.5 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-800 group-hover:text-[#f97316] transition-colors text-center truncate max-w-full">
                {client.name}
              </span>

              <span className="inline-block px-2 py-0.5 text-[10px] font-medium text-slate-500 bg-slate-100 rounded-md tracking-wide">
                {client.country}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
