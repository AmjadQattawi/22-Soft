import Mockup from "../../assets/mockup/Mockup.png";
import { motion } from "framer-motion";

export default function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex justify-center items-center animate-fade-up"
    >
      {/* 1. glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400/35 rounded-full blur-[80px] pointer-events-none" />
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/3 w-80 h-80 bg-[#234974]/25 rounded-full blur-[90px] pointer-events-none" /> */}

      {/* 2. Photo container*/}
      <div className="relative w-full max-w-xl lg:max-w-2xl xl:scale-130">

        <img
          src={Mockup}
          alt="22-Gold DX ERP Mockup"
          className="relative z-20 w-full h-auto object-contain drop-shadow-2xl animate-float transition-transform duration-500 hover:scale-[1.03] cursor-pointer"
        />




      </div>
    </motion.div>
  );
}
