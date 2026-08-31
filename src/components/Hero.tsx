import Mockup from "../assets/othter/Mockup.png"

export default function Hero() {
  return (
    <section
      id="home"
      className=" bg-[#234974]/90 text-white py-12 md:py-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* Text Content col-1*/}
        <div className="flex flex-col gap-6 ">
          
          {/* Badge */}
          <span className=" w-fit  px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#43923d] bg-[#43923d]/15 border border-[#43923d]/30 rounded-full">
            ✦ Next-Gen Jewelry ERP & POS
          </span>

          
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
            Precision ERP Built for the Gold Industry{" "}
            <span className="text-[#f97316]">22-Gold DX</span>
          </h1>

          {/* Description */}
          <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-xl">
            A specialized solution engineered for jewelry enterprises. Seamlessly manage karat purities, pure weights, making charges, multi-currency gold positions, and instant POS billing across Desktop and Mobile platforms.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#contact"
              className="bg-[#43923d] hover:bg-[#347430] text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-950/30 transition-all"
            >
              Request a Demo
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl font-medium border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              Explore Features
            </a>
          </div>
        </div>

        {/* Mockup Showcase col-2*/}
        <div className="relative flex justify-center items-center">
          <img
            src={Mockup}
            alt="22-Gold DX ERP Mockup"
            className="w-full  max-w-lg lg:max-w-none h-auto object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}