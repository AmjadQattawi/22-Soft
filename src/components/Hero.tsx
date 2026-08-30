import image from "../assets/image.png"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#1e3a5f] text-white py-20 px-8 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full">
            ✦ Smart Jewelry Management
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Precision ERP Built for the Gold Industry <span className="text-[#f07c1e]">22-Gold DX</span>
          </h1> 

          <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
            Take full control of your gold trade. Seamlessly manage karat
            weights, real-time inventory, financial operations, and POS billing
            in a single platform
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="bg-[#f07c1e] hover:bg-[#d96b14] text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-orange-500/20 transition-all"
            >
              Request a Demo
            </a>
            <a
              href="#services"
              className="border border-slate-600 hover:border-slate-400 text-slate-200 hover:text-white px-6 py-3.5 rounded-xl font-medium transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-blue-950">
            <img
              src={image}
              alt="22-Soft ERP Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
