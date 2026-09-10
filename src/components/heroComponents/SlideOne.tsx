export default function SlideOne() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center px-4">
      <div className="space-y-6">
        <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#f97316]">
          Jewelry Software Solutions
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          Twenty Two{" "}
          <span className="text-[#f97316]">Programming Solutions</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed text-slate-200">
          Revolutionizing Jewelry Operations with Precision Software Solutions
        </p>

        <div className="pt-2">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl bg-[#f97316] px-6 py-3 text-sm sm:text-base font-semibold text-white transition duration-200 hover:bg-[#ea580c] hover:-translate-y-0.5"
          >
            Explore Products
          </a>
        </div>
      </div>
    </div>
  );
}
