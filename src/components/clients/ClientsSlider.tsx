import aliZaher from "../../assets/Customer logos/ALI Zaher Jewellery.jpg";
import asmar from "../../assets/Customer logos/Asmar Jewellery.jpeg";
import eden from "../../assets/Customer logos/EDEN Jewellery.jpg"
import jats from "../../assets/Customer logos/JATS.png";
import oya from "../../assets/Customer logos/Oya Jewellery.jpg";
import waddah from "../../assets/Customer logos/Waddah Hreiz Jewellery.jpg";
import { motion } from "framer-motion";

const clients = [
  { name: "Ali Zaher Jewelry", logo: aliZaher },
  { name: "Asmar Jewellery", logo: asmar },
  { name: "EDEN Jewelry", logo: eden },
  { name: "JATS", logo: jats },
  { name: "OYA Jewellery", logo: oya },
  { name: "Waddah Hreiz Jewelry", logo: waddah },
];

export default function ClientsSlider(){
  const marqueeList = [...clients, ...clients, ...clients, ...clients];

    return(

         <div className="relative w-full overflow-hidden  py-9  ">
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
                className=" relative w-36 h-24 md:w-40 md:h-40 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-[0_0_40px_rgba(0,0,0,0.18)]   transition-all duration-300 flex items-center justify-center p-4 shrink-0 hover:scale-110 cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full w-auto rounded-xl h-auto object-contain  "
                />
              </div>
            ))}
          </motion.div>
        </div>

    )
}