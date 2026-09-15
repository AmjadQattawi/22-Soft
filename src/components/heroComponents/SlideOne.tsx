import CompanyVisual from "../../assets/hero/CompanyVisual.webp";

export default function SlideOne() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Content */}
      <div className="text-center lg:text-left">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF8A3D] md:text-sm">
          Jewelry Software Solutions
        </span>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Twenty Two
          <span className="block text-[#FF8A3D]">Programming Solutions</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Revolutionizing Jewelry Operations with Precision Software Solutions
        </p>

        <div className="mt-7 flex justify-center lg:justify-start">
          <a
            href="/22-gold-dx"
            className="inline-flex items-center justify-center rounded-xl bg-[#c94f00] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#ea580c] sm:text-base"
          >
            Explore Products
          </a>
        </div>
      </div>  

      {/* Company Visual */}
      <div className="flex items-center justify-center">
        <img
          src={CompanyVisual}
          fetchPriority="high"
          alt="22-Soft Software Solutions"
          className="w-full max-w-2xl object-contain"
        />
      </div>
    </div>
  );
}
