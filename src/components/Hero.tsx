import image from "../assets/image.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#234974] text-white py-20 px-8 md:px-16 overflow-hidden rounded-2xl"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <span className="inline-block px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#43923d] bg-[#43923d]/10 border border-[#43923d]/30 rounded-full">
            ✦ Smart Jewelry Management
          </span>

          <h1 className="text-4xl    md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Precision ERP Built for the Gold Industry{" "}
            <span className="lg:text-5xl text-[#f97316]">22-Gold DX</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed">
            Take full control of your gold trade. Seamlessly manage karat
            weights, real-time inventory, financial operations, and POS billing
            in a single platform
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="bg-[#43923d] hover:bg-[#347430] text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-green-500/20 transition-all"
            >
              Contact Us
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl font-medium border border-white/20 hover:bg-white/10 text-white transition-colors"
            >
              Explore Features
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
