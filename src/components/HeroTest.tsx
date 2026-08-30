import im from "../assets/image.png";

export default function HeroTest() {
  return (
    <section className=" bg-[#1e3a5f] text-white  py-20 px-8 md:px-16 ">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* col1 */}
        <div className="flex flex-col text-left gap-6 items-start ">
          <span className="  px-3.5 py-1.5 text-xs font-semibold tracking-wide text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full">
            ✦ Smart Jewelry Management
          </span>
          <h1 className="text-4xl md:text-5xl  lg:text-6xl font-extrabold  leading-tight tracking-tight">
            Precision ERP Built for the Gold Industry{" "}
            <span className="text-[#f07c1e]">22-Gold DX</span>
          </h1>
          <p className="leading-relaxed text-slate-300 text-base">
            Take full control of your gold trade. Seamlessly manage karat
            weights, real-time inventory, financial operations, and POS billing
            in a single platform</p>
          <a
            href="#contact"
            className="bg-[#f07c1e] hover:bg-[#d96b14] text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-orange-500/20 transition-all"
          >
            Request a Demo
          </a>
        </div>

        {/* col2 */}
        <div className="flex justify-center items-center ">
          <img src={im} alt="ERP-IMG" />
        </div>
      </div>
    </section>
  );
}
