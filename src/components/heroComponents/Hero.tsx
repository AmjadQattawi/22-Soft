import HeroShowcase from "./HeroShowcase";
import MetricsStrip from "./MetricsStrip";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      // initial={{ opacity: 0, y: 60 }}
      // animate={{ opacity: 1, y: 0 }} 
      // transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      id="home"
      className=" bg-white text-black py-12 md:py-15 animate-fade-up px-6 md:px-12 overflow-hidden"
    >
     
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-1 items-center">
        {/* Text Content col-1*/}
        {/* animate-fade-up css  */}
        <div className="flex flex-col gap-6 ">
          <span className="w-fit px-3.5 py-1.5 text-xs  font-semibold tracking-wide text-[#f97316] bg-[#f97316]/15 border border-[#f97316]/30 rounded-full">
            ✦ Next-Gen Jewelry ERP & POS
          </span>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-black">
            Precision ERP Built for the Gold Industry{" "}
            <span className="text-[#f97316]">22-Gold DX</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
            A specialized solution engineered for jewelry enterprises.
            Seamlessly manage karat purities, pure weights, making charges,
            multi-currency gold positions, and instant POS billing across
            Desktop and Mobile platforms.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#contact"
              className="group relative overflow-hidden bg-[#f97316] hover:bg-[#e06209] text-white px-7 py-3 rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* شريط اللمعة */}
              <span className="absolute top-0 -left-full w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Request a Demo</span>
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl font-medium border border-slate-300 hover:border-slate-400 hover:bg-slate-50 hover:-translate-y-0.5 text-slate-800 transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>
          {/* End col-1*/}


        {/* Mockup Showcase With Img col-2*/}
        <HeroShowcase />
          {/* End col-2 */}


        {/*  */}
        <MetricsStrip/>


      </div>
    </motion.section>
  );
}
